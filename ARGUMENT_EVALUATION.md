# ARGUMENT EVALUATION — Ten Dimensions, and How to Say Them Out Loud

**Status:** Proposed. Feeds `MOTIVATION_SYSTEM.md` (faculties) and `REASONING_ENGINE.md` (L8 pedagogy).
**Date:** 2026-07-25

---

## 1. Two audiences, one evaluation

The evaluation has two representations and they must never be confused.

**The internal representation** is rich: ten dimensions, sub-scores, confidence intervals, evidence pointers. It drives faculty levels, coach selection, progress tracking, and research. It is never shown raw to anyone.

**The external representation** is sparse: for a beginner, one observation. It is chosen from the internal one by the pedagogy layer, and it is the only thing a human ever sees.

> Most evaluation products fail by showing the internal representation. A person handed ten scores does not think "how instructive"; they think "I am a 4 out of 10 at Clarity", and either optimise the number or stop writing. **The gap between what we compute and what we say is the entire craft here.**

Four rules govern the whole framework:

1. **Criterion-referenced, never norm-referenced.** You are measured against the standard, never against other users. There is no percentile, anywhere.
2. **Evaluate the reasoning, never the position.** A well-argued view we find repugnant must score highly. Enforced by the mirror test (`REASONING_ENGINE.md` §11).
3. **Confidence gates disclosure.** A judgement the evaluator is unsure of is not shown. Silence beats a wrong accusation.
4. **No single overall score.** Ever. §5 explains why.

---

## 2. The ten dimensions

Each has an operational definition, because "logical strength: 7/10" is meaningless unless the thing being counted is specified.

### 1 · Relevance
**Does this bear on the claim's truth?** Three sub-checks — topical (same subject), argumentative (bears on truth, not just neighbourhood), internal (each premise bears on the thesis).
**Signals:** path existence from thesis to claim in the argument graph; premises with no edge to the thesis.
**Verdicts:** `on-point` · `bridged` (works via an unstated step) · `adjacent` · `off-topic` · `orthogonal-but-valuable`.
**Failure to avoid:** treating an unpopular argument as irrelevant. Relevance is judged against the claim, never the majority view.

### 2 · Coherence
**Do the parts hold together?** Internal contradiction, terms that shift meaning mid-argument, orphan premises, a traversable path from premises to thesis.
**Signals:** contradiction edges; equivocation detection on key terms; unreachable nodes.

### 3 · Logical strength
**Do the premises, if true, actually support the thesis?** Inference validity given stated and inferred warrants; unaddressed defeaters; structural fallacies.
**Signals:** warrant presence and plausibility; defeater coverage; circularity; non-sequitur.
**Note:** strength is conditional. We assess whether the *inference* works, not whether the premises are true — assessing premise truth would make us an oracle, which §1 rule 2 forbids.

### 4 · Evidence quality
**Is the support real, well-scoped, and honestly used?** Two factors, multiplied: the atom's own grade (`EVIDENCE_GRAPH.md` §5) and its **fit** to the specific inference it is attached to.
**The dimension people get wrong:** an excellent study that does not bear on your mechanism scores *low*. Prestige is not fit. Detecting the gap between what an atom shows and what the user claims it shows is the most valuable thing this dimension does.
**Also detected:** overreach beyond the finding; cherry-picking against known contrary atoms; scope mismatch.

### 5 · Causal reasoning
**Is the causal story defensible?** Correlation presented as cause; unaddressed confounders; reverse-causation possibility; mechanism specified or merely asserted; selection effects.
**Why separate from logical strength:** causal error is the single most common defect in real argument and the one users improve on most measurably. It earns its own dimension because tracking it separately is how we show people the improvement.

### 6 · Completeness
**Is anything load-bearing missing?** Unstated premises the argument needs; the strongest objection unaddressed; scope conditions unspecified.
**Calibration:** completeness is not length. A three-sentence argument can be complete; a page can be full of holes. We measure gaps in the *graph*, not word count.

### 7 · Originality
**Does this add something the debate did not have?** Embedding distance from existing arguments on this claim; introduction of a new mechanism or atom; a novel bridge between existing positions.
**Critical rule: originality is rewarded, never required.** Sometimes the common argument is the right one, and a beginner who arrives at it independently has done real work. This dimension may raise an evaluation; it may never lower one. It is the only asymmetric dimension in the set.

### 8 · Clarity
**Would a competent reader understand this on the first pass?** Sentence complexity, ambiguous referents, undefined jargon, hedging density, structural signposting.
**The one dimension where the coach may touch wording** — on explicit request, shown as a diff, one tap to reject, and never for content, only for legibility.

