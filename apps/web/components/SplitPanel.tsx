import type { SplitDisplay, Stance } from "@agora/contracts/internal/claim";
import { STANCE_LABEL } from "./labels";

// The reveal. Percent mode: stacked bar + legend. Counts mode (early debate, n below
// threshold): plain counts, no bar — small numbers read honestly as numbers (PRD §7.3).
export function SplitPanel({ split, yourStance }: { split: SplitDisplay; yourStance: Stance }) {
  if (split.mode === "counts") {
    const rows: { stance: Stance; n: number }[] = [
      { stance: "agree", n: split.agreeN },
      { stance: "disagree", n: split.disagreeN },
      { stance: "complicated", n: split.complicatedN },
    ];
    return (
      <section className="split-panel" aria-label="Where everyone stands">
        <p className="split-kicker">Early debate &middot; {split.total} positions so far</p>
        <ul className="split-counts">
          {rows.map((r) => (
            <li key={r.stance} className={`split-count-row${r.stance === yourStance ? " is-you" : ""}`}>
              <span className={`split-dot split-dot--${r.stance}`} aria-hidden />
              <span className="split-count-label">{STANCE_LABEL[r.stance]}</span>
              <span className="split-count-n">{r.n}</span>
              {r.stance === yourStance && <span className="you-marker">you</span>}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const segs: { stance: Stance; pct: number }[] = [
    { stance: "agree", pct: split.agreePct },
    { stance: "disagree", pct: split.disagreePct },
    { stance: "complicated", pct: split.complicatedPct },
  ];
  return (
    <section className="split-panel" aria-label="Where everyone stands">
      <p className="split-kicker">{split.total} people have taken a position</p>
      <div className="split-bar" role="img" aria-label={segs.map((s) => `${STANCE_LABEL[s.stance]} ${s.pct}%`).join(", ")}>
        {segs.map(
          (s) =>
            s.pct > 0 && (
              <span key={s.stance} className={`split-seg split-seg--${s.stance}`} style={{ width: `${s.pct}%` }} />
            ),
        )}
      </div>
      <ul className="split-legend">
        {segs.map((s) => (
          <li key={s.stance} className={`split-legend-item${s.stance === yourStance ? " is-you" : ""}`}>
            <span className={`split-dot split-dot--${s.stance}`} aria-hidden />
            <span className="split-legend-label">{STANCE_LABEL[s.stance]}</span>
            <span className="split-legend-pct">{s.pct}%</span>
            {s.stance === yourStance && <span className="you-marker">you</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
