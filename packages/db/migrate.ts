// Migration runner (migrator role). Applies packages/db/migrations in filename order, once each.
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const dir = join(dirname(fileURLToPath(import.meta.url)), "migrations");
const url = process.env.DATABASE_URL_MIGRATOR;
if (!url) throw new Error("DATABASE_URL_MIGRATOR not set");

const client = new pg.Client({ connectionString: url });
await client.connect();
await client.query(
  `CREATE TABLE IF NOT EXISTS public.schema_migrations (name text PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now())`,
);
const applied = new Set(
  (await client.query(`SELECT name FROM public.schema_migrations`)).rows.map((r) => r.name),
);
for (const file of readdirSync(dir).filter((f) => f.endsWith(".sql")).sort()) {
  if (applied.has(file)) continue;
  const sql = readFileSync(join(dir, file), "utf8");
  console.log(`applying ${file}`);
  try {
    await client.query("BEGIN");
    await client.query(sql);
    await client.query(`INSERT INTO public.schema_migrations (name) VALUES ($1)`, [file]);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    console.error(`FAILED ${file}`);
    throw e;
  }
}
await client.end();
console.log("migrations up to date");
