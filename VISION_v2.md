# VISION v2 — Agora as a Reasoning Gym

**Status:** Proposed. Supersedes the strategic framing in `PRODUCT_STRATEGY.md` §1–3 and reframes (does not replace) `PRD.md`, `UX_ARCHITECTURE.md`, and `TECHNICAL_ARCHITECTURE.md`.
**Decision required:** Yes — nine founder decisions (D21–D29) at the end.
**Date:** 2026-07-25

---

## 1. The drift, named precisely

You are right that we drifted, and it is worth being exact about how, because the fix depends on the diagnosis.

We did not drift by accident or by ignoring you. We drifted because **we optimised the retention problem to completion and then stopped.** Commit-to-reveal, the daily claim, the opinion ledger, the debate map, persuasion events — every one of these was chosen because it answered "why would someone come back tomorrow?" They answer it well. The walking skeleton you just clicked through is evidence they work as designed.

But retention mechanics are not a value proposition. What we built asks the user for **three seconds and one tap**, and gives back **a number and some quotes**. The user's reasoning is never externalised, never examined, never improved. They leave exactly as good a thinker as they arrived. A product can be sticky and still be hollow, and that is what we were on course to ship.

The original concept — IDEA → ARGUMENT → EXAMPLE — was a *production* structure. We converted it into a *consumption* structure and kept the name. That was the drift.

**One caveat before the reframe, and I want to be direct about it:** the pivot you are describing multiplies the interaction cost of the core loop by roughly sixty. Three seconds becomes three minutes. That is not a detail to solve later — it is the single thing most likely to kill this version of the product, and Section 7 exists entirely to address it. I think the pivot is right. I also think it fails if we implement it naively.

---

## 2. The reframe

> **Agora is a gym for reasoning. The daily claim is the exercise. The AI is your coach. Other people are the match.**

Not a social network with an AI feature. Not a debate site. A place where you go to get measurably better at thinking and saying what you think — and the social layer exists because that is the only thing that makes the practice real.

What changes:

| | Before | After |
|---|---|---|
| Core user act | Take a position (tap) | Construct an argument (write) |
| What the product gives back | The split | A better version of *your own* reasoning |
| Role of AI | Editorial back-office (claim generation) | Front-of-house — the primary differentiator |
| Role of other users | Content to read | Opponents, evidence of impact, the reason it's real |
| Success measure | Retention | Retention **and** demonstrable reasoning improvement |
| What we sell later | Aggregate opinion data | Reasoning capability — to individuals and institutions |

What does **not** change: every mechanic in `PRD.md` survives. Not one is deleted. They change *job*, and Section 9 maps each one.

---

## 3. The central insight — and the answer to "why not just use ChatGPT?"

This is the question the whole strategy stands or falls on, so it goes first.

A user who wants their argument critiqued can paste it into Claude or ChatGPT today, for free, with a better model than we will ever fine-tune. If our answer to "why Agora" is "we have an AI that critiques arguments," **we have no business.** That is a weekend project, and the frontier labs will commoditise it before we finish the private beta.

The honest answer is that a chatbot can give you three of the four things a person needs to get better at arguing, and structurally cannot give you the fourth:

| What you need to improve | Chatbot | Agora |
|---|---|---|
| A reason to argue at all | ✗ — you must self-motivate, daily, forever | ✓ Daily claim, streak, social stakes |
| Critique of your reasoning | ✓ | ✓ |
| Evidence you can cite | ~ (hallucination risk) | ✓ Curated, verified, claim-linked |
| **Proof a real human changed their mind because of you** | **✗ — structurally impossible** | **✓ Persuasion events** |

That last row is the entire business.

A model can *predict* that your argument is persuasive. Only a person can *be* persuaded. When someone reads your argument, and moves from Disagree to It's-complicated, and the system attributes that movement to your specific words — that is a signal no chatbot can manufacture, and it is the most motivating feedback a writer can receive. It is also, not incidentally, the highest-quality training signal about human persuasion that exists anywhere.

**The AI is the sparring partner. The community is the match.** You don't get good at boxing by only hitting pads, and you don't get good at arguing by only talking to a machine that is paid to be agreeable.

