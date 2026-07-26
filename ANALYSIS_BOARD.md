# THE ANALYSIS BOARD — What Happens After You Publish

**Status:** Proposed. Builds stages 4–6 of `CORE_LOOP_V5.md`.
**Date:** 2026-07-25

---

## 0. Restoring EXAMPLE — and why it is not a synonym

You asked to preserve **IDEA → ARGUMENT → EXAMPLE** as the creative act. I had drifted to *evidence*, and the drift cost something real.

| | Asks for | Cognitive load | Who can do it |
|---|---|---|---|
| **Example** | A concrete instance — *"Bell Labs built long corridors to force chance encounters"* | Low. Retrieval from memory | Everyone |
| **Evidence** | General or statistical support — *"56 of 61 firms continued"* | High. Requires knowing a literature | Few, unaided |

Asking a beginner for *evidence* is intimidating and frequently produces nothing. Asking for *an example* is inviting — **everybody has an example.** And concrete instances are better remembered and more persuasive than abstract support, which is the concreteness effect doing free work for us.

So the division of labour is now explicit:

> **The human supplies the concrete. The system supplies the general.**
>
> You write the example that convinced *you*. The evidence graph attaches the verified findings that generalise it, or the counter-cases that break it.

This preserves the creative act — your example is *yours*, chosen from your own experience and reading — while the graph does the work a person cannot do unaided. It also creates a critique surface that did not exist before: **weak examples** (§3.4), which is one of the five things you asked the AI to detect.

The third slot's prompt becomes: *"What's one concrete case that makes this real?"*

---

## 1. What exactly happens after publish

The single most important design decision here is **restraint**. The coach goes quiet.

Chess.com does not analyse your game while you play. The analysis board opens *after the game ends*. Ours opens after **opposition**, not after publish — because a critique delivered at publish is just the composer's critique arriving late, and it teaches nothing new.

```
 T+0        PUBLISH
            · Argument enters the debate map on your side
            · Your weakest-link prediction is sealed (you cannot see it again yet)
            · THE POSITION CARD appears — your argument rendered as a
              structure. Not a critique. "Here is the shape of what you said."
            · The coach says nothing further. Deliberately.

 T+0 → 24h  OPPOSITION WINDOW
            · Readers arrive; one is matched to answer you
            · You are notified when opposition is assigned, not when it lands
              (so you are not refreshing)

 T+2h → 24h OPPOSITION ARRIVES
            · One rebuttal, targeting a specific link in your structure
            · You may respond once. Then the exchange closes.

 T+24h      THE ANALYSIS BOARD UNLOCKS  ◄ the learning moment
            · Where you were attacked, on the structure
            · Your prediction vs what happened
            · What the coach flagged that you overrode
            · The one move that would have held

 T+24h → 7d REVISION WINDOW
            · v2 possible, with a reason tag
            · Your opposer is notified and may acknowledge

 T+7d       SEAL
            · Both versions permanent. Nothing more can change.
            · Chess games end. So do arguments.

 T+30d+     RETROSPECTIVE POOL
            · Eligible to resurface beside a later argument for comparison
```

### The Position Card

At publish, before any judgement, we show the user their own argument as a structure:

```
   YOU ARGUED

   Idea       The binding constraint is bargaining power, not income.
              │
   because    ├── Norms follow what workers can extract        ← supported
              ├── Middle-income economies won the 40-hour week ← your example
              └── ⟨assumed⟩ bargaining power moves independently
                            of national income                ← unsupported

   Prediction sealed: you think they'll attack your example.
```

This is affirming rather than corrective, and it does two jobs. It teaches structure by *reflecting* it — a person seeing their own prose rendered as a graph learns more about argument anatomy in three seconds than a tutorial could deliver. And it makes the unstated assumption visible at the exact moment the user is proud of what they wrote, which is when they are most able to hear it.

---

## 2. Guaranteeing meaningful opposition

