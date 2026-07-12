# PRODUCT_STRATEGY.md

**Project working name:** Agora
**Date:** 2026-07-12
**Status:** Pre-code product strategy. No screens, no stack, no code.

---

## 1. Executive Assessment

The initial concept — a social platform where users express ideas through the structure IDEA → ARGUMENT → EXAMPLE — is **not viable as described**, but it contains two genuinely valuable assets buried under a fatal framing error.

**The fatal framing error:** the concept is designed around what the founder wants users to produce (structured arguments), not around what users want to feel (seen, right, smart, part of something). Nobody wakes up wanting to structure an argument. People wake up wanting to *win* an argument, to be recognized as someone with good judgment, to react to what just happened. Structure is a cost, not a benefit, for the person posting. Every consumer social product that led with "express yourself better" — Letter.wiki, Parlio, the standalone Change My View app, Kialo as a consumer product — is dead or microscopic. This is not bad luck; it is a pattern. Discourse-quality platforms fail because they charge users effort upfront and pay them status in a currency nobody outside the platform accepts.

**The two real assets in the concept:**

1. **The example discovery engine** — a searchable, sourced library of documented cases (studies, policies, historical events, companies) mapped to claims. This is a compounding knowledge asset nobody has built well, and it becomes a moat over time.
2. **The structured position** — if positions on claims are captured as data (who believes what, why, since when), you get something X and Reddit structurally cannot produce: a legible record of belief, argument quality, and — critically — *measurable persuasion*.

**The recommended pivot:** invert the product. Do not build a platform where users *write structured arguments* (creation-first, high effort, tiny audience). Build a platform where users *react to sharp claims* — take a position in one tap, see where the crowd stands only after committing, and optionally climb an "effort staircase" from tap → one-sentence reason → sourced example. The 1% write arguments; the 99% adjudicate them. The compounding output is a **living debate map per claim** and a **timestamped position ledger per user**. IDEA → ARGUMENT → EXAMPLE survives — but as the grammar of the composer and the schema of the database, not as the front door of the product.

**Verdict:** the original concept should be significantly changed. Detailed reasoning follows.

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
- **Approval anxiety:** publishing a "structured argument" invites being *graded*, not just liked. Fear of being publicly wrong, with sources checked, is a powerful reason not to post. The product as described maximizes exposure risk while minimizing reward.

### Why users may not care / post / return

- **Care:** no timeliness, no stakes, no tribe. A library of arguments has no pulse.
- **Post:** effort + exposure risk + no audience + no external status payoff.
- **Return:** nothing changes daily. An argument published Tuesday is the same on Friday. No live state = no reason to reopen.

### Network-effect and cold-start problems

- Debate requires **opponents**. An argument with no counterargument is a monologue in an empty room — worse than a tweet with no likes, because the format *promises* dialectic. Density requirements are higher than for broadcast networks.
- The graveyard is instructive: **Parlio** (quality discourse, acquired and shut), **Letter.wiki** (public letters between thinkers, dead), **Kialo** (structured debate trees, survives only as a classroom tool), **Arguman** (dead), **Change My View** (thrives *only* as a subreddit — i.e., as a format parasitic on an existing network's density, which is evidence for "feature, not product").

### Moderation, quality, and polarization risks

- **Source disputes become the battleground.** "Your study is p-hacked," "your think tank is funded by X." Moderating evidentiary quality is harder than moderating civility, and the product's promise ("examples must be factual and documented") makes the platform the referee of factuality — an expensive, adversarial position.
- **Polarization capture:** claim-based platforms attract the politically obsessed first. Without design countermeasures, the platform becomes a partisan scoreboard or a ghost town of the reasonable.
- **Echo chambers:** if arguments are ranked by same-side approval, each side's page becomes a rally. (The countermeasure — cross-camp signals — turns out to be the product's biggest opportunity; see §11.)

### AI risks — the deepest threat

By 2026, any LLM produces a well-structured, example-laden argument in five seconds. Three consequences:

1. **The artifact is commoditized.** If the product's value is "a structured argument with sources," ChatGPT delivers that privately with zero social risk. The value cannot be the artifact. It must be things AI cannot commoditize: *a human taking a public, timestamped position under their identity; the aggregate map of what a community believes; measurable persuasion between real people.*
2. **Quality signals reward AI use.** If "well-structured + sourced" earns status, the rational move is to paste from an LLM, and authenticity collapses. Signals must therefore reward things that are cheap for honest humans and worthless when faked: position-taking, being *moved* by others, calibration over time — not prose polish.
3. **AI-fabricated "examples"** (hallucinated studies, fake cases) can poison the example library. The library must be retrieval-only from verified sources, never generative. (§16.)

### Misinformation risk

A platform whose brand is "documented and sourced" suffers catastrophic brand damage from a single viral fabricated example — worse than X does, because X never promised rigor. The sourcing pipeline is a brand-critical system, not a nice-to-have.

---

## 3. Product vs. Feature Analysis

**IS IDEA → ARGUMENT → EXAMPLE A PRODUCT OR JUST A FEATURE?**

**It is a feature.** Specifically, it is two features:

1. **A composer format** — a template for writing a post. Composer formats are features by definition: Change My View is a posting format that lives inside Reddit; polls are a format inside X; AMA is a format inside Reddit. Formats need a host network.
2. **An example search engine** — a retrieval tool. Tools are used, not inhabited. A tool can be a *business* (see §17) but not a social product.

A product is a **loop**: a recurring trigger, a consumption experience, an expression mechanic, a social reward, and a reason to return — reinforcing each other. The initial concept specifies the middle of the loop (expression mechanics) and nothing else. The founder's own ten open questions (why post, what's in the feed, why return…) are precisely the list of everything that separates a feature from a product. That self-diagnosis is correct.

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
7. **Track-record building** — "I want it on record that I said this, dated." A quieter but durable trigger (visible in prediction-market culture: Metaculus/Manifold users grind for calibration scores). **Compatible and differentiating** — no mainstream social product offers a timestamped belief ledger.
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
| Scalability of supply | ●●● | ●● | ●●● (news → claims is a repeatable pipeline; later user-submitted claims) | ●● | ●●● (once alive) | ●●● (once alive) |

**Analysis notes:**
- **A alone fails:** competing with X on news speed is unwinnable, and "news + open comment" is a commodity. But news is the right *fuel*: it supplies daily stakes and timeliness for free.
- **B fails on effort:** questions invite essays; claims invite verdicts. "Should inheritance be taxed more?" makes me compose. "Inheritance above €1M should be taxed at 60%" makes me *react* — and the reaction is one tap.
- **D is a magazine,** not a network.
- **E and F are stage-2 layers,** not engines: both presuppose the crowd the engine is supposed to create.
- **C is the engine.** It has the lowest entry effort (tap), the strongest trigger (verdict + curiosity gap), launch-day supply (editorial claims), and it generates the two compounding assets (debate maps, position ledgers).

## 6. Recommended Content Model

**Model G (hybrid), with C as the core: a claim-reaction engine fueled by news, with an evergreen layer, and community/user-submitted claims introduced only after density exists.**

- **Core object: the CLAIM** — one sharp, sided, ≤15-word sentence ("Remote work reduces innovation," "The EU AI Act will push AI startups out of Europe"). Claims are *crafted*, not raw headlines: specific enough to be falsifiable-ish, sided enough to provoke, fair enough to be answerable from both directions.
- **Fuel: news** (~70% of claims at launch) — each day's claims distilled from real events, each with a 2–4 bullet sourced context brief.
- **Ballast: evergreen claims** (~20%) — big timeless questions run as weekly features ("Nuclear power is the most realistic path to decarbonization").
- **Stage 2: community & user-submitted claims** (~10% growing over time) — submitted through a quality gate (structure check + editorial/moderation), because claim quality is the product's editorial soul.
- **The ritual: one flagship Daily Claim** — a Wordle-like shared daily object everyone takes a position on, with the split revealed only after committing. One per day, same time, push notification. Shared rituals create shared conversation ("did you see today's claim?") and a habit anchor that infinite feeds don't.
- **The compounding asset: the CLAIM PAGE** — a permanent, evolving page per claim: live split, the ranked best arguments on each side (each expandable into ARGUMENT + EXAMPLES + sources), and the split-over-time chart. X's takes evaporate in 24 hours; Reddit threads decay after sorting closes. Claim pages *appreciate*: they are the Wikipedia-of-debates layer that makes old activity valuable and SEO-discoverable.