This reframe does something important: it makes commit-to-reveal, the debate map, the split, and persuasion events **load-bearing rather than legacy.** They are not retention mechanics we're keeping out of sentiment. They are the feedback loop that converts practice into learning.

---

## 4. What must be true (the falsifiable core)

The pivot rests on four hypotheses. Each is stated so it can be killed.

**H1 — Enough people want this.** At least 15% of users who take a position on a claim will attempt to write reasoning when invited, in week one.
*If false:* we have built a writing tool for a population that does not want to write. Fall back to v1 as a reaction product.

**H2 — The assistant reduces effort more than it adds.** Median time from "start writing" to "publish" is under 3 minutes with the assistant, and the abandonment rate mid-composition is under 40%.
*If false:* the assistant is friction wearing a helpful costume. Simplify to a bare text box.

**H3 — People actually improve.** Blind pairwise comparison of a user's month-1 vs month-3 arguments, judged by evaluators who do not know which is which, prefers month-3 at a rate meaningfully above chance.
*If false:* we are a writing prompt, not a teaching product. The whole educational positioning and the B2B story collapse. This is the hypothesis I am least confident in and the one most worth testing early and cheaply.

**H4 — Human feedback beats model feedback for motivation.** Users who receive at least one persuasion event in their first two weeks retain materially better than users who receive only assistant feedback.
*If false:* the social layer is decoration, the moat argument in §3 is wrong, and we should reconsider whether this is a social product at all.

H3 is the one that decides whether "teaches people to think" is a claim we can make honestly or a marketing line. **It should be tested before we build the assistant** — see §15.

---

## 5. The loop

```
        Daily claim
             │
        ┌────▼────┐
        │  THINK  │   Commit-to-reveal, unchanged.
        │  Position│  You form a view before seeing anyone else's.
        └────┬────┘   This is now pedagogy, not a growth hack.
             │
      ┌──────▼──────────────────────────────┐
      │  COMPOSE — Idea → Argument → Evidence│
      │                                      │
      │  IDEA      One sentence. What you    │  ← assistant: "you've restated
      │            actually think.           │     the claim"
      │  ARGUMENT  The mechanism. Why.       │  ← assistant: fallacy, weak link,
      │                                      │     unstated assumption, steelman
      │  EVIDENCE  What would move a skeptic.│  ← assistant: retrieval only,
      │            Cite, or declare none.    │     never generated
      └──────┬───────────────────────────────┘
             │
        ┌────▼────┐
        │ PUBLISH │  Your argument enters the debate map beside curated ones.
        └────┬────┘
             │
      ┌──────▼──────┐
      │  COMPARE    │  The split. Others' reasoning. Where you sit.
      │  & DEBATE   │  Who you moved. Who moved you.
      └─────────────┘
```

**Two design commitments inside this loop:**

**Evidence is declared, never faked.** You may publish with no evidence — the argument is then visibly labelled *published without evidence*. We do not block it, and we do not hide it. This creates honest social pressure toward evidence without turning the product into homework, and it makes the evidence norm visible rather than preachy. (You can see this working in the prototype.)

**Position before composition.** You cannot write until you have committed a position. This preserves commit-to-reveal and forces the user to have a view before they have a paragraph — which is the correct order and the opposite of how most people argue online.

---

## 6. A new mechanic worth considering: predict the split

Before the reveal, offer an optional one-tap guess: *where do you think everyone else landed?* Then show them how close they were.

This is cheap to build, and it converts the reveal from a dopamine hit into a **calibration exercise** — it teaches perspective-taking, which is the skill that most directly reduces the contempt that makes online argument worthless. It also generates a genuinely novel dataset: how accurately people model the views of others, by domain and by demographic cohort.

Flagged as optional because it adds a step to the fast path, and the fast path is sacred (§7). Founder decision D24.

---

## 7. The two-speed product — how we survive the effort problem

This is the section that determines whether the pivot works.

Writing is hard. Most people will not do it. The classic participation split (1% create, 9% engage, 90% consume) is not a failure of product design — it is a durable property of human populations, and a product that requires everyone to write will simply have very few users.

