// RevealedClaimView — served ONLY after the viewer's position is verified server-side
// (PRD AC-2; API_CONTRACTS §2). Disjoint from ClaimPublicView by construction: the two
// factories live in separate modules and neither imports the other's row shape wholesale.

import type { ClaimPublicView, ClaimRow } from "../public/claim.ts";
import { toPublicView } from "../public/claim.ts";

export type Stance = "agree" | "disagree" | "complicated";

// Split display rule (PRD §7.3): counts mode below the early-debate threshold,
// percent mode at or above it. Percentages sum to exactly 100 (largest remainder).
export const EARLY_DEBATE_THRESHOLD = 25;

export type SplitDisplay =
  | { mode: "counts"; agreeN: number; disagreeN: number; complicatedN: number; total: number }
  | { mode: "percent"; agreePct: number; disagreePct: number; complicatedPct: number; total: number };

export type CuratedArgument = { id: string; side: "for" | "against"; attribution: string; text: string };

export type RevealedClaimView = ClaimPublicView & {
  yourPosition: { stance: Stance; firstAt: string; changedCount: number; canChangeNow: boolean };
  split: SplitDisplay;
  debate: { for: CuratedArgument[]; against: CuratedArgument[] };
};

export function toSplitDisplay(agreeN: number, disagreeN: number, complicatedN: number): SplitDisplay {
  const total = agreeN + disagreeN + complicatedN;
  if (total < EARLY_DEBATE_THRESHOLD) {
    return { mode: "counts", agreeN, disagreeN, complicatedN, total };
  }
  const raw = [agreeN, disagreeN, complicatedN].map((n) => (n * 100) / total);
  const floors = raw.map(Math.floor);
  let remainder = 100 - floors.reduce((a, b) => a + b, 0);
  const order = raw
    .map((v, i) => ({ i, frac: v - floors[i] }))
    .sort((a, b) => b.frac - a.frac || a.i - b.i);
  for (const { i } of order) {
    if (remainder <= 0) break;
    floors[i] += 1;
    remainder -= 1;
  }
  return { mode: "percent", agreePct: floors[0], disagreePct: floors[1], complicatedPct: floors[2], total };
}

export type RevealedExtras = {
  split: { agree_n: number; disagree_n: number; complicated_n: number };
  position: { stance: Stance; first_at: string; changed_count: number; last_change_at: string | null };
  args: CuratedArgument[];
};

export function toRevealedView(row: ClaimRow, extras: RevealedExtras, todayUtc: string): RevealedClaimView {
  const { split, position, args } = extras;
  const lastChange = position.last_change_at ? new Date(position.last_change_at).getTime() : null;
  return {
    ...toPublicView(row, todayUtc),
    yourPosition: {
      stance: position.stance,
      firstAt: position.first_at,
      changedCount: position.changed_count,
      canChangeNow: lastChange === null || Date.now() - lastChange >= 24 * 60 * 60 * 1000,
    },
    split: toSplitDisplay(split.agree_n, split.disagree_n, split.complicated_n),
    debate: {
      for: args.filter((a) => a.side === "for"),
      against: args.filter((a) => a.side === "against"),
    },
  };
}
