# ASSESSMENT FRAMEWORK — Measuring Reasoning Honestly

**Status:** Proposed. Supersedes the faculty-level mechanics in `MOTIVATION_SYSTEM.md` §5 with a psychometric foundation.
**Date:** 2026-07-25

---

## 1. The standard we are holding ourselves to

You asked for measurement that corresponds to real reasoning and cannot easily be gamed. That is not a product feature; it is a **psychometrics problem**, and the field has spent a century working out what makes a measure trustworthy. Three properties, and we should be judged on all three:

| Property | The question it answers |
|---|---|
| **Reliability** | If we measured again next week, would we get the same answer? |
| **Validity** | Are we measuring reasoning, or something correlated with it — verbal fluency, education, agreement with us? |
| **Fairness** | Does it perform equivalently across groups who differ in things it shouldn't measure? |

**Validity is the one that will kill us if we get it wrong.** A measure with high reliability and low validity is a confident, consistent lie — and it is the normal failure mode of self-built assessment. Most "skill scores" in software measure engagement wearing a lab coat.

So the framework below is deliberately conservative. It measures fewer things, more defensibly, and refuses to report what it cannot support.

---

## 2. Four independent channels

The core design decision: **measure the same underlying construct in four ways that fail differently.** Gaming one channel is possible. Gaming all four while not actually improving is, as far as I can construct it, impossible — because two of them are behavioural and one is scored against reality.

```
   ①  ADAPTIVE ASSESSMENT     held-out calibrated items    ← precision
   ②  BEHAVIOURAL TRACE       what you do in the Arena     ← authenticity
   ③  CALIBRATION             Brier score vs. real outcomes← objectivity
   ④  BLIND HUMAN JUDGEMENT   experts, month 1 vs month N  ← ground truth
                 │
                 ▼
        THE REASONING PROFILE
   a vector with confidence intervals — never a single number
```

### Channel ① — Adaptive assessment

Item-response theory over a calibrated bank. Each item has estimated difficulty and discrimination parameters derived from thousands of responses; each learner has an ability estimate per skill on the same scale, with a standard error.

Three rules make it meaningful:

- **Assessment items are never practice items.** A strictly reserved pool, rotated, never seen in the Gym. The moment the training set and the test set overlap, the measure becomes a measure of exposure.
- **Adaptive selection.** Items are chosen near the current estimate, which is efficient and makes memorising a fixed sequence useless.
- **Reported with uncertainty.** "Warrant identification: 62 ± 8" is honest. "Level 27" is not.

*What it gets right:* precision, comparability, efficiency.
*What it misses:* everything about performance in the wild. High drill ability with no Arena change is the classic transfer failure, and this channel alone cannot see it.

### Channel ② — Behavioural trace

What the person actually does when writing real arguments with real stakes. Derived from the evaluation dimensions (`ARGUMENT_EVALUATION.md`), aggregated over time:

- Rate of stating warrants unprompted
- Rate of addressing the strongest objection *before* the coach raises it
- Evidence-fit quality on cited atoms
- Coach interventions required per argument — declining
- **Self-catch rate**: revisions made before any coach feedback
- Position changes following engagement with contrary evidence

*What it gets right:* authenticity. This is the skill *in situ*, which is what we actually claim to improve.
*What it misses:* it is confounded by topic choice, effort and mood, and it is noisy per-argument. Only meaningful in aggregate over dozens of arguments.

**The self-catch rate is the measure I would build the product around.** It is the behavioural signature of internalisation: not "the coach fixed it" but "I fixed it before the coach spoke." It is hard to fake because faking it requires doing the thing.

### Channel ③ — Calibration

Every split prediction is a forecast with a resolved outcome, which means we get a **Brier score** essentially free — a proper scoring rule, meaning it is uniquely optimised by reporting your true belief. There is no strategy that improves it except becoming better calibrated.

We can also produce a genuine calibration curve: of all the times you said 70%, how often were you right?

*What it gets right:* it is objective and close to ungameable. Reality supplies the answer key.
*What it misses:* calibration is one skill among forty-six.

This channel is the closest thing to a hard number in the whole framework, and it is worth disproportionate emphasis for exactly that reason.

### Channel ④ — Blind human judgement

Periodically, a stratified sample of arguments is stripped of identity and date, shuffled, and rated by trained humans who do not know which is early and which is late.

*What it gets right:* it is the ground truth the other three channels are validated against.
*What it misses:* expensive, slow, sampled.

**This is the channel that makes the others honest.** Without it we have three internally consistent numbers and no idea whether they mean anything.

---

## 3. The Reasoning Profile

The output is a **vector with confidence intervals**, criterion-referenced, never a single number.