**"Meaningful" is the hard word.** Weak opposition is worse than none, because it teaches you your argument survived when it did not. A rebuttal that says *"I disagree, remote work is fine"* actively harms the learner.

### The quality bar

Opposition must:

1. **Target a specific link** in the author's structure — a named premise, warrant, or example
2. **Come from someone who holds the opposing position**, or is assigned it
3. **Pass a minimum structural gate itself** — it is an argument, and it gets the same coach
4. Not be an ad hominem, a restatement, or a general expression of disagreement

Anything failing the gate is returned to its author for revision before it reaches the recipient. **We would rather deliver opposition six hours late than deliver bad opposition on time.**

### Five supply mechanisms, in order

**① The Turn is the primary supply.** This is the systems insight worth noting: people doing their weekly assigned-side work generate exactly the thing we need. A user arguing the side they reject *is* well-motivated opposition — they are trying to do it well, they have no ego in it, and they were going to write anyway. One mechanic solves two problems, and it is the reason The Turn should be scheduled rather than optional.

**② Reciprocal obligation.** The writing-workshop model, and the mechanism that makes the whole thing self-sustaining:

> **To receive opposition, you owe opposition.** Publish an argument and you enter the Challenge queue; answer one to clear your debt.

This solves cold-start, and it exploits the protégé effect — writing opposition to someone else's argument is a better learning activity than writing your own, because you must locate the weakest link in reasoning you did not construct.

**③ Position-matched pairing.** From the pool of users who took the opposing stance on the same claim, matched within two bands. Too far above is discouraging; too far below is uninstructive.

**④ Circle obligation.** Your Circle collectively owes each member one response per week. Small-group accountability is far more reliable than platform-wide goodwill.

**⑤ AI fallback at T+20h.** Only if nothing human has arrived. Clearly labelled, and — importantly — **it does not count toward the author's persuasion standing or the opposer's reputation.** It keeps the loop closing while making plain that the real thing is a person.

### Rating the opposition

The recipient rates what they received: **did this find a real weakness?** That rating feeds the opposer's Bridge-Builder standing (`REPUTATION_GRAPH.md`).

This is the mechanism that makes good opposition *worth producing*. Without it, opposition is a chore and quality drifts to the floor. With it, finding the genuine weak link in someone else's argument becomes one of the highest-standing activities in the product — which is exactly the incentive we want, because it is also one of the best learning activities.

### The concierge test rehearses precisely this

In early cohorts the operator supplies opposition manually. That is not a compromise — it establishes whether *good* opposition produces the effect before we try to source it at scale.

---

## 3. How the AI identifies each defect

Operational detail: the signal, the method, honest reliability, and what the coach actually says. All of it runs over the argument graph (`REASONING_ENGINE.md` §2) — none of it is text pattern-matching.

### 3.1 Hidden assumptions

**Method.** For each inference edge, test whether the premise set entails the conclusion. Where it does not, the gap *is* the assumption. Generate the minimal bridging proposition that would make the inference valid, then rank candidates by **load** (how much collapses without it) × **contestability** (would a reasonable reader dispute it) × **invisibility** (would the author likely not have noticed).

**Validation.** Two checks before surfacing: does removing the bridge actually break the argument, and is the bridge non-trivial? *"Words mean things"* is a valid bridge and worthless to surface.

**Reliability:** high for single-step inferences, moderate across multi-step chains.

> *"There's a step you haven't written down: that bargaining power moves independently of national income. Is that true — and would a reader grant it?"*

### 3.2 Logical gaps

| Gap | Signal | Reliability |
|---|---|---|
| **Non-sequitur** | No traversable path from premises to thesis | High |
| **Circularity** | Thesis appears in its own support set | High |
| **Equivocation** | A key term's embedding drifts materially across occurrences | Moderate |
| **Affirming the consequent** | Inference direction reversed against the stated warrant | Moderate |
| **Quantifier slide** | Universal claim supported only by particular instances | High |
| **Motte-and-bailey** | The defended claim is materially weaker than the asserted one | Moderate |

