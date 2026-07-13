# DESIGN.md — Agora V1 Design System

**Working name:** Agora (wordmark is a swappable token — see Brand Portability rules below)
**Version:** 1.0 · 2026-07-12
**Companion:** UX_ARCHITECTURE.md (flows, screens, navigation, per-surface UX). PRD.md is authoritative for behavior.
**Tone mandate (founder decision 5):** calm · intelligent · modern · subtly rewarding. Never: academic, institutional, elitist, newspaper-like, activist, debate-club, mobile-game gamified, childish, addictive, outrage-driven.
**Scope exclusions:** no technical stack, no production code, no implementation tasks. Values below are design tokens, not code.

---

## 18. Design System

### Visual philosophy — "a quiet instrument"

The interface is **ink on paper-warm neutral; color belongs to meaning.** Almost everything — chrome, buttons, links, navigation — is monochrome ink. Hue appears only where it encodes information: the three stances, evidence, and system states. This produces four properties the product needs: (1) the split reveal and stance colors carry maximal signal because nothing competes with them; (2) the product reads calm and credible without borrowing newspaper or academic costume; (3) social-reward moments stay subtle because they are typographic, not chromatic fireworks; (4) **brand portability is structural** — with no brand color woven through the UI, a future rename swaps a wordmark token and nothing else (founder decision 2). No Greek anything: no columns, laurels, serifs-as-toga, or marble textures. The identity is the *mechanic made visible* — the hidden-then-revealed split bar is the closest thing to a logo the product needs.

Explicit non-imitation: not X (no engagement chrome), not Reddit (no vote furniture), not Polymarket (no trading-terminal density), not Letterboxd (no poster-grid warmth), not Wordle (no tile-toy aesthetics). Kinship without imitation: the confidence of well-set type and honest data graphics.

### Spacing, grid, breakpoints
- **Spacing scale (px):** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64. Card interior padding 16 (mobile) / 20 (≥600). Section gaps 32. Related-element gaps 8/12.
- **Grid:** single reading column, max-width **640px** for claim/ledger content; app frame max **1080px** on desktop (Debate Map two-column mode: 2 × 508 + 24 gutter). Margins: 16 (mobile) / 24 (tablet) / auto-centered (desktop).
- **Breakpoints:** XS ≤360 · S 361–599 (baseline design target 375×812) · M 600–1023 · L ≥1024.

### Surfaces, borders, radius, elevation
- Surfaces: `bg` (page) · `surface` (cards, sheets) · `surface-sunken` (input fields, compact/positioned cards) · `surface-inverse` (primary ink buttons, toasts).
- Borders over shadows: 1px `border` on cards; hairline `border-subtle` for internal dividers. **Shadow exists at exactly two levels:** `elev-1` (sticky position bar; barely-there ambient) and `elev-2` (sheets/modals). Nothing else floats.
- Radius: **4** (chips, tags) · **8** (buttons, inputs) · **12** (cards, sheets top corners) · **full** (stance pills, dots). No mixed radii inside one component.

### Iconography
Stroke icons, 1.5px, 20/24px grid, geometric with softened terminals (matches type). Semantic set is small on purpose: arena glyphs (4), source/external, evidence/document, counter, backed-check, activity types, share, overflow, search, settings. **Forbidden glyph classes:** trophies, medals, flames/streaks, hearts, thumbs, upvote arrows, rosettes — the reward vocabulary of products this one refuses to be.

### Motion
- Durations: 120ms (state ticks) · 200ms (sheets, fades) · 350ms (the split-bar draw) + 400ms count-up. Easing: ease-out entering, ease-in leaving.
- **One signature moment:** the split reveal (UX §6). Everything else is utilitarian. No looping, no parallax, no pull-to-refresh candy, no celebratory particles anywhere.
- `prefers-reduced-motion`: every transition becomes instant or a 120ms opacity fade; count-ups render final values immediately.

### Focus, disabled, loading
- **Focus:** 2px `focus` ring, 2px offset, on every interactive element; never removed, never color-only (ring + offset works on any surface).
- **Disabled:** 40% opacity + cursor default; disabled position buttons never occur (positions are never disabled — remove the control instead).
- **Loading:** skeletons mirror true layout (claim text first, per UX §5); shimmer subtle, 1.2s cycle; spinners only inside buttons on submit. No full-screen loaders after first paint.

