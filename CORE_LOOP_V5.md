# CORE LOOP v5 — Position → Argument → Evidence → Opposition → Reflection → Improvement

**Status:** Proposed. Supersedes the loop in `COMPOSER_EXPERIENCE.md` §0 and the daily-loop proposal in `HABIT_ARCHITECTURE.md` §5.
**Date:** 2026-07-25

---

## 0. The finding

Your six-stage loop is the right one. Here is what we have actually designed against it:

| Stage | Status |
|---|---|
| **1 · Position** | Built. Commit-before-reveal works |
| **2 · Argument** | Built. The Composer is strong |
| **3 · Evidence** | Designed in depth. The graph is our best asset |
| **4 · Opposition** | **Missing.** We have a debate map — curated arguments beside yours. Nobody actually attacks *your* argument |
| **5 · Reflection** | **Missing entirely** |
| **6 · Improvement** | **Missing entirely.** Nothing in the product lets you make your argument better after learning it was weak |

**We built the first half of your loop and stopped.** Everything since — the reasoning engine, the skill tree, the gym, the assessment framework — has made stages 1–3 deeper while stages 4–6 remained absent. That is why the product still feels like an opinion platform with coaching bolted on: the user expresses, and then nothing happens to them.

The chess analogy makes it obvious. **Chess.com without the analysis board is just a place to play chess.** The learning is not in the game; it is in the review afterwards, where an engine shows you the move you missed and you understand why. We built the game and skipped the analysis.

So this redesign is not about polishing stages 1–3. It is about building 4, 5 and 6.

---

## 1. The synthesis

What each reference product contributes, and specifically what we take:

| Source | The mechanism | What we take |
|---|---|---|
| **Chess.com** | play → **analysis** → play again | The post-game review is where learning lives. Add the Review Board |
| **Strava** | every activity logged forever; identity from accumulated history | The argument log with revisions — not a score, a history |
| **Socratic dialogue** | questions that expose the assumption you did not know you held | The coach's grammar, already built |
| **Wikipedia** | anyone contributes, under sourcing norms, with disputes argued on the record | The evidence graph's contribution and dispute mechanism |
| **Oxford debate** | sides assigned; you defend what you may not believe | The Turn (§4) |

The unifying idea: **every one of these products separates performance from review.** You play the game, then you study it. You run, then you look at the split times. Oxford debaters argue the motion, then are critiqued. We had no review phase at all.

---

## 2. The loop, redesigned

```
   ┌─ 1 POSITION ──────────────────────────────────────────────┐
   │  Predict the split → commit → reveal                      │  90s
   │  You form a view before social proof. Lesson one.         │
   └───────────────────────┬───────────────────────────────────┘
   ┌─ 2 ARGUMENT ──────────┴───────────────────────────────────┐
   │  Idea → mechanism, in the manuscript. Coach in the margin │  2min
   └───────────────────────┬───────────────────────────────────┘
   ┌─ 3 EVIDENCE ──────────┴───────────────────────────────────┐
   │  Mechanism-matched atoms, supporting AND undermining      │  40s
   │  ▸ PREDICT: which objection will they raise?              │  ← new
   └───────────────────────┬───────────────────────────────────┘
   ┌─ 4 OPPOSITION ────────┴───────────────────────────────────┐
   │  Your argument is ANSWERED — by a person, within 24h      │  ← NEW
   │  Assigned opponent · Circle peer · or calibrated AI       │
   │  One rebuttal each. Not a thread.                         │
   └───────────────────────┬───────────────────────────────────┘
   ┌─ 5 REFLECTION ────────┴───────────────────────────────────┐
   │  THE REVIEW BOARD — the analysis board for arguments      │  ← NEW
   │  · Which link did they attack? Was it the one you feared? │
   │  · Your predicted objection vs the real one               │
   │  · Where the coach was right and you disagreed            │
   │  · The one move that would have made this hold            │
   └───────────────────────┬───────────────────────────────────┘
   ┌─ 6 IMPROVEMENT ───────┴───────────────────────────────────┐
   │  REVISE — and the revision is the artifact                │  ← NEW
   │  v1 → v2 diff, public, dated, permanent                   │
   │  Revising after opposition is the single most honoured    │
   │  act in the product                                       │
   └───────────────────────────────────────────────────────────┘
```

