# AGORA MVP — The Complete Learning Loop

**Status:** Product definition. This is the build target. Where it conflicts with earlier documents, this wins.
**Not** a new architecture layer — it consolidates decisions already made and specifies the experience concretely.
**Date:** 2026-07-25

---

## 0. The one question this product lives or dies on

Everything below is in service of a single behaviour:

> **Will a person who has just been told their argument has a hole go back and fix it?**

If yes, we have a learning system: the loop closes, the skill compounds, the record accumulates, and the moat follows.

If no — if people write, receive opposition, and shrug — then we have an opinion platform with a coach attached, which is the thing you correctly diagnosed and rejected.

Every design decision in this document is judged against that sentence, and §8 is built to answer it in ten days.

---

## 1. First session

### Why does a user join?

**Not to improve their reasoning.** Nobody wakes up believing they reasoned badly yesterday. Self-improvement is the month-six feeling; it will not get anyone through the door.

They join out of **curiosity about a specific interesting question**, and they stay for the first 90 seconds because of a surprise about themselves.

### The first emotional hook

Not the split. **Being wrong about other people.**

```
   You guessed 70% would agree.
   34% did.
```

That lands in ninety seconds, costs the user one tap, and it is a small, safe, genuinely interesting discovery: *my model of other people is worse than I thought.* It is more compelling than the split alone, because the split is a fact about strangers and this is a fact about you.

**No account is required to reach it.** Signup happens after the first publish, never before.

### The first five minutes

```
 0:00  ONE CLAIM. No feed, no signup, no tour.
       "The 4-day work week is a luxury of rich economies."
       Three sourced context lines. One short quote each way.

 0:30  PREDICT — "Where will people land?"          [ agree | disagree | complicated ]  + optional %

 0:45  COMMIT — "Where do you stand?"

 1:00  ◄ HOOK 1 ─────────────────────────────────────────────
       THE REVEAL. The split, and how wrong you were about it.
       "You guessed 70% agree. It was 34%. You're in the minority."

 1:30  The two strongest curated arguments, one each way.
       Attributed. Short. Genuinely good.

 2:00  THE INVITATION — targeted, declinable, no follow-up
       "You're in the minority. That usually means you're seeing
        something the majority isn't. Want to say why? Two minutes."

 2:15  IDEA — one sentence.

 3:00  ◄ HOOK 2 ─────────────────────────────────────────────
       THE COACH FINDS SOMETHING YOU DIDN'T SEE.
       "There's a step you haven't written down: that bargaining
        power moves independently of national income. Would
        someone who disagrees grant that?"

 4:00  ARGUMENT, then EXAMPLE.

 4:30  Evidence offered — three atoms, one of which cuts against you.

 5:00  PREDICT YOUR WEAKEST LINK → PUBLISH → create account
```

Two hooks, ninety seconds apart. The first is about the world; the second is about your own thinking. **Hook 2 is the one that makes someone come back**, because it is the first time anything has ever pointed at their reasoning rather than their conclusion.

**A complete first session is 90 seconds** — predict, commit, reveal. Everything after is optional. Roughly 60% of users will stop at 1:30 on day one, and that is a successful session, not a failure.

---

## 2. The writing flow — IDEA → ARGUMENT → EXAMPLE

Three slots. One screen. The manuscript is paper; the coach lives in the margin and can never touch the page.

### ① IDEA

> **What are you trying to say?**
> *One sentence. Not whether the claim is true — what you actually think is going on.*

```
  ┌─ manuscript ───────────────────┐  ┌─ margin ──────────────┐
  │ The binding constraint is      │  │ THAT'S A POSITION     │
  │ bargaining power, not national │  │ It says something the │
  │ income.                        │  │ claim doesn't. Now    │
  │                              ▏ │  │ the mechanism.        │
  └────────────────────────────────┘  └───────────────────────┘
```

Advance at 12 characters. We do not gate on quality — we coach on it.

### ② ARGUMENT

> **Why do you believe that?**
> *The mechanism. Not the conclusion again — the steps that get you there.*

This is the real writing surface: serif, 66-character measure, no visible input box. The coach's richest moment.

