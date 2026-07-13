# DATA_MODEL.md — Agora V1 Authoritative Data Model

**Version:** 1.0 · 2026-07-12 · PostgreSQL 16 (Supabase, EU)
**Inherits exactly:** PRD §18 event taxonomy + invariants; DATA_ASSET_STRATEGY §5 graph. Companions: TECHNICAL_ARCHITECTURE.md, SECURITY_PRIVACY.md.
**Conventions:** all PKs `uuid` (v7 for time-ordered inserts) unless noted; all timestamps `timestamptz`; enums as Postgres enums; **JSON only for non-authoritative metadata** (pipeline stage payloads, activity render payloads) — every first-class relationship in DATA_ASSET_STRATEGY §5 is a real column/FK, never JSON.

## 0. Schema layout

| Schema | Contents | Access (roles: SECURITY_PRIVACY §2) |
|---|---|---|
| `auth` | Supabase-managed credentials (email, sessions) | Supabase internals only |
| `identity` | actor map, pseudonym registry, push subscriptions, anti-abuse signals | `web_backend` via SECURITY DEFINER fns; `admin_ops` (audit-logged); **no grant** for `worker_notify` beyond delivery lookups, none for `analyst_ro` |
| `app` | the opinion domain (everything below unless prefixed) | `web_backend`, `worker` (write); `analyst_ro` (read) |
| `analytics` | view-class events (90-day), metric registry | writers; `analyst_ro` read |
| `pgboss` | queue | `web_backend` (enqueue), `worker` |

**Key strategy (the isolation cornerstone):** `identity.actor_map(auth_user_id uuid UNIQUE → actor_id uuid UNIQUE)`. `actor_id` is a random pseudonymous id, **not** the auth id. Every `app`/`analytics` row references `actor_id` only. The map is readable solely through `identity.resolve_actor(auth_uid)` (SECURITY DEFINER); no role that can read `app.*` holds SELECT on `actor_map`. Consequence: possession of the entire opinion dataset yields no path to an email/IP without a grant that only the audited admin path has.

---

## 1. Table Catalog

### Identity layer (`identity`)

| Table | Key columns | Constraints / notes | Deletion / retention |
|---|---|---|---|
| `actor_map` | `auth_user_id` PK/UNIQUE, `actor_id` UNIQUE, `created_at` | the only auth↔opinion join point | row deleted on account deletion (severs linkage first — §5) |
| `pseudonym` | `actor_id` PK → (logical) app.profile; `name` UNIQUE (citext), `changed_at`, `prior_name`, `prior_release_at` | 1 change/90d enforced in app + CHECK on `changed_at`; profanity/impersonation screen at write | name released 90d post-deletion via retention job |
| `push_subscription` | `id` PK, `actor_id`, `endpoint` UNIQUE, keys, `created_at` | device endpoints are identity-adjacent → this schema | deleted with account; pruned on push-service 410 |
| `signup_signal` | `id` PK, `actor_id`, `ip_hash` (salted), `device_hint`, `created_at` | anti-abuse only; velocity queries | **30-day retention**, purged by job |

### Actors & consent (`app`)

| Table | Key columns | Constraints | Deletion / retention |
|---|---|---|---|
| `profile` | `actor_id` PK, `display_name` (denorm of pseudonym), `joined_month`, `arenas` (enum[]), `is_internal` bool, `quarantine_until`, `deleted_at` | arenas ⊆ 4 domains; `deleted_at` drives 404 | tombstoned on deletion |
| `consent_record` | `id` PK, `actor_id` FK, `consent_version` FK, `recorded_at` | **append-only** | permanent |
| `consent_version` | `id` PK, `version_label` UNIQUE, `text_hash`, `published_at` | registry | permanent |
| `deletion_tombstone` | `id` PK, `actor_id`, `requested_at`, `steps_completed` (jsonb, non-authoritative progress), `completed_at` | drives §5 | permanent |

### Content: sources, claims (`app`)

