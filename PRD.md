# PRD.md — Agora V1 Product Requirements

**Working name:** Agora (working name only, per founder decision — final brand TBD in a dedicated naming/trademark phase)
**Version:** 1.1 — amended per ratified founder decisions D15–D20 (see §0); changes marked in §5.3, §9.1, §10.3
**Date:** 2026-07-12
**Status:** Authoritative V1 product specification.
**Inherits from:** PRODUCT_STRATEGY.md (v2) · MONETIZATION_STRATEGY.md · DATA_ASSET_STRATEGY.md. (PRODUCT_DECISIONS.md does not exist; the decision log is §0 of this document and is canonical.)
**Excludes:** visual design (DESIGN.md, later) · technical stack · implementation tasks · any monetization implementation.

Terminology in this document: **MUST** = required for V1 acceptance; **SHOULD** = required unless a documented trade-off is approved; **MAY** = optional.

---

## 0. Decision Log (canonical)

Locked founder decisions D1–D7 (PRODUCT_STRATEGY.md §0) plus the seven launch decisions:

| # | Decision |
|---|---|
| D8 | Human editorial gate accepted at launch: ≤15 min/day approve/reject queue; temporary; categories graduate at >95% sustained approval; degrade by publishing fewer claims, never worse ones. |
| D9 | Founding-cohort acquisition is UNSOLVED and is a major launch dependency. The PRD supports acquisition surfaces (public claim pages, share cards, invite links, SEO) but does not assume distribution. A separate acquisition strategy will be produced. |
| D10 | Active armed conflicts allowed in V1, frequency-capped at ~20% of active claims, with stricter sourcing/framing/adversarial thresholds. Conflict coverage must not become outrage-driven engagement. |
| D11 | Founder is moderation escalation point of last resort at launch; triage must be highly automated; measurable load thresholds MUST trigger part-time moderation support. No silent assumption of unlimited founder capacity. |
| D12 | Launch cadence: 1 flagship Daily Claim + up to 3 supporting claims/day. Quality over volume; the pipeline publishes fewer when thresholds are unmet. |
| D13 | Web-first: app-grade, mobile-first web product. Native apps deferred until the ritual/retention hypothesis validates. Architecture must not make future native apps unnecessarily difficult (product-level implication: all surfaces reachable by stable URL; notification logic channel-agnostic). |
| D14 | "Agora" is a working name only, used internally until the naming phase. |
| D15 | Debate Map side tabs / column headers display NO position-share numbers. The split module is the sole authoritative surface for position distribution; the map represents argument strength and structure, never stance popularity. (Amends §9.1.) |
| D16 | Flagship selection cutoff is **21:00 Europe/Paris** (IANA-anchored, follows DST automatically). Publication remains anchored to the UTC claim-day model. (Amends §5.3.) |
| D17 | Persuasion-attribution eligibility requires that the user actually **opened or expanded** the argument (`argument_viewed` = row expanded or sheet opened). Rendering, scrolling past, or impressions do NOT qualify. (Made explicit in §10.3.) |
| D18 | V1 is light-mode only; dark mode deferred; design tokens must remain dark-ready. |
| D19 | V1 uses open-license typefaces only, per DESIGN.md criteria, until the naming/brand phase. |
| D20 | No production domain is hardcoded anywhere. A configurable canonical public origin (`PUBLIC_APP_URL`) drives canonical URLs, OG URLs, share links, share-card links, sitemaps, notification deep links, email links, and callback URLs; dev/preview environments use separate origins. Technical architecture must not block on the final domain. |

### Contradictions found across strategy documents, and their resolutions (also summarized in Final Output K)

| # | Contradiction | Resolution (canonical) |
|---|---|---|
| C1 | PRODUCT_STRATEGY §9's feed-card sketch shows per-side co-sign counts and participation stats *before* the user takes a position — leaking crowd signal that commit-to-reveal (and the `pre_reveal` guarantee in DATA_ASSET_STRATEGY §5) exists to withhold. | **Pre-position, a claim card shows NO directional social data.** Visible: claim text, context bullets with sources, one teaser argument per side (text only, no counts, no authors' stats), total participation count (directionless). Hidden until commit: split, per-side counts, per-argument counts, movement stats. §6 specifies. |
| C2 | PRODUCT_STRATEGY §11 allows MOVED ME from "users whose logged position was on the other side **or** who shift position after reading" — two different eligibility rules (opposing-camp button vs. recorded shift). | **V1 MOVED ME is generated exclusively by the attribution flow on a recorded position change.** It is never a directly tappable button. Opposing-camp readers who are not moved can give CONVINCING (recorded with their stance; displayed with cross-camp count). This is stricter than the strategy text and prevents farming; flagged for founder awareness in Final Output L. |
| C3 | Pipeline throughput numbers differ: strategy §15 says "5–8 claims/day" (v1 text), "6–10 candidates to the human gate"; D12 says 1+3 published. | Canonical: pipeline delivers **up to 10 candidates/day to the review queue**; scheduler publishes **1 flagship + up to 3 supporting**. Surplus approved claims enter the scheduled backlog (§5). |
| C4 | Strategy feed spec ("3–6 live claims" section) vs. D12 cadence (max 4 new/day). | Claims stay LIVE for multiple days (§5), so the Live section draws on a rolling window. Feed shows up to 6 active claims regardless of daily cadence. |
| C5 | Strategy §8 includes an optional AI "clarity assist" (STEP 3) for argument writers; MONETIZATION/DATA docs emphasize minimal AI surface and anti-homogenization. | **Clarity assist is CUT from V1** (LATER; trigger: observed argument-quality problems). V1 ships composition with duplicate detection and evidence attachment only. Leaner, cheaper, and lower homogenization risk. |
| C6 | Strategy mentions optional "confidence" on positions (event schema "confidence?"). | **No confidence scale in V1.** Three stances only; IT'S COMPLICATED carries the middle. A stance change to/from IT'S COMPLICATED represents weakening/strengthening (feeds §10). |
| C7 | Strategy v1 text used "NUANCE" as the third stance; v2 uses "IT'S COMPLICATED." | Canonical stance labels: **AGREE / DISAGREE / IT'S COMPLICATED.** |

---

## 1. V1 Product Definition

- **V1 objective:** prove that the claim-reaction ritual retains an English-speaking founding cohort — specifically, that commit-to-reveal position-taking is a habit-forming atomic action and that a measurable minority climbs the effort staircase (co-sign → argument → evidence).
- **Target founding user — "the informed lurker":** English-speaking, roughly 20–45, consumes economics/business/tech-AI/geopolitics through X, Hacker News, newsletters, and podcasts; holds real opinions; rarely posts (X feels chaotic and reputationally risky, Reddit anonymous-disposable, LinkedIn careerist). Wants to be counted and to see the strongest case on both sides without reading 400 quote-tweets.
- **Primary job to be done:** *"Take a position on record and see the strongest case on both sides in two minutes."*
- **Acquisition hook (surfaces only, per D9):** a shared or search-found **public claim page** with a blurred split — the claim provokes, the hidden split creates the curiosity gap, one tap delivers the payoff.
- **Activation event (exact):** a user is **ACTIVATED** when, within 24 hours of first visit, they (a) create a pseudonymous account AND (b) record ≥3 positions (`position_created`, any claims). Rationale: 3 recorded positions ≈ completed the onboarding sprint's core and experienced ≥3 reveals; account creation makes the ledger exist.
- **Core loop (V1):** local-morning Daily Claim → read claim + sourced context (split blurred) → tap AGREE / DISAGREE / IT'S COMPLICATED → reveal + ledger entry → (optional) co-sign nearest argument or write one ≤280-char argument → (optional) attach a sourced example → receive co-signs / CONVINCING / MOVED-ME-via-attribution → return on tomorrow's claim, counters, split movement, weekly recap.
- **Retention hypothesis:** a bounded daily ritual (one flagship claim + a small set of live debates) plus personal stakes (your positions are on record; your arguments can be countered; splits move) produces habitual return WITHOUT infinite feeds or engagement ranking.
- **Primary success metric:** **W4 ritual retention** — % of activated users who record ≥1 position during days 22–28 after activation.
- **Supporting metrics:** D1/D7 retention, flagship participation rate, commit-to-reveal completion, co-sign rate, argument creation rate, example attachment rate, persuasion-event density, share-card rate (formulas in §23).
- **Behavioral hypotheses V1 tests:**
  - H1 (reaction): visitors take positions at high rate when the reveal is gated — commit-to-reveal completion ≥60% of position-prompt views.
  - H2 (ritual): the Daily Claim creates habit — W4 ritual retention ≥25% of activated users.
  - H3 (staircase): ≥25% of positions are followed by a co-sign; ≥5% of positions lead to a written argument.
  - H4 (persuasion): recorded, attributed mind-changes occur at ≥3 per 1,000 revealed positions within 30 days.
  - H5 (spread): ≥4% of WAU generate a share card in a given week.
  - H6 (supply): the automated pipeline sustains ≥80% human-approval rate and <2% UNFAIR FRAMING flag rate on published claims.
- **What must be true to deserve further investment:** Kill Test 1 passes (H2 band, §23), H1 and H3 show the staircase is real, and H6 shows supply is sustainable at ≤15 founder-minutes/day. H4 gates the *intelligence option*, not the consumer product.
- **Explicit V1 non-goals:** monetization of any kind (incl. Pro, Panels, education billing); predictive/resolvable claims; user-submitted claims; communities; following people; native apps; non-English UI or claims; real-name identity; DMs; open comment threads; AI writing assistance; engagement-ranked feeds; advertising surfaces; public API; reputation scores/leaderboards.

---

## 2. Information Architecture

**V1 surfaces (9 user-facing + 3 internal).** Removed as unjustified for V1: standalone Debate Map surface (it is the body of the Claim Page); standalone Daily Claim surface (a Claim Page in flagship mode); standalone Example/Evidence browser (examples appear only in composition and on arguments; library browsing is a future Pro feature); user directory/user search.

Conventions: every surface has a stable URL (D13). "Sheet" = an overlay panel on mobile web that is also a routable URL.

### 2.1 Home / Feed (`/`)
- **Purpose:** the bounded daily session; entry to the ritual.
- **Entry:** direct visit (authenticated), post-onboarding, notification taps.
- **Displays:** (1) Daily Claim card (pinned, flagship-styled); (2) "Live debates" — up to 5 supporting/rolling claim cards (§4); (3) "Your debates moved" — up to 3 update rows; (4) "Unfinished" — max 1 nudge row; (5) end-of-feed marker: "You're done for today. Tomorrow's claim arrives at 08:00."
- **Actions:** tap card → Claim Page; position directly on card (position buttons are on the card itself); dismiss nudge.
- **Exits:** Claim Page, Profile/Ledger, Activity, Search, Settings.
- **Empty state:** (new user, no positions) feed shows Daily Claim + supporting claims only, with a one-line explainer under the Daily Claim: "Take a position to see where everyone stands." (No "your debates" sections until they exist — sections render only when non-empty.)
- **Loading:** skeleton cards preserving layout; claim text renders first.
- **Error:** cached last feed with offline banner; retry affordance. If feed assembly fails server-side, show Daily Claim alone (it is cached/CDN-served) + apology row.