**Therefore: the tap stays.** It is not a legacy path or a lesser path. It is the on-ramp, the daily habit, and the honest option for the 90%.

| | Fast path | Deep path |
|---|---|---|
| Act | Take a position | Compose reasoning |
| Time | ~5 seconds | ~2–3 minutes |
| Who | Everyone, every day | A minority, some days |
| Gets | The split, the debate map | All that, plus critique, evidence, persuasion events, progress |
| Product role | Habit + audience | Supply + differentiation + the thing worth paying for |

The deep path needs the fast path: **arguments need readers, and persuasion events need people whose minds can be changed.** A product of only writers has no audience and no feedback loop. The 90% are not freeloaders — they are the opponents.

The invitation to write should appear **after** the reveal, when the user has just seen that 83% disagreed with them and is feeling something about it. That is the moment of maximum motivation to explain oneself, and it costs nothing to decline.

**The assistant's real job, stated bluntly:** not to make arguments better. To make writing one *cost less* — from three minutes to ninety seconds — and to raise the floor enough that a first-time writer is not humiliated by publishing next to a curated Economist editorial. Quality improvement is the second-order benefit. Effort reduction is what makes the deep path reachable at all.

---

## 8. The assistant — capabilities and the constraints that define it

### What it does

1. **Diagnoses weak reasoning** — unstated assumptions, weak causal links, conclusions that restate premises.
2. **Names fallacies in plain language** — not "that's a post hoc fallacy" but "you've shown these happened in order, not that one caused the other."
3. **Surfaces the strongest objection** — the thing a smart opponent would say, before an opponent says it.
4. **Retrieves verified evidence** from a curated library, scoped to the specific claim.
5. **Explains why an argument lands or fails** — with reference to what has actually persuaded people on this claim, which is a thing we uniquely know.
6. **Improves clarity without changing meaning** — the one place it may touch the user's words, and only on explicit request, with a visible diff and a one-tap reject.

### The three hard constraints

These are not limitations. They are what makes the product a teacher instead of a laundering service.

**C1 — The assistant never drafts.** It has no output mode that is paste-ready prose for the user's argument. It asks questions, names problems, and surfaces sources. It does not write sentences the user can adopt with one tap.

*Why this is non-negotiable:* if the AI writes it, the AI did the thinking, and the user learned nothing while feeling like they learned something — the worst possible outcome, because it is invisible. Second, a feed of AI-drafted arguments is a feed where everyone sounds identical, which destroys the social product. Third — and this is the strategic point — **any competitor can build "AI improves your argument." Almost nobody will build "AI refuses to improve your argument."** The constraint is the product.

**C2 — Evidence is retrieved, never generated.** The assistant may only cite documents that exist in our verified library, with a real URL and a real publisher. It may never produce a statistic, study, or historical example from model weights.

*Why:* we are promising a "verified evidence library." A single hallucinated study, cited by a user, screenshotted, and shared, is an extinction-level credibility event for a product whose entire premise is rigour. The retrieval path must be embeddings and a database, not a language model. This is a hard architectural line, and it also happens to be much cheaper (§12).

**C3 — The critique is private, always.** What the assistant told you about your reasoning is never visible to anyone else, never aggregated into a public score, never sold. See §14.

### What it must not become

A politeness filter. A tool that sands the edges off every argument until the debate map is a wall of identical, hedged, inoffensive paragraphs. Sharp, well-evidenced disagreement is the product working. The assistant should make arguments *stronger*, which frequently means *more pointed*, not more agreeable.

---

## 9. What every existing mechanic becomes

Nothing is deleted. Everything is re-assigned.