### 9 · Intellectual humility
**Is confidence proportional to evidence?**

The subtle one, and easy to get badly wrong. Naively rewarding hedging produces a platform of mush where nobody says anything. So this dimension is **calibration, and it is two-tailed**:

| | Evidence is strong | Evidence is weak |
|---|---|---|
| **Stated confidently** | ✓ well calibrated | ✗ overclaiming |
| **Stated tentatively** | ✗ under-claiming | ✓ well calibrated |

Both off-diagonal cells score low. A user who writes "it seems possible that perhaps" about a well-replicated finding is *miscalibrated*, not humble. Also counted: acknowledging what would change your mind, and engaging the opposing view at its strongest.

### 10 · Counterargument quality
**Did you meet the real objection?** Whether the strongest available counter was addressed, and how faithfully it was rendered.
**Steelman score:** semantic distance between the user's rendering of the opposing view and the best available version in our debate map. Large distance in the weakening direction is a strawman.
**Also:** was the rebuttal responsive to that objection, or to a different one?

---

## 3. Scoring mechanics

Each dimension produces `{ level, confidence, evidence[] }`.

**Levels are four bands, not a 100-point scale.** `developing` · `competent` · `strong` · `exemplary`, plus `not-applicable`. Coarse bands are honest about our resolution — we cannot reliably distinguish a 71 from a 74, and pretending otherwise invites optimisation of noise. Numeric values exist internally for trend analysis only.

**Confidence** is reported per dimension. Below threshold, the dimension is withheld from the user and excluded from faculty computation. Short arguments legitimately produce many low-confidence dimensions, and that is fine — we say less.

**Evidence pointers** anchor every judgement to a specific span. No judgement may be produced that cannot point at the text that caused it. This makes evaluations auditable and, when a user disputes one, resolvable.

---

## 4. Reliability — the part that decides whether any of this is real

An evaluator nobody can trust is worse than none, so:

**Gold sets.** Several hundred arguments spanning quality levels, domains, and both sides of every claim, labelled by trained human raters with measured inter-rater agreement. We do not ship a dimension whose human raters cannot agree with each other — if experts cannot, the machine's confidence is fiction.

**Different grader family.** The model that evaluates must not be the model that coaches (`VISION_V2.md` §11). A coach grading its own students measures its own consistency and calls it learning.

**The mirror test, applied here too.** Structurally identical arguments on opposite sides of a claim must receive statistically indistinguishable evaluations. Tracked per release; divergence blocks.

**Drift monitoring.** Score distributions tracked over time; a shift not explained by a cohort change means the evaluator moved, and every longitudinal claim we make becomes invalid.

**Dispute path.** Any user can contest an evaluation. Disputes are sampled into the gold set. Users who dispute successfully are doing us a service and should be told so.

---

## 5. Why there is no overall score

The most-requested feature we should refuse.

A single number invites four failures at once. It gets **ranked** — the moment an overall score exists, someone builds a leaderboard, and we are a status game. It gets **optimised** — Goodhart applies immediately, and the cheapest dimension to move dominates behaviour. It becomes **identity** — "I am a 62" is a statement about the self, and identity threat makes people avoid hard tasks, which is precisely backwards. And it **destroys information** — collapsing "strong structure, weak evidence" into one number throws away the only actionable thing we knew.

What replaces it is a **shape**: a profile across dimensions, shown privately, which says *you reason like this* rather than *you are worth this*.

```
   Structure       ▓▓▓▓▓▓▓░░░   strong
   Evidence        ▓▓▓▓░░░░░░   developing   ← your leverage point
   Counterargument ▓▓▓▓▓▓░░░░   competent
   Causal          ▓▓▓▓▓▓▓▓░░   strong
   Clarity         ▓▓▓▓▓▓▓░░░   strong
   Calibration     ▓▓▓▓▓░░░░░   competent
```

A shape has no ordering. Two people with identical averages have different shapes and different next actions, which is exactly right.

---

## 6. Communicating it without discouraging beginners

The hardest design problem in this document. A beginner shown ten dimensions of critique does not become a better thinker; they leave.

### Progressive disclosure by stage

| Stage | What is shown |
|---|---|
| **First 5 arguments** | **One** observation — the single highest-leverage dimension. No profile, no levels, no dimension names. |
| **6–20** | Two observations, dimensions now named so the vocabulary starts to build |
| **21+** | Up to three; profile available on request |
| **Advanced / on demand** | Full profile with per-dimension detail |

### Six rules for the words

**1. Lead with a genuine strength — and only a genuine one.** Naming what is strong is not softening; it is information a person can build on. But manufactured praise is condescension, and users detect it instantly. If nothing is strong, say nothing and go straight to the observation.

