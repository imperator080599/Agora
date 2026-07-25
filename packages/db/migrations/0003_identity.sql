-- G1: identity boundary (DATA_MODEL §0; ACCESS_CONTROL §2).
-- auth_user_id comes from the auth provider (Supabase Auth in production; dev-auth locally).
-- actor_id is pseudonymous and is the ONLY id the app/analytics schemas ever see.

CREATE TABLE identity.actor_map (
  auth_user_id uuid PRIMARY KEY,
  actor_id uuid UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE identity.pseudonym (
  actor_id uuid PRIMARY KEY,
  name text UNIQUE NOT NULL,
  changed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- app.profile lives on the opinion side, keyed by actor_id only (no FK across the boundary — audit rule 7).
CREATE TABLE app.profile (
  actor_id uuid PRIMARY KEY,
  display_name text UNIQUE NOT NULL,
  arenas app.domain_t[] NOT NULL DEFAULT '{}',
  is_internal boolean NOT NULL DEFAULT false,
  quarantine_until timestamptz,
  joined_month text NOT NULL,
  deleted_at timestamptz
);
GRANT SELECT ON app.profile TO web_backend, worker, worker_notify, admin_ops, analyst_ro;
GRANT UPDATE (arenas) ON app.profile TO web_backend;

-- SECURITY DEFINER functions: owner definer_owner, empty search_path, schema-qualified,
-- EXECUTE revoked from PUBLIC then granted narrowly (ACCESS_CONTROL §2 rules 1-4).

CREATE FUNCTION identity.resolve_actor(p_auth_user_id uuid)
RETURNS uuid LANGUAGE sql STABLE SECURITY DEFINER SET search_path = '' AS $$
  SELECT actor_id FROM identity.actor_map WHERE auth_user_id = p_auth_user_id
$$;
ALTER FUNCTION identity.resolve_actor(uuid) OWNER TO definer_owner;
REVOKE EXECUTE ON FUNCTION identity.resolve_actor(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION identity.resolve_actor(uuid) TO web_backend, worker;

CREATE FUNCTION identity.register_actor(p_auth_user_id uuid, p_pseudonym text)
RETURNS uuid LANGUAGE plpgsql VOLATILE SECURITY DEFINER SET search_path = '' AS $$
DECLARE v_actor uuid;
BEGIN
  IF p_pseudonym !~ '^[a-z0-9_]{3,24}$' THEN
    RAISE EXCEPTION 'invalid pseudonym';
  END IF;
  SELECT actor_id INTO v_actor FROM identity.actor_map WHERE auth_user_id = p_auth_user_id;
  IF v_actor IS NOT NULL THEN RETURN v_actor; END IF;
  INSERT INTO identity.actor_map (auth_user_id) VALUES (p_auth_user_id) RETURNING actor_id INTO v_actor;
  INSERT INTO identity.pseudonym (actor_id, name) VALUES (v_actor, p_pseudonym);
  INSERT INTO app.profile (actor_id, display_name, joined_month)
    VALUES (v_actor, p_pseudonym, to_char(now(), 'YYYY-MM'));
  RETURN v_actor;
END $$;
ALTER FUNCTION identity.register_actor(uuid, text) OWNER TO definer_owner;
REVOKE EXECUTE ON FUNCTION identity.register_actor(uuid, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION identity.register_actor(uuid, text) TO web_backend;

-- definer_owner needs the underlying privileges its function bodies use:
GRANT SELECT, INSERT ON identity.actor_map, identity.pseudonym TO definer_owner;
GRANT INSERT ON app.profile TO definer_owner;