| Mechanic | Was | Becomes | Change needed |
|---|---|---|---|
| **Commit-to-Reveal** | Anti-anchoring + retention hook | **Pedagogical core.** Forming an independent view before exposure to social proof *is* the first skill we teach. | None — it was right |
| **Daily Claim** | The thing you react to | **The daily exercise.** A well-formed prompt to reason about. | Claims must be *arguable*, not just contestable — editorial criteria tighten |
| **Debate Map** | Content to read | **Worked examples + the comparison surface.** Where your reasoning sits beside others'. | User arguments join curated ones |
| **Opinion Ledger** | Identity + retention | **The longitudinal learning record.** Your reasoning over time — the thing that shows progress and the core data asset. | Extend to store arguments and critique history |
| **Split** | The reward | **Calibration feedback.** Optionally: were you surprised? Did you predict it? | Optional prediction step (D24) |
| **Persuasion Events** | A delightful signal | **The outcome metric and the moat.** Proof your reasoning worked on a human. | Promote from nice-to-have to headline; it is now the north star |
| **Position Change** | Honesty mechanic | **Evidence of learning.** Changing your mind is the product succeeding. | Surface it as achievement, not inconsistency |
| **Pseudonymity** | Safety | **Psychological safety to be wrong in public** — a precondition for practice | None |

The single most important row: **persuasion events go from a feature to the north-star metric.** Everything else is instrumental to producing them.

---

## 10. Where the moat actually is

You wrote: *"The real competitive advantage should be an AI reasoning assistant."*

I want to push back on exactly one word, because I think it changes what we build.

**The assistant is the product surface, not the moat.** It is a system prompt and a retrieval index over a frontier model. A competent team replicates it in three weeks. The frontier labs may ship something close to it for free. If we bet the company on the assistant being better than everyone else's assistant, we lose that bet on a long enough timeline.

What is genuinely hard to copy is what the assistant *produces*, and it compounds:

**1. The longitudinal reasoning record.** For each person: what they believed, how they argued it, what they got wrong repeatedly, what changed their mind, how their reasoning evolved. Nobody else has this. It is the input to genuine personalisation — an assistant that says *"this is the third time you've made a correlation-causation jump on an economics claim"* is doing something no cold chatbot can, and it gets better the longer you stay. It is also, by construction, the thing that makes leaving expensive.

**2. The measured persuasion graph.** Which arguments moved which people, verified by real position changes. This is not sentiment analysis or engagement proxy — it is *measured mind-changing*, at scale, with the argument text attached. To my knowledge this dataset does not exist anywhere. It is the input to the sixth assistant capability (§8) and it is the single most commercially interesting thing we could own.

**3. The verified evidence library.** Curated, deduplicated, claim-linked, quality-graded. Expensive to build, boring to build, compounds monotonically, and is the hard requirement behind C2.

**The flywheel:** assistant makes writing cheap → more people write → more arguments and more persuasion events → richer reasoning record and persuasion graph → assistant gets personalised and evidence-grounded in ways competitors cannot match → better assistant.

**The assistant is how we acquire the data that makes the assistant uncopyable.** That is the correct strategic statement, and it is meaningfully different from "the assistant is the moat." It implies we should instrument the record from day one even before the personalisation exists — because the data is the asset and it only accumulates in real time.

---

## 11. Measuring "better thinking" — including the part that is hard

"Make users better thinkers" is unfalsifiable unless instrumented, and it is easy to fool ourselves here. The existing kill tests are frozen and stay frozen; these are **additional** learning metrics.

**Behavioural (primary):** per user, tracked over their first 90 days —

- Flagged reasoning problems per 100 words (should fall)
- Share of arguments carrying evidence (should rise)
- Share of arguments that engage the opposing side rather than only asserting (should rise)
- Persuasion events earned per argument published (should rise)
- Assistant interventions needed per argument (should fall — the coach becomes less necessary)

That last one is the most honest measure of teaching: **success is the user needing us less.**

**Comparative (the real test):** blind pairwise evaluation. Take a user's arguments from month 1 and month 3, strip identifying context, present them in random order, ask which shows better reasoning.

**The circularity problem, stated plainly:** if the model that coaches is also the model that grades, we will produce a beautiful upward line that measures nothing except our own consistency. The model rewards what it was told to reward. This is the most likely way for us to lie to ourselves at scale.

Mitigations, all three required: (a) the grader is a **different model family** from the coach; (b) a stratified human-graded sample every cycle, by evaluators blind to condition; (c) a held-out cohort that gets the daily claim and the writing surface but **no assistant** — if their arguments improve at a similar rate, the improvement is from practice, not from us, and the assistant's value proposition is much weaker than we think.

That held-out cohort is uncomfortable and I recommend it precisely for that reason.