This is a significant restructuring of the original vision, and it is intended as one. IDEA → ARGUMENT → EXAMPLE remains as: CLAIM (the idea, now supplied by the system, not the user) → ARGUMENT (the user's one-sentence-or-more reason) → EXAMPLE (attached from the sourced library). The user starts on step zero — a tap — instead of step one.

---

## 7. Core Engagement Loop

```
TRIGGER        Daily Claim push ("Today: 'The 4-day week is a luxury of rich
               economies.'") — or a personal counter-notification ("Your
               argument on remote work was countered by 3 people").
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
               voted" (world-changed) · weekly ledger recap ("you were
               early on X; majority came to you") (identity).
```

### The weakest point in the loop — named honestly

**SOCIAL REWARD at low user counts.** With 200 users, an argument gets two co-signs and no MOVED ME marks. Every social product dies here; this one must be engineered to survive it:

1. **Aggregate-first reward:** the split reveal is a *guaranteed, instant, audience-independent* payoff. A poll with 80 votes is already interesting; a post with 0 likes is a humiliation. The atomic action pays off at tiny n.
2. **Shelf-life inversion:** debate-map ranking means an argument written in week 1 is still *the* top argument in month 6 — early contributions appreciate instead of decaying, which rewards precisely the pioneer users a cold network must retain.
3. **Editorial spotlight:** "Argument of the day" surfaced by the team — guaranteed recognition supply while the crowd is small.
4. **Density by design:** launch inside one or two niches (see §14) so that 500 users all collide on the same 6 claims per day, rather than 500 users spread across 200 claims.

**Second weakest point:** the daily ritual depends on daily claim quality — an editorial treadmill. Mitigation in §15.

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
**AI ASSISTANCE (permitted):** compressing news into sourced context briefs (human-reviewed); *retrieving* examples from the verified library with citations; asking clarifying questions about the user's own sentence; flagging that a sentence contains two claims; formatting.
**HARD RULES:** AI never writes a first draft of an opinion; never suggests which side to take; never generates examples from model memory (retrieval-only, with linked sources); all AI edits appear as diffs the user explicitly accepts; AI-assisted context content is labeled.

Structural defense beyond rules: because **co-signing is the primary contribution mechanic**, most users never face a composition box at all — there is nothing for AI to ghostwrite. And because the highest-status signal (MOVED ME, §11) measures *effect on opposing humans* rather than prose quality, pasted LLM boilerplate earns little: generic arguments don't move people who've heard them before; specific, lived, well-evidenced ones do.

---

## 9. Feed Architecture

**Principle: not an infinite feed — a bounded daily session.** The product should feel like Wordle-plus-the-economist's-letters-page, not like a slot machine. "You're done for today" is a feature and a differentiator (and a retention mechanic: closure creates appetite for tomorrow).

### Feed structure (in order)

1. **THE DAILY CLAIM** (1 item, pinned) — the shared ritual object.
2. **LIVE CLAIMS** (3–6 items) — active claims in the user's chosen topics, ranked by: split movement (a debate whose split shifted recently is alive), argument velocity, topical match, and recency. Never ranked by raw engagement (that road leads to outrage optimization).
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
│   2022 [Loi travail, Moniteur belge]              │
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

- **Source of content:** claims + context = editorial pipeline (news APIs → AI-drafted, human-approved); split + arguments = users; seeded arguments at launch = curated from published sources, attributed and labeled (§14).
- **Content mix at launch:** ~70% news-derived claims, ~20% evergreen, ~10% curated user submissions. By year 1, target ~50/20/30.
- **Interaction buttons:** exactly three position buttons. No like button on claims. (Endorsement marks exist on *arguments*, inside the debate map — §11.)

## 10. First-Time User Experience (the first 20 minutes, near-zero network)

Design constraint: the experience must be worth it **with almost no other users**, which means the payoffs must come from information and self-knowledge, not from audience.

- **Minute 0–1 — no feature tour.** Screen 1: "Pick 3 topics" (Economy, Tech, Science, Society, Geopolitics, Culture…). Screen 2 is already a claim.
- **Minute 1–6 — the position sprint.** Five rapid-fire claims from chosen topics, mixing one news claim with evergreens ("Nuclear is the most realistic path to decarbonization," "Universities are no longer worth the cost for most students"…). For each: claim → tap → split reveals with a small animation → next. This is *fun at n=0* because seeded splits from the founding cohort are already informative, and each reveal is a micro-payoff ("only 28% of people agree with me?!"). The user has contributed five pieces of content (positions) in five minutes without "posting" anything.
- **Minute 6–9 — the mirror.** "Your starting map": where the user stood vs. the crowd on the five claims — "You're with the majority on 2 of 5. Your most contrarian position: X." People screenshot self-knowledge artifacts; this is the first share loop.
- **Minute 9–15 — the depth reveal.** On the claim the user felt strongest about (measurable: fastest tap, or self-reported), open the full claim page: ranked arguments on both sides, sources attached, split-over-time. The quality bar of this page — even fully seeded, zero-community — must make the user think: *"this is the most organized view of this debate I've seen anywhere."* That thought is the product's first retention hook, and it works at n=1.
- **Minute 15–18 — first escalation.** "Which of these is closest to your reason?" → co-sign (one tap). Then, optionally: "Is your reason missing? Add it in one sentence." If they write, the example library immediately suggests a documented case — the *"whoa"* moment where the product visibly does research work for the user.
- **Minute 18–20 — the hook is set.** "Tomorrow's Daily Claim arrives at 8:00. You'll see how today's split moves overnight." One notification permission ask, honestly framed: one push per day plus replies to *your* positions.

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

**Why MOVED ME is the crown jewel:** because every reader's position is on record *before* they read, persuasion becomes measurable. "This argument moved 44 people from Disagree to It's-complicated" is a fact, not a vanity metric. It cannot be farmed by your own side, it is hard to fake (fake accounts would have to build position histories), and it rewards exactly the behavior the product exists for. It also creates the platform's signature status event: **publicly changing your mind is a high-status act** ("changed my position" badge on the ledger, celebrated in the weekly recap), inverting the internet's default where mind-changing is defeat.

### Reputation

- **Per-topic, not global** (an economics reputation says nothing about bioethics).
- Computed from: MOVED ME received (weighted heaviest), STRONG EVIDENCE received, sources added that cleared flags, and **calibration** where claims are checkable ("this policy will be repealed within a year" — positions can be scored against outcomes, prediction-market style).
- Displayed as a small per-topic tier next to the username in debate maps — not a grindable point total, no leaderboard at launch. Gamification is confined to signals that *are* the product's values; no streaks-for-streaks'-sake, no badges for volume.

---

## 12. Differentiation

**"Why would someone use this instead of X or Reddit?"** — answered with mechanics, not aspirations:

1. **Commit-to-reveal.** X and Reddit show you the crowd before you speak, so most people conform or stay silent. Here you cannot see the split until you've taken a position. Independent judgment is enforced by the interface. No major platform does this.
2. **The debate map.** On X, the best argument about a topic is un-findable an hour later; on Reddit, thread sorting freezes early and the thread dies in a day. Here, every claim has a permanent page where the strongest case on each side is ranked, sourced, and current. "The best 2 minutes on both sides of any live question" is a *retrieval promise* competitors structurally cannot make — their data model has no sides.
3. **The position ledger.** A timestamped public record of what you believed, when, with what reasoning, including your mind-changes — with receipts ("she was right about X eight months early"). X's archive is a liability people delete; this ledger is an asset people build. Nothing mainstream offers *convertible intellectual track record*.
4. **Measured persuasion (MOVED ME).** Only possible when prior positions are logged. X can never know whether a tweet changed anyone's mind; this product knows exactly.

**"People use [PRODUCT] when they want to ______":**

> **"People use Agora when they want to take a position on record and see the strongest case on both sides in two minutes."**

Two specific jobs, one sentence: the *expressive* job (go on record, be counted, build a judgment track record) and the *informational* job (get the honest steelman of both sides fast, without reading 400 quote-tweets).

## 13. Positioning

- **Not "a debate platform."** That category is a graveyard, and the word "debate" recruits people who love arguing — the worst founding population. 
- **Not "a social network."** It cannot win a social-graph fight, and shouldn't fight one.
- **Not "a thinking tool."** Tools don't retain daily.
- **Recommended category: an *opinion ledger* / argument network — "the record of what people believe, and why."** Consumer framing: **"Where you go on record."** The nearest successful structural analogies are instructive: **Wordle** (one shared daily object), **Letterboxd** (log your positions the way cinephiles log films; the profile is the product; writing is the elite layer), **Polymarket/Metaculus** (timestamped track record as status), **Wikipedia** (the compounding canonical page). Agora is Letterboxd-for-beliefs powered by a Wordle-cadence ritual, accreting a Wikipedia-of-debates.

---

## 14. Cold-Start Strategy

At launch: 0 users, 0 posts, 0 discussions. The plan assumes exactly that.

1. **Editorial-first value (n=0):** the product is useful with zero community because claim pages ship pre-built: crafted claim + sourced context brief + **seeded debate maps** — the strongest published arguments on each side, *imported from real, attributed sources* ("The FT's editorial board argues…", an academic's published position, a think-tank report), clearly labeled "curated," linked out. **Never fake users. Never AI-fabricated arguments dressed as people.** Users' first acts are voting on the split and ranking/countering curated arguments — reacting, which is easier than creating, which is the whole thesis.
2. **Founding-cohort splits:** seed positions honestly — a 200-person founding cohort (recruited from one niche) generates real splits before public launch. A split with 200 votes is already a payoff for user #201.
3. **Wedge, not world:** launch into one or two dense niches where position-taking is native and the population is reachable: **(a)** tech/startup/AI discourse (extremely opinionated, lives on X, high tolerance for new products, and the AI-policy news cycle supplies daily claims), and/or **(b)** economics-and-policy enthusiasts. A third wedge — **education** (critical-thinking and debate classrooms, where a teacher assigns the day's claim and the class *is* the density) — doubles as the first revenue hypothesis (§17). Geography and language of the wedge is a founder decision (see Open Questions — the founder's examples suggest France).
4. **The share-out loop:** every claim generates a **split card** ("73% here disagree with this. Where do you stand? →") designed to be posted to X/LinkedIn/WhatsApp. The commit-to-reveal mechanic survives the embed: the card shows the claim and *blurred* split. Borrow the big networks' distribution the way Wordle's grid did.
5. **SEO from day one:** claim pages are exactly what people Google ("4 day work week evidence for and against"). The debate-map format is built to win that query. Slow, compounding, free.

## 15. Content Supply Strategy

**The three content classes, kept strictly separate and labeled:**

| Class | What | Rules |
|---|---|---|
| **FACTUAL** | Context briefs, the example library, split statistics | Every item source-linked; human-verified before publish; corrections workflow |
| **AI-ASSISTED** | Claim drafts from news; context-brief drafts; example retrieval/summaries | Always human-approved before publish; always labeled; AI *retrieves and compresses*, never originates facts |
| **USER-GENERATED** | Positions, arguments, counters, example attachments, claim submissions (stage 2) | Arguments carry NEEDS-A-SOURCE pressure, not pre-moderation; claim submissions pass a quality gate |

**The daily pipeline (the editorial treadmill, made survivable):**
1. News APIs + a monitored source list feed a claim-candidate generator (AI-drafted claim + context brief with citations).
2. A human editor selects, sharpens, and balance-checks 5–8 claims/day and picks the Daily Claim. Claim-writing is the product's core editorial craft — a good claim is specific, sided, and steelmannable from both directions; a bad claim is either mush ("Is remote work good?") or bait ("Remote workers are lazy").
3. Debate maps for new claims are seeded with 2–3 curated, attributed published arguments per side.
4. The example library grows along three tracks: editorial seeding around each claim's topic; user attachments (source-checked); and structured imports from public datasets (court records, policy databases, replication-tracked studies) — each entry: summary, source link, what-it-illustrates tags.
5. Freshness math: even a niche launch needs only ~6 good claims/day ≈ 2,200/year — one strong editor plus AI drafting sustains this. Evergreen claims and still-moving old claims ("this split moved 9 points this month") stretch supply further because the *state* refreshes even when the claim doesn't.

**Stage-2 supply:** user-submitted claims through the quality gate; community topic areas (Model E arrives here) with delegated claim curation for proven members.

## 16. AI Role and Limitations

**AI is the research assistant and the librarian. It is never the debater, never the author, never a participant.**

Permitted: drafting claims and context briefs *for human editorial approval*; retrieval-only example search over the verified library (with mandatory source links); clarity feedback on a user's own sentence, delivered as accept/reject diffs; detecting fused claims; translation; AI-content labeling throughout.

Forbidden — as product constitution, not policy fine print: generating opinions, arguments, or positions for users; recommending which side to take; generating examples, studies, statistics, or quotes from model memory (**retrieval-only** is the anti-hallucination line: if it's not in the sourced library, the answer is "no example found — search or submit one"); AI accounts participating in debates; ghostwriting of any kind.

Two structural defenses do more than any rule: **co-signing** means most users never compose text (nothing to ghostwrite), and **MOVED ME** means status flows from demonstrated effect on opposing humans, which generic LLM prose is bad at earning. AI-pasted arguments will exist; the design makes them unprofitable rather than pretending to detect them.

---

## 17. Monetization Hypotheses

Ordered by conviction; none should distort the first year of product decisions.

1. **Education licensing (earliest real revenue).** Classroom instances: teacher picks the claim, students take positions, build arguments, attach sources; the teacher sees reasoning, not just conclusions. Critical-thinking curricula are funded, the buyer is identifiable, and Kialo proves classrooms adopt structured-debate tools — while leaving the consumer-grade version of this wedge unbuilt.
2. **Consumer premium (later).** Free: full participation. Premium: the research layer — deep example-library search, personal ledger analytics ("your calibration score over time"), export/citation tools, early access to claim data. The expressive core must never be paywalled (positions and arguments are the network's fuel).
3. **The aggregate insight asset (the big one, needs scale).** Timestamped positions + reasons + persuasion events across an engaged population = "what informed segments believe, why, and what changes their minds, over time." Media, research institutions, and public-affairs teams pay heavily for far worse data (polls capture positions with no reasons; social listening captures noise). **Aggregate-only, privacy-preserving, no individual targeting, no political-campaign sales** — one scandal here kills the trust the product runs on.
4. **Example-library API (optional, later).** Sourced-case retrieval for writing tools and newsrooms.
5. **Advertising: no.** Ads optimize for time-on-site and outrage; the product's entire identity is the opposite. 

**Is the consumer network an acquisition layer for another product?** Partially — flywheel, not bait-and-switch: consumers generate the debate maps and belief data; education and (eventually) insight licensing pay for the editorial engine; the editorial engine improves the consumer product. **Recommendation:** run free consumer + one education pilot in year one; decide nothing else until the loop demonstrably retains.

## 18. Major Risks

1. **The niche-appetite risk (biggest).** "Going on record" may attract only a small intellectual population — the same 50k people who love Metaculus. The bet is that *position-taking* (native to everyone: polls, hot takes, sports arguments) can be dignified, not that essay-writing can be popularized. If tap-participation doesn't excite normal users in the wedge niche, the concept is falsified — cheaply and fast, which is the one mercy of this risk.
2. **The editorial treadmill.** Daily claim quality is the ritual's oxygen; it degrades → the ritual dies. Claims that are mush bore; claims that are bait polarize. This is a newsroom-grade craft commitment, forever (or until user submission truly works).
3. **AI-content erosion.** If debate maps fill with LLM boilerplate, reading them becomes pointless. Defenses in §16 are real but partial; this is an arms race the product must budget for permanently.
4. **Polarization capture vs. blandness.** The political flood makes it Twitter-with-extra-steps; over-sanitized claims make it a civics worksheet. The knife-edge is walked via claim curation (specific > tribal), NUANCE as a first-class position, MOVED ME status flows, and launching in less-charged domains (tech/econ/science) before touching electoral politics.
5. **Cold-start density miss.** If launch cohorts spread thin, splits are meaningless, maps are empty, and the loop starves. Wedge discipline (one niche, high collision rate on few claims) is the countermeasure — and a temptation to violate every week.

(Also real, ranked below the fatal five: source-dispute moderation costs; X cloning the daily-claim format — defensible mainly because the ledger/persuasion mechanics contradict X's engagement economics; notification fatigue; regulatory exposure if misclassified as a pollster in some jurisdictions.)

## 19. Recommended Product Concept

**Agora: the opinion ledger.** A daily claim — sharp, sourced, drawn from the news — is put to the community. You take a position before you can see anyone else's (commit-to-reveal), watch the live split, and climb as far up the effort staircase as you care to: co-sign the argument closest to your reason, write your own single sentence, or arm it with a documented example from a sourced library. Every claim accretes a permanent debate map — the strongest case on each side, ranked by typed endorsements in which the crown jewel, MOVED ME, can only be granted by people whose recorded position was on the other side, making Agora the first platform where persuasion is measured rather than imagined. Every user accretes a timestamped ledger of positions, reasons, and mind-changes — a public track record of judgment. IDEA → ARGUMENT → EXAMPLE survives as the product's grammar; the product itself is the ritual, the map, and the record.

## 20. Open Questions

Carried into the final section (G) below.

---
---

# FINAL OUTPUT

## A. Recommended product concept in one paragraph

Agora is a daily ritual and a permanent record: each day it puts sharp, sourced claims to its community; users must take a position (one tap) before the crowd's split is revealed; the willing then co-sign or write one-sentence arguments and arm them with documented examples from a sourced library. Arguments compete on permanent per-claim debate maps ranked by typed endorsements — above all MOVED ME, grantable only by users whose recorded position was on the opposing side, making persuasion measurable for the first time. Each user builds a timestamped public ledger of positions, reasons, and mind-changes: a track record of judgment. It is Letterboxd-for-beliefs on a Wordle cadence, compounding into a Wikipedia of live debates — with the original IDEA → ARGUMENT → EXAMPLE structure retained as the composer's grammar rather than the product's front door.

## B. The sentence

**"People use this product when they want to take a position on record and see the strongest case on both sides in two minutes."**

## C. Core user loop (≤10 lines)

1. 8:00 push: the Daily Claim ("The 4-day week is a luxury of rich economies").
2. User reads the 3-bullet sourced context (60 seconds). Split is blurred.
3. Taps AGREE / DISAGREE / IT'S COMPLICATED — required to unlock the reveal.
4. Reveal: "You're with the 34%." Position lands on their timestamped ledger.
5. Optional: co-signs the nearest existing argument, or writes one sentence.
6. Optional: attaches a suggested documented example (sourced library).
7. Their argument enters the claim's ranked debate map — permanently.
8. Rewards arrive: co-signs, CONVINCING, and MOVED ME from the other camp.
9. Return triggers: tomorrow's claim; "your argument was countered"; "the split moved 9 points"; weekly ledger recap.

## D. Exactly what appears in the main feed

A bounded daily session, not an infinite scroll: **(1)** the pinned Daily Claim; **(2)** 3–6 live claims in the user's topics — each card showing the ≤15-word claim, 2–4 source-linked context bullets, a blurred split bar, one teaser argument per side with co-sign counts, participation stats, and three buttons (Agree / Disagree / It's complicated) — ranked by split movement and argument velocity, never raw engagement; **(3)** "your debates moved": counters to the user's arguments and split shifts on claims they voted on; **(4)** one weekly evergreen claim; **(5)** at most one "unfinished" nudge (position taken, no reason given). Mix at launch: ~70% news-derived claims, ~20% evergreen, ~10% curated user submissions. Then: "You're done for today."

## E. Why a user opens the app tomorrow

Four forces, strongest first: **the ritual** — today's Daily Claim exists and everyone in their circle has an answer (Wordle mechanics); **the defense** — "2 people countered the argument you co-signed" is a personal invitation almost nobody declines; **the changed world** — "the split on remote work moved 9 points since you voted" (the state of debates they've invested in has visibly shifted overnight); **the mirror** — the weekly recap of their ledger ("the majority came around to your position on X — you were 3 weeks early") feeds the identity of being someone with judgment.

## F. The 5 biggest reasons the product could fail

1. **Appetite is niche:** going on record excites intellectuals but not enough normal users, even with one-tap entry — the market is a vitamin-sized wedge, not a habit-sized one.
2. **The editorial treadmill breaks:** daily claim quality sags into mush or bait, the ritual loses its oxygen, retention follows.
3. **AI boilerplate erodes authenticity:** debate maps fill with pasted LLM arguments and reading them becomes pointless.
4. **Polarization capture or blandness:** the political flood turns it into angrier Twitter, or over-cautious curation turns it into a civics worksheet — either kills it.
5. **Density miss at cold start:** users spread across too many claims/niches, splits mean nothing, maps stay empty, pioneers churn before rewards exist.

## G. Product questions that genuinely need your input

1. **Launch market and language:** your example ("France considers reforming X") suggests France. Is the launch wedge French-language (French politics/economics/tech discourse) or English-language global tech? This decision shapes the editorial pipeline, the seed cohort, and the claim domains — it cannot be deferred.
2. **First wedge niche:** tech/AI discourse, economics & policy, or education (classrooms) — which one do you have unfair access to? The right wedge is the one where *you* can personally recruit 200 founding users.
3. **Identity model:** real names (LinkedIn-style accountability, higher posting fear), persistent pseudonyms (Reddit-style candor, weaker external status conversion), or user choice? My lean is persistent pseudonyms with optional verification — but this defines the product's culture and your view matters.
4. **Political heat tolerance:** do we exclude electoral/partisan politics for the first 6–12 months (my recommendation: launch on tech/econ/science claims) or is politics core to your vision from day one?
5. **Editorial commitment:** the model requires a human editor sharpening 5–8 claims daily, indefinitely. Are you prepared to be (or hire) that editor? If not, the cadence must drop (e.g., 3 claims/day or weekly deep claims) and the design should adapt.
6. **The education wedge:** are you interested in classrooms as an early revenue + density strategy, or do you want a pure consumer play? This changes the year-one roadmap meaningfully.
7. **Predictive claims:** should some claims be resolvable ("this law passes within a year") so ledgers earn objective calibration scores, prediction-market style? It strengthens the track-record asset but adds resolution mechanics and a different user culture. In or out for v1?
8. **Your own founding conviction:** which single claim domain would *you* personally take positions in every day for a year? Founder-market fit in content is real; the wedge should not be a domain you find dutiful.

---

**STOP. No code, no stack, no full UI design until these questions are answered and the recommended concept (or your amendments to it) is confirmed.**