| Table | Key columns | Constraints | Notes |
|---|---|---|---|
| `source` | `id` PK, `publisher` UNIQUE, `feed_url`, `origin_region`, `domain_tags`, `fetch_policy` enum(`rss_only`,`fetch_allowed`,`excerpt_only`), `active`, `added_at` | the allowlist registry (monthly-reviewed artifact) | policy flags implement AI doc §4 |
| `source_document` | `id` PK, `source_id` FK, `canonical_url` UNIQUE, `title`, `published_at`, `fetched_at`, `content_ref` (Storage pointer or null per policy), `content_hash` | ingested article record; **raw text quarantined** here only | retention per licensing policy (AI doc §4): full text ≤30d unless policy allows |
| `news_cluster` | `id` PK, `run_id` FK, `label`, `created_at` + join `news_cluster_document(cluster_id, document_id)` PK(both) | ≥3 docs STANDARD / ≥5 + region-diverse CONFLICT enforced at gate, recorded here | lineage substrate |
| `claim` | `id` PK, `slug` UNIQUE, `sentence` (≤15 words checked at gate; immutable post-publish — **no UPDATE grant on `sentence`**), `domain` enum, `type` enum(news,evergreen), `tier` enum(standard,conflict), `state` enum(candidate…withdrawn per PRD §5.2), `flagship_day` date NULL, `published_at`, `live_until`, `archived_at`, `withdrawn_at`, `withdrawal_reason` enum | state transitions via guarded fn `claim_transition()`; partial UNIQUE on (`flagship_day`) | search `tsvector` generated column + GIN index |
| `claim_version` | `id` PK, `claim_id` FK, `version_no`, `created_at`, `created_by`, `change_kind` enum(initial,correction,source_change) | UNIQUE(claim_id, version_no); **append-only** | corrections = new version (PRD §5.6) |
| `context_bullet` | `id` PK, `claim_version_id` FK, `ord`, `text` | UNIQUE(version, ord) | |
| `bullet_source` | PK(`bullet_id`,`source_document_id`) FKs | **every bullet ≥1 row enforced at publish gate** (deferred constraint check in publish fn) | the fact→source edge |
| `claim_lineage` | `claim_id` PK/FK, `cluster_id` FK, `pipeline_run_id` FK, `candidate_id` FK, `rubric_version`, `pipeline_version` | one row per claim, mandatory at publish | PRD §16.4 |
| `evergreen_serve` | PK(`actor_id`,`claim_id`), `served_at` | feed fallback bookkeeping | pruned with account |

### Positions & splits (`app`) — see §2–3 for invariants

| Table | Key columns | Constraints |
|---|---|---|
| `position_event` | `id` PK (uuidv7), `actor_id`, `claim_id`, `kind` enum(created,changed,retracted), `stance` enum(agree,disagree,complicated) NULL when retracted, `prior_stance` NULL, `pre_reveal` bool NOT NULL, `surface` enum, `consent_version_id`, `created_at` | **append-only (§2)**; INDEX (actor, claim, created_at), (claim, created_at) |
| `position_current` | PK(`actor_id`,`claim_id`), `stance`, `first_event_id` FK, `last_event_id` FK, `first_at`, `changed_count`, `last_change_at` | projection; maintained only by `record_position()` (§2) |
| `split_current` | `claim_id` PK/FK, `agree_n`,`disagree_n`,`complicated_n`, `q_agree_n`,`q_disagree_n`,`q_complicated_n` (quarantine shadow), `updated_at` | CHECK all ≥0; updated only inside `record_position()` / deletion / quarantine-fold |
| `split_snapshot` | PK(`claim_id`,`snapped_at`), counts, `kind` enum(daily,window_close) | **append-only**; permanent (the longitudinal spine) |

### Arguments & evidence (`app`)

