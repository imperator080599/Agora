// Web-tier pool: connects as web_backend ONLY (ACCESS_CONTROL §3). No service-role key,
// no migrator credentials, no superuser — anything this role can't do, the web app can't do.
import pg from "pg";

let pool: pg.Pool | undefined;

export function db(): pg.Pool {
  if (!pool) {
    const url = process.env.DATABASE_URL_WEB;
    if (!url) throw new Error("DATABASE_URL_WEB is not set");
    pool = new pg.Pool({ connectionString: url, max: 5 });
  }
  return pool;
}

export function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}