```
  ┌─ manuscript ───────────────────┐  ┌─ margin ──────────────┐
  │ Everyone knows norms follow    │  │ OVERREACH             │
  │ what workers can extract, not  │  │ "everyone" is doing a │
  │ what economies can afford.     │  │ lot of work. One      │
  │                                │  │ counterexample sinks  │
  │                              ▏ │  │ it. Would a narrower  │
  │                                │  │ claim still work?     │
  │                                │  │                       │
  │                                │  │ THE STRONGEST         │
  │                                │  │ OBJECTION             │
  │                                │  │ A reader will say     │
  │                                │  │ Korea had shelter AND │
  │                                │  │ rising productivity.  │
  │                                │  │ [ Address this ]      │
  └────────────────────────────────┘  └───────────────────────┘
```

`Address this` inserts **"My answer to that: "** and nothing more. A structural scaffold, never a sentence. The coach names the gap; the user fills it.

### ③ EXAMPLE

> **What's one concrete case that makes this real?**
> *A specific instance — history, business, science, your own work. Not a statistic. A case.*

**This is the creative act, and it belongs to the human.** Asking a beginner for *evidence* demands a literature and usually produces nothing. Asking for an *example* demands a memory, and everybody has one.

Then, and only then, the graph does what a person cannot:

```
  YOUR EXAMPLE  "Korea industrialised behind tariffs."

  ┌──────────────────────────────────────────────────────────┐
  │ Three findings touch your mechanism — and one cuts       │
  │ against it.                                              │
  │                                                          │
  │ ▸ Rodrik (1995) — Korean protection paired with export   │
  │   discipline. Supports you, and narrows you.             │
  │ ▸ World Bank (2019) — tariff reduction and growth,       │
  │   1990–2015. Bounds your claim to the pre-liberal era.   │
  │ ▸ Irwin (2019) — ⊘ CUTS AGAINST: cross-country panel     │
  │   finds no growth premium from protection.               │
  │                                                          │
  │ Cite any of these, or does your own example do the work? │
  └──────────────────────────────────────────────────────────┘
```

> **The division of labour, stated once:** the human supplies the concrete; Agora supplies the general, the mechanism, and the counterexample.

**Publishing without evidence is always allowed** and carries an honest `no evidence` label. We neither block it nor hide it.

### The seal

Before publishing:

> **Which part will a critic attack first?** `[ idea | mechanism | example | evidence ]`

Sealed. The user cannot see it again until the analysis board opens. This is the self-knowledge instrument, and it costs one tap.

---

## 3. The AI coach

### What it analyses

Never the text — always the **structure**. It first parses the argument into thesis, premises, warrants, example, and evidence links, then reasons over that graph. You cannot find an unsupported premise without knowing what the premises are.

| Detection | Method |
|---|---|
| **Hidden assumptions** | For each inference, the minimal bridging proposition that would make it valid. Ranked by load × contestability × invisibility |
| **Logical gaps** | Graph properties: no path premises→thesis, thesis inside its own support, quantifier slide, term drift |
| **Missing evidence** | Which premise carries the most load, and has nothing attached |
| **Weak examples** | Unrepresentative · scope-mismatched · non-analogous · contested · counterexampled (graph lookup) |
| **Irrelevance** | Path constructible from thesis to claim? `on-point / bridged / adjacent / off-topic` |
| **The strongest objection** | Best available defeater, ranked by how much of the graph it destroys |

### When it intervenes

| Rule | Value |
|---|---|
| Trigger | Step completion, and 1,200ms typing idle. **Never per keystroke** |
| Volume | Maximum three live notes. A fourth pushes the oldest out |
| Sequencing | Structure before evidence before style. Never critique prose while a premise is unsupported |
| Threshold | High precision. Below confidence, **ask** rather than assert |
| Fading | As competence rises: names the fix → names the problem → asks a question → silent |
| Silence | A valid output. If the argument is strong, say so once, specifically, then stop |

### What it refuses

1. **To write any publishable prose.** No drafts, no suggested sentences, no completions.
2. **To adjudicate the claim.** It never says your position is right or wrong. Our claims are chosen because reasonable people disagree; a coach that pronounces turns Agora into an oracle and kills the debate.
3. **To be politically asymmetric.** Structurally identical arguments on opposite sides receive identical critique. Tested by mirror test, release-blocking.
4. **To flatter.** No praise that is not specific and earned.
5. **To moralise** about the position held.
6. **To generate evidence.** Retrieval only, from verified atoms with resolvable sources.