| Table | Key columns | Constraints |
|---|---|---|
| `argument` | `id` PK, `claim_id` FK, `side` enum(for,against), `author_actor_id` NULL (NULL ⟺ curated), `curated` bool, `curated_attribution` text NULL, `curated_source_document_id` FK NULL, `text` varchar(280), `counter_of` FK NULL → argument, `created_at`, `frozen_at`, `deleted_at`, `needs_source_since` | CHECK `(curated AND author IS NULL AND attribution IS NOT NULL) OR (NOT curated AND author IS NOT NULL)`; **depth-1**: CHECK via trigger — `counter_of` target must have `counter_of IS NULL`; text UPDATE allowed only while `frozen_at IS NULL` (column grant + trigger, PRD §8.10); `embedding vector` (dup detection) |
| `cosign` | `id` PK, `actor_id`, `argument_id` FK, `created_at`, `removed_at` | partial UNIQUE(actor, argument) WHERE removed_at IS NULL; ≤3 active per (actor, claim) enforced in `cosign()` fn under row lock |
| `endorsement` | `id` PK, `actor_id`, `argument_id`, `type` enum(convincing,strong_evidence,needs_source), `giver_stance_at_time` enum NOT NULL, `created_at`, `removed_at` | partial UNIQUE(actor, argument, type) WHERE removed_at IS NULL; strong_evidence requires argument has ≥1 evidence row (trigger) |
| `argument_open` | `id` PK, `actor_id`, `argument_id`, `opened_at` | **the D17 eligibility record** (row-expand/sheet-open only; impressions are never written here); INDEX (actor, opened_at); 90-day individual retention → aggregated impression counts live in `argument_stats` |
| `example` | `id` PK, `summary` varchar(~400), `state` enum(verified,user_submitted,disputed), `created_by_actor` NULL, `created_at`, `embedding vector` | |
| `example_source` | `example_id` PK/FK, `source_document_id` FK **NOT NULL** | **the source-edge invariant: an `example` row cannot exist without this row** — enforced by creating both in `create_example()` (single fn, single tx) + a constraint trigger asserting existence on `example` insert commit |
| `argument_evidence` | PK(`argument_id`,`example_id`), `attached_at`, `detached_at` | ≤3 active per argument (trigger) |
| `source_dispute` | `id` PK, `example_id` FK (or `bullet_id` FK — exactly one, CHECK), `reporter_actor`, `reason` enum, `note`, `state` enum(open,upheld,rejected), `resolved_by`, `resolved_at` | |
| `argument_rank` | PK(`claim_id`,`argument_id`), `rank_score`, `position`, `rank_version` FK, `computed_at` | read model (TECH §7) |
| `rank_version` | `id` PK, `weights` jsonb, `deploy_sha`, `created_at` | audit of formula changes |
| `argument_stats` | `argument_id` PK, impression/open aggregates | fed by retention job from `argument_open` |

### Persuasion (`app`) — see §4

| Table | Key columns | Constraints |
|---|---|---|
| `persuasion_event` | `id` PK, `position_event_id` FK **UNIQUE**, `argument_id` FK, `mover_actor_id`, `from_stance`, `to_stance`, `quarantined_at_creation` bool, `created_at` | **append-only, immutable (§4)**; the UNIQUE on `position_event_id` is the duplicate-prevention primitive |
| `persuasion_event_status` | `id` PK, `persuasion_event_id` FK, `status` enum(active,voided_flipflop,excluded_quarantine,excluded_moderation), `reason`, `created_at` | **append-only status ledger** — voiding never mutates the event; current status = latest row; public MOVED counts join latest status = active |

### Editorial pipeline (`app`) — behavior in AI_EDITORIAL_ARCHITECTURE

| Table | Key columns | Notes |
|---|---|---|
| `pipeline_run` | `id` PK, `claim_day` date UNIQUE, `pipeline_version`, `rubric_version`, `started_at`, `finished_at`, `state`, `token_spend` | one per UTC claim-day; resumable |
| `claim_candidate` | `id` PK, `run_id` FK, `cluster_id` FK, `sentence`, `domain`, `tier`, `composite_score`, `state` enum(generating,gated_out,review_queued,approved,rejected,flagged,expired,published), `expires_at` | 72h news expiry (PRD §5.2) |
| `stage_artifact` | `id` PK, `candidate_id` FK, `stage` enum(13 stages), `state` enum(pass,fail,escalate), `input_ref`, `output` jsonb (non-authoritative payload; authoritative outputs — bullets, seeds — are written to their own tables at publish), `model_id`, `prompt_version`, `tokens_in`, `tokens_out`, `created_at` | UNIQUE(candidate, stage, attempt); **the replay/audit substrate** |
| `editorial_decision` | `id` PK, `candidate_id` FK UNIQUE, `decision` enum(approve,reject,flag,auto_approve), `reason_code` NULL, `decided_by` NULL(=auto), `decided_at`, `queue_entered_at` | **append-only**; decided_at−queue timestamps → founder-minutes metric |
| `category_stats` | PK(`domain`,`type`,`tier`), trailing approval counts, `graduated_at`, `revoked_at`, strike counters | graduation state machine (PRD §16.5) |

