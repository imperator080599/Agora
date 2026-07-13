# API_CONTRACTS.md — Agora V1 Route & Server-Action Contracts

**Version:** 1.0 · 2026-07-13
**Conventions:** All contracts are Next.js route handlers (RH) or server actions (SA) — no public API (ADR). Every input validated with a shared Zod schema from `packages/contracts`; every output typed from `packages/contracts` (public vs internal barrels). Auth = Supabase JWT verified server-side → `resolve_actor()`. Rate limits per-actor unless noted (per-IP for anonymous). Errors: typed error codes, no stack/PII leakage. Test owner column references TEST_PLAN suites.

## 1. The two claim DTOs (structural leakage prevention)

```ts
// packages/contracts/public/claim.ts — the ONLY claim type importable by public surfaces
type ClaimPublicView = { id; slug; sentence; domain; tier; status: {phase; closesInH?};
  context: {bullets: {text; sources: {publisher; title; url}[]}[]; correctedAt?};
  participationTotal: number;            // directionless
  teasers: {for?: {text}; against?: {text}};  // text-only, no counts/authors
  withdrawn?: {reason; at} };

// packages/contracts/internal/claim.ts
type RevealedClaimView = ClaimPublicView & { split: SplitPercent | SplitEarlyCounts;
  movement; yourStance; debateMap: RankedArgumentView[]; staircase?: … };
```
**There is no universal Claim DTO with optional split fields — enforced four ways:**
1. **Type-level test:** `Extract<keyof ClaimPublicView | DeepKeys<ClaimPublicView>, 'split'|'agreeN'|'disagreeN'|'complicatedN'|'movement'|'rank'|'cosignCount'|'movedCount'> extends never` must compile to `true` (T-CR-1).
2. **Constructor discipline:** both views built by explicit field-picking factories (`toPublicView(row)`, `toRevealedView(row, stance)`); object spread from DB rows is lint-banned in `contracts` factories.
3. **Import boundary:** ESLint boundaries — files under `app/(public)` and the OG/sitemap/feed-card renderers may import from `packages/contracts/public` only; importing `internal` there fails CI.
4. **Route manifest:** every RH/SA is registered in `contracts/manifest.ts` with `exposure: 'public'|'authed'|'admin'` and its response type; a build-time script diffs the manifest against the filesystem (new unregistered route = CI failure), and T-CR-2 fuzzes every `public` route against the seeded leakage fixtures. A generic/internal serializer therefore *cannot* be returned publicly without failing two independent gates.

## 2. Contract inventory