### How it helps without ghostwriting

**One constraint, mechanically testable:** every coach utterance must be a question, a diagnosis, an explanation of a principle, or an evidence pointer.

> If a proposed utterance could be pasted into the manuscript and read naturally as the user's own prose, it is a violation.

When asked directly to write it:

> *"I won't — you'd publish my reasoning under your name and learn nothing. But I'll tell you exactly what's missing: your second premise has no support. What makes you believe it?"*

The refusal is not a wall. It is followed by the most useful question available.

---

## 4. Opposition and The Turn

### After publish, the coach goes silent

Chess.com does not analyse your game while you play. **The board opens after opposition, not after publishing.** What appears at publish is the **Position Card** — your argument reflected back as a structure, affirming rather than corrective, at the moment you are proudest and most able to see the assumption you left implicit.

### Guaranteed opposition within 24 hours

**Weak opposition is worse than none** — it teaches you your argument survived when it did not. The bar: opposition must target a **named link** in your structure, come from someone holding the opposing view, and pass a structural gate itself.

Supply, in order:

| Source | Mechanism |
|---|---|
| **① The Turn** | People doing assigned-side work are the opposition supply |
| **② Reciprocal debt** | Publish an argument, you owe one opposition. Answer one to clear it |
| **③ Position matching** | From users who took the opposite stance, within two skill bands |
| **④ Operator / AI fallback** | At T+20h if nothing human. Labelled, and earns no standing |

**Format:** one rebuttal, one response, then the exchange closes. Not a thread. This kills the escalation spiral at the format level.

**The recipient rates it:** *did this find a real weakness?* That rating is what makes producing good opposition worth doing.

### The Turn — in detail

**One claim a week, you are assigned the side you did not take.**

**Assignment, not invitation.** Choosing to argue the other side is a virtue signal; being assigned it is training. The mechanism depends on the absence of choice — **when the side is not yours, your ego is not on the line**, which is the most effective structural defence against motivated reasoning that exists.

| | |
|---|---|
| **Selection** | Random from claims you positioned on in the last 14 days, weighted toward ones where you were in a large majority — the comfortable positions are the ones worth inverting |
| **Cadence** | Weekly, same day, named ritual |
| **Onboarding** | Opt-in for month one, then normal. Framed as the hard training, never an obligation |
| **The task** | Same three slots. The evidence graph now surfaces the atoms that undermine your actual view |
| **Judging** | **Rated by people who genuinely hold that view:** *"would you say they understood you?"* |
| **Success** | Advocates endorse it |
| **Stretch** | Readers cannot tell which side you actually hold |

**Incentives.** The Turn earns the one standing that cannot be bought from allies — steelmanning endorsements can only be issued by people who disagree with you. It is also, deliberately, the hardest thing in the product, which is what makes standing in it worth having. And it produces the best magic moment we have: an opponent saying *"yes — that's my argument, and you put it better than I did."*

---

## 5. The analysis board

Unlocks 24 hours after publish, once opposition has resolved.

```
  REVIEW · "Protectionism hurts long-term growth"          Day 4 → Day 5

  ── WHERE YOU WERE ATTACKED ─────────────────────────────────────
     Idea                    ────────────────────────  held
     Mechanism 1             ────────────────────────  held
     Mechanism 2             ────────────────────────  ◄ ATTACKED
       "shelter reduces efficiency pressure"              undercut
     Example (Korea)         ────────────────────────  held

  ── YOUR PREDICTION ────────────────────────────────────────────
     You said they'd attack:   your example
     They actually attacked:   the mechanism underneath it
     ↳ You didn't see this coming. That's the useful part.

  ── WHAT I FLAGGED ─────────────────────────────────────────────
     On Tuesday I asked whether the efficiency-pressure step held
     everywhere. You kept it general. That's the step that got hit.

  ── THE ONE MOVE ───────────────────────────────────────────────
     Narrow it — protection reduces efficiency pressure *absent*
     export discipline, which is what Korea had. Or defend the
     general version. Either holds.

     → Revise      → Concede the point      → Let it stand
```

**Four things make this the highest-value screen in the product:**