**Self-report is a supporting metric only.** People are unreliable narrators of their own improvement, and "I feel like a better thinker" is exactly the feeling a product can manufacture without delivering.

---

## 12. Cost architecture

Ratified budget: **$15/day soft alert, $30/day hard pipeline stop, $500/month workspace cap.** Those were set when AI was back-office only. The assistant puts AI in the hot path of every user interaction, so the numbers need re-deriving.

**Model assignment** (current catalogue, priced per million tokens):

| Job | Model | Cost | Rationale |
|---|---|---|---|
| Live diagnostics (per composition step) | Haiku 4.5 | $1 in / $5 out | Cheap, fast, sufficient for pattern-level detection |
| Deep critique, steelman (explicit request only) | Sonnet 5 | $3 in / $15 out | Only when the user asks; quality matters |
| Evidence retrieval | **No LLM** — embeddings + Postgres | ~$0 | Required by C2; also the cheapest path |
| Claim generation, editorial | Haiku 4.5 / Sonnet 5, **Batches API** | 50% off | Asynchronous, no latency requirement |

**Per assisted argument** (assumptions stated so they can be checked): 3 diagnostic calls at ~1,250 input / 150 output tokens, plus 1 deep-critique call at ~2,000 input / 400 output. With prompt caching on the system prompt and claim context (cache reads bill at roughly a tenth of input):

- 3 × Haiku diagnostics ≈ **$0.003**
- 1 × Sonnet critique ≈ **$0.005–0.007**
- **Total ≈ $0.01 per published argument**

**What that buys:** at $25/day available to the assistant, roughly **2,500 assisted arguments per day**. At private-beta scale (300–1,000 users, ~15% writing) that is 45–150 arguments/day, or **under $2/day.** The budget is comfortable — by a wide margin.

**Where it breaks, and this is the part worth internalising:** the budget holds *because of the two-speed design*. If we push every user toward writing and let the assistant become chatty — say 10 turns instead of 4 — cost per argument rises to ~$0.04 and a 25,000-DAU product with 50% writing would run **$500/day**, sixteen times the hard cap. The monthly cap ($500) is the binding constraint before the daily one: it implies ~1,600 assisted arguments/day sustained.

**Therefore, four controls, all required:**

1. **Per-user daily assistant quota** (e.g. 3 assisted compositions/day). Protects against both cost and dependence.
2. **Diagnostics are debounced and cheap** — triggered on step completion, not per keystroke.
3. **Deep critique is opt-in** — the expensive model runs when the user asks, never speculatively.
4. **Graceful degradation, never a hard stop.** At the cap, the assistant falls back to heuristic-only checks (which are free — see the prototype) and a notice. The product must never become unusable because of a budget ceiling; a user mid-composition losing the assistant is a bad experience, but a user unable to publish is a broken one.

**Recommendation:** raise the monthly cap to **$750** at private beta and re-derive after we have real per-argument telemetry. The $500 figure was calibrated for a product where AI never touched the user path. Founder decision D27.

---

## 13. Why teaching monetises better than opinion

An underappreciated consequence of this pivot: **it materially improves the business, and reduces our dependence on the ethically hottest revenue line.**

People do not pay for opinion feeds. They pay, reliably and at scale, for self-improvement — Duolingo, Speak, MasterClass, every language and skills app. "Get measurably better at thinking and arguing" sits in a category with proven willingness to pay. "See what people think about the news" does not.

| Line | Under v1 | Under v2 |
|---|---|---|
| Consumer subscription | Weak — what's the paid tier? Cosmetics? | **Strong** — unlimited assistant, deeper evidence, progress analytics, coaching history |
| B2B | Sell aggregate opinion data — thin, ethically fraught, hard to price | **Reasoning training** — law schools, debate programmes, comms teams, executive education. Sells a capability, not a dataset |
| Data licensing | The primary hope | **Optional.** Nice if it happens, not load-bearing |

That third row is the important one. Under v1, the monetisation story leaned on selling insight derived from people's opinions — the strategy with the highest ethical risk and the most fragile consent story. Under v2, we have a business that works on subscriptions and institutional licensing alone, and the data play becomes upside rather than necessity.

