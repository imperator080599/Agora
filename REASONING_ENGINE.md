# REASONING ENGINE — The Coach

**Status:** Proposed. Governs the assistant specified in `COMPOSER_EXPERIENCE.md` §3.
**Governing constraint:** D22 — coaches, never ghostwrites.
**Date:** 2026-07-25

---

## 1. Why the current assistant is shallow — the real diagnosis

The assistant feels shallow, and the instinct is to blame the model. That is the wrong diagnosis and it would lead to the wrong fix (a bigger model, a longer prompt).

**The actual problem is that the assistant has no representation of your argument.** It receives a blob of text and pattern-matches against it. Pattern-matching can find the word "everyone". It cannot find an unsupported premise, because it does not know what your premises *are*. It cannot find a missing bridge, because it has not represented the two things that need bridging. It cannot tell you which part is irrelevant, because it has no model of what the parts are.

Every deep capability the brief asks for — *what is my thesis, what am I assuming, which part is unsupported, which part is irrelevant, which counterargument is strongest* — is a **structural** question. You cannot answer structural questions about an object you have not parsed.

> **The fix: parse before you critique.** The engine first builds an explicit structured model of the argument, then reasons over that structure. Everything else in this document follows from that single move.

A second, subtler point. A deep engine does not mean a chatty one:

> **Analysis is deep. Intervention is shallow.** The engine may compute forty things and say two. That is the difference between a coach and a linter. A linter reports everything it finds; a coach knows what you can absorb right now.

---

## 2. The Argument Graph — the object the engine actually reasons over

The engine's first job is to convert prose into an explicit structure. We use the **Toulmin model** as the spine because its central concept — the *warrant*, the unstated principle that licenses moving from grounds to claim — is precisely the thing users leave out and never notice.

```
                    ┌─────────────┐
                    │   THESIS    │  what you're actually saying
                    └──────▲──────┘
                    supports│  (qualified by: "usually", "in rich economies")
            ┌──────────────┼──────────────┐
        ┌───┴────┐    ┌────┴────┐    ┌────┴────┐
        │PREMISE │    │PREMISE  │    │PREMISE  │
        └───▲────┘    └────▲────┘    └────▲────┘
            │              │              │
      ┌─────┴─────┐   ┌────┴────┐    ╔════╧═════╗
      │ EVIDENCE  │   │ WARRANT │    ║ IMPLICIT ║  ← never written down
      │  (atom)   │   │(implicit)│   ║ ASSUMPTION║    but load-bearing
      └───────────┘   └─────────┘    ╚══════════╝
                                          ▲
                                   ┌──────┴──────┐
                                   │  DEFEATER   │  the strongest objection
                                   └─────────────┘
```

**Node types:** Thesis · Premise · Warrant (explicit or inferred) · Backing · Evidence Atom · Qualifier · Defeater · Implicit Assumption.

**Edge types:** `supports` · `licenses` (warrant → inference) · `rebuts` (attacks the conclusion) · `undercuts` (attacks the warrant rather than the conclusion) · `qualifies` · `restates` · `contradicts`.

The distinction between **rebutting** and **undercutting** defeaters matters pedagogically and almost nobody knows it. *"Your evidence is wrong"* rebuts. *"Your evidence is fine but it doesn't license that conclusion"* undercuts. Undercutting objections are the more sophisticated move and teaching the difference is one of the highest-value things the coach can do.

The graph is built incrementally as the user writes and cached between passes, so the expensive extraction runs once per meaningful edit rather than per keystroke.

---

## 3. The nine layers

| L | Layer | Produces | Model tier |
|---|---|---|---|
| L0 | Segmentation | Sentences → candidate propositions | rules |
| L1 | **Structure extraction** | The Argument Graph | mid |
| L2 | **Warrant surfacing** | Implicit assumptions made explicit | high |
| L3 | Scheme classification | Which argument pattern is in use | mid |
| L4 | Defect detection | Fallacies, circularity, non-sequitur | cheap + mid |
| L5 | **Relevance** | Topical and argumentative bearing | mid |
| L6 | Adversarial | Strongest defeater, by type | high |
| L7 | Evidence needs | Query specification → Evidence Graph | mid |
| L8 | **Pedagogy** | What to say, when, how much | mid |
| L9 | Longitudinal | Per-user error model | offline |

