# THE INTELLECTUAL REPUTATION GRAPH

**Status:** Proposed. Supersedes `REPUTATION_SYSTEM.md`, which specified the standings; this specifies the graph they are derived from.
**Date:** 2026-07-25

---

## 1. Why a graph rather than counters

Six counters can be incremented. A graph has to be *earned from other people*, and that difference is the whole design.

The move: **standing is never stored. It is computed by traversing attestations.** Nobody has a steelmanning number; they have a set of endorsements from named actors who held the opposing position, each carrying its own weight, each decaying. The number you see is a rendering of that subgraph.

This buys three properties a counter cannot have:

- **Attestation weight depends on the attestor's own standing in that virtue.** An endorsement of your steelman from someone with strong steelmanning standing is worth more than one from a newcomer. Quality propagates.
- **Structural constraints become expressible.** "A steelman endorsement only counts from an actor who holds the opposite position and is outside your Circle" is an edge predicate. In a counter system it is an honour code.
- **Collusion is visible.** Mutual-attestation rings are a graph shape, and graph shapes can be detected and discounted.

---

## 2. Nodes

| Node | Key properties |
|---|---|
| **Actor** | pseudonymous id, join season, domains active |
| **Argument** | version, claim, author, structure graph, evaluation, seal date |
| **Atom** | evidence: statement, source, scope, verification state |
| **Mechanism** | the causal relation an argument or atom turns on |
| **Claim** | the daily proposition |
| **Position** | actor + claim + stance + timestamp |
| **Prediction** | actor, type, value, resolution, Brier contribution |
| **Attestation** | a reified edge — see §3 |

**Attestations are nodes, not plain edges**, because they carry properties that must be inspected: who attested, from what position, when, with what confidence, and whether it has since been withdrawn.

---

## 3. The attestation edges

These are the only ways standing can be earned. There is no other input.

| Attestation | From → To | Preconditions | Feeds |
|---|---|---|---|
| `ENDORSED_STEELMAN` | Actor → Argument | Attestor's own position on the claim is **opposite** to the argued side; attestor outside author's Circle | Steelmanning |
| `TURING_UNPLACED` | Reader → Argument | Reader guessed the author's real position wrongly | Steelmanning |
| `MOVED` | Argument → Actor | A real position change, temporally after documented exposure to the argument | Persuasion |
| `VERIFIED` | Curator → Atom | Quote span resolves; source live; faithful representation | Evidence |
| `CONTRIBUTED` | Actor → Atom | Atom passed verification | Evidence |
| `CITED` | Argument → Atom | With a **fit score** against the specific inference link | Evidence |
| `FOUND_WEAKNESS` | Opposer → Argument | Recipient rated the opposition as identifying a real weakness | Bridge-Building |
| `ACKNOWLEDGED` | Opposer → Argument v2 | *"That answers it"* — after genuine opposition | Humility |
| `CHANGED_UNDER_EVIDENCE` | Actor → Position | Preceded by documented engagement with contrary atoms | Humility |
| `HELD_UNDER_PRESSURE` | System → Argument | Opposition was answered without concession, and evaluation did not fall | Humility |
| `ADOPTED` | Actor → Actor | A suggestion was incorporated **and** the recipient's evaluation improved | Mentoring |
| `RESOLVED` | Prediction → outcome | Automatic | Calibration |

Three of these deserve comment.

**`ENDORSED_STEELMAN` is the graph's keystone.** It can only be issued by someone who disagrees with the position you argued. That single predicate makes it the hardest edge in the graph to manufacture and the most socially meaningful to hold — you cannot buy it from allies.

**`HELD_UNDER_PRESSURE` exists to keep humility honest.** Without it, the graph would reward capitulation, and a user who concedes to every objection would out-rank one with genuine, defensible convictions. Humility is calibrated updating, not agreeableness.

**`ADOPTED` requires a measured improvement**, not gratitude. Being thanked is not evidence you helped.

---

## 4. Computing standing

Per virtue, per domain. Five independent traversals; no arithmetic joins them.

### 4.1 Steelmanning