### Brand portability rules (founder decision 2, enforced)
Wordmark = one token used in ≤4 places (top bar, share cards, auth screen, charter page), set in the product typeface — no custom lettering investment pre-naming. No brand color exists (ink is not a brand). No name-derived metaphors in iconography or illustration. Renaming cost = replacing one token + share-card template text.

---

## 19. Color System (light mode)

Monochrome ink UI; hue = meaning. All pairings below meet WCAG 2.2 AA against their stated grounds (body text ≥4.5:1; large display ≥3:1; UI glyphs ≥3:1).

| Role | Token | Value | Usage |
|---|---|---|---|
| Background | `bg` | `#FAFAF7` | page ground (paper-warm, not newsprint gray) |
| Elevated surface | `surface` | `#FFFFFF` | cards, sheets |
| Sunken surface | `surface-sunken` | `#F2F2EE` | inputs, compact positioned cards |
| Inverse surface | `surface-inverse` | `#24272B` | primary buttons, toasts |
| Primary text | `text` | `#1B1E22` | claims, body |
| Secondary text | `text-2` | `#50555C` | context, signal lines |
| Muted text | `text-3` | `#83888F` | metadata, timestamps (AA at 14px+ on bg) |
| Border | `border` | `#E3E3DD` | card borders |
| Subtle border | `border-subtle` | `#EDEDE8` | dividers |
| Accent (interactive ink) | `accent` | `#24272B` | primary buttons, active states, links (underlined) — deliberately ink, see §18 |
| **Agree** | `agree` | `#5A52C7` (violet) · tint `#EEECF9` · on-tint text `#453EA3` | stance chips, split segment, selected state |
| **Disagree** | `disagree` | `#B0562B` (terracotta) · tint `#F8EDE6` · on-tint text `#8F4522` | idem |
| **It's complicated** | `complicated` | `#2E7466` (dusk teal) · tint `#E7F1EE` · on-tint text `#255E53` | idem — same saturation/lightness band as the other two: **equal dignity is enforced in the palette itself** |
| Evidence | `evidence` | `#3D5F8F` (steel blue) · tint `#EBF0F7` | evidence chips, verified marks |
| Success | `success` | `#2E7D4F` | confirmations only |
| Warning | `warning` | `#9A6700` | needs-a-source, disputed, conflict-tier borders |
| Destructive | `destructive` | `#B3261E` | delete, ban, withdrawal |
| Focus | `focus` | `#1D4ED8` | focus rings only — never decorative |

**Stance-color rationale:** violet/terracotta/teal is a deliberately non-partisan triad — no US red/blue mapping, no green/red "correct/incorrect" valence, three hues of matched perceptual weight. Split bars additionally carry per-segment text labels and distinct fill patterns (§23) so color is never the sole channel.

**Dark mode assessment:** deferred to fast-follow, not V1. Reasoning: the evening-heavy usage pattern argues for it eventually, but V1's job is the kill tests, and a second theme doubles visual QA across every state in UX §3. Requirement now: every color above ships as a semantic token (no raw hex in components), so dark mode later is a token sheet, not a redesign. OS `prefers-color-scheme: dark` users get light mode with correct meta so the browser chrome doesn't clash.

---

## 20. Typography

- **Strategy: one variable sans family for everything** + mandatory tabular figures for data. Two families (sans + display serif) would drift newspaper-ward (tone mandate). Credibility comes from scale discipline and generous space, not serifs.
- **Selection criteria (binding; final cut in implementation):** humanist-leaning neo-grotesque; large x-height; distinguishable I/l/1; true tabular lining numerals; 400–600 weights; variable single-file; open license (no licensing dependency before naming phase — founder N-item); proven small-size screen rendering. Candidates meeting all criteria: Inter, Geist Sans, General Sans, Public Sans. System-stack fallback defined.
- **Scale (mobile / ≥600):**

| Level | Size/leading | Weight | Usage |
|---|---|---|---|
| Display | 26/32 · 30/36 | 600, −1% tracking | claim sentence on Claim Page |
| Title | 20/26 · 22/28 | 600 | Daily Claim card sentence, screen titles |
| Heading | 17/24 | 600 | supporting-card claim sentences, section labels |
| Body | 15/22 · 16/24 | 400 | arguments, context bullets |
| Body-strong | 15/22 | 500 | argument emphasis, stance pill text |
| Meta | 13/18 | 400 | signal lines, timestamps, source pills |
| Micro | 11/14 | 500, +2% tracking, small-caps-like | domain tags, section labels ("LIVE DEBATES") |
| **Numeric** | any | 500, **tabular lining** | split %, counts, ledger stats — numbers never dance on update |