L2, L5, L6 and L8 are where the transformation the brief asks for actually lives. L8 is the one most products skip, and skipping it is why most AI writing assistants feel like a nagging spellchecker.

---

## 4. L2 — Warrant surfacing (the single highest-value intervention)

Most bad arguments are not bad because a premise is false. They are bad because an unstated bridging principle is doing invisible work, and the writer has never examined it because they have never *seen* it.

```
User writes:  "Rich economies can afford a 4-day week because they have
               higher productivity per hour."

Engine extracts:
   PREMISE   Rich economies have higher productivity per hour
   THESIS    Rich economies can afford a shorter week
   WARRANT   ⟨implicit⟩ Higher hourly productivity means total output is
             preserved when hours are cut

Coach says:  "There's a step you haven't written down: that higher output
              per hour means total output survives cutting hours. Is that
              true in your sector, or does output scale with hours?"
```

The coach names the hidden step and asks whether it holds. It does not assert that it is false, and it does not supply a replacement. The user either defends the assumption, narrows the claim, or abandons it — and in all three cases they have done the thinking.

**Ranking which assumptions to surface** — surface at most one, chosen by:

- **load** — how much of the argument collapses if it fails
- **contestability** — would a reasonable reader dispute it?
- **invisibility** — would the writer likely not have noticed it?

High load × high contestability × high invisibility is the intervention that changes how someone thinks. Low-load assumptions are pedantry; surfacing them makes the coach exhausting.

---

## 5. L3 — Argument schemes and their critical questions

The brief asks for "a conversation with a brilliant debate coach." Coaches do not improvise. They recognise the *type* of argument being made and apply the questions that type is known to be vulnerable to.

This is Walton's argumentation-scheme framework, and it converts the coach from an ad-hoc critic into something principled. Each scheme carries a standard set of **critical questions** — the coach asks the one the user has not addressed.

| Scheme | Critical questions the coach can draw on |
|---|---|
| **Expert opinion** | Is the source expert in *this* field? Is there consensus, or did you pick one voice? Did they actually claim this? |
| **Cause to effect** | Is there a plausible mechanism? Could causation run the other way? What confounds it? |
| **Example / case** | Is the case representative or cherry-picked? What's the base rate? Are there counter-cases? |
| **Analogy** | Where does the analogy break? Is the shared property the *relevant* one? |
| **Popular opinion** | Does the number of believers bear on truth here? |
| **Consequences** | How likely is the consequence? Is it proportionate? Are you assuming a slope? |
| **Sign / correlation** | Is the indicator reliable? What else produces it? |
| **Precedent** | Is the precedent still good? Materially distinguishable? |
| **Best explanation** | Which rival explanations did you rule out, and how? |

Roughly a dozen schemes cover the overwhelming majority of everyday argument. The library is finite, auditable, and improvable by hand — which is exactly what you want in the component that defines coaching quality.

---

## 6. L5 — Relevance (Problem 3, in full)

Relevance is not one property. It is three, and they fail in different ways.

**Topical relevance** — does the contribution concern the claim's subject at all?
**Argumentative relevance** — does the thesis actually bear on the *truth* of the claim, or merely on its neighbourhood?
**Internal relevance** — does each premise bear on the thesis?

| Verdict | Meaning | Coach response |
|---|---|---|
| `on-point` | Bears directly on the claim's truth | proceed |
| `adjacent` | Related subject, doesn't touch the claim | name the gap, request the bridge |
| `bridged` | Bears on it *via* an unstated step | surface the step |
| `off-topic` | No path to the claim | say so plainly, offer the redirect |
| `orthogonal-but-valuable` | Different question, genuinely worth asking | say so, and offer to route it |

Worked, using the brief's own examples:

```
CLAIM   Nuclear energy is necessary.
USER    "France has beautiful mountains."
VERDICT off-topic

  "I can't find a path from mountains to whether nuclear is necessary.
   If you're heading somewhere — hydro capacity, maybe, or where you'd
   site reactors — start there instead."
```