The structural gaps — path existence, circularity, quantifier slide — are graph properties and are reliably detectable. The semantic ones need a high threshold, and below it the coach **asks instead of asserting**: *"Are you using 'productivity' the same way in both sentences?"*

### 3.3 Missing evidence

**Method.** For each premise, check whether any atom is attached; then check **fit** of attached atoms to that specific link. Rank unsupported premises by load.

The useful output is not *"you have no evidence."* It is:

> *"Two of your three premises are supported. The third — that bargaining power moves independently of income — is the one your conclusion actually rests on, and it's the one with nothing behind it."*

Locating the *load-bearing* gap is what makes this coaching rather than a citation checker.

### 3.4 Weak examples

New, and enabled by restoring EXAMPLE. An example can fail five ways:

| Failure | Method | Coach |
|---|---|---|
| **Unrepresentative** | One case presented as typical; graph shows base rate differs | *"Bell Labs is one firm in one era. Was it typical, or exceptional?"* |
| **Scope-mismatched** | Example's scope (domain, era, population) doesn't overlap the claim's | *"Your example is 1950s physical-science R&D. Your claim is about knowledge work generally."* |
| **Non-analogous** | The property shared with the claim isn't the causally relevant one | *"Both involve co-location. Is co-location what's doing the work, or is it something else about Bell Labs?"* |
| **Contested** | The example's own interpretation is disputed in the graph | *"Historians disagree about how much the corridors mattered. Worth knowing before you lean on it."* |
| **Counterexampled** | Graph holds strong contrary cases on the same mechanism | *"MIT Building 20 supports you. GitLab cuts the other way. Which is more like your case?"* |

**Reliability:** scope-mismatch and counterexample detection are strong (they are graph lookups). Non-analogy is the hardest and needs the highest threshold.

Note that this is one of the places our evidence graph does something no general model can: **it knows the contrary cases attached to the same mechanism**, so it can say *"your example is real, and here are the two that break it."*

### 3.5 Irrelevant arguments

**Method.** Attempt to construct a path from the user's thesis to the claim. Then classify by what it takes:

| Verdict | Condition | Coach |
|---|---|---|
| `on-point` | Direct path | proceed |
| `bridged` | Path exists via 1–2 unstated steps | surface the steps |
| `adjacent` | Only a long or implausible path | *"This is about whether governments should regulate. The claim is about what regulation does to startups. Both can be true. The bridge you need is…"* |
| `off-topic` | No constructible path | *"I can't find a route from mountains to whether nuclear is necessary. If you're heading somewhere, start there."* |
| `orthogonal-but-valuable` | Different question, genuinely worth asking | say so, and offer to route it |

**Never say "irrelevant" and stop.** Always name the missing bridge. An off-topic contribution is a person reaching for something.

### 3.6 The rules that bind all six detectors

**Precision over recall, everywhere.** A false accusation costs far more than a missed defect — it teaches the user the coach is unreliable, and a distrusted coach is worse than none.

**Below threshold, ask rather than assert.** *"I might be misreading this — is your second sentence supporting the first, or making a separate point?"* is a legitimate and useful output.

**One or two surfaced, never six.** The engine may find all of the above. The pedagogy layer picks what this user can act on now (`REASONING_ENGINE.md` §9).

**Mirror test on every detector.** Structurally identical arguments on opposite sides of a claim must receive identical critique. Release-blocking.

---

## 4. Revision

### The mechanic

**Window:** 7 days from opposition. Then the argument seals permanently.

**v1 is never deleted.** Both versions persist with a visible diff. This is non-negotiable and it matters: without it, revision becomes retroactive self-flattery, and the record loses its evidential value.

**Every revision carries a reason tag**, chosen by the author:

| Tag | Meaning |
|---|---|
| **Conceded** | They were right; I've dropped or replaced the claim |
| **Narrowed** | The claim was too broad; I've scoped it to where it holds |
| **Clarified** | I meant something narrower than I wrote |
| **Supported** | The gap was real; I've added the missing support |
| **Held** | I've addressed the objection without changing my position |
| **Withdrew** | The argument doesn't survive. I'm retracting it |