```
  REASONING PROFILE — 14 months
  Confidence intervals from 1,240 assessment items, 96 arguments,
  310 resolved predictions, 2 blind review rounds.

  Structure          ████████░░  74 ± 5    ↑ 18 since month 1
  Evidence           ██████░░░░  58 ± 7    ↑ 24
  Causal reasoning   ███████░░░  69 ± 6    ↑ 31   ← largest gain
  Dialectic          ██████░░░░  61 ± 8    ↑ 15
  Calibration        ███████░░░  71 ± 4    Brier 0.147 (was 0.223)
  Language           ████████░░  77 ± 6    ↑  9
  Metacognition      █████░░░░░  52 ± 9    ↑ 11   ← your leverage point

  Blind review: month-14 arguments preferred over month-1 in 8 of 10
  paired comparisons by raters blind to order.
```

Note what is present and absent. Uncertainty is shown. Change is shown, because change is the claim. The Brier score is reported in its own units because it is the one figure that needs no translation. And there is no total, for the reasons in `ARGUMENT_EVALUATION.md` §5 — a total would be ranked, gamed, and internalised as identity within a week.

---

## 4. Gaming resistance, mechanism by mechanism

| Attack | Defence |
|---|---|
| Memorise the item bank | Assessment items reserved, rotated, adaptively selected; exposure controlled |
| Grind volume | Ability estimates are not activity counts; diminishing returns; rolling windows |
| Write many trivial arguments | Quality floor gates the behavioural channel; short arguments produce low-confidence estimates, not high scores |
| Copy others' arguments | Similarity detection against the corpus; originality dimension; provenance is recorded |
| Use an LLM to write for you | §5 — the hardest and most important case |
| Farm persuasion events | Excluded from the profile entirely; reception is never measured as skill |
| Hedge everything to score "humble" | Calibration is two-tailed; under-claiming scores as badly as overclaiming |
| Coach to the test | Bank is large, generative, and the Arena channel cannot be studied for |
| Retake until lucky | Adaptive estimates incorporate all attempts; no discard-worst |

**The structural defence is the four-channel design.** Each attack above defeats at most one channel. To move the profile without improving, you would need to simultaneously beat a reserved adaptive bank, produce sustained authentic behavioural change across dozens of real arguments, achieve genuine calibration against real-world outcomes, and fool blind human raters. At that point the cheapest strategy available is to actually get better at reasoning, which is the property we want.

---

## 5. The AI-assistance problem

The hardest integrity question, and it will only get harder: **how do we know the reasoning is the user's?**

Partial answers, honestly labelled as partial:

- **Channel ① is supervised-capable.** For credentialing, assessment sessions can be time-boxed, adaptive and administered under integrity conditions. Item-level response-time analysis flags implausible patterns.
- **Channel ③ is AI-resistant in an interesting way.** A model can help you write a paragraph; it cannot make you well-calibrated, because calibration is about the relationship between *your* stated confidence and reality over hundreds of resolved predictions.
- **Channel ② is partially detectable.** Sudden discontinuities in style, structure, and — most tellingly — a person whose written arguments are far more sophisticated than their live sparring and drill performance.
- **Cross-channel consistency is the strongest signal.** A large, sustained gap between assessed ability and produced arguments is the signature of assistance.

**And the honest part:** we cannot fully solve this, and we should not pretend to. What we can do is make the *practice* environment assistance-agnostic — use whatever you like, you are only cheating yourself — while making the *credentialing* environment properly controlled. That separation is how every serious assessment regime handles the same problem, and it is the only defensible position.

---

## 6. Validation — the programme that makes any of this real

Everything above is a design. It becomes a measurement only through validation, and this is where most products stop. The programme, in order:

**Phase 1 — Content validity.** An expert panel (argumentation theory, informal logic, assessment) reviews the construct map and item pool. Do these items measure what we say?

**Phase 2 — Reliability.** Internal consistency per skill; test–retest at two weeks; inter-rater agreement on human-scored components. **We do not ship a dimension whose trained human raters cannot agree on.** If experts cannot agree, machine confidence is fiction.

**Phase 3 — Convergent and discriminant validity.** Does the profile correlate with established instruments — the Halpern Critical Thinking Assessment, the Cognitive Reflection Test, argument-mapping measures — where it should, and *not* correlate strongly with verbal IQ, education level, or political orientation, where it should not?

That last clause matters more than it looks. A "reasoning score" that mostly tracks years of schooling is a class proxy, and one that tracks political orientation is a partisan instrument. Both are fatal, and both are the default outcome if nobody checks.

