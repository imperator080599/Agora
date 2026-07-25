// ClaimPublicView — the ONLY claim shape reachable pre-position (PRD AC-1; API_CONTRACTS §1).
// It structurally has NO split fields: keys are absent, not nulled. Built exclusively by the
// explicit field-picking factory below — never by spreading database rows.

export type SourceRef = { publisher: string; title: string; url: string };
export type ClaimPublicView = {
  id: string;
  slug: string;
  sentence: string;
  domain: "economics" | "business" | "tech_ai" | "geopolitics";
  tier: "standard" | "conflict";
  status: { phase: "live" | "archived"; isFlagshipToday: boolean; publishedAt: string };
  context: { bullets: { text: string; sources: SourceRef[] }[] };
  participationTotal: number; // directionless — permitted by AC-1
  teasers: { for?: { text: string }; against?: { text: string } }; // text-only, no counts
  withdrawn?: { reason: string };
};

// Type-level leakage guard (T-CR-1): compiling fails if a denylisted key is ever added.
type Denylist =
  | "split" | "agreeN" | "disagreeN" | "complicatedN"
  | "movement" | "rank" | "cosignCount" | "movedCount" | "percent";
type NoLeak<T> = Extract<keyof T, Denylist> extends never ? true : never;
const _assertTop: NoLeak<ClaimPublicView> = true;
const _assertStatus: NoLeak<ClaimPublicView["status"]> = true;
const _assertTeasers: NoLeak<ClaimPublicView["teasers"]> = true;
void _assertTop; void _assertStatus; void _assertTeasers;

export type ClaimRow = {
  id: string; slug: string; sentence: string; domain: ClaimPublicView["domain"];
  tier: ClaimPublicView["tier"]; state: string; flagship_day: string | null;
  published_at: string; withdrawal_reason: string | null;
  bullets: { text: string; sources: SourceRef[] }[];
  participation_total: number;
  teaser_for: string | null; teaser_against: string | null;
};

export function toPublicView(row: ClaimRow, todayUtc: string): ClaimPublicView {
  const view: ClaimPublicView = {
    id: row.id,
    slug: row.slug,
    sentence: row.sentence,
    domain: row.domain,
    tier: row.tier,
    status: {
      phase: row.state === "archived" ? "archived" : "live",
      isFlagshipToday: row.flagship_day === todayUtc,
      publishedAt: row.published_at,
    },
    context: { bullets: row.bullets },
    participationTotal: row.participation_total,
    teasers: {
      ...(row.teaser_for ? { for: { text: row.teaser_for } } : {}),
      ...(row.teaser_against ? { against: { text: row.teaser_against } } : {}),
    },
  };
  if (row.state === "withdrawn" && row.withdrawal_reason) {
    view.withdrawn = { reason: row.withdrawal_reason };
  }
  return view;
}
