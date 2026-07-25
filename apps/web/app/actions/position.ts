"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ensureActor } from "@agora/domain/identity";
import { getClaimBySlug } from "@agora/domain/claims";
import { recordPosition } from "@agora/domain/positions";
import type { Stance } from "@agora/contracts/internal/claim";
import { mintViewerToken, verifyViewerToken, VIEWER_COOKIE } from "../../lib/devAuth";

const STANCES: ReadonlySet<string> = new Set(["agree", "disagree", "complicated"]);

// The one position write path in the web tier. Works without client-side JavaScript
// (plain form POST); errors surface via a query param the page renders.
export async function takePosition(formData: FormData): Promise<void> {
  const slug = String(formData.get("slug") ?? "");
  const stance = String(formData.get("stance") ?? "");
  const surface = String(formData.get("surface") ?? "claim_page");
  if (!/^[a-z0-9-]{1,80}$/.test(slug)) redirect("/");
  if (!STANCES.has(stance)) redirect(`/c/${slug}?e=BAD_STANCE`);

  const claim = await getClaimBySlug(slug);
  if (!claim) redirect("/");

  const jar = await cookies();
  let uid = verifyViewerToken(jar.get(VIEWER_COOKIE)?.value);
  if (!uid) {
    const minted = mintViewerToken();
    uid = minted.uid;
    jar.set(VIEWER_COOKIE, minted.cookieValue, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  const actor = await ensureActor(uid);
  // pre_reveal=true holds for creates by construction: the split is unreachable before a
  // position exists (AC-2). For changes record_position() stores pre_reveal=false itself.
  const result = await recordPosition(actor, claim.id, stance as Stance, true, surface);

  revalidatePath("/");
  revalidatePath(`/c/${slug}`);
  if (!result.ok) redirect(`/c/${slug}?e=${result.code}`);
  redirect(`/c/${slug}`);
}
