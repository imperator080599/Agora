# ADR.md — Agora V1 Architecture Decision Records

**Version:** 1.1 · 2026-07-12 · Status: ADR-001..010 **Accepted and founder-ratified**; ADR-011..012 record the ratification amendments.
Format: Context → Decision → Alternatives → Consequences → Migration trigger.

---

## ADR-001 — Application architecture: modular monolith (Next.js app + one worker)

**Context:** Solo founder, Claude Code-heavy workflow, V1 must ship the PRD's invariants correctly; PRD forbids speculative scale. The system has two runtime shapes: request/response (web) and long-running scheduled work (pipeline, jobs).
**Decision:** One TypeScript repository; a modular monolith with lint-enforced module boundaries (TECH §4) deployed as exactly two processes: the Next.js server (Vercel) and a Node worker (Railway). No microservices, no serverless pipeline.
**Alternatives:** Microservices (rejected: no V1 requirement, multiplies ops); all-serverless including pipeline (rejected: 13-stage runs with batch polling fit a long-lived worker, not function timeouts); single process with in-process cron (rejected: web deploys would kill running pipeline stages).
**Consequences:** One mental model; domain modules are extraction-ready if ever needed; the module dependency rules do the "service boundary" work at zero infra cost; deploys of web and worker are independent.
**Migration trigger:** A module with independent scaling or team ownership needs (none foreseeable pre-100k MAU).

## ADR-002 — Database: PostgreSQL on Supabase (EU), one database, schema-partitioned

**Context:** The product's invariants are relational (append-only ledgers, FK-mandated source edges, transactional counters); GDPR posture wants EU residency; V1 also needs FTS, trigram, vectors, and a queue.
**Decision:** Single managed Postgres 16 (Supabase, EU region) carrying `auth`/`identity`/`app`/`analytics`/`pgboss` schemas; pgvector + pg_trgm + FTS in-database; PITR backups.
**Alternatives:** Neon (fine, but Supabase bundles auth/storage we also use); RDS (more ops); separate analytics store (rejected: frozen metrics must compute over authoritative rows); separate vector DB (rejected: corpus is tiny).
**Consequences:** One backup/restore story; transactional enqueue possible (ADR-004); single blast radius accepted with PITR + the identity/opinion grant boundary limiting breach impact.
**Migration trigger:** Sustained >70% DB CPU → read replica; queue extraction first (ADR-005) before any split.

## ADR-003 — Identity/opinion isolation: schemas + roles + actor-id indirection (not separate databases)