1. **It shows *where*, on the structure** — a location, not a verdict. Diagnostic rather than judgemental.
2. **It scores your self-prediction.** You guessed the example; they hit the warrant. That gap is the most precise possible feedback on self-critique, and closing it over months *is* the skill.
3. **It closes the loop with the coach.** Seeing that the coach flagged exactly what got you, and you overrode it, builds trust faster than a hundred accurate flags you accepted.
4. **All three exits are honourable.** "Concede the point" is as celebrated as "Revise" — conceding correctly is a skill, and most people believe any concession is defeat.

**How self-awareness improves:** the prediction-versus-reality gap, repeated weekly, is deliberate practice on locating your own weakest link. Over months it produces the self-catch — deleting *"everyone knows"* before the coach ever speaks — which is the behavioural signature of internalisation and the hinge of the whole product.

---

## 6. Revision

**Window:** 7 days, then the argument seals permanently. Chess games end; so do arguments.

**v1 is never deleted.** Both versions persist with a visible diff. Without this, revision becomes retroactive self-flattery and the record loses its evidential value.

**Every revision carries a reason tag:**

| Tag | Meaning |
|---|---|
| **Conceded** | They were right; I've dropped it |
| **Narrowed** | Too broad; here's where it holds |
| **Clarified** | I meant something narrower than I wrote |
| **Supported** | The gap was real; here's the support |
| **Held** | Answered without changing position |
| **Withdrew** | This doesn't survive |

The six tags are themselves the lesson. **`Narrowed` must be framed as a strengthening move** — a claim scoped to where it is true is a better claim — because the default belief that any concession is defeat is what makes people defend indefensible peripheral claims and lose the core.

**Then the opposer is asked:**

> *"Does that answer your objection?"* — **Yes, that answers it** / Partly — the core stands / No

> **A person who disagreed with you saying "that answers it" is the most valuable event in the product.** Rare, unfakeable, socially meaningful, and the clearest available evidence that reasoning improved rather than merely changed.

**How arguments evolve, over months:**

```
  MONTH 1              MONTH 4                MONTH 12
   thesis               thesis                  thesis
     │                ╱  │  ╲               ╱  │  ╲  ╲
   premise        prem prem prem        prem prem prem  qualifier
                        │    │           │    │    │
                      atom ⟨warrant⟩   atom atom ⟨warrant⟩
                                        │         │
                                     example  objection
                                              pre-empted

   2 nodes            6 nodes                11 nodes
   0 revisions        1 revision             3 revisions
   0 warrants stated  1 stated               2 stated
```

Your arguments visibly become more sophisticated objects. No invented number — the literal structure of your own thinking, getting richer.

---

## 7. The reasoning profile

### Visible to others

- Titles you choose to display
- Published arguments, dated, with revision history
- **Times you changed your mind under evidence** — displayed with pride
- Verified evidence contributed
- *"Training since 2026"*

### Private, always

- All skill measurements and bands
- Everything the coach ever said to you
- Calibration scores
- Every drill and self-assessment
- Intervention rates

**The rule:** what the coach told you about your reasoning is yours alone. Never visible, never aggregated, never sold.

### Progress without scores

Four views, none of them a number we invented:

**① Structure evolution** — the shapes above. Honest, unfakeable, and it makes an invisible skill visible.

**② The intervention curve** — coach notes per argument, declining, with the season it first halved marked:

> *"Season 4: I spoke half as often as last season. You're catching things I used to catch for you."*

A product charting its own declining necessity is the strongest trust signal we can send.

**③ The attack map** — where opposition hit you, over time. Early: unsupported premises and weak examples. Later: warrants (because you started stating them) and evidence (because you started citing it).

> *"Your arguments are getting attacked on your evidence now, not your assumptions. That's a promotion."*

**④ The paired comparison** — one argument from month 1, one from month N, side by side, no commentary. The most convincing view and the cheapest to build, because the evidence is in the user's own handwriting.

**No overall score. No level. No rank. No percentile. No comparison to any other user, anywhere in the product.**

---

## 8. The minimum experiment

Reduced hard from the previous design. The cuts are the point.

### What I removed, and why

