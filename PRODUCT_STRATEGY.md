# PRODUCT_STRATEGY.md

**Project working name:** Agora
**Version:** 2 — consolidated after founder review
**Date:** 2026-07-12
**Status:** Pre-PRD product strategy, founder decisions incorporated. No screens, no stack, no code.

---

## 0. Founder Decisions — Locked Constraints (v2)

These are decided. They are treated below as fixed constraints, not open questions. Where a decision has costs, the costs are stated honestly — consequences are challenged, the decisions are not.

| # | Decision | Status |
|---|---|---|
| D1 | **Launch language: English. English-first international product from day one.** Not a French product translated. | LOCKED — non-negotiable |
| D2 | **Initial domains: Economics, Business, Technology/AI, Geopolitics.** International coverage; European topics only when globally/intellectually relevant; feed must not be structurally France-centric. | LOCKED |
| D3 | **Identity: persistent pseudonyms by default; optional verification later.** | LOCKED |
| D4 | **Electoral and highly partisan party politics are NOT a core V1 category.** Public policy, economics, regulation, international relations, geopolitics are allowed. | LOCKED |
| D5 | **Consumer product is the priority. Education is a secondary monetization and distribution channel.** | LOCKED |
| D6 | **Predictive / resolvable claims are OUT of V1.** | LOCKED |
| D7 | **The founder will not act as a daily editor. The editorial and content-supply system must be highly automated**, minimizing recurring manual operations while maintaining very high content and sourcing quality. | LOCKED |

### Consequences of D1 (English-first international) — challenged, not relitigated

- **You are entering the most competitive attention market on earth.** English-language opinion discourse is where X, Reddit, Substack, HN, and every answer engine fight hardest. There is no "local darling" shortcut, no under-served national niche, no founder-adjacent press cycle. Differentiation must carry 100% of the acquisition load. The mechanics in §12 are now load-bearing, not nice-to-have.
- **The founding cohort becomes the hardest non-product problem.** If your personal and professional networks are primarily francophone, the founding 200 users cannot come from your personal graph — they must be recruited from interest-based English channels (X tech/AI circles, Hacker News, econ/geopolitics newsletter and podcast communities, relevant Discords/subreddits) where you may not yet have standing. This needs a deliberate plan and lead time; it is the top remaining open question (§G).
- **The daily ritual fragments across 24 time zones.** "Everyone answers today's claim" is weaker when "today" spans Auckland to San Francisco. Solved by design, not hope: the **Claim Day is a UTC calendar day**; each user receives the Daily Claim at *their local* morning hour; the flagship debate runs a defined window (Day 1: positions accumulate; Day 2: arguments and counters peak) with a **closing recap** ("final split: 61/39 — the argument that moved the most people"). The shared object is the calendar day, not a simultaneous moment.
- **Adjacent English-market competitors occupy nearby mindshare:** Polymarket/Manifold/Metaculus own "on the record" for predictions; Perplexity-class answer engines increasingly serve the "both sides in 2 minutes" informational job. Agora's defensible ground is the *expressive* half (position ledger, measured persuasion, the debate as a live social object) — the informational half alone is not safe territory.
- **The upside, stated fairly:** largest TAM; English SEO compounds best; the education channel (D5) is largest in English; and — decisively — **D1 and D7 reinforce each other**: high-quality editorial automation is only feasible in English, where the source ecosystem is richest and model performance is strongest. An automated French pipeline would have been materially worse. The two hardest founder constraints are mutually consistent.

### Consequences of D6 (no predictive claims in V1)

- Reputation loses its only *objective* input (calibration against outcomes). V1 reputation rests entirely on social signals: MOVED ME, STRONG EVIDENCE, source-clears (§11 updated).
- "You were right early" mechanics are reframed as **split-movement vindication** — "the community moved 14 points toward your position since you took it" — which is descriptive, not resolution-based, and still feeds the weekly recap.
- Predictive claims remain the highest-conviction V2 candidate: they deepen the ledger's value dramatically. Deferred, not discarded.

### Consequences of D7 (no daily human editor)

- The v1 strategy's "one strong editor sharpening 5–8 claims/day" is void. §15 is fully redesigned as an **Automated Editorial Engine** with a thin human gate.
- Honest statement of the trade: automation converts the #2 failure mode from *founder burnout* into *silent quality drift*. The engine therefore ships with tripwires, user-facing quality signals, and a degradation policy (publish fewer claims, never worse ones). See §15.
- **One recommendation the founder should still consider:** "highly automated" should not mean "zero-touch" on day one. The recommended launch mode is a **10–15 minute/day one-tap approval queue** (approve/reject only — never writing, never editing), which the pipeline earns its way out of via measured approval rates (§15, stage 7). Full autopilot from day one is possible but is a brand risk taken before the pipeline has proven itself. This is flagged as an open question (§G), not overridden.

---

## 1. Executive Assessment

The initial concept — a social platform where users express ideas through the structure IDEA → ARGUMENT → EXAMPLE — is **not viable as described**, but it contains two genuinely valuable assets buried under a fatal framing error.

**The fatal framing error:** the concept is designed around what the founder wants users to produce (structured arguments), not around what users want to feel (seen, right, smart, part of something). Nobody wakes up wanting to structure an argument. People wake up wanting to *win* an argument, to be recognized as someone with good judgment, to react to what just happened. Structure is a cost, not a benefit, for the person posting. Every consumer social product that led with "express yourself better" — Letter.wiki, Parlio, the standalone Change My View app, Kialo as a consumer product — is dead or microscopic. This is not bad luck; it is a pattern. Discourse-quality platforms fail because they charge users effort upfront and pay them status in a currency nobody outside the platform accepts.

**The two real assets in the concept:**

1. **The example discovery engine** — a searchable, sourced library of documented cases (studies, policies, historical events, companies) mapped to claims. This is a compounding knowledge asset nobody has built well, and it becomes a moat over time.
2. **The structured position** — if positions on claims are captured as data (who believes what, why, since when), you get something X and Reddit structurally cannot produce: a legible record of belief, argument quality, and — critically — *measurable persuasion*.

**The pivot (approved by founder):** invert the product. Do not build a platform where users *write structured arguments* (creation-first, high effort, tiny audience). Build a platform where users *react to sharp claims* — take a position in one tap, see where the crowd stands only after committing, and optionally climb an "effort staircase" from tap → one-sentence reason → sourced example. The 1% write arguments; the 99% adjudicate them. The compounding output is a **living debate map per claim** and a **timestamped position ledger per user**. IDEA → ARGUMENT → EXAMPLE survives — but as the grammar of the composer and the schema of the database, not as the front door of the product.

---

## 2. Brutal Critique of the Initial Concept

### Weak and unrealistic assumptions

| # | Assumption (implicit in the concept) | Why it fails |
|---|---|---|
| 1 | People want help expressing ideas clearly | Clarity is a *producer* virtue. Consumers of social products optimize for feeling, speed, and status. "Help me be clearer" is a job for a tool (Grammarly, ChatGPT), used privately, not a reason to join a network. |
| 2 | A blank canvas + a good format will elicit content | Blank canvases kill consumer products. "What's your idea?" is the same dead prompt as "What are you thinking?" — the concept explicitly wants to avoid this but its IDEA-first structure *is* this. |
| 3 | Users will research documented examples | Finding a sourced example is homework. Homework is the single most reliable way to get a 0% posting rate. |
| 4 | An audience exists for structured arguments | Reading a structured argument is also effortful. Most failed discourse platforms didn't just lack writers — they lacked *readers*. This concept has a supply problem AND a demand problem. |
| 5 | Quality structure = quality experience | A perfectly structured argument about a boring claim is boring. Structure doesn't create interest; stakes, timeliness, and disagreement do. |
| 6 | Reputation for "good reasoning" is motivating | Status only motivates when it is legible and convertible — followers convert to influence, karma to belonging, LinkedIn posts to jobs. "Well-structured arguer on a small app" converts to nothing outside the app. The concept has no status economy. |