### Social surface, moderation, ops (`app`)

| Table | Key columns | Notes |
|---|---|---|
| `activity` | `id` PK, `actor_id`, `type` enum, `subject_kind/subject_id`, `payload` jsonb (render-only), `created_at`, `read_at` | INDEX (actor, created_at DESC); retention: 180d prune |
| `notification_pref` | `actor_id` PK, per-type toggles, `push_enabled`, `email_digest`, `local_tz`, `daily_hour` default 8 | |
| `push_send_log` | `id` PK, `actor_id`, `sent_on` date, `type`, `dedupe_key` UNIQUE | the ≤3/day cap = COUNT under constraint in send tx; retention 90d |
| `share_event` | `id` PK, `kind` enum, `claim_id`/`argument_id`, `sharer_actor` NULL, `token` UNIQUE, `created_at` | |
| `share_landing` | `id` PK, `token` FK, `landed_at`, `converted_actor` NULL | attribution only (D9) |
| `invite` | `id` PK, `inviter_actor`, `token` UNIQUE, `accepted_by` NULL | |
| `report` | `id` PK, `reporter_actor`, `target_kind/target_id`, `category` enum, `note`, `created_at` | |
| `moderation_case` | `id` PK, `lane` enum(auto,decision,appeal), `target_kind/target_id`, `sla_due_at` NULL, `state`, `opened_at`, `closed_at` | report→case clustering by target |
| `moderation_action` | `id` PK, `case_id` FK, `action` enum(dismiss,remove,warn,limit,suspend7,suspend30,ban,restore), `reason` NOT NULL, `actor_admin`, `created_at` | **append-only** |
| `claim_flag` | `id` PK, `claim_id`, `actor_id`, `kind` enum(unfair_framing,report), `created_at` | UNIQUE(claim, actor, kind); feeds tripwires |
| `audit_log` | `id` PK, `admin_actor`, `action`, `target_kind/target_id`, `reason`, `created_at` | **append-only**; permanent |
| `job_health` | `job_name` PK, `last_ok_at`, `last_error` | ops report substrate |
| `metric_definition` | PK(`name`,`version`), `sql_text`, `sql_hash`, `frozen` bool, `created_at` | kill-test rows `frozen=true` — no UPDATE grant on frozen rows (trigger) |

### Analytics (`analytics`)

| Table | Key columns | Retention |
|---|---|---|
| `event` | `id` PK, `actor_id` NULL(anon), `name` enum(claim_viewed, split_revealed, argument_viewed*, example_viewed, source_opened, prompt_rendered, share_landed_view, …), `subject ids`, `props` jsonb (minimal), `created_at` — monthly partitions | **90-day individual retention** for view-class rows → aggregate tables, then partition drop. *`argument_viewed` here is the impression record; the eligibility record is `app.argument_open` (D17 distinction is physical: two different tables) |
| aggregates (`daily_claim_funnel`, `argument_impressions`, …) | rollups written by retention job | permanent (aggregate-only) |

---

## 2. Position Append-Only Invariant (PRD §7, prompt §6)

**Write path — exactly one:** `app.record_position(actor, claim, new_stance | retract)` (single SQL function, single transaction):
1. `SELECT … FROM position_current WHERE actor=$1 AND claim=$2 FOR UPDATE` (also takes the `split_current` row lock in claim-id order → no deadlocks, no lost counter updates).
2. Enforce rate rules: ≤1 change/24h (from `last_change_at`); reject no-op stance.
3. INSERT `position_event` (kind, stance, prior_stance, `pre_reveal` — parameter is trusted only from the server tap path per TECH §5), UPSERT `position_current`, increment/decrement `split_current` (quarantine-aware), enqueue pg-boss messages (`position.created|changed`) **in the same transaction**.
4. Return `position_event.id` (the attribution handle, §4).