**A pivot that makes the ethically hardest revenue line optional is a strategically better pivot,** independent of the product argument. This deserves weight in the decision.

---

## 14. Privacy — the reasoning record is hotter than the opinion record

The existing architecture isolates identity from opinion: separate schemas, pseudonymous `actor_id`, join only through a controlled function. That was designed for *positions* — "this actor thinks X."

The reasoning record is categorically more sensitive. It is a longitudinal record of **how a specific person thinks, what they are bad at, and what changes their mind.** That is closer to a psychological profile than to a list of opinions, and under GDPR the automated evaluation of personal characteristics is profiling with real obligations.

Four commitments, and I would treat all four as non-negotiable:

1. **Assistant critique is private forever.** What the coach told you is yours. Not visible to others, not in any export, not in any B2B product, not in aggregate features that could be reversed.
2. **No public reasoning score. Ever.** A visible "reasoning rating" would turn a practice space into a status game, punish beginners out of participating, and cross squarely into Article 22 territory. The user sees their own progress; nobody else does.
3. **The reasoning record is excluded from any commercial data product by default.** Published arguments are public by the user's own act. The critique history, the error patterns, and the improvement trajectory are not, and never become so without separate, specific, revocable opt-in.
4. **Deletion means deletion of the record.** Published arguments may persist pseudonymously; the coaching history and derived profile are destroyed.

Consequence for `DATA_ASSET_STRATEGY.md`: the reasoning record must be explicitly carved out of the sellable asset. The persuasion graph — which argument text moved how many people — remains commercially interesting and is far less personal, because it is a property of *arguments*, not of *individuals*. That is the right asset to build a business on.

---

## 15. Risks, stated plainly

| Risk | Severity | Response |
|---|---|---|
| **Nobody writes** | Existential | Two-speed design; tap path never degraded; test H1 before building |
| **AI does the thinking; learning is illusory** | Existential to the mission | C1 (no drafting) as an architectural constraint, not a guideline |
| **"Teaching" is unmeasurable / we fool ourselves** | High | Different grader model, human sample, no-assistant control cohort |
| **ChatGPT substitution** | High | Persuasion events — the one thing a chatbot cannot provide (§3) |
| **Hallucinated evidence** | High — credibility-fatal | C2: retrieval only, hard architectural line |
| **Cost blowout at scale** | Medium | Tiered models, quotas, batching, graceful degradation (§12) |
| **Product feels like homework** | Medium | The tap stays fast and guilt-free; writing is invited, never required |
| **Homogenised arguments** | Medium | C1; monitor lexical diversity across published arguments as a health metric |
| **Moderation surface expands sharply** | Medium | User-written prose is a harassment vector that a three-button poll was not. Needs real investment, earlier than planned |
| **Sanctimony — a product for people who enjoy being right** | Underrated | Tone discipline; celebrate mind-changing over winning; persuasion events reward *being moved* as much as moving |

I want to flag the last one specifically. The failure mode where Agora becomes a place for a certain kind of person to be smugly correct at strangers is not a small brand risk — it is how this category of product usually dies. The antidote is mechanical, not tonal: **make changing your mind the highest-status act on the platform.** Persuasion events already do this if we surface both sides of them.

---

## 16. What this changes in the plan

**Deleted:** nothing.

**Re-sequenced:** the assistant moves from "later" to immediately after the walking skeleton. It is now the core value hypothesis and needs its own kill test before we invest in breadth.

**Deferred to make room:** editorial breadth (4 claims/day → 1 flagship + 1 supporting is enough to test the loop); notification breadth; the B2B data product, which moves to post-PMF entirely.

**Added:** the composition surface, the assistant service, the verified evidence library, the reasoning record schema, and the learning-metrics instrumentation.

### The cheap test to run before building any of it

You said you want to be sure we are building the right product before investing months. The way to do that is not to build the assistant and see. It is:

**A two-week concierge test. No assistant, no code.**

