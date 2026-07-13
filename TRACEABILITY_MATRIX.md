# TRACEABILITY_MATRIX.md — Agora V1 Requirements Traceability

**Version:** 1.0 · 2026-07-13 · Maintained per milestone (Claude Code protocol step 13, IMPLEMENTATION_PLAN §11).
**Legend:** Milestones M0–M13 (IMPLEMENTATION_PLAN §3) · Tests T-* (TEST_PLAN) · Contracts C-* (API_CONTRACTS) · Modules per TECHNICAL_ARCHITECTURE §4.
**Rule:** no V1 requirement may be orphaned; every row names an implementation owner (module), data support, event, test, and milestone. Ambiguities are listed at the bottom — none silently resolved.

## 1. PRD Acceptance Criteria (AC-1 … AC-20)

| AC | Requirement (short) | UX surface | Module | DB table / function | API / action (C-*) | Domain event | Test | Milestone |
|---|---|---|---|---|---|---|---|---|
| AC-1 | No directional data pre-position, incl. page source & SERP | Claim page pre-position, feed cards, search results, OG | Claims, Feed, Sharing | `ClaimPublicView` serializer (no table) | C-01, C-02, C-20 | — | T-CR-1..9 | M2 |
| AC-2 | Reveal bound to persistence; `pre_reveal=true` server-set | Claim page reveal | Positions | `record_position()`, `position_event` | C-03 | `position.created` | T-CR-10, T-AO-1 | M2 |
| AC-3 | Visitor tap never counted; conversion → `pre_reveal=false` | Visitor reveal, signup | Positions, Identity | `record_position()` param path | C-04, C-05 | `position.created` | T-CR-11 | M3 |
| AC-4 | Early-split counts <25, % at ≥25 | Split module | Positions | `split_current` + serializer | C-03/C-06 | — | T-SP-1 | M2 |
| AC-5 | Append-only positions; change = event + ledger entry | Change flow, ledger | Positions | `position_event`, `position_current` | C-07 | `position.changed` | T-AO-1..5 | M4 |
| AC-6 | Attribution lists only viewed opposing args; single event | Attribution sheet | Persuasion | `attribute_persuasion()`, `argument_open` | C-08, C-09 | `persuasion.recorded` | T-PE-1..11 | M8 |
| AC-7 | MOVED ME never a button | All argument surfaces | Persuasion | (absence) | route-manifest scan | — | T-PE-12 | M8 |
| AC-8 | Co-sign side-match, ≤3/claim | Debate map, staircase | Arguments | `cosign()` fn | C-10 | `argument.cosigned` | T-AR-1 | M5 |
| AC-9 | Duplicate detection: block/suggest/reject | Composer | Arguments | embedding check in `compose()` | C-11 | `argument.created` | T-AR-2 | M5 |
| AC-10 | 280 cap; edit freeze | Composer, argument sheet | Arguments | `argument` triggers/grants | C-11, C-12 | — | T-AR-3 | M5 |
| AC-11 | Curated seeds labeled, ≥2/side, cede rule | Debate map | Claims, DebateRanking | `argument.curated*`, rank tiers | C-06 | `claim.published` | T-AR-4, T-RK-2 | M2/M7 |
| AC-12 | Evidence source-edge invariant; "no example found" state | Composer evidence step | Evidence | `create_example()`, `example_source` | C-13, C-14 | — | T-SE-1..4 | M6 |
| AC-13 | Feed deterministic, bounded, fallback order | Today feed | Feed | `claim_stats`, assemble query | C-15 | — | T-FD-1..3 | M9 |
| AC-14 | ≤3 pushes/day; Daily Claim at local 08:00 within window | Notifications | Notifications | `push_send_log`, sweeps | jobs | — | T-NC-1..3 | M11 |
| AC-15 | CONFLICT ≤20% publication cap | (scheduler) | Claims | publication scheduler guard | job | `claim.published` | T-CL-2 | M10 |
| AC-16 | Editorial queue: approve/reject/flag only; no editing; graduation + tripwire | INT-01 | EditorialPipeline | `editorial_decision`, `category_stats` | C-16 | `tripwire.fired` | T-ED-1..3 | M10 |
| AC-17 | Correction vs withdrawal semantics | Claim page banners | Claims | `claim_version`, `claim_transition()` | C-17 (admin) | `claim.withdrawn` | T-CL-1 | M10 (admin path M12) |
| AC-18 | Deletion propagation graph | Settings | Consent/Privacy | deletion job + tombstone | C-18 | `deletion.requested` | T-DEL-1..6 | M12 |
| AC-19 | Moderation threshold computed from events | INT-07 | Moderation, Analytics | threshold SQL over `report`/`moderation_action` | — | `moderation.threshold_fired` | T-MO-1 | M12 |
| AC-20 | Share cards: no split data; landing attribution | Share sheet, landing | Sharing | `share_event/landing`; card renderer input type | C-19, C-20 | — | T-CR-6, T-SH-1 | M11 |

## 2. PRD section-level requirements (clusters)