**Database-level protections (defense-in-depth beyond the single-path convention):**
- `REVOKE UPDATE, DELETE ON position_event FROM web_backend, worker, analyst_ro` + `BEFORE UPDATE OR DELETE` trigger raising `append_only_violation` (covers even a future superuser-adjacent role mistake).
- `position_current` and `split_current` writable only by `record_position()`/deletion/quarantine-fold functions (SECURITY DEFINER, owned by a definer role; direct table UPDATE revoked from app roles).
- CHECK: `kind='created'` ⇒ `prior_stance IS NULL`; `kind='changed'` ⇒ both stances NOT NULL and distinct; `kind='retracted'` ⇒ `stance IS NULL`.

**Concurrent changes:** the `FOR UPDATE` on `position_current` serializes per (actor, claim); double-submit yields the second tx seeing the updated stance → no-op rejection. Two different claims never contend.

**AGREE → IT'S COMPLICATED → DISAGREE, stored:** three `position_event` rows — `(created, stance=agree, prior=∅, t0)`, `(changed, stance=complicated, prior=agree, t1)`, `(changed, stance=disagree, prior=complicated, t2)` — plus `position_current = (disagree, first_event→t0, last_event→t2, changed_count=2)`. **Reconstruction:** ledger = ordered scan of `position_event` by (actor, created_at); current stance = projection row (and provably re-derivable: reconciliation job recomputes `position_current` and `split_current` from events nightly; drift alerts).

**Retraction:** `kind='retracted'` event; projection row deleted (claim leaves the public ledger), split decremented; historical events remain (tombstone semantics; content purge on account erasure per SECURITY_PRIVACY §5). **Deletion propagation:** the deletion job calls `record_position(retract)` per held position under the same single path — no special-case counter math.

**Ledger vindication lines** read `split_snapshot` at `position_current.first_at` vs `split_current` — both permanent, both aggregate.

## 3. Split Data Mechanics

Covered structurally above; the invariants: counters change only inside the three definer functions; snapshots append-only; percentages are presentation-layer (largest-remainder rounding in the serializer, tested); n<25 rule is serializer-level (counts-mode), never stored.

## 4. Persuasion Event Integrity (PRD §10, prompt §8; D17 ratified)

**A `persuasion_event` row can only come into existence through `app.attribute_persuasion(actor, position_event_id, argument_id)`** — the single write path bound to the position-change flow. There is no MOVED endpoint: the route manifest test (TECH §16) asserts no other route reaches this function, and the module surface exports no other writer.

Eligibility enforced **inside the function, in one transaction**:
1. `position_event_id` belongs to `actor`, `kind='changed'`, and `created_at > now() − interval '1 hour'` (**attribution window: 1h** — the sheet is immediate; the window covers retries/reconnects without opening a farmable gap).
2. The argument: exists, not deleted, on the claim of the position event, and **side-eligible** — argument's side opposes `prior_stance` (for complicated-movers: either side, matching PRD §10.2's option-list semantics).
3. **Opened-before-changed (D17):** `EXISTS (SELECT 1 FROM argument_open WHERE actor=$1 AND argument=$3 AND opened_at BETWEEN prior_position_time AND position_event.created_at)` — where `prior_position_time` = the previous event's timestamp. Impressions cannot satisfy this: they are written to `analytics.event`, a different table with no path into this predicate (the D17 distinction is physical). *Data-design consequence flagged:* `argument_open` has 90-day retention, so positions older than 90 days offer only recently-opened arguments — documented behavior (Final Output S).
4. Duplicate prevention: the **UNIQUE constraint on `persuasion_event.position_event_id`** — one attribution per change, race-proof at the constraint level (a concurrent double-tap gets a unique violation → idempotent success response).
5. Quarantine state stamped (`quarantined_at_creation`); initial `persuasion_event_status` row: `active` or `excluded_quarantine`.

**Skipped / off-platform:** no event row; the position_event's enqueued message carries `trigger=none|external` for analytics (skip-rate metric) — skips are never re-prompted (client state + `position_event_id`-keyed prompt-shown record in `analytics.event`).

**Immutability: yes — decided.** `persuasion_event` carries REVOKE UPDATE/DELETE + trigger, same as `position_event`. Voiding (flip-flop within 72h → PRD §10.6), moderation exclusion, and quarantine folding are all **status rows** in `persuasion_event_status` (itself append-only). Public MOVED counts and ranking join the latest status = `active`. History is never rewritten; the crown-jewel table is a ledger.

