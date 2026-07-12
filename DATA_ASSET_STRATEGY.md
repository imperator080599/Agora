# DATA_ASSET_STRATEGY.md

**Project:** Agora
**Date:** 2026-07-12
**Companion documents:** PRODUCT_STRATEGY.md (v2, locked founder decisions D1–D7) · MONETIZATION_STRATEGY.md
**Status:** Pre-PRD analysis. No monetization implemented. No code.

**Purpose:** determine what Agora's defensible economic asset actually is, whether a data moat is realistic or founder fantasy, which ethical lines must be constitutional, and which data foundations must exist from V1 even though monetization does not.

---

## 1. The Core Hypothesis, Stated and Stress-Tested

**Hypothesis:** the consumer social product is the network and data acquisition layer for a broader *opinion intelligence platform*, built on the graph:

```
USER → POSITION → CLAIM → ARGUMENT → EXAMPLE → SOURCE
                    ↕
        POSITION CHANGE → PERSUASION EVENT → TIME
```

...allowing Agora to answer not just "what do people think?" but "why, what's moving, and what changes minds?"

### The honest verdict up front

**The hypothesis is one-third real, one-third premature, one-third fantasy — and the fantasy third is the part most likely to seduce a founder.**

- **Real:** the *persuasion layer* and the *reasons layer* are genuinely unique data. No existing instrument — polling, social listening, platform firehoses — captures "person with recorded prior position P was moved by argument A at time T." That is a structurally new measurement, made possible only by Agora's commit-to-reveal + ledger mechanics. If Agora reaches scale, this data exists nowhere else on earth.
- **Premature:** every intelligence use case depends on volumes Agora will not have for years. Persuasion events are rare (realistically well under 1% of position-views). Narrative detection needs enough claims, users, and months of history to beat "a smart analyst reading X for an afternoon." The data asset is a **call option that only vests if the consumer product succeeds** — its expected value must be discounted by the consumer product's own survival probability, which PRODUCT_STRATEGY.md §18 honestly places against a brutal base rate.
- **Fantasy:** the versions of the pitch where Agora replaces polling ("what do people think") or feeds investment alpha. Agora's panel is self-selected, pseudonymous, anglophone, intellectually skewed, and small. Pollsters sell **representativeness**; Agora structurally cannot, ever. Selling Agora data as "public opinion" would be methodologically indefensible and reputationally fatal when called out. And investment firms need signals that are fast, large-n, and backtestable — Agora's panel will be none of those for years, if ever. **These two customer stories should be dropped from the narrative now.**

The correct framing of the asset — the one that survives scrutiny — is narrower and stronger: **Agora measures the *argument layer* of discourse among an engaged, informed, identifiable-bias panel — including, uniquely, what actually moves people.** That is not "what does the public think." It is "which arguments hold share on each side, which evidence carries them, how that is shifting, and what persuades the other camp" — a *leading indicator of informed discourse*, analogous to how prediction markets are taken seriously despite wildly unrepresentative trader populations, because their mechanism (skin in the game) produces signal. Agora's mechanism (positions on record before reading; typed cross-camp persuasion) is a similar signal-producing device.

---

## 2. Mapping the Economic Asset

Assessment of each candidate asset. Scales: Low / Medium / High.

