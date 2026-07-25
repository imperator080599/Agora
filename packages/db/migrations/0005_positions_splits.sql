-- G5: append-only positions, projections, split counters, record_position()
-- (DATA_MODEL §2-3; PRD §6-7; TEST_PLAN T-AO / T-CR-10)

CREATE TABLE app.position_event (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid NOT NULL,
  claim_id uuid NOT NULL REFERENCES app.claim(id),
  kind app.position_kind_t NOT NULL,
  stance app.stance_t,
  prior_stance app.stance_t,
  pre_reveal boolean NOT NULL,
  surface text NOT NULL DEFAULT 'claim_page',
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (
    (kind = 'created'   AND stance IS NOT NULL AND prior_stance IS NULL) OR
    (kind = 'changed'   AND stance IS NOT NULL AND prior_stance IS NOT NULL AND stance <> prior_stance) OR
    (kind = 'retracted' AND stance IS NULL)
  )
);
CREATE INDEX position_event_actor_idx ON app.position_event (actor_id, created_at DESC);
CREATE INDEX position_event_claim_idx ON app.position_event (claim_id, created_at DESC);

CREATE TABLE app.position_current (
  actor_id uuid NOT NULL,
  claim_id uuid NOT NULL REFERENCES app.claim(id),
  stance app.stance_t NOT NULL,
  first_event_id uuid NOT NULL REFERENCES app.position_event(id),
  last_event_id uuid NOT NULL REFERENCES app.position_event(id),
  first_at timestamptz NOT NULL,
  changed_count int NOT NULL DEFAULT 0,
  last_change_at timestamptz,
  PRIMARY KEY (actor_id, claim_id)
);

