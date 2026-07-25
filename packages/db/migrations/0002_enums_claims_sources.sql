-- G2-G4 core: enums, sources, claims (DATA_MODEL §1). Subset sufficient for M1-M2; later groups extend.

CREATE TYPE app.domain_t   AS ENUM ('economics','business','tech_ai','geopolitics');
CREATE TYPE app.stance_t   AS ENUM ('agree','disagree','complicated');
CREATE TYPE app.claim_state_t AS ENUM ('candidate','review_required','approved','scheduled','live','archived','rejected','withdrawn');
CREATE TYPE app.claim_type_t  AS ENUM ('news','evergreen');
CREATE TYPE app.claim_tier_t  AS ENUM ('standard','conflict');
CREATE TYPE app.position_kind_t AS ENUM ('created','changed','retracted');
CREATE TYPE app.arg_side_t  AS ENUM ('for','against');

CREATE TABLE app.source (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  publisher text UNIQUE NOT NULL,
  feed_url text,
  origin_region text NOT NULL DEFAULT 'global',
  fetch_policy text NOT NULL DEFAULT 'rss_only' CHECK (fetch_policy IN ('rss_only','fetch_allowed','excerpt_only')),
  active boolean NOT NULL DEFAULT true,
  added_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE app.source_document (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid NOT NULL REFERENCES app.source(id),
  canonical_url text UNIQUE NOT NULL,
  title text NOT NULL,
  published_at timestamptz,
  fetched_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE app.claim (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  sentence text NOT NULL,
  domain app.domain_t NOT NULL,
  type app.claim_type_t NOT NULL DEFAULT 'news',
  tier app.claim_tier_t NOT NULL DEFAULT 'standard',
  state app.claim_state_t NOT NULL DEFAULT 'candidate',
  flagship_day date,
  published_at timestamptz,
  live_until timestamptz,
  archived_at timestamptz,
  withdrawn_at timestamptz,
  withdrawal_reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX claim_flagship_day_uniq ON app.claim (flagship_day) WHERE flagship_day IS NOT NULL;
CREATE INDEX claim_state_pub_idx ON app.claim (state, published_at DESC);

-- Claim sentence is immutable after publication (PRD §5.6 bright line): trigger guard.
CREATE FUNCTION app.claim_sentence_immutable() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF OLD.published_at IS NOT NULL AND NEW.sentence IS DISTINCT FROM OLD.sentence THEN
    RAISE EXCEPTION 'claim sentence is immutable after publication';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER claim_sentence_immutable BEFORE UPDATE ON app.claim
  FOR EACH ROW EXECUTE FUNCTION app.claim_sentence_immutable();

CREATE TABLE app.claim_version (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  claim_id uuid NOT NULL REFERENCES app.claim(id),
  version_no int NOT NULL,
  change_kind text NOT NULL DEFAULT 'initial' CHECK (change_kind IN ('initial','correction','source_change')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (claim_id, version_no)
);

CREATE TABLE app.context_bullet (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  claim_version_id uuid NOT NULL REFERENCES app.claim_version(id),
  ord int NOT NULL,
  text text NOT NULL,
  UNIQUE (claim_version_id, ord)
);

CREATE TABLE app.bullet_source (
  bullet_id uuid NOT NULL REFERENCES app.context_bullet(id),
  source_document_id uuid NOT NULL REFERENCES app.source_document(id),
  PRIMARY KEY (bullet_id, source_document_id)
);

-- Minimal curated-argument subset (full argument system arrives in G8/M5).
-- Justified now: PRD §5 requires seeded debate maps + teaser rows at publication.
CREATE TABLE app.argument (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  claim_id uuid NOT NULL REFERENCES app.claim(id),
  side app.arg_side_t NOT NULL,
  author_actor_id uuid,
  curated boolean NOT NULL DEFAULT false,
  curated_attribution text,
  curated_source_document_id uuid REFERENCES app.source_document(id),
  text varchar(280) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CHECK ((curated AND author_actor_id IS NULL AND curated_attribution IS NOT NULL)
      OR (NOT curated AND author_actor_id IS NOT NULL))
);
CREATE INDEX argument_claim_idx ON app.argument (claim_id, side) WHERE deleted_at IS NULL;

GRANT SELECT ON app.source, app.source_document, app.claim, app.claim_version,
  app.context_bullet, app.bullet_source, app.argument
  TO web_backend, worker, admin_ops, analyst_ro;
GRANT INSERT, UPDATE ON app.claim, app.claim_version, app.context_bullet TO worker, admin_ops;
GRANT INSERT ON app.source, app.source_document, app.bullet_source, app.argument TO worker, admin_ops;