| Removed | Reason |
|---|---|
| 30 participants → **10** | At these effect sizes n=30 buys no statistical power. We are looking for binary signals, and 10 people either write or they don't |
| Two parallel cohorts → **sequential** | If people who argue online for fun won't do this, nobody will. Test that first and pay for the second cohort only if it passes |
| 14 days → **10** | The loop is write → oppose → review → revise, about 3 days. Three cycles is enough to see whether the behaviour repeats |
| 2h30/day → **~70 min/day** | Ten participants, not thirty. This is what makes it survivable by one person |
| Reputation, Gym, skill tree, assessment, profile, Circles, titles | All downstream of the loop existing |
| Evidence retrieval | Hand-pick 3 atoms per claim. We are testing whether evidence is *wanted*, not whether retrieval works |

### The design

**Stage 1 — 10 people, 10 days, high propensity.** Recruited from r/changemyview, Hacker News, forecasting communities, debate alumni. Strangers only. Paid £40. You are "running a study on argumentation practice," not a founder.

**Stage 2 — only if Stage 1 passes.** 10 normal professionals who never write arguments anywhere. Same 10 days. This tests market size, not viability.

### The daily loop — ~70 minutes

| Time | Action |
|---|---|
| 08:00 | Post claim + *"guess where the group lands, then say where you stand"* — 5 min |
| 12:00 | Post the split. Invite 2–3 minority holders to write — 10 min |
| 12:00–18:00 | Coach each argument: **one or two questions, never a sentence they could paste.** Offer 3 atoms, one cutting against them. Seal their weakest-link prediction — 12 min each |
| 18:00 | Assign opposition; write it yourself if unmatched — 25 min |
| 21:00 | Post analysis-board notes for yesterday's arguments; log revisions — 15 min |

**Day 5:** The Turn. Everyone argues a side they rejected; a genuine advocate rates whether they understood it.
**Day 10:** 20-minute exit interview, each participant, recorded.

### Five metrics

| # | Metric | Kill | Pass |
|---|---|---|---|
| M1 | Wrote at least once | <10% | **>25%** |
| M2 | Wrote 3+ times in 10 days | <15% | **>35%** |
| M3 | **Revised after opposition** | <10% | **>35%** |
| M4 | Still positioning on day 10, unprompted | <30% | **>55%** |
| M5 | Engaged with the atom that cut against them | <20% | **>40%** |

**M3 is the experiment.** It is the operational form of the question in §0. M1, M2 and M4 are preconditions; M5 tells us whether the epistemic premise — that people will look at what undermines them — survives contact with reality.

### What proves it

> **Build if M1–M4 pass, and at least three participants give a specific, unprompted instance of using something from this outside Agora, and at least two opposers say *"yes, that answers it"* to a revision.**

Those last two conditions are what separate a learning system from a discussion group. Revision acknowledged by an opponent is the loop closing. Transfer is the only early evidence we are teaching rather than entertaining.

### What kills it

- **Nobody writes** (M1 <10%). People who argue online for free won't do it here. Nothing downstream survives.
- **Writing happens once and stops** (M2 <15%). Novelty, not a loop.
- **Nobody revises** (M3 <10%). **This is the important one.** People will express and will not improve — which means the last four stages of the loop are inert and we have built the opinion platform we set out to avoid.
- **Nobody looks at the contrary evidence** (M5 <20%). The epistemic premise is wrong.

### Results that look like success and are not

- A lively channel with no written arguments — that is a discussion group, a different and much easier product.
- Enthusiasm from anyone who suspects you are the founder.
- Participants praising the *idea* while not doing the *behaviour*.
- Revisions that only fix typos. Check the reason tags: `Conceded`, `Narrowed` and `Supported` are real; anything else needs reading.

### The two operator disciplines

**Do not rescue it.** When people go quiet on day 4 you will want to nudge. Don't — M4 measures unprompted return and encouragement destroys it.

**Do not coach too well.** You will be far better than any model we ship. Keep to one or two questions and stop. We are testing the mechanic at a realistic level, not proving that expert human coaching is valuable — we know it is, and nobody can afford it, which is the reason to build this at all.

---

## 9. What we build if it passes

In order, and nothing else until these work:

1. **Claim → predict → commit → reveal** — the 90-second loop
2. **The composer** — three slots, coach in the margin, no ghostwriting
3. **Opposition** — reciprocal debt, 24-hour guarantee
4. **The analysis board** — the highest-value screen
5. **Revision** — v1/v2, six tags, opposer acknowledgment
6. **The Turn** — weekly, advocate-rated

Everything else — the gym, the reputation graph, the skill tree, the assessment framework, the credential — is downstream of these six working, and none of it should be built until they do.