```
CLAIM   AI regulation harms startups.
USER    "Governments should protect citizens."
VERDICT adjacent

  "This is about whether governments should regulate. The claim is about
   what regulation *does to startups*. Both can be true at once — a rule
   can be justified and still be costly.
   The bridge you need: does protecting citizens *require* the specific
   burdens that fall on small companies? Answer that and this becomes
   an argument."
```

Two rules make this humane rather than dismissive:

1. **Never say "irrelevant" and stop.** Always name the missing bridge. An off-topic contribution is a person reaching for something; the coach's job is to find what.
2. **Relevance is assessed against the claim, never against the majority view.** An unpopular argument is not an irrelevant one, and the engine must never conflate them.

---

## 7. L4 — Defect detection

Detected across three families. The coach names the *problem in the user's own words*, never the Latin.

**Structural:** circularity (thesis appears among its own premises), non-sequitur (no path from premises to thesis), equivocation (a key term shifts meaning), contradiction, unsupported load-bearing premise, undistributed middle.

**Evidentiary:** claim exceeds what the cited atom shows; single-study reliance on a contested question; correlation asserted as cause; anecdote as base rate; cherry-picking against known contrary atoms in the graph; misattributed source.

**Rhetorical:** strawman (the opposing view rendered weaker than its best available form — checkable against our own debate map), ad hominem, false dilemma, motte-and-bailey (the arguable claim quietly swapped for a stronger one), loaded language substituting for argument.

> *"'Post hoc ergo propter hoc'"* teaches nobody anything.
> *"You've shown these happened in order, not that one caused the other"* teaches everybody something.

**Precision over recall, always.** A false accusation of fallacy is far more damaging than a missed one: it makes the user distrust the coach, and a distrusted coach is worse than none. Flags fire only above a high confidence threshold; below it, the engine asks a question instead of making an accusation.

---

## 8. L6 — Adversarial: the strongest objection

The engine constructs the best available counter to the user's *specific* argument — not to the general position — by:

1. drawing candidate defeaters from the claim's debate map, the evidence graph's `undermines` edges, and the critical questions the user left unanswered;
2. ranking by how much of the user's graph each one destroys;
3. classifying it as **rebutting** or **undercutting**, because the two demand different answers.

Then it surfaces one, as a question, with `Address this` — which inserts a structural scaffold and never a sentence.

**The steelman requirement:** the counter presented must be the strongest version available to us, not the most common or the easiest to dismiss. If the coach presents weak objections, users learn to beat weak objections, and we have built a machine for manufacturing overconfidence — the exact opposite of the product's purpose.

---

## 9. L8 — Pedagogy: knowing what not to say

The layer that separates a coach from a linter. Given the full analysis, it decides what reaches the margin.

**Selection.** Rank all findings by *teaching value* = severity × novelty-to-this-user × actionability-right-now. Show at most three; usually one or two.

**Sequencing.** Structure before evidence before style. Never critique a sentence's clarity while its premise is unsupported — fixing the prose of a broken argument is wasted effort and teaches the wrong priority.

**Adaptation.** The user's error model (L9) drives emphasis. Someone who reliably conflates correlation with cause gets that flagged earlier and more insistently; someone who has demonstrably learned it stops hearing about it.

**Fading — the most important pedagogical commitment we make.** As a user's competence in a dimension rises, the coach intervenes later, more indirectly, and eventually not at all:

```
Novice        →  names the problem and the fix direction
Developing    →  names the problem only
Competent     →  asks a question that leads there
Proficient    →  silence; raised afterwards in review, if at all
```

**A coach that stays equally necessary has taught nothing.** Declining intervention rate is the engine's primary success metric (`VISION_V2.md` §11), which means the engine is explicitly optimised to make itself redundant.

**Silence is a valid output.** If an argument is strong, the coach says so once — specifically, naming what is strong — and stops. Manufactured critique to justify presence is the failure mode of every AI assistant, and it is the fastest way to teach users to ignore the margin.

---

## 10. Socratic mode — the conversation, without the ghostwriting

The brief wants "a conversation with a brilliant debate coach." The margin format alone is one-directional. So the user may ask the coach questions — and the coach answers within a constrained grammar.

