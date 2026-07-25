-- RLS fail-closed backstop (SECURITY_PRIVACY §2): every identity/app/analytics table gets
-- RLS enabled with a single permissive policy for the NAMED runtime roles. Verb control stays
-- with grants; any unlisted role (e.g. Supabase's anon/authenticated, inert while the Data API
-- is disabled) is denied by RLS even if a grant ever appears by mistake.
-- Runs after each table-creating migration via re-execution (idempotent).

CREATE OR REPLACE FUNCTION app.apply_rls_backstop() RETURNS void LANGUAGE plpgsql AS $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT schemaname, tablename FROM pg_tables
    WHERE schemaname IN ('identity','app','analytics')
  LOOP
    EXECUTE format('ALTER TABLE %I.%I ENABLE ROW LEVEL SECURITY', r.schemaname, r.tablename);
    IF NOT EXISTS (
      SELECT 1 FROM pg_policies
      WHERE schemaname = r.schemaname AND tablename = r.tablename AND policyname = 'runtime_roles'
    ) THEN
      EXECUTE format(
        'CREATE POLICY runtime_roles ON %I.%I FOR ALL TO web_backend, worker, worker_notify, admin_ops, analyst_ro, definer_owner USING (true) WITH CHECK (true)',
        r.schemaname, r.tablename);
    END IF;
  END LOOP;
END $$;

SELECT app.apply_rls_backstop();
