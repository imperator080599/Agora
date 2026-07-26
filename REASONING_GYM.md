# REASONING GYM — The Exercise Ecosystem

**Status:** Proposed. Implements the acquisition half of `LEARNING_ARCHITECTURE.md` §2 against `REASONING_SKILL_TREE.md`.
**Date:** 2026-07-25

---

## 1. What makes a gym extraordinary rather than merely large

Thousands of exercises is the easy part. Four properties are what separate a gym people return to for years from a quiz app they abandon in a fortnight.

**1 · Every item is a genuine attempt, not a recall.** Retrieval practice beats re-study by wide margins. The Gym never explains before asking. You attempt, you find out, *then* you understand — productive failure, which produces deeper conceptual grasp than instruction-first sequencing.

**2 · Interleaved, always.** Blocked practice — twenty ad-hominem items in a row — teaches you to spot ad hominem *when you already know that's the answer*. It feels like learning and produces almost none. Interleaved practice feels worse and teaches discrimination, which is the actual skill. **Sets are always mixed, and mixed across strands.**

**3 · Roughly a quarter of items have no defect at all.** The hard part in the wild is not analysing a flagged argument; it is noticing one needs analysing. A gym where every item is broken trains defect-hunting, which is a different and less useful skill than judgement. Clean items are what make the training honest.

**4 · Difficulty tracks ability, in the discomfort band.** Target **75–85% success**. Higher is comfortable and wasted; lower is demoralising. This is both the flow condition and the desirable-difficulty condition, and they agree.

> **The design target is not engagement. It is the feeling of catching yourself.** Everything below exists to produce, as often as possible, the moment where a user notices their own bad move before we do.

---

## 2. Exercise taxonomy

Twenty-two types across three durations. Each names its target skills.

### 30-second items — *recognition*

| # | Type | Task | Skills |
|---|---|---|---|
| 1 | **Find the thesis** | Highlight the sentence carrying the claim | A1 |
| 2 | **Premise or conclusion?** | Label each sentence | A2 |
| 3 | **Spot the flaw** | One defect, or "none" | A5, A6, F2, D6 |
| 4 | **Evidence or assertion?** | Classify each statement | B1 |
| 5 | **Cause or correlation?** | Which does this passage establish? | C1 |
| 6 | **Relevant or not?** | Does this bear on the claim? | A7 |
| 7 | **Confidence check** | Is the confidence proportionate to the support? | E1, F4 |
| 8 | **Strawman detector** | Is this a fair restatement? | D6 |

### 60-second items — *analysis and comparison*

| # | Type | Task | Skills |
|---|---|---|---|
| 9 | **Find the hidden assumption** | Type the unstated bridge | **A4** |
| 10 | **Which evidence is stronger?** | Two atoms, pick one, say why | B2, B4, B7 |
| 11 | **Rank by strength** | Order three arguments | A7, B2, D3 |
| 12 | **Match evidence to link** | Drag atoms onto the argument-graph edge they support | B2, A3 |
| 13 | **Name the confounder** | What else could explain this? | C2 |
| 14 | **Predict the objection** | What will the strongest reply be? | D3 |
| 15 | **Scope check** | Does this finding support this conclusion? | B5 |
| 16 | **Which analogy breaks?** | Find where the mapping fails | H3 |
| 17 | **Base rate** | Estimate, then compare to the real one | E2 |
| 18 | **Predict the split** | Guess the distribution; scored by Brier | E5 |

### 3-minute items — *production*

| # | Type | Task | Skills |
|---|---|---|---|
| 19 | **Repair the chain** | Insert the missing causal step | C4 |
| 20 | **Steelman it** | Write the strongest version of a view you reject | **D2** |
| 21 | **Rewrite the overreach** | Narrow a claim until the evidence actually supports it | B2, F4, E4 |
| 22 | **Concede correctly** | Give ground on a real point without losing the core | D5 |

**Item 12 is the signature exercise of the Gym.** Dragging evidence onto a specific *edge* of an argument graph makes fit visible in a way no prose exercise can — you can literally see that the link you cited nothing for is bare. This is argument mapping applied as a drill, and argument mapping is the intervention with the strongest effect size in the critical-thinking literature.

**Item 20 is the signature exercise of the product.** It is the hardest to grade, the most valuable to practise, and the one users will describe to other people.

---

## 3. Where items come from

Four sources, deliberately weighted toward the authentic.