| Asset | Uniqueness | Defensibility | Compounding | Replication difficulty | Min. scale to matter | Commercial value |
|---|---|---|---|---|---|---|
| **Social graph** (who follows whom) | Low | Low | Low | Low | — | **Near zero.** Deliberately de-emphasized in the product (topic-follows before people-follows). Agora will never win a social-graph fight and should not pretend this is an asset. |
| **Opinion graph** (user → timestamped position → claim) | High | Medium | High (every day adds rows no one can backfill) | Medium (mechanics are copyable; the *history* is not) | ~10k engaged users for interesting aggregates | Medium — bounded by panel bias; valuable as trend/leading-indicator data, worthless as representative polling |
| **Argument graph** (claim → sided arguments → co-signs → counters → ranking over time) | High | Medium-High | High (claim pages appreciate; argument "market share" per side is longitudinal) | Medium-High (needs the audience, not just the schema) | ~10k–50k users | Medium-High — this is the "why" layer nobody else structures |
| **Example & evidence database** (argument → example → source, + STRONG EVIDENCE signals) | Medium | Medium | High | **Low-Medium for the corpus** (an LLM pipeline can rebuild a similar library) — **High for the usage signals** (which evidence actually persuades — that requires the network) | Corpus: none (editorial builds it). Signals: ~50k users | Medium — independently monetizable (API, education) but the corpus alone is not a moat in the LLM era; the *resonance data* on it is |
| **Persuasion graph** (argument → MOVED ME / position-change events, with recorded priors) | **Very High — structurally unique** | **High** (requires cloning the entire mechanic AND the audience AND the history) | High | Very High | **High — the binding constraint.** Persuasion events are rare; statistically useful densities per claim/cohort need ~100k+ engaged users | **Highest per-row value of any asset** — for message-testing, advocacy, comms research. Also the most ethically radioactive (see §4) |
| **Longitudinal position data** (splits and individual trajectories over months/years) | High | High (time cannot be bought) | **Automatic** — the only asset that compounds with zero additional effort | High (unbackfillable) | 12+ months of history at 50k+ users | Medium-High — trend lines on recurring claims are the backbone of any intelligence product |
| **Narrative evolution data** (which claims emerge, which arguments accelerate) | Medium | Medium | Medium | Medium (X/Reddit have 1000x the volume; Agora's edge is structure, not coverage) | 100k+ users for detection to beat an analyst reading X | Medium — differentiated only when fused with the argument/persuasion layers |

### The moat verdict

**A data moat is realistic, but it is narrower, slower, and more conditional than the hypothesis assumes:**

1. **The moat is the persuasion + argument + longitudinal stack, not any single graph.** Each layer alone is copyable or biased; the combination — *sided arguments, ranked over time, annotated with measured cross-camp persuasion, on a panel whose priors are known* — is the thing no competitor can reconstruct without rebuilding Agora and replaying years.
2. **Time is the moat's material.** Every asset that scores High on defensibility scores there because of unbackfillable history. Corollary: **the schema must be right from day one** (§5) — data not captured in year one is destroyed option value, and this is the single strongest reason this document exists before the PRD.
3. **The earliest-arriving moat is the least glamorous:** claim pages + the example library as compounding SEO/content assets (valuable at n=0, per PRODUCT_STRATEGY §14). The glamorous moat (persuasion graph) arrives last and only at consumer scale.
4. **The moat has a ceiling:** panel bias. Agora's data can become the world's best instrument on *informed English-speaking discourse* — a real and sellable thing — but it can never honestly become "public opinion." Any strategy, deck, or sales pitch that forgets this should be treated as a red flag by the founder.

---

## 3. Sensitivity of the Asset — What Kind of Data This Actually Is

Before ethics rules, name the thing plainly: **Agora's core dataset is a longitudinal record of individuals' political, economic, and social opinions, linked to the precise stimuli that changed them.** In GDPR terms, positions on policy/geopolitical claims are special-category-adjacent data (political opinions, philosophical beliefs — Article 9 territory), and the persuasion graph is, described uncharitably, *a database of what manipulates whom*. The uncharitable description is the one journalists and regulators will use on Agora's worst day. The business must be designed so that on that day, every answer is already public and already good.

---

## 4. Data Ethics and Privacy — Constitutional Principles (V1)

These are product constitution, embedded from day one, published to users — not a policy PDF written at B2B launch.

### The non-negotiables

1. **No individual-level data is ever sold, licensed, exported, or exposed commercially. Ever.** All commercial data products are aggregate-only.
2. **Minimum cohort thresholds:** no aggregate cell is ever computed or delivered below k users (working value: **k ≥ 100**, with suppression of complementary cells that would allow subtraction attacks). Cohort intersections that shrink below k return nothing.
3. **Pseudonymity is load-bearing (D3):** the pseudonym↔account-identity mapping (email, auth, device, IP) is architecturally isolated from the opinion/argument data and is never joined into any analytical or commercial dataset.
4. **No sensitive inference:** Agora never infers ethnicity, religion, health, sexuality, or psychological traits from position patterns — not for product features, not for cohorts, not for anyone. Cohort attributes, if ever used (B2B cohort comparison), are **optional, coarse, self-declared** (e.g., region, professional field), collected with explicit "used only in aggregates of 100+" framing.
5. **No individual targeting products.** Agora never answers "which users believe X" or "who is persuadable on Y" — for any customer, at any price. It answers "what share of [cohort ≥ k] shifted, and which arguments moved them."
6. **No political campaign or electoral clients** for data products (consistent with D4). No exceptions for "issue advocacy" that is electoral campaigning in a trench coat — the screen is: would this engagement be reportable political spending in a major jurisdiction?
7. **No ad-targeting exports, no data brokers, no enrichment joins** with third-party datasets about individuals.
8. **Users are told, in product language, that aggregated insights are produced** — and the refusal list above is published as a public charter. Trust is the asset; the charter is its title deed.

### Data that must NEVER be commercially exposed

- Individual ledgers in bulk (public on-platform display ≠ machine-readable export for profiling; the product should rate-limit and legally prohibit scraping-for-profiling in ToS).
- Individual position-change histories and persuasion susceptibility ("this pseudonym changes their mind when shown economic-cost arguments" is the single most dangerous row Agora could ever produce — it must never exist as a queryable individual record, only as cohort aggregates).
- Reading behavior at individual level (what a user viewed, how long, what they almost wrote).
- Drafts, abandoned arguments, unpublished positions.
- Identity-layer data (email, IP, device) — never in any analytical store at all.

### Regulatory and trust risk analysis

- **GDPR Article 9 (and UK/analogous regimes):** political opinions are special-category data. The "manifestly made public by the data subject" exemption plausibly covers published positions, but commercial *processing/profiling* of them is exactly where regulators focus. Mitigations from V1: explicit consent language for aggregate insight production, data minimization, deletion rights honored through the event architecture (§5 — tombstones that propagate; aggregates ≥ k unaffected), EU data-handling posture decided before EU launch (not a stack choice, a jurisdictional one).
- **The Cambridge Analytica shadow is the defining trust risk.** An "opinion intelligence company" pitch is one careless sales deck away from being framed as a manipulation vendor. Structural defenses: the public charter, aggregate-only architecture (make the bad product *impossible to build*, not just forbidden), no electoral clients, and — recommended — an external ethics review before the first commercial data product ships.
- **Minors:** 16+ at launch. Opinion data from minors is a risk with no commercial upside; education deployments (separate product surface) handle minors under institutional consent, and education-cohort data **never** enters commercial aggregates.
- **The subpoena/authoritarian risk:** a timestamped opinion ledger is discoverable and, in some jurisdictions, dangerous to users. Consequences: pseudonymity by default is a *safety* feature, not just a comfort feature; data minimization on the identity layer; a published transparency-report practice; and jurisdictional caution before actively expanding into markets where opinion records endanger users.

---

## 5. V1 Data Foundations — What Must Exist From Day One

**Principle:** capture the *product's own* events, completely and with correct relationships — nothing invasive, nothing speculative. Every event below is either (a) required by a live product feature, or (b) the unbackfillable raw material of the §2 assets. Nothing here is tracking for tracking's sake; there is no third-party tracking, no cross-app identity, no location, no contact access, no scroll telemetry.

### The event log (append-only, timestamped, pseudonym-keyed)

**Positions (the heart of the asset):**
- `position_created` — user, claim, stance (agree / disagree / complicated), **pre_reveal: true** (the flag certifying the position was taken before the split was shown — this is what makes Agora data methodologically special; it must be recorded, not assumed), surface (daily claim / feed / onboarding sprint / claim page).
- `position_changed` — prior stance, new stance, and **attributed_trigger** where the user confirms it (argument_id via the MOVED ME flow, or "unprompted"). Position changes are first-class, never overwrites: the ledger and the persuasion graph both die if history is mutable.

**Arguments and adjudication:**
- `argument_created` — claim, side, text, author; `argument_cosigned`; `counter_created` (edge: counters ← argument).
- `endorsement_given` — type (CONVINCING / MOVED ME / STRONG EVIDENCE / NEEDS A SOURCE), giver's stance-at-time-of-endorsement (recorded, because MOVED ME's meaning depends on it).
- `persuasion_event` — **derived but stored as first-class**: argument_id, from_stance → to_stance, ts, derivation (MOVED ME + position_changed linkage). This is the crown-jewel table; deriving it retroactively from loose events is possible but fragile — materialize it from day one.