```
  endorsements   = ENDORSED_STEELMAN edges into your Turn arguments
  weight(e)      = attestor_standing(steelmanning, domain)
                   × recency_decay(age)
                   × independence(attestor, author)

  rate           = Σ weight(endorsements) / Σ weight(all Turn submissions)
  standing       = band(rate) , gated on volume ≥ 8 submissions
```

**Rate, not count.** Submitting thirty Turns and being endorsed twice must score below submitting ten and being endorsed nine times. `independence()` discounts attestors who have attested each other repeatedly.

Volume gating prevents a single lucky endorsement reading as mastery.

### 4.2 Evidence quality

```
  contribution   = Σ CONTRIBUTED atoms passing VERIFIED
                   − penalty(atoms later disputed and upheld against)
  usage          = mean fit_score over your CITED edges
  reach          = distinct other authors who cited your contributed atoms

  standing       = band( 0.4·contribution + 0.4·usage + 0.2·reach )
```

**Fit is the dominant term over volume.** Citing one atom that bears precisely on the load-bearing link beats three that gesture at the topic. This is the specific behaviour that separates competent from novice evidence use (`REASONING_SKILL_TREE.md` B2), so it is what the standing rewards.

### 4.3 Persuasion

```
  events         = MOVED edges attributed to your arguments
  exposure       = distinct readers who reached the argument
  rate           = events / exposure          ← normalised
  standing       = band(rate) , gated on exposure ≥ 200 cumulative
```

**Normalisation by exposure is the whole design.** A raw count is a popularity metric in disguise: a widely-read mediocre argument would beat a rarely-read excellent one, and the incentive would become chasing readers. Rate measures the argument's power, not its reach, and removes attention-seeking from the payoff entirely.

Attribution requires the position change to follow documented exposure — reading the argument, then moving. Correlation without exposure is not attributed.

### 4.4 Calibration

Not graph-derived. Computed directly from resolved predictions:

```
  brier          = mean( (predicted − actual)² ) over all resolved predictions
                   across split, weakest-link, and persuasion predictions
  standing       = band(1 − brier) , gated on ≥ 40 resolutions
```

The only fully objective standing in the system. A proper scoring rule is uniquely optimised by honest reporting, so there is no strategy that improves it except becoming better calibrated. Two-tailed: chronic under-claiming penalises exactly as much as overclaiming.

### 4.5 Improvement trajectory

```
  profile_delta  = evaluation profile change over rolling 2 seasons
  blind          = paired-comparison win rate, early vs recent, blind raters
  structure      = growth in argument-graph richness (nodes, stated warrants,
                   evidence on load-bearing links)

  standing       = band( 0.4·profile_delta + 0.4·blind + 0.2·structure )
```

**The one standing where a beginner can rank as highly as a veteran**, and that is deliberate. It is available to everyone from day one, and its presence declares what the system actually values.

It is also the standing that decays hardest — improvement is a rate, so plateauing lowers it. That is honest, and it keeps the ceiling from becoming a resting place.

---

## 5. Attack surface

A graph enables attacks a tally does not. Each needs a named defence.

| Attack | Shape | Defence |
|---|---|---|
| **Sybil endorsement** | Many low-value accounts endorse you | Attestation weight ≈ 0 from zero-standing accounts; endorsement requires established opposing position history |
| **Collusion ring** | Group mutually endorses | Mutual-attestation density detection; `independence()` discounts reciprocal pairs and closed triangles |
| **Log-rolling across viewpoints** | Two opposed users trade endorsements | Cross-Circle requirement, plus repeat-pair discounting; the second endorsement between the same pair is worth a fraction of the first |
| **Volume farming** | Submit constantly | All standings are rates with volume gates |
| **Flip-flopping** | Change position often for Humility | `CHANGED_UNDER_EVIDENCE` requires documented engagement; `HELD_UNDER_PRESSURE` rewards the opposite |
| **Easy-claim selection** | Only argue uncontested claims | Domain-scoped and difficulty-weighted; near-consensus claims carry lower weight |
| **Sandbagging** | Argue badly early to inflate Improvement | Baseline is the first *competent* argument, not the first; blind comparison catches it |
| **Reader farming** | Chase exposure for Persuasion | Normalised — exposure is the denominator |
| **Coach-farming revisions** | Revise unchallenged arguments | Revision counts only after genuine, rated opposition |

