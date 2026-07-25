// AUTH_MODE=dev adapter: viewer identity is an anonymous, HMAC-signed first-party cookie
// carrying a random auth_user_id. The Supabase Auth adapter (M3) replaces this module's
// internals; everything downstream only ever sees an auth_user_id UUID.
import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";

export const VIEWER_COOKIE = "agora_viewer";

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET is not set");
  return s;
}

function sign(uid: string): string {
  return createHmac("sha256", secret()).update(uid).digest("base64url");
}

export function mintViewerToken(): { uid: string; cookieValue: string } {
  const uid = randomUUID();
  return { uid, cookieValue: `${uid}.${sign(uid)}` };
}

export function verifyViewerToken(cookieValue: string | undefined): string | null {
  if (!cookieValue) return null;
  const dot = cookieValue.indexOf(".");
  if (dot === -1) return null;
  const uid = cookieValue.slice(0, dot);
  const sig = cookieValue.slice(dot + 1);
  const expected = sign(uid);
  if (sig.length !== expected.length) return null;
  if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  return uid;
}
