// T-CR-1 / T-SP: the commit-to-reveal boundary and the split display rule.
import { describe, expect, it } from "vitest";
import { toPublicView, type ClaimRow } from "./claim.ts";
import { toSplitDisplay, toRevealedView, EARLY_DEBATE_THRESHOLD } from "../internal/claim.ts";
import { LEAKAGE_DENYLIST_KEYS } from "@agora/fixtures";

const row: ClaimRow = {
  id: "11111111-1111-1111-1111-111111111111",
  slug: "four-day-week-rich-economies",
  sentence: "The 4-day work week is a luxury of rich economies.",
  domain: "economics",
  tier: "standard",
  state: "live",
  flagship_day: "2026-07-25",
  published_at: "2026-07-25T06:00:00.000Z",
  withdrawal_reason: null,
  bullets: [{ text: "Iceland ran trials.", sources: [{ publisher: "Reuters", title: "t", url: "https://example.org/a" }] }],
  participation_total: 100,
  teaser_for: "Productivity gains appear mainly in service sectors.",
  teaser_against: "Norms follow bargaining power, not GDP.",
};

describe("ClaimPublicView (pre-position)", () => {
  it("contains no denylisted key anywhere in its serialized form", () => {
    const json = JSON.stringify(toPublicView(row, "2026-07-25"));
    for (const key of LEAKAGE_DENYLIST_KEYS) {
      expect(json).not.toContain(key);
    }
  });

  it("never carries the FIX-83 split digits", () => {
    const json = JSON.stringify(toPublicView(row, "2026-07-25"));
    // 83/11/6 must be unreachable; participationTotal (100, directionless) is permitted by AC-1.
    expect(json).not.toContain("83");
    expect(json).not.toContain('"11"');
  });

  it("ignores extra database columns rather than spreading them", () => {
    const contaminated = { ...row, agree_n: 83, disagree_n: 11, complicated_n: 6 } as ClaimRow;
    const json = JSON.stringify(toPublicView(contaminated, "2026-07-25"));
    expect(json).not.toContain("agree_n");
    expect(json).not.toContain("83");
  });

  it("marks the flagship only on its own day", () => {
    expect(toPublicView(row, "2026-07-25").status.isFlagshipToday).toBe(true);
    expect(toPublicView(row, "2026-07-26").status.isFlagshipToday).toBe(false);
  });

  it("exposes withdrawal only when the claim is withdrawn", () => {
    expect(toPublicView(row, "2026-07-25").withdrawn).toBeUndefined();
    const w = toPublicView({ ...row, state: "withdrawn", withdrawal_reason: "source retracted" }, "2026-07-25");
    expect(w.withdrawn?.reason).toBe("source retracted");
  });
});

describe("split display rule", () => {
  it("uses counts below the early-debate threshold", () => {
    const s = toSplitDisplay(9, 5, 3);
    expect(s.mode).toBe("counts");
    expect(s.total).toBe(17);
  });

  it("switches to percent at the threshold exactly", () => {
    const below = toSplitDisplay(EARLY_DEBATE_THRESHOLD - 1, 0, 0);
    const at = toSplitDisplay(EARLY_DEBATE_THRESHOLD, 0, 0);
    expect(below.mode).toBe("counts");
    expect(at.mode).toBe("percent");
  });

  it("always sums to exactly 100 percent", () => {
    const cases: [number, number, number][] = [
      [83, 11, 6], [1, 1, 1], [33, 33, 34], [10, 10, 11], [100, 0, 0], [7, 7, 17],
    ];
    for (const [a, d, c] of cases) {
      const s = toSplitDisplay(a * 3, d * 3, c * 3);
      if (s.mode !== "percent") continue;
      expect(s.agreePct + s.disagreePct + s.complicatedPct).toBe(100);
    }
  });
});

describe("RevealedClaimView (post-position)", () => {
  const extras = {
    split: { agree_n: 83, disagree_n: 11, complicated_n: 6 },
    position: { stance: "agree" as const, first_at: "2026-07-25T09:00:00.000Z", changed_count: 0, last_change_at: null },
    args: [{ id: "a1", side: "for" as const, attribution: "The Economist, 2026", text: "…" }],
  };

  it("carries the split and the viewer's own position", () => {
    const v = toRevealedView(row, extras, "2026-07-25");
    expect(v.split.mode).toBe("percent");
    expect(v.yourPosition.stance).toBe("agree");
    expect(v.debate.for).toHaveLength(1);
  });

  it("allows a change when no change has been made in the last 24 hours", () => {
    expect(toRevealedView(row, extras, "2026-07-25").yourPosition.canChangeNow).toBe(true);
    const recent = { ...extras, position: { ...extras.position, last_change_at: new Date().toISOString() } };
    expect(toRevealedView(row, recent, "2026-07-25").yourPosition.canChangeNow).toBe(false);
  });
});