**Evidence and sources:**
- `example_attached` — argument ← example ← source (the three-link chain is the point; never store an example without its source edge).
- `source_opened` — **aggregate-first**: individual-level rows are short-retention (90 days, for abuse/quality debugging only), then only per-argument/per-example aggregate counts persist. Same policy for `argument_viewed`. (Reading behavior is the invasive edge of this schema; the retention policy is the ethical design, and it should be documented publicly.)

**Claims and pipeline lineage (feeds both product tripwires and future intelligence):**
- `claim_published` — with pipeline version, rubric scores, source cluster, domain, and news-lineage links (which allowlisted articles produced it).
- `claim_flagged` — UNFAIR FRAMING / other, count and cohort of flaggers (k-protected).
- Daily `split_snapshot` per claim — the longitudinal spine; cheap, tiny, priceless in year three.

**Consent and lifecycle (boring, mandatory):**
- Consent/ToS version per user from day one; deletion tombstones that propagate through the event log (erasure compliance designed into the model, not bolted on); education-cohort tagging so institutional data is excluded from commercial aggregates by construction.

### Relationships that must be first-class (the graph schema)

```
USER ──(position, t)──▶ CLAIM ◀──(side)── ARGUMENT ◀──(cosign)── USER
                                             │
                              (evidence)──▶ EXAMPLE ──▶ SOURCE
                                             │
USER ──(position_change, t, trigger)──▶ PERSUASION_EVENT ──▶ ARGUMENT
CLAIM ──(lineage)──▶ NEWS_CLUSTER ──▶ ALLOWLISTED_SOURCES
```

If the PRD preserves these edges and the events above, every §2 asset remains buildable later. If it flattens them (e.g., stores positions as mutable fields, endorsements as untyped likes, examples as pasted text without source edges), the option value of the entire intelligence hypothesis is quietly destroyed in month one — and no amount of later funding can buy the history back.

### Explicitly NOT captured in V1

Location beyond coarse self-declared region · demographics beyond optional self-declared coarse fields · device fingerprinting beyond fraud-prevention basics (kept in the isolated identity layer) · third-party behavioral data · psychometric inference of any kind · individual-level long-retention reading logs.

---

## 6. Summary Judgment

Agora's defensible asset is **not** the social network and **not** "public opinion data." It is the **argument-and-persuasion graph accumulating over time on a bias-transparent panel** — structurally unique, genuinely unbuildable by competitors without replaying years, commercially real for a narrower customer set than the founder fantasy version, gated behind consumer-product success, and ethically radioactive enough that the constraints in §4 must be architecture, not policy. The only decision this analysis forces *today* is §5: get the events, edges, and consent architecture right from day one, at near-zero cost — and defer every monetization decision until the consumer loop has earned the right to make them (see MONETIZATION_STRATEGY.md).