### Behavioral and cognitive friction

- **The order is backwards psychologically.** Humans form positions first and reasons second (motivated reasoning is the default engine of human cognition). A flow that demands IDEA before ARGUMENT before EXAMPLE fights human nature. A flow that captures POSITION first (one tap) and *then* invites justification works with it.
- **Effort asymmetry vs. competitors:** posting on X takes 10 seconds; the described flow takes 10+ minutes. The product must be ~10x better in reward to justify ~60x more effort. It isn't, as described.
- **Approval anxiety:** publishing a "structured argument" invites being *graded*, not just liked. Fear of being publicly wrong, with sources checked, is a powerful reason not to post. The product as described maximizes exposure risk while minimizing reward. (D3 — pseudonyms by default — deliberately lowers this cost.)

### Why users may not care / post / return

- **Care:** no timeliness, no stakes, no tribe. A library of arguments has no pulse.
- **Post:** effort + exposure risk + no audience + no external status payoff.
- **Return:** nothing changes daily. An argument published Tuesday is the same on Friday. No live state = no reason to reopen.

### Network-effect and cold-start problems

- Debate requires **opponents**. An argument with no counterargument is a monologue in an empty room — worse than a tweet with no likes, because the format *promises* dialectic. Density requirements are higher than for broadcast networks.
- The graveyard is instructive: **Parlio** (quality discourse, acquired and shut), **Letter.wiki** (public letters between thinkers, dead), **Kialo** (structured debate trees, survives only as a classroom tool), **Arguman** (dead), **Change My View** (thrives *only* as a subreddit — i.e., as a format parasitic on an existing network's density, which is evidence for "feature, not product").

### Moderation, quality, and polarization risks

- **Source disputes become the battleground.** "Your study is p-hacked," "your think tank is funded by X." Moderating evidentiary quality is harder than moderating civility, and the product's promise ("examples must be factual and documented") makes the platform the referee of factuality — an expensive, adversarial position.
- **Polarization capture:** claim-based platforms attract the politically obsessed first. Without design countermeasures, the platform becomes a partisan scoreboard or a ghost town of the reasonable. (D4 — no electoral politics in V1 — is the strongest single countermeasure; geopolitics still needs guardrails, §15.)
- **Echo chambers:** if arguments are ranked by same-side approval, each side's page becomes a rally. (The countermeasure — cross-camp signals — turns out to be the product's biggest opportunity; see §11.)

### AI risks — the deepest threat

By 2026, any LLM produces a well-structured, example-laden argument in five seconds. Three consequences:

1. **The artifact is commoditized.** If the product's value is "a structured argument with sources," ChatGPT delivers that privately with zero social risk. The value cannot be the artifact. It must be things AI cannot commoditize: *a human taking a public, timestamped position under their identity; the aggregate map of what a community believes; measurable persuasion between real people.*
2. **Quality signals reward AI use.** If "well-structured + sourced" earns status, the rational move is to paste from an LLM, and authenticity collapses. Signals must therefore reward things that are cheap for honest humans and worthless when faked: position-taking, being *moved* by others — not prose polish.
3. **AI-fabricated "examples"** (hallucinated studies, fake cases) can poison the example library. The library must be retrieval-only from verified sources, never generative. (§16.)

### Misinformation risk

A platform whose brand is "documented and sourced" suffers catastrophic brand damage from a single viral fabricated example — worse than X does, because X never promised rigor. The sourcing pipeline is a brand-critical system, not a nice-to-have. (This constraint shapes the entire automation design in §15.)

---

## 3. Product vs. Feature Analysis

**IS IDEA → ARGUMENT → EXAMPLE A PRODUCT OR JUST A FEATURE?**

**It is a feature.** Specifically, it is two features:

1. **A composer format** — a template for writing a post. Composer formats are features by definition: Change My View is a posting format that lives inside Reddit; polls are a format inside X; AMA is a format inside Reddit. Formats need a host network.
2. **An example search engine** — a retrieval tool. Tools are used, not inhabited. A tool can be a *business* (see §17) but not a social product.

A product is a **loop**: a recurring trigger, a consumption experience, an expression mechanic, a social reward, and a reason to return — reinforcing each other. The initial concept specifies the middle of the loop (expression mechanics) and nothing else. The founder's own ten open questions (why post, what's in the feed, why return…) are precisely the list of everything that separates a feature from a product. That self-diagnosis was correct.

**Strongest aspects of the concept:**
- The example library as a compounding, defensible data asset.
- Structured positions as data → enables mechanics no competitor can copy cheaply (measured persuasion, position ledgers, belief maps).
- The ARGUMENT and EXAMPLE steps as *optional upper floors* of an engagement staircase, rather than as the entry fee.
- A real, unserved job exists in the market: *"I want to go on record with a considered position and be seen as someone with judgment — X is chaos, Reddit is anonymous, LinkedIn is careerist cringe."*

**Weakest aspects:**
- No trigger, no feed, no reward, no return mechanic (i.e., no loop).
- Creation-first instead of reaction-first.
- Effort demanded before value delivered.
- No status economy; no answer to "why here instead of X."

**Conclusion:** keep the format as the product's *grammar*; build an actual loop around it (§7).

---

## 4. Expression Trigger Analysis

### What actually makes people express opinions, by platform

| Platform | Surface feature | Underlying behavioral mechanism |
|---|---|---|
| **X / Twitter** | Quote tweet, replies | **Disagreement + borrowed audience.** You express *against* something that already has attention, inheriting its audience. Speed + timeliness ("this just happened, here's my take") + status accumulation (followers). The quote tweet is the greatest expression machine ever built: it supplies the target, the context, and the audience in one object. |
| **Reddit** | Comments, karma, subreddits | **Expertise-in-niche + anonymity + belonging.** The trigger is "I actually know this" inside a tribe that will appreciate it. Anonymity removes reputational risk; karma provides low-stakes recognition; the *thread* means you never start from a blank page. |
| **TikTok** | Stitch/duet, trends | **Reaction-as-content + templates.** You never create from zero; you respond to or remix an existing object. The template does the structuring so the user only supplies the delta. |
| **LinkedIn** | Posts, reactions | **Convertible professional status.** People tolerate enormous cringe because posting demonstrably converts to recruiters, clients, and jobs. Proof that users will do effortful posting *if the status is convertible outside the platform.* |
| **Instagram** | Photos, stories | **Identity curation.** Low relevance here except one lesson: the profile as a self-portrait people groom. |
| **Threads** | Prompts, questions | **Engagement-bait questions.** Demonstrates that direct invitations ("hot take: …?") reliably elicit replies, but produce low-value content without structure to catch it. |
| **Quora** | Q&A, requested answers | **Being asked.** A question is a personal invitation that solves "who asked?" — the strongest cold-content trigger for experts. Decayed because rewards shifted to volume over quality. |
| **Debate platforms (Kialo, etc.)** | Argument trees | **Duty and hobbyism.** No timeliness, no status, no audience → only the intrinsically motivated participate: a tiny population. The cautionary tale. |
| **News comment sections** | Comments under articles | **Outrage + correction + zero-distance adjacency.** The trigger (article) and the expression box are on the same screen at the moment of peak emotion. Terrible quality, but the *placement lesson* is vital: expression happens next to the stimulus, in the moment. |