| The user may ask | The coach may answer with |
|---|---|
| "Why is this weak?" | The specific structural reason, in plain language |
| "What am I assuming?" | The ranked implicit assumptions |
| "Is this a fallacy?" | Yes/no, named plainly, with the reason |
| "What's the best case against me?" | The steelmanned defeater |
| "Is this relevant?" | The relevance verdict and the missing bridge |
| "Show me a counterexample" | Evidence atoms with `undermines` edges |
| "Is my evidence strong enough?" | The quality assessment and what would strengthen it |
| **"Write it for me" / "give me a better version"** | **Refusal, with the reason, then a question** |

The last row is the load-bearing one. The refusal is not a wall:

> *"I won't write it — you'd publish my reasoning under your name and learn nothing. But I'll tell you exactly what's missing: your second premise has no support. What makes you believe it?"*

**Output-grammar constraint:** every coach utterance must be a question, a diagnosis, an explanation of a principle, or an evidence pointer. If a proposed utterance could be pasted into the manuscript and read naturally as the user's own prose, it is a violation. This is mechanically testable and should be a test in the suite, not a guideline in a document.

---

## 11. What the engine must refuse

Beyond the drafting refusal, five more. Each of these is a product-defining boundary rather than a safety afterthought.

**1. It must not adjudicate the claim.** The coach never says the user's position is correct or incorrect. Our claims are chosen precisely because reasonable people disagree; a coach that pronounces on them converts Agora from a place where people argue into an oracle people consult, and the community dies the day users learn the machine has an answer.

**2. It must not be politically asymmetric.** The same argument structure must receive the same critique regardless of which side it supports.

> **The mirror test.** For any claim, take a well-formed argument for it and its structural mirror against it. Run both. The critiques must be structurally identical — same defect classes, same intervention count, same severity. Divergence is a defect, tracked as a release-blocking metric.

This is measurable, automatable, and should be a standing gate. It is also our only real defence against the accusation that will eventually be levelled at us: that the coach has a politics.

**3. It must not be sycophantic.** No praise that is not specific and earned. "Great point!" is noise; "your third premise does the work the first two only gesture at" is coaching. Users detect flattery and it destroys the coach's authority instantly.

**4. It must not moralise about the position.** The coach may say an argument is unsupported. It may never imply the user is a bad person for holding the view. The moment it does, honest disagreement leaves the platform and only performance remains.

**5. It must not generate evidence.** Retrieval only, always — `EVIDENCE_GRAPH.md`.

**And it must be honest about its own uncertainty.** Below the confidence threshold, the coach asks rather than asserts. "I might be misreading this — is your second sentence supporting the first, or making a separate point?" is a legitimate and useful output.

---

## 12. Cost architecture

Depth costs inference. The controls that make it affordable:

| Technique | Effect |
|---|---|
| **Incremental graph** | Re-extract only changed segments; cache the rest |
| **Tiered routing** | Cheap model for defect scan on every pass; strong model for L2/L6 only on step completion |
| **Prompt caching** | Claim context + scheme library + system prompt are stable, and bill at a fraction of input |
| **Batch the retrospective** | L9 error-model updates run nightly, off the hot path, at half price |
| **Debounce** | 1,200ms idle, never per keystroke |
| **Per-user quota** | 3 assisted compositions/day; protects cost *and* prevents dependence |
| **Graceful degradation** | At the cap, free local heuristics only. Never a blocked user. |

The rough shape: ~$0.02–0.04 per deeply-analysed argument, against ~$0.01 for the shallow version. At beta scale (300–1,000 users, ~15% writing) that is single-digit dollars per day. The depth is affordable; what is not affordable is depth *plus* chattiness, which is another reason L8 exists.

---

## 13. How we know it works

| Question | Measure |
|---|---|
| Is the structure extraction right? | Human-annotated gold set; F1 on premise/warrant/thesis identification |
| Are fallacy flags trustworthy? | Precision on an expert-labelled set — target ≥ 0.9, recall secondary |
| Is relevance judged well? | Agreement with human raters on a set spanning all five verdicts |
| Are counters actually the strongest? | Blind expert preference vs. the debate map's best |
| Is it politically symmetric? | Mirror test divergence rate — release gate |
| **Is it teaching?** | Interventions per argument, declining, per user, over 90 days |
| Is it wanted? | Dismissal rate per intervention type |

The last two matter most. A coach with perfect detection that nobody improves under has failed at the only thing it exists for.
