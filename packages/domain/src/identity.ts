// Identity boundary access. The web tier NEVER touches identity.* tables directly —
// only these two SECURITY DEFINER functions (ACCESS_CONTROL §2; DATA_MODEL §0).
import { db } from "./db.ts";

const ADJECTIVES = ["quiet", "steady", "candid", "sober", "keen", "plain", "level", "frank", "clear", "calm"];
const NOUNS = ["harbor", "ledger", "meridian", "compass", "quarry", "lantern", "granite", "cedar", "prairie", "delta"];

function generatePseudonym(): string {
  const a = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const n = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const num = Math.floor(Math.random() * 900) + 100;
  return `${a}_${n}_${num}`;
}

export async function resolveActor(authUserId: string): Promise<string | null> {
  const r = await db().query(`SELECT identity.resolve_actor($1) AS actor_id`, [authUserId]);
  return r.rows[0]?.actor_id ?? null;
}

// Idempotent: returns the existing actor for a known auth user; otherwise registers one
// under a generated pseudonym (retrying on pseudonym collision).
export async function ensureActor(authUserId: string): Promise<string> {
  const existing = await resolveActor(authUserId);
  if (existing) return existing;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const r = await db().query(`SELECT identity.register_actor($1, $2) AS actor_id`, [
        authUserId,
        generatePseudonym(),
      ]);
      return r.rows[0].actor_id;
    } catch (e) {
      const isUniqueViolation = (e as { code?: string }).code === "23505";
      if (!isUniqueViolation || attempt === 4) throw e;
    }
  }
  throw new Error("unreachable");
}