### The mechanisms, ranked by power and compatibility with this product

1. **Disagreement / correction** ("someone is wrong") — the strongest trigger on the internet (Cunningham's Law). **Fully compatible:** a sharp claim is a standing provocation; a visible split ("62% agree") provokes the 38%; a top-ranked argument you find weak provokes a counter.
2. **Side-taking as identity expression** — picking a side is near-zero effort and deeply identity-expressive (why polls outperform comment prompts ~100:1). **Fully compatible — this becomes the atomic action of the product.**
3. **Curiosity gap** — "where does everyone else stand?" **Compatible via commit-to-reveal:** you must take a position before the split is revealed. This converts curiosity into expression.
4. **Expertise display in-niche** — "I know this domain." **Compatible** via topic communities and per-topic reputation.
5. **Being specifically invited** — the Quora mechanism. **Compatible:** "You took a position on X — someone just countered the argument you co-signed. Respond?"
6. **Timeliness** — "everyone is discussing this today." **Compatible** via news-derived daily claims.
7. **Track-record building** — "I want it on record that I said this, dated." A quieter but durable trigger (visible in prediction-market culture: Metaculus/Manifold users grind for calibration scores). **Compatible and differentiating** — no mainstream social product offers a timestamped belief ledger. (V1 expresses this socially — ledger + split-movement vindication; objective calibration arrives with predictive claims in V2, per D6.)
8. Outrage and moral spectacle — powerful but **deliberately dampened** (they are X's business model and this product's poison).

### The design law that follows

**Never ask "what do you think?" Show a sharp claim and a hidden crowd.** The user who taps DISAGREE to unlock the split has already expressed an opinion — before realizing they were "posting." Expression must begin as reaction, cost one tap, and escalate voluntarily.

The product must engineer the sentence *"I have something to say about this"* through four situations it controls:
- A claim whose visible framing is slightly, productively provocative ("Remote work reduces innovation" — not "What do you think about remote work?").
- A revealed split that surprises the user ("only 30% agree with me?!").
- A top argument on the user's own side that the user finds weak (steelman urge).
- A counter to something the user previously co-signed (defense urge — the strongest personal invitation).

---

## 5. Content Engine Comparison

Scoring: ●●● strong / ●● medium / ● weak, for the criteria requested.

| Criterion | A. News-driven | B. Question-driven | C. Claim-driven | D. Event-analysis | E. Community-driven | F. User-driven |
|---|---|---|---|---|---|---|
| Expression trigger strength | ●● (timely but "what's your position?" is open-ended) | ● (open questions = essay prompts) | ●●● (a claim demands a verdict; sides pre-exist) | ● (analysis = homework) | ●● (belonging, but needs people first) | ● (blank canvas) |
| Cognitive effort to participate | ●● | ● (must compose an answer) | ●●● (one tap to participate) | ● | ●● | ● |
| Daily retention potential | ●●● (news refreshes itself) | ●● | ●●● (daily claims + live splits + counters) | ●● | ●● | ● |
| Content supply at launch | ●●● (news APIs + editorial) | ●● (question-writing is a craft) | ●●● (claims distilled from news + evergreens) | ●● | ● (needs users) | ● (needs users) |
| Cold-start difficulty | Low | Medium | **Low** (splits are meaningful at n=50; a claim page seeded with published arguments is useful at n=0) | Medium | High | Very high |
| Moderation complexity | High (news = politics) | Medium | Medium-high (claim framing is an editorial responsibility; source disputes) | Medium | High (per-community) | Very high |
| Differentiation vs X/Reddit | ● (X owns news speed) | ●● (Threads/Quora adjacent) | ●●● (no one does commit-to-reveal claims + debate maps) | ●● | ● (Reddit owns communities) | ● (X owns broadcast) |
| Monetization potential | ●● | ●● | ●●● (belief/argument data asset; education) | ●● | ●● | ● |
| Scalability of supply | ●●● | ●● | ●●● (news → claims is a repeatable, automatable pipeline; later user-submitted claims) | ●● | ●●● (once alive) | ●●● (once alive) |

**Analysis notes:**
- **A alone fails:** competing with X on news speed is unwinnable, and "news + open comment" is a commodity. But news is the right *fuel*: it supplies daily stakes and timeliness for free.
- **B fails on effort:** questions invite essays; claims invite verdicts. "Should inheritance be taxed more?" makes me compose. "Inheritance above $1M should be taxed at 60%" makes me *react* — and the reaction is one tap.
- **D is a magazine,** not a network.
- **E and F are stage-2 layers,** not engines: both presuppose the crowd the engine is supposed to create.
- **C is the engine.** It has the lowest entry effort (tap), the strongest trigger (verdict + curiosity gap), launch-day supply (automated claims pipeline), and it generates the two compounding assets (debate maps, position ledgers).

## 6. Recommended Content Model

**Model G (hybrid), with C as the core: a claim-reaction engine fueled by international English-language news, with an evergreen layer, and community/user-submitted claims introduced only after density exists.**

- **Core object: the CLAIM** — one sharp, sided, ≤15-word English sentence ("Remote work reduces innovation," "The EU AI Act will push AI startups out of Europe," "TSMC's Arizona fabs will never reach Taiwan's yields"). Claims are *crafted*, not raw headlines: specific enough to be falsifiable-ish, sided enough to provoke, fair enough to be answerable from both directions.
- **Domains (D2, locked):** Economics · Business · Technology/AI · Geopolitics. International coverage by default; European topics admitted when globally or intellectually relevant (the EU AI Act qualifies; a French pension reform detail does not, unless it is the world's test case for something). A **global-relevance check** is built into the pipeline (§15) so the feed cannot drift regional.
- **Exclusion (D4, locked):** electoral horse-race and party-partisan claims are out of V1 ("X will win the election," "Party Y is destroying the country"). Policy substance is in ("Tariffs on Chinese EVs will accelerate Western battery innovation" is a claim about mechanisms, not tribes). The pipeline enforces this with a topic classifier plus valence checks (§15).
- **Fuel: news** (~70% of claims at launch) — distilled from real events, each with a 2–4 bullet sourced context brief.
- **Ballast: evergreen claims** (~20%) — big timeless questions run as weekly features ("Nuclear power is the most realistic path to decarbonization").
- **Stage 2: community & user-submitted claims** (~10% growing over time) — submitted through the same automated quality gate all claims pass (§15), because claim quality is the product's editorial soul.
- **The ritual: one flagship Daily Claim** — a Wordle-like shared daily object everyone takes a position on, with the split revealed only after committing. The **Claim Day is a UTC calendar day**; delivery is localized to each user's morning (D1 consequence). Shared rituals create shared conversation ("did you see today's claim?") and a habit anchor that infinite feeds don't.
- **The compounding asset: the CLAIM PAGE** — a permanent, evolving page per claim: live split, the ranked best arguments on each side (each expandable into ARGUMENT + EXAMPLES + sources), and the split-over-time chart. X's takes evaporate in 24 hours; Reddit threads decay after sorting closes. Claim pages *appreciate*: they are the Wikipedia-of-debates layer that makes old activity valuable and SEO-discoverable — and English SEO is the best-compounding SEO there is (D1 upside).

IDEA → ARGUMENT → EXAMPLE remains as: CLAIM (the idea, now supplied by the system, not the user) → ARGUMENT (the user's one-sentence-or-more reason) → EXAMPLE (attached from the sourced library). The user starts on step zero — a tap — instead of step one.

---

## 7. Core Engagement Loop

```
TRIGGER        Daily Claim push at the user's local morning hour ("Today:
               'The 4-day week is a luxury of rich economies.'") — or a
               personal counter-notification ("Your argument on remote
               work was countered by 3 people").
   ↓
CONSUMPTION    Claim + 3-bullet sourced context brief (60-second read).
               The split is BLURRED. Teaser: top argument from each side.
   ↓
REACTION       One tap: AGREE / DISAGREE / IT'S COMPLICATED.
               Commit-to-reveal: the split and full debate map unlock
               only after the tap. (Curiosity converts into expression.)
   ↓
POSITION       The tap is recorded — timestamped — on the user's ledger.
               Immediate payoff #1: the reveal ("You're with the 34%").
   ↓
ARGUMENT       Optional, invited, never demanded: "Which is closest to your
               reason?" → co-sign an existing argument (zero writing) or
               write one sentence (hard cap). 90% co-sign; 10% write.
   ↓
EXAMPLE        For writers: the library suggests 2-3 documented, sourced
               cases matching the argument. Attach with one tap, search,
               or skip. Never required.
   ↓
PUBLICATION    The argument enters the claim's debate map on its side,
               ranked by endorsements — not lost in a reverse-chron feed.
               A strong argument can become the canonical case for a side
               and live there for years.
   ↓
SOCIAL REWARD  Layered so it works at ANY network size:
               n=1: the split reveal + ledger entry (self-informational).
               n=small: co-signs ("41 people share your reason").
               n=medium: CONVINCING marks; rank on the debate map.
               n=large: MOVED ME marks from the opposing camp — the
               product's highest honor (see §11).
   ↓
RETURN         Tomorrow's Daily Claim (ritual) · "your argument was
               countered" (defense) · "the split moved 9 points since you
               voted" (world-changed) · Day-2 closing recap of yesterday's
               flagship · weekly ledger recap ("the community moved 14
               points toward your position") (identity).
```

### The weakest point in the loop — named honestly

**SOCIAL REWARD at low user counts.** With 200 users, an argument gets two co-signs and no MOVED ME marks. Every social product dies here; this one must be engineered to survive it:

1. **Aggregate-first reward:** the split reveal is a *guaranteed, instant, audience-independent* payoff. A poll with 80 votes is already interesting; a post with 0 likes is a humiliation. The atomic action pays off at tiny n.
2. **Shelf-life inversion:** debate-map ranking means an argument written in week 1 is still *the* top argument in month 6 — early contributions appreciate instead of decaying, which rewards precisely the pioneer users a cold network must retain.
3. **Automated spotlight:** "Argument of the day" — selected by signal quality (not editorially staffed, per D7) — gives guaranteed recognition supply while the crowd is small.
4. **Density by design:** launch inside one or two niches (see §14) so that 500 users all collide on the same 4–6 claims per day, rather than 500 users spread across 200 claims.

**Second weakest point (changed by D7):** the ritual now depends on *automated* claim quality. The failure mode is silent drift rather than founder burnout. Mitigations in §15.

---

## 8. Expression Flow (Friction Design)

Design assumptions, stated plainly: users are lazy; users will not write essays; users hold positions before they hold arguments. The flow is a **staircase where every step is optional and every step pays immediately**:

- **STEP 0 — TAP (100% of active users).** AGREE / DISAGREE / IT'S COMPLICATED. Payoff: the split reveal + a ledger entry. This *is* participation — the lurker problem is dissolved rather than solved: "lurkers" here are voters, and their taps are content (the split IS user-generated content).
- **STEP 1 — CO-SIGN (target ~30%).** "Which of these is closest to your reason?" — the top 3 existing arguments on the user's side, plus "none of these." Zero writing; the user contributes ranking signal; the argument's author gets the reward. (This is the 90-9-1 rule embraced as architecture: the many rank, the few write.)
- **STEP 2 — ONE SENTENCE (target ~5–10%).** "Add your reason" — hard cap ~280 characters for the core reason. The cap is friction *relief*: it kills essay-dread and equalizes effort. Prompt is "because…", never "write an argument."
- **STEP 3 — CLARIFY (optional, on request).** AI assistance under strict rules (below): flags vagueness ("'hurts the economy' — which mechanism?"), detects two claims fused into one, suggests a tightening — as a visible diff the user accepts or rejects word by word.
- **STEP 4 — SUPPORT (optional).** The example library suggests 2–3 documented cases with sources ("Iceland's 2015–19 four-day-week trials; government evaluation report"). One tap to attach, or search, or skip. If the library has nothing, it says so — it never invents.
- **STEP 5 — PUBLISH.** The argument (with any examples) joins the debate map. Editing stays open; a corrected source *upgrades* the argument's badge rather than shaming the author.

### The AI-homogenization risk, taken seriously

If AI drafts arguments, every user sounds like the same medium-smart ghostwriter, authenticity collapses, and reading the platform becomes pointless — you could just ask the model yourself. The boundary must be constitutional, not cosmetic:

**USER THINKING (AI may never touch):** which side to take; what the reason is; which examples feel decisive; changing one's mind.
**AI ASSISTANCE (permitted):** compressing news into sourced context briefs; *retrieving* examples from the verified library with citations; asking clarifying questions about the user's own sentence; flagging that a sentence contains two claims; formatting.
**HARD RULES:** AI never writes a first draft of an opinion; never suggests which side to take; never generates examples from model memory (retrieval-only, with linked sources); all AI edits appear as diffs the user explicitly accepts; AI-assisted content is labeled.

Structural defense beyond rules: because **co-signing is the primary contribution mechanic**, most users never face a composition box at all — there is nothing for AI to ghostwrite. And because the highest-status signal (MOVED ME, §11) measures *effect on opposing humans* rather than prose quality, pasted LLM boilerplate earns little: generic arguments don't move people who've heard them before; specific, lived, well-evidenced ones do.

---

## 9. Feed Architecture

**Principle: not an infinite feed — a bounded daily session.** The product should feel like Wordle-plus-the-Economist's-letters-page, not like a slot machine. "You're done for today" is a feature and a differentiator (and a retention mechanic: closure creates appetite for tomorrow).

### Feed structure (in order)

1. **THE DAILY CLAIM** (1 item, pinned) — the shared ritual object (UTC claim day, locally-timed delivery).
2. **LIVE CLAIMS** (3–6 items) — active claims in the user's chosen domains, ranked by: split movement (a debate whose split shifted recently is alive), argument velocity, topical match, and recency. Never ranked by raw engagement (that road leads to outrage optimization).
3. **YOUR DEBATES MOVED** (0–3 items) — claims where the user has a position and something changed: a counter to their co-signed argument, a big split shift, a new top argument on the opposing side.
4. **THE EVERGREEN** (1 item, weekly) — the big timeless claim.
5. **UNFINISHED** (0–1) — "You took a position on X but gave no reason — the YES side is short on arguments."

### Anatomy of one feed item (concrete, no hand-waving)

```
┌─────────────────────────────────────────────────┐
│ TOPIC: Work & Economy          ⏱ Day 2 of debate │
│                                                   │
│ CLAIM (the headline, ≤15 words):                  │
│ "The 4-day work week is a luxury of rich          │
│  economies."                                      │
│                                                   │
│ CONTEXT (2-4 factual bullets, each source-linked):│
│ • Iceland ran trials 2015-19 covering 1% of its   │
│   workforce [Autonomy/Alda report]                │
│ • Belgium legalized a compressed 4-day week in    │
│   2022 [Belgian labour law reform]                │
│ • UK pilot: 56 of 61 firms continued [Cambridge]  │
│                                                   │
│ SPLIT: ████████░░░░░░ [BLURRED — take a position  │
│                        to reveal]                 │
│                                                   │
│ Top arguments (teaser, one line per side):        │
│ FOR: "Productivity gains only appear in service   │
│       sectors that…" — 214 co-signs               │
│ AGAINST: "Manufacturing economies can't compress  │
│       output hours because…" — 178 co-signs       │
│                                                   │
│ 1,204 positions · 37 arguments · split moved      │
│ 6 pts this week                                   │
│                                                   │
│ [ AGREE ]  [ DISAGREE ]  [ IT'S COMPLICATED ]     │
└─────────────────────────────────────────────────┘
```

- **Source of content:** claims + context = automated pipeline with quality gates (§15); split + arguments = users; seeded arguments at launch = curated from published sources, attributed and labeled (§14).
- **Content mix at launch:** ~70% news-derived claims, ~20% evergreen, ~10% curated user submissions. By year 1, target ~50/20/30. Domain balance across Economics / Business / Tech-AI / Geopolitics is monitored by the pipeline so no single domain (or region) dominates structurally.
- **Interaction buttons:** exactly three position buttons. No like button on claims. (Endorsement marks exist on *arguments*, inside the debate map — §11.)

## 10. First-Time User Experience (the first 20 minutes, near-zero network)

Design constraint: the experience must be worth it **with almost no other users**, which means the payoffs must come from information and self-knowledge, not from audience.

- **Minute 0–1 — no feature tour.** Screen 1: "Pick your arenas" — Economics · Business · Tech & AI · Geopolitics (choose 2+). Screen 2 is already a claim.
- **Minute 1–6 — the position sprint.** Five rapid-fire claims from chosen domains, mixing one news claim with evergreens ("Nuclear is the most realistic path to decarbonization," "Universities are no longer worth the cost for most students," "US-China decoupling is already irreversible"…). For each: claim → tap → split reveals with a small animation → next. This is *fun at n=0* because seeded splits from the founding cohort are already informative, and each reveal is a micro-payoff ("only 28% of people agree with me?!"). The user has contributed five pieces of content (positions) in five minutes without "posting" anything.
- **Minute 6–9 — the mirror.** "Your starting map": where the user stood vs. the crowd on the five claims — "You're with the majority on 2 of 5. Your most contrarian position: X." People screenshot self-knowledge artifacts; this is the first share loop.
- **Minute 9–15 — the depth reveal.** On the claim the user felt strongest about (measurable: fastest tap, or self-reported), open the full claim page: ranked arguments on both sides, sources attached, split-over-time. The quality bar of this page — even fully seeded, zero-community — must make the user think: *"this is the most organized view of this debate I've seen anywhere."* That thought is the product's first retention hook, and it works at n=1.
- **Minute 15–18 — first escalation.** "Which of these is closest to your reason?" → co-sign (one tap). Then, optionally: "Is your reason missing? Add it in one sentence." If they write, the example library immediately suggests a documented case — the *"whoa"* moment where the product visibly does research work for the user.
- **Minute 18–20 — the hook is set.** "Tomorrow's Daily Claim arrives at 8:00 your time. You'll see how today's split moves overnight." One notification permission ask, honestly framed: one push per day plus replies to *your* positions. Identity: the user picked a pseudonym at signup (D3) — no real-name pressure, no imported social graph.

**Why it already feels useful:** the user learned where they stand relative to others (self-knowledge), saw the strongest opposing case in 60 seconds (information), and got research handed to them (service) — three payoffs, zero audience required.

---

## 11. Social Mechanics

**Design goal: reward persuasion and evidence, not popularity. Every signal must answer: what behavior does this purchase?**

### Audit of standard mechanics

- **Likes:** purchase agreement-seeking; reward tribal applause; rejected on arguments (kept nowhere).
- **Upvotes/downvotes:** same pathology plus pile-on dynamics; rejected.
- **Follows (of people):** premature celebrity dynamics in a small network concentrate attention on personalities over arguments; deferred. Users follow **topics and claims** first; following people can come later.
- **Reposts:** outward sharing of claim/split cards = yes (acquisition); internal amplification = no (no virality-of-outrage engine).
- **Replies:** exist only as **structured counters** — a reply to an argument must itself be an argument (on the other side, or a nuance). No open comment threads. This single constraint removes ~80% of the moderation surface of a normal social product.

### The typed endorsement set (kept to four; complexity is a tax)

| Mark | Who can give it | What it purchases |
|---|---|---|
| **CONVINCING** | Anyone | Baseline quality ranking within a side |
| **MOVED ME** | *Only* users whose logged position was on the other side (or who shift position after reading — the shift is recorded) | **The product's core currency.** Measurable cross-camp persuasion — the thing no other platform can even compute, because no other platform knows readers' prior positions |
| **STRONG EVIDENCE** | Anyone | Rewards the EXAMPLE layer; feeds example-library quality signals |
| **NEEDS A SOURCE** | Anyone | Polite evidentiary pressure; converts "you're lying" into a workflow. Author who adds a source clears the flag and gains STRONG EVIDENCE eligibility |

(Plus one *claim-level* control that is a quality signal, not an endorsement: **UNFAIR FRAMING** — "this claim is worded to favor one side." It exists primarily to police the automated pipeline; see §15.)

**Why MOVED ME is the crown jewel:** because every reader's position is on record *before* they read, persuasion becomes measurable. "This argument moved 44 people from Disagree to It's-complicated" is a fact, not a vanity metric. It cannot be farmed by your own side, it is hard to fake (fake accounts would have to build position histories), and it rewards exactly the behavior the product exists for. It also creates the platform's signature status event: **publicly changing your mind is a high-status act** ("changed my position" badge on the ledger, celebrated in the weekly recap), inverting the internet's default where mind-changing is defeat.

### Reputation (V1, updated per D6)

- **Per-topic, not global** (an economics reputation says nothing about geopolitics).
- Computed from social signals only in V1: MOVED ME received (weighted heaviest), STRONG EVIDENCE received, and sources added that cleared NEEDS-A-SOURCE flags. (Objective **calibration** scoring arrives only with predictive claims — V2, per D6.)
- The ledger's "judgment" narrative in V1 runs on **split-movement vindication**: "the community moved 14 points toward your position since you took it" — descriptive, dated, screenshot-friendly, and honest about not being a resolution.
- Displayed as a small per-topic tier next to the pseudonym in debate maps — not a grindable point total, no leaderboard at launch. Gamification is confined to signals that *are* the product's values; no streaks-for-streaks'-sake, no badges for volume.
- **Identity (D3):** persistent pseudonyms by default. Reputation attaches to the pseudonym and compounds — this preserves candor (Reddit's lesson) while still building an ownable track record. **Optional verification later** (e.g., a verified-human or verified-expertise mark) is additive and never required; it must never become a two-tier speech system.

---

## 12. Differentiation

**"Why would someone use this instead of X or Reddit?"** — answered with mechanics, not aspirations:

1. **Commit-to-reveal.** X and Reddit show you the crowd before you speak, so most people conform or stay silent. Here you cannot see the split until you've taken a position. Independent judgment is enforced by the interface. No major platform does this.
2. **The debate map.** On X, the best argument about a topic is un-findable an hour later; on Reddit, thread sorting freezes early and the thread dies in a day. Here, every claim has a permanent page where the strongest case on each side is ranked, sourced, and current. "The best 2 minutes on both sides of any live question" is a *retrieval promise* competitors structurally cannot make — their data model has no sides.
3. **The position ledger.** A timestamped public record of what you believed, when, with what reasoning, including your mind-changes — with receipts ("she took that position eight months before the consensus moved"). X's archive is a liability people delete; this ledger is an asset people build under a pseudonym they keep.
4. **Measured persuasion (MOVED ME).** Only possible when prior positions are logged. X can never know whether a tweet changed anyone's mind; this product knows exactly.

A caution specific to D1: in the English market, answer engines (Perplexity-class) already serve "summarize both sides" on demand. Agora's informational job alone is therefore not defensible — the moat is the *combination*: both sides **plus** where a real community stands **plus** your own position on record **plus** who was actually moved. The social layer is not decoration; it is the moat.

**"People use [PRODUCT] when they want to ______":**

> **"People use Agora when they want to take a position on record and see the strongest case on both sides in two minutes."**

Two specific jobs, one sentence: the *expressive* job (go on record, be counted, build a judgment track record) and the *informational* job (get the honest steelman of both sides fast, without reading 400 quote-tweets).

## 13. Positioning

- **Not "a debate platform."** That category is a graveyard, and the word "debate" recruits people who love arguing — the worst founding population.
- **Not "a social network."** It cannot win a social-graph fight, and shouldn't fight one.
- **Not "a thinking tool."** Tools don't retain daily.
- **Recommended category: an *opinion ledger* / argument network — "the record of what people believe, and why."** Consumer framing: **"Where you go on record."** The nearest successful structural analogies are instructive: **Wordle** (one shared daily object), **Letterboxd** (log your positions the way cinephiles log films; the profile is the product; writing is the elite layer), **Polymarket/Metaculus** (timestamped track record as status), **Wikipedia** (the compounding canonical page). Agora is Letterboxd-for-beliefs powered by a Wordle-cadence ritual, accreting a Wikipedia-of-debates.
- **Voice and terminology are English-native by construction (D1):** claim, position, split, debate map, ledger, MOVED ME — all product language is designed in English, for an international reader, from day one. Domain examples, onboarding claims, share cards, and marketing copy assume a reader in London, Lagos, Singapore, or San Francisco equally. (Note for later: "Agora" is a crowded name in English-language tech — agora.io among others. Fine as a working title; a naming/trademark pass is flagged in §G before public launch.)

---

## 14. Cold-Start Strategy

At launch: 0 users, 0 posts, 0 discussions — in the most competitive English-language attention market. The plan assumes exactly that.

1. **Editorial-first value (n=0):** the product is useful with zero community because claim pages ship pre-built: crafted claim + sourced context brief + **seeded debate maps** — the strongest published arguments on each side, *imported from real, attributed sources* ("The FT's editorial board argues…", an academic's published position, a think-tank report), clearly labeled "curated," linked out. **Never fake users. Never AI-fabricated arguments dressed as people.** Users' first acts are voting on the split and ranking/countering curated arguments — reacting, which is easier than creating, which is the whole thesis.
2. **Founding-cohort splits:** seed positions honestly — a 200-person founding cohort generates real splits before public launch. A split with 200 votes is already a payoff for user #201. **Under D1 this cohort must be recruited from interest-based English-speaking channels, not the founder's personal graph:** X tech/AI discourse, Hacker News, economics and geopolitics newsletter/podcast communities (Substack comment sections, Discords), and relevant subreddits. This recruiting plan is the top open operational question (§G) — it needs channels where the founder can build or borrow standing, and it needs to start before the product is finished.
3. **Wedge, not world:** launch into one or two dense niches where position-taking is native. **Primary recommended wedge: English-language tech/AI discourse** — extremely opinionated, lives on X and HN, high tolerance for new products, and the AI news cycle supplies daily claims that are timely, global, and (mostly) non-partisan. **Secondary: economics/geopolitics enthusiasts** (the podcast-and-newsletter intelligentsia). Education (D5) is a distribution channel to develop after the consumer loop proves itself — a teacher assigning the day's claim creates instant classroom density, but consumer comes first.
4. **The share-out loop:** every claim generates a **split card** ("73% here disagree with this. Where do you stand? →") designed to be posted to X/LinkedIn/WhatsApp. The commit-to-reveal mechanic survives the embed: the card shows the claim and *blurred* split. Borrow the big networks' distribution the way Wordle's grid did — and note that split cards in English travel in the largest possible pond (D1 upside).
5. **SEO from day one:** claim pages are exactly what people Google ("4 day work week evidence for and against"). The debate-map format is built to win that query in English, the highest-volume search language. Slow, compounding, free.
6. **Timezone honesty:** early density will cluster in 2–3 time zones anyway (wherever the cohort came from). That is fine — the UTC claim-day design (§0) means early users in different zones still share the same claim, and the Day-2 closing recap gives late-zone users a live object even when the early crowd has moved on.

## 15. Content Supply Strategy — The Automated Editorial Engine (redesigned for D7)

**Design goal:** ≤ 15 minutes/day of human operations at launch, trending toward ~1–2 hours/week — with quality guaranteed by *gates and tripwires*, not by daily human craft. The founder never writes or edits claims; at most, they tap approve/reject.

### The three content classes, kept strictly separate and labeled

| Class | What | Rules |
|---|---|---|
| **FACTUAL** | Context briefs, the example library, split statistics | Every item source-linked to an allowlisted source; machine-verified (below); corrections workflow |
| **AI-ASSISTED** | Claim candidates, context-brief drafts, example retrieval/summaries, curated-argument seeding | Passes the automated gate battery; labeled; AI *retrieves and compresses*, never originates facts |
| **USER-GENERATED** | Positions, arguments, counters, example attachments, claim submissions (stage 2) | Arguments carry NEEDS-A-SOURCE pressure, not pre-moderation; user claim submissions pass the same gate battery as pipeline claims |

### The pipeline (ten stages, human touch at exactly one)

1. **INGEST.** A curated allowlist of ~50–100 English-language sources across the four domains: wires (Reuters, AP), global business/econ press (FT, Economist, Bloomberg, WSJ), tech (Ars Technica, The Verge, specialist newsletters), policy and IR (think tanks with disclosed funding, journals, official publications). The allowlist is the **first quality gate** and a *one-time editorial artifact reviewed monthly* — this is where human judgment is spent efficiently: once, on sources, instead of daily, on claims.
2. **CLUSTER & SCORE.** Stories are deduplicated into event clusters and scored on: independent multi-source coverage (≥3 allowlist sources), debate potential (does the event imply a decision, tradeoff, or contested mechanism?), domain fit (D2), and **global relevance** (would this matter to a reader on three continents? — the structural guard against regional drift required by D1/D2).
3. **EXCLUSION FILTERS (D4).** A topic classifier blocks electoral horse-race and party-partisan framings. Policy substance passes; team-sports politics does not. Geopolitics gets an extra guard: claims about *mechanisms and consequences* ("Sanctions accelerate de-dollarization") pass; claims assigning tribal blame in active conflicts get flagged to the human queue rather than auto-published, at any automation level.
4. **CLAIM DRAFTING.** An LLM drafts 3–5 candidate claims per selected cluster against a **codified Claim Style Rubric** — the editorial craft turned into a testable spec: ≤15 words; a single proposition (no smuggled double-claims); sided (a reasonable person can disagree); specific mechanism over vague sentiment; no loaded epithets; answerable without specialist knowledge after reading the context brief.
5. **STEELMAN TEST.** The pipeline must generate two strong, sourced arguments *for each side* of a candidate claim. If it cannot — because the claim is mush ("Is AI good?"), settled fact ("The Earth is warming"), or bait — the claim fails automatically. This single test encodes most of what a good claims editor does.
6. **VERIFICATION.** Context-brief bullets are generated *only* as compressions of allowlisted articles: each bullet carries its source link, passes an entailment check (is the bullet actually supported by the linked text?), and any number must be corroborated by a second independent source or it is dropped. Links are validated. Nothing enters a context brief from model memory.
7. **ADVERSARIAL GATE.** An independent second pass attempts to *reject* each surviving claim: ambiguity, unfair valence (would informed people on both sides accept the wording as a fair statement of the question?), hidden partisanship, legal/safety exposure. Claims must survive N-of-M independent checks to queue.
8. **HUMAN GATE (launch mode — the recommended thin layer).** Survivors land in a mobile review queue: **approve / reject / flag**, one tap each, 6–10 candidates/day ≈ **10–15 minutes/day**. The human never writes and never edits — only selects. The flagship Daily Claim is chosen here (or auto-chosen by score if the founder opts for zero-touch).
9. **PROGRESSIVE AUTOPILOT.** Every pipeline version's human-approval rate is tracked. When a claim category sustains >95% approval over a trailing window (say 200 candidates), that category graduates to **auto-publish with post-hoc spot checks**. User signals — UNFAIR FRAMING flags, NEEDS-A-SOURCE rates on context briefs, report rates — act as tripwires that demote a category back to human review automatically. Automation is *earned per category*, not declared globally: evergreen-style economics claims will graduate quickly; active-conflict geopolitics may never graduate, by design.
10. **SEEDING & LIBRARY (automated byproducts).** Debate maps for new claims are auto-seeded with 2–3 curated published arguments per side — retrieved from allowlisted and academic sources, quoted, attributed, linked, entailment-checked, labeled "curated." Every verified context bullet and seeded source simultaneously becomes an **example-library** entry (summary + source link + what-it-illustrates tags), so the library grows as a free byproduct of daily operations rather than as a separate manual project.

### Degradation policy — the quality floor

**Publish fewer, never worse.** If only two candidates pass the gates on a slow or ambiguous news day, the feed runs the flagship plus evergreen re-runs and "still moving" older claims (whose *state* — splits, new counters — refreshes even when the claim doesn't). A pre-built, one-time-polished **evergreen bank of ~100 claims** is the buffer stock. The gate is never lowered to fill the feed. Minimum viable day: 1 flagship + 3 supporting items, and the bank guarantees that minimum indefinitely.

### Tripwires against silent quality drift (the new #2 risk)

- **UNFAIR FRAMING** as a first-class user control on every claim (§11) — the crowd polices the pipeline.
- **Automated weekly quality report:** flag rates per claim category; split lopsidedness (a category repeatedly producing 95/5 splits is generating mush or bait); IT'S-COMPLICATED rate anomalies; source-diversity drift; regional-balance drift (D2 guard).
- **Monthly human audit:** a random sample of published claims re-scored against the rubric (~1 hour/month).
- **Versioned rubric with regression tests:** every prompt/pipeline change is tested against a golden set of known-good and known-bad claims before deployment. The editorial craft lives in a spec that improves monotonically, instead of in a person who gets tired.

### Cost of the automation decision, stated plainly

A human editor's taste catches things no rubric anticipates: the subtly loaded word, the claim that is fair in text but cruel in the week's context. The tripwires above bound this risk; they do not eliminate it. The 10–15-minute human gate at launch is the cheap insurance against the pipeline's unknown unknowns — which is why it is recommended even though full zero-touch is technically available from day one.

## 16. AI Role and Limitations

**AI is the research assistant, the librarian, and — new in v2 — the newsroom's production line (D7). It is never the debater, never the author of opinions, never a participant.**

Permitted: the entire claim pipeline of §15 (drafting, verification, gating — with the thin human gate at launch); retrieval-only example search over the verified library (with mandatory source links); clarity feedback on a user's own sentence, delivered as accept/reject diffs; detecting fused claims; AI-content labeling throughout.

Forbidden — as product constitution, not policy fine print: generating opinions, arguments, or positions for users; recommending which side to take; generating examples, studies, statistics, or quotes from model memory (**retrieval-only** is the anti-hallucination line: if it's not entailed by an allowlisted source, it does not publish); AI accounts participating in debates; ghostwriting of any kind.

The line, restated for v2: **AI may manufacture the arena — never the athletes.** It builds claims, briefs, and libraries under verification gates; the positions, the arguments, and the persuasion are exclusively human. Two structural defenses do more than any rule: **co-signing** means most users never compose text (nothing to ghostwrite), and **MOVED ME** means status flows from demonstrated effect on opposing humans, which generic LLM prose is bad at earning. AI-pasted arguments will exist; the design makes them unprofitable rather than pretending to detect them.

---

## 17. Monetization Hypotheses (reordered per D5)

Ordered by founder priority and conviction; none should distort the first year of product decisions.

1. **Consumer premium (primary long-term consumer path).** Free: full participation, forever — positions and arguments are the network's fuel and must never be paywalled. Premium: the research layer — deep example-library search, personal ledger analytics and export, claim-page citation tools, early access to debate data.
2. **Education (secondary channel, per D5 — both distribution and revenue).** Classroom instances: teacher picks the claim, students take positions, build arguments, attach sources; the teacher sees reasoning, not just conclusions. English-first makes this the largest education market (D1 synergy). Developed *after* the consumer loop proves itself; a pilot in year one is reasonable, a pivot to edtech is not the plan.
3. **The aggregate insight asset (the big one, needs scale).** Timestamped positions + reasons + persuasion events across an engaged international population = "what informed segments believe, why, and what changes their minds, over time." Media, research institutions, and public-affairs teams pay heavily for far worse data (polls capture positions with no reasons; social listening captures noise). **Aggregate-only, privacy-preserving (pseudonymous by design — D3 helps here), no individual targeting, no political-campaign sales** — one scandal here kills the trust the product runs on.
4. **Example-library API (optional, later).** Sourced-case retrieval for writing tools and newsrooms.
5. **Advertising: no.** Ads optimize for time-on-site and outrage; the product's entire identity is the opposite.

**Is the consumer network an acquisition layer for another product?** Partially — flywheel, not bait-and-switch: consumers generate the debate maps and belief data; education and (eventually) insight licensing pay for the content engine; the content engine improves the consumer product. **Recommendation:** free consumer product first (D5); education pilot when the loop retains; decide nothing else until then.

## 18. Major Risks (updated for v2 decisions)

1. **The niche-appetite risk (biggest, unchanged).** "Going on record" may attract only a small intellectual population — the same 50k people who love Metaculus. The bet is that *position-taking* (native to everyone: polls, hot takes, sports arguments) can be dignified, not that essay-writing can be popularized. If tap-participation doesn't excite normal users in the wedge niche, the concept is falsified — cheaply and fast, which is the one mercy of this risk.
2. **Silent quality drift (transformed by D7).** The automated pipeline degrades subtly — framings drift loaded, briefs drift stale, claims drift mushy — and nobody is watching daily by design. The ritual dies quietly. Tripwires, the UNFAIR FRAMING control, the monthly audit, and the thin human gate (§15) bound this; they do not zero it. This is now the risk the founder personally owns by choosing D7.
3. **English-market cold start (sharpened by D1).** No local-density shortcut, no personal-graph seeding, adjacent English competitors on both the expressive (prediction markets) and informational (answer engines) flanks. The founding-200 recruiting plan is now as important as any product feature — and it is currently undefined (§G).
4. **AI-content erosion (unchanged).** If debate maps fill with LLM boilerplate, reading them becomes pointless. Defenses in §16 are real but partial; this is an arms race the product must budget for permanently.
5. **Polarization capture vs. blandness (narrowed by D4, not removed).** Electoral politics is excluded, but geopolitics is V1's most combustible domain — active conflicts produce exactly the tribal energy D4 tried to exclude. The pipeline's conflict-claims guard (§15 stage 3) and MOVED ME status flows are the mitigations; the residual question of how hot geopolitics should run is open (§G).

(Also real, ranked below the fatal five: cold-start density miss if the wedge spreads thin; source-dispute moderation costs with no staffed moderator (§G); X cloning the daily-claim format — defensible mainly because the ledger/persuasion mechanics contradict X's engagement economics; notification fatigue; the crowded "Agora" name in English-language tech.)

## 19. Recommended Product Concept (v2, consolidated)

**Agora: the opinion ledger — English-first, international, automated at the core.** Each day, an automated editorial engine distills the world's economics, business, tech/AI, and geopolitics news into sharp, sourced claims — machine-verified, adversarially gated, with at most a 15-minute human approval pass. Users take a position before they can see anyone else's (commit-to-reveal), watch the live split, and climb the effort staircase as far as they care to: co-sign the argument nearest their reason, write one capped sentence, or arm it with a documented example from a sourced library. Arguments compete on permanent per-claim debate maps ranked by typed endorsements — above all MOVED ME, grantable only by users whose recorded position was on the other side, making Agora the first platform where persuasion is measured rather than imagined. Every user builds, under a persistent pseudonym, a timestamped ledger of positions, reasons, and mind-changes — a track record of judgment. Letterboxd-for-beliefs on a Wordle cadence, compounding into a Wikipedia of live debates.

## 20. Open Questions

Resolved in v2: launch language (English — D1), domains (D2), identity (D3), politics scope (D4), consumer-vs-education priority (D5), predictive claims (out of V1 — D6), editorial staffing (automated — D7). Remaining questions are in §G of the Final Output below.

---
---

# FINAL OUTPUT (v2)

## A. Recommended product concept in one paragraph

Agora is a daily ritual and a permanent record, built English-first for an international audience: an automated, source-verified editorial engine turns each day's economics, business, tech/AI, and geopolitics news into sharp claims; users must take a position (one tap) before the crowd's split is revealed; the willing then co-sign or write one-sentence arguments and arm them with documented examples from a sourced library. Arguments compete on permanent per-claim debate maps ranked by typed endorsements — above all MOVED ME, grantable only by users whose recorded position was on the opposing side, making persuasion measurable for the first time. Each user builds, under a persistent pseudonym, a timestamped public ledger of positions, reasons, and mind-changes: a track record of judgment. It is Letterboxd-for-beliefs on a Wordle cadence, compounding into a Wikipedia of live debates — with IDEA → ARGUMENT → EXAMPLE retained as the composer's grammar rather than the product's front door, and with recurring human operations compressed to a 10–15-minute daily approval pass.

## B. The sentence

**"People use this product when they want to take a position on record and see the strongest case on both sides in two minutes."**

## C. Core user loop (≤10 lines)

1. Local-morning push: the Daily Claim ("The 4-day week is a luxury of rich economies").
2. User reads the 3-bullet sourced context (60 seconds). Split is blurred.
3. Taps AGREE / DISAGREE / IT'S COMPLICATED — required to unlock the reveal.
4. Reveal: "You're with the 34%." Position lands on their timestamped ledger.
5. Optional: co-signs the nearest existing argument, or writes one sentence.
6. Optional: attaches a suggested documented example (sourced library).
7. Their argument enters the claim's ranked debate map — permanently.
8. Rewards: co-signs, CONVINCING, and MOVED ME from the other camp.
9. Return triggers: tomorrow's claim; "your argument was countered"; "the split moved 9 points"; the Day-2 closing recap; weekly ledger recap.

## D. Exactly what appears in the main feed

A bounded daily session, not an infinite scroll: **(1)** the pinned Daily Claim (UTC claim day, delivered at the user's local morning); **(2)** 3–6 live claims across Economics / Business / Tech-AI / Geopolitics — each card showing the ≤15-word claim, 2–4 source-linked context bullets, a blurred split bar, one teaser argument per side with co-sign counts, participation stats, and three buttons (Agree / Disagree / It's complicated) — ranked by split movement and argument velocity, never raw engagement; **(3)** "your debates moved": counters to the user's arguments and split shifts on claims they voted on; **(4)** one weekly evergreen claim; **(5)** at most one "unfinished" nudge. Mix at launch: ~70% news-derived claims, ~20% evergreen, ~10% curated user submissions, with automated domain- and region-balance guards so the feed is structurally international. Then: "You're done for today."

## E. Why a user opens the app tomorrow

Four forces, strongest first: **the ritual** — today's Daily Claim exists and everyone in the community answered the same claim on the same calendar day (Wordle mechanics, made timezone-proof); **the defense** — "2 people countered the argument you co-signed" is a personal invitation almost nobody declines; **the changed world** — "the split on remote work moved 9 points since you voted," plus the Day-2 closing recap of yesterday's flagship; **the mirror** — the weekly ledger recap ("the community moved 14 points toward your position on X — you were early") feeds the identity of being someone with judgment.

## F. The 5 biggest reasons the product could fail

1. **Appetite is niche:** going on record excites intellectuals but not enough normal users, even at one-tap entry — a vitamin-sized wedge, not a habit-sized one.
2. **Silent quality drift:** the automated claim pipeline degrades subtly with no daily human watching (the direct cost of D7); the ritual loses its oxygen quietly.
3. **English-market cold start:** no local shortcut, no personal-graph seeding, the founding 200 must be recruited from communities where the founder has no standing yet.
4. **AI boilerplate erodes authenticity:** debate maps fill with pasted LLM arguments and reading them becomes pointless.
5. **Geopolitics runs too hot or the feed runs too bland:** active-conflict claims import the tribalism D4 excluded, or over-filtering produces a civics worksheet — either kills it.

## G. Remaining questions that genuinely need your input

1. **The human gate — accept or refuse:** §15 recommends a 10–15-minute/day one-tap approve/reject queue at launch, with categories graduating to full autopilot as they earn >95% approval. Is that within your "minimize manual operations" constraint, or do you require zero-touch from day one (accepting the §15 quality-drift risk uninsured)?
2. **Founding-cohort channels:** which English-speaking communities can you actually reach — X/HN tech-AI circles, econ/geopolitics newsletter or podcast communities, specific Discords or subreddits? The cold-start plan needs 2–3 named channels and a reason each would care; without this, D1's main cost is unfunded.
3. **Geopolitics heat setting:** should active armed conflicts (Ukraine, Gaza, Taiwan-strait scenarios) be (a) included with the §15 mechanism-only guardrails, (b) capped in frequency, or (c) excluded from V1 entirely? Highest-engagement and highest-risk content in the product — your call on risk appetite.
4. **Moderation ownership in V1:** structured counters remove most moderation surface, but source disputes and reports still need a human of last resort. Is that you (est. a few hours/week at small scale), or should V1 budget for part-time moderation?
5. **Launch cadence:** 1 flagship + 3 supporting claims/day (safer for automated quality, thinner feed) or 1 + 5–6 (richer feed, more gate pressure)? Recommendation: start 1+3 and expand as pipeline approval rates prove out.
6. **Distribution surface priority:** web-first (fastest to ship, best for SEO and share-card landing, no store gatekeeping) or native-app-first (better push-notification ritual, home-screen presence)? This is a product/distribution decision, not a stack decision — my lean is web-first with app-grade mobile web, native app when the ritual proves out.
7. **Naming:** "Agora" is heavily used in English-language tech (agora.io and others). Keep as internal working title and run a naming/trademark pass before public launch — or is the name a commitment I should treat as fixed?

---

**STOP. No PRD, no code, no stack, no full UI design until these seven questions are answered.**