The five tags are themselves a curriculum. **Most people believe any concession is defeat**, so they defend indefensible peripheral claims and lose the core. Making *Narrowed* and *Conceded* named, honoured, first-class options teaches the taxonomy of how arguments actually improve — and `Narrowed` in particular should be presented as a *strengthening* move, because a claim scoped to where it holds is a better claim.

### The acknowledgment — the highest-value signal in the system

The opposer is notified of the revision and may respond with one of three:

- **"That answers it."**
- **"Partly — the core objection stands."**
- **"No, this doesn't address it."**

> **A person who disagreed with you saying *"that answers it"* is the most valuable event in the entire product.**

It is rare, unfakeable, socially meaningful, and it is the single clearest evidence that reasoning improved rather than merely changed. It is the primary input to Humility standing, and it produces a magic moment that no AI interaction can replicate.

### Guards

- Revision counts toward standing **only if it followed genuine opposition** — you cannot farm it by revising unchallenged arguments.
- Revising to make an argument *weaker but safer* is detected by evaluation delta and does not count.
- Only one revision per argument. This is a considered improvement, not an iterative edit war.

---

## 5. Visualising progress over months

Five views. The first is the one I would build, because it is the most novel and the most convincing.

### 5.1 Structure Evolution — the signature view

Show the *shapes* of your arguments over time.

```
   MONTH 1                MONTH 4                  MONTH 12

     thesis                 thesis                    thesis
       │                    ╱  │  ╲                 ╱  │  ╲  ╲
     premise            prem prem prem          prem prem prem  qualifier
                              │    │             │    │    │
                            atom  ⟨warrant⟩    atom atom ⟨warrant⟩
                                                 │         │
                                              example   defeater
                                                        answered

   2 nodes                 6 nodes                  11 nodes
   0 stated warrants       1 stated warrant         2 stated warrants
   0 evidence              1 atom                   2 atoms, both on
   0 objections handled    0 objections handled     load-bearing links
                                                    1 objection pre-empted
```

**Your arguments visibly become more sophisticated objects.** No score, no number we invented — the literal structure of your own thinking, getting richer. It is honest, it is impossible to fake, and it makes an invisible skill visible in a way I have not seen any product attempt.

### 5.2 The Intervention Curve

Coach interventions per argument, over time, trending down — with the milestone marked where it first halved (**The Turn**, `PROGRESSION_SYSTEM.md` §8).

> *"Season 4: I spoke half as often as last season. You're catching things I used to catch for you."*

A product charting its own declining necessity. Nothing else does this, and it is the strongest trust signal we can send.

### 5.3 The Attack Map

Where opposition hit you, by structural position, over time.

```
              M1-3    M4-6    M7-9   M10-12
   Thesis      ██      █       █       ▁
   Premises    ████    ███     ██      █
   Warrants    ▁       ███     ████    ██     ← you started stating them,
   Examples    ███     ██      █       ▁         so they became attackable
   Evidence    ▁       █       ██      ███    ← now they argue about sources
```

This chart tells a story of genuine development: early on you were attacked on unsupported premises and weak examples; later, on warrants (because you finally stated them) and evidence (because you finally cited it). **Being attacked on more sophisticated grounds is progress**, and this is the only way to show it.

### 5.4 The Calibration Curve

Predicted vs actual, converging on the diagonal, across all three prediction types. Objective, and the closest thing to a chess rating we have.

### 5.5 The Paired Comparison

One argument from month 1, one from month N. Side by side. No commentary.

The most convincing view and the cheapest to build — the evidence is in the user's own handwriting, which no metric can match.

### The Season Review

Every 90 days, these five compose into one screen, with a single sentence at the top naming the largest change:

> **Season 4.** *Your arguments are getting attacked on your evidence now, not your assumptions. That's a promotion.*

That sentence is the product's whole thesis in twelve words — and it is only sayable because we kept the record.
