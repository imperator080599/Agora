# TEST_PLAN.md — Agora V1 Test Execution Plan

**Version:** 1.0 · 2026-07-13
**Fixture world (shared by all levels):** deterministic seed — the leakage claim `FIX-83` (split 83/11/6 with distinctive totals 8311/1106/601), claims in every state/tier, curated seeds, evergreen bank sample, actors: `alice` (positioned agree), `bob` (unpositioned), `casey` (quarantined), `dana` (complicated), founder-admin; frozen golden-set candidates. Fixtures live in `packages/fixtures` and load into local dev, CI test DB, and Playwright identically.
**Failure behavior:** every suite below is fail-closed — a red release-blocking suite blocks merge (PR) or deploy (pre-deploy stage); nightly failures page via Sentry alert + ops report line.

## 1. Release-blocking suites

### T-CR — Commit-to-reveal (levels: type, unit, integration, E2E)
| # | Test | Level / fixture | Action → assertion |
|---|---|---|---|
| T-CR-1 | JSON key absence | type-level + unit | `ClaimPublicView` deep-key check compiles; factory output for FIX-83 contains no denylist key (split/counts/movement/rank/cosignCount/movedCount) |
| T-CR-2 | Public route fuzz | integration | every `manifest exposure='public'` route called anon → body scanned (structure + regex `8311|1106|601|83%|11%`) → zero hits; unregistered route in filesystem → fail |
| T-CR-3 | SSR HTML & page source | E2E | claim page as anon and as `bob` (authed, unpositioned) → full HTML source scan clean; hydration payload (`__NEXT` data/RSC stream) scanned too |
| T-CR-4 | Authed-unpositioned feed/search cards | E2E | Today + /search as `bob` → clean |
| T-CR-5 | Post-position presence (over-redaction guard) | E2E | as `alice` → split visible, values correct (83/11/6) |
| T-CR-6 | OG metadata + OG image | integration | `/og/claim/FIX-83` metadata + generated card: renderer input type is `ClaimPublicView` (compile), pixel/text scan of card for digits → clean |
| T-CR-7 | Structured data / JSON-LD | integration | claim page JSON-LD scan clean |
| T-CR-8 | Sitemap/robots | integration | sitemap has URLs+lastmod only; WITHDRAWN absent; /search noindexed |
| T-CR-9 | Cache behavior | integration | public variant: `Cache-Control` public/CDN, body clean; revealed variant: `private, no-store`; CDN-cached response never contains stance-dependent bytes (assert same body for two different authed-unpositioned users) |
| T-CR-10 | Reveal↔persistence binding | integration | force `record_position` failure (constraint sabotage in test) → response has no split payload + retry error (AC-2) |
| T-CR-11 | Visitor flow truth | E2E | anon tap → split shown, `split_current` unchanged; signup convert → `position_event.pre_reveal=false`; authed tap path → `pre_reveal=true` (AC-3) |

### T-AO — Append-only positions (SQL + integration)
| # | Test | Action → assertion |
|---|---|---|
| T-AO-1 | UPDATE denied | as each app role: `UPDATE position_event …` → error (grant) and trigger error via definer probe |
| T-AO-2 | DELETE denied | same for DELETE; also persuasion_event, consent_record, audit_log, editorial_decision, split_snapshot, claim_version |
| T-AO-3 | History reconstruction | drive agree→complicated→disagree via C-03/C-07 → 3 events with correct kind/prior; ledger render matches; `position_current` = disagree |
| T-AO-4 | Concurrent changes | two parallel `changePosition` txs same (actor,claim) → exactly one wins, second gets no-op/RATE error; counters consistent |
| T-AO-5 | Projection reconciliation | corrupt `split_current` in test → reconciliation job restores from events + emits drift alert |

### T-PE — Persuasion integrity (integration; fixtures: alice with opposing-arg opens)
Cases (each asserts **no `persuasion_event` row** unless marked ✓): 1 no prior position → INELIGIBLE · 2 no position change (attribute on `created` event) → INELIGIBLE · 3 same-side argument → INELIGIBLE · 4 **impression only** (analytics row, no `argument_open`) → not offered by C-08 *and* rejected by fn · 5 opened **after** change → rejected · 6 opened **before prior position** (t < t0) → rejected · 7 duplicate attribution → second call idempotent-success, still one row (UNIQUE) ✓ · 8 skip → no row, no re-prompt (prompt_rendered dedupe) · 9 off-platform → no row, trigger=external recorded · 10 deleted (tombstoned) argument → rejected · 11 race: attribution vs concurrent further change → binds to named positionEventId only ✓ · 12 (T-PE-12) route-manifest + DOM scan: no MOVED-labeled interactive element anywhere; only C-09 reaches `attribute_persuasion` (static call-graph check).

