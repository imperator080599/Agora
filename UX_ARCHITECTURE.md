# UX_ARCHITECTURE.md — Agora V1 UX Architecture

**Working name:** Agora (working name; wordmark is a swappable token throughout — see DESIGN.md)
**Version:** 1.0 · 2026-07-12
**Authoritative behavior source:** PRD.md v1.0 (approved). Companion: DESIGN.md (visual system, components, microcopy, accessibility).
**Scope exclusions:** no technical stack, no production code, no implementation tasks.
**Founder decisions incorporated:** MOVED ME attribution-only (ratified) · working-brand usage rules · editorial window 20:30–20:45 Europe/Paris · frozen kill tests · tone: calm, intelligent, modern, subtly rewarding.

---

## 1. Binding UX Principles

These are review criteria. A design that violates one fails review; the principle cited is the reason.

**P1 — Commit before the crowd.** No surface may render directional crowd data (split percentages/counts, per-side counts, per-argument counts, rank numbers, movement stats) to a user without a recorded or pending position on that claim. Test: enumerate every data element on any pre-position render (including page source, OG images, SERP snippets); any directional element = fail. Directionless totals ("1,204 on record") are permitted.

**P2 — Two minutes to both sides.** From arrival on any positioned claim page, a user must be able to read the top 3 arguments on each side, with their evidence visible as chips, within ~120 seconds and ≤3 taps. Test: walk the flow with a stopwatch on a 360px viewport; count taps; measure reading load (top-3 rows per side must fit in ≤2 viewport heights per side).

**P3 — The tap is a complete contribution.** Positioning alone is a finished, honored act. Staircase prompts are invitations, never obligations: no progress bars, no "complete your contribution," no incomplete-state visual debt on skipped steps, and a dismissed prompt never returns for that claim. Test: after position + skip-all, the claim page shows zero pending-task affordances.

**P4 — Calm by construction.** Sessions end visibly ("done for today"); nothing autoplays, nothing is infinite; the split reveal is the single designed animation moment and it is informative, not celebratory; badges are dots, not red counters; no streaks, no variable-reward aesthetics. Test: screen-record a session — every animation must map to new information appearing.

**P5 — Changing your mind is a dignified act.** The position-change flow is as polished as first positioning; mind-change ledger entries render with the same visual quality as positions; attribution is optional with a first-class Skip; no "flip-flop" framing anywhere in copy or iconography. Test: read every string and icon in the change flow for shame or theater; both are failures.

**P6 — Evidence is one tap away, honestly labeled.** Every factual statement (context bullets, examples) carries a visible, named source affordance within the same component; verification states (Verified / User-submitted / Disputed) are always shown on evidence; "no evidence" is a designed state, never a broken-looking one. Test: pick any fact on screen; one tap must reach its named source.

**P7 — One thumb runs the loop.** On a standard mobile viewport, every core-loop action (open claim, read context, position, reveal, co-sign, skip) is reachable and operable with one thumb: position controls anchor to the bottom interaction zone, targets ≥44px, no core action hides behind hover or long-press. Test: complete the daily ritual one-handed on a 375×812 viewport.

---

## 2. Complete User Flow Map

Format per flow: **Start → Intent → Sequence → Decisions → Feedback → Errors → Done.**

**A. Direct first visit (logged out)**
Start: `/` cold. Intent: "what is this?" Sequence: Daily Claim rendered full-bleed in pre-position state + one framing line + "How it works" link → user reads claim/context → taps a stance. Decisions: read sources first (allowed, encouraged) / tap / leave. Feedback: tap triggers visitor reveal (Flow C). Errors: claim fetch failure → cached evergreen claim renders with notice. Done: user is in Flow C.

**B. Shared claim landing**
Start: share/SEO/invite deep link → `/claim/{slug}` pre-position render (P1-clean, server-rendered). Intent: curiosity from the card ("where do people stand?"). Sequence: claim + context + teasers + position bar; invite links show one-time "Invited by @x" line. Feedback: `share_landed` recorded silently. Errors: withdrawn claim → withdrawal notice + "Today's claim instead →". Done: Flow C on tap, or bounce.

**C. Visitor commit-to-reveal**
Start: logged-out stance tap. Sequence: (1) selection confirms visually; (2) real split reveals with banner: "This is where 1,204 people on record stand. Your position isn't counted yet." (3) primary CTA **"Put it on record"** → Flow D; secondary: keep browsing (position held client-side only). Decisions: sign up / browse / leave. Feedback: split visible; debate map unlocks read-only (endorse/co-sign controls render in locked state with "Join to take part"). Errors: none blocking; split service failure → "Live split unavailable" placeholder, retry. Done: signup or exit; visitor tap never enters any split (PRD AC-3).

**D. Signup conversion**
Start: "Put it on record" (or any locked-control tap). Intent: save the position. Sequence: single sheet — pseudonym (3 suggestions + free entry, availability inline), credential, 16+ check, one-paragraph consent summary + links (charter, terms) → create. Decisions: pick suggested vs. custom pseudonym. Feedback: "On record. Entry #1 in your ledger." — pending position recorded (`pre_reveal=false`). Errors: pseudonym taken (inline, instant suggestions), credential failure (resend/retry), under-16 (polite hard stop). Done: Flow E.

