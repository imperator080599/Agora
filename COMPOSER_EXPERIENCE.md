# COMPOSER EXPERIENCE — The Heart of Agora

**Status:** Proposed. This is the flagship specification; it takes precedence over `UX_ARCHITECTURE.md` where they conflict.
**Governing constraint:** D22 — the assistant coaches, never ghostwrites.
**Date:** 2026-07-25

---

## 0. What this screen is for

A person has just committed a position on a claim and seen that most people disagree with them. They feel something about that. The Composer's entire job is to convert that feeling into a well-formed argument in under three minutes, and to leave them slightly better at reasoning than they were when they opened it.

Every decision below serves that. Where a decision is contested, the tie-break is: **does this make the user think harder, or does this make the product look clever?** The first wins.

**The design thesis is spatial** (`DESIGN_V2.md` §3): the user's writing is a *manuscript*; the assistant lives in the *margin*. The assistant is architecturally incapable of touching the page. A user learns the no-ghostwriting rule by seeing it, not by reading it.

---

## 1. The screen

```
DESKTOP ≥1120px

┌──────────────────────────────────────────────────────────────────────┐
│  Agora            The 4-day week is a luxury of rich economies.  ⌄   │  claim rail (sticky, 56px)
├──────────────────────────────────┬───────────────────────────────────┤
│                                  │                                   │
│   ① IDEA ✓ ─────────────────     │   THE MARGIN                      │
│   "The constraint is bargaining  │                                   │
│    power, not national income."  │   ┌ probe ───────────────────┐    │
│                                  │   │ You've named a mechanism.│    │
│   ② ARGUMENT  ●                  │   │ What makes it true?      │    │
│   ┌────────────────────────────┐ │   └──────────────────────────┘    │
│   │ Because output per hour in │ │                                   │
│   │ services is set by attent… │ │   ┌ flag ────────────────────┐    │
│   │                          ▏ │ │   │ "Everyone knows" is      │    │
│   └────────────────────────────┘ │   │ doing a lot of work here.│    │
│   38 words                       │   └──────────────────────────┘    │
│                                  │                                   │
│   ③ EVIDENCE                     │   ┌ counter ─────────────────┐    │
│                                  │   │ A reader will say norms  │    │
│                                  │   │ follow bargaining power. │    │
│                                  │   │ [ Address this ]         │    │
│   [ Continue ]                   │   └──────────────────────────┘    │
│                                  │                                   │
└──────────────────────────────────┴───────────────────────────────────┘
     manuscript — paper, serif          margin — cooler, coach ink
     max 66ch                            360px fixed
```

On **tablet (768–1119px)** the margin drops below the manuscript as a full-width annotation stack. On **mobile** it becomes a sheet anchored to the bottom edge, at rest showing a single-line summary (`2 notes · tap to read`) and expanding to 60vh on tap. **It never covers the text being written** — when expanded, the manuscript scrolls so the active field stays visible above the sheet.

---

## 2. The three steps

Steps are **progressive, not modal**. A completed step collapses to a one-line summary that stays on screen and remains editable on click. The user always sees their whole argument taking shape; they never lose context by advancing.

### ① IDEA — *What are you trying to say?*

**Prompt:** "One sentence. Not whether the claim is true — what you actually think is going on."

**Field:** single-line-feel textarea, serif, 20px, 2 rows max. Physically constrained so it *feels* like one sentence.

**Advance condition:** ≥ 12 characters. Deliberately low — we do not gate on quality, we coach on it.

**Coach behaviour:**

| Trigger | Type | Response |
|---|---|---|
| Empty, 4s idle | `probe` | *One sentence. What do you actually think is going on?* |
| High overlap with the claim's own words | `flag` | *You've restated the claim. What's the underlying reason you hold this view?* |
| < 6 words | `probe` | *Too compressed to disagree with. What would someone have to believe to think you're wrong?* |
| Contains a hedge chain ("maybe… sort of… I guess") | `probe` | *You're hedging before you've committed. What's the version you'd defend?* |
| Well-formed | `affirm` | *That's a position — it says something the claim doesn't. Now the mechanism.* |

### ② ARGUMENT — *Why do you believe this?*

**Prompt:** "Give the mechanism, not the conclusion again."

**Field:** manuscript proper. Paper ground, serif 17/1.6, 66ch measure, auto-growing, no visible box border — just the paper. This is the screen's centre of gravity and it should feel like a page, not an input.

**Advance condition:** ≥ 40 characters.

**Coach behaviour** — the richest surface in the product:

