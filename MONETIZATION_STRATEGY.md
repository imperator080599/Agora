# MONETIZATION_STRATEGY.md

**Project:** Agora
**Date:** 2026-07-12
**Companion documents:** PRODUCT_STRATEGY.md (v2, decisions D1–D7) · DATA_ASSET_STRATEGY.md (asset map, ethics, V1 data foundations)
**Status:** Pre-PRD analysis. Nothing here is implemented in V1. The consumer experience is never compromised for short-term revenue.

---

## 0. Executive Verdict

**Agora's realistic economic structure is a three-layer stack, earned in strict order:**

1. **Consumer layer (free forever at its core):** the network, the ritual, the ledgers, the debate maps. This layer's job is retention and data accumulation, not revenue. Direct consumer revenue (Agora Pro) is real but small — a sustainability contribution, not the business.
2. **Education layer (secondary, per founder decision D5):** private cohorts sold to institutions. Earliest clean revenue; also a distribution channel. A good business line; not a venture story.
3. **Intelligence layer (the only venture-scale path):** aggregate, privacy-preserving insight into the argument layer of informed discourse — *which arguments hold share, which evidence resonates, what actually moves people*. Structurally unique (see DATA_ASSET_STRATEGY §2), but **gated behind consumer success, ~100k+ engaged users, 12+ months of longitudinal data, and pristine trust.** It is a call option, not a plan of record.

**The "acquisition layer" hypothesis is directionally right and rhetorically dangerous.** Right: the consumer network is what makes the data asset exist, and the data asset is worth more than consumer subscriptions can ever be. Dangerous: the moment Agora *behaves* like a data company wearing a social network costume — in sales decks, in product trade-offs, in what gets instrumented — it kills the trust that both layers run on. The operating rule: **build a consumer product users would defend in public; let the intelligence layer be a consequence, never a driver, of product decisions.**

The strongest challenge to the whole hypothesis is compounding probability: P(intelligence business) = P(consumer product survives its brutal base rate) × P(data proves valuable | survival). Both factors are well under 1. The mitigations are (a) the V1 data foundations cost almost nothing to preserve (DATA_ASSET_STRATEGY §5), and (b) two revenue layers (Pro, Education) exist that don't require the moonshot. That asymmetry — cheap option, real fallbacks — is what makes the strategy sound despite the honest odds.

---

## 1. Consumer Monetization — Agora Pro

### What must remain permanently free (the network's bloodstream)

Non-negotiable, forever, and stated publicly:

- Taking positions, the split reveal, the full ledger.
- Reading every debate map, every claim page, every argument, every source link.
- Writing arguments, co-signing, all endorsements (MOVED ME can never be a premium feature — it is the status economy).
- Example suggestions **during composition** (paywalling composition aids throttles the content engine that everything else depends on).
- Share cards and public profiles.
- The Daily Claim and all notifications about *your* debates.

Rationale: every item above is either the supply loop (positions, arguments), the reward loop (endorsements, reveals), or the acquisition loop (sharing, SEO pages). Charging for any of them taxes growth to collect coffee money.

### The Pro layer — "the research desk," not "remove limits"

| Feature | Target user | Willingness to pay | Retention value | Marginal AI cost | Growth damage if paywalled |
|---|---|---|---|---|---|
| Deep debate search (across all claims, arguments, splits, history) | Analysts, writers, students, debate hobbyists | Medium | High (habit-forming for heavy users) | Low (search infra) | None — casual users never miss it |
| Advanced example discovery (cross-claim evidence research, beyond composition context) | Writers, researchers, consultants | Medium-High — this is a real research tool | Medium | **Medium-High** (retrieval + synthesis compute) — quota-gate rather than hard paywall | None |
| Personal position analytics (position map over time, contrarianism profile, persuasion received/given, cohort divergence) | Identity-driven heavy users | Medium (identity products convert) | **High** — deepens the ledger attachment | Low | Low — keep a free taste (the weekly recap stays free; Pro gets depth) |
| Saved research & private collections (claims, arguments, examples, annotations) | Students, professionals | Medium | High (stored value = switching cost) | Low | None |
| Argument comparison (side-by-side steelmans across claims, export/citation) | Students, writers, educators | Medium | Medium | Low-Medium | None |
| Advanced source tools (source-quality context, citation trails) | Researchers | Low-Medium | Low | Medium | None |