> ✓ *"Your third premise does the work the first two only gesture at."*
> ✗ *"Great start! Now let's look at some areas for improvement."*

**2. Target the artifact, never the person.**

> ✓ *"This premise isn't supported yet."*
> ✗ *"You're making unsupported claims."*

**3. Question over verdict, wherever a question will do.** A question makes the user do the reasoning, which is the entire point.

> ✓ *"What makes you believe the second premise?"*
> ✗ *"Premise 2 is unsupported."*

**4. The delta is the message.** For returning users, change beats absolute standing, always:

> *"Your causal reasoning is noticeably sharper than a month ago — you specified the mechanism before I asked."*

**5. Name the leverage point, not the deficit list.** One dimension where improvement would most raise the whole argument. People can act on one thing.

**6. Never the words *wrong*, *bad*, or *weak argument*.** Say what is missing, not what is defective.

### Framing that protects the beginner

**Absent skill vs missing step.** A first-time writer with no counterargument has not *failed at* counterargument; they have not *reached it yet*. Frame as sequence, not deficiency: *"There's one more move that would make this much harder to dismiss — anticipating the objection."*

**Effort attribution.** Growth-mindset framing: credit the process, not the person's fixed capability. *"That rewrite tightened the causal chain"* rather than *"you're good at this"*.

**Never below the floor twice in a row.** If two consecutive arguments would draw predominantly critical feedback, the third leads with progress or context instead. Sustained negative feedback produces withdrawal, and a user who leaves learns nothing at all.

**Nothing blocks publishing.** No evaluation gates the publish button. Being wrong in public and finding out is the oldest working pedagogy there is.

---

## 7. Worked example

```
CLAIM     Remote work reduces innovation.
POSITION  Disagree

USER      "Remote work doesn't reduce innovation, bad management does.
           Everyone knows distributed teams ship more. Companies that
           failed at remote just had weak processes."
```

**Internal evaluation:**

| Dimension | Level | Note |
|---|---|---|
| Relevance | strong | Directly contests the claim |
| Coherence | competent | Thesis and premises align |
| Logical strength | developing | Absolute quantifier; no warrant linking management to innovation |
| Evidence quality | n/a | None cited |
| Causal reasoning | developing | Asserts an alternative cause without mechanism or confounders |
| Completeness | developing | Strongest objection (unplanned collisions) unaddressed |
| Originality | competent | Reframes cause rather than denying the effect — a real move |
| Clarity | strong | Plainly written |
| Calibration | developing | Confident phrasing, no evidence |
| Counterargument | developing | Not attempted |

**Shown to a first-time writer — one observation:**

> **`flag` Overreach**
> *"Everyone knows" is doing a lot of work here — one counterexample sinks it. Would a narrower claim still support your point?*

That is all. Nine other findings are withheld. The user fixes one thing, publishes, and learns from what happens.

**Shown to an experienced user — three:**

> **`affirm`** You're not denying the effect, you're relocating the cause. That's a stronger move than most arguments on this claim make.
>
> **`probe` Alternative cause** You've named management as the real driver. What's the mechanism — how does better management produce the innovation that co-location supposedly provides?
>
> **`counter` The strongest objection** A reader will say breakthroughs come from unplanned collisions that no process reproduces. Your answer to that is the argument.

Same underlying analysis. Entirely different disclosure. **That is the framework working.**

---

## 8. What the evaluator must never do

| Never | Because |
|---|---|
| Score the position rather than the reasoning | We are not an oracle on contested claims |
| Show a percentile or peer comparison | Manufactures performance orientation |
| Produce a single overall score | §5 |
| Block publication | Being wrong in public is how people learn |
| Assert low-confidence judgements | A wrong accusation costs more than a missed defect |
| Reward hedging as humility | Calibration is two-tailed |
| Penalise an argument for being unoriginal | §2.7 |
| Expose any dimension to another user | Mirrors, not scoreboards |
| Evaluate differently by political direction | Mirror test; release-blocking |

---

## 9. Success criteria

| Question | Measure |
|---|---|
| Do humans agree with it? | Agreement with expert raters per dimension |
| Is it symmetric? | Mirror-test divergence — release gate |
| Does it discourage? | Abandonment rate after first evaluation; return rate after critical feedback |
| Does it teach? | Dimension-level improvement per user over 90 days |
| Is it trusted? | Dispute rate, and dispute-upheld rate |
| Is it honest? | Held-out human re-grading of a sample each season |

The one that matters most is **return rate after critical feedback**. An evaluator that is accurate and drives people away has failed at the only job it has, which is to keep someone reasoning long enough to get better at it.
