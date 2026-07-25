// Deterministic fixture world (TEST_PLAN §fixtures): FIX-83 leakage claim + claims across
// domains/states, sources, context bullets with mandatory source edges, curated seed arguments.
import pg from "pg";
import { FIXTURE_CLAIMS, FIXTURE_SOURCES } from "../fixtures/index.ts";

const url = process.env.DATABASE_URL_MIGRATOR;
if (!url) throw new Error("DATABASE_URL_MIGRATOR not set");
const c = new pg.Client({ connectionString: url });
await c.connect();

for (const s of FIXTURE_SOURCES) {
  await c.query(
    `INSERT INTO app.source (publisher, origin_region) VALUES ($1,$2) ON CONFLICT (publisher) DO NOTHING`,
    [s.publisher, s.region],
  );
}

for (const cl of FIXTURE_CLAIMS) {
  const existing = await c.query(`SELECT id FROM app.claim WHERE slug=$1`, [cl.slug]);
  if (existing.rowCount) continue;
  const claim = await c.query(
    `INSERT INTO app.claim (slug, sentence, domain, type, tier, state, published_at, live_until, flagship_day)
     VALUES ($1,$2,$3,$4,$5,'live', now() - ($6 || ' hours')::interval, now() + interval '72 hours', $7)
     RETURNING id`,
    [cl.slug, cl.sentence, cl.domain, cl.type, cl.tier ?? "standard", String(cl.ageHours), cl.flagshipToday ? new Date().toISOString().slice(0, 10) : null],
  );
  const claimId = claim.rows[0].id;
  const ver = await c.query(
    `INSERT INTO app.claim_version (claim_id, version_no) VALUES ($1,1) RETURNING id`,
    [claimId],
  );
  let ord = 0;
  for (const b of cl.bullets) {
    const bullet = await c.query(
      `INSERT INTO app.context_bullet (claim_version_id, ord, text) VALUES ($1,$2,$3) RETURNING id`,
      [ver.rows[0].id, ord++, b.text],
    );
    const doc = await c.query(
      `INSERT INTO app.source_document (source_id, canonical_url, title)
       SELECT id, $2, $3 FROM app.source WHERE publisher=$1
       ON CONFLICT (canonical_url) DO UPDATE SET title=EXCLUDED.title RETURNING id`,
      [b.source.publisher, b.source.url, b.source.title],
    );
    await c.query(`INSERT INTO app.bullet_source (bullet_id, source_document_id) VALUES ($1,$2)`, [
      bullet.rows[0].id,
      doc.rows[0].id,
    ]);
  }
  for (const a of cl.curatedArguments) {
    await c.query(
      `INSERT INTO app.argument (claim_id, side, curated, curated_attribution, text)
       VALUES ($1,$2,true,$3,$4)`,
      [claimId, a.side, a.attribution, a.text],
    );
  }
  // Seed the split (founding-cohort counts, PRD §14.2) via synthetic actors through the real write path.
  if (cl.seedSplit) {
    const { agree, disagree, complicated } = cl.seedSplit;
    const stances = [
      ...Array(agree).fill("agree"),
      ...Array(disagree).fill("disagree"),
      ...Array(complicated).fill("complicated"),
    ];
    for (let i = 0; i < stances.length; i++) {
      const seedActor = await c.query(
        `SELECT identity.register_actor(md5($1)::uuid, $2) AS actor`,
        [`seed-${cl.slug}-${i}`, `seed_${cl.slug.slice(0, 8).replace(/-/g, "_")}_${i}`],
      );
      await c.query(`UPDATE app.profile SET is_internal = true WHERE actor_id=$1`, [seedActor.rows[0].actor]);
      await c.query(`SELECT app.record_position($1,$2,$3,true,'seed')`, [
        seedActor.rows[0].actor,
        claimId,
        stances[i],
      ]);
    }
  }
}
await c.end();
console.log(`seeded ${FIXTURE_CLAIMS.length} claims`);