### 2.2 Claim Page (`/claim/{slug}`) — the core surface
- **Purpose:** one claim's full experience: context → commit → reveal → debate map. Public and SEO-indexed.
- **Entry:** feed cards, share links, search engines, in-app search, notifications, ledger entries.
- **Displays, pre-position (logged-in or visitor):** domain tag + status (e.g., "Day 2 · closes in 14h" or "Archived · still open"); claim sentence; context brief (2–4 bullets, each with tappable source link); total participation count (directionless, e.g., "1,204 positions"); one teaser argument per side (text only, no counts — C1); position buttons. NO split, NO per-side data.
- **Displays, post-position:** split bar with percentages (or early-state counts, §6.6); the user's stance marker; movement indicator ("moved 6 pts this week"); full Debate Map (§9); the user's staircase prompts (§8); closing recap panel if applicable (§5).
- **Actions:** position (once; changeable per §7); open sources; expand arguments; co-sign; CONVINCING / STRONG EVIDENCE / NEEDS A SOURCE on arguments; write argument; attach example; counter an argument; share (§15); flag claim (UNFAIR FRAMING / report, §17); flag argument.
- **Exits:** back to feed; argument sheet; author profiles; source links (external, new tab).
- **Empty states:** claim with zero user arguments shows seeded curated arguments (always present at publication, §5) + "Be the first to add your own reason."
- **Loading:** claim text + context render first; debate map lazy-loads below the fold.
- **Error:** if split service fails post-commit, position is still recorded and confirmed ("Position recorded — live split unavailable, retry"); never silently drop a position.
- **Withdrawn claim:** page remains at URL with notice (§5.8), no position buttons.

### 2.3 Argument Sheet (`/claim/{slug}/a/{id}`)
- **Purpose:** one argument in focus: full text, evidence, counters, endorsements.
- **Entry:** debate map rows, notifications ("your argument was countered"), attribution flow, share links.
- **Displays:** argument text; side; author pseudonym (or curated-source attribution badge, §8.9); evidence chips (each → Example Sheet); endorsement counts (CONVINCING with cross-camp sub-count; MOVED ME count; STRONG EVIDENCE); NEEDS A SOURCE state; counters (list, each a full argument row); "co-signed by N".
- **Actions:** co-sign; endorse (CONVINCING / STRONG EVIDENCE / NEEDS A SOURCE); write counter; share argument card; flag.
- **Exits:** claim page; counter's sheet; author profile.
- **Empty/loading/error:** counters section shows "No counters yet — challenge it" (only to users with a recorded position); standard skeleton; on failed endorsement, optimistic UI reverts with toast.

### 2.4 Example / Evidence Sheet (`/example/{id}`)
- **Purpose:** one library entry: what it is, its source, what it's cited on.
- **Displays:** summary (≤50 words); source (publisher, title, date, link — link is mandatory, §11); verification state (VERIFIED / USER-SUBMITTED / DISPUTED); "cited in N arguments" list.
- **Actions:** open source; dispute source (§11.7); attach to my draft argument (when reached from composer).
- **Error/empty:** a library entry can never exist without a source edge (hard invariant); if source URL is dead, entry shows "source link unavailable — archived copy" state and enters the corrections workflow.

### 2.5 Profile / Position Ledger (`/u/{pseudonym}`)
- **Purpose:** the public record: who this pseudonym is intellectually. Own-profile = ledger management.
- **Entry:** argument authorship links, co-sign lists, own nav.
- **Displays (§12 specifies):** pseudonym + join month; position count, arguments count, MOVED ME received (the one headline stat); chronological ledger of position entries; mind-change entries as first-class rows.
- **Actions (own profile):** open claim; retract position (§7.6); share ledger card (LATER — see §15); settings shortcut.
- **Empty state (new user):** "No positions on record yet" + today's Daily Claim card inline.
- **Privacy:** public by default (the product IS the public record); no follower counts, no follow button in V1.

### 2.6 Search (`/search`)
- **Purpose:** find a claim. V1 search is claims-only (§13).
- **Displays:** query field; domain filter chips; results as claim cards (with pre/post-position rendering per user state).
- **Empty:** "No claims found — Agora publishes 4 claims a day across Economics, Business, Tech & AI, Geopolitics."

### 2.7 Activity (`/activity`)
- **Purpose:** in-app notification center (the web-first fallback for users without push).
- **Displays:** reverse-chron notification rows (§14 types), read/unread.
- **Actions:** tap-through to target surface; mark all read.

### 2.8 Settings (`/settings`)
- Account (email/credential, pseudonym — pseudonym changes limited to 1 per 90 days to keep the ledger identity stable); Notifications (per-type toggles + channels, §14); Privacy & Data (export my data, delete account, consent history); About/Charter (the public refusal charter, DATA_ASSET_STRATEGY §4).

### 2.9 Auth (`/join`, `/login`)
- Signup: email (magic link) or OAuth (choice left to engineering; PRD requirement: **minimum PII = one contact credential; no real-name field; no phone requirement**), pseudonym choice (uniqueness enforced, profanity/impersonation filter), age gate (16+ self-declaration), consent presentation (versioned, §19). Login: credential re-entry. Session persistence expected (a daily-ritual product cannot demand frequent logins).

### 2.10 INTERNAL — Editorial Review Queue (§16.6)
### 2.11 INTERNAL — Moderation Queue (§17)
### 2.12 INTERNAL — Admin Console (§20)

---

## 3. Onboarding and First-Time User Experience

**Principle:** value before registration; registration exactly when the user has something worth saving (a position they want on record).

### 3.1 Entry paths

| Path | Experience |
|---|---|
| **Shared split card / SEO / public claim link** | Lands on the Claim Page, pre-position state (C1: no directional data). Full context readable, sources tappable. Position buttons active for visitors: tapping one triggers **visitor reveal** — the split is shown immediately (payoff first), with the banner: "This is where 1,204 people on record stand. Your position isn't counted yet — claim it with a pseudonym." Visitor positions are held client-side only, are NEVER counted in the split (anti-manipulation: only on-record positions count), and convert on signup to a `position_created` with **`pre_reveal=false`** (they saw the split first — the flag must record the truth; DATA_ASSET_STRATEGY §5). After signup: continue to sprint-lite (2 more claims) → feed. |
| **Direct visit (`/`, logged out)** | Minimal landing: today's Daily Claim rendered as a full-bleed claim card (pre-position state) + one line of product framing ("Take a position. See where the world stands. Build your record.") + "How it works" link. Tapping a position → same visitor-reveal + signup flow as above. No marketing site bloat in V1. |
| **Search engine → claim page** | Identical to shared-link path. Claim pages MUST render complete pre-position content server-side for indexing (§15.5). |
| **Invitation link** | Same as shared-link path + invite attribution recorded (`invite_accepted`, inviter pseudonym shown once: "Invited by @x"). No rewards in V1 (D9: mechanics without pretending incentives are designed). |

### 3.2 First 10 minutes, interaction by interaction (direct-visit path; other paths join at step 4)

1. **0:00** Landing = today's Daily Claim, blurred-split card. User reads claim + 3 context bullets (each source-linked).
2. **0:45** User taps a position (e.g., DISAGREE).
3. **0:46** Visitor reveal: split animates in ("34% agree · 51% disagree · 15% it's complicated"), with the "not counted yet" banner and CTA: **"Put it on record."**
4. **1:15** Signup sheet: pseudonym field (with 3 generated suggestions), credential, 16+ checkbox, one-paragraph consent summary + link (§19). No topic quiz yet — momentum first.
5. **2:00** Account created. The pending position is recorded (`pre_reveal=false` for this converted one). Confirmation: "On record. This is entry #1 in your ledger."
6. **2:10** **Arena picker:** "Pick your arenas" — Economics / Business / Tech & AI / Geopolitics (select ≥2). One screen, no sub-topics in V1.
7. **2:30** **Position sprint:** 3 rapid claims from chosen arenas (drawn: 1 recent supporting claim + 2 evergreens). Each: claim + context → tap → full reveal (these ARE `pre_reveal=true`) → next. Progress dots (2 of 3). Skipping a claim is allowed ("skip" link, small) — skips don't count toward activation.
8. **5:30** **The mirror:** "Your starting record" — 4 positions vs. the crowd: "You're with the majority on 1 of 4. Your most contrarian call: X (you + 22%)." Single share affordance ("Share your starting map" — generates a ledger-sprint card, §15.3).
9. **6:00** **Depth reveal:** auto-open the claim page (debate map) of the user's most contrarian position: "See the strongest case against you." Top 3 arguments per side visible.
10. **7:00** **First staircase prompt** on that claim: "Which of these is closest to your reason?" → top-3 same-side arguments + "none of these." One tap co-signs (confirmation: "You've backed this argument — you'll be notified if it's countered").
11. **8:00** If "none of these": composer opens — "Your reason, one sentence" (280-char counter visible). On submit, duplicate check (§8.6) then example suggestions (§11.2): "Evidence that might support this — attach or skip." 
12. **9:00** **Notification permission moment** (not earlier): "Tomorrow's claim at 08:00 — want it delivered?" → browser push opt-in; on decline, fallback line: "We'll keep it in your feed. You can enable email digests in Settings."
13. **9:30** Land on Home feed, fully formed: Daily Claim (done, shows split), remaining live claims, "done for today" marker visible below — teaching the bounded-session norm on day one.

**Activation** (per §1) will typically complete at step 7. Instrumented funnel: land → first tap → visitor reveal → signup → sprint complete → co-sign/argument → push opt-in.

---

## 4. Feed Specification

**No black-box personalization in V1.** The feed is deterministic, explainable, and identical for users with identical states. The only personal inputs: chosen arenas, own positions/interactions, local timezone.

### 4.1 Sections and allocation (top to bottom)
1. **DAILY CLAIM** — exactly 1: the flagship whose UTC claim-day window (§5.5) includes now. States on card: not-positioned (pre-position render) / positioned (mini split + "see the debate") / Day-2 ("closes in 6h — recap tonight").
2. **LIVE DEBATES** — up to 5 cards: all supporting claims currently LIVE (up to 3/day × 3-day LIVE window = rolling pool of ≤9; §4.2 ranks, top 5 shown) . Cards the user has already positioned render in compact form (mini-split + activity line) and sort below un-positioned ones.
3. **YOUR DEBATES MOVED** — up to 3 rows, only for claims where the user holds a position, event types in priority order: (a) your argument/co-signed argument was countered; (b) split moved ≥8 points since your position; (c) new #1 argument on the opposing side. Each row: claim title + one-line event description + timestamp.
4. **THE EVERGREEN** — 1 card, appears only on days an evergreen is scheduled (≥1/week, occupying one of the 3 supporting slots — C4-consistent).
5. **UNFINISHED** — max 1 row: oldest claim ≤7 days where user positioned but neither co-signed nor argued: "You took a side on X — the {your side} column is short on reasons." Dismissible; a dismissed nudge for a claim never returns.
6. **END MARKER** — "You're done for today." + next-claim time. Nothing loads below. No infinite scroll (REMOVE, confirmed).