**Pricing philosophy — not a reflexive $9.99:** Pro is a *prosumer research tool*, and its natural price is anchored to research tools (Readwise, Perplexity Pro territory), not to entertainment subscriptions. Working hypothesis to test at the 10k-user stage: **annual-first pricing around $60–80/year** (monthly available higher, ~$8), possibly plus a **supporter tier** (~$20/year: badge + early features, no functional advantage — patronage for people who want Agora to exist). Details are for later; the structural decision now is only *what is free vs. what is Pro*, above.

**Honest sizing:** at 100k MAU, 2–3% Pro conversion × ~$70 ≈ **$150–200k/year**. Meaningful for sustainability; irrelevant for venture scale. Consumer subscriptions are the floor of the stack, not the point of it.

---

## 2. Agora Intelligence — the B2B Hypothesis, Challenged Aggressively

### The customer-by-customer reality check

| Customer | The dream | The reality |
|---|---|---|
| **Investment firms** | "Narrative momentum as alpha" | **Drop it.** They need fast, large-n, backtestable signals. Agora's panel is small, slow, and biased for years; by the time it isn't, the signal is public anyway (it's a social platform). Opportunistic sales maybe; strategy, no. |
| **Media organizations** | "What informed audiences believe and why" | Real but poor: media budgets are collapsing. Better as **marketing partners** (co-published "State of the Debate" reports for reach and credibility) than as anchor customers. |
| **Strategy / consulting firms** | "Societal trend data for decks" | Real, modest: they pay for *credible, novel, citable* data. Low volume, low friction, good logos. A garnish, not a meal. |
| **Think tanks & research orgs** | Narrative tracking, argument evolution on their issues | Real and aligned: they live on exactly Agora's domains (econ, policy, geopolitics). Budgets modest but grant-fundable. Strong early design partners. |
| **Public affairs / corporate comms / advocacy (non-electoral)** | **Message testing: which arguments move skeptical audiences** | **The strongest customer.** They currently pay $30–80k for focus groups and survey-experiment platforms (Swayable-class) to answer precisely the question Agora's persuasion graph answers continuously and behaviorally. Real budgets, recurring need, clear decision impacted (which framing to lead with). Requires the hardest ethics screening (see refusals, §6, and the electoral firewall in DATA_ASSET_STRATEGY §4). |
| **Technology companies (policy/trust teams)** | Tracking AI-regulation discourse arguments | Real niche: rich, and squarely inside Agora's tech/AI wedge coverage. Good second design partner class. |

### What real decisions does the data drive?

The test of any intelligence product: name the decision. Survivors: **(1)** which argument/framing an advocacy or comms team leads with (message strategy); **(2)** which counterargument a policy team must answer first (argument triage); **(3)** which evidence to cite because it demonstrably moves skeptics (evidence selection); **(4)** when a narrative's argument mix is shifting enough to warrant a response (timing). Non-survivors: "what does the public think" (polling does it representatively), "will X happen" (prediction markets do it with skin in the game), "trade on sentiment" (too slow, too small).

### Why pay for Agora instead of the incumbents? — the honest comparison

| Instrument | What it gives | What it structurally cannot give |
|---|---|---|
| Traditional polling | Representative position distributions | Reasons (beyond crude open-ends), argument structure, persuasion causality; slow, expensive per wave |
| Social listening / X data | Volume, sentiment, virality at massive n | **Sides** (no recorded positions), **priors** (who believed what before), **persuasion** (mind-changes are invisible in text), signal (bots, performativity) |
| Reddit analysis | Niche depth, candor | Same structural absences; anonymous, no longitudinal individual positions |
| Google Trends | Attention | Opinion, direction, reasons — attention ≠ position |
| Survey-experiment platforms (Swayable etc.) | Causal message tests on recruited samples | Continuous observation (they're episodic studies), a living argument ecology (their messages are tested in lab isolation, not against live counterarguments), longitudinal drift |

**Agora's unique cell in this table:** *sided positions recorded before exposure + typed cross-camp persuasion + argument competition in the wild + time.* Nobody else has any two of those together. The pitch is not "better polling" — it is **a new instrument class: continuous argument-level measurement with persuasion causality**, sold with its bias openly labeled ("engaged, informed, English-speaking early adopters — a leading-indicator panel, not a representative sample"), the way prediction markets earned credibility despite unrepresentative traders: the *mechanism* produces the signal.

### The strongest differentiated B2B product

**"The Argument Market Share Report"** (working name): for a subscribed topic — e.g., nuclear energy, AI regulation, industrial policy — a continuous dashboard + quarterly deep report showing: the ranked arguments holding share on each side and their share *trend*; which evidence carries them (STRONG EVIDENCE resonance); persuasion elasticity (which arguments generate cross-camp MOVED ME events, from which cohorts ≥ k); emerging arguments accelerating from the fringe; and split trajectories on recurring claims. Aggregate-only, k ≥ 100, refusal-list compliant.

**And the bridge product that monetizes earlier: "Agora Panels."** Commissioned private studies that run Agora's *mechanics* (commit-to-reveal, staircase, debate map, typed persuasion) on recruited, **opt-in, paid** panelists drawn from the user base — in a private instance, never the public feed. This works at 10k users (panels are recruited per study, n=200–500 suffices for message tests), reuses the product wholesale, pays panelists transparently, and keeps the public feed uncontaminated. It is honestly closer to "research SaaS with a superior instrument" than to "data licensing" — which is fine: it converts the methodology into revenue *before* the observational data reaches critical mass, and it builds the client relationships the Report product will later sell into.

### The aggressive challenge, stated without flinching

1. **Scale gate:** persuasion-event density makes the observational product a demo below ~100k engaged users. Anyone pitching Agora Intelligence revenue in year one is selling vapor. (Panels are the exception — by design.)
2. **Coverage gate:** clients care about *their* topic; Agora's public claim catalog follows the news. Mitigation is honest scoping (sell subscriptions on topics Agora demonstrably covers deeply — its four locked domains) and Panels for bespoke questions. **Never** let a client's money influence public claim selection — that is the corruption the refusal list exists to prevent.
3. **The analyst-substitute test:** below scale, a sharp analyst reading X beats Agora dashboards. The product only clears this bar when it shows things text-reading cannot: priors, mind-changes, argument share over time. Do not launch it until it clears the bar on real data.
4. **The trust paradox:** the more valuable the persuasion data becomes, the more the company will be tempted toward clients and use cases that destroy the consumer trust generating the data. The refusal list (§6) and the DATA_ASSET_STRATEGY §4 charter are the pre-commitment device — written now, published early, precisely because future-Agora will be tempted.

**Net verdict on the hypothesis:** *not* founder fantasy as a direction — the instrument is genuinely new — but fantasy in its popular framings (polling replacement, investment alpha) and in any timeline that books B2B revenue before ~100k engaged users. The defensible sequence: methodology revenue first (Panels), observational revenue later (Reports), and only inside the ethics architecture.

---

## 3. Education — Wedge, Stream, or Distraction?

**Verdict: a secondary revenue stream and distribution channel (per D5) — a strong one — but a distraction if touched before the consumer loop retains.**

- **The case for:** critical-thinking and argumentation curricula have real budgets (universities, business schools, IB/AP programs, debating societies). The product maps almost 1:1: a private cohort runs the claim mechanic on assigned claims; students take positions pre-reveal (independent thinking, enforced by the interface — a *pedagogical* feature teachers will instantly value), build arguments, attach sources; the teacher dashboard shows positions before/after, argument quality signals, and source usage — **reasoning made visible**, which is the thing rubrics try and fail to do. Kialo Edu proves classroom appetite for structured-debate tools; Agora's differences (live consumer energy, persuasion mechanics, modern ritual UX) are real.
- **The case against primacy:** institutional sales cycles are slow; the product surface diverges fast (rosters, LMS integration, FERPA/COPPA-class compliance, minors handling); and a company that pivots to edtech before proving consumer retention has quietly become a different, smaller company. Education-cohort data stays out of commercial aggregates *by construction* (DATA_ASSET_STRATEGY §4-5), so it also doesn't feed the moat.
- **Timing and shape:** 2–5 unpaid/discounted pilots at the ~10k-user stage using a minimal "private cohort mode" (reuse everything, build almost nothing); priced self-serve for institutions (~$1–3k/classroom-year hypothesis) only after pilots prove teacher-driven retention. Students who graduate become consumer users — the channel value may exceed the revenue value.

---

## 4. Advertising and Sponsored Content

**Verdict: advertising is off the table — not deferred, refused.** The analysis, briefly, because the founder asked for it critically:

- **Feed ads** require engagement optimization; engagement optimization on an opinion platform selects for outrage; outrage is the failure mode the entire product design exists to avoid. Structural contradiction, not a tuning problem.
- **Sponsored claims** are the single most corrosive possible feature: the product's soul is that claims are *nobody's plant*. One discovered sponsored claim retroactively poisons every claim Agora has ever published ("who paid for this question?"). The same applies to any paid influence on claim *selection, timing, or framing* — including "presented by" sponsorship of the Daily Claim, which buys the sponsor implicit association with the question asked. Refused.
- **Sponsored argument ranking** — paying for position in a debate map — is fatal on contact and needs no further analysis.
- **Sponsored knowledge collections** (a foundation sponsors an evergreen evidence library on, say, energy) is the least-bad variant, and still fails the smell test in V1–V2: the sponsor's selection effect on *which evidence exists in the library* is subtle and unanswerable. Revisit only at maturity, only with a published church-state firewall, only for non-contested educational content — and expect to conclude "no" even then.

**What Agora sells instead of attention: nothing in the feed.** The feed is the trust asset. Every monetization dollar comes from the research layer (Pro), institutions (Education), or aggregate insight (Intelligence) — never from placing a message in front of a user on someone else's behalf.

---

## 5. The Monetization Sequence: 0 → 1M Users

**Governing rule: monetization must be *earned* — each layer unlocks only when the prior layer's health metrics prove the product can afford it. Revenue is a lagging indicator of trust.**

| Stage | Primary objective | Monetization | Product focus | Data maturity | Revenue products |
|---|---|---|---|---|---|
| **0 → 1,000** (founding cohort) | Prove the ritual retains: do wedge users return for the Daily Claim without prompting? (Target signal: ≥30% W4 retention among activated users) | **None. Zero. Nothing.** | Core loop + automated pipeline quality (PRODUCT_STRATEGY §15) | Event schema live and correct (DATA_ASSET_STRATEGY §5); splits and ledgers accumulating; **verify persuasion events occur at all** — MOVED ME per 1k position-views is the earliest leading indicator of the entire intelligence hypothesis | — |
| **1,000 → 10,000** | Density and habit in the wedge; organic sharing works (split-card K-factor measurable) | None. (Optional: supporter tier *if* the community asks — patronage, no functional gates) | Retention mechanics, share-out loop, argument quality | First longitudinal claim histories; argument market-share curves exist on ~50+ claims; persuasion-density baseline established | — |
| **10,000 → 100,000** | Repeatable acquisition (SEO claim pages compounding, share cards, wedge #2 opens); prove heavy-user segment exists | **First revenue, small and clean:** Agora Pro launch; 2–5 education pilots; 1–2 **Agora Panels** design-partner studies (discounted, ethics charter published *first*) | Pro research layer; private cohort mode (minimal); publish free "State of the Debate" reports as credibility marketing | 12+ months longitudinal on recurring claims; evidence-resonance signals meaningful; cohort attributes (optional, coarse, self-declared) introduced with k ≥ 100 architecture live | Pro subscriptions · education pilots · Panels pilots |
| **100,000 → 1M** | Own the category ("where you go on record"); international English density across time zones | **The stack in full:** Pro scaled; education self-serve; **Agora Intelligence v1** — topic-subscription Argument Market Share Reports + dashboard for think tanks, public affairs (screened), tech policy teams | Intelligence delivery surface (aggregate-only by construction); moderation/trust scaling | Persuasion graph statistically useful per topic-cohort; narrative-emergence detection beats the analyst-substitute test on backdata — *the launch gate for Intelligence v1* | Pro · Education · Panels · Intelligence subscriptions · (optional) example-library API |
| **1M+** | The instrument of record for informed discourse | Intelligence becomes the primary revenue line; consumer core still free, still ad-free | Deepen both layers; external ethics review standing | The unbackfillable decade begins to pay | Full stack |

**What is deliberately absent:** any revenue before 10k users. The cost of premature monetization is not the trivial forgone revenue — it is signaling to the founding cohort that they are inventory. The founding cohort is the only irreplaceable asset in the whole plan.

---

## 6. Monetization Models Agora Explicitly Refuses

Published as a public charter (with DATA_ASSET_STRATEGY §4), because a refusal list only builds trust if it is a commitment, not a memo:

1. Selling, licensing, or exposing **individual-level** data — any form, any buyer, any price.
2. **Political campaign / electoral clients** for any data or research product (screen: would the engagement constitute reportable political spending anywhere?).
3. **Individual persuasion-targeting** products ("who is persuadable, and with what") — the cohort-aggregate line (k ≥ 100) is absolute.
4. **Sponsored claims**, sponsored framings, paid influence on claim selection or timing — including ritual sponsorship ("Daily Claim presented by…").
5. **Paid placement in debate maps** or any pay-for-ranking.
6. **Engagement-optimized advertising** in the feed.
7. **Ad-targeting data exports and data-broker relationships.**
8. **Selling user attention to third parties** in notification or feed surfaces.
9. **Dark-pattern conversion** (paywalling previously free core loops, bait-and-switch on the free tier).
10. **Education-cohort data in commercial aggregates** — institutional/minor data is quarantined by construction.

---

## FINAL OUTPUT (A–L)

**A. Agora's strongest potential economic asset.** The argument-and-persuasion graph over time: sided arguments with ranked share on every claim, annotated with typed cross-camp persuasion events (MOVED ME with recorded priors), accumulating longitudinally on a bias-transparent panel. Structurally unique — no other instrument records positions *before* exposure and mind-changes *after* — and unbackfillable by any competitor at any price. (Runner-up, and earliest to arrive: the compounding claim-page + sourced example library as a content/SEO asset.)

**B. Recommended primary long-term business model.** Agora Intelligence: aggregate, privacy-preserving, k-anonymous argument-level insight — topic-subscription "Argument Market Share" reports and dashboards for think tanks, non-electoral public affairs, and tech-policy teams — bridged earlier by Agora Panels (commissioned private studies using Agora's mechanics on opt-in paid panelists). Gated: launches only past ~100k engaged users, 12+ months of longitudinal data, and only inside the published ethics charter.

**C. Recommended secondary business model.** Education (per D5): private classroom cohorts with teacher dashboards that make reasoning visible — piloted at the 10k stage, priced self-serve later — plus Agora Pro as the consumer sustainability layer (research tools for heavy users, ~$60–80/year, annual-first).

**D. What must remain free.** Everything that is supply, reward, or acquisition: positions and reveals, full ledgers, all reading (debate maps, claim pages, sources), writing and co-signing arguments, all endorsements including MOVED ME, in-composition example suggestions, share cards, the Daily Claim. Permanently, and stated publicly.

**E. What Agora should eventually charge for.** Consumers: the research desk (deep search, cross-claim example discovery, personal analytics, collections, comparison/export). Institutions: private education cohorts and dashboards. Organizations: Panels studies, then aggregate Intelligence subscriptions; possibly an example-library API. Nothing in the feed, ever.

**F. The strongest B2B use case.** Message and argument testing for non-electoral advocacy, corporate public affairs, and policy teams: *which arguments actually move skeptical audiences, which evidence carries them, and which counterarguments must be answered first* — delivered continuously (Reports) or on commission (Panels).

**G. Why Agora beats polling and social listening for that use case.** Polling captures representative positions but no reasons and no causality; social listening captures text volume but has no sides, no priors, and cannot see a mind change. Agora is the only instrument where positions are recorded *before* exposure to arguments and persuasion is a typed, timestamped event with known priors — continuous causal measurement of argument effectiveness in a live ecology, versus polling's episodic snapshots and listening's structureless noise. Its panel bias is real and is sold openly as what it is: a leading-indicator panel of engaged, informed discourse — signal from mechanism, as prediction markets taught the market to accept.

**H. The monetization sequence.** 0→1k: nothing — prove the ritual retains; verify persuasion events occur. 1k→10k: nothing — density, habit, share loop (supporter tier only if the community asks). 10k→100k: first clean revenue — Agora Pro, 2–5 education pilots, 1–2 discounted Panels design-partner studies, ethics charter published first. 100k→1M: the full stack — Pro scaled, education self-serve, Agora Intelligence v1 launched only after it beats the analyst-substitute test on backdata. 1M+: Intelligence becomes primary; consumer core stays free and ad-free forever.

**I. V1 data foundations (must exist from day one).** The append-only event log and graph edges of DATA_ASSET_STRATEGY §5: `position_created` (with the pre-reveal flag), `position_changed` (immutable history, attributed triggers), `argument_created/cosigned`, typed `endorsement_given` (with endorser's stance at time), materialized `persuasion_event`, `example_attached` with mandatory source edges, aggregate-first `source_opened`/`argument_viewed` (90-day individual retention), `claim_published` with pipeline lineage, daily `split_snapshot`, consent versioning and deletion tombstones, and quarantine tagging for education cohorts. Plus the identity-layer isolation (pseudonym ↔ email/IP never joined to opinion data).

**J. Monetization models Agora explicitly refuses.** Individual-level data sales in any form; political-campaign/electoral clients; individual persuasion-targeting; sponsored claims or any paid influence on claim selection, framing, or timing (including Daily Claim sponsorship); paid debate-map placement; engagement-optimized feed advertising; ad-targeting exports and data brokers; selling notification/feed attention; paywalling previously free core loops; education-cohort data in commercial aggregates.

**K. The biggest ethical and regulatory risk.** That Agora's crown-jewel dataset is, uncharitably described, *a database of what changes people's minds about political and economic questions* — special-category opinion data under GDPR Article 9, one careless sales deck away from a "Cambridge Analytica for arguments" headline. The defense must be architectural, not aspirational: aggregate-only pipelines with k ≥ 100 built so the dangerous product *cannot* be assembled, identity-layer isolation, immutable refusal charter published before the first commercial dollar, no electoral clients ever, and external ethics review before Intelligence v1 ships.

**L. Verdict: can Agora realistically become a venture-scale company?** **Yes, but only along one narrow path, and the honest probability is low — the option is cheap, which is why it's still worth structuring for.** Venture scale requires the Intelligence layer, which requires ~100k+ retained users and years of longitudinal data, which requires the consumer product to beat the discourse-platform graveyard's base rate — the compounded odds are the real risk disclosure. Conditions under which it works: (1) the wedge cohort retains on the ritual (measurable by 1k users — this is the cheap kill-test); (2) persuasion events occur at usable density (measurable by 10k); (3) the V1 schema preserves the graph so no history is lost (costs ~nothing, decided now); (4) trust is never spent — no ads, no sponsored claims, charter published early; (5) the founder accepts that meaningful revenue is a year-3+ event and funds accordingly. If conditions 1–2 fail, the honest fallback is a good small business — Pro + Education at perhaps $1–5M ARR potential — or a shutdown with a valuable example library. That asymmetry (cheap option on a unique asset, real fallbacks, early kill-tests) is what makes proceeding rational despite the odds.

---

**STOP. No PRD, no code, no implementation of any monetization. The next artifact, upon founder approval, is the PRD — with monetization absent from V1 scope except for the data foundations in DATA_ASSET_STRATEGY §5.**