| Source | Share | Why |
|---|---|---|
| **Real Agora arguments** (anonymised, consented) | ~50% | Authentic, messy, domain-varied — the closest thing to the wild |
| **Evidence Graph derivations** | ~25% | Free correct answers: `undermines` edges are counterarguments, `qualifies` edges are scope items |
| **Curated classics** | ~15% | Historical debates, landmark cases, published exchanges — depth and cultural range |
| **Generated** | ~10% | Fills coverage gaps; **human-verified before use** |

**Real user arguments are the gold, and they compound.** A drill built from something a person genuinely wrote three weeks ago is more instructive than any synthetic item, because real reasoning fails in ways synthetic reasoning does not — it is confused rather than neatly fallacious, and learning to handle confusion is the point. Every argument published in the Arena is a potential item, so **the Gym gets better as the Arena grows.** That is a compounding loop no standalone learning app has access to.

**The evidence graph gives us correct answers for free.** An atom with an `undermines` edge to a mechanism *is* the counterargument for item 14. A `qualifies` edge *is* the scope answer for item 15. Item generation becomes graph traversal rather than authoring, which is what makes thousands of items tractable.

**Generation is proposal, never authority.** Same rule as evidence (`EVIDENCE_GRAPH.md` §7): a model may draft an item; a human confirms the key before it enters the bank.

---

## 4. Adaptivity

**Ability estimation.** Each skill carries a running estimate updated after every response, using an item-response model — item difficulty and learner ability on the same scale. This is the standard approach in serious adaptive assessment and it gives two things at once: efficient practice, and a measurement that means something (`ASSESSMENT_FRAMEWORK.md`).

**Selection.** Each session mixes, roughly:

- **50%** at the frontier — target difficulty for ~80% success on skills currently being developed
- **25%** spaced review — skills previously mastered, due for re-test on an expanding schedule
- **15%** prerequisite repair — where a downstream failure implies an upstream gap
- **10%** stretch — deliberately above level, framed as such, because occasional visible difficulty is motivating when it is honestly labelled

**Spacing.** Successful retrieval pushes the next review out; failure pulls it in sharply. Skills genuinely decay, and a tree that pretends otherwise is lying to the learner.

**Diagnostic inference.** Repeated failure on item 9 (hidden assumption) with success on items 1–3 is a specific diagnosis — structure is fine, warrant identification is not — and it prescribes a specific path. This is what distinguishes adaptive practice from a shuffled question bank.

---

## 5. Feedback

The most important design surface in the Gym, because feedback *is* the learning.

Every item resolves in four beats:

```
1  OUTCOME      right / wrong / partial — immediate, no ceremony
2  THE RULE     the transferable principle, stated abstractly
3  THIS CASE    how the rule applies here, concretely
4  YOUR TURN    a one-line self-explanation prompt
```

Worked:

```
✗  You said this establishes causation.

   THE RULE   An observed association plus a plausible story is not
              evidence of cause. The story makes causation imaginable,
              not likely.

   THIS CASE  Firms that adopted the four-day week also had healthier
              margins beforehand — profitability may drive adoption
              rather than the reverse.

   YOUR TURN  What single piece of evidence would distinguish those?
              ▸ ______________________________
```

Four commitments:

- **Beat 2 is non-negotiable.** Feedback that only fixes the instance teaches the instance. Naming the abstract rule is the mechanism of transfer, and it is what most quiz products omit.
- **Beat 4 is where most of the learning happens.** Self-explanation produces large gains; the prompt costs one line and is answered in ten seconds. Answers are graded loosely and never punitively.
- **Wrong answers get more space than right ones.** An error is the highest-value moment in a session and should feel like one — informative, unhurried, never scolding.
- **Never "Correct! 🎉".** The reward is understanding. Manufactured celebration signals that the content is boring enough to need decoration.

---

## 6. Session shapes

| Shape | Duration | Structure |
|---|---|---|
| **Warm-up** | 90s | 3 items, mixed, one below level — a gentle door in |
| **Standard set** | 3–4 min | 6 items, interleaved across ≥3 strands, one clean item |
| **Skill focus** | 5 min | Still interleaved, but weighted to one skill after a diagnosis |
| **Sparring** | 5–10 min | Live exchange against a calibrated AI opponent |
| **Deep rep** | 10 min | One 3-minute production item plus revision under coaching |
| **The Daily** | 3 min | One shared item, everyone gets the same one — §7 |