| Detection | Type | Example |
|---|---|---|
| Absolute quantifier (*everyone, always, never, obviously*) | `flag` | *"everyone" is doing a lot of work here. One counterexample sinks it. Would a narrower claim still support your idea?* |
| Correlation asserted as cause | `probe` | *You've paired wealth with the outcome. What's the mechanism that makes one produce the other?* |
| Conclusion restates the idea | `flag` | *This restates your idea in different words. What's the step between them?* |
| Unstated assumption detected | `probe` | *This only works if [X] is true. Is it — and would your reader agree?* |
| Contradiction with an earlier position in the user's ledger | `flag` | *Three weeks ago you argued the opposite on [claim]. Has something changed, or is one of them wrong?* |
| Strong causal chain present | `affirm` | *The chain is legible — a reader can now say where they get off. That's what makes it arguable.* |
| Always, once the argument is substantive | `counter` | *A reader will say: [strongest opposing argument]. What's your answer?* → `[ Address this ]` |

**The `counter` annotation is the signature interaction.** Tapping `[ Address this ]` does *not* insert text. It appends a blank paragraph to the manuscript with a ghosted prompt — *"Someone will say ___. My answer:"* — and places the caret. The user writes the rebuttal. The coach identified the gap; the user filled it. That distinction is the entire product.

### ③ EVIDENCE — *What proves it?*

**Prompt:** "What would make a skeptic take this seriously?"

This step is where the brief asks for magic, and magic here means *fast and physical*, not clever.

**On entering the step, retrieval has already run.** While the user was writing step ②, we embedded the idea + argument and queried the evidence graph in the background. By the time they arrive, three to five cards are already there. **There is no search box on arrival and no spinner** — the results are simply present, which is the entire trick.

Each card: publisher in mono micro-caps, title, and a one-line *why this fits* generated from the retrieval match — not a summary of the source, but its relevance to *this* argument.

```
┌──────────────────────────────────────────────────┐
│ AUTONOMY / ICELANDIC GOVERNMENT          2021    │
│ Going Public: Iceland's journey to a shorter week │
│ 2,500 workers; productivity held or improved.     │
│ ↳ Speaks directly to your throughput mechanism.   │
└──────────────────────────────────────────────────┘
```

**Selecting a card:** it lifts, travels to the end of the manuscript, and settles as an inline citation (340ms, `DESIGN_V2` §7). The user sees their evidence physically join their argument. That is the moment worth designing.

**A manual search field sits below the suggestions**, for when retrieval missed. It searches the library only.

**Publishing without evidence is always permitted.** The button reads *Publish without evidence* and the resulting argument carries a visible `no evidence` label. We neither block nor hide it. This creates honest social pressure toward evidence without making the product feel like homework — and it keeps the door open for people whose reasoning is sound but whose sources are not to hand.

**C2 is absolute:** every card is a real document with a real URL from the verified library. The assistant may never produce a statistic, study, or example from model weights. One hallucinated citation, screenshotted, ends the credibility of a product whose premise is rigour.

---

## 3. Coach behaviour — the rules that make it a coach

**Timing.** Annotations appear on *step completion* and after **1,200ms of typing idle** — never per keystroke. A coach that interrupts mid-sentence is not a coach, it is a distraction, and it is also four times the inference cost.

**Volume.** Maximum three live annotations. A fourth pushes the oldest out with a fade. The margin must never become a wall the user learns to ignore.

**Tone.** Second person, specific, never congratulatory-by-default. *"'Everyone' is doing a lot of work here"* — not *"Great start! Consider whether 'everyone' is too broad."* The assistant is a demanding tutor who respects the user, not a cheerleader.

**Dismissal.** Every annotation can be dismissed with a swipe or `×`. Dismissals are recorded — a user who dismisses every fallacy flag is telling us something about either our precision or their receptiveness, and both are worth knowing.

**The hard constraint, restated as an interface rule:** no coach annotation ever contains a sentence the user could paste into their argument. Not as a suggestion, not as an example, not behind a "use this" affordance. If a proposed annotation could be copy-pasted into the manuscript and read naturally, it is a violation and must be rewritten as a question.

**Silence is a valid state.** If the user's writing is strong, the margin says so once and then goes quiet. A coach that always has notes is a coach that is padding.

---

## 4. States