CREATE TABLE app.split_current (
  claim_id uuid PRIMARY KEY REFERENCES app.claim(id),
  agree_n int NOT NULL DEFAULT 0 CHECK (agree_n >= 0),
  disagree_n int NOT NULL DEFAULT 0 CHECK (disagree_n >= 0),
  complicated_n int NOT NULL DEFAULT 0 CHECK (complicated_n >= 0),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE app.split_snapshot (
  claim_id uuid NOT NULL REFERENCES app.claim(id),
  snapped_on date NOT NULL,
  agree_n int NOT NULL, disagree_n int NOT NULL, complicated_n int NOT NULL,
  kind text NOT NULL DEFAULT 'daily',
  PRIMARY KEY (claim_id, snapped_on, kind)
);

-- === Append-only protection: trigger + revoked UPDATE/DELETE (defense in depth) ===
CREATE FUNCTION app.append_only_guard() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN RAISE EXCEPTION 'append_only_violation on %.%', TG_TABLE_SCHEMA, TG_TABLE_NAME; END $$;
CREATE TRIGGER position_event_append_only
  BEFORE UPDATE OR DELETE ON app.position_event
  FOR EACH ROW EXECUTE FUNCTION app.append_only_guard();
CREATE TRIGGER split_snapshot_append_only
  BEFORE UPDATE OR DELETE ON app.split_snapshot
  FOR EACH ROW EXECUTE FUNCTION app.append_only_guard();

-- === The single write path (SECURITY DEFINER; ACCESS_CONTROL §2 rules) ===
CREATE FUNCTION app.record_position(
  p_actor uuid, p_claim uuid, p_stance app.stance_t, p_pre_reveal boolean, p_surface text
) RETURNS uuid LANGUAGE plpgsql VOLATILE SECURITY DEFINER SET search_path = '' AS $$
DECLARE
  v_cur app.position_current%ROWTYPE;
  v_event_id uuid;
  v_state app.claim_state_t;
BEGIN
  SELECT state INTO v_state FROM app.claim WHERE id = p_claim;
  IF v_state IS NULL OR v_state NOT IN ('live','archived') THEN
    RAISE EXCEPTION 'CLAIM_NOT_OPEN';
  END IF;
  IF EXISTS (SELECT 1 FROM app.profile WHERE actor_id = p_actor AND deleted_at IS NOT NULL) THEN
    RAISE EXCEPTION 'ACTOR_DELETED';
  END IF;

  -- Serialize per (actor, claim); take split row lock second, in fixed order.
  SELECT * INTO v_cur FROM app.position_current
    WHERE actor_id = p_actor AND claim_id = p_claim FOR UPDATE;
  PERFORM 1 FROM app.split_current WHERE claim_id = p_claim FOR UPDATE;
  IF NOT FOUND THEN
    INSERT INTO app.split_current (claim_id) VALUES (p_claim) ON CONFLICT DO NOTHING;
    PERFORM 1 FROM app.split_current WHERE claim_id = p_claim FOR UPDATE;
  END IF;

  IF v_cur.actor_id IS NULL THEN
    INSERT INTO app.position_event (actor_id, claim_id, kind, stance, prior_stance, pre_reveal, surface)
      VALUES (p_actor, p_claim, 'created', p_stance, NULL, p_pre_reveal, p_surface)
      RETURNING id INTO v_event_id;
    INSERT INTO app.position_current (actor_id, claim_id, stance, first_event_id, last_event_id, first_at)
      VALUES (p_actor, p_claim, p_stance, v_event_id, v_event_id, now());
  ELSE
    IF v_cur.stance = p_stance THEN RAISE EXCEPTION 'ALREADY_POSITIONED'; END IF;
    IF v_cur.last_change_at IS NOT NULL AND v_cur.last_change_at > now() - interval '24 hours' THEN
      RAISE EXCEPTION 'RATE_LIMITED_24H';
    END IF;
    INSERT INTO app.position_event (actor_id, claim_id, kind, stance, prior_stance, pre_reveal, surface)
      VALUES (p_actor, p_claim, 'changed', p_stance, v_cur.stance, false, p_surface)
      RETURNING id INTO v_event_id;
    UPDATE app.position_current SET stance = p_stance, last_event_id = v_event_id,
      changed_count = changed_count + 1, last_change_at = now()
      WHERE actor_id = p_actor AND claim_id = p_claim;
    -- decrement old stance
    UPDATE app.split_current SET
      agree_n = agree_n - (v_cur.stance = 'agree')::int,
      disagree_n = disagree_n - (v_cur.stance = 'disagree')::int,
      complicated_n = complicated_n - (v_cur.stance = 'complicated')::int,
      updated_at = now()
      WHERE claim_id = p_claim;
  END IF;

  UPDATE app.split_current SET
    agree_n = agree_n + (p_stance = 'agree')::int,
    disagree_n = disagree_n + (p_stance = 'disagree')::int,
    complicated_n = complicated_n + (p_stance = 'complicated')::int,
    updated_at = now()
    WHERE claim_id = p_claim;

  RETURN v_event_id;
END $$;
ALTER FUNCTION app.record_position(uuid, uuid, app.stance_t, boolean, text) OWNER TO definer_owner;
REVOKE EXECUTE ON FUNCTION app.record_position(uuid, uuid, app.stance_t, boolean, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION app.record_position(uuid, uuid, app.stance_t, boolean, text) TO web_backend, worker;

-- Reconciliation (nightly job + T-AO-5): recompute counters from events.
CREATE FUNCTION app.reconcile_split(p_claim uuid) RETURNS boolean
LANGUAGE plpgsql VOLATILE SECURITY DEFINER SET search_path = '' AS $$
DECLARE v_a int; v_d int; v_c int; v_drift boolean;
BEGIN
  SELECT count(*) FILTER (WHERE stance='agree'),
         count(*) FILTER (WHERE stance='disagree'),
         count(*) FILTER (WHERE stance='complicated')
    INTO v_a, v_d, v_c FROM app.position_current WHERE claim_id = p_claim;
  SELECT (agree_n, disagree_n, complicated_n) IS DISTINCT FROM (v_a, v_d, v_c)
    INTO v_drift FROM app.split_current WHERE claim_id = p_claim;
  UPDATE app.split_current SET agree_n=v_a, disagree_n=v_d, complicated_n=v_c, updated_at=now()
    WHERE claim_id = p_claim;
  RETURN coalesce(v_drift, false);
END $$;
ALTER FUNCTION app.reconcile_split(uuid) OWNER TO definer_owner;
REVOKE EXECUTE ON FUNCTION app.reconcile_split(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION app.reconcile_split(uuid) TO worker;

-- Grants: runtime roles read events/projections; writes ONLY via the definer functions.
GRANT SELECT ON app.position_event, app.position_current, app.split_current, app.split_snapshot
  TO web_backend, worker, admin_ops, analyst_ro;
GRANT INSERT ON app.split_snapshot TO worker;
GRANT SELECT, INSERT, UPDATE, DELETE ON app.position_current, app.split_current TO definer_owner;
GRANT SELECT, INSERT ON app.position_event TO definer_owner;
GRANT SELECT ON app.claim, app.profile TO definer_owner;

-- Re-apply RLS backstop to the new tables.
SELECT app.apply_rls_backstop();
