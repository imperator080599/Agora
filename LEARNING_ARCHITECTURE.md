# LEARNING ARCHITECTURE — The Pedagogy of Agora

**Status:** Proposed. Supersedes the learning claims in `VISION_V2.md` §11 and reframes the product hierarchy again.
**Date:** 2026-07-25

---

## 0. One correction before we begin

You wrote: *"The debate should become the environment. The real product should be learning."*

I agree with the destination and I want to sharpen the mechanism, because the naive reading of that sentence would build the wrong product.

**The debate is not scaffolding to be discarded once the curriculum exists. The debate is the reason the curriculum transfers.**

This is the central empirical finding in the field and it is uncomfortable: **decontextualised critical-thinking training reliably fails to transfer.** A century of evidence, from Thorndike's demolition of formal-discipline theory through the modern brain-training literature, says the same thing. People trained on the Wason selection task in one framing fail it in another. Cogmed and Lumosity improve the trained task and essentially nothing else. Students who can identify a syllogism on a worksheet do not notice a bad argument in a meeting.

A Gym without an Arena produces people who are excellent at Agora exercises. That is Duolingo's real failure mode — enormous engagement, a great deal of measurable in-app progress, and a well-documented gap between that progress and the ability to hold a conversation in the language. If we build only the school, we build that.

What the evidence says *does* transfer is narrower and more specific:

- **Statistical and methodological reasoning transfers.** Nisbett's group showed repeatedly that training in statistics, methodology and microeconomics changed how people reasoned about everyday events well outside the training domain — law of large numbers, regression to the mean, sunk cost, opportunity cost. These are abstract, rule-like schemas that survive recontextualisation.
- **Argument mapping produces unusually large gains.** Van Gelder and Twardy's work found roughly 0.7–0.8 SD improvement on standardised critical-thinking instruments over a single semester — several times the gain from a typical semester of undergraduate study. Making argument structure *visible and manipulable* is one of the highest-yield interventions known in this area, which is direct empirical support for the Toulmin graph we already designed.
- **One-shot debiasing works and persists.** Morewedge and colleagues found that a single training game measurably reduced confirmation bias, anchoring and fundamental attribution error, with effects still present at eight weeks and beyond. Debiasing is not hopeless; it is specific.
- **Calibration training works.** The Good Judgment Project showed that a short probabilistic-reasoning module plus repeated feedback measurably improved forecasting accuracy.

Notice what every success case shares: **an abstract rule, practised across varied contexts, with explicit bridging to real situations, under feedback.** Salomon and Perkins call this "high-road transfer" — it requires deliberate mindful abstraction and it does not happen by accident.

So the architecture is:

> **The Gym isolates the sub-skill. The Arena is where it becomes yours.**
>
> Drills give you the abstract rule and the repetitions. Real argument — with real stakes, an audience that disagrees, and consequences you care about — is the varied, authentic context that makes the rule survive contact with the world. Remove either half and the learning does not stick.

Learning is the product. The debate is not the environment surrounding the product; **the debate is a load-bearing component of the pedagogy.** That is the correction.

---

## 1. How people actually get better at reasoning

### 1.1 Reasoning is not one skill

This is the first thing a learning scientist would insist on. "Critical thinking" is not a faculty you strengthen like a muscle. It is a bundle of separable competencies — identifying an unstated warrant, distinguishing correlation from cause, estimating a base rate, restating an opponent's view faithfully — each of which is learned, practised and forgotten independently.

You cannot practise "reasoning." You can practise *finding the hidden assumption*. This is why `REASONING_SKILL_TREE.md` exists and why it must be granular enough that every node names something a person can attempt in sixty seconds.

### 1.2 The mechanisms we build on

| Mechanism | What it says | What it means here |
|---|---|---|
| **Deliberate practice** | Improvement comes from effortful work at the edge of ability on a well-defined task with immediate feedback — not from experience alone | Every drill has one target skill, a right-ish answer, and instant explanatory feedback |
| **Retrieval practice** | Retrieving beats re-studying, by large margins, for durable learning | We test far more than we explain. No lecture mode |
| **Spacing** | Distributed practice beats massed practice for retention | A scheduler re-tests each skill at expanding intervals |
| **Interleaving** | Mixing problem types improves *discrimination* even though it feels worse during practice | Never block-drill one fallacy. Blocked practice teaches recognition-when-told; interleaved teaches noticing |
| **Desirable difficulties** | Conditions that slow acquisition often improve retention and transfer | Target ~75–85% success, not 95%. Comfortable practice is wasted practice |
| **Worked examples & expertise reversal** | Worked examples help novices and *harm* experts | Scaffolding must fade — which the coach already does |
| **Self-explanation** | Learners who explain *why* an answer is right learn substantially more | Every drill ends with a one-tap or one-line "why" |
| **Productive failure** | Attempting before instruction beats instruction-first for conceptual depth | Let them write the flawed argument, then coach. Never pre-teach the lesson |
| **Metacognition** | Expertise includes knowing when you don't know | Calibration is a first-class strand, measured with a proper scoring rule |
| **Protégé effect** | Teaching someone else improves your own understanding | Ladder rung 5 (supply a missing warrant for another user) is pedagogy, not altruism |
| **Authentic performance** | Skills practised in realistic, consequential contexts transfer far better | The Arena |