**Context:** DATA_ASSET_STRATEGY §4 demands the pseudonym↔identity join be structurally impossible in analytical/commercial paths, at solo-founder ops cost.
**Decision:** `identity` vs `app` schemas; pseudonymous `actor_id` distinct from `auth_user_id`; the mapping table readable only via a SECURITY DEFINER resolver; role grant matrix (SECURITY_PRIVACY §2); RLS deny-all as fail-closed backstop; audited admin exception path.
**Alternatives:** Two databases (real boundary, doubled ops, breaks transactional deletion — rejected for V1); app-layer discipline (not a boundary — rejected); full RLS-per-user with client DB access (rejected: no direct client access exists, and reveal-gating is response-shaping logic RLS can't express).
**Consequences:** Breach of opinion data yields pseudonymous rows; breach of identity yields no opinions; analyst tooling is structurally incapable of the nightmare queries; deletion can sever linkage first.
**Migration trigger:** Any direct client-DB exposure ⇒ real RLS policies become mandatory; a data-team hire ⇒ revisit physical separation.

## ADR-004 — Event architecture: append-only tables as the event log + transactional pg-boss enqueue (no bus, no separate outbox)

**Context:** PRD §18's canonical events must never be lost (positions, persuasion, consent, deletion); consumers (notifications, ranking, rollups) need reliable triggers; V1 scale is tiny.
**Decision:** The authoritative append-only rows *are* the domain event log. Side-effects are pg-boss messages inserted in the same Postgres transaction as the domain write — commit-atomic, i.e., outbox semantics without an outbox. Analytics events are a separate, loss-tolerant table class. Operational events are separate again.
**Alternatives:** Kafka/event bus (absurd at this scale); dedicated outbox table + relay (redundant while the queue shares the DB); CDC (ops burden).
**Consequences:** Zero dual-write risk; consumers are idempotent by natural key; the "three classes, not one" rule prevents analytics losses from ever implicating domain integrity.
**Migration trigger:** Moving the queue out of the primary DB (throughput or isolation) ⇒ introduce a true outbox table + relay at that moment, not before.

## ADR-005 — Background jobs: pg-boss on a dedicated worker (no Redis, no external scheduler)

**Context:** ~20 scheduled/async job types (TECH §10) incl. a DST-sensitive Paris cutoff (D16); founder-operable ops.
**Decision:** pg-boss (Postgres-backed queue: retries, cron, DLQ) consumed by the Railway worker; editorial cutoffs scheduled via IANA `Europe/Paris` computation; publication anchors in UTC.
**Alternatives:** BullMQ+Redis (adds a datastore); Inngest/Trigger.dev (vendor orchestration — attractive later, unnecessary now); Vercel cron (timeout-bound, no queue semantics).
**Consequences:** Transactional enqueue (ADR-004); one place to see job health; polling latency in seconds is irrelevant here.
**Migration trigger:** >~100 jobs/sec sustained, or pipeline orchestration complexity (branching, long fan-out) ⇒ evaluate Inngest/Temporal.

## ADR-006 — Search: Postgres FTS + trigram; explicitly no external search engine

**Context:** V1 search is claims-only (PRD §13); corpus ≈ 1.5–2.5k claims/year; future Pro research search must remain an unbuilt option.
**Decision:** Generated `tsvector` + GIN on claims, `websearch_to_tsquery`, trigram fallback for typos; `/search` noindex; no argument/evidence/user indexes exist at all.
**Alternatives:** Typesense/Meilisearch/Algolia/Elastic — all rejected as pure ops/cost with no V1 payoff.
**Consequences:** Zero additional infrastructure; "good-enough" typo tolerance accepted; the Pro boundary is physical (absent indexes), not a feature flag.
**Migration trigger:** Building Agora Pro research search (MONETIZATION §5, ≥10k users) is the evaluation point for a real engine.

## ADR-007 — AI providers: single-provider Anthropic (Haiku 4.5 / Sonnet 5 / Opus 4.8 by stage class) + Voyage embeddings; Batches API; degradation instead of failover

**Context:** The pipeline is the only heavy AI consumer; quality gates matter more than latency; cost must be capped; the product already has a designed degradation mode (D8).
**Decision:** `claude-haiku-4-5` for classification stages, `claude-sonnet-5` for generation/verification, `claude-opus-4-8` for the adversarial gate; all daily-run calls via the Batches API (50%); Voyage for embeddings; per-run token ceiling + workspace spend cap; provider outage ⇒ pipeline pause ⇒ evergreen-bank feed (no hot failover). Model/prompt/rubric versions pinned per artifact; upgrades gated by the golden set.
**Alternatives:** Multi-provider abstraction (complexity without a V1 requirement; partial gate-independence achieved instead via separate prompts + Opus gate + human review); OpenAI/Gemini as primary (no capability argument for the switch; single-vendor DPA surface is simpler); self-hosted models (ops cost, quality risk).
**Consequences:** One DPA, one billing ceiling, one SDK; outage tolerance is a product behavior rather than infrastructure; cross-family gate independence deferred with a named revisit trigger (AI doc §2).
**Migration trigger:** Monthly audits showing correlated drafting/gate blind spots, or >1 material outage/quarter ⇒ add a second provider at the adversarial-gate stage first.

## ADR-008 — Editorial orchestration: stage-persisted sequential pipeline on the worker (no workflow engine)

**Context:** 13 linear stages per candidate, daily cadence, resumability + full audit/replay required (PRD §16.4), human gate in the middle.
**Decision:** `pipeline_run` / `claim_candidate` / `stage_artifact` state machine driven by pg-boss jobs; every stage persists artifacts before advancing; resume = re-enqueue incomplete stages; replay = re-execution against stored inputs; review queue is just a candidate-state view; graduation/tripwires as table-driven state.
**Alternatives:** Temporal (heavyweight ops); Inngest/Trigger.dev (viable, but the artifact table already delivers resume/audit and the DAG is short); cron + ad-hoc scripts (unauditable — violates PRD §16.4).
**Consequences:** The audit substrate and the orchestration substrate are the same rows — replayability is a query; adding a stage is a migration + enum value; the founder can inspect any decision end-to-end in INT-07.
**Migration trigger:** Branching/fan-out orchestration needs (e.g., multi-language pipelines) ⇒ re-evaluate a workflow engine.

## ADR-009 — Analytics: first-party only, metrics as frozen versioned SQL over authoritative tables

**Context:** Founder decision 4 freezes kill-test definitions pre-launch and demands auditability; PRD §18 bans third-party trackers, session replay, inferred demographics; the metric set is small and fixed.
**Decision:** Canonical events in Postgres (domain rows + `analytics.event`); `metric_definition` registry with hash-pinned, freeze-flagged SQL (no UPDATE grant on frozen rows); INT-07 executes only registered versions; no external analytics processor.
**Alternatives:** PostHog/Amplitude (a second, non-authoritative event stream — exactly what frozen kill tests must not depend on; extra processor for GDPR); build-nothing (rejected: kill tests are the point of V1).
**Consequences:** Metrics are reproducible court-grade artifacts; no funnel-explorer UI (accepted); adding a metric is a migration-reviewed insert.
**Migration trigger:** Recurring ad-hoc exploration needs ⇒ PostHog EU with autocapture/replay off, as a *supplementary* read model only — kill tests never move.

## ADR-010 — Deployment: Vercel (web) + Railway (worker) + Supabase (data); no IaC, no standing staging in V1

**Context:** One founder; web-first product with SEO-critical SSR; preview-per-PR wanted; three managed dashboards is the ops ceiling.
**Decision:** Vercel for the Next.js app (CDN, preview deploys, instant rollback); Railway for the always-on worker; Supabase EU for data/auth/storage; GitHub Actions CI with the release-blocking test set (TECH §16); expand-migrate-contract migration discipline; environment config documented in-repo; secrets in platform managers; preview tier instead of a standing staging.
**Alternatives:** Fly.io all-in-one (fewer vendors, weaker preview/CDN story); single VPS (cheapest, highest ops risk for one person); Terraform (no payoff at three dashboards).
**Consequences:** Deploys are boring; rollback never races schema; config drift risk accepted with a quarterly audit note; `PUBLIC_APP_URL` (D20) parameterizes every environment.
**Migration trigger:** First external beta cohort ⇒ promote a standing staging; second engineer ⇒ revisit IaC.

## ADR-011 — Transactional email: Brevo (EU), replacing Resend

**Context:** Founder ratification of the stack amended the email provider: a European-operated product handling opinion-adjacent personal data should prefer EU data storage and minimize international transfer complexity. Email is the guaranteed ritual channel (with in-app Activity) given the iOS web-push constraint.
**Decision:** Brevo (EU) for all transactional email — notification digests, weekly recaps, account/moderation mail — and as the custom SMTP for Supabase Auth (magic links must not ride Supabase's default rate-limited SMTP in production). **Payload minimization rule:** emails contain only the minimum content required for delivery; no opinion content ever enters Brevo metadata, tags, contact attributes, or analytics fields; Brevo contact records hold address + delivery state only. The email adapter enforces this via an allowlisted payload schema (same pattern as the logging allowlist).
**Alternatives:** Resend (better DX, US processor — the replaced baseline); Postmark; SES.
**Consequences:** One fewer US transfer in the processor inventory (remaining scrutiny: Anthropic, Voyage — SECURITY_PRIVACY §8-Q4); slightly weaker DX accepted; deliverability monitored in the ops report.
**Migration trigger:** Deliverability or volume-pricing problems; any change re-opens only this ADR, not the vendor exercise.

## ADR-012 — AI budget controls and model-routing calibration

**Context:** Founder ratification set binding spend controls and rejected the assumption that the initial cost target is correctly calibrated.
**Decision:** Three-tier control, implemented in the pipeline runner and workspace config: **$15/day soft alert** (ops alert; pipeline continues) → **$30/day hard stop** (no further non-essential pipeline AI calls that day; D8 degraded-day policy engages — evergreen bank feeds the product) → **$500/month workspace cap** with an 80% pre-exhaustion alert. Spend is computed from per-call token accounting persisted on `stage_artifact` (not inferred from invoices). A **cost-baselining milestone** runs the editorial golden set before production automation, measuring per stage: input/output tokens, cost, cost per candidate, cost per published claim, batch-discount impact, retry cost, and model distribution, projecting 30-day cost; a **MODEL ROUTING CALIBRATION checkpoint** then fixes the cheapest model per stage that passes the quality threshold (Haiku 4.5 vs Sonnet 5 vs Opus 4.8 compared empirically — Opus is not assumed). Model allocation may change from calibration without any architecture change.
**Alternatives:** Trusting the estimate (rejected by founder decision); invoice-based monitoring only (too slow for a daily stop).
**Consequences:** The budget breaker and the quality-degradation policy are the same mechanism (fewer claims, never worse); cost telemetry is a first-class pipeline output; the routing table is data, not architecture.
**Migration trigger:** Sustained calibrated spend near the hard ceiling → founder decision to raise ceilings (never raised mid-incident).
