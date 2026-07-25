-- G0: roles, schemas, hardening defaults (ACCESS_CONTROL_MATRIX §2-3; audit rules IMPLEMENTATION_PLAN §0)
-- Irreversible group (roles/schemas): recreate-only. Local passwords are dev-only; production uses platform secrets.

DO $$ BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'definer_owner') THEN
    CREATE ROLE definer_owner NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'web_backend') THEN
    CREATE ROLE web_backend LOGIN PASSWORD 'localdev';
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'worker') THEN
    CREATE ROLE worker LOGIN PASSWORD 'localdev';
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'worker_notify') THEN
    CREATE ROLE worker_notify LOGIN PASSWORD 'localdev';
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'admin_ops') THEN
    CREATE ROLE admin_ops LOGIN PASSWORD 'localdev';
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'analyst_ro') THEN
    CREATE ROLE analyst_ro LOGIN PASSWORD 'localdev';
  END IF;
END $$;

CREATE SCHEMA IF NOT EXISTS identity AUTHORIZATION definer_owner;
CREATE SCHEMA IF NOT EXISTS app;
CREATE SCHEMA IF NOT EXISTS analytics;

-- Future objects inherit nothing (audit catch: explicit default-privilege lockdown).
ALTER DEFAULT PRIVILEGES IN SCHEMA app REVOKE ALL ON TABLES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA app REVOKE ALL ON FUNCTIONS FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA identity REVOKE ALL ON TABLES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA identity REVOKE ALL ON FUNCTIONS FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA analytics REVOKE ALL ON TABLES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA analytics REVOKE ALL ON FUNCTIONS FROM PUBLIC;

GRANT USAGE ON SCHEMA app TO web_backend, worker, worker_notify, admin_ops, analyst_ro;
GRANT USAGE ON SCHEMA analytics TO web_backend, worker, analyst_ro;
GRANT USAGE ON SCHEMA identity TO definer_owner;
GRANT USAGE ON SCHEMA app, analytics TO definer_owner;
-- identity schema: USAGE lets runtime roles *name* the SECURITY DEFINER functions;
-- it grants no table access — identity tables carry no grants for these roles + RLS backstop.
GRANT USAGE ON SCHEMA identity TO web_backend, worker;