| State | Behaviour |
|---|---|
| **Arrival** | Manuscript focused, caret in Idea, margin empty with one line: *"I'll read as you write."* |
| **Typing** | Margin dims to 60% opacity — the user's attention belongs on the page |
| **Idle 1,200ms** | Retrieval and diagnostics run; annotations rise into the margin |
| **Coach thinking** | A 3px rail in the margin pulses gently. No spinner, no "AI is thinking…" |
| **Step complete** | Step collapses to a summary line with a `✓`; next step expands; the completed text remains visible and clickable |
| **Evidence loading** | Never seen — retrieval runs during step ② |
| **Quota reached** | Margin shows: *"Coaching paused for today — you've used your three sessions. Heuristic checks are still on."* Composition continues, unassisted. Never blocked. |
| **Assistant unavailable** | Margin: *"The coach is offline. Your writing is unaffected."* Free heuristic checks (absolutes, hedges, restatement) still run locally. |
| **Draft recovery** | Autosave every 3s to local storage; returning restores the step and caret position |
| **Publishing** | Manuscript lifts 8px, settles; debate map builds beneath it |
| **Published** | Argument appears in the debate map with a `you` marker; the composer collapses upward into it |

Two of these deserve emphasis. **The coach is never a blocker** — quota, outage, and budget-cap states all degrade to unassisted composition rather than stopping the user. And **there is no evidence spinner**, because the retrieval was speculative and already finished. Designing away a loading state is worth more than designing a beautiful one.

---

## 5. Publish

The publish moment should feel like consequence, not submission.

1. Button: `Publish` — the only filled accent button on the screen.
2. On press: a 400ms confirmation panel — the argument as it will appear, the evidence attached (or the honest `no evidence` label), and the stance chip.
3. Confirm → the manuscript lifts and settles; beneath it the debate map builds, the user's argument sliding into position beside the curated ones on their side.
4. The margin is replaced by a single line: *"Now it's someone else's turn to disagree with you."*

No confetti. No modal celebration. The reward is seeing your reasoning take its place in a real argument — which is a better reward and a truer one.

---

## 6. After publication — closing the learning loop

The Composer's job does not end at publish, because publishing is not where learning happens. Learning happens when a human responds.

| Event | Surfaced as |
|---|---|
| Someone reads your argument and changes position | **Persuasion event.** *"Your argument moved someone from Disagree to It's complicated."* The single most motivating notification in the product. |
| Someone rebuts you | Threaded beneath, with the option to reply *once* — a rebuttal, not a comment war |
| A week passes | *"Three people have read your reasoning on this claim."* |
| A month passes | Your argument appears in your private progress view alongside a later one on a similar claim |

Persuasion events are the north-star metric (`VISION_V2.md` §9). The Composer exists to produce them.

---

## 7. Mobile

The Composer must be genuinely good on a phone, not a degraded desktop.

- **One step per screen.** Full-height manuscript, no visible chrome except the claim rail and a step indicator.
- **The margin is a bottom sheet.** At rest: a 44px bar reading `2 notes`. Expanded: 60vh, with the manuscript scrolled so the caret stays visible.
- **Keyboard-aware.** The sheet sits above the keyboard; the caret is never occluded. This is the single most common failure in mobile writing tools and we should test it explicitly.
- **The evidence step is a full-screen sheet** with cards at comfortable tap size.
- **Advance is a large bottom button**, never a small link.

---

## 8. Accessibility

- Every coach annotation is in an `aria-live="polite"` region, announced with its type: *"Flag: 'everyone' is doing a lot of work here."*
- Full keyboard path: `Tab` between fields, `⌘↵` to advance, `Esc` to collapse the margin.
- `prefers-reduced-motion` removes the fly-to-slot and lift animations; the citation simply appears.
- Focus is never trapped in the margin. The manuscript is always one `Tab` away.
- The manuscript honours user font-size settings; the 66ch measure is in `ch`, so it scales with the reader's type.

---

## 9. What we are deliberately not building

| Not building | Why |
|---|---|
| Chat interface with the assistant | Invites "write it for me". The margin format makes ghostwriting structurally awkward. |
| Rich text, formatting toolbar | An argument is prose. Formatting is procrastination. |
| Suggested completions / autocomplete | D22. The most seductive violation, and the most damaging. |
| Numeric quality score in the composer | Optimises the number, not the thinking (`VISION_V2.md` §8a) |
| Publish gating on quality | Being wrong in public is how people learn |
| Collaborative editing | Agora is about *your* reasoning |
| AI-generated evidence summaries | C2 — retrieval only |

---

## 10. Success criteria

The Composer works if:

1. **Median time to publish < 3 minutes** with the assistant (H2, `VISION_V2.md` §4)
2. **Mid-composition abandonment < 40%**
3. **≥ 15% of positioned users attempt composition** in week one (H1)
4. **Coach interventions per argument fall over a user's first 90 days** — the coach becoming less necessary is the clearest evidence of teaching
5. **A user, unprompted, describes the Composer to someone else.** Not measurable, and still the real bar.