**E. Activation sprint**
Start: post-signup. Sequence: arena picker (4 arenas, pick ≥2, one screen) → 3 rapid claims (claim + context → tap → reveal → auto-advance; small "skip" link per claim) → mirror screen ("Your starting record": 4 stance rows vs. majority, most-contrarian highlight, share affordance) → depth reveal (auto-open most-contrarian claim's map on the opposing side) → co-sign prompt (Flow H) → notification moment (Flow Q1). Decisions: skip claims (allowed, uncounted), share map or not, co-sign or compose or skip. Feedback: progress dots (2 of 3) — position count only, never a gamified meter. Errors: claim pool exhausted (tiny cohort) → sprint shortens gracefully ("You're fully on record for today"). Done: lands on Today feed with end-marker visible; activation event typically fires mid-sprint.

**F. Returning Daily Claim**
Start: push/email tap or direct visit at local morning. Sequence: Today feed, Daily Claim pinned → open → context → position → reveal → staircase prompt → optional map exploration → feed remainder → end marker. Decisions: staircase depth. Feedback: reveal; "Day 2 closes in 6h" status when applicable. Errors: offline → cached feed + banner. Done: end marker seen.

**G. Supporting claim interaction**
Same as F without ritual framing; entry from feed Live Debates section; compact-card state after positioning.

**H. Co-sign flow**
Start: post-reveal staircase module or debate-map row. Intent: "that's my reason." Sequence: module shows top-3 same-side arguments ("Which of these is closest to your reason?") → tap card → inline confirm "Backed. We'll tell you if it's countered." Decisions: none-of-these → Flow I; skip (quiet link) → module collapses permanently for the claim. Feedback: card gains backed state; count not shown pre-existing? (counts are post-position surfaces — visible here). Errors: 4th co-sign on claim → inline "You've backed 3 reasons on this claim — unback one first." Done: backed state persists across sessions.

**I. Argument creation**
Start: "None of these" / map "Add your reason". Sequence: composer sheet — claim + user stance pinned; IT'S-COMPLICATED users see side selector first ("Your reason bears on: The case for / The case against"); single field, live 280 counter; submit → duplicate check (Flow J) → evidence step (Flow K) → publish → "On the map." with entered-row preview. Decisions: side (complicated users only), publish w/o evidence. Errors: over-limit blocks submit (counter state); network failure preserves draft locally. Done: argument visible in map (exploration slot eligible).

**J. Duplicate argument intervention**
Start: composer submit with high/moderate similarity. Sequence: high → blocking sheet "This reason is already on the map." with match card, primary **[Back it instead]**, secondary "Mine is different"; moderate → non-blocking panel of 3 similar rows above the submit button. Decisions: co-sign vs. proceed. Feedback: choosing "Back it instead" completes as Flow H with composer text discarded after confirm ("Discard your draft?"). Errors: exact duplicate → submit refused with the match shown. Done: either path resolves to a recorded contribution.

**K. Evidence/example attachment**
Start: post-submit step (or "Add evidence" on own argument later). Sequence: up to 3 suggested library cards (summary + named source + state chip) → [Attach] per card / [Search library] / [Submit a source] / **[Publish without evidence]** (always visible, equal weight). Search: keyword field, results as cards. Submit-a-source: URL → fetched title/publisher/date (editable) → ≤50-word summary → attach as User-submitted. Decisions: attach 0–3. Feedback: attached chips preview on the draft. Empty: "No documented example in the library yet." — publish path unobstructed (P6). Errors: URL fetch failure → manual fields. Done: publish.

**L. Position change**
Start: claim-page stance pill "You: Agree · since 12 Mar" → "Update". Sequence: stance selector (current marked) → pick new → confirm sheet "Update your position to It's complicated?" → Flow M (attribution) → toast "Updated. Your ledger keeps both." Decisions: cancel anytime. Feedback: split recalculates in view; ledger entry created. Errors: rate-limited (1/claim/24h) → "You updated this position today — changes are limited to one per day." Done: current stance updated; history intact.

**M. Persuasion attribution**
Start: step 2 of the change confirm sheet. Sequence: "What moved you?" — radio list: up to 5 viewed other-side arguments (compact rows, most recently viewed first) + **Something else** + **Skip** (all three option types equal visual weight) → select → done. Decisions: single select only. Feedback: attributed → nothing theatrical; the ledger entry gains "Moved by {teaser}"; the author is notified. Skip → never re-asked for this change. Errors: no eligible viewed arguments → list shows only Something else / Skip (no empty-state guilt). Done: `persuasion_event` recorded only on argument selection. **MOVED ME appears nowhere as a button (ratified).**

**N. Debate Map exploration**
Start: post-reveal scroll or "See the debate." Sequence: split module → side tabs (default: **the side opposing the user's stance**; complicated users: side holding the top-ranked argument) → top-3 rows → expand row (counters, full signals) → [Show more] (to 20, then paginate) → switch side. Decisions: expand, endorse, counter, co-sign. Feedback: endorse controls give instant state change; counters expand inline (depth 1). Errors: endorsement write failure → optimistic revert + toast. Done: unbounded reading, but no infinite fetch (bounded lists).

**O. Position Ledger**
Start: "You" tab or pseudonym tap. Sequence: header (pseudonym, joined, three stats) → timeline (position / mind-change / argument entries) → entry tap → claim page. Own profile: retract affordance per position (confirm sheet: "Remove from the record? The split will be recounted."). Errors/empty: "Nothing on record yet. Today's claim is a good place to start." + inline Daily Claim card. Done: browse.

**P. Sharing**
Start: share icon on claim page / argument sheet / sprint mirror. Sequence: share sheet with card preview (blurred split card / argument card / sprint map card) → OS share or copy link. Decisions: none (sharer stance never on cards by default). Feedback: "Link copied." Errors: image generation failure → text link fallback. Done: `share_created`.

**Q. Notification return**
Q1 (permission): triggered at sprint end or after first co-sign — pre-prompt card: "One notification a day — the Daily Claim. Plus replies to your own debates. No noise." [Turn on] [Not now] → native prompt only on [Turn on]. Never on page load.
Q2 (return): push/email tap → deep link to target (claim, argument, recap) with back-to-Today affordance → Activity marks read. Errors: stale target (deleted argument) → "[argument removed]" stub with context intact.

**R. Source dispute**
Start: Example Sheet → "Dispute this source". Sequence: structured reason picker (retracted / misrepresented / unreliable publisher / dead link) + optional note → submit → entry shows Disputed chip everywhere it is cited → resolution notification to disputer and citing authors. Errors: rate-limited frivolous disputes → cooldown message. Done: admin resolution via INT-04.

**S. Argument report**
Start: overflow menu on any argument → "Report". Sequence: category picker (spam / harassment or hate / looks generated / manipulation / other) + optional note → confirm "Reported. We review harassment within 24 hours." Feedback: reporter sees no public change (no report-count displays). Done: triage per §17.

**T. Editorial review (founder)**
See §16 — the 15-minute window flow, keyboard model, and missed-window behavior.

**U. Moderation escalation (founder)**
See §17 — inbox lanes, decision surface, sanction ladder, appeals.

**V. Account deletion / export**
Start: Settings → Privacy & Data. Export: [Download my record] → machine-readable bundle → "Your export is ready." Deletion: two-step — consequences screen (public removal, splits recount, pseudonym release after 90 days, irreversibility) → typed confirmation → done screen + credential-address confirmation. Errors: pending sanctions → deletion proceeds anyway (rights are not hostage to moderation). Done: per PRD AC-18.

---

## 3. Screen and State Inventory

Types: SCREEN (routed, full) · SHEET (routed overlay, mobile bottom sheet / desktop centered modal) · MODAL (blocking confirm) · POPOVER (anchored, desktop) · INLINE (state within a screen) · SYSTEM (toasts, banners).

### User-facing

| ID | Name | Type | Route | Purpose / Primary action | Secondary actions | Required states | Auth |
|---|---|---|---|---|---|---|---|
| S-01 | Today (Home) | SCREEN | `/` | Run the bounded daily session / position on Daily Claim | open claims, dismiss nudge | logged-out landing · default · all-positioned · degraded-supply (evergreen fill) · offline · loading skeleton | optional |
| S-02 | Claim Page | SCREEN | `/claim/{slug}` | Comprehend → commit → reveal → debate / take a position | share, flag claim, sources, change position | pre-position · post-position · early-split (n<25) · first-position · Day-2/closing · archived-still-open · corrected (banner) · withdrawn · visitor-locked map · loading (claim text first) · split-service-error | optional |
| S-03 | Argument Sheet | SHEET | `/claim/{slug}/a/{id}` | Read one argument fully / co-sign or endorse | counter, share, report | default · own-argument (edit window / frozen) · needs-source state · removed-stub · curated | optional (locked controls) |
| S-04 | Example Sheet | SHEET | `/example/{id}` | Inspect evidence + source / open source | dispute, attach (from composer) | verified · user-submitted · disputed · dead-link/archived | optional |
| S-05 | Profile / Ledger | SCREEN | `/u/{pseudonym}` | The public record / browse entries | share (sprint card owner-only), retract (own) | own vs. public · empty · deleted-user 404 | optional |
| S-06 | Search | SCREEN | `/search` | Find a claim / query | domain filters, positioned-toggle | empty-query · results · no-results | optional |
| S-07 | Activity | SCREEN | `/activity` | Notification center / open target | mark all read | default · empty ("Quiet so far…") · unread grouping | required |
| S-08 | Settings (+subpages) | SCREEN | `/settings/*` | Account, notifications, privacy, about/charter | export, delete | per-subpage | required |
| S-09 | Join | SHEET/SCREEN | `/join` | Create pseudonym + credential | — | pseudonym-taken · consent · under-16 stop | — |
| S-10 | Login | SCREEN | `/login` | Return | — | credential error | — |
| S-11 | Arena Picker | SCREEN (onboarding) | `/welcome/arenas` | Choose ≥2 arenas | — | <2 selected (disabled continue) | required |
| S-12 | Sprint | SCREEN (onboarding) | `/welcome/sprint` | 3 rapid position-reveals | skip per claim | pool-exhausted short version | required |
| S-13 | Mirror | SCREEN (onboarding) | `/welcome/record` | "Your starting record" / continue to depth reveal | share map card | — | required |
| S-14 | Charter | SCREEN | `/charter` | Public refusal charter | — | — | — |
| S-15 | How it works | SCREEN | `/about` | 3-panel product explanation | join | — | — |
| SH-01 | Composer | SHEET | (over S-02) | Write argument ≤280 / submit | side selector (complicated users) | counter states · draft-preserved | required |
| SH-02 | Duplicate intervention | SHEET | (over SH-01) | Resolve near-duplicate / back it instead | mine is different, discard-draft confirm | blocking · suggestion variant inline | required |
| SH-03 | Evidence step | SHEET | (over SH-01) | Attach evidence / attach or publish without | search, submit source | suggestions · empty-library · fetch-failure manual entry | required |
| SH-04 | Position change + attribution | SHEET | (over S-02) | Update stance → what moved you | cancel | 2-step · no-eligible-arguments · rate-limited | required |
| SH-05 | Share sheet | SHEET | — | Choose card + share | copy link | card-preview per type · image-failure fallback | optional |
| SH-06 | Report | SHEET | — | Report argument/claim | — | category picker · confirmation | required |
| SH-07 | Source dispute | SHEET | (over S-04) | Structured dispute | — | reasons · cooldown | required |
| M-01 | Retract confirm | MODAL | — | Confirm record removal | — | — | required |
| M-02 | Delete account | MODAL flow | (in S-08) | Two-step deletion | export first | consequences · typed-confirm · done | required |
| I-01 | Split reveal | INLINE | (S-01/S-02) | The signature moment | — | percent · early-counts · first-position | — |
| I-02 | Staircase module | INLINE | (S-02) | Co-sign prompt → composer | skip (permanent) | 3-args · fewer-args · skipped-collapsed | required |
| I-03 | End marker | INLINE | (S-01) | Bounded session close | — | normal · fully-on-record | — |
| I-04 | Correction banner | INLINE | (S-02) | Versioned correction notice / view history | — | — | — |
| I-05 | Withdrawal notice | INLINE | (S-02) | Withdrawn claim explanation | — | — | — |
| SYS-01 | Toasts/banners | SYSTEM | — | Confirmations, offline, errors | — | success · info · error | — |

### Internal (desktop-first, mobile-capable)

| ID | Name | Type | Purpose / Primary action | Required states |
|---|---|---|---|---|
| INT-01 | Editorial Review Queue | SCREEN | Approve/Reject/Flag ≤10 candidates in ≤15 min; mark flagship | queue · empty ("Nothing needs you") · reviewed-done · window-closing indicator · conflict-tier grouping |
| INT-02 | Moderation Inbox | SCREEN | Decide escalations; sanctions; appeals | lanes (needs-decision · appeals · auto-handled log) · SLA-clock states · empty |
| INT-03 | Claim Ops | SCREEN | Corrections (version diff), withdrawal, reschedule, CONFLICT-cap dashboard | per-claim lineage view |
| INT-04 | Source & Library Ops | SCREEN | Allowlist registry, dispute resolution, spot-verification | dispute detail with citing-arguments impact list |
| INT-05 | User Ops | SCREEN | Sanction ladder, appeals detail | identity-access-logged view |
| INT-06 | Audit Log | SCREEN | Immutable action history / query | filters |
| INT-07 | Weekly Ops Report | SCREEN | Tripwires, founder minutes, moderation thresholds, kill-test tracking | threshold-fired alerts |

---

## 4. Navigation Architecture

**Ruthlessness verdict:** Search does NOT earn persistent navigation (claims-only, low frequency — it lives as an icon in the Today header). Persistent destinations are exactly three.

- **Mobile (authenticated):** bottom bar, 3 tabs — **Today** (`/`) · **Activity** (`/activity`, unread = 2px dot, never a numeric badge) · **You** (`/u/{self}`). Settings via You header gear. Search via Today header icon. The bottom bar hides when a sheet is open and on scroll-down within the Debate Map (reading mode), reappearing on scroll-up.
- **Desktop:** slim top bar — wordmark token (→ Today) · Today · Activity · You · search field (claims) · gear. Content in a centered column (see DESIGN.md grid); no sidebars, no rails, no trending modules (P4).
- **Logged out:** no app chrome — wordmark token + "How it works" + **Join**. Claim pages render clean for reading/SEO.
- **Back behavior:** URL-driven; browser/OS back closes the topmost sheet first (sheets are routed), then returns through the screen stack; position-change sheet mid-flow → back = cancel (no partial state persists).
- **Deep links:** every card/notification target is a stable URL; unauthenticated arrival at auth-required targets (e.g., `/activity`) → login with return-to.
- **Notification entry:** lands directly on the target surface with a persistent "Today" affordance in the header (never trapped in a leaf).

---

## 5. Today / Feed UX

Single centered column. Order fixed (PRD §4.1); sections render only when non-empty.

1. **Daily Claim** — visually dominant: full-width hero card, ~1.5× supporting-card presence: larger claim type, domain + "Today's claim" label, context preview, position selector. Post-position: compact hero (split bar + your marker + "See the debate →"). Day-2: countdown chip ("Closes in 6h").
2. **Live debates** — label row + up to 5 cards. Un-positioned cards full; positioned cards compact; positioned sort below un-positioned (PRD ranking).
3. **Your debates moved** — label row + up to 3 single-line rows: event icon + claim title + event phrase + time ("Your argument was countered · 2h").
4. **The evergreen** — standard card + "This week's evergreen" label (only on scheduled days).
5. **Unfinished** — one quiet row, dismissible (×): "You took a side on {claim} — the {side} column is short on reasons."
6. **End marker** — thin rule + centered text: "That's everything for today. Tomorrow's claim arrives at 8:00." Below: nothing.

**Claim card hierarchy (pre-position), top→bottom:**
1. Meta row (small): domain tag · status ("Day 1" / "Today's claim").
2. **Claim sentence** — the hero element, display type.
3. Context preview: first bullet + "Context · 3 sources" expander (expands in place; each bullet with named source pill).
4. Participation line (muted, directionless): "1,204 on record".
5. Teaser row (muted, text-only, no counts, no rank marks): "FOR — Productivity gains only appear in…" / "AGAINST — Manufacturing economies can't…" (one line each, truncated).
6. **Position selector** — bottom of card, thumb zone (see §7).

**Post-position compact card:** claim sentence (smaller) · split bar with your stance marker · one activity line ("+214 today · new counter on your side") · chevron.

**States:** loading = skeleton preserving exact layout, claim text first; new-user = hero + Live only, with one-line explainer under hero; degraded supply = evergreen-bank cards labeled "From the archive — still moving"; all-positioned = early end marker variant ("You're fully on record. New claims tomorrow."); offline = cached feed + banner.

---

## 6. Claim Page

### Pre-position (identical for visitor and logged-in; P1-clean)
Top→bottom: header (domain · status · share icon · overflow[flag]) → **claim sentence** (display) → context brief: 2–4 bullets, each ending in a source pill (publisher name + external glyph; opens new tab — reading sources before positioning is encouraged, never gated) → participation line (directionless) → teaser arguments (both sides, text-only) → **blurred map region**: skeleton rows under a non-data decorative blur with the line "The debate opens when you take a position." → **sticky position bar** (bottom-anchored; see §7).
Nothing else. No split, no counts, no ranks, no author stats (P1).

### The reveal (position tap)
1. Selected stance fills; the other two recede (150ms).
2. Sticky bar transforms into the **split module** in place: bar segments grow left→right (350ms, ease-out), percentages count up (400ms); labels always text+pattern, never color-only.
3. One line beneath: "You're with the 34%." / "You're with the majority — 61% agree." / early variant / "Position #1. The debate starts with you."
4. The blurred region resolves into the Debate Map (250ms crossfade) and the staircase module (I-02) slides in beneath the split.
Reduced motion: all states render instantly, no counting, no growth animation. Failure: persistence error → bar does not transform; inline retry ("Your position wasn't saved — try again."). **The reveal is one restrained sequence — no confetti, no sound, no haptic celebration (P4: informative, not casino).**

### Post-position layout
Header → claim → **split module** (bar + your marker + movement line "moved 6 pts this week" + total) → **your stance pill** ("You: Agree · since today" + "Update") → staircase module (until used/skipped) → **Debate Map** (§8) → footer: context brief (collapsed, re-expandable) · share · claim history (corrections) link.
Position-change access lives in the stance pill only — present but not nagging.
Early-split state (n<25): module shows labeled counts, no percentages: "Early debate — 11 on record: 6 agree · 3 disagree · 2 it's complicated," proportional bar rendered with count labels.

---

## 7. Commit-to-Reveal Interaction

- **Options & labels:** exactly three — **Agree** · **It's complicated** · **Disagree**. On the claim page: three stacked full-width buttons, identical height/typography/weight, "It's complicated" centered in the stack. On feed cards: single-row segmented selector, equal height; the middle segment may be wider to fit its label — width differences are typographic accommodation, never hierarchy. All three share one visual treatment pre-selection (outlined, ink text); stance hue appears only after selection. **"It's complicated" is never smaller, lighter, grayer, or last** (equal-dignity requirement).
- **Prompt microcopy:** "Where do you stand?" · beneath the hidden split: "The split is hidden until you take a position."
- **Hidden-split treatment:** a neutral decorative placeholder bar (fixed pattern, generated from no real data — nothing to de-blur) + lock-free language (curiosity framing, not denial framing).
- **Visitor behavior:** identical controls; tap → real reveal + "not counted yet" banner + "Put it on record" CTA (Flow C). Locked map controls show "Join to take part."
- **Logged-in behavior:** tap = recorded (pre_reveal=true) then reveal (§6).
- **Minimum sample:** counts-not-percentages under n=25 (§6); the reveal still always fires — including "Position #1."
- **Skipping:** navigating away is the skip; no confirmation, no guilt copy, no "are you sure?"
- **Accessibility:** buttons are real buttons with stance names as accessible labels; the reveal announces via live region ("Split revealed: 34 percent agree, 51 disagree, 15 it's complicated. You're with the 34 percent."); stance encoding is text + pattern + hue (never hue alone); targets ≥48px on the sticky bar; reduced-motion = instant render.
- **Failure states:** write failure → no reveal, inline retry; offline → position queued locally with explicit "Will be recorded when you're back online" (reveal deferred until server-confirmed — the reveal-persistence binding of PRD AC-2 holds).

---

## 8. Debate Map UX

**Anti-patterns explicitly designed against:** not a threaded comment wall (no avatars-first rows, no infinite nesting), not a graph visualization (no nodes/edges), not an academic document (no footnote walls), not Reddit (no vote arrows).

- **Side navigation (mobile):** segmented tabs — **The case for** · **The case against** — sticky under the split module. Default tab = the side opposing the user's stance (complicated users: the side holding the top-ranked argument). Tab labels carry no numbers (see Final Output M — deliberate deviation from PRD §9.1 pending ratification). Desktop ≥1024: two columns side-by-side, tabs disappear.
- **Argument row anatomy (one glance each):** rank position expressed by order + a thin rank tick (no big numerals, no medals) → argument text (full, ≤280 always fits, body type) → author line (pseudonym · stance mark; or **Curated** badge + "The Economist, Jan 2026" + link) → chips row: evidence chips (0–3: source name + state glyph) → signal line (quiet, one line): "Backed 214 · Convincing 89 — 31 from the other side · **Moved 12**" → counters affordance: "3 counters ↓".
- **Top-3 contract:** each side initially renders exactly its top 3 rows (P2); [Show more reasons] loads to 20; beyond that, "All 37 →" paginated list. The exploration-slot argument (PRD §9.4) renders inside the top block with a small "New" tick, visually identical otherwise.
- **Counters:** expand inline beneath their target, indented one level, full argument rows (same anatomy), depth 1 hard stop; "Counter this" action on every expanded row (→ composer with counter context pinned).
- **Endorsement controls** (on expanded row / argument sheet): two quiet action chips — **Convincing** · **Strong evidence** (enabled only when evidence attached) — plus overflow: "Needs a source", report. Active state = filled chip. **No MOVED ME control exists anywhere (ratified).** Moved counts are display-only; tapping "Moved 12" opens the aggregate panel ("12 people changed position after this argument — 9 from Disagree…").
- **Co-sign state:** own-side rows show **Back this** (primary chip); backed state = "Backed ✓" with unback in overflow. Other-side rows never show Back (except both sides for complicated users).
- **Needs-a-source state:** a visible amber chip on the row ("Source requested"); author sees an attach affordance; cleared state replaces chip with the new evidence chip.
- **Two-minute scan walkthrough (the contract, verified):** reveal → split (5s) → opposing tab already open: 3 rows ≈ 40s reading → tab switch (1 tap) → 3 rows ≈ 40s → expand 1 row + glance counters ≈ 20s. Total ≈ 110s, 2 taps.

---

## 9. Effort Staircase

- **Step 0 → 1 (position → co-sign):** the staircase module appears under the split after the reveal — never as an interstitial, never blocking map access: "**Which of these is closest to your reason?**" + top-3 same-side argument cards + "None of these — add yours" + quiet "Skip" link. Tap = backed (inline confirm). Skip = module collapses with a 200ms fade; a dismissed module never returns for that claim (P3); the map's own Back-this chips remain as the permanent, pressure-free path.
- **Step 1 → 2 (co-sign → write):** "None of these" opens the composer. After a co-sign, a single quiet line may appear once: "Reason missing from the map? Add it in one sentence." — dismissed forever per claim with its module.
- **Step 2 → 3 (write → evidence):** the evidence step is inside the composer flow (Flow K) with "Publish without evidence" always equal-weight. Post-publish, an argument lacking evidence shows the author (only) a gentle inline affordance "Add evidence" — no badge, no red state.
- **Completion feedback per step:** position = the reveal itself; co-sign = "Backed. We'll tell you if it's countered."; argument = "On the map." + the row shown in place; evidence = chip appears on the row. Feedback is informational state-change, not reward animation (P4).
- **Never:** progress meters, "2 of 4 steps," completion percentages, contribution scores, or any visual implying a position alone is unfinished (P3).

---

## 10. Argument Composer

Sheet over the claim page. Anatomy top→bottom:
1. **Context header (pinned):** claim sentence (small) + your stance chip; complicated users: side selector ("Your reason bears on: ○ The case for ○ The case against") before the field activates; counter-context variant pins the countered argument instead.
2. **The field:** single multiline input, placeholder "Because…". Guidance line beneath (static, not AI): "One specific reason beats three vague ones — name a mechanism, a case, or a number."
3. **Counter:** live "214 left" (muted) → amber at ≤40 → at 0, input stops accepting and counter reads "0 — trim to publish". No red shaming, no shake.
4. **Submit** → duplicate check: blocking sheet (high similarity) with match card + **[Back it instead]** (primary) / "Mine is different" (secondary, requires the extra tap by design); moderate similarity renders a "Similar reasons already on the map" panel above submit (non-blocking). Exact duplicate: submit refused, match shown.
5. **Evidence step** (Flow K): suggestion cards / search / submit-a-source / **Publish without evidence**. Empty state verbatim: "**No documented example in the library yet.** You can publish without one, search the library, or submit a source."
6. **Publish** → "On the map." + row preview. Draft persistence on close ("Keep draft?").
No AI writing, rewriting, or suggestion of content anywhere in the composer (PRD C5). Specificity is engineered through the cap, the placeholder, the guidance line, and duplicate collapse.

---

## 11. Position Change and Persuasion Attribution

The signature flow. One sheet, two steps, ≤4 taps total.

```
STANCE PILL  "You: Agree · since 12 Mar"   [Update]
   ↓ tap
STEP 1 — stance selector (three options, current marked "current")
   pick new stance → [Update position]  /  [Cancel]
   ↓
STEP 2 — "What moved you?"  (same sheet slides forward)
   ○ {viewed opposing argument teaser}      (up to 5, most recent first)
   ○ {…}
   ○ Something else
   ─ Skip (text link, same size as options' labels)
   ↓ single selection → sheet closes
TOAST — "Updated. Your ledger keeps both."
LEDGER ENTRY — "Changed position: Agree → It's complicated · 12 Jul"
               + "Moved by: '{argument teaser}'"  (only when attributed)
```
- **Interaction states:** step 1 cancel = full abort, nothing recorded; step 2 has no back (the change is already confirmed by [Update position] — attribution never holds the change hostage); rate-limit state replaces the sheet with the explanation line; no-eligible-arguments state lists only Something else / Skip.
- **Tone:** the confirm is quiet; no applause animation, no "growth mindset" copy, no badge ceremony. The dignity is in the *quality* of the ledger entry, not theater (P5).
- **The three option meanings, visually distinguished only by label:** an argument (attributes → persuasion event, author notified, Moved count +1) · **Something else** ("off-platform or my own reflection" — sublabel) · **Skip** (no reason recorded). All equally easy to select — attribution is volunteered, never extracted (PRD §10.5).
- **MOVED ME is never a button** — restated here because this sheet is the only place persuasion events originate.

## 12. Position Ledger and Profile

- **Header:** pseudonym (display type) · "On record since March 2026" · three stats in one typographic row, label-under-number, identical styling: **47** Positions · **6** Arguments · **12** People moved. No progress rings, no levels, no percentile framing (anti-scoreification).
- **Timeline:** reverse-chron, month dividers. Entry types:
  - POSITION: stance chip + claim title + date; vindication line when Δ≥5pts, set quietly in the positive tone: "Community has moved 9 pts toward you."
  - MIND CHANGE: old→new chips joined by an arrow + date + "Moved by: {argument teaser} →" when attributed. Same visual weight as positions (P5).
  - ARGUMENT: quoted text + current signal line + claim title.
- **Own-profile extras:** retract in each entry's overflow; share (sprint-map card) in header overflow; gear → settings.
- **Public view:** identical minus controls. No follow button, no follower counts (V1).
- **Identity-attachment design bet:** accumulation + vindication lines + mind-change dignity make the ledger self-portraiture; nothing else is needed in V1 (analytics belong to Pro later — deliberately absent).

## 13. Search UX

Entry: magnifier icon in Today header (mobile), header field (desktop). One screen: query field (autofocus) → 4 domain filter chips + "My positions" toggle → results as standard claim cards (pre/post-position state-aware — P1 applies to result cards identically). Ranking display order per PRD §13. Empty query: recent LIVE claims list ("This week"). No results: "No claims found. Agora publishes 4 claims a day across Economics, Business, Tech & AI, and Geopolitics." No argument search, no user search, no source search, no export — the Pro boundary is respected by omission.

## 14. Activity and Notifications

- **Center (S-07):** rows grouped by day; each row: type glyph + one-line text + claim/argument teaser + time; unread = leading dot + slightly elevated surface, cleared on view (P4: no red counters anywhere; the tab shows a dot only).
- **Grouping:** counters batch per argument ("2 new counters on your argument"); co-signs batch daily; split-movement max one row/day (largest mover).
- **Priority order within a day:** moved-someone → countered → recap → split-moved → co-signs/evidence.
- **Permission flow:** pre-prompt card only at the two designed moments (sprint end; after first co-sign if not yet asked): "One notification a day — the Daily Claim. Plus replies to your own debates. No noise." [Turn on] → native prompt; [Not now] → never re-asked for 14 days, then only via a quiet settings hint. **Never on first page load** (hard rule). Email digest opt-in offered on decline.
- **Channel behavior:** push taps deep-link (Flow Q2); email weekly recap = Sunday local morning, mirrors ledger week (positions, arguments, moved events, one vindication highlight).

## 15. Sharing UX

- **Blurred split card (claim):** hierarchy — wordmark token (small, corner) → domain tag → **claim sentence** (dominant) → decorative hidden-split bar (fixed pattern; not real data, nothing recoverable) → "1,204 on record" → CTA line "Where do you stand?". Never: split numbers, sharer's stance, sharer's pseudonym (privacy default).
- **Argument card:** quoted argument text (dominant) + author pseudonym or Curated attribution → claim sentence (secondary) → CTA "See the counter-case." (author consent implicit in publishing; pseudonym is the only identity exposed).
- **Sprint map card:** "My starting record" → 4 rows: stance chip + claim short-title + with/against-majority tick → CTA "Where do you stand?". No percentages leaked.
- **Invite link:** plain URL with attribution; landing shows one-time "Invited by @x" (removable by inviter? V1: no controls — the pseudonym is already public).
- **Deep-link landing:** always the §6 pre-position claim page (P1 intact); OG image = the blurred card; SERP description = claim + first context bullet (never split data).
- **Integrity rule:** cards create curiosity by *withholding* the split, and honesty by showing the real participation count — never fake urgency, never fabricated numbers.

## 16. Internal: Editorial Review UX (the 15-minute window)

**Context:** daily window 20:30–20:45 **Europe/Paris** (DST-aware; all editorial scheduling anchors to Europe/Paris while publication stays 00:00 UTC — the cutoff-to-publication gap varies 3–4h across DST, both sufficient). Queue closes for next-day scheduling at **21:00 Europe/Paris** (amends PRD §5.3's 21:00 UTC default — see Final Output M).

- **Queue ordering:** flagship candidates first (top composite scores), then remaining by score; CONFLICT-tier items grouped last under a visible divider ("Conflict tier — review with care"), never interleaved.
- **Item card (everything scannable without leaving the list):** claim sentence (large) · domain + tier chips (CONFLICT = amber-bordered) · composite score with per-gate ticks (rubric / steelman / sources / risk — pass=tick, escalate=amber flag with one-line reason) · context brief inline (source favicons + publishers, links open in new tab) · steelman preview: best argument each side, one line each · lineage link (full pipeline record).
- **Actions:** **Approve [A]** · **Reject [R** → reason picker: 1 unfair · 2 dull · 3 duplicate · 4 bad sourcing · 5 other**]** · **Flag for regeneration [F** + one-line note**]** · **Make flagship [S]** (one per day; reassign moves the star) · navigate **[J/K]** · open sources **[O]** · undo last **[Z]** (within session). Mobile: swipe-free (deliberate — approvals must be explicit taps), large tap targets, same four buttons per card.
- **Pace design:** target ≤90s/item × ≤10 items; a quiet header shows "6 of 10 reviewed · window closes 21:00" — informational, not a countdown timer aesthetic.
- **Missed / partial window (founder decision 3, encoded):** at 21:00 Paris — approved claims schedule normally; the flagship star, if unset, auto-assigns to the highest-score *approved* claim; **if nothing was approved:** flagship falls back to the pre-approved evergreen bank and supporting slots fill from approved backlog then evergreen bank, else fewer claims publish. **Unreviewed candidates are never published** — they roll over (news candidates expire at 72h per PRD). Thresholds never lower; cadence degrades instead. The next day's queue banner states plainly: "Yesterday's queue wasn't reviewed — today ran on the evergreen bank."
- **Empty state:** "Nothing needs you today." (pipeline failure upstream is INT-07's alert, not this screen's problem).

## 17. Internal: Moderation UX

- **Inbox lanes:** **Needs decision** (escalations only — the founder's actual queue) · **Appeals** · **Auto-handled** (read-only log of automated actions, spot-checkable). Lane counts visible; harassment items carry an SLA clock chip ("14h left").
- **Item surface (one screen per decision, no digging):** the reported content in full · its claim context (one tap to open) · report bundle (categories, count, notes) · account summary (age, positions, arguments, prior actions — identity data absent; only User-Ops shows it, access-logged) · pattern flags (velocity, similarity, reciprocal-farming) where triggered.
- **Actions:** dismiss · remove content · then the ladder: warn / limit 7d / suspend 7d / suspend 30d / ban — each with a required one-line reason (audit log). Keyboard: J/K navigate, D dismiss, X remove, 1–5 ladder.
- **Source disputes** route to INT-04 with the same one-screen principle: entry + source + dispute reasons + citing-arguments impact list → uphold (correct/remove) or reject.
- **Appeals (V1: yes, minimal):** email-initiated per PRD; the appeal renders as a thread on the original action's record; decisions: uphold / reverse (auto-restores content, notifies).
- **Load management by design:** the Weekly Ops Report (INT-07) displays escalations/week and founder minutes against D11 thresholds with a plain "TRIGGER FIRED — engage part-time moderation" state. The inbox itself shows a persistent footer line of the trailing-2-week load so drift is visible before the report says so.

---

## Design-exposed issues and required flags

Recorded here; consolidated in DESIGN.md Final Output (M, N):
1. **PRD §9.1 amendment recommended:** side-tab headers should NOT display side share (redundant with the split module; conflates share-of-positions with strength-of-case). Needs ratification.
2. **PRD §5.3 parameter amended by founder decision 3:** flagship auto-select cutoff = 21:00 Europe/Paris (was 21:00 UTC default). DST-anchored scheduling specified in §16.
3. **Attribution eligibility "viewed":** designed as row-expanded or sheet-opened (matches `argument_viewed` in PRD §18) — scroll-past impressions do not qualify. Consistent, but stated explicitly since it shapes the option list.
4. **Teaser arguments pre-position:** rendered without rank marks or counts so they carry no popularity signal — P1-compliant interpretation of PRD §2.2 confirmed.
