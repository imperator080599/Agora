# REPUTATION SYSTEM — Standing in Intellectual Virtues

**Status:** Proposed. The social-facing counterpart to `PROGRESSION_SYSTEM.md` (private) and `ASSESSMENT_FRAMEWORK.md` (measurement).
**Date:** 2026-07-25

---

## 1. Reputation without ranking

Every previous document argued that progression must be private, because scores become scoreboards. You are now asking for a **reputation** system — something inherently social. That is a real tension and it needs resolving rather than fudging.

The resolution is that karma-style systems fail for four specific, separable reasons, and each can be designed out:

| Why karma fails | The fix |
|---|---|
| **Single number** → sums into a rank | **Six independent standings.** No arithmetic combines them |
| **Global** → one hierarchy for everyone | **Domain-scoped.** Standing in economics says nothing about law |
| **Vote-derived** → measures agreement, not quality | **Attestation-derived.** Earned from specific verifiable acts |
| **Permanent accumulation** → rewards tenure over practice | **Rolling window.** It reflects how you argue now |

Strip those four properties and what remains is not karma. It is closer to **professional standing**: multi-dimensional, contextual, earned from what you did, and current.

> **The organising principle: reputation is attested, never voted.**
>
> Nobody's standing rises because people liked their argument. It rises because a specific, checkable thing happened — an opponent endorsed their steelman, a curator verified their evidence, a reader changed position, a prediction resolved.

---

## 2. The six standings

### ① Evidence

*Do you support claims with sources that actually bear on them?*

**Attested by:** atoms you contributed that passed curator verification; fit-quality of atoms you cite, scored against the specific inference; disputes you raised that were upheld.

**Not:** how many sources you cite. Volume is the classic gaming vector and citation count is close to meaningless.

**Signature behaviour at high standing:** citing one atom that fits precisely rather than three that gesture.

### ② Steelmanning

*Can you represent a view you reject well enough that its holders recognise it?*

**Attested by:** advocates of the opposing view rating your Turn submissions — *"would you say this person understood you?"* Plus ideological-Turing-test outcomes where readers cannot place you.

This is the standing I would put at the centre of the system. **It can only be granted by people who disagree with you**, which makes it nearly impossible to farm and socially meaningful in a way no self-reported or algorithmic measure could be. It is also the virtue most absent from public discourse, so standing in it is genuinely distinctive.

### ③ Calibration

*Is your confidence proportional to your evidence?*

**Attested by:** reality. Brier score across split predictions, weakest-link predictions, and persuasion predictions (`CORE_LOOP_V5.md` §3).

The only fully objective standing. There is no strategy that improves it except becoming better calibrated — a proper scoring rule is uniquely optimised by honest reporting. Two-tailed, so chronic under-claiming scores as poorly as overclaiming.

### ④ Intellectual humility

*Do you update when you should, and hold when you should?*

**Attested by:** revision rate after opposition; position changes following documented engagement with contrary evidence; concessions on specific points while maintaining the core; the ratio of *"you were right about X"* to entrenchment.

**The gaming risk is obvious and must be designed against:** flip-flopping to farm humility. Two guards. A change only counts when it is preceded by demonstrated engagement with contrary evidence — you read the atoms, you were asked what would change your mind, and then it did. And **holding firm under weak opposition also counts.** Humility is not agreeableness; a person who caves to every objection is miscalibrated in the other direction and should not score well here.

### ⑤ Persuasion

*Does your reasoning actually move people?*

**Attested by:** persuasion events — real position changes attributed to your argument.

**Normalised by exposure, and this is the critical design decision.** A raw count is a popularity metric wearing a lab coat: a widely-read mediocre argument would beat a rarely-read excellent one. The standing is therefore **persuasion rate — events per reader** — which measures the argument's power rather than its reach, and removes the incentive to chase attention entirely.

### ⑥ Improvement

*Are you getting better?*

**Attested by:** the delta in your evaluation profile over rolling seasons, plus blind human comparison of early and recent arguments.

The one standing where **a beginner can rank as highly as an expert**, and that is deliberate. It is the only virtue on this list that is available to everyone on day one, and its presence signals what the system actually values.

---

## 3. Shape, not score

Standing is displayed as a **profile with attestation counts**, never a number, never ordered.

```
   quiet_harbor_412 · training since 2026 · economics · tech

   Evidence        ●●●●○   47 atoms verified · fit 4.2/5
   Steelmanning    ●●●●●   31 of 34 Turns endorsed by advocates
   Calibration     ●●●○○   Brier 0.171 · improving
   Humility        ●●●●○   22 revisions · 7 documented changes of mind
   Persuasion      ●●●○○   1.4 events per 100 readers
   Improvement     ●●●●●   month-1 vs month-14: preferred 9/10 blind

   Titles          Steelmanner · Mind-Changer · Evidence Builder
```

