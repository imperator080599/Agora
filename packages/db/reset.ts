// Local development only: drop the application schemas so `db:migrate` can rebuild from zero.
// Refuses to run against anything but a local database — production resets are never a script.
import pg from "pg";

const url = process.env.DATABASE_URL_MIGRATOR;
if (!url) throw new Error("DATABASE_URL_MIGRATOR not set");
if (!/localhost|127\.0\.0\.1|host=\/tmp/.test(url)) {
  throw new Error("db:reset refuses to run against a non-local database");
}

const c = new pg.Client({ connectionString: url });
await c.connect();
await c.query(`DROP SCHEMA IF EXISTS app, identity, analytics CASCADE`);
await c.query(`DROP TABLE IF EXISTS public.schema_migrations`);
await c.end();
console.log("dropped app/identity/analytics schemas");
