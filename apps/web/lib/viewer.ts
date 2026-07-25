import { cookies } from "next/headers";
import { resolveActor } from "@agora/domain/identity";
import { verifyViewerToken, VIEWER_COOKIE } from "./devAuth";

// The viewer's pseudonymous actor_id, or null for a visitor who has never positioned.
// Reads never create identity; only the position action registers an actor.
export async function getViewerActor(): Promise<string | null> {
  const jar = await cookies();
  const uid = verifyViewerToken(jar.get(VIEWER_COOKIE)?.value);
  if (!uid) return null;
  return resolveActor(uid);
}