**Design rules:**

- **Five dots, not a hundred points.** Coarse enough to be honest about our resolution, and too coarse to optimise.
- **Attestation is shown beside the dots.** *"31 of 34 endorsed by advocates"* is the actual claim; the dots are a glance.
- **Domain-scoped.** Standing in economics does not transfer to law. This prevents a single global hierarchy and it is also true — evidence evaluation genuinely is domain-specific.
- **No total, and no way to compute one.** The six are on different scales with different attestation sources. Any attempt to sum them is a category error, and that is by design.
- **No sorting, anywhere.** No leaderboard, no "top contributors", no default ordering by standing. If a surface ever needs an order, use recency or relevance.
- **Decay.** Standing reflects a rolling window. It falls if you stop practising, which is honest and keeps it a description of current practice rather than a monument to past effort.

---

## 4. What standing is actually for

If it is not a rank, what does it do? Four things, all of them functional rather than decorative:

**Matching.** Opposition pairing and mentorship use standing to match usefully — an opponent two bands above you is instructive; five above is discouraging.

**Weighting.** Peer attestations from people with high standing in the relevant virtue count for more. A steelman endorsement from someone with strong Steelmanning standing is more informative than one from a newcomer. This is the mechanism that keeps the attestation graph from degrading.

**Trust in the evidence graph.** Contributors with strong Evidence standing get faster verification paths; disputes they raise are triaged sooner. Reputation buys throughput, never authority — no standing lets you approve your own atoms.

**Legibility to others.** In a Circle, knowing that someone has high Steelmanning standing tells you something genuinely useful before you argue with them: they will represent your view fairly. That is a real social good and it changes how the conversation starts.

**What standing must never buy:** visibility, ranking, the ability to suppress, or any influence over another user's evaluation.

---

## 5. Gaming, per standing

| Attack | Defence |
|---|---|
| Cite many sources | Evidence measures *fit*, not count; poor fit lowers standing |
| Submit many Turns | Endorsement *rate*, not volume; unendorsed submissions cost |
| Recruit friends to endorse | Endorsers must hold the opposing position, be outside your Circle, and be attestation-weighted |
| Hedge everything | Calibration is two-tailed; under-claiming scores as badly as overclaiming |
| Flip-flop for humility | Changes require documented evidence engagement; holding under weak attack also counts |
| Chase readers for persuasion | Normalised per reader — reach does nothing |
| Argue only easy claims | Standing is domain-scoped and difficulty-weighted |
| Sandbag early to inflate Improvement | Blind human comparison catches it; the baseline is the first *competent* argument, not the first argument |

**The structural defence is the same as in the assessment framework:** six standings, six different attestation sources, three of which require other humans to actively confirm something and one of which is scored by reality. There is no single lever. The cheapest path to a good profile is to argue well, which is the property we want.

---

## 6. The dark side, honestly

Reputation systems reliably produce three pathologies. Naming them is the only way to design against them.

**The aristocracy.** High-standing users become an in-crowd; newcomers are ignored. *Guards:* no sorting by standing anywhere; Circles are mixed by band; Improvement standing is fully available to beginners; standing decays.

**The performance.** People argue for standing rather than for truth. *Guards:* standing is not visible in the composer; no notification when it changes; it updates seasonally, not per argument. **You should be able to forget it exists while writing.** That is the test.

**The weapon.** Standing gets cited in arguments — *"I have five dots in Evidence, you have two."* *Guards:* the flat display resists it, but ultimately this is a norms problem. It should be treated as a conduct violation, and most strictly when a high-standing user does it, since tolerated contempt from the top sets the norm faster than any policy.

**And the deepest risk:** that standing becomes the reason people are here. It should be a *by-product* of practice that happens to be legible, never the goal. If we ever find users optimising their profile, the correct response is to make standing less visible, not to add more of it.

---

## 7. Relationship to the other systems

| System | Audience | Nature |
|---|---|---|
| **Assessment profile** | You only | Measured ability, error bars, quarterly |
| **Progression** (Firsts, bands, titles) | You, with optional display | Personal development |
| **Reputation standing** | Others, in context | Social trust and matching |

Three layers, one underlying reality. The assessment measures what you can do; progression records how you got here; reputation tells other people what to expect from you. **None of them sums into a rank, and no user is ever ordered against another anywhere in the product.**