### T-SE — Source edge (SQL + integration)
1 direct `INSERT app.example` without edge (as web_backend) → blocked (only `create_example()` path exists; raw INSERT denied by grant) · 2 delete/tombstone source_document with citing example → RESTRICT + corrections workflow event · 3 suggestion path returns only library rows; empty result renders "none found" state (E2E) — **and the Evidence module import graph contains no text-generation dependency (static check)** · 4 pipeline seeding without verified source doc → stage FAIL artifact, never a published example.

### T-DEL — Deletion propagation (E2E + SQL, full graph)
Seed `dana` with positions/arguments/co-signs/endorsements/persuasion given+received/push sub/activity → `requestDeletion` → assert, in order: actor_map severed first (kill job mid-run in a variant → verify unlinkability already holds, job resumes); auth user gone; profile 404; splits recounted (T-AO-5 cross-check); arguments tombstoned + counters re-parented + co-signers notified; co-signs/endorsements removed → rank recomputed; persuasion rows orphaned-pseudonymous (or redacted if counsel switch on — both paths tested); snapshots unchanged; analytics individual rows gone; export bundle expired; tombstone completed + audit row. (AC-18)

### T-NC — Notification caps under concurrency
1 fire 6 push-eligible events in parallel for one actor → exactly ≤3 sends in `push_send_log` (atomic check-and-insert race test, 20 iterations) · 2 P0 exemption passes a 4th · 3 local-08:00 sweep: fixture actors in UTC+13, UTC−8, Paris → each gets exactly one flagship push at first local 08:00 inside the window · 4 dedupe keys: repeated counter events within 4h → one batched push.

### T-FD — Feed determinism (property + snapshot + mutation)
1 property: generate N random identical-state actor pairs (fast-check) → byte-identical ordering · 2 snapshot: fixture world → committed expected order; includes fallback ladder (kill LIVE supply → backlog → evergreen → still-moving) and end-marker variants · 3 mutation: flip each PRD §4.2 weight in test harness → snapshot must break (dead-formula guard).

### T-GS — Editorial golden set (release-blocking **for pipeline-affecting diffs**)
Frozen corpus (good/mush/bait/double-claim/unfair-valence/CONFLICT-blame/injection/entailment-traps, ≥60 cases at launch, grown monthly from founder REJECTs) → run gate battery with pinned models/prompts → expected PASS/FAIL/ESCALATE per case; tolerance: 0 misses on hard-fail classes (injection, blame-framing, electoral), ≤5% drift elsewhere; report includes per-stage token/cost capture (feeds ADR-012 calibration).

## 2. Supporting suites (blocking at PR level unless noted)
T-SP splits (early-counts boundary at 24/25; largest-remainder rounding; quarantine shadow fold) · T-AR arguments (side-match/limit-3, dup block/suggest/reject, 280+freeze, curated labeling) · T-RK ranking (formula vs hand-computed fixture; deterministic exploration slot same-day-same-slot; curated-cede at 5 co-signs; rank_version stamping) · T-CL claim lifecycle (transition guards; correction vs withdrawal AC-17; CONFLICT cap AC-15 incl. deferral) · T-ED editorial (decision uniqueness; graduation at 95%/200 + tripwire revoke; founder-minutes capture) · T-OB onboarding E2E (4 entry paths; arena min-2; sprint shortening) · T-LG ledger (entries, vindication line math from snapshots) · T-SR search · T-SH sharing/attribution · T-MO moderation (threshold formulas AC-19 from seeded events; SLA clocks) · T-AN analytics (frozen-metric hash check: computing a kill-test metric with non-registered SQL fails; taxonomy audit vs PRD §18) · T-PR privacy (export bundle contents; consent re-prompt) · T-AD audit-log coverage of admin actions · T-AX accessibility (axe on core surfaces; review-queue keyboard model; reduced-motion) · T-VR visual regression (ClaimCard/split/map states) · T-SEC route-authz matrix (every manifest route × 5 actor classes) + grant-matrix/SECURITY DEFINER/RLS audits (ACCESS_CONTROL §5) + dependency scan (no tracker SDKs, no LLM SDK in forbidden modules).

## 3. CI stages

| Stage | Runs | Suites |
|---|---|---|
| Every commit (push) | ~2 min | typecheck, lint+boundaries, unit (incl. T-CR-1, formula units) |
| Every PR | ~10–15 min | + SQL invariant suite (T-AO, T-SE-1/2, grant/DEFINER/RLS audits) on disposable DB; integration (T-PE, T-SP, T-AR, T-RK, T-CL, T-ED, T-SEC); Playwright smoke (T-CR-3/5, T-OB-1); migration dry-run; manifest diff |
| PR touching pipeline/prompts/rubric/models | + | T-GS full golden set (mocked-fixture mode for structure + recorded-response mode; live-API run on label `golden-live`) |
| Nightly | ~45 min | full E2E (all T-* E2E incl. T-DEL, T-NC concurrency loops, T-FD property 10k runs), T-VR, T-AX, dependency/secret scans, DST boundary tests (Paris transition dates) |
| Pre-production deploy | gate | entire release-blocking set green on the release SHA + reconciliation clean on staging-preview data + backup/restore drill flag current (release gate doc) |