### 4.2 Ranking (plain-English pseudocode)

```
for each LIVE supporting claim c visible to user u:
  score(c) =
      3 × arena_match(c, u)            # 1 if c.domain in u.arenas else 0
    + 2 × freshness(c)                 # 1.0 day-0, 0.6 day-1, 0.3 day-2
    + 2 × movement(c)                  # normalized |split delta| last 24h, capped
    + 1 × argument_velocity(c)         # normalized new arguments last 24h, capped
    − 2 × already_positioned(c, u)     # positioned cards demote (they compact)
sort descending; ties by published_at descending; take 5.
```
No engagement-rate terms (views, dwell) anywhere in ranking. "Your debates moved" rows rank by event priority (a > b > c) then recency.

### 4.3 Geography, timezone, freshness
- Claims carry no geo-personalization; the pipeline's global-relevance gate (§16) is the sole geographic control (D2).
- Claim day = UTC (§5.5). The feed assembles against "now"; the Daily Claim push (§14) fires at the user's local 08:00 during the flagship window.
- Feed recomputes on each visit; no pagination.

### 4.4 Fallback when insufficient claims exist
If LIVE supporting claims < 3 (pipeline degraded per D8/D12): fill Live Debates with, in order: (1) the scheduled-backlog claim promoted early if one exists; (2) **evergreen bank** claims not yet shown to this user (each enters a normal 3-day LIVE window when promoted); (3) recently ARCHIVED claims with high 7-day movement, labeled "Still moving." The feed never shows fewer than 3 items below the flagship for a user with any un-positioned inventory; if the user has positioned literally everything (tiny-cohort case), show the marker early: "You're fully on record. New claims tomorrow."

### 4.5 Feed card contents (exact)
Un-positioned card: domain tag · claim status line ("Day 1") · claim sentence · context-preview (first bullet, tap to expand card in place) · directionless participation count · teaser argument per side (text-only, one line, truncated) · three position buttons. Positioned card (compact): claim sentence · mini split bar with user marker · one activity line ("+214 positions today · top counter has 3 new co-signs") · chevron to claim page. (C1 enforced: no directional numbers on un-positioned cards.)

---

## 5. Claim Model and Lifecycle

### 5.1 Claim object (product-level)
claim id · slug · claim sentence (≤15 words, single proposition) · domain (one of 4) · type (NEWS / EVERGREEN) · sensitivity tier (STANDARD / CONFLICT, §5.9) · context brief (2–4 bullets, each with ≥1 source edge) · lineage (news cluster + allowlist article ids + pipeline version + rubric scores, §16) · seeded arguments (≥2 per side at publication, CURATED type) · state · window timestamps · correction history (versioned).

### 5.2 States
```
CANDIDATE → REVIEW_REQUIRED → APPROVED → SCHEDULED → LIVE → ARCHIVED
                    ↓              (auto-path: CANDIDATE → APPROVED when
                 REJECTED           category has graduated, §16.5 — except
                                    CONFLICT tier, never auto)
LIVE/ARCHIVED → WITHDRAWN (any time, admin action)
```
- **CANDIDATE:** produced by pipeline with full gate outputs attached.
- **REVIEW_REQUIRED:** queued for the founder (all claims at launch; post-graduation, only non-graduated categories + all CONFLICT tier + any gate ESCALATE).
- **APPROVED / REJECTED:** human or auto decision; REJECTED carries a reason code (feeds pipeline learning; §16.6).
- **SCHEDULED:** assigned a publish slot; surplus approvals form the backlog (C3). Backlog news claims expire (auto-REJECT, reason `stale`) after 72h unpublished.
- **LIVE:** flagship window = 48h from 00:00 UTC of claim day ("Day 1"/"Day 2"). Supporting window = 72h from publish. LIVE = eligible for feed §4 promotion.
- **ARCHIVED:** permanent public claim page; **positions, arguments, and endorsements remain open indefinitely** (splits keep moving; SEO pages stay alive); no feed promotion except §4.4 fallback and "your debates moved."
- **WITHDRAWN:** §5.8.

### 5.3 Flagship & supporting selection
From the approved set, the founder marks one claim FLAGSHIP for the next UTC day in the review queue (one tap). If none marked by **21:00 Europe/Paris** (IANA timezone, DST-following — D16), the highest composite rubric score among APPROVED claims auto-selects; unreviewed candidates are never auto-published. Flagship SHOULD be the day's most broadly answerable claim; CONFLICT-tier claims MAY be flagship at founder discretion but never by auto-selection. Supporting slots publish at 00:00, 06:00, 12:00 UTC (spreads freshness across timezones).

### 5.4 Closing recap (flagship only)
At window end (+48h): recap panel generated onto the claim page and pushed per §14: final split · total positions · biggest single-day movement · the argument with most MOVED ME on each side · "the debate continues on the claim page." Recap content is derived from recorded events only (no editorializing).

### 5.5 Claim day & timezones
Claim day = UTC calendar day. Users experience delivery at local 08:00 within the window (§14). All product copy references relative state ("Day 2," "closes in 6h"), never server-local clock times.

### 5.6 Corrections
Trigger: source retraction, factual error in a context bullet, dead link (auto-detected by periodic link checks), or upheld source dispute (§11.7). Behavior: the affected bullet is corrected **in a new version**; the claim page shows a correction banner ("Context updated {date}: bullet 2 corrected — view history"); full version history publicly viewable; positions/arguments are NEVER modified or deleted by corrections. If a correction materially changes the claim's meaning, correction is prohibited — withdrawal is required instead (bright-line rule: the claim sentence itself is immutable after publication).

### 5.7 Source changes
A source link update (e.g., moved URL, added archive link) that does not alter bullet content = minor revision, logged in history without a banner.

### 5.8 Withdrawal
Admin action with mandatory public reason category (unfair framing / factual foundation collapsed / policy violation). Page persists at URL with notice: "This claim was withdrawn on {date}: {reason}. Positions taken remain in participants' ledgers, marked accordingly." Removed from feeds, search, and SEO index (noindex); positions preserved in ledgers with a "claim withdrawn" chip; excluded from all aggregate metrics from withdrawal forward.

### 5.9 CONFLICT sensitivity tier (D10)
Auto-tagged by the pipeline (topic = ongoing armed conflict). Requirements: (a) never auto-published — REVIEW_REQUIRED forever regardless of category graduation; (b) sourcing threshold raised: every context bullet ≥2 independent allowlist sources from geographically diverse origins; (c) framing constraint: claims must be about mechanisms/policies/consequences, never tribal blame or atrocity adjudication (rubric hard-fail otherwise, §16); (d) **frequency cap: CONFLICT-tier claims ≤20% of currently-LIVE claims** — the scheduler MUST defer publication of a CONFLICT claim that would breach the cap; (e) recap and movement pushes for CONFLICT claims use neutral templated language only.

---

## 6. Commit-to-Reveal (load-bearing; exhaustive)

1. **Pre-position visible:** claim sentence; full context brief with sources (reading sources before positioning is allowed and encouraged — informed positions are the point); teaser argument text per side (no counts, no rankings beyond "a leading argument"); total participation count; position buttons. **Pre-position hidden:** split percentages/counts; per-side anything; per-argument counts; movement stats; the full debate map (visible in blurred/skeleton form to signal existence); all endorsement counts.
2. **Position options:** AGREE / DISAGREE / IT'S COMPLICATED (C7). Exactly three; no confidence scale (C6); no abstain button.
3. **Skipping:** always allowed by simply not tapping (navigation away). In sprint context, an explicit small "skip" link. A skip is not an event of record (no position, no reveal).
4. **Reveal behavior (exact):** on tap → position persisted first (`position_created`, `pre_reveal=true` — the flag is set by the fact that this render path never exposed the split; DATA_ASSET_STRATEGY §5 inherited) → split animates in ≤300ms perceptual target → debate map unlocks in place. The reveal MUST be tied to persistence success; on write failure, show retry, never fake the reveal.
5. **Split calculation:** among accounts in good standing (not suspended, not low-trust-quarantined §6.8), take each user's **current** stance on the claim (latest position event) and compute shares of AGREE / DISAGREE / IT'S COMPLICATED. Retracted positions excluded. Visitor taps never counted (§3.1). Displayed as integer percentages + absolute total.
6. **Minimum-sample behavior:** if total on-record positions < 25, show raw counts, no percentages, labeled "Early debate — 11 positions so far." (Percentages at tiny n both mislead and enable manipulation optics.) Threshold constant, product-configurable.
7. **Low-volume claims:** the reveal still always fires (the payoff is guaranteed at any n — even "You're the first on record" is a designed state: "Position #1. The debate starts with you.").
8. **Anti-manipulation:** only authenticated positions count; per-account one current stance per claim; **new-account quarantine** — accounts <72h old or with <3 positions have their positions counted in a shadow tally and included in public splits only after quarantine lapses (retroactively added; prevents brigade-day distortion of small splits); per-IP/device signup velocity limits (identity layer, never joined to opinion data — §19); position-change rate limit (§7.4) prevents split-oscillation attacks; splits on claims with active manipulation investigation can be admin-frozen with a public "under review" chip (§20).
9. **Position changes and history:** changing a stance updates the split (current-stance basis) but NEVER alters historical records: prior `position_created`/`position_changed` events and daily `split_snapshot`s are immutable (§7, §18).

---

## 7. Position System