- Weights capped at 600 — nothing shouts. Claim sentences are the only display-size text; if everything is big, nothing is (scan speed depends on this restraint). Body line length ≤ ~68ch via the 640px column. All sizes in relative units; layout survives 200% text zoom (§23).

---

## 21. Component Inventory (authoritative)

Format: **Purpose · Variants · States · Interaction · Accessibility.**

1. **ClaimCard** — Feed/search unit of a claim. · Variants: hero (Daily), standard, compact (positioned), archive ("still moving"), result. · States: pre-position, positioned, early-split, Day-2, loading-skeleton, offline-cached. · Interaction: card tap → Claim Page; embedded PositionSelector on pre-position variants. · A11y: single link target + separately focusable position buttons; claim sentence is the accessible name.
2. **PositionSelector** — The three-stance control. · Variants: stacked (claim page), segmented row (cards), selector-with-current (change flow). · States: idle, focused, selected(stance), locked(visitor-converted), queued-offline, error-retry. · Interaction: one tap commits (logged-in) or triggers visitor reveal; keyboard: arrows + Enter. · A11y: radiogroup semantics; stance names as labels; ≥48px targets; identical treatment of all three options (equal-dignity is testable here).
3. **HiddenSplit** — Pre-commit placeholder bar. · Variants: card, page. · States: static only. · Interaction: none (deliberately inert). · A11y: `aria-hidden` decorative + adjacent text "The split is hidden until you take a position."
4. **SplitReveal** — The signature bar. · Variants: percent (n≥25), early-counts (n<25), first-position, recap (final). · States: animating, settled, with-movement-line, frozen(under review), error-retry. · Interaction: none on bar; movement line links to snapshot history. · A11y: live-region announcement of full result; per-segment text labels + fill patterns (not color-only); reduced-motion renders instantly.
5. **ContextBrief** — 2–4 sourced bullets. · Variants: full, preview(first bullet + expander), footer-collapsed. · States: default, corrected(banner + version link). · Interaction: expander; SourceLink per bullet. · A11y: list semantics; correction banner precedes content in reading order.
6. **SourceLink** — Named source pill. · Variants: inline (bullet-end), chip (evidence), favicon-row (review queue). · States: default, visited, dead-link(archived). · Interaction: opens new tab with external glyph announced. · A11y: accessible name = "{publisher}: {title}, opens in new tab."
7. **DebateMap** — Post-commit two-side container. · Variants: tabs (mobile), two-column (≥1024), visitor-locked. · States: default, empty-side (curated only), loading. · Interaction: SideSelector; row expansion; show-more. · A11y: tabs with proper tab semantics; column landmarks on desktop.
8. **SideSelector** — "The case for / The case against." · States: for-active, against-active. · Interaction: tap/swipe-free (no gesture-only paths); arrow keys. · A11y: no numbers in labels (UX flag #1); selected state announced.
9. **ArgumentCard/Row** — One argument. · Variants: map row (collapsed/expanded), teaser (text-only, pre-commit — no counts, no author stats), sheet (full), counter (indented), curated (badge + attribution), removed-stub, own (edit-window/frozen). · States: backed, needs-source(amber chip), disputed-evidence, new(exploration tick). · Interaction: expand; chips; EndorsementBar; counter action. · A11y: argument text first in reading order; signal line as a single labeled group ("Backed 214, Convincing 89 of which 31 from the other side, Moved 12").
10. **EvidenceChip** — Attached example. · Variants: verified, user-submitted, disputed. · States: default, pressed(→ Example Sheet). · A11y: state word in the accessible name, never color-only.
11. **EndorsementBar** — Convincing · Strong evidence (+ overflow: needs a source, report). · States: idle, active(filled), disabled(no evidence → Strong evidence hidden not disabled), visitor-locked. · Interaction: toggle chips; optimistic with revert. · **A11y & audit: contains no MOVED ME control — by definition of the component** (design-review checkpoint).
12. **CoSignControl** — "Back this / Backed ✓." · States: available(own side), backed, limit-reached(3), hidden(other side), visitor-locked. · Interaction: tap toggles with confirm copy; unback in overflow. · A11y: state change announced ("Backed — you'll be notified of counters").
13. **StaircaseModule** — Post-reveal co-sign prompt. · Variants: three-args, fewer-args. · States: active, collapsed-forever. · Interaction: card tap = co-sign; "None of these" → composer; quiet Skip. · A11y: skip focusable and labeled plainly ("Skip — your position stands on its own").
14. **Composer** — Argument sheet. · Variants: standard, counter-context, complicated-side-select. · States: empty, typing, ≤40-left, at-limit, duplicate-blocked, similar-panel, evidence-step, publishing, draft-saved. · Interaction: per UX §10. · A11y: counter announced at thresholds via polite live region; error text linked to field.
15. **DuplicateIntervention** — Match sheet/panel. · Variants: blocking, suggestion. · Interaction: Back-it-instead (primary), Mine-is-different (secondary), discard-draft confirm. · A11y: match argument fully readable before choice.
16. **PositionChangeSheet** — Two-step change + attribution. · States: step-1(selector, current marked), step-2(what-moved-you radio list), no-eligible, rate-limited. · Interaction: UX §11 exactly; Skip equal-weight. · A11y: step change announced; radio semantics; **no element in step 2 is labeled "Moved me" — it is a question, not a button.**
17. **PositionChangeEntry / LedgerEntry** — Ledger rows. · Variants: position (with optional vindication line), mind-change (old→new + attribution link), argument (quote + signal line). · States: claim-withdrawn chip, retracted(owner-view tombstone). · A11y: entry type announced first ("Changed position: …").
18. **StancePill** — "You: Agree · since 12 Mar [Update]". · States: each stance, updated-today(rate-limit note on tap). · A11y: update is a real button inside a labeled group.
19. **ActivityRow** — Notification row. · Variants: countered(batch), moved-someone, co-signs(digest), split-moved, recap, moderation. · States: unread(dot + surface), read. · A11y: unread state in accessible name.
20. **ShareCard** (template, not in-app UI) — Variants: blurred-split claim, argument, sprint-map. · Rules: decorative fixed-pattern hidden bar (never real data), no sharer identity, wordmark token small. Text-fallback variant when image generation fails.
21. **EndOfSessionMarker** — Bounded-session close. · Variants: normal, fully-on-record, degraded-supply. · A11y: heading-level landmark so screen-reader users also get closure.
22. **CorrectionBanner / WithdrawalNotice** — Claim integrity states. · Interaction: version-history link; withdrawal reason always visible. 
23. **ReviewQueueItem** (INT-01) — Candidate card. · Variants: standard, conflict-tier(warning border + divider group), flagship-starred. · States: unreviewed, approved, rejected(reason), flagged, expired. · Interaction: A/R/F/S + J/K/O/Z keys (UX §16); explicit tap targets on mobile. · A11y: full keyboard operability is the primary requirement; gate ticks have text equivalents.
24. **RiskBadge** — Per-gate indicator (rubric/steelman/sources/risk). · Variants: pass-tick, escalate-amber(+one-line reason), conflict-tier. · A11y: reason text always rendered, badge never bare.
25. **ModerationItem** (INT-02) — Escalation card. · Variants: report, appeal, auto-handled(log). · States: SLA-clock tiers, decided. · Interaction: D/X/1–5 ladder keys with required reason field. · A11y: reported content quoted with clear boundary from UI copy.
26. **Toast/Banner** — System feedback. · Variants: success, info, error, offline. · Rules: one at a time, 4s, never covers the position bar; errors persist until dismissed.

---

## 22. Microcopy System

**Language rules:** English-native, plain, concrete; second person; present tense; no exclamation marks anywhere in the product; no praise adjectives ("great choice!" is banned); numbers stated plainly; uncertainty framed as legitimate ("It's complicated" is a position, not an apology). The product never scolds, never gushes.

**Terminology (canonical):** claim · position ("take a position", never "vote") · split · argument ("reason" in prompts; "argument" in structure) · evidence · source · **back / backed** (user-facing verb for co-sign) · convincing · moved ("Moved 12" · "moved by") · update your position (never "flip", "switch", "admit") · your record / the ledger ("On record since…").

**Canonical strings (the moments that matter):**
| Moment | Copy |
|---|---|
| Pre-position prompt | "Where do you stand?" |
| Hidden split | "The split is hidden until you take a position." |
| Reveal (minority) | "You're with the 34%." |
| Reveal (majority) | "You're with the majority — 61% agree." |
| Reveal (first) | "Position #1. The debate starts with you." |
| Early debate | "Early debate — 11 on record: 6 agree · 3 disagree · 2 it's complicated." |
| Visitor reveal banner | "This is where 1,204 people on record stand. Your position isn't counted yet." · CTA: "Put it on record" |
| Co-sign prompt | "Which of these is closest to your reason?" · skip: "Skip — your position stands on its own" |
| Co-sign confirm | "Backed. We'll tell you if it's countered." |
| Argument prompt | "Add your reason — one sentence." · placeholder: "Because…" · guidance: "One specific reason beats three vague ones — name a mechanism, a case, or a number." |
| Duplicate (blocking) | "This reason is already on the map." · [Back it instead] · [Mine is different] |
| No evidence found | "No documented example in the library yet. You can publish without one, search the library, or submit a source." |
| Publish confirm | "On the map." |
| Position change confirm | "Update your position to It's complicated?" · after: "Updated. Your ledger keeps both." |
| Attribution | "What moved you?" · option sublabel: "Something else — off-platform, or my own reflection" · "Skip" |
| Mind-change ledger entry | "Changed position: Agree → It's complicated · 12 Jul" · "Moved by: '{argument teaser}'" |
| Vindication line | "Community has moved 9 pts toward you." |
| End of session | "That's everything for today. Tomorrow's claim arrives at 8:00." · variant: "You're fully on record. New claims tomorrow." |
| Empty ledger | "Nothing on record yet. Today's claim is a good place to start." |
| Notification permission | "One notification a day — the Daily Claim. Plus replies to your own debates. No noise." · [Turn on] · [Not now] |
| Correction banner | "Context updated 14 Jul: bullet 2 corrected — view history." |
| Withdrawal notice | "This claim was withdrawn on 14 Jul: the framing did not treat both sides fairly. Positions taken remain on participants' records." |
| Offline position | "You're offline — your position will be recorded when you're back." |

---

## 23. Accessibility

- **Target: WCAG 2.2 AA** across all user-facing surfaces; internal tools AA for keyboard/contrast at minimum.
- **Keyboard:** complete traversal of every flow in UX §2 without a pointer; sheets trap focus and restore it on close; the review queue and moderation inbox are keyboard-first by design (UX §16–17); skip-to-content link on every screen.
- **Screen reader:** claim pages read in order claim → context (with sources) → participation → position controls; the reveal announces via polite live region with full numbers; stance selection states announced; ledger entries announce entry type first; decorative HiddenSplit hidden from the tree.
- **Color independence (hard requirement, tested):** commit-to-reveal and the Debate Map fully comprehensible in grayscale — stances always render as text labels + distinct fill patterns on split segments (solid / diagonal hatch / dot) + hue; evidence/warning states carry words or glyphs, never hue alone.
- **Focus visibility:** §18 ring, all elements, both themes-to-be.
- **Reduced motion:** §18; the reveal loses animation, never information.
- **Touch:** ≥44×44px all targets; ≥48px for position buttons; 8px minimum spacing between stance options (fat-finger protection on the product's most consequential tap).
- **Type scaling:** 200% zoom without horizontal scroll or content loss; all type in relative units; the 280-char composer remains fully usable at 200%.

## 24. Responsive Behavior

- **XS (≤360):** claim-page position buttons remain stacked full-width (already the base); display type steps down one level (Display→Title scale); card padding 12; teaser rows truncate at one line; split percentages remain, labels may abbreviate ("compl." never — wrap instead; the middle stance is never visually shortchanged).
- **S (361–599, baseline):** as specified throughout UX §5–§15.
- **M (600–1023):** content column centers at 640px; sheets become 560px centered modals with scrim; Debate Map stays tabbed (two columns at this width would break the ≤68ch argument measure); feed unchanged (never multi-column — the ritual is a single path); Activity/You gain two-pane potential but V1 keeps single-pane (scope discipline).
- **L (≥1024):** top-bar navigation replaces the bottom bar; **Debate Map renders both sides side-by-side** (2×508px), side tabs disappear, the "default to opposing side" rule becomes "opposing column receives initial focus order"; the sticky position bar becomes an in-flow module (desktop has no thumb zone); review queue shows the two-pane list+detail layout with the full keyboard model; share sheets become popovers.
- Rule of thumb encoded: breakpoints change *arrangement*, never *content or hierarchy* — nothing appears on desktop that mobile lacks (P1–P7 apply at every width).

## 25. Design Acceptance Criteria (testable)

- **DAC-1 No pre-commit leakage:** render every pre-position surface (feed card, claim page, teasers, OG image, SERP snippet, share cards) for a claim with a known 80/20 split; zero directional elements present (percentages, per-side counts, per-argument counts, rank marks). Includes page source inspection.
- **DAC-2 Daily Claim prominence:** in a 5-second test on the Today screen, ≥80% of first-time viewers identify the Daily Claim as the primary item; measured hero-card area ≥1.4× any supporting card.
- **DAC-3 One-thumb positioning:** on 375×812, position buttons sit fully within the bottom 40% of the viewport on the claim page (sticky bar) and are operable without grip change; targets ≥48px.
- **DAC-4 Equal stance dignity:** the three options share identical height, type size/weight, and pre-selection treatment on every surface; "It's complicated" is never last in stacked order, never reduced, never gray; verified by side-by-side screenshot audit of all PositionSelector variants.
- **DAC-5 Two-minute scan:** a first-time tester on mobile reaches and reads top-3 arguments of BOTH sides within 120s and ≤3 taps from the reveal, with evidence chips visible on every evidenced row. Pass = 4 of 5 testers.
- **DAC-6 Staircase skippability:** after position + skipping every prompt, the claim page and feed show zero pending-task affordances, badges, or incomplete states for that claim; the dismissed module never re-renders (verified across sessions).
- **DAC-7 MOVED ME is not a button:** automated audit of the component tree finds no interactive element labeled/iconed as "moved"; persuasion events can only be created through PositionChangeSheet step 2 (walkthrough test).
- **DAC-8 Source visibility:** every context bullet and every evidence chip exposes a named publisher without interaction and reaches the source in exactly one tap; dead links render the archived state, never a silent 404.
- **DAC-9 Bounded session:** scrolling past the last feed section renders the end marker and no further content loads by any means (scroll, focus, resize); verified with network inspection.
- **DAC-10 Mobile usability:** all 22 flows (UX §2) completable on 360px width; no horizontal scroll anywhere at 100% and 200% zoom.
- **DAC-11 Keyboard:** all user flows + the full review-queue keyboard model (A/R/F/S/J/K/O/Z) operable pointer-free; focus visible at every stop; sheets trap and restore focus.
- **DAC-12 Reduced motion:** with the OS setting active, the reveal, sheets, and staircase transitions render instantly with identical information; no element animates except opacity ≤120ms.
- **DAC-13 Grayscale comprehension:** commit-to-reveal and Debate Map screenshots in grayscale remain fully interpretable (stance labels + patterns carry the encoding).
- **DAC-14 Calm audit:** a recorded 10-minute session contains no animation not mapped to new information, no red numeric badges, no exclamation marks, and no notification prompt before the designed moments.

---
---

# FINAL OUTPUT

**A. The 7 binding UX principles.** P1 Commit before the crowd (no directional data pre-position, anywhere, verifiable). P2 Two minutes to both sides (top-3 per side in ≤120s, ≤3 taps). P3 The tap is a complete contribution (staircase is invitation; skips leave no debt). P4 Calm by construction (bounded sessions; every animation maps to information; no engagement furniture). P5 Changing your mind is a dignified act (change flow as polished as first positioning; no shame, no theater). P6 Evidence one tap away, honestly labeled (named sources everywhere; "no evidence" is a designed state). P7 One thumb runs the loop (core actions in the thumb zone, ≥44px, no hover-dependence).

**B. Final mobile navigation architecture.** Three persistent bottom-bar destinations — **Today · Activity · You** — with unread shown as a dot, never a number. Search demoted to a header icon on Today (claims-only, low frequency — it did not earn a tab). Settings behind You. Sheets are routed URLs; back closes the top sheet first; notification taps deep-link with a persistent Today affordance; logged-out surfaces carry no app chrome (wordmark + How it works + Join). Desktop swaps the bottom bar for a slim top bar; nothing else changes.

**C. Exact pre-position Claim Page hierarchy.** (1) Meta header: domain · status · share · overflow. (2) Claim sentence, display type. (3) Context brief: 2–4 bullets, each with a named source pill (new tab). (4) Directionless participation line ("1,204 on record"). (5) Teaser arguments, both sides, text-only — no counts, no ranks, no author stats. (6) Blurred map region with "The debate opens when you take a position." (7) Sticky bottom position bar: Agree / It's complicated / Disagree, stacked, equal. Nothing directional anywhere, including page source.

**D. Exact post-position Claim Page hierarchy.** (1) Header. (2) Claim sentence. (3) Split module: labeled/patterned bar, percentages (or early counts under n=25), "You're with the 34%," movement line, total. (4) Stance pill "You: Agree · since 12 Mar [Update]" — the only position-change access point. (5) Staircase module (until used or skipped — then gone forever). (6) Debate Map: side tabs (opposing side default), top-3 rows per side, show-more, counters depth-1. (7) Footer: collapsed context brief · share · claim history.

**E. Debate Map mobile interaction model.** Sticky side tabs ("The case for / The case against," no numbers) under the split; default tab = the side opposing the user's stance; exactly top-3 rows per side initially — each row one glance: full argument text → author/curated line → evidence chips → quiet signal line ("Backed 214 · Convincing 89 — 31 from the other side · Moved 12") → collapsed counters. Expand in place; counters indent one level, hard depth-1; [Show more] to 20 then paginate. Endorse chips (Convincing / Strong evidence) on expanded rows; Back-this only on own side; Moved is display-only text opening an aggregate panel. Scan contract: ~110 seconds, 2 taps, verified by DAC-5.

**F. Effort staircase interaction model.** Position → the reveal is itself the completion payoff. Then one inline module: "Which of these is closest to your reason?" (top-3 same-side, tap = backed) with "None of these — add yours" → composer, and a quiet equal-dignity Skip that collapses the module permanently for that claim. Composer → optional evidence step with "Publish without evidence" at equal weight. Feedback is state-change, not celebration ("Backed." / "On the map."). No progress meters, no completion percentages, no pending-task debt for skippers — escalation is voluntary at every step and the permanent map affordances remain the pressure-free path.

**G. Position-change and persuasion-attribution flow.** Stance pill → [Update] → step 1: three-option selector with current marked → [Update position] (the change commits here; attribution never holds it hostage) → step 2 in the same sheet: "What moved you?" — radio list of up to 5 *viewed* other-side arguments + "Something else — off-platform, or my own reflection" + equal-weight Skip → single selection → toast "Updated. Your ledger keeps both." → ledger entry "Changed position: Agree → It's complicated," plus "Moved by: {argument}" only when attributed. Selecting an argument is the sole origin of a persuasion event; MOVED ME exists nowhere as a button (ratified; enforced by DAC-7 and the EndorsementBar's definition).

**H. Design philosophy in one paragraph.** Agora's interface is a quiet instrument: ink on paper-warm neutral, where nearly everything — chrome, buttons, navigation — is monochrome, and color appears only where it means something: the three stances, evidence, and system states. Hierarchy is built from type scale and space, not decoration; the single designed flourish is the split reveal, because that is the moment information arrives. The product feels credible to an analyst and effortless to a curious amateur not by dressing as a newspaper or a game but by refusing both costumes: no engagement furniture, no reward theater, no academic apparatus — just claims set large, sources one tap away, and a record that accumulates with dignity. Because no brand color or mythology is woven into the system, the working name can be replaced later by swapping a single wordmark token — the identity lives in the mechanic, not the logo.

**I. Semantic color system.** Ink UI on warm neutral: `bg #FAFAF7`, `surface #FFFFFF`, sunken `#F2F2EE`, text `#1B1E22` / `#50555C` / `#83888F`, borders `#E3E3DD`/`#EDEDE8`, accent = interactive ink `#24272B`. Meaning colors: **Agree violet `#5A52C7`**, **Disagree terracotta `#B0562B`**, **It's complicated dusk teal `#2E7466`** — a non-partisan triad of matched weight (no US red/blue, no green/red valence), each with tint + on-tint pairs; **evidence steel-blue `#3D5F8F`**; success `#2E7D4F`, warning `#9A6700`, destructive `#B3261E`, focus `#1D4ED8`. All AA-verified pairings; stances always doubled by labels and patterns. Dark mode deferred to fast-follow; everything ships as tokens so it costs a token sheet, not a redesign.

**J. Typography strategy.** One variable humanist-grotesque sans for everything (criteria-bound: large x-height, I/l/1 distinction, true tabular lining numerals, 400–600 weights, open license — Inter/Geist/General Sans/Public Sans class), no display serif (newspaper avoidance is a tone requirement). Scale: Display 26–30 for claim sentences only, Title 20–22, Heading 17, Body 15–16/22–24, Meta 13, Micro 11 tracked; weights capped at 600; all numerals tabular so splits and stats never jitter; 640px reading column keeps arguments ≤68ch; relative units throughout for 200% zoom.

**K. Authoritative component list.** ClaimCard · PositionSelector · HiddenSplit · SplitReveal · ContextBrief · SourceLink · DebateMap · SideSelector · ArgumentCard/Row · EvidenceChip · EndorsementBar · CoSignControl · StaircaseModule · Composer · DuplicateIntervention · PositionChangeSheet · LedgerEntry (incl. PositionChangeEntry) · StancePill · ActivityRow · ShareCard templates · EndOfSessionMarker · CorrectionBanner/WithdrawalNotice · ReviewQueueItem · RiskBadge · ModerationItem · Toast/Banner. (Full variant/state/interaction/a11y specs in §21.)

**L. The 10 most important design risks.** (1) The pre-position claim page may feel information-thin ("where's the debate?") and bounce visitors before the first tap — the teaser rows carry heavy load. (2) The reveal must land as *informative satisfaction*; if testers describe it as a slot machine or as flat, the signature moment fails both directions. (3) Defaulting the map to the opposing side is intellectually right but may read as argumentative friction to some users. (4) "It's complicated" placement in segmented (middle) vs. stacked (middle) layouts risks subtle prominence asymmetry across surfaces. (5) The monochrome-ink system depends entirely on typographic discipline — one crowded surface (the argument row's signal line is the danger zone) collapses the calm. (6) The 640px single column may feel sparse on desktop; resisting the urge to fill it with rails is a standing battle. (7) The attribution sheet is one step past the emotional moment (the change) — drop-off there starves Kill Test 2; the step must feel like part of the change, not a survey. (8) Duplicate-intervention's blocking sheet may read as rejection to first-time writers despite the co-sign framing. (9) Web-push permission UX has one shot; a mistimed pre-prompt caps the ritual's reach for months. (10) Share cards must create curiosity without the split — if the blurred bar reads as broken rather than withheld, the acquisition loop's centerpiece misfires.

**M. PRD contradictions / behaviors exposed by design.** (1) **PRD §9.1 amendment recommended:** side-tab/column headers should NOT display side share — it duplicates the split module and conflates share-of-positions with strength-of-case; designed without numbers, needs ratification. (2) **PRD §5.3 parameter amended by founder decision:** flagship auto-select cutoff moves from 21:00 UTC to **21:00 Europe/Paris** (DST-anchored; publication stays 00:00 UTC; the variable 3–4h gap is sufficient) — PRD should be updated to match. (3) Attribution eligibility "viewed" is pinned to row-expanded/sheet-opened (`argument_viewed`), not scroll-past — consistent with PRD §18 but now explicit because it defines the option list. (4) Teaser arguments render without rank marks or counts — a P1-tightening interpretation of PRD §2.2's "teaser argument per side," confirmed as intended.

**N. Founder decisions required before technical architecture.** (1) **Ratify the two PRD amendments in M** (map headers without side-share numbers; 21:00 Europe/Paris cutoff) so the PRD can be updated before engineering reads it. (2) **Dark mode deferral** — confirm light-only V1 (tokens dark-ready). (3) **Typeface license posture** — confirm open-license-only for V1 (recommended; avoids licensing entanglement before the naming phase), or open a small type budget now. (4) **Beta domain decision** — share cards, OG images, and SEO surfaces need a real URL to be designed against and for engineering to provision; the working name may appear on private-beta surfaces per your decision, but the domain string itself must be chosen (even a neutral placeholder domain) before technical architecture.

---

**STOP. UX_ARCHITECTURE.md and DESIGN.md complete. No technical stack chosen, no production code, no implementation tasks. Awaiting founder review — in particular the M ratifications and N decisions — before technical architecture.**
