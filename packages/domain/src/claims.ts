// Claim reads. Every query returns the neutral ClaimRow shape; which VIEW a caller may
// build from it is decided by the serializer layer, never here (API_CONTRACTS §1-2).
import { db } from "./db.ts";
import type { ClaimRow } from "@agora/contracts/public/claim";
import type { CuratedArgument, RevealedExtras, Stance } from "@agora/contracts/internal/claim";

const CLAIM_ROW_SQL = `
  SELECT c.id, c.slug, c.sentence, c.domain::text AS domain, c.tier::text AS tier,
         c.state::text AS state,
         to_char(c.flagship_day, 'YYYY-MM-DD') AS flagship_day,
         c.published_at::text AS published_at,
         c.withdrawal_reason,
         coalesce(b.bullets, '[]'::json) AS bullets,
         coalesce(s.agree_n + s.disagree_n + s.complicated_n, 0)::int AS participation_total,
         tf.text AS teaser_for, ta.text AS teaser_against
  FROM app.claim c
  LEFT JOIN app.split_current s ON s.claim_id = c.id
  LEFT JOIN LATERAL (
    SELECT json_agg(json_build_object('text', cb.text, 'sources', src.sources) ORDER BY cb.ord) AS bullets
    FROM app.claim_version cv
    JOIN app.context_bullet cb ON cb.claim_version_id = cv.id
    LEFT JOIN LATERAL (
      SELECT coalesce(json_agg(json_build_object(
               'publisher', so.publisher, 'title', sd.title, 'url', sd.canonical_url)), '[]'::json) AS sources
      FROM app.bullet_source bs
      JOIN app.source_document sd ON sd.id = bs.source_document_id
      JOIN app.source so ON so.id = sd.source_id
      WHERE bs.bullet_id = cb.id
    ) src ON true
    WHERE cv.claim_id = c.id
      AND cv.version_no = (SELECT max(version_no) FROM app.claim_version v2 WHERE v2.claim_id = c.id)
  ) b ON true
  LEFT JOIN LATERAL (
    SELECT text FROM app.argument
    WHERE claim_id = c.id AND side = 'for' AND curated AND deleted_at IS NULL
    ORDER BY created_at LIMIT 1
  ) tf ON true
  LEFT JOIN LATERAL (
    SELECT text FROM app.argument
    WHERE claim_id = c.id AND side = 'against' AND curated AND deleted_at IS NULL
    ORDER BY created_at LIMIT 1
  ) ta ON true`;

export async function getTodayFeed(): Promise<ClaimRow[]> {
  const r = await db().query(
    `${CLAIM_ROW_SQL}
     WHERE c.state IN ('live','archived') AND c.published_at IS NOT NULL
     ORDER BY (c.state = 'live') DESC,
              (c.flagship_day = (now() AT TIME ZONE 'utc')::date) DESC NULLS LAST,
              c.published_at DESC
     LIMIT 20`,
  );
  return r.rows as ClaimRow[];
}

export async function getClaimBySlug(slug: string): Promise<ClaimRow | null> {
  const r = await db().query(`${CLAIM_ROW_SQL} WHERE c.slug = $1`, [slug]);
  return (r.rows[0] as ClaimRow) ?? null;
}

// The viewer's stance on each claim in a set — feed decoration only; split stays claim-page.
export async function getStances(actorId: string, claimIds: string[]): Promise<Map<string, Stance>> {
  if (claimIds.length === 0) return new Map();
  const r = await db().query(
    `SELECT claim_id, stance::text AS stance FROM app.position_current
     WHERE actor_id = $1 AND claim_id = ANY($2::uuid[])`,
    [actorId, claimIds],
  );
  return new Map(r.rows.map((row) => [row.claim_id as string, row.stance as Stance]));
}

// Reveal gate: returns extras ONLY when this actor holds a position on the claim.
// A null return means the caller must serve ClaimPublicView (PRD AC-2).
export async function getRevealedExtras(actorId: string, claimId: string): Promise<RevealedExtras | null> {
  const pos = await db().query(
    `SELECT stance::text AS stance, first_at::text AS first_at,
            changed_count, last_change_at::text AS last_change_at
     FROM app.position_current WHERE actor_id = $1 AND claim_id = $2`,
    [actorId, claimId],
  );
  if (pos.rowCount === 0) return null;

  const [split, args] = await Promise.all([
    db().query(
      `SELECT agree_n, disagree_n, complicated_n FROM app.split_current WHERE claim_id = $1`,
      [claimId],
    ),
    db().query(
      `SELECT id, side::text AS side, curated_attribution AS attribution, text
       FROM app.argument
       WHERE claim_id = $1 AND curated AND deleted_at IS NULL
       ORDER BY side, created_at`,
      [claimId],
    ),
  ]);
  return {
    position: pos.rows[0],
    split: split.rows[0] ?? { agree_n: 0, disagree_n: 0, complicated_n: 0 },
    args: args.rows as CuratedArgument[],
  };
}