| ID | Name (kind) | Caller | Auth / Authz | Input (Zod) | Output type | Tx | Idempotency | Rate limit | Events | Errors (typed) | Test |
|---|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | `GET /claim/[slug]` SSR (RH) | public | none → public; authed → stance-gated | slug | `ClaimPublicView` \| `RevealedClaimView` | read | — | CDN for public variant | `analytics.claim_viewed` | 404, 410(withdrawn view) | T-CR-2/3 |
| C-02 | `GET /` Today SSR | public/authed | optional | — | `FeedView` (cards use Public/Revealed per stance) | read | — | — | — | — | T-FD-2 |
| C-03 | `takePosition` (SA) | authed | positioned? reject dup | {claimId, stance} | `RevealResult` (split payload) | **`record_position()` tx** | server no-op on same stance | 30/h | `position.created` | CLAIM_NOT_OPEN, ALREADY_POSITIONED | T-AO-1, T-CR-10 |
| C-04 | `POST /api/claims/[id]/visitor-reveal` (RH) | anonymous | none | {} | `SplitPayload` | read | — | 10/min/IP + bot filter | `analytics.split_revealed(anon)` | 404 | T-CR-11 |
| C-05 | `convertVisitorPosition` (SA) | just-authed | pending marker | {claimId, stance, sawSplitFirst:true} | `RevealResult` | record_position(pre_reveal=false) | dup-safe | signup flow | `position.created` | — | T-CR-11 |
| C-06 | `GET /api/claims/[id]/debate` (RH, in-page fetch) | authed+positioned | stance required | claimId, side?, page? | `RankedArgumentView[]` | read | — | 60/min | `analytics.argument_viewed`(impressions) | NOT_POSITIONED | T-RK-1 |
| C-07 | `changePosition` (SA) | authed | owner | {claimId, newStance} | `ChangeResult{positionEventId}` | record_position tx | 24h rule inside fn | fn-enforced | `position.changed` | RATE_LIMITED_24H | T-AO-2 |
| C-08 | `getAttributionOptions` (SA) | authed | owns positionEvent | {positionEventId} | `AttributionOption[]` (≤5 + else/skip) | read (argument_open join) | — | — | `analytics.prompt_rendered` | STALE(>1h) | T-PE-2 |
| C-09 | `attributePersuasion` (SA) | authed | owner | {positionEventId, argumentId \| 'external' \| 'skip'} | `{ok}` | **`attribute_persuasion()` tx** | UNIQUE(position_event_id) → idempotent success | 1/claim/7d in fn | `persuasion.recorded` | INELIGIBLE_* codes | T-PE-* |
| C-10 | `cosign` / `uncosign`, `endorse`/`unendorse` (SA) | authed+positioned | side-match in fn | {argumentId, type?} | `{state}` | cosign/endorse fns | natural-key | 60/h | `argument.cosigned` | SIDE_MISMATCH, LIMIT_3, NEEDS_EVIDENCE(strong_ev) | T-AR-1 |
| C-11 | `composeArgument` (SA) | authed+positioned | rate+account-age gates | {claimId, side?, text≤280, counterOf?} | `ComposeResult{published \| duplicates[]}` | insert + embed check | draft-token | 5/day, 2/claim | `argument.created` | DUPLICATE_BLOCKED, FROZEN_LIMITS | T-AR-2/3 |
| C-12 | `editArgument`, `deleteArgument` (SA) | author | freeze rules in trigger | {argumentId, text?} | `{ok}` | update (column-gated) | — | — | `argument.deleted` | FROZEN | T-AR-3 |
| C-13 | `suggestEvidence`, `searchEvidence` (SA) | authed (composer ctx) | — | {draftText, claimId} / {q} | `EvidenceSuggestion[]` (may be **empty ⇒ "none found" state**) | read (vector) | — | 20/min + daily AI quota | `analytics.example_viewed` | — | T-SE-3 |
| C-14 | `attachEvidence`, `submitSource`, `disputeSource` (SA) | authed | author for attach | {argumentId, exampleId} / {url, summary} / {exampleId, reason} | `{state}` | `create_example()` tx (edge mandatory) | URL canonical dedupe | 10/day submit | `evidence.disputed` | INVALID_URL, DUPLICATE_URL | T-SE-1/2/4 |
| C-15 | feed assembly (server fn behind C-02) | server | — | actor, now | `FeedView` | read | — | — | — | — | T-FD-1..3 |
| C-16 | `reviewDecision`, `setFlagship` (SA, admin) | founder | admin role + `admin_ops` | {candidateId, decision, reasonCode?/note?} | `{queueState}` | insert editorial_decision | UNIQUE(candidate) | — | `candidate.decided` | ALREADY_DECIDED | T-ED-1 |
| C-17 | `correctClaim`, `withdrawClaim`, `rescheduleClaim` (SA, admin) | founder | admin | versioned payloads | `{ok}` | claim_transition fns | state guards | — | `claim.withdrawn` | INVALID_TRANSITION (sentence edits impossible: no such field) | T-CL-1 |
| C-18 | `requestExport`, `requestDeletion` (SA) | authed | self only | {} (+typed confirm for delete) | `{jobId}` | tombstone insert + enqueue | tombstone unique | 1/day | `deletion.requested` | — | T-DEL-1 |
| C-19 | `createShareCard` (SA) | any | — | {kind, claimId/argumentId} | `{url, imageUrl}` | share_event insert | token | 30/h | — | — | T-SH-1 |
| C-20 | `GET /og/[kind]/[id]` (RH) + sitemap/robots (RH) | public/CDN | none | ids | image / XML — **input type `ClaimPublicView` only** | read | cached by (id, claim_version) | CDN | — | — | T-CR-6/8 |
| C-21 | onboarding: `setArenas`, `getSprintClaims` (SA) | authed | self | {arenas≥2} | `SprintSet` | read/update | — | — | — | — | T-OB-2 |
| C-22 | `GET /u/[pseudonym]` SSR | public | none | pseudonym | `LedgerView` (public fields only) | read | — | — | — | 404(deleted) | T-LG-1 |
| C-23 | `GET /search` SSR | public/authed | optional | {q, domain?, mine?} | `ClaimSearchResult[]` (cards per stance rules) | read | — | 30/min | — | — | T-SR-1 |
| C-24 | moderation actions (SA, admin): `triageCase`, `applySanction`, `resolveDispute`, `freezeSplit` | founder | admin | typed per action | `{caseState}` | moderation fns + audit row | case-state guards | — | `moderation.*` | — | T-MO-2 |
| C-25 | settings: `updateNotificationPrefs`, `updateTimezone`, `renamePseudonym` (SA) | authed | self | typed | `{prefs}` | update | — | rename 1/90d | — | RENAME_COOLDOWN | — |
| C-26 | INT-07 ops report (RH, admin) | founder | admin | week? | `OpsReport` (frozen metric SQL only) | read | — | — | — | — | T-AN-1 |
| C-27 | auth callback / signout (RH) | Supabase redirect | state param | — | redirect | — | — | — | — | — | T-OB-1 |
| C-28 | `report` (SA) | authed | — | {targetKind, targetId, category, note?} | `{ok}` | report insert + case cluster | (reporter,target) unique/day | 10/day | `report.filed` | — | T-MO-1 |

Notes: every SA validates ownership *inside* the domain function, not just in the handler; every RH sets explicit `Cache-Control` (public variants CDN-cacheable; everything stance-dependent `private, no-store`); all deep links built from `PUBLIC_APP_URL` (D20).