### Stage 4 — Opposition

The missing half of the product. Three sources, in preference order:

1. **A human who disagrees**, matched from a Circle or the wider pool by opposing position and comparable band.
2. **An assigned opponent** — someone doing The Turn (§4), arguing your side's opposite by assignment.
3. **A calibrated AI opponent** — only when no human is available within 24 hours.

The AI is the fallback, never the default. An objection from a person who genuinely holds the view carries information and social weight that a generated one does not, and the whole moat argument depends on human opposition being the real thing.

**Format discipline:** one rebuttal, one response. Not a thread. This single rule eliminates the escalation spiral that ruins every comment section, and it forces both parties to make their best point rather than their next point.

**The 24-hour guarantee is a core mechanic, not an SLA.** A user whose argument is never answered has experienced an opinion platform. In early cohorts, opposition must be seeded manually — that is legitimate and it is exactly what the concierge test rehearses.

### Stage 5 — The Review Board

The chess analysis board, for arguments. Opened after opposition resolves, and it is the surface where learning actually happens.

```
  REVIEW · "The 4-day week is a luxury of rich economies"

  YOUR ARGUMENT GRAPH — where it was attacked
    thesis          ────────────────────  held
    premise 1       ────────────────────  held
    warrant (implicit) ─────────────────  ◄ ATTACKED, undercut
    premise 2       ────────────────────  held

  You predicted they'd challenge: your evidence
  They actually challenged:       your unstated warrant
                                  ↳ you did not see this coming

  The coach flagged this warrant on 24 July. You published anyway.

  THE ONE MOVE
    State the assumption and defend it, or narrow the claim to
    services. Either would have held.

  → Revise      → Concede the point      → Let it stand
```

Four things make this the most valuable screen in the product:

- **It shows *where* you were attacked**, on the structure — not a verdict, a location. That is what makes it diagnostic rather than judgemental.
- **It scores your self-prediction.** You guessed they would hit the evidence; they hit the warrant. That gap is the most precise possible feedback on your self-critique ability.
- **It closes the loop with the coach.** Seeing that the coach flagged the exact thing that got you, and you overrode it, teaches trust faster than a hundred accurate flags you accepted.
- **It offers three exits, all honourable.** "Concede the point" must be as celebrated as "Revise" — conceding correctly is a skill (`REASONING_SKILL_TREE.md` D5).

### Stage 6 — Improvement

**The revision is the artifact.** v1 and v2 both persist, dated, with the diff visible and the reason attached.

This is the Strava move: the log *is* the progression. Not a score derived from your arguments — the arguments themselves, and the record of you making them better.

Why this matters more than it sounds: it is the only place in the product where a user directly *experiences* getting better, rather than being told they have. Every other progression signal is inferred and reported by us. A revision is done by them, visible to them, permanent.

**Revising after opposition should be the single most honoured act in the product.** Not winning. Not publishing. Improving something you had already committed to publicly.

---

## 3. Where "Was I right?" belongs

You asked me to pick between three placements. Let me first say plainly that **my last-turn recommendation was wrong**, and why — because the reasoning matters for what replaces it.

I diagnosed the habit problem correctly (no felt deficit, invisible progress, no natural feedback) and then made a non-sequitur: from *"calibration is the most objective thing we can measure"* I jumped to *"make forecasting the daily loop."* That does not follow. It would have changed the content pipeline, attracted a forecasting audience rather than an argument audience, and severed the connection to your original insight — that **expressing an opinion should become an opportunity to improve your reasoning.** A forecasting platform improves your forecasting. It does nothing for how you argue.

**Verdict: option 3 — integrated inside argument improvement — with option 2 as a longitudinal layer. Not option 1.**

The insight that makes option 3 work: the predictions should not be about the world. **They should be about your own reasoning.** Three of them, one at each stage:

| Stage | The prediction | What it trains | Resolves |
|---|---|---|---|
| 1 · Position | *Where will people land?* | Perspective-taking — modelling people who disagree | At reveal, seconds later |
| 3 · Evidence | *Which link will they attack?* | Self-critique — seeing your own weakest point | At opposition, ~24h |
| 6 · Improvement | *Will this revision move anyone?* | Persuasion calibration | Over days |

The second one is the important one and it is new. **Predicting your own weakest link, then finding out where you were actually hit, is the tightest feedback loop available for the skill of self-criticism** — which is the skill that eventually makes the coach unnecessary. It costs one tap, resolves inside a day, and it is the mechanism by which the self-catch (`IDENTITY_DESIGN.md` §4) becomes trainable rather than incidental.

And this preserves the felt-deficit function I was reaching for last turn. **The deficit does not need to come from being wrong about the world. It comes from being wrong about yourself** — you thought your evidence was the weak spot, and it was the assumption you never noticed. That lands harder, and it is unambiguously about your reasoning.

**Option 2 survives as a layer.** Brier score across all three prediction types, tracked seasonally, reported in the profile. It remains the least gameable number we hold. It is simply not the daily hook.

---

## 4. The Turn — assigned-side debate

You asked how Agora could deliberately train steelmanning by requiring users to defend positions they reject. This is the design.

**One claim a week, you are assigned the side you did not take.**

### Why assignment rather than invitation

Choosing to argue the other side is a virtue signal. Being assigned it is training. The distinction matters because the whole mechanism depends on the absence of choice: **when the side is not yours, your ego is not on the line**, which is the most effective structural defence against motivated reasoning that exists. It is also how competitive debate has trained people for a century.

The by-product is the real prize: having argued a position properly, you can no longer believe only fools hold it. Nothing else we could build produces that effect as reliably, and it is the single strongest antidote to the contempt that makes online argument worthless.

### The mechanic

**Cadence:** weekly, not daily. Named — *The Turn* — so it becomes a ritual rather than a chore.

**Onboarding:** opt-in for the first month, then normalised as part of the week. Assignment is a privilege of membership, framed as the hard training, not an obligation imposed.

**The task:** write the strongest case for the position you rejected. Same three stages, same coach, same evidence graph — which now surfaces the atoms that *undermine* your actual view. That is worth noting: The Turn is the moment the symmetric-retrieval rule pays off most.

**The scoring, and this is the innovation:** you are not judged by a rubric or by us.

> **Your steelman is rated by people who actually hold the view.**
>
> *"Would an advocate say you understood them?"*

Peer attestation from the other side is nearly impossible to game, socially meaningful, and it produces the magic moment: an opponent saying *"yes — that's my argument, and you put it better than I did."*

**Success condition:** advocates endorse it. **Stretch condition:** readers cannot tell which side you actually hold — the ideological Turing test, run as a game (`SOCIAL_LEARNING_DESIGN.md` §4).

### What it feeds

The Turn is the primary source of the Steelmanning standing in `REPUTATION_SYSTEM.md`, and it is the single mechanic most likely to be described to a friend. It is also, deliberately, the hardest thing in the product — which is what makes standing in it worth having.

---

## 5. What this changes

| Change | Consequence |
|---|---|
| Opposition is guaranteed within 24h | Seeded manually at first. Non-negotiable — it is the difference between a community and an audience |
| The Review Board exists | The highest-value screen in the product, and it does not exist today |
| Revisions are first-class, versioned artifacts | Data model change: arguments become versioned objects with diffs |
| Three self-predictions per cycle | Calibration becomes a lens on your reasoning, not a separate game |
| The Turn, weekly | New scheduled surface; new peer-attestation mechanism |
| One rebuttal, not threads | Kills the escalation spiral at the format level |

**The daily floor is unchanged at 90 seconds** — predict, position, reveal. Everything above is the depth path, and most users on most days will not walk it. That remains correct.

**What I would build first, given the loop above:** stage 4 and stage 5. Not more of stages 1–3. Opposition and the Review Board are where the learning is, they are what makes this a training environment rather than a publishing tool, and they are the two things a competitor cannot copy without also building a community.