1. **Creation:** one tap on a claim (§6.4). Properties: claim id, stance, timestamp, `pre_reveal` flag, surface (daily/feed/sprint/claim-page/share-landing).
2. **History — append-only (hard invariant):** every position action appends an event; nothing overwrites. A user's "current stance" is a derived view (latest event).
3. **Change:** from the claim page ("Change your position" affordance in the user's stance marker). Flow: pick new stance → **attribution prompt** (§10.4) → confirm. The change is public mechanics, not shame mechanics: copy is "Update your position," and the resulting ledger entry is framed as a feature (§7.7).
4. **Change limits:** max 1 change per claim per 24h; a return to a previously held stance within 72h voids any persuasion attribution from the intermediate change (flip-flop guard, §10.6) and flags patterns for moderation.
5. **Timestamps & visibility:** every position event is timestamped; the ledger shows dates. Positions are public on the ledger by default (the product premise) — with §7.6 as the escape hatch.
6. **Retraction/deletion:** a user MAY retract a position: removed from public ledger and from split (recount), recorded as a tombstoned event (append-only log retains a redacted marker for integrity; content of the record is purged on account-deletion erasure, §19). Retraction is not a stance and triggers no attribution.
7. **Mind-change representation (user-facing):** a changed position creates a ledger entry rendered as: "**Changed position** on {claim}: {old} → {new} · {date}" plus, when attributed, "Moved by {argument teaser}" linking the argument. The weekly recap (§14) celebrates it ("You updated 1 position this week — that's the point of the place."). No badge-shaming of frequent changers; §7.4 handles abuse.
8. **Pseudonymity:** positions attach to the pseudonym only. No real-name display anywhere. Identity credentials live in the isolated identity layer (§19).

---

## 8. Argument System

1. **Creation:** only by users with a recorded current position on the claim; the argument's side is **derived from the author's stance at creation** (AGREE-stance → supports; DISAGREE-stance → opposes; IT'S-COMPLICATED-stance authors choose which side their argument bears on at composition — an argument must bear on one side (C-resolution: no third argument lane; see §9.2)).
2. **Length limit — assessed and confirmed:** hard cap **280 characters**, single field, no title. Assessment: the cap survives scrutiny for V1 — it keeps the 2-minute debate-map scan possible, equalizes effort, deters essay-dread, and shrinks the boilerplate surface; evidence attachments (§11) carry depth. Risk accepted: some nuance is lost; mitigation is counters + evidence, not longer prose. Revisit trigger (LATER): if ≥20% of NEEDS-A-SOURCE/counters cite "truncated reasoning," pilot an optional 500-char elaboration field.
3. **Relationship to claims:** every argument belongs to exactly one claim and one side. No cross-claim arguments in V1.
4. **Co-signing:** any user with a recorded position on the claim MAY co-sign arguments **on the side matching their current stance** (IT'S-COMPLICATED users may co-sign on either side). Co-sign = "this is (close to) my reason." One user may co-sign up to 3 arguments per claim (a reason-set, not a like-spree). Un-co-sign allowed; both recorded.
5. **The co-sign prompt** (staircase step 1) appears once after each position: top-3 same-side arguments by rank + "none of these → write yours."
6. **Duplicate / near-duplicate handling:** on composer submit, the system checks similarity against same-side arguments. Behavior: (a) high similarity → blocking sheet: "This already exists — co-sign instead?" showing the top match; user may still publish via explicit "Mine is different" (event recorded); (b) moderate similarity → non-blocking suggestion panel of 3 similar arguments; (c) exact-text duplicates are rejected outright. (Mechanism is behavioral spec; the similarity implementation is an engineering choice.)
7. **Counters:** a counter is a full argument (same 280 cap, same rules) attached to a specific argument, authored by users of any stance, and displayed both nested under its target (one level deep — counters cannot be countered in V1; a counter-counter is just another counter on the original, keeping depth = 1) and in its own side's column where applicable.
8. **Ranking:** §9.4.
9. **Curated seed arguments (differences, exact):** type CURATED; author = external attribution ("The Economist, editorial, Jan 2026" + link) rendered with a distinct "Curated" badge and no pseudonym; created only by the pipeline/admin (§16); can receive co-signs and all endorsements (their persuasion data is valid); accrue no user reputation; always initially ranked below any user argument with ≥5 co-signs (curated content cedes primacy to the community — constant configurable); marked `curated=true` in all events.
10. **Edits:** author may edit within 15 minutes of publication OR while the argument has 0 co-signs/endorsements/counters; after that, text is frozen (people co-signed *those words*). Adding/removing evidence attachments remains allowed anytime (improves arguments without changing the signed text); evidence changes are logged on the argument's history.
11. **Deletion:** author may delete their argument; it is tombstoned — removed from debate map and search; existing counters remain, re-parented to a "[argument removed by author]" stub; co-signers notified ("an argument you backed was removed — pick a new reason?"); MOVED ME events already recorded remain in the event log (history is history) but the argument no longer displays.
12. **Anti-boilerplate (honest, no fake AI-detection):** (a) the 280 cap caps the value of pasting; (b) duplicate detection collapses the generic (LLM boilerplate is similar by nature — it lands on "co-sign instead"); (c) rate limits: max 5 arguments/user/day, 2 per claim; (d) new-account limits: no arguments until 3 recorded positions and 24h account age; (e) the reward economy pays for specificity (MOVED ME comes from humans who changed their mind — generic prose rarely earns it); (f) a "looks generated" report reason exists (§17) feeding moderation patterns, with the explicit product stance that detection is unreliable and enforcement targets *behavior* (spam patterns, volume) not *style*.
13. **Moderation surface:** every argument is flaggable (§17).

---

## 9. Debate Map (the body of the Claim Page)

1. **Structure:** two columns on desktop / two toggle-tabs on mobile: **THE CASE FOR** (supports the claim) and **THE CASE AGAINST**. Side tabs and column headers carry NO position-share numbers (D15): the split module is the sole surface for position distribution, and the map must never conflate stance popularity with argument quality. No graph visualization, no tree UI — ranked lists with one nesting level.
2. **Sides & IT'S COMPLICATED:** there is no third column (C-resolution). IT'S-COMPLICATED voters appear in the split; their arguments bear on a chosen side (§8.1). Rationale: a third "nuance" lane fragments reading and creates a dumping ground; nuance expresses as counters and as complicated-stance authorship, which is labeled on the argument row ("argued by someone who says it's complicated").
3. **Row anatomy:** rank number · argument text (full — 280 chars always fits) · author (pseudonym or Curated badge) · evidence chips (0–3, tap → Example Sheet) · signal line ("Backed by 214 · Convincing 89 (31 from the other side) · Moved 12") · counters affordance ("3 counters", collapsed by default, expand in place).
4. **Ranking within a side (conceptual formula — not raw engagement):**
```
rank_score(a) =
    5 × moved_count(a)            # attributed persuasion (the king signal)
  + 2 × convincing_crosscamp(a)   # CONVINCING from opposing-stance users
  + 1 × convincing_samecamp(a)
  + 1 × log(1 + cosigns(a))       # dampened: popularity contributes, capped
  + 1 × strong_evidence(a)
  − 2 × unresolved_needs_source(a)
  + exploration_bonus             # see below
```
   **Exploration slot:** one of the top-5 visible positions per side rotates among arguments <72h old that haven't had ≥100 impressions, so new arguments get discovery without engagement-bait ranking. Curated-cede rule per §8.9.
5. **Two-minute scan (the design contract):** post-reveal, the map initially renders top-3 arguments per side; each row is one glance (≤280 chars + chips); "show more" reveals up to 20 per side (beyond that, "all N arguments" paginated). Reading top-3 × both sides + one expansion ≈ 90–120 seconds. Any design (DESIGN.md) that breaks this budget violates the PRD.
6. **Evidence & endorsement display:** chips and signal line per row (§9.3); tapping "Moved 12" shows an aggregate-only panel ("12 people changed position after this argument — 9 from Disagree, 3 from It's complicated") — never the individuals (privacy: individual mind-changes appear only on the mover's own public ledger by their own act, §12).

---

## 10. Endorsements and Persuasion

### 10.1 V1 signal set (final)
| Signal | Type | Who | Effect |
|---|---|---|---|
| **CO-SIGN** | adoption (not an endorsement) | positioned users, side-matched (§8.4) | "this is my reason"; ranking (dampened); author notification |
| **CONVINCING** | endorsement button | any positioned user, any side; recorded with endorser's current stance | ranking; cross-camp sub-count displayed |
| **STRONG EVIDENCE** | endorsement button | any positioned user; only on arguments with ≥1 evidence chip | ranking; evidence-library resonance signal |
| **NEEDS A SOURCE** | flag-workflow | any positioned user | argument shows "source requested" state; author prompted; cleared by attaching evidence; unresolved after 7 days → ranking penalty (§9.4) |
| **MOVED ME** | **derived — never a button** (C2) | generated only by the attribution flow below | the crown signal; ranking ×5; author's headline stat |
| UNFAIR FRAMING | claim-level flag | any user | pipeline tripwire (§16.7), not an argument signal |
Assessed and excluded from V1: "learned something" (rewards nothing distinct; MOVED-ME-lite noise), "weakened confidence" as a separate signal (represented structurally by a stance change to IT'S COMPLICATED), reposts, likes, downvotes.

### 10.2 Persuasion-event flow (exact)
```
recorded position P1 (t0)
  → user reads debate map (argument_viewed events, 90-day retention)
  → user changes position to P2 (t1)                    [position_changed]
  → ATTRIBUTION PROMPT: "What moved you?"
       options: up to 5 arguments the user viewed since t0,
                from outside their P1 side (opposing side + counters
                to their co-signed arguments), most-recently-viewed first
              + "something else / off-platform"
              + "skip"
  → user selects ONE argument  →  persuasion_event created
       {argument_id, mover(pseudonymized), from_stance, to_stance, t1}
       → argument's MOVED count +1; author notified ("your argument moved
         someone from Disagree to It's complicated")
  → "something else" → position_changed(trigger=unattributed_external)
  → skip → position_changed(trigger=none). No persuasion event. Never re-prompted.
```
### 10.3 Eligibility
Any stance transition among the three stances qualifies (including to/from IT'S COMPLICATED — a weakening/strengthening IS persuasion). The attribution list only offers arguments the user demonstrably **opened or expanded** (D17): eligibility requires an `argument_viewed` record (row expanded or argument sheet opened) between the prior position and the change. Rendering in a list, scrolling past, or receiving an impression does NOT create eligibility. This distinction is preserved in the event and data architecture.
### 10.4 Multiple contributing arguments
V1: exactly one attributed argument per change (radio, not checkboxes). Rationale: keeps the MOVED ME economy scarce and legible, and one primary mover is cognitively honest. Multi-attribution is LATER (trigger: users report attribution feels false; measured "something else" rate >40%).
### 10.5 Skipped attribution
Fully allowed, one-tap, never nagged. A high skip rate is itself a metric (§23) — the persuasion dataset must be volunteered, not extracted.
### 10.6 Abuse prevention
Flip-flop guard (§7.4) voids intermediate attributions; persuasion events from quarantined/new accounts (§6.8) are recorded but excluded from public MOVED counts and ranking until the account exits quarantine; a single account can generate ≤1 persuasion event per claim per 7 days; reciprocal-farming detection (A moves for B's argument, B moves for A's) flags to moderation; MOVED counts on an argument display as aggregate only.
### 10.7 Display
On arguments: "Moved 12" + aggregate breakdown panel (§9.6). On the mover's ledger: their own mind-change entry with attribution (their choice made it public record, §7.7). On the author's profile: total MOVED ME received (headline stat).
### 10.8 Event schema implications
Inherits DATA_ASSET_STRATEGY §5 exactly: `persuasion_event` is materialized first-class at creation time (not derived later); endorsements record the giver's stance-at-time; all events append-only (§18).

---

## 11. Example and Evidence Discovery

1. **Library entry structure:** id · summary (≤50 words, plain factual register) · source edge (publisher, title, date, URL — **mandatory; an entry cannot exist without it**, hard invariant) · verification state (VERIFIED = pipeline-created from allowlist or admin-verified · USER-SUBMITTED = link present, not yet verified · DISPUTED = active dispute, §11.7) · topic tags · "cited in" argument links.
2. **When suggested:** immediately after a user submits argument text (composer step): the system retrieves up to 3 library entries relevant to the argument text + claim topic. Presented as attach/skip cards with the source visible on each. **Retrieval-only, always:** suggestions come exclusively from the library; the model never generates an example from memory (constitutional rule, PRODUCT_STRATEGY §16).
3. **"No reliable example found" (a designed state, not a failure):** when retrieval confidence is low or the library is empty for the topic: "No documented example in the library yet. You can publish without one, search the library, or submit a source." Publishing evidence-free is always allowed (NEEDS A SOURCE pressure is the corrective, not a gate).
4. **Search:** within the composer only (V1): keyword search over library summaries + tags, filtered to relevance; results show source + verification state. (No standalone library-browsing surface in V1 — Pro-tier scope creep guard, MONETIZATION §1.)
5. **User submission:** "Submit a source" = URL field → system fetches title/publisher/date (user corrects if fetch fails) → user writes the ≤50-word summary → entry created as USER-SUBMITTED and attached. USER-SUBMITTED entries from allowlisted domains auto-upgrade to VERIFIED; others queue for admin spot-verification (§20) — attachment is not blocked meanwhile, the state chip is the honesty mechanism.
6. **Relevance:** an example attaches to arguments (up to 3 per argument); the claim relationship is derived through the argument. The same library entry is reusable across arguments/claims ("cited in N arguments" accrues).
7. **Disputes:** "Dispute this source" on the Example Sheet → structured reasons (retracted / misrepresented by summary / unreliable publisher / dead link) → entry enters DISPUTED state (visible chip on every citing argument) → resolution by admin (§20): uphold (entry corrected or removed → §5.6 corrections cascade to affected context bullets if applicable; citing arguments keep NEEDS-A-SOURCE-like pressure) or reject (state restored; frivolous-dispute rate limited per user).
8. **Duplicates:** submission checks URL-level identity (same canonical URL → attach existing entry instead) and near-duplicate summaries (suggest existing entry first).
9. **Corrections:** library entries are versioned like context bullets; summary corrections show "updated" history.

---

## 12. Position Ledger and Profile

1. **Structure:** single public surface (§2.5). Header: pseudonym, join month, three stats — **positions on record · arguments written · people moved** (MOVED ME received). No follower counts, no reputation score in V1 (reputation tiers are LATER).
2. **Ledger body — reverse-chronological entries of three types:** (a) POSITION — claim title + stance chip + date (+ "early split n<25" chip if applicable at time of positioning); (b) MIND CHANGE — old → new stance + date + attributed argument teaser when present (§7.7); (c) ARGUMENT — the argument text + its current signal line, linked.
3. **Per-entry live context:** each POSITION entry shows current split vs. the split at positioning time when the delta ≥5 points: "Community has moved 9 pts toward you since." (**Split-movement vindication** — the V1 substitute for resolution scoring, per D6; computed from `split_snapshot`s.)
4. **What is public vs. private:** public = everything above (the premise of the product). Private (owner-only): retracted positions (removed), the "unfinished" nudge state, notification/consent settings, draft arguments. There is no private-position mode in V1 (a position is on record or it doesn't exist) — the retraction affordance (§7.6) is the user's control. This bright line MUST be stated at signup consent (§19).
5. **Deliberately NOT built (Pro-scope guard):** contrarianism scores, calibration curves, per-topic analytics, export-formatted research views, time-series charts beyond the per-entry delta line. The free ledger's identity value = the record itself + the three header stats + mind-change entries; MONETIZATION §1 reserves the analytics layer.

---

## 13. Search

**Required in V1? Yes, minimally** — claim recall ("that nuclear claim from last week") and share/SEO support justify it; anything more is future-Pro scope (MONETIZATION §1 boundary respected).

- **Searchable:** claims (sentence + context text), across all states except WITHDRAWN/REJECTED. **Not searchable in V1:** arguments, users, sources, library (library search exists only inside the composer, §11.4).
- **Ranking:** text relevance → state boost (LIVE > ARCHIVED) → recency. Filters: domain chips; "claims I've positioned" toggle.
- **Explicit non-goal:** cross-claim research tooling (argument search, evidence search across claims, export) = LATER/Pro.

---

## 14. Notifications and Return Loops

Channels: **web push** (opt-in, §3.2 step 12) · **email** · **in-app Activity** (§2.7, always on). Web-first reality acknowledged: push opt-in will be partial; email is the reliability channel; the product must remain fully usable notification-free (the feed IS the ritual).

| Type | Channel(s) | Trigger | Cap / batching | Priority | User control |
|---|---|---|---|---|---|
| Daily Claim | push (+ optional email) | flagship live, user's local 08:00 (§5.5) | 1/day, exact | P1 | toggle; time adjustable |
| Argument countered | push + activity | counter published on user's argument or co-signed argument | batched: ≤1 push per 4h ("2 new counters") | P1 | toggle |
| Moved someone | push + activity | persuasion_event on user's argument | immediate (rare, high-value) | P1 | toggle |
| Co-signed | activity (+daily email digest line) | co-sign on user's argument | digest only | P3 | toggle |
| Evidence endorsed / source requested | activity | STRONG EVIDENCE or NEEDS A SOURCE on user's argument | digest; NEEDS A SOURCE also 1 push if unresolved 48h | P2 | toggle |
| Split moved | activity (+push only if user argued on the claim) | ≥8-pt split move on a claim user positioned | ≤1/day across all claims (pick largest mover) | P2 | toggle |
| Closing recap | push | flagship user participated in closes | ≤1/day; merged into next Daily Claim push when adjacent ("Yesterday: 61/39. Today: …") | P2 | toggle |
| Weekly recap | email | Sunday local morning | 1/week | P2 | toggle |
| Moderation/account | email + activity | sanctions, dispute outcomes | as needed | P0 | not disableable |

**Global hard cap: ≤3 pushes per user per day** (P0 exempt); excess demotes to Activity. Every type individually toggleable in Settings. No streaks, no "we miss you" re-engagement spam, no notification A/B testing that violates caps. CONFLICT-tier claims use neutral templated notification copy only (D10).

---

## 15. Sharing and Acquisition Surfaces

(Surfaces only; acquisition strategy is separate per D9.)

1. **Claim share (primary): the blurred split card.** Generated image + link for any claim: claim sentence, domain tag, blurred split bar, "Where do you stand?" CTA, working-name wordmark. The split is NEVER revealed on the card (commit-to-reveal survives the embed). Available pre- and post-position (sharer's own stance never shown on the card by default).
2. **Revealed split card — deliberately NOT in V1** (REMOVE for now): revealing the split in public feeds spends the curiosity gap that powers conversion, and sharers' motivation ("everyone's wrong!") is served well enough by the blurred card + their own commentary on X. Revisit LATER with data (trigger: share-conversion rate <1% suggests the blur isn't the constraint).
3. **Argument card:** argument text + claim sentence + "See the counter-case" CTA. Sprint "starting map" card (§3.2 step 8): the user's 4 stance chips vs. majority, no claim-level splits leaked (chips show user side + "with/against the majority" only). Ledger cards beyond that: LATER.
4. **Deep links / logged-out landing:** every card links to the claim page (or argument sheet) in the §3.1 visitor flow. Links carry share-attribution parameters (sharer pseudonym id, surface) recorded on landing (`share_landed`) — attribution only, no rewards (D9).
5. **SEO & Open Graph (conceptual requirements):** claim pages server-rendered with complete pre-position content (claim, context, sources, teaser arguments — never split numbers, which also keeps SERP snippets commit-to-reveal-safe); OG/Twitter meta = blurred split card image + claim sentence; canonical URLs with stable slugs; ARCHIVED pages remain indexed ("evidence for and against X" evergreen queries, PRODUCT_STRATEGY §14); WITHDRAWN pages noindex (§5.8); sitemap by domain/date. Claim pages are the SEO asset — DESIGN.md must keep them fast and content-first.

---

## 16. Automated Editorial Engine — Product Requirements

(Implements PRODUCT_STRATEGY §15 + D8/D10/D12. No technical implementation choices here — inputs, outputs, states, and audit obligations per stage. Every stage persists its full output as claim lineage.)

### 16.1 Stage I/O table

| Stage | Input | Output | Confidence states |
|---|---|---|---|
| SOURCE INGESTION | allowlist registry (~50–100 English sources, 4 domains, each with origin-region metadata) | normalized article stream (id, source, ts, text ref) | n/a; source failures logged |
| EVENT DETECTION | article stream | candidate events (article sets) | n/a |
| EVENT CLUSTERING | candidate events | clusters with ≥N independent sources (N=3 STANDARD, 5 CONFLICT incl. ≥2 distinct origin regions — D10) | PASS / FAIL (drop) |
| RELEVANCE SCORING | clusters | scored clusters: domain fit (D2), debate potential, **global relevance** (D1/D2 anti-regional-drift), sensitivity pre-tag | PASS / FAIL / ESCALATE |
| CLAIM GENERATION | passing clusters + Claim Style Rubric (versioned artifact: ≤15 words, single proposition, sided, mechanism-specific, no loaded epithets, answerable from the brief) | 3–5 claim candidates per cluster, each rubric-scored per criterion | per-criterion PASS/FAIL |
| CLAIM QUALITY EVALUATION | candidates | composite rubric score; hard-fails discarded with reason | PASS / FAIL |
| STEELMAN TEST | surviving candidates | 2 strong sourced arguments PER SIDE, or failure | PASS / FAIL (claim is mush/settled/bait) |
| SOURCE VERIFICATION | candidate + cluster articles | verified source set: every factual assertion entailment-checked against ≥1 allowlist article; numbers ≥2 sources or dropped; links validated | PASS / FAIL / ESCALATE |
| CONTEXT BRIEF GENERATION | verified sources | 2–4 bullets, each with source edge(s), entailment-checked against its sources | PASS / FAIL / ESCALATE |
| ARGUMENT SEEDING | steelman outputs + retrieval over allowlist/academic sources | ≥2 CURATED arguments per side: quote/paraphrase + attribution + link, entailment-checked | PASS / ESCALATE (publishable with 1/side minimum only by human approval) |
| EXAMPLE RETRIEVAL | brief + seeds | library entries created/linked for every cited source (§11.1) | n/a (byproduct) |
| RISK CHECK | full claim package | sensitivity tier assignment (STANDARD/CONFLICT); D4 electoral-partisan block; legal/safety screen; blame-framing screen (CONFLICT hard-fail, §5.9) | PASS / FAIL / ESCALATE |
| PUBLICATION DECISION | gated package | state assignment: REVIEW_REQUIRED (default; always for CONFLICT + non-graduated categories + any ESCALATE) or APPROVED (graduated categories only) | per §16.5 |

### 16.2 Global rules
Any FAIL at any stage → candidate REJECTED with machine reason code. Any ESCALATE → REVIEW_REQUIRED regardless of category graduation. Maximum 10 candidates/day delivered to the queue (C3), ranked by composite score; the pipeline SHOULD overproduce internally and deliver only its best.

### 16.3 Human-review triggers (exhaustive list)
All claims pre-graduation · all CONFLICT tier, permanently · any stage ESCALATE · any candidate whose cluster includes a source added to the allowlist <30 days ago · post-publication tripwire demotions (§16.7).

### 16.4 Auditability & lineage
Every published claim stores: pipeline version, rubric version + scores, all stage outputs, source article ids, steelman outputs, reviewer decision + timestamp (or auto-approval basis). Lineage is admin-visible (§20) and referenced in correction workflows (§5.6). Rubric and pipeline changes are versioned and regression-tested against a golden claim set before deployment (PRODUCT_STRATEGY §15 inherited as a product requirement).

### 16.5 Category graduation (D8)
Categories = domain × type × tier (e.g., "Economics · NEWS · STANDARD"). A category graduates to auto-APPROVED when trailing 200 candidates sustain >95% human approval AND published-claim tripwire rates stay under thresholds (§16.7). Graduation is revoked automatically when any tripwire fires. CONFLICT-tier categories can never graduate (D10).

### 16.6 The Editorial Review Queue (founder surface; conceptual spec, no visual design)
- One list, mobile-usable, ≤10 items/day. Per item: claim sentence · domain/tier chips · composite score · context brief with tappable sources · steelman summary (top argument per side) · risk notes.
- **Decisions: APPROVE · REJECT (mandatory reason code: unfair / dull / duplicate / bad-sourcing / wrong-call other) · FLAG (needs regeneration — sends back with a one-line note; the founder never edits text).**
- Flagship selection: one-tap "make flagship" on any approved item (§5.3).
- Budget instrumentation: the queue records decision timestamps; a weekly ops report (§20) shows founder minutes/day against the 15-minute budget — if trailing-14-day average exceeds 20 min/day, the system MUST surface a cadence-reduction recommendation (drop to 1+2) rather than silently consuming founder time (D11 spirit applied to editorial).

### 16.7 Post-publication tripwires (product-required, feeding §16.5)
UNFAIR FRAMING flag rate >2% of positioned users on any claim → claim auto-queued for review + category strike. Weekly automated quality report: flag rates, split lopsidedness (category repeatedly producing ≥90/10 splits = mush/bait indicator), IT'S-COMPLICATED anomaly, source-diversity and region-balance drift (D2), CONFLICT share vs. 20% cap. Monthly human audit: random 10 published claims re-scored (~1h/month, §20).

### 16.8 Correction workflow
Inbound: link-rot detection, source retractions (monitored), upheld example disputes (§11.7), user reports. Output: §5.6/§5.7 versioned corrections with lineage references. All corrections logged to the audit trail.

---

## 17. Moderation

**Model: automated triage → structured workflows → single human escalation queue (founder at launch, D11).** The structural advantage is inherited: no open comment threads, arguments are capped and typed, counters are arguments — the free-text abuse surface is small by design.

### 17.1 Report categories & routing
| Category | Automated handling | Human escalation when |
|---|---|---|
| Spam / commercial | pattern + rate detection; auto-hide at high confidence with appeal path | appeal filed |
| Harassment / hate (argument text, pseudonyms) | classifier: high-confidence slurs/threats auto-hidden pending review; else queued | all non-auto cases; **24h review SLA** |
| Misinformation / source dispute | routed to the structured NEEDS A SOURCE / source-dispute workflows (§10.1, §11.7) — never a free-form "that's false" report | dispute unresolved by workflow, or ≥3 independent disputes on one entry |
| AI boilerplate ("looks generated") | recorded as signal only; duplicate-detection + rate limits are the real control (§8.12); no auto-action on style | account-level pattern (volume + similarity) trips |
| Coordinated manipulation | velocity anomalies on splits/co-signs, reciprocal-farming detection (§10.6), quarantine rules (§6.8) auto-apply | anomaly confirmed → split freeze decision (§6.8) + sanctions |
| Duplicate arguments | §8.6 composer-time; post-hoc merge is NOT in V1 (co-sign consolidation approximates it) | never |

### 17.2 Sanctions ladder (all admin actions audit-logged, §20)
warn → limit (rate-limits halved; cannot publish arguments 7 days) → suspend (7/30 days; positions frozen, excluded from splits during suspension) → ban (tombstone content per §7.6/§8.11 rules; splits recomputed). Appeals via email; outcomes logged.

### 17.3 Measurable founder-load thresholds (D11 — hard requirement)
Instrumented weekly: escalated items count · founder handling minutes · SLA breaches. **Triggers for part-time moderation support (any one):** trailing-2-week average >15 escalations/week; OR founder moderation time >20 min/day for 14 consecutive days; OR any 24h-SLA breach on harassment twice in one month; OR escalation backlog >10 items older than 48h. The ops report (§20) MUST display these against thresholds every week — the system surfaces the trigger; it never silently absorbs overload.

---

## 18. Data and Event Requirements

Inherits DATA_ASSET_STRATEGY §5 **exactly**; this section is the canonical V1 taxonomy. Global invariants: append-only event log · pseudonym-keyed (identity layer isolated, §19) · consent version stamped on every write session · deletion tombstones propagate · education-quarantine tag reserved in the schema (unused in V1 but present so later cohorts can be excluded by construction) · no third-party trackers, no location, no device fingerprinting outside the isolated identity/anti-abuse layer.

| Event | Trigger | Required properties | Individual-level retention | Sensitivity | Downstream use |
|---|---|---|---|---|---|
| `position_created` | first stance on a claim (§6.4) | user, claim, stance, ts, **pre_reveal**, surface, consent_v | **Permanent** (core asset) | HIGH (opinion data) | ledger, splits, all §2 assets |
| `position_changed` | stance change (§7.3) | prior stance, new stance, ts, trigger (argument_id / external / none) | Permanent | HIGH | ledger, persuasion graph, splits |
| `position_retracted` | §7.6 | claim, ts | Permanent (tombstone) | HIGH | split recompute, erasure integrity |
| `claim_viewed` | claim page/card open | user, claim, ts, surface | 90 days → aggregate counts | MED | funnel metrics, attribution eligibility |
| `split_revealed` | reveal fires (§6.4) | user, claim, ts, sample_size_state (counts/percent) | 90 days → aggregate | MED | H1/H4 denominators |
| `argument_viewed` | argument row expanded / sheet open | user, argument, ts | 90 days → aggregate impressions | MED | attribution list (§10.2), exploration slot |
| `argument_created` | publish (§8) | author, claim, side, text, curated=false, evidence ids, ts | Permanent | HIGH | debate map, ledger |
| `argument_cosigned` / `uncosigned` | §8.4 | user, argument, ts | Permanent | HIGH | ranking, reasons data |
| `endorsement_given` | CONVINCING / STRONG EVIDENCE / NEEDS A SOURCE | user, argument, type, **giver_stance_at_time**, ts | Permanent | HIGH | ranking, cross-camp display |
| `persuasion_event` | attribution completes (§10.2) | argument, from_stance, to_stance, ts, quarantine_flag | **Permanent, materialized first-class** | **HIGHEST** | crown-jewel asset; MOVED counts |
| `example_viewed` | example sheet open | user, example, ts | 90 days → aggregate | LOW | evidence resonance |
| `example_attached` | §11 | argument, example, source edge id, ts | Permanent | MED | evidence graph |
| `source_opened` | outbound source click | user, source, context (claim/argument), ts | 90 days → aggregate | MED | sourcing-value metrics, STRONG EVIDENCE integrity |
| `claim_published` | §5 state → LIVE | claim, lineage bundle ref (§16.4), tier, type, ts | Permanent | LOW | quality tripwires, corrections, intelligence lineage |
| `claim_flagged` | UNFAIR FRAMING / report | user, claim, reason, ts | Permanent (k-protected in any display) | MED | §16.7 tripwires |
| `split_snapshot` | daily per claim with ≥1 position + on window close | claim, counts by stance, ts | Permanent (aggregate by nature) | LOW | movement, vindication (§12.3), longitudinal spine |
| `share_created` / `share_landed` | §15 | sharer/lander, claim, surface, ts | 90 days → aggregate + permanent edge counts | LOW | H5, K-factor |
| `report_filed` / `moderation_action` | §17 | reporter/actor, target, category, outcome, ts | Permanent (audit) | MED | D11 thresholds, audit log |
| `consent_recorded` | signup + consent changes | user, version, ts | Permanent | LOW | §19 compliance |
| `account_deleted` | §19 | tombstone id, ts | Permanent (tombstone only) | LOW | erasure propagation proof |

**Rejected instrumentation (explicitly not built):** scroll-depth/dwell tracking, session replay, cross-site pixels, inferred demographics, any individual-level long-retention reading logs beyond the 90-day windows above. Rationale: DATA_ASSET_STRATEGY §5 "nothing invasive, nothing speculative" is a product requirement, not advice.

---

## 19. Privacy and Trust Requirements

1. **Pseudonymity (D3):** pseudonym is the only public identity; no real-name field exists; pseudonym changes ≤1/90 days with old-name redirect for 30 days (record continuity without identity churn).
2. **Identity-layer isolation (hard requirement):** credentials, email, IP, anti-abuse device signals live in an isolated identity store; no analytical query, product surface, export, or (future) commercial dataset may join it to opinion data. Admin surfaces show identity data only in the sanctions/appeals context, access-logged.
3. **Consent versioning:** consent text is versioned; signup records the version (`consent_recorded`); material changes require re-consent on next session; consent history user-visible in Settings.
4. **Signup disclosure (exact content requirements):** positions/arguments are public under the pseudonym · aggregated, anonymized statistics (splits, trends) are produced · the refusal charter link (no individual data sales, no political-campaign clients, no ads — DATA_ASSET_STRATEGY §4 published as `/charter`) · 16+ requirement.
5. **Account deletion:** self-serve in Settings; effect: identity layer purged; pseudonym released after 90 days; all content tombstoned (public removal; splits recomputed; counters re-parented per §8.11); `split_snapshot` aggregates unaffected (aggregate by nature); completion confirmation to the credential address. Target completion ≤30 days, actual public removal immediate.
6. **Data export:** self-serve; delivers the user's own ledger, arguments, endorsements given/received, persuasion events they created, consent history — machine-readable. (Portability right + the ledger-as-asset promise.)
7. **Public visibility bright lines:** current + historical stances and mind-changes are public by design (§12.4); reading behavior is never public; who endorsed what is never public at individual level (aggregates only, except co-sign lists which are public by nature of "backing" — co-sign is a public act, stated in consent copy).
8. **Aggregate thresholds:** any V1 surface showing group breakdowns beyond the three-stance split (e.g., MOVED breakdown panels §9.6) MUST NOT segment below cohort sizes that could deanonymize; V1 rule: no attribute-based segmentation exists at all (no age/region cuts anywhere in-product).
9. **No data-company behavior:** no monetization code paths, no commercial data exports, no third-party analytics with data-sharing in V1. The event log accrues under the charter; that is all.

---

## 20. Admin and Operational Requirements

Internal surfaces (minimal, no visual design here): **Editorial Review Queue** (§16.6) · **Moderation Queue** (§17: escalations, appeals, sanction actions, split-freeze control) · **Claim Ops** (correction editor with version diff, withdrawal with reason, reschedule, CONFLICT-cap dashboard) · **Source & Library Ops** (allowlist registry with origin-region metadata + monthly review flow; example dispute resolution; spot-verification queue) · **User Ops** (sanctions ladder, appeal handling — identity data access-logged per §19.2) · **Audit Log** (every admin/editorial/moderation action: immutable actor + action + target + ts + reason; admin-queryable) · **Weekly Ops Report** (auto-generated: pipeline quality tripwires §16.7, founder editorial minutes vs. budget §16.6, moderation load vs. D11 thresholds §17.3, kill-test metric tracking §23).

**Founder workload budget (explicit, monitored):** editorial queue 10–15 min/day · moderation escalations target <10 min/day within §17.3 thresholds · allowlist review ~1h/month · claim audit ~1h/month · dispute resolutions as-escalated. **Total steady-state target: <2.5 h/week + monthly ~2h.** The Weekly Ops Report exists to make any breach visible and actionable (cadence reduction, moderation hire trigger) — never silently absorbed.

---

## 21. V1 / LATER / REMOVE Matrix

| Feature | Status | Trigger for reconsideration (if LATER) |
|---|---|---|
| Daily Claim ritual (1 flagship, UTC day, local delivery) | **V1** | |
| Supporting claims (≤3/day) + evergreen bank | **V1** | |
| Bounded feed, deterministic ranking, end marker | **V1** | |
| Commit-to-reveal + pre_reveal flag + early-split counts mode | **V1** | |
| Three stances (no confidence scale) | **V1** | confidence: LATER if IT'S-COMPLICATED >40% sustained (signal it's overloaded) |
| Append-only positions, retraction, mind-change entries | **V1** | |
| Arguments (280 cap, side-derived, counters depth-1) | **V1** | elaboration field: LATER per §8.2 trigger |
| Co-sign (≤3/claim) + duplicate detection | **V1** | |
| CONVINCING / STRONG EVIDENCE / NEEDS A SOURCE | **V1** | |
| MOVED ME via attribution flow only | **V1** | multi-attribution: LATER per §10.4 trigger |
| UNFAIR FRAMING claim flag | **V1** | |
| Curated seed arguments (labeled, ceding) | **V1** | |
| Example library: retrieval suggestions, composer search, submission, disputes | **V1** | |
| Ledger/profile with 3 header stats + vindication lines | **V1** | |
| Claim search (minimal) | **V1** | |
| Notifications per §14 + Activity | **V1** | |
| Blurred split cards, argument cards, sprint map card, invite links (attribution only) | **V1** | |
| Public claim pages, SEO/OG per §15.5 | **V1** | |
| Automated pipeline + review queue + graduation + tripwires | **V1** | |
| Moderation triage + thresholds + sanctions | **V1** | |
| Event taxonomy §18, consent/deletion/export, charter page | **V1** | |
| Admin console + audit log + weekly ops report | **V1** | |
| Onboarding sprint + visitor-reveal flow | **V1** | |
| AI clarity assist for arguments | LATER (C5) | observed argument-quality problems; homogenization risk re-assessed |
| User-submitted claims (through pipeline gates) | LATER | ~10k users + submission quality gate built |
| Communities / topic areas | LATER | density: >5k WAU in ≥2 domains |
| Following people; follower counts | LATER | post-density; celebrity-dynamics review |
| Per-topic reputation tiers | LATER | MOVED ME distribution stable; anti-farming proven |
| Predictive/resolvable claims + calibration | LATER (D6: V2 candidate) | founder decision post-V1 |
| Agora Pro (deep search, analytics, collections, export tools) | LATER | ≥10k users (MONETIZATION §5) |
| Education cohort mode; Panels; Intelligence | LATER | MONETIZATION §5 stage gates |
| Native mobile apps | LATER (D13) | ritual/retention validated (Kill Test 1 passed) |
| Non-English versions | LATER | not before product-market fit in English (D1) |
| Verification badges (human/expertise) | LATER | identity-abuse pressure or expert-supply need |
| Revealed split cards | LATER (§15.2) | share-conversion <1% |
| Argument merge tooling | LATER | duplicate-detection miss rate high |
| Likes, upvotes/downvotes | **REMOVE** | |
| Open comment threads / replies that aren't arguments | **REMOVE** | |
| Infinite scroll; engagement-ranked feed | **REMOVE** | |
| Internal reposts/amplification | **REMOVE** | |
| Streaks, badges-for-volume, leaderboards | **REMOVE** | |
| "Learned something" / standalone "weakened confidence" signals | **REMOVE** (C6/§10.1) | |
| Anonymous positions counted in splits | **REMOVE** | |
| AI-generated arguments/examples from model memory; AI debate participants | **REMOVE** (constitutional) | |
| Ads, sponsored claims/collections, Daily Claim sponsorship | **REMOVE** (MONETIZATION §6) | |
| Real-name requirement; phone requirement | **REMOVE** | |
| DMs | **REMOVE** | |
| Third-party trackers; session replay; inferred demographics | **REMOVE** (§18) | |

---

## 22. Acceptance Criteria (core behaviors; Given/When/Then; behavioral, implementation-free)

**AC-1 Commit-to-reveal integrity.** Given any user or visitor on a claim surface without a recorded/pending position, When the surface renders, Then no split percentages, per-side counts, per-argument counts, or movement statistics are present in the rendered content (including page source and SERP snippet content), And position buttons are available.
**AC-2 Reveal binding.** Given a logged-in user taps a stance, When persistence succeeds, Then `position_created` exists with `pre_reveal=true` and the split renders; When persistence fails, Then no split is shown and a retry is offered.
**AC-3 Visitor conversion truth.** Given a visitor tapped a stance and saw the visitor reveal, When they sign up and their position is recorded, Then that `position_created` carries `pre_reveal=false`, And the visitor's tap was never included in any split before signup.
**AC-4 Early-split mode.** Given a claim with 24 on-record positions, When a positioned user views it, Then raw counts with an "early debate" label are shown and no percentages; Given the 25th position is recorded, Then percentages render.
**AC-5 Append-only positions.** Given a user changes AGREE→DISAGREE, When the ledger and event log are inspected, Then the original position event remains unmodified, a `position_changed` event exists, the ledger shows a mind-change entry, and the split reflects only the current stance.
**AC-6 Attribution flow.** Given a user with position AGREE viewed 2 opposing arguments then changes to IT'S COMPLICATED, When the attribution prompt appears, Then it lists at most those viewed opposing arguments + "something else" + "skip"; When one argument is selected, Then exactly one `persuasion_event` exists referencing it, and that argument's MOVED count increments by 1.
**AC-7 MOVED ME is not a button.** Given any argument surface, When all interactive elements are enumerated, Then no directly tappable MOVED ME control exists; MOVED counts change only via AC-6.
**AC-8 Co-sign constraints.** Given a user with stance DISAGREE, When they view co-sign affordances, Then only CASE-AGAINST arguments offer co-sign (IT'S-COMPLICATED users see both sides), And a 4th co-sign attempt on the same claim is refused with explanation.
**AC-9 Duplicate detection.** Given a user submits an argument whose text is highly similar to an existing same-side argument, When they submit, Then the top match is shown with a co-sign option, And publishing requires an explicit "mine is different" confirmation, And an exact-duplicate text is rejected.
**AC-10 Argument cap & freeze.** Given a composer input exceeding 280 characters, Then submission is blocked with a live counter; Given an argument with ≥1 co-sign, When the author attempts a text edit after 15 minutes, Then editing is refused while evidence attachment changes remain available.
**AC-11 Curated distinction.** Given a claim at publication, Then ≥2 arguments per side exist, all labeled Curated with external attribution and link, none authored by a pseudonym; Given a user argument on that side reaches 5 co-signs, Then it ranks above at least all curated arguments' initial placement.
**AC-12 Evidence invariant.** Given any example entry in the library, Then it has a resolvable source edge (publisher+link); When example suggestions return nothing above the relevance threshold, Then the "No documented example in the library yet" state is shown and publishing without evidence proceeds unimpeded.
**AC-13 Feed determinism & bound.** Given two users with identical arenas, positions, and timestamps, Then their feeds are identical; Given a user scrolls past the last section, Then the end marker renders and no additional content loads; Given <3 LIVE supporting claims, Then §4.4 fallback fills from backlog/evergreen/still-moving in that order.
**AC-14 Notification caps.** Given a user with all toggles on receives 5 push-eligible events in a day, Then at most 3 pushes fire (P0 exempt) and the remainder appear in Activity; Given the Daily Claim push, Then it fires within the flagship window at the user's local 08:00 ±15 min.
**AC-15 CONFLICT cap.** Given CONFLICT-tier claims are exactly 20% of currently-LIVE claims, When the scheduler evaluates an approved CONFLICT claim for the next slot, Then its publication defers until the share is below cap, And this deferral is visible in Claim Ops.
**AC-16 Editorial decisions.** Given a REVIEW_REQUIRED claim, Then the queue offers exactly APPROVE / REJECT(with mandatory reason) / FLAG, And no text-editing capability exists; Given a category with 200 trailing candidates at 96% approval and no active tripwires, Then new STANDARD-tier candidates in it publish without review, And a single UNFAIR-FRAMING tripwire ≥2% on any of its published claims returns the category to review.
**AC-17 Correction vs. withdrawal.** Given a factual error in a context bullet, When corrected, Then the claim page shows a dated correction banner and public version history and the claim sentence is unchanged; Given a claim whose sentence itself is flawed, Then the only available remedy is WITHDRAWN, and the page shows the notice while ledger entries persist with the "claim withdrawn" chip.
**AC-18 Deletion propagation.** Given an account deletion, Then the profile URL 404s (pseudonym released per policy), all the user's positions leave public splits (recounted), their arguments tombstone with counters re-parented, identity-layer records are purged, and prior `split_snapshot` aggregates remain unchanged.
**AC-19 Moderation thresholds.** Given 16 escalations/week average over two trailing weeks, Then the Weekly Ops Report states the part-time-moderation trigger as FIRED; the condition is computed from recorded `report_filed`/`moderation_action` events, not manual entry.
**AC-20 Share card integrity.** Given any share card or OG image for a claim, Then no split numbers appear on it; Given a share link landing, Then `share_landed` records attribution and the §3.1 visitor flow renders.

---

## 23. Product Analytics and Kill Tests

### 23.1 Metric formulas (denominators explicit)

- **Activation rate** = activated users (§1 definition) ÷ new visitors who tapped ≥1 stance (any surface), weekly cohort.
- **D1 retention** = % of activated users with ≥1 authenticated session on the calendar day after activation (user-local days).
- **D7 / W4 retention (primary)** = % of activated users recording ≥1 `position_created`/`position_changed` on day 7 ±1 / during days 22–28.
- **Flagship participation** = users positioning on the flagship within its 48h window ÷ users with ≥1 session during that window.
- **Commit-to-reveal completion** = unique user-claim `position_created` ÷ unique user-claim position-prompt renders (`claim_viewed` with buttons shown), 7-day window.
- **Co-sign rate** = positions followed by ≥1 co-sign on the same claim within 24h ÷ positions.
- **Argument creation rate** = `argument_created` (curated=false) ÷ 100 positions.
- **Example attachment rate** = arguments with ≥1 `example_attached` ÷ arguments.
- **Persuasion-event density** = `persuasion_event` (non-quarantined) ÷ 1,000 `split_revealed`, trailing 30 days. Companion diagnostic: attribution skip rate = skips ÷ attribution prompts.
- **Share rate** = users with ≥1 `share_created` in week ÷ WAU. **Share conversion** = activations via `share_landed` ÷ `share_landed`.
- **Pipeline quality** = human approval rate; UNFAIR flag rate per published claim; founder minutes/day.

### 23.2 Kill Test 1 — Ritual retention (~1,000 activated users)
Run when ≥1,000 activated users exist for ≥28 days. **Metric:** W4 retention (above). **Bands (thresholds challenged and adjusted):** the strategy's 30% target was set pre-D13; web-first without native push warrants adjustment, not excuse-making: **PASS ≥25% · ITERATE 15–24% (diagnose: push opt-in rate, flagship participation decay, feed emptiness) · KILL <15%** — if <15% of people who took three positions won't take one more within a month, the ritual hypothesis is false regardless of polish. Secondary gates that can override a marginal pass into ITERATE: flagship participation <30% of active users, or commit-to-reveal completion <45%.

### 23.3 Kill Test 2 — Persuasion density (~10,000 activated users)
Run at ≥10k activated + ≥90 days of debate-map activity. **Metric:** persuasion-event density. **Bands:** **THESIS ALIVE ≥3.0/1,000 reveals · ITERATE 1.0–2.9** (diagnose attribution UX via skip rate — if skips >60%, the measurement, not the persuasion, may be failing) **· INTELLIGENCE-OPTION DEAD <1.0** — kills the B2B/data thesis (MONETIZATION §5 gates) and reduces Agora to consumer + education economics; the consumer product itself continues on Kill Test 1 economics. This test gates the option, not the company — stated so the result can't be motivated-reasoned later.

### 23.4 Guardrail metrics (watched, not targeted)
UNFAIR flag rate; CONFLICT share vs. cap; report volume per 1k WAU; new-account quarantine hit rate; founder ops minutes (§20). No engagement-time metrics are tracked as success indicators anywhere (bounded-session product; time-on-site success would contradict the design).

---
---

# FINAL OUTPUT

**A. V1 objective.** Prove the claim-reaction ritual retains an English-speaking founding cohort: commit-to-reveal position-taking as a habit, with a measurable minority climbing the staircase to arguments and evidence — at ≤15 founder-minutes/day of editorial operations.

**B. Target founding user.** The informed lurker: English-speaking, 20–45, consumes economics/business/tech-AI/geopolitics via X, HN, newsletters, podcasts; holds real opinions; rarely posts anywhere because X is chaotic, Reddit is disposable, LinkedIn is careerist. Wants to be counted, on record, and to see the strongest case on both sides fast.

**C. Exact activation event.** Within 24 hours of first visit: creates a pseudonymous account AND records ≥3 positions.

**D. Exact V1 core loop.** Local-morning Daily Claim push → read claim + sourced context (split hidden) → tap AGREE / DISAGREE / IT'S COMPLICATED → split reveals + ledger entry → optionally co-sign the nearest argument or write one ≤280-char argument → optionally attach a sourced example → receive co-signs / CONVINCING / attributed MOVED ME → return tomorrow (new claim, counters to your arguments, split movement, weekly recap).

**E. Primary success metric.** W4 ritual retention: % of activated users recording ≥1 position during days 22–28 after activation.

**F. Complete V1 feature list.** Daily Claim ritual (UTC claim day, local 08:00 delivery, 48h window, closing recap) · ≤3 supporting claims/day + evergreen bank + degradation policy · bounded deterministic feed with end marker · commit-to-reveal with pre_reveal integrity, early-split counts mode, visitor-reveal conversion flow · three-stance positions, append-only history, retraction, mind-change ledger entries · arguments (280 chars, side-derived, counters depth-1, edit freeze, co-sign ≤3/claim, duplicate detection, rate limits) · endorsements: CONVINCING (with cross-camp count), STRONG EVIDENCE, NEEDS A SOURCE workflow; MOVED ME via attribution flow only · UNFAIR FRAMING claim flag · curated seed arguments (labeled, community-ceding) · example library (mandatory source edges, retrieval-only suggestions, composer search, user submission, dispute workflow, "no example found" state) · debate map (two sides, ranked by persuasion-weighted formula, exploration slot, 2-minute scan contract) · public ledger/profile (3 header stats, vindication lines) · claim search · notifications per §14 with ≤3 pushes/day cap + Activity center · sharing: blurred split cards, argument cards, sprint map card, attributed invite links · public SEO claim pages with commit-to-reveal-safe rendering · automated editorial engine (13 stages, CONFLICT tier with 20% cap, review queue with approve/reject/flag, category graduation, tripwires, corrections/withdrawal) · moderation (automated triage, structured source disputes, sanctions ladder, founder-load thresholds) · canonical event taxonomy with consent versioning, deletion propagation, data export, identity isolation, public charter page · admin console with audit log and weekly ops report · onboarding sprint with the four entry paths.

**G. Top 10 V1 non-goals.** (1) Any monetization (Pro, Panels, education billing); (2) predictive/resolvable claims; (3) user-submitted claims; (4) communities and following people; (5) native mobile apps; (6) non-English UI or claims; (7) AI writing/clarity assistance and any AI-generated debate content; (8) reputation scores/leaderboards; (9) DMs and open comment threads; (10) engagement-optimized anything (infinite scroll, ranked-by-engagement feeds, time-on-site goals).

**H. Canonical event taxonomy.** `position_created` (with pre_reveal) · `position_changed` (with trigger) · `position_retracted` · `claim_viewed` · `split_revealed` · `argument_viewed` · `argument_created` · `argument_cosigned`/`uncosigned` · `endorsement_given` (with giver stance) · `persuasion_event` (materialized, first-class) · `example_viewed` · `example_attached` · `source_opened` · `claim_published` (with lineage) · `claim_flagged` · `split_snapshot` (daily) · `share_created`/`share_landed` · `report_filed`/`moderation_action` · `consent_recorded` · `account_deleted`. Retention: opinion/argument/persuasion events permanent; view/open events 90-day individual then aggregate-only. Invariants: append-only, pseudonym-keyed, identity-isolated, consent-stamped, tombstone-propagating, education-quarantine-ready.

**I. Two kill tests.** (1) **Ritual retention** at ~1,000 activated users: W4 ≥25% pass, 15–24% iterate, <15% kill the product hypothesis. (2) **Persuasion density** at ~10,000 activated users: ≥3.0 attributed persuasion events per 1,000 reveals = intelligence thesis alive; 1.0–2.9 iterate (check attribution skip rate); <1.0 = the data/B2B option is dead — consumer economics only from then on.

**J. The 10 most important unresolved product risks.** (1) Founding-cohort acquisition is unsolved by explicit decision (D9) — the best product spec fails at zero distribution. (2) Web push opt-in rates may be too low to power a daily ritual without native apps — email/feed fallbacks may not carry H2. (3) Commit-to-reveal is unproven at scale: gating the split may suppress participation instead of converting curiosity (H1 could fail). (4) The attribution prompt may annoy users or under-capture (high skip rate), starving MOVED ME and Kill Test 2's signal. (5) Duplicate-detection friction may deter the exact 5–10% who write arguments. (6) CONFLICT claims even at 20% may set the platform's public tone and moderation load disproportionately. (7) Automated claim quality in chaotic news weeks — the rubric's worst days are launch-reputation days. (8) Tiny-cohort debate maps may feel morgue-like despite curated seeding if early density misses. (9) Pseudonymous sockpuppetry at small n can distort splits before quarantine heuristics mature. (10) The bounded session may cap habit formation below retention targets (the anti-doomscroll bet is a bet).

**K. Contradictions found across strategy documents.** Seven, all resolved in §0: C1 pre-position cards leaked directional social proof in the strategy's own card sketch (resolved: nothing directional pre-commit); C2 MOVED ME had two conflicting eligibility definitions (resolved: attribution-flow only, never a button); C3 pipeline daily-output numbers conflicted with the 1+3 cadence (resolved: ≤10 candidates → publish 1+3 + backlog); C4 feed-size language assumed 5–8 claims/day (resolved: multi-day LIVE windows feed a rolling pool); C5 the AI clarity assist contradicted the minimal-AI-surface principle (resolved: cut from V1); C6 optional confidence scale appeared in the event schema only (resolved: no confidence in V1); C7 stance naming inconsistency NUANCE vs. IT'S COMPLICATED (resolved: IT'S COMPLICATED).

**L. Founder decisions still absolutely required before UX design.** (1) **Ratify the C2 resolution** — MOVED ME strictly via attribution flow is a deliberate tightening of PRODUCT_STRATEGY §11; it trades some signal volume for farm-resistance and needs your sign-off since it touches the crown-jewel mechanic. (2) **Brand usage in beta:** does the working name "Agora" appear on public surfaces (share cards, SEO pages, charter) during pre-launch testing, or do public surfaces wait for the naming phase? Share cards and OG images need a wordmark decision before design. (3) **Founder's editorial hours:** the review queue's daily cutoffs (§5.3, 21:00 UTC default) should align with your actual timezone and availability — state your review window. (4) **Kill-test band ratification:** §23's adjusted thresholds (25% W4 pass; 3.0/1,000 persuasion density) are my calls on your strategy's numbers — confirm or amend them now, before motivated reasoning has data to work with. (5) **Tone direction for DESIGN.md:** the spec supports either a serious-broadsheet register or a warmer game-like register (Wordle energy); this is a brand personality call that shapes every surface and should be yours.

---

**STOP. PRD complete. Next artifacts — DESIGN.md, technical stack, implementation plan — await founder review of this document, the §0 contradiction resolutions, and the five decisions in Final Output L.**
