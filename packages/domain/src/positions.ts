// The ONLY position write path in application code: app.record_position() (SECURITY DEFINER).
// web_backend holds no INSERT/UPDATE/DELETE on position tables — a raw write here would fail.
import { db } from "./db.ts";
import type { Stance } from "@agora/contracts/internal/claim";

export type RecordPositionResult =
  | { ok: true; eventId: string }
  | { ok: false; code: "ALREADY_POSITIONED" | "RATE_LIMITED_24H" | "CLAIM_NOT_OPEN" | "ACTOR_DELETED" };

const KNOWN = ["ALREADY_POSITIONED", "RATE_LIMITED_24H", "CLAIM_NOT_OPEN", "ACTOR_DELETED"] as const;

export async function recordPosition(
  actorId: string,
  claimId: string,
  stance: Stance,
  preReveal: boolean,
  surface: string,
): Promise<RecordPositionResult> {
  try {
    const r = await db().query(`SELECT app.record_position($1,$2,$3,$4,$5) AS event_id`, [
      actorId,
      claimId,
      stance,
      preReveal,
      surface,
    ]);
    return { ok: true, eventId: r.rows[0].event_id };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const code = KNOWN.find((k) => msg.includes(k));
    if (code) return { ok: false, code };
    throw e;
  }
}