**The structural defence:** five standings, five different attestation sources, three of which require another human to actively confirm a specific thing, one scored by reality. There is no single lever, and the cheapest available path to a strong graph position is to argue well.

---

## 6. Display

```
   quiet_harbor_412 · training since 2026 · economics · tech & ai

   Steelmanning    ●●●●●   31 of 34 Turns endorsed by advocates
   Evidence        ●●●●○   47 atoms verified · citation fit 4.2/5
   Persuasion      ●●●○○   1.4 moves per 100 readers
   Humility        ●●●●○   22 revisions · 14 "that answers it" · 7 changes
   Calibration     ●●●○○   Brier 0.171 · improving 4 seasons
   Improvement     ●●●●●   month-1 vs 14: preferred 9/10 blind

   Bridge-building ●●●●○   61 of 78 oppositions rated as finding a real gap

   Titles          Steelmanner · Mind-Changer · Evidence Builder
```

**Rules, all load-bearing:**

- **Five dots, and the attestation count beside them.** The count is the actual claim; the dots are a glance. *"31 of 34 endorsed by advocates"* is checkable in a way a number is not.
- **Domain-scoped.** Standing in economics says nothing about law — and that is true, not just politically convenient.
- **No total, and no way to compute one.** Different scales, different attestation sources. Any sum is a category error.
- **No sorting anywhere in the product.** No leaderboard, no "top contributors", no default ordering by standing. Where a surface needs order, use recency or relevance.
- **Decay.** Standing describes current practice, not accumulated tenure.
- **Invisible while composing.** You should be able to forget it exists while writing. That is the test of whether it has become the goal instead of the by-product.

---

## 7. What standing does — and never does

**Does:**

| Function | How |
|---|---|
| **Opposition matching** | Pair authors with opposers within two bands |
| **Attestation weighting** | High-standing attestors carry more weight in their own virtue |
| **Evidence throughput** | Strong Evidence standing gets faster verification and priority dispute triage |
| **Social legibility** | Knowing an opponent has strong Steelmanning standing tells you they will represent your view fairly — genuinely useful before you argue |
| **Mentor routing** | Match mentors two to three bands above mentees |

**Never:**

- Ranks users against each other, anywhere
- Grants visibility, reach, or feed position
- Confers authority — no standing lets you approve your own atoms or override an evaluation
- Gates access to any feature
- Appears as a number, a level, or a percentile

**Throughput, never authority** is the line. Reputation buys you speed through queues, never the power to decide.

---

## 8. The three pathologies, and the guards

**The aristocracy.** High standing becomes an in-crowd; newcomers ignored. *Guards:* no sorting by standing; Circles mixed by band; Improvement standing fully available on day one; decay.

**The performance.** People argue for standing rather than for truth. *Guards:* invisible in the composer; no notification on change; updates seasonally, not per argument.

**The weapon.** Standing gets cited *inside* arguments — *"I have five dots in Evidence."* *Guards:* the flat, unrankable display resists it, but this is ultimately a norms problem. Treat it as a conduct violation, enforced most strictly against high-standing users, because tolerated contempt from the top sets the norm faster than any policy document.

**And the deepest risk:** that the graph becomes the reason people are here. If we ever observe users optimising their profile, the correct response is to make standing *less* visible — not to add more of it.

---

## 9. The uncomfortable question

**Should the graph exist at all in year one?**

The honest answer is probably not. It has real value — matching, attestation weighting, social legibility — and it also introduces every pathology above into a community too small to absorb them. In a 200-person beta, standing is legible without being computed: people simply know who argues well.

**Recommendation:** build the *edges* from day one — every attestation recorded, immutably, from the first cohort. Compute and display standing only when the community is large enough that reputation is doing work personal familiarity cannot.

The graph is a data-collection commitment first and a product surface second. The edges are the asset (`LONG_TERM_MOAT.md` §3); the dots are just a view of them, and they can wait.
