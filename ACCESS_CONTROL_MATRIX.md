# ACCESS_CONTROL_MATRIX.md — Agora V1 Database & Credential Access

**Version:** 1.0 · 2026-07-13 · Incorporates the Phase-0 Supabase readiness audit (verified against current official docs; see IMPLEMENTATION_PLAN §0).

---

## 1. Audit result: the service-role question

**CAN THE WEB APPLICATION OPERATE WITHOUT A GENERAL-PURPOSE SERVICE ROLE KEY? — YES.**

Verified basis: Supabase officially supports **disabling the Data API entirely** (or exposing zero schemas) — with it off, the auto-generated REST/GraphQL endpoints do not respond regardless of keys, and current Supabase behavior no longer auto-exposes new tables ([hardening guide](https://supabase.com/docs/guides/database/hardening-data-api), [changelog](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically)). Agora **disables the Data API and GraphQL at the project level**; therefore no PostgREST role (anon/authenticated/service_role) can reach any schema, and the service-role/secret key is never part of the web application's operation.

**Chosen access pattern: (B) direct Postgres connections with constrained application roles — for every domain operation class.** Option A (Data API + user JWT + RLS) is rejected because reveal-gating is response-shaping logic PostgREST cannot express, and the Data API is off. The hybrid is limited to **Supabase Auth's HTTP endpoints** (not the Data API): browser uses the **publishable key** (public by design) for sign-in flows; the server verifies the resulting JWT locally (JWKS) and resolves `actor_id` via the definer function over its direct connection.

**One scoped exception (worker-only, not the web app):** account deletion must remove the `auth.users` record; direct SQL into `auth` is unsupported, so the **Railway worker holds the Supabase secret (service) key solely for `auth.admin.deleteUser`**, used in exactly one module (deletion job), never present on Vercel, never in the browser, rotated on schedule. With the Data API disabled, this key's blast radius is the Auth Admin API only.

**Per operation class:**

| Operation class | Runtime | Access path | DB role |
|---|---|---|---|
| Auth sign-in/up, session refresh | Browser ↔ Supabase Auth | Publishable key (public) | — |
| Session → actor resolution | Vercel server | JWT verify (JWKS, local) → `identity.resolve_actor()` | `web_backend` |
| All domain reads/writes (positions, arguments, claims, feed, search, activity) | Vercel server | Direct Postgres via **Supavisor transaction pooler (port 6543, IPv4)**, `prepare:false`, small pool per instance | `web_backend` |
| Jobs, pipeline, ranking, splits, recaps, retention | Railway worker | Direct Postgres via **Supavisor session pooler (port 5432, IPv4)** — session mode supports the session features pg-boss and long transactions want ([connection docs](https://supabase.com/docs/guides/database/connecting-to-postgres), [IPv4/IPv6 note](https://supabase.com/docs/guides/troubleshooting/supabase--your-network-ipv4-and-ipv6-compatibility-cHe3BP)) | `worker` |
| Notification dispatch | Railway worker (dispatch path) | same connection, restricted role | `worker_notify` |
| Editorial/moderation/admin surfaces | Vercel server (admin routes) | direct PG | `admin_ops` (SET ROLE from a dedicated pool after admin-claim check) |
| Auth user deletion | Railway worker | Supabase Auth Admin API | secret key (scoped exception) |
| Migrations | GitHub Actions / founder CLI | Supabase CLI / direct PG | `migrator` |
| Ad-hoc analysis | founder psql (rare) | direct PG | `analyst_ro` |

## 2. SECURITY DEFINER function rules (binding for every such function)

Applies to: `identity.resolve_actor`, `identity.register_pseudonym`, `identity.delivery_address`, `app.record_position`, `app.attribute_persuasion`, `app.cosign`, `app.create_example`, `app.claim_transition`, quarantine-fold, deletion-step functions, erasure-redaction switch.

1. **Owner:** `definer_owner` (NOLOGIN); never `postgres`, never a runtime role.
2. **`SET search_path = ''`** in the function definition; **every object reference schema-qualified** (audit query in CI asserts both properties for all SECURITY DEFINER functions — also satisfies Supabase's `function_search_path_mutable` linter).
3. **EXECUTE grants:** `REVOKE EXECUTE … FROM PUBLIC` (Postgres grants PUBLIC by default — audit catch, must be explicit) then `GRANT EXECUTE` to the named role(s) only, listed per function in the migration.
4. **Input validation first:** every parameter validated inside the function (enum casts, ownership checks, rate rules) — definer code trusts nothing from the caller.
5. **Actor resolution:** functions take `actor_id` from the server layer *only after* `resolve_actor()`; no function accepts an auth uid except `resolve_actor` itself.
6. **Audit:** functions touching `identity` from admin paths insert an `audit_log` row inside the same transaction.
7. **No dynamic SQL**; `STABLE`/`VOLATILE` declared accurately; owner has exactly the privileges the function body needs (definer_owner's own grants are the ceiling — kept minimal per function group).

## 3. Grant matrix (role × object)

Verbs: S=SELECT I=INSERT U=UPDATE D=DELETE X=EXECUTE(named fns) —=no access. **No `GRANT ALL` anywhere.** Column-level grants noted. `anon`/`authenticated` (Supabase API roles) have **no grants and RLS deny-all everywhere** — inert because the Data API is disabled; kept locked as fail-closed backstop. Also mandatory: `ALTER DEFAULT PRIVILEGES` in every app schema revoke PUBLIC/api-role defaults so future objects inherit nothing (audit catch — Supabase historically attached default grants in `public`; our schemas are created clean and `public` schema stays empty).

| Object | anon / authenticated | web_backend | worker | worker_notify | admin_ops (moderator+admin surfaces) | analyst_ro | migrator | definer_owner |
|---|---|---|---|---|---|---|---|---|
| `auth.*` (Supabase) | Supabase-internal | — | — | — | — | — | — | — |
| `identity.actor_map` | — | via X(resolve_actor) | — | — | S (audited surface only) | — | DDL | S |
| `identity.pseudonym` | — | X(register/rename fns) | S (recap rendering names) | S | S/U (sanction renames) | — | DDL | S/I/U |
| `identity.push_subscription` | — | I/D (subscribe/unsub via server) | — | S/D (delivery, prune) | S | — | DDL | — |
| `identity.signup_signal` | — | I via X(fn) | — | — | S (audited) | — | DDL | I |
| `app` append-only set (`position_event`, `persuasion_event`, `persuasion_event_status`, `consent_record`, `split_snapshot`, `editorial_decision`, `moderation_action`, `audit_log`, `claim_version`) | — | S + I via fns/direct I where specified; **U/D revoked + trigger-blocked** | S + I (jobs) ; **no U/D** | S on activity-relevant only | S + I (their surfaces); **no U/D** | S | DDL only | per fn |
| `app.position_current`, `app.split_current` | — | via X(record_position) | via X(deletion/quarantine/reconcile fns) | — | S | S | DDL | S/I/U/D (fn bodies) |
| `app.claim`, `claim` content tables | — | S; U on state via X(claim_transition) | S/I/U (pipeline publish fns) | S | S/I/U (corrections, withdrawal via fns) | S | DDL | per fn |
| `app.argument` | — | S/I; **U column-limited** (`deleted_at`, evidence links; `text` only while unfrozen — trigger) | S/I (curated seeds); U (rank job via argument_rank instead) | S | S/U (moderation removal cols) | S | DDL | — |
| `app.cosign`, `app.endorsement` | — | I/U(`removed_at` only)/S via fns | S | — | S/U(removal) | S | DDL | — |
| `app.argument_open` | — | I/S | S (retention job D) | — | — | S | DDL | — |
| `app.example`, `example_source`, `argument_evidence`, `source_dispute` | — | I/S/U(state via fns) | I/S/U (pipeline, verification) | — | S/U (dispute resolution) | S | DDL | per fn |
| `app.argument_rank`, `claim_stats`, `rank_version` | — | S | S/I/U/D (recompute) | — | S | S | DDL | — |
| pipeline tables (`pipeline_run`, `claim_candidate`, `stage_artifact`, `category_stats`) | — | S (review queue), I(editorial_decision) | S/I/U (runner) | — | S | S | DDL | — |
| `app.activity`, `notification_pref`, `push_send_log` | — | S/U(read_at, prefs) | — | S/I (dispatch) | S | — | DDL | — |
| `app.report`, `moderation_case` | — | I (file report), S(own) | S | — | S/I/U (triage) | S (aggregates) | DDL | — |
| `app.share_event/landing`, `invite`, `evergreen_serve` | — | S/I | S/I | — | S | S | DDL | — |
| `app.deletion_tombstone`, deletion fns | — | I via X(requestDeletion) | X(deletion steps), U(steps/completed) | — | S | — | DDL | per fn |
| `app.metric_definition` | — | S | S | — | S/I (new versions; **frozen rows U-blocked by trigger**) | S | DDL | — |
| `analytics.event` + aggregates | — | I/S | S/I/U (rollups), D (retention/partition) | — | S | S | DDL | — |
| `pgboss.*` | — | I (transactional enqueue insert) | full DML (queue owner-operator) | (via worker) | — | — | DDL (install) | — |
| Storage buckets (og-cards public-read; exports private) | public read og-cards only | signed-URL issue (exports) | write both | — | S | — | config | — |
| Privileged functions (per §2) | — | X: resolve_actor, record_position, attribute_persuasion, cosign, create_example, register_pseudonym, requestDeletion | X: deletion steps, quarantine fold, reconcile, publish fns, delivery_address | X: delivery_address | X: claim_transition(correct/withdraw), erasure-redaction switch, audited identity reads | — | — | owner |

## 4. Credentials by runtime

| Location | May hold | Must never hold |
|---|---|---|
| **Browser** | Supabase **publishable key** only (public by design); VAPID public key; Sentry DSN (public) | Any DB connection string; secret/service key; Anthropic/Voyage/Brevo keys; VAPID private key |
| **Vercel (server env)** | `DATABASE_URL` (web_backend @ transaction pooler), `ADMIN_DATABASE_URL` (admin_ops, admin routes only), Supabase JWKS/project URL, publishable key, Sentry DSN, `PUBLIC_APP_URL` | Supabase secret key; worker role creds; Anthropic key (no model calls from web in V1); migrator creds |
| **Railway (worker env)** | `DATABASE_URL` (worker @ session pooler), `NOTIFY_DATABASE_URL` (worker_notify), Anthropic key (budget-capped), Voyage key, Brevo key, VAPID private key, **Supabase secret key (deletion module only — documented scoped exception)**, Sentry DSN, `PUBLIC_APP_URL` | Migrator creds; admin_ops creds |
| **GitHub Actions** | `MIGRATOR_DATABASE_URL` / Supabase access token (environment-protected, main-branch only), test-DB throwaway creds; Vercel/Railway deploy tokens | All runtime provider keys (AI/email/push) — CI mocks them |
| **Local dev** | Local Supabase stack creds (throwaway), fake-AI mode default; real provider keys only in an opt-in `.env.local` never committed | Production anything |

**Rotation:** quarterly scheduled rotation for DB role passwords, Brevo/Voyage/Anthropic keys, VAPID pair (push re-subscription tolerated), Supabase secret key; immediate rotation on any suspected exposure; rotation runbook in `docs/ops/`; all creds exist only in platform secret managers (never in repo/CI logs — CI masks + secret-scanning on).

## 5. Standing audit jobs (CI + weekly)

- CI migration gate: grant-matrix snapshot test (information_schema diff vs this document's fixture), SECURITY DEFINER audit (owner, search_path, PUBLIC-execute), RLS-enabled check on all `app`/`identity` tables, append-only revoke check.
- Weekly ops report: Data API still disabled (project settings via config check), role list unchanged, default-privilege drift scan.