| PRD § | Requirement cluster | Module(s) | Data | Contract(s) | Test | Milestone |
|---|---|---|---|---|---|---|
| §1 | Activation definition; metrics; kill tests frozen | Analytics | `metric_definition` (frozen rows) | — | T-AN-1 | M1 (registry), M13 (freeze) |
| §2 | 9 user surfaces + 3 internal, states per inventory | all surface modules | — | C-01..C-24 | E2E per surface | M2–M12 |
| §3 | Onboarding: 4 entry paths, sprint, mirror, push moment | Identity, Positions, Feed | `profile.arenas`, sprint queries | C-05, C-21 | T-OB-1..4 | M3 |
| §4 | Feed sections/ranking/fallback; end marker | Feed | `claim_stats`, `evergreen_serve` | C-15 | T-FD-* | M9 |
| §5 | Claim lifecycle states, windows, flagship, recap, corrections, withdrawal, CONFLICT tier | Claims | `claim*`, transitions | C-16, C-17 | T-CL-* | M2 (states) / M10 (pipeline+scheduler) |
| §6 | Commit-to-reveal & anti-manipulation (quarantine, freeze) | Positions, Identity | quarantine cols, `split_current` | C-03, C-04 | T-CR-*, T-SP-2 | M2/M12(freeze admin) |
| §7 | Position system semantics | Positions | §2 of DATA_MODEL | C-03, C-07 | T-AO-* | M2/M4 |
| §8 | Argument system incl. anti-boilerplate, rate limits | Arguments | rate-limit checks | C-10..C-12 | T-AR-* | M5 |
| §9 | Debate map ranking, exploration slot, 2-min contract | DebateRanking | `argument_rank`, `rank_version` | C-06 | T-RK-1..3 | M7 |
| §10 | Endorsements set; persuasion flow | Arguments, Persuasion | `endorsement`, `persuasion_*` | C-08..C-10 | T-PE-* | M5/M8 |
| §11 | Evidence library, suggestion, submission, disputes | Evidence | `example*`, `source_dispute` | C-13, C-14 | T-SE-* | M6 |
| §12 | Ledger: 3 stats, entries, vindication | Ledger/Profiles | reads + `split_snapshot` | C-22 | T-LG-1 | M4 |
| §13 | Search claims-only | Search | tsvector | C-23 | T-SR-1 | M9 |
| §14 | Notification types/caps/channels | Notifications | prefs, send log | jobs | T-NC-* | M11 |
| §15 | Sharing surfaces, OG, SEO, PUBLIC_APP_URL | Sharing | `share_*` | C-19, C-20 | T-SH-*, T-CR-6/8 | M2 (public pages) / M11 (cards) |
| §16 | 13-stage engine, review queue, graduation, tripwires, replay | EditorialPipeline | pipeline tables | C-16 | T-ED-*, T-GS-1 | M10 |
| §17 | Moderation lanes, sanctions, D11 thresholds | Moderation | moderation tables | C-24 | T-MO-* | M12 |
| §18 | Event taxonomy, retention, invariants | Analytics + all | DATA_MODEL §6 map | — | T-AN-2 (taxonomy audit) | each milestone adds its events |
| §19 | Privacy: consent, export, deletion, isolation, charter | Consent/Privacy, Identity | consent/deletion tables | C-18, C-25 | T-DEL-*, T-PR-1 | M1 (consent) / M12 |
| §20 | Admin surfaces, audit log, ops report | AdminOps | `audit_log`, `job_health` | C-17, C-26 | T-AD-1 | M10–M12 |
| Founder D8–D20 | encoded per architecture docs | — | — | — | covered above | — |

**Orphan check result:** every PRD V1 requirement maps to ≥1 milestone, module, and test. No missing implementation owner. Missing-data flags: none (DATA_MODEL covers all rows above). Missing-event flags: none against PRD §18.

## 3. Ambiguities

**Recorded assumptions (simplest reversible choice taken; do not block):**
1. **Evergreen bank authoring (~100 claims, PRD §15):** produced through the same pipeline + review queue in higher-touch pre-launch batches (founder approves at leisure, no daily window) — not hand-written outside the pipeline, so lineage/audit hold. Reversible.
2. **Sprint claim pool at n≈0 (PRD §3):** onboarding sprint draws 1 recent + 2 evergreen by fixed rule; if inventory is short, sprint shortens (UX Flow E) — implemented as a simple ordered query.
3. **Share-card image invalidation on claim correction:** OG image cache key includes `claim_version` — regenerates on correction. Reversible caching detail.
4. **"Something else / skip" prompt-shown dedupe (PRD §10.5):** recorded as `analytics.event(prompt_rendered)` keyed by `position_event_id`; client also stores locally. Reversible.
5. **Invite attribution display (UX Flow B):** "Invited by @x" reads `invite.inviter_actor` pseudonym at landing only; no persistence on the profile. Reversible.
6. **Attribution list ordering "most recently viewed first":** implemented from `argument_open.opened_at DESC`, capped 5 — direct PRD reading, noted because it interacts with the 90-day retention (documented behavior).

**Founder blockers: none.** No ambiguity found that touches a product invariant without an existing PRD/architecture answer. (Operational prerequisites for M0 are listed in IMPLEMENTATION_PLAN §0 and Final Output N — they are setup actions, not spec ambiguities.)