**A caveat I owe you on deliberate practice.** The strong Ericsson claim — that practice explains most of expert performance — has not survived meta-analysis well; Macnamara and colleagues put it at roughly a quarter of variance in games and far less in less-structured domains. Practice is necessary and insufficient. Design for it, do not promise that ten thousand hours produces a master.

### 1.3 The transfer design rules

Because transfer is the whole ballgame, four rules bind every exercise and every coaching moment:

1. **Name the abstract rule.** Feedback always states the transferable principle, not just the local fix. *"Correlation in a chosen sample doesn't establish cause"* — not *"this sentence is wrong."*
2. **Vary the surface, hold the structure.** The same skill appears across economics, history, law, science and everyday life. Surface variety is what forces abstraction.
3. **Bridge explicitly.** Periodically prompt for application outside the product: *"Where did you see this pattern this week?"* Bridging prompts are among the cheapest transfer interventions available.
4. **Practise noticing, not just solving.** The hard part in the wild is not analysing a flagged argument; it is realising one needs analysing. Drills must include items with *no* defect, so the skill being trained is discrimination rather than defect-hunting.

Rule 4 is the one most critical-thinking curricula omit, and it is why their graduates can pass a test and still not catch a bad argument at work.

---

## 2. The three-space architecture

```
        ┌──────────────────────────────────────────────────────┐
        │  THE GYM            isolate · drill · space · adapt   │
        │  30s–3min · daily · adaptive · no audience            │
        │  Acquires the sub-skill                               │
        └───────────────────────┬──────────────────────────────┘
                                │  the rule, practised
                                ▼
        ┌──────────────────────────────────────────────────────┐
        │  THE ARENA          integrate · perform · be answered │
        │  Real claim · real opponents · real consequence       │
        │  Makes the skill transfer                             │
        └───────────────────────┬──────────────────────────────┘
                                │  what you struggled with
                                ▼
        ┌──────────────────────────────────────────────────────┐
        │  THE STUDY          reflect · measure · re-plan       │
        │  Weekly · your errors · your profile · what's next    │
        │  Converts experience into learning                    │
        └──────────────────────────────────────────────────────┘
                    │                              ▲
                    └──────── prescribes drills ───┘
```

**The Gym** acquires. **The Arena** transfers. **The Study** is the loop that closes them — and it is the piece almost every learning product omits.

Experience does not automatically become expertise. Doctors with twenty years of practice are not reliably better diagnosticians than those with five, because they get outcomes without structured reflection. The Study is where a week of arguing becomes a diagnosis: *here is the error you made four times, here is the drill for it, here is what to try next week.* Without it we have activity, not learning.

**Time budget for an engaged user:** ~3 min/day in the Gym, ~5 min/day in the Arena, ~10 min/week in the Study. Under thirty minutes a week, which is the honest budget a real person has.

---

## 3. The learning journey

Each stage lists the *capability*, the observable *evidence* of it, and the *identity shift* — because durable learning shows up as a change in self-concept, not only in scores.

### Month 1 — "Arguments have parts"

**Capability:** Can identify a thesis and separate it from the reasons given for it. Notices that some sentences do work and others are decoration. Recognises three or four common defects when they are pointed out.

**Evidence:** Structure drills above chance and rising. First arguments have a stated thesis. Coach interventions ~4 per argument, mostly structural.

**Identity:** *"I'm someone who has opinions and can say why."*

**Risk:** Overwhelm. Disclosure is capped at one observation (`ARGUMENT_EVALUATION.md` §6).

### Month 3 — "There's a step I didn't write down"

**Capability:** Finds unstated assumptions with prompting. Distinguishes correlation from causation reliably in clean cases. Cites evidence and begins to notice when it does not fit. Recognises maybe eight defect patterns unprompted.

**Evidence:** Warrant-identification drills at ~70%. Evidence attached to most arguments. Coach interventions ~2.5 per argument. First position change on evidence.

**Identity:** *"I can tell when an argument is doing something suspicious."*

**The month-3 milestone that matters most:** the first time they catch their own error *before* the coach flags it. That moment — self-detection — is the strongest early predictor of whether someone will still be here at month twelve, and it should be surfaced to them explicitly and celebrated as the real thing it is.

### Month 6 — "What would the other side say?"