1. Recruit 30 people. Run the daily claim manually — a group chat and a spreadsheet is sufficient infrastructure.
2. Invite them to write reasoning in the IDEA → ARGUMENT → EVIDENCE structure.
3. **A human — you — plays the assistant.** Reply with questions, name weak links, hand them sources. Follow C1 rigorously: never write a sentence for them.
4. Measure: what fraction write at all (H1)? How long does it take them (H2)? Do their arguments improve over ten days (H3)? Does being told "you changed someone's mind" hit differently than your feedback (H4)?

This costs two weeks and no engineering. It tests all four hypotheses. If H1 comes back at 3% instead of 15%, we have learned the most important thing we could possibly learn, for the price of a fortnight — and we would have learned it after four months of building otherwise.

I recommend this before writing the assistant. It is the highest-value two weeks available to us right now.

### Milestone reshape (proposed)

| | Was | Becomes |
|---|---|---|
| M1 | Walking skeleton | ✅ Done |
| **M1.5** | — | **Concierge test — no code** |
| M2 | Auth + claim page polish | Auth + composition surface (unassisted) |
| M3 | Editorial pipeline | Assistant v1 — diagnostics + evidence retrieval |
| M4 | Arguments | Persuasion events + reasoning record |
| M5+ | As planned | Editorial pipeline, notifications, analytics |

---

## 17. Founder decisions required

I need answers to these before the specification documents can be amended.

**D21 — Ratify the reframe.** Agora is a reasoning gym: AI coach, human opponents, IDEA → ARGUMENT → EVIDENCE as the core loop. Yes / no / amend.

**D22 — Ratify C1 (the no-drafting constraint).** The assistant never produces paste-ready prose for the user's argument. This is the most consequential product decision in this document, and the one most likely to feel restrictive when a user asks "just write it for me." I recommend yes and I recommend it be architectural.

**D23 — Ratify the two-speed product.** The tap path remains first-class and is never degraded to push people toward writing.

**D24 — Predict-the-split.** Include the optional calibration step (§6), or defer?

**D25 — Run the concierge test before building the assistant?** I recommend yes.

**D26 — Ratify the learning metrics, including the no-assistant control cohort** (§11). The control cohort is the uncomfortable one — it can tell us our differentiator does not work.

**D27 — AI budget.** Raise the monthly cap from $500 to $750 for private beta, keeping $15/day soft and $30/day hard, with graceful degradation rather than hard stop?

**D28 — Privacy carve-out.** Ratify that the reasoning record and all assistant critique are permanently excluded from any commercial data product, and that no public reasoning score will ever exist.

**D29 — Positioning language.** "Reasoning gym" is my working frame, not a brand. Do you want the product positioned explicitly around *learning to think better* in user-facing copy, or should the learning stay implicit beneath a debate-and-opinion surface? This changes onboarding, tone, and who we attract — and it is genuinely a judgement call about whether people are more drawn to "argue about interesting claims" or "get better at arguing."

---

## Appendix — what to amend once ratified

| Document | Change |
|---|---|
| `PRODUCT_STRATEGY.md` | §1–3 superseded; add reasoning-gym framing |
| `PRD.md` | New: composition surface, assistant, evidence library, reasoning record. Amend: persuasion events promoted to north star |
| `UX_ARCHITECTURE.md` | New: composer flow, assistant panel, published-argument states |
| `DESIGN.md` | New: composer, assistant note types, evidence picker, no-evidence label |
| `TECHNICAL_ARCHITECTURE.md` | New: assistant service, embeddings + retrieval, quotas, degradation |
| `DATA_MODEL.md` | New: `argument_draft`, `assistant_note`, `evidence_document`, `reasoning_snapshot` |
| `SECURITY_PRIVACY.md` | §14 commitments; profiling assessment |
| `DATA_ASSET_STRATEGY.md` | Carve out the reasoning record; persuasion graph becomes the asset |
| `AI_EDITORIAL_ARCHITECTURE.md` | Add the assistant; re-derive budget per §12 |
| `IMPLEMENTATION_PLAN.md` | Milestone reshape (§16) |
| `TEST_PLAN.md` | C1/C2 tests: no-drafting assertion, retrieval-only evidence assertion |
| `ADR.md` | ADR-013 no-drafting; ADR-014 retrieval-only evidence; ADR-015 two-speed |