**Sparring** deserves emphasis. An AI opponent that argues the other side *at your level*, never gets bored, never takes it personally, and is available at midnight solves the availability problem a small community cannot. It sits comfortably inside D22 — arguing against you is not writing for you. Human opponents remain the point; the machine is the pads, not the ring.

---

## 7. The Daily — one shared item

Every user gets **the same single item each day.** Three minutes. Resolves at midnight.

Why this earns its own section:

- **A shared object of conversation.** Everyone attempted the same thing, so there is something to talk about that is not politics.
- **Bounded and unmissable.** One item is not a chore. Wordle's discipline: the scarcity is the feature.
- **Shareable without status.** You share the *shape* of your reasoning — which distractor you fell for, how many steps you took — never a score. The emoji-grid lesson: sharing pattern rather than rank makes it conversation instead of boasting.
- **It reveals the population.** *"64% of people picked the same wrong answer you did, and here's why it's seductive"* is a genuinely fascinating thing to learn about yourself and everyone else.

The Daily is our most plausible organic-growth mechanic, and notably it does not require virality, outrage, or a follower graph.

---

## 8. Making it feel good without bribery

You asked for addictive-through-improvement, not addictive-through-reward. Six mechanisms, none of which is a point:

**1 · Show the difficulty rising.** *"These items are harder than the ones you were doing in April."* Objectively true, and far more satisfying than a level-up, because it is a fact about you rather than a number we invented.

**2 · Name the self-catch.** When a user avoids an error they used to make, say so. *"You checked the scope before answering. Three months ago you didn't."* This is the single most motivating sentence the product can produce, and it is available only because we keep the record.

**3 · Make the aha the reward.** Design distractors so the moment of understanding is genuinely surprising. Items 13 and 16 in particular should produce an audible *oh*.

**4 · Honest measurement, visibly moving.** Chess players return for decades for a rating with no confetti attached, because it is honest and it goes down. Our ability estimates must be equally trustworthy — which makes gaming-resistance a motivational requirement, not just an integrity one.

**5 · Bounded sessions with a clean end.** Three minutes, six items, done. No infinite scroll, no "one more?" nudge. Respecting the exit is what makes people come back.

**6 · Real stakes visible nearby.** The Arena is one tap away, and the Gym occasionally says *"today's claim needs exactly the move you just practised."* Application is the reward that drills alone cannot give — and it is the transfer bridge doing double duty as motivation.

**What we will not do:** loss-framed streak pressure, variable-ratio rewards, celebratory animation on correctness, leaderboards, or any notification implying we are disappointed in someone. All of these work. All of them would make us the thing we are defining ourselves against.

---

## 9. Quality control

An item bank is only as good as its worst items, and bad items destroy trust faster than good ones build it.

| Control | Method |
|---|---|
| **Key correctness** | Every item human-verified before release; generated items double-verified |
| **Item statistics** | Discrimination and difficulty computed from responses; items that fail to discriminate are retired |
| **Distractor analysis** | A distractor nobody picks is dead weight; one that beats the key is a broken item |
| **Ambiguity detection** | High rates of successful dispute flag the item for review |
| **Political symmetry** | Item sets are balanced by ideological valence, and performance is monitored for asymmetry by user viewpoint — **a release gate**, as elsewhere |
| **Exposure control** | Items used in assessment are never used in practice, and rotate |
| **Dispute path** | Any user can contest an item; upheld disputes credit the user and fix the bank |

The symmetry gate matters here as much as in the coach. A reasoning gym whose items are systematically easier for one political tribe is not a reasoning gym; it is a persuasion instrument, and it would be found out.

---

## 10. What we measure about the Gym itself

| Question | Measure |
|---|---|
| Are people learning, or memorising? | Performance on **held-out** items never practised |
| Is it transferring? | Gym skill gains vs. corresponding Arena behaviour change |
| Is difficulty right? | Success rate distribution — target mode 75–85% |
| Are items good? | Discrimination index; dispute-upheld rate |
| Is it an on-ramp? | Composition rate of drill users vs. non-users |
| Is it wanted? | Voluntary sessions per week, unprompted |
| Is it fair? | Performance parity across viewpoint cohorts on matched items |

The first row is the one that decides whether we built a gym or a quiz. If held-out performance does not rise while practised-item performance does, we are teaching the bank rather than the skill — and we would rather find that out ourselves than have someone else find it out later.