**Argument deletion after attribution:** argument rows are tombstoned, never deleted (FK intact); events persist in the log; display and ranking exclude tombstoned arguments (PRD §8.11).

**Race conditions summarized:** double-attribution → UNIQUE; attribution racing a further position change → window+FK checks bind it to the specific `position_event_id`, so a newer change never corrupts an older attribution; attribution racing argument deletion → tombstone check inside the tx.

## 5. Event Architecture (prompt §11)

Three event classes, deliberately not unified:

| Class | Source of truth | Producer → consumers | Delivery semantics | Retention |
|---|---|---|---|---|
| **Domain events** (position created/changed, persuasion recorded, claim published, argument countered, deletion requested, consent recorded…) | **The append-only relational rows themselves** — the tables *are* the event log (PRD §18) | Domain functions → pg-boss messages **enqueued in the same transaction** (pg-boss lives in the same Postgres: commit-atomic ⇒ transactional-outbox semantics with zero extra machinery) → consumers: Notifications, Ranking, Analytics rollups, Deletion orchestrator | At-least-once (pg-boss retries); consumers idempotent via natural keys | Rows permanent per table policy |
| **Analytics events** (views, reveals, prompt renders, share landings) | `analytics.event` | Server/route handlers (fire-and-forget insert, batched) → retention/rollup jobs | Best-effort (loss-tolerant by definition — none of these are "must not lose") | 90-day individual → aggregates |
| **Operational events** (job heartbeats, failures, budget breaches) | `job_health`, pg-boss failure store, Sentry | Worker → ops report + alerts | Best-effort | short |

**The must-not-lose set — position changes, persuasion events, consent changes, deletion events — are ACID rows in the domain class; their side-effect messages are commit-atomic.** No event bus, no Kafka, no separate outbox table: the V1-necessity test says pg-boss-in-Postgres already provides the guarantee. Migration trigger: extraction of the queue from the primary DB (at which point a real outbox table is introduced — noted in ADR-004).

## 6. Canonical event ↔ storage map (PRD §18 traceability)

| PRD §18 event | Stored as |
|---|---|
| `position_created` / `position_changed` / `position_retracted` | `app.position_event` rows |
| `claim_viewed`, `split_revealed`, `example_viewed`, `source_opened` | `analytics.event` (90d → aggregates) |
| `argument_viewed` (impression) | `analytics.event` |
| `argument_viewed` (open/expand — eligibility, D17) | `app.argument_open` (90d → `argument_stats`) |
| `argument_created` / `cosigned` / `uncosigned` | `app.argument`, `app.cosign` |
| `endorsement_given` | `app.endorsement` (with `giver_stance_at_time`) |
| `persuasion_event` | `app.persuasion_event` (+ status ledger) |
| `example_attached` | `app.argument_evidence` |
| `claim_published` (+lineage) | `app.claim` state transition + `claim_lineage` + `stage_artifact` |
| `claim_flagged` | `app.claim_flag` |
| `split_snapshot` | `app.split_snapshot` |
| `share_created` / `share_landed` | `app.share_event` / `share_landing` |
| `report_filed` / `moderation_action` | `app.report` / `moderation_action` |
| `consent_recorded` | `app.consent_record` |
| `account_deleted` | `app.deletion_tombstone` |

Education-quarantine readiness (PRD §18 invariant): `profile.cohort_tag` nullable enum column exists from day one (unused in V1); the frozen metric SQL and any future commercial aggregate filter `cohort_tag IS NULL` by construction.

## 7. Index & performance notes (V1-scale honesty)

Hot paths and their indexes: feed assembly (`claim(state, published_at)`, `claim_stats` PK), claim page (`argument(claim_id, side, deleted_at)` + `argument_rank` PK), ledger (`position_event(actor, created_at DESC)`), activity (`activity(actor, created_at DESC)`), attribution eligibility (`argument_open(actor, opened_at)`), dup detection (HNSW on `argument.embedding` filtered by claim — at per-claim cardinality this is near-free), search (GIN tsvector + trigram). At 100k MAU every table here is comfortably single-node; no partitioning except `analytics.event` (monthly, for retention-by-drop).
