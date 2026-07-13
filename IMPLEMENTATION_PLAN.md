# IMPLEMENTATION_PLAN.md — Agora V1 Execution Plan

**Version:** 1.0 · 2026-07-13
**Companions (this plan's own set):** TRACEABILITY_MATRIX.md · ACCESS_CONTROL_MATRIX.md · API_CONTRACTS.md · TEST_PLAN.md · PRIVATE_BETA_RELEASE_GATE.md. Authoritative specs: PRD v1.1 + UX/DESIGN + TECH/DATA/SECURITY/AI docs + ADR-001..012.
**Scope:** the exact plan Claude Code executes next. No production code in this document. M0 does not start until Final Output N items clear.

---

## §0 — Implementation Readiness Audit (Phase 0)

**Verdict: READY, with findings encoded as binding implementation rules below. No architecture rework required.** Verification level: Supabase Data-API hardening, connection topology, and pg-boss requirements verified against current official documentation ([hardening guide](https://supabase.com/docs/guides/database/hardening-data-api), [tables-not-auto-exposed changelog](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically), [connection docs](https://supabase.com/docs/guides/database/connecting-to-postgres), [IPv4/IPv6 compatibility](https://supabase.com/docs/guides/troubleshooting/supabase--your-network-ipv4-and-ipv6-compatibility-cHe3BP), [pg-boss README](https://github.com/timgit/pg-boss)); Anthropic API behavior (Batches API 50%, model ids/pricing, structured outputs) verified via the current API reference set; Voyage/Brevo are standard REST/SMTP integrations verified at knowledge-grade with a walking-skeleton/M11 live proof respectively.

**Audit findings (each now a rule, wired into migrations/CI):**
1. **Data API disabled at project level** (and GraphQL) — officially supported; makes anon/service PostgREST keys inert. Weekly config audit keeps it that way (ACCESS_CONTROL §5). ⇒ **The web application operates with NO general-purpose service-role key: YES.** Full access-pattern answer in ACCESS_CONTROL §1 (pattern B — direct Postgres with constrained roles — for all domain operations; Supabase Auth HTTP endpoints with the public publishable key for sign-in; one scoped worker-only secret-key exception for `auth.admin.deleteUser`).
2. **Connection topology correction (precision, not defect):** Supabase direct connections are IPv6-only without the IPv4 add-on ⇒ **Vercel uses the Supavisor transaction pooler (port 6543, IPv4, `prepare:false`, small per-instance pools)**; **Railway worker uses the Supavisor session pooler (port 5432, IPv4; session features intact for pg-boss and long transactions)**. Custom roles connect through Supavisor with their own passwords. pg-boss (PG13+, SKIP-LOCKED polling; LISTEN/NOTIFY optional and not relied on) runs polling-mode over the session pooler.
3. **Postgres defaults hardening (genuine audit catches):** (a) functions grant EXECUTE to PUBLIC by default — every migration creating a function must `REVOKE ... FROM PUBLIC` then grant named roles (ACCESS_CONTROL §2.3); (b) `ALTER DEFAULT PRIVILEGES` revocations in every app schema so future objects inherit no grants to Supabase API roles; `public` schema stays empty; (c) every SECURITY DEFINER function: owner `definer_owner` (NOLOGIN), `SET search_path=''`, schema-qualified refs — CI audit query enforces all three (also clears Supabase's linter).
4. **Transactional enqueue mechanics:** enqueue = direct INSERT into the pg-boss job table inside the domain transaction (version-pinned; shape asserted by a walking-skeleton test so a pg-boss upgrade can't silently break outbox semantics).
5. **Supabase Auth emails must route through Brevo SMTP** (default Supabase SMTP is rate-limited, not production-grade) — added to M1 scope.
6. **Vercel/Railway runtime check:** OG generation via satori-class rendering on Node runtime route (no edge-only constraint); worker is a plain long-running Node process — no incompatibilities found. Sentry EU DSNs on both.
7. **No contradictory migrations, impossible constraints, or RLS-bypass paths found** in DATA_MODEL review; one clarification encoded: cross-schema FKs (`app` → `identity`-adjacent) are avoided — `app` references only `actor_id` values, no FK into `identity` (prevents grant leakage via FK validation); referential integrity for actor rows is by convention + reconciliation, matching the isolation goal.

**Architecture defects discovered: none requiring redesign.** Two precision amendments folded into rules 2 and 7 above (pooler topology; no cross-boundary FKs).

## §1 — Traceability
Delivered as **TRACEABILITY_MATRIX.md** (AC-1..20 + section clusters fully mapped; 6 recorded reversible assumptions; zero founder blockers).

## §2 — Walking Skeleton (M1)

The smallest vertical slice proving the architecture. **Not the MVP.** Scope is exactly the 14 proofs plus audit rule 4:

Local stack boots (Supabase CLI + Next dev + worker + seeded FIX-83) → preview deploy on PR (Vercel + preview `PUBLIC_APP_URL`) → magic-link auth round-trip → JWT → `resolve_actor()` → `actor_id` → seeded claim renders pre-position (ClaimPublicView) → leakage scan clean → authed tap → `record_position()` appends `position_event` + updates `position_current` + `split_current` in one tx **+ transactional pg-boss enqueue observed by a worker consumer** → RevealedClaimView served → split renders → forced test error arrives in Sentry (web + worker) → CI runs the skeleton's release-blocking subset (T-CR-1/2/3/5/10, T-AO-1/2/3, grant/DEFINER/RLS audits) green.

**Exit criteria (all must hold):** every proof demonstrable by command or CI link; `main` deployable; migration groups G0–G5 applied + rolled-back-forward cleanly on a scratch DB; ACCESS_CONTROL credential layout live on Vercel/Railway/CI (no secret key on Vercel — verified by env audit script); Brevo delivering the magic-link email on preview; zero TODOs in skeleton-path code.

## §3 — Milestones (Phase 3)

**Sequence adopted as recommended (M0–M13) — no dependency justified reordering; one scope clarification: public claim pages + OG/SEO basics land in M2 (they're the commit-to-reveal surface), share *cards* stay in M11.** Every milestone: leaves `main` deployable; ends with the Claude Code protocol (§11) incl. traceability update; has explicit non-goals = everything in later milestones. Complexity: L/M/H/VH.

| M | Objective & user-visible outcome | Key scope (schema Gx · modules · contracts C-x · jobs · tests) | DoD highlights | Cx |
|---|---|---|---|---|
| **M0 — Repo & delivery foundation** | CI-green empty product: repo structure (§7), toolchain, lint boundaries, migration harness, fixture loader, CI stages, Vercel/Railway/Supabase projects wired, secrets per ACCESS_CONTROL §4 | G0 roles/schemas · no product code · T-SEC audits scaffolding · docs/ops seed | `main` deploys a hello-shell to preview+prod; grant/DEFINER audit harness runs (empty-pass); env audit script green | M |
| **M1 — Walking skeleton** | §2 in full | G1–G5 (identity, enums, claims-min, positions, splits) · Identity/Consent/Positions/Claims-min · C-01,03,27 · enqueue proof · skeleton test subset | §2 exit criteria | H |
| **M2 — Claim publishing & commit-to-reveal** | Full claim page pre/post-position, early-split mode, admin-seeded publishing (manual claim ops UI-min), public SEO pages + OG endpoint, correction/withdrawal banners render | G6 finish claims/versions/bullets · Claims, Sharing(SEO part) · C-01/02/04 partial,06(read),17,20 · window-transition job · T-CR full, T-SP, T-CL-1 | AC-1/2/4 green; FIX-83 world browsable end-to-end; sitemap live | H |
| **M3 — Onboarding & position sprint** | 4 entry paths, visitor reveal + conversion, arena picker, 3-claim sprint, mirror, notification moment (prompt only) | Identity finish (pseudonyms, consent v1) · C-04/05/21/27 · T-CR-11, T-OB-* | AC-3 green; activation event measurable | M |
| **M4 — Ledger & position changes** | Public profile/ledger, change flow (stance pill → selector; attribution *stub* records trigger=none), retraction, vindication lines | G7 snapshots job live · Ledger · C-07,22 · snapshot+reconciliation jobs · T-AO full, T-LG | AC-5 green; ledger renders all 3 entry types | M |
| **M5 — Arguments & co-signing** | Composer (280, dup intervention), counters depth-1, endorsements (CONVINCING/STRONG-EVIDENCE gating stub/NEEDS-A-SOURCE), staircase module, rate limits | G8 arguments/cosign/endorsement/argument_open · Arguments · C-10/11/12 · T-AR, T-PE-12 partial (no MOVED control) | AC-8/9/10 green; `argument_open` recording on expand/sheet | H |
| **M6 — Evidence & source edges** | Evidence step in composer, suggestions (retrieval-only + "none found"), submit-a-source, disputes, example sheets | G9 evidence tables + pgvector · Evidence · C-13/14 · Voyage integration · T-SE | AC-12 green; source-edge invariant proven at DB level | M |
| **M7 — Debate map & deterministic ranking** | Two-side map, top-3 contract, expansion, exploration slot, curated-cede, rank versioning | G10 rank tables · DebateRanking · C-06 full · rank/claim_stats jobs · T-RK | AC-11 green; 2-minute scan fixture walkthrough | M |
| **M8 — Persuasion attribution** | Full change-flow step 2, eligibility, MOVED aggregates, flip-flop voiding, quarantine exclusion | G11 persuasion tables/fn · Persuasion · C-08/09 · T-PE full | AC-6/7 green — crown-jewel suite entirely green | H |
| **M9 — Feed & Activity** | Deterministic Today feed (sections, fallback ladder, end marker), Activity center, claims search | G12 activity/prefs · Feed, Search, Activity · C-02/15/23 · T-FD, T-SR | AC-13 green | M |
| **M10 — Editorial engine** | 13-stage pipeline, review queue (keyboard model), graduation/tripwires, CONFLICT cap scheduler, corrections workflow inputs, evergreen-bank production begins; **includes §9 cost baseline + MODEL ROUTING CALIBRATION checkpoint before automation enable** | G13 pipeline tables · EditorialPipeline, Sources full · C-16 · ingestion/pipeline/cutoff/publication jobs (Paris-DST tests) · T-ED, T-GS, T-CL-2 | AC-15/16/17 green; 3 rehearsal days of real daily runs; budget controls proven (soft/hard/monthly wiring) | **VH** |
| **M11 — Notifications & sharing** | Web push + Brevo channels with caps/batching/local-time delivery, weekly recap, closing recap fanout, share cards (blurred/argument/sprint), invite links | G14 send-log · Notifications, Sharing(cards) · C-19/25 · dispatch/sweep/recap jobs · T-NC, T-SH, T-CR-6 re-run | AC-14/20 green; payload-minimization rule verified against Brevo | H |
| **M12 — Moderation, privacy & deletion** | Reports→cases→sanctions→appeals, thresholds (D11), split freeze, UNFAIR flag, consent settings, export, **full deletion graph**, charter page, INT-05 audited identity access | G15 moderation/deletion · Moderation, Consent/Privacy full, AdminOps · C-18/24/28 · deletion/retention jobs · T-DEL, T-MO, T-PR, T-AD | AC-18/19 green | H |
| **M13 — Production hardening & private beta** | Release-gate execution: drills (restore, degraded-day, outage, budget), metric freeze, evergreen stock, runbook, beta-domain cutover, cohort invite mechanics | metric freeze migration · ops polish · PRIVATE_BETA_RELEASE_GATE §A complete; §B tracked with counsel | Gate document fully processed | M |

**Complexity (G):** M0 M · M1 H · M2 H · M3 M · M4 M · M5 H · M6 M · M7 M · M8 H · M9 M · M10 VH · M11 H · M12 H · M13 M.
**Critical path (H):** M0 → M1 → M2 → M5 → M7 → M8 (the crown-jewel chain), with M10 the schedule's dominant single item (VH; can start its pipeline-table + ingestion groundwork in parallel after M2 since it shares only the Claims boundary — the review queue and automation land after M9 in sequence). M3/M4/M6/M9 are sequence-flexible fill between chain links; M11–M13 close.

## §4 — Database Migration Plan (Phase 4)

Groups (each = one reviewed migration set; applied in order; every group ships with its grant/audit assertions):

| G | Content | Depends | Key mechanisms |
|---|---|---|---|
| G0 | Roles (all §ACCESS_CONTROL), schemas (`identity/app/analytics`), `ALTER DEFAULT PRIVILEGES` revocations, RLS-deny-all template, extensions (pgvector, pg_trgm), pgboss install (owner: migrator) | — | roles are **irreversible-ish** (drop cascades) — flagged |
| G1 | Identity boundary: actor_map, pseudonym, push_subscription, signup_signal + `resolve_actor`/`register_pseudonym` DEFINERs | G0 | DEFINER rules §2 ACCESS_CONTROL |
| G2 | Core enums + reference data (domains, stances, states, tiers…) + consent tables | G0 | enum evolution policy: additive only; renames via new-enum-swap |
| G3 | Sources + source_document + allowlist seed | G2 | fetch_policy enum |
| G4 | Claims core (claim, versions, bullets, bullet_source, lineage-min, evergreen_serve) | G2,G3 | sentence-immutability (column grant + trigger); state-transition fn; partial unique flagship_day |
| G5 | Positions + splits: position_event/current, split_current, `record_position()` | G4 | **append-only revokes+triggers; CHECKs (kind/stance combos); row-lock ordering; counters ≥0** |
| G6 | split_snapshot + reconciliation fn | G5 | append-only |
| G7 | (reserved — merged into G6; kept numbering stable) | — | — |
| G8 | Arguments: argument, cosign, endorsement, argument_open + fns | G5 | depth-1 trigger; partial uniques; freeze trigger; column-level UPDATE grants; strong-evidence trigger |
| G9 | Evidence: example, example_source, argument_evidence, source_dispute, `create_example()` + vectors | G8 | **NOT NULL FK edge + constraint trigger; RESTRICT on source_document delete** |
| G10 | Ranking read models: argument_rank, rank_version, claim_stats, argument_stats | G8 | worker-only DML |
| G11 | Persuasion: persuasion_event (+UNIQUE position_event_id), status ledger, `attribute_persuasion()` | G5,G8 | **immutability revokes; UNIQUE dup-guard; eligibility inside DEFINER; window interval** |
| G12 | Activity, notification_pref, push_send_log, share_*, invite | G1,G4 | dedupe uniques; cap check-and-insert |
| G13 | Pipeline: pipeline_run, claim_candidate, stage_artifact, editorial_decision, category_stats | G3,G4 | decision UNIQUE; append-only decisions |
| G14 | Moderation: report, moderation_case/action, claim_flag | G8 | action append-only |
| G15 | Privacy/deletion: deletion_tombstone, deletion-step fns, erasure-redaction switch fn (disabled default), retention fns | G1..G12 | tombstone flow; redaction fn EXECUTE only to worker role, config-gated |
| G16 | Analytics: event partitions, aggregates, metric_definition (+frozen-row trigger), audit_log, job_health | G0 | monthly partitions; frozen-row U-block |

**Invariant → mechanism map:** CHECKs (stance/kind combos, counters ≥0, curated XOR author) · UNIQUEs (position_event_id on persuasion; candidate decision; dedupe keys; partial uniques on active cosign/endorsement; flagship_day) · exclusion constraints (none needed — flagship uniqueness suffices) · FKs (all first-class edges; RESTRICT on evidence source docs) · triggers (append-only blocks, depth-1, freeze, strong-evidence gating, frozen-metric block, sentence immutability) · revoked U/D (the append-only set, per role) · SECURITY DEFINER (single write paths) · isolation (default read-committed everywhere; correctness from row locks — `FOR UPDATE` on position_current + ordered split_current locks; no serializable needed) · advisory locks (one: pipeline daily-run singleton `pg_advisory_lock(claim_day)`) .

**Rollback strategy:** expand-migrate-contract; every group ships a down-script tested in CI on scratch DB **except flagged irreversible ones**: G0 roles/schemas (recreate-only), any data backfill, partition drops (retention — by design), and the metric freeze (deliberately one-way; a new version row is the only path). Down-scripts never used against production with data — production rollback = roll code back (schema stays expanded), then contract later.

## §7 — Repository Structure (Phase 7)

```
agora/
├─ apps/
│  ├─ web/                      # Next.js App Router (thin: routes/SSR/actions call packages/domain)
│  │  ├─ app/(public)/          # may import contracts/public ONLY (lint-enforced)
│  │  ├─ app/(authed)/          # feed, claim revealed, ledger, settings, activity
│  │  ├─ app/(admin)/           # INT-01/02/03/05/07 surfaces
│  │  └─ app/api/               # route handlers per API_CONTRACTS
│  └─ worker/                   # pg-boss bootstrap, job registry, pipeline runner (thin: calls packages/domain + pipeline)
├─ packages/
│  ├─ domain/                   # AUTHORITATIVE business logic — the 18 modules (TECH §4), one dir each; imported by BOTH apps; no framework imports
│  ├─ contracts/                # zod schemas + DTO types; public/ vs internal/ barrels; manifest.ts
│  ├─ db/                       # migrations/ (G0..G16), generated types, sql helpers, grant fixtures
│  ├─ pipeline/                 # editorial stages, prompts/ (versioned files), rubrics/ (versioned), model-routing table
│  ├─ ui/                       # components (DESIGN §21 inventory) + tokens/ (DESIGN §18-19 as code)
│  ├─ fixtures/                 # seed world, FIX-83, golden-sets/ (frozen candidate corpus)
│  └─ config/                   # env schema (PUBLIC_APP_URL etc.), lint boundary rules, log allowlist
├─ tests/
│  ├─ invariants/               # SQL suites (T-AO, grants, DEFINER, RLS audits)
│  ├─ integration/              # API-level suites
│  └─ e2e/                      # Playwright (+axe, visual)
├─ scripts/                     # env audit, manifest diff, cost-report, restore-drill helper
└─ docs/                        # the 17 authoritative .md specs + ops/ (runbook, env config, ROPA)
```

**Boundary enforcement:** eslint-boundaries rules generated from TECH §4's layer table (domain layers acyclic; `apps/*` may not import each other; `packages/domain` may not import `apps/*`, `ui`, or framework packages; Evidence module: LLM-SDK import banned; Notifications dispatch dir: opinion-table write helpers banned). **Naming:** tables snake_case; TS types PascalCase mirroring DTO names in API_CONTRACTS; jobs `job.<area>.<name>`; events `<module>.<event>` exactly as TECH §4; migrations `G##_<slug>__<n>.sql`. **Business-logic home:** `packages/domain` only — web routes and worker jobs are ≤ thin adapters (lint rule caps route files importing `db` directly: forbidden, must go through domain).

## §9 — Editorial Cost Baseline & Model-Routing Calibration (Phase 9, per ADR-012)

**When:** inside M10, after pipeline stages run on fixtures, **before** production automation enable. **Corpus:** the full golden set (≥60 cases) + 3 recorded real news days (~600 ingested items, ~45 clusters, ~35 candidate claims) — representative of a heavy news day ×3.
**Protocol:** for each stage × model in {haiku-4-5, sonnet-5, opus-4-8} × mode {batch, sync}: run with pinned prompt versions; capture per call into `stage_artifact`: model, effort setting, mode, prompt_version, tokens in/out, latency, retry count, structured-output validity rate, gate accuracy vs golden labels, computed cost. Batch discount impact = paired batch/sync cost delta. **Decision rule per stage: cheapest model whose gate accuracy ≥ the stage's quality threshold (hard-fail classes: 100%; others ≥95% golden agreement) and structured-output validity ≥99%.** Opus is *not* default anywhere — it must win its slot (expected only at the adversarial gate, but measured, not assumed).
**Outputs:** cost-per-candidate, cost-per-published-claim, projected 30-day cost vs the $15/$30/$500 controls; committed `model-routing.json` (versioned, golden-gated for future changes); founder-visible one-page report. **The MODEL ROUTING CALIBRATION checkpoint = founder acknowledges the report + routing table before the automation flag flips.** If projected spend exceeds the soft target, the report proposes routing changes first, ceiling changes second (founder-only).

## §11 — Claude Code Execution Protocol (Phase 11)

**Per milestone, in order (no steps skipped, no reordering):**
1. Read the authoritative specs for the milestone (traceability rows name them) · 2. Read TRACEABILITY rows for the milestone · 3. Inspect repo state (`git log`, failing tests, TODO scan) · 4. Write `docs/milestones/M<x>-note.md`: scope-in/scope-out, spec refs, planned schema/contract touches, risks (≤1 page) · 5. Implement only that scope · 6. Format + static checks (lint, boundaries, types) · 7. Unit tests · 8. SQL invariant tests · 9. Integration tests · 10. E2E where applicable · 11. **Security review of the diff** (checklist: new routes in manifest? grants touched? DEFINER rules? secrets? log allowlist? serializer boundaries?) · 12. **Spec-drift review** (diff vs PRD/UX/DESIGN sections claimed in the note; any deviation documented, never silent) · 13. Update TRACEABILITY_MATRIX rows (tests/contracts now concrete) · 14. Update architecture docs *only* when implementation reality requires clarification (marked "Implementation note", never silently changing decisions) · 15. Commit the milestone atomically (or a small series of coherent commits) with the note.

**Prohibitions (hard):** never remove a requirement silently · never weaken a DB invariant to pass a test · never broaden a SECURITY DEFINER function for convenience · never place the service/secret key in browser or Vercel · never bypass RLS/grants because implementation is hard · never expose an internal DTO publicly (manifest + boundaries make this mechanical) · never generate evidence from model memory · no features beyond the PRD · no design-direction changes · no unrelated refactors within a milestone.

**Blocker protocol:** STOP; write `docs/blockers/B-<n>.md` with BLOCKER / ROOT CAUSE / AFFECTED SPEC / OPTIONS / RECOMMENDATION. **Ask the founder only when it touches:** a product invariant, security, privacy, legal posture, irreversible schema, or vendor spend above approved ceilings. Everything else: pick the simplest reversible option, record it in the milestone note + traceability assumptions, continue.

## §10 — Release gate
Delivered as **PRIVATE_BETA_RELEASE_GATE.md** (technical vs legal blockers separated; legal never marked complete by engineering).