**Phase 4 — Predictive validity.** Does the profile predict things it should? Blind expert ratings of unseen arguments; performance in a formal debate setting; forecasting accuracy on novel questions; ideally, supervisor-rated analytical performance in an institutional cohort.

**Phase 5 — Fairness.** Differential item functioning analysis across viewpoint, background, first-language status. Items that behave differently for equally-able learners from different groups are removed. **This is a release gate, not a report.**

**Phase 6 — Publication.** The framework, the methodology, and the results, in the open, peer-reviewed, whatever they say.

Realistically Phases 1–3 take a year with a serious psychometric partner, and Phase 4 needs two to three years of longitudinal data. **That timeline is the honest answer to "when can this be a credential."**

---

## 7. Could this become a credential?

Yes — and the path matters more than the ambition, because the fast version destroys the slow one.

### The two-stage path

**Stage 1 — the Portfolio (credible now).** Not a score. A **verifiable record**: real arguments this person wrote, with dates, on contested questions, with the evidence they cited, the objections they addressed, and documented instances of changing their mind under evidence. Plus a summary of measured change over time.

This is credible immediately because it is *evidence rather than assertion*. A hiring manager does not need to trust our psychometrics; they can read three arguments and form their own view. It is a portfolio, and portfolios have been credible in design and writing for a century.

**Stage 2 — the Certificate (years out).** A formal, proctored, adaptive assessment with published reliability and validity, issued against a defined standard, with an expiry.

Stage 1 funds and validates Stage 2. Attempting Stage 2 first — issuing certificates before the validation exists — would be the single fastest way to end the whole enterprise.

### What would make it credible

- **Published psychometrics.** Reliability coefficients, validity studies, DIF analysis, in the open. Nobody credible issues a certificate on an instrument they will not describe.
- **External governance.** An independent standards board with academic and professional members that can overrule us. Real authority, including over whether the standard has been lowered.
- **Predictive evidence.** Data showing profile-holders perform measurably better at analytically demanding work.
- **Rigour that bites.** A meaningful failure rate. A credential nearly everyone passes signals nothing, and everyone knows it.
- **Demonstrated political neutrality.** Published symmetry results, by viewpoint cohort. For a *reasoning* credential this is not a nice-to-have; it is the whole basis of trust.
- **Currency.** Profiles carry a date and expire. Skills decay; a certificate that ignores this is lying.
- **Separation of teaching and examining.** Structurally distinct, with the examining arm able to say the teaching arm's users are not good enough.

### What would destroy it, in order of likelihood

1. **Perceived political bias.** One credible analysis showing we score one side's arguments lower and the credential is finished, permanently. This is the existential risk and it justifies every symmetry gate in these documents.
2. **A public gaming exploit.** One well-shared method for farming the profile and it becomes a joke. Recoverable only by re-issuing under a new standard.
3. **Pay-to-pass, or its appearance.** Any coupling between subscription tier and outcome. The examining arm must not benefit from passing anyone.
4. **Grade inflation** as a growth tactic. The slow death: each individual loosening is defensible, the aggregate is fatal.
5. **Self-validation.** Us grading our own students with our own instrument and publishing the result. Independent replication or nothing.
6. **Overclaiming.** The moment we imply it measures intelligence, potential, or character, we have earned every attack that follows.

### Would anyone actually use it?

The honest answer is that credentials succeed on **demand-side pull**, not supply-side quality, and most new credentials fail. Ours has one unusual tailwind: as AI writing becomes universal, employers lose their traditional signal for analytical ability, because a polished writing sample now proves nothing. **Verified evidence of a person's own reasoning becomes scarcer and more valuable precisely as generative AI proliferates.**

That is the strongest argument for the credential, and it is also the strategic inversion at the centre of the moat document: the thing that looks like our biggest threat is the thing that creates the demand.

---

## 8. What we will never do

| Never | Because |
|---|---|
| Report a single overall reasoning score | Ranked, gamed, internalised as identity |
| Show percentiles against other users | Manufactures performance orientation |
| Let assessment items appear in practice | Destroys the measure |
| Publish a profile without the user's act | The record is theirs (D28) |
| Report a dimension below confidence threshold | A confident wrong number is worse than silence |
| Claim to measure intelligence or potential | We measure trained argumentation skill. Nothing more |
| Validate our instrument using only our own data | The circularity that makes the whole thing worthless |

---

## 9. The single number I would put on the wall

If the team could watch only one metric, it would not be DAU, retention, or arguments published.

> **The proportion of users whose month-6 arguments are preferred over their month-1 arguments by blind expert raters.**

It is expensive, slow, sampled, and impossible to game — because the only way to move it is for people to actually get better at reasoning. Everything else in this framework exists to make that number legible more cheaply and more often. If it is not moving, nothing else we measure matters.