**Capability:** Anticipates the strongest counterargument before it is raised. Steelmans an opposing view recognisably. Expresses confidence proportional to evidence. Distinguishes rebutting from undercutting objections.

**Evidence:** Counterargument addressed pre-emptively in >60% of arguments. Brier score on split predictions improving. Coach interventions ~1.3 per argument. Blind comparison of month-1 vs month-6 arguments favours month-6.

**Identity:** *"I argue with the best version of the other side."*

### Year 1 — "It follows me out of the building"

**Capability:** Evaluates evidence quality unaided — design, scope, replication, interest. Recognises most common defects in the wild. Handles multi-step causal chains. **Transfers: uses the moves at work, in reading, in conversation.**

**Evidence:** Transfer items in never-practised domains at competent level. Self-reported and, better, situationally-probed use outside Agora. Contributing verified evidence atoms.

**Identity:** *"This is how I think now."*

Year 1 is where the product either has justified itself or has not. Everything before is in-product improvement; this is the first stage where the claim in our positioning is actually being tested.

### Year 2 — "Uncertainty is a quantity"

**Capability:** Probabilistic reasoning — base rates, updating, appropriate qualification. Constructs and stress-tests analogies. Recognises their own motivated reasoning while it is happening. Teaches others effectively.

**Evidence:** Calibration curve near-diagonal. Mentor-rung contributions adopted by others. Argues well on questions where their own interests are engaged, which is the hardest case.

**Identity:** *"I can be wrong, and I'd rather find out."*

### Year 3 — "Original, and defensible under pressure"

**Capability:** Synthesises across domains. Introduces mechanisms and framings the debate did not have. Defends a position through sustained adversarial pressure without either collapsing or entrenching. Curates evidence at a standard others rely on.

**Evidence:** Originality dimension consistently strong. Sustained rebuttal exchanges. Collections used by many. Expert blind raters place their arguments in the top decile.

**Identity:** *"I'm someone others come to when they need to think something through."*

---

## 4. What makes this stick — the motivation question

You asked why millions open Duolingo, play chess and solve Wordle. The honest answer is that these products share five properties, and only one of them is a reward system.

| Property | Chess | Wordle | Duolingo | **Agora** |
|---|---|---|---|---|
| Immediate honest feedback | ✓ you lose | ✓ green/yellow | ✓ | ✓ drill feedback, and a human disagreeing |
| An honest measure you trust | ✓ Elo | — | ~ | **the reasoning profile (§`ASSESSMENT_FRAMEWORK.md`)** |
| Low activation energy | ~ | ✓ 3 min | ✓ 5 min | ✓ one drill, one position |
| Difficulty matched to skill | ✓ | — | ~ | ✓ adaptive |
| Felt competence growth | ✓ | ✓ | ~ | **the design target** |

**Chess is the closest model, and the reason is Elo.** Players return for decades to a game with no rewards, no streaks and no confetti, because the rating is *honest*. It goes down. It cannot be farmed. It means something. A number you cannot cheat is more motivating than a number you can, because only the first one tells you something true about yourself.

**That is why the assessment framework is the motivation system.** Not XP — a measure people believe. This is also why gaming-resistance is a motivational requirement and not merely an integrity one: the moment users work out that the profile can be farmed, it stops being interesting to move.

**Wordle's real lesson is not scarcity, it is shareability without status.** The emoji grid shows the *shape* of your reasoning, never your score, so sharing is conversation rather than boasting. Our Daily Reasoning drill should share the same way — the pattern of how you got there, not how you rank.

**And the moment we are actually designing for:** the small internal jolt of *catching yourself*. Noticing your own overreach before the coach does. That is our green-tile equivalent, and unlike a manufactured reward it is intrinsically tied to having genuinely improved. We should detect it and name it:

> *"You hedged that claim yourself. Three months ago I'd have flagged it."*

That sentence, delivered truthfully at the right moment, is worth more than any badge we could design.

---

## 5. The honest limits

A learning product that overclaims is a learning product nobody trusts, and our credential ambitions make integrity here strategically load-bearing rather than merely nice.

**We do not raise general intelligence.** Nothing does, reliably. We improve argumentation skill.

**Transfer is real but partial.** We should expect meaningful gains in evaluating and constructing arguments, and much weaker effects on domain knowledge or motivated reasoning about identity-defining topics. Political reasoning is the hardest case in the literature and we should not pretend otherwise.

**Some of the effect will be selection.** People who choose a reasoning gym are not typical. Our control cohorts exist to separate the product's effect from the population's.

**Six months is the honest minimum** for measurable, blind-verifiable change. Any claim of transformation in weeks is marketing, and it would be the kind that eventually destroys the credential.

**What we will publish, whatever it says:** the longitudinal study. If reasoning does not improve, that finding is more valuable to the world than another engagement metric, and publishing it is the only thing that would make anyone believe us when it does.
