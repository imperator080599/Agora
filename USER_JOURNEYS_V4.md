# User journeys — V4

**Companion to `prototype/agora-v4.html`, which is the primary specification.**
This document records only what the artifact cannot show: what happens off-screen,
over weeks, and why the sequence is ordered the way it is.

**Date:** 2026-07-26

---

## The loop, once

```
NEWS ──▶ POSITION ──▶ IDEA ──▶ ARGUMENT ──▶ EXAMPLE ──▶ READING
                                                           │
   RECORD ◀── REVISION ◀── REVIEW ◀── OPPOSITION ◀── PUBLISH
```

Five of those steps are the user's. Five are Agora's. The artifact's landing screen
labels which is which, because the product's whole claim rests on the coach never
crossing the line.

---

## J1 · First session — a stranger, ten minutes

| Step | Screen | What they do | What they get |
|---|---|---|---|
| 1 | News | Scan six stories from named sources | Recognition. This is a real news surface, not a puzzle |
| 2 | Article | Read the standfirst, see *"the claim under this story"* | The question underneath the reporting |
| 3 | Position | **Predict** where everyone will land, then commit | A guess they can be wrong about |
| 4 | Position | Split reveals: 34 / 41 / 25 | The first surprise. Their model of the room was off |
| 5 | Composer | Write an idea, then a mechanism | The margin asks one question they hadn't answered |
| 6 | The Reading | See their argument parsed | **The moment.** Two assumptions they never wrote down |
| 7 | Examples | Seven cases across six domains | Bell Labs breaks their mechanism. They didn't know that |
| 8 | Publish | Name the part a critic will hit first | A prediction that will resolve in 24 hours |

**The activation event is step 6, not step 8.** Publishing is the commitment;
the reading is the thing they tell someone about. Everything before step 6 exists
to earn the right to show it.

**Where this journey fails.** If the parse is wrong — if it names a thesis the user
does not recognise as theirs — the product is dead on the spot. Recovery is worse than
a bad answer in chat, because the claim was "I understood you." Every other risk is
smaller than this one.

---

## J2 · The return — 24 hours later

The only journey that matters commercially. A user who does not come back for the
review board is a user we did not teach.

1. **Notification:** *"Someone who disagrees with you answered. The review board is open."*
   Not "3 new replies." The specificity is the point.
2. **Review board:** the attack map shows four parts of their argument and which one was hit.
3. **Predicted vs actual:** they said *example*. It was the *implicit assumption*.
4. **"What I flagged, and you published anyway"** — the coach's receipt.
5. **The one move:** a single suggested narrowing, in their own vocabulary.
6. **Revision:** they pick a tag before editing. *Narrowed* is not a loss.
7. **The acknowledgement:** the person who disagreed says *"Yes — that answers it."*

Step 7 is the rarest event in the product and the only one that certifies learning
rather than activity. It is also the only thing worth building a notification around.

---

## J3 · The long arc — twelve months

Nothing here is a score. Four independent signals, each unfakeable on its own:

| Signal | Month 1 | Month 12 | Why it can't be gamed |
|---|---|---|---|
| Argument structure | 2 nodes, 0 warrants | 11 nodes, 2 warrants, 1 objection pre-empted | Structure is parsed, not declared |
| Coach interventions | 4.1 per argument | 1.3 | Goes **down** as you improve |
| Attack surface | thesis and examples | implicit assumptions, then evidence | Determined by opponents, not by you |
| Their own prose | one sentence, three universals | one sentence, one bounded claim, one exception | It's their writing, side by side |

The fourth is the one users actually feel. The other three explain it.

**Why no single score.** Any aggregate invites optimisation of the aggregate. A number
that goes up is a number people farm; and the moment reasoning quality is farmable, the
record stops being evidence of anything. The cost is that progression is harder to feel
in week one — which is what the season summary line is for.

---

## What changed from V3

| Change | Reason |
|---|---|
| **The Reading became its own screen** | The parse was a sidebar note in V3. It is the product's central claim and needed to be the destination the composer routes to |
| **Examples show where they break** | V3 retrieved supporting cases only. Symmetric retrieval — supports, bounds, breaks — is the difference between a research tool and a flattery machine |
| **Publish is gated on predicting your weakest link** | Creates the resolvable prediction the review board pays off 24h later. Without it, returning has no hook |
| **Attack surface is a heatmap, not a bar** | The insight is *movement up the stack over four quarters* — a shape, not a magnitude |
| **Investor lens is a toggle, off by default** | See push-back 1 below |

---

## Three places I pushed back

**1 · "Every screen should answer why Reddit can't copy this."**

Built as a toggle, off by default. Copy that argues with a competitor on every screen
reads as defensive and makes the product feel like a pitch deck — which is exactly the
failure mode of a prototype meant to be shown to *early users* as well as investors.
The lens gives the investor audience a denser argument than in-line copy could, without
the user-facing product carrying it. One artifact, two readings.

**2 · "The coach should detect all twelve things."**

It does — but not simultaneously, and not in the margin. Twelve live diagnostics while
someone is mid-sentence is a linter screaming at a first draft; the documented effect is
that people write shorter and safer, which is the opposite of the goal. So: the margin
holds at most three notes and only ever asks questions. The full twelve-capability parse
fires **once**, on request, on a finished argument, on its own screen. Sparse while
writing, exhaustive on demand.

**3 · "Retrieve examples from thirteen domains."**

Seven cases are shown, drawn from six domains, with the domain breadth visible as
filter chips carrying counts. Thirteen simultaneous examples is a search results page,
and a search results page is skimmed. The signature moment is not *how many* cases came
back — it is reading one case from military history and recognising your own economic
argument in it. That recognition needs a card you actually read.

---

## The unresolved thing

This is the fourth time the loop has been designed and the concierge experiment
(`CONCIERGE_RUNBOOK.md`) has still not been run. The artifact is now good enough to
run it *with* — fifteen people, fourteen days, the question being whether anyone
revises after opposition. Nothing in this document is knowledge until that happens.
