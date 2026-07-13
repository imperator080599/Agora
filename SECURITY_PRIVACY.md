# SECURITY_PRIVACY.md — Agora V1 Security & Privacy Architecture

**Version:** 1.0 · 2026-07-12
**Translates:** DATA_ASSET_STRATEGY §4 (constitutional principles), PRD §19 (privacy requirements), PRD §17 (moderation) into enforced architecture. Companions: DATA_MODEL.md (schemas), TECHNICAL_ARCHITECTURE.md.

---

## 1. Identity / Opinion Isolation (prompt §9)

**Chosen mechanism: separate Postgres schemas + separate database roles + a pseudonymous key indirection — in one database.** Assessment of the options:

| Option | Verdict |
|---|---|
| Separate databases | Real boundary but doubles ops (two backup/migration/monitoring surfaces) and breaks the transactional deletion flow; not V1-necessary |
| Separate schemas + roles + key indirection | **Selected** — a *real, enforceable* boundary (grants are enforced by Postgres, not convention) at zero ops cost |
| App-layer discipline only | Rejected — "don't join these tables" is not a boundary |

**The design (DATA_MODEL §0):**
- `auth` (Supabase-managed: email, credentials, sessions) and `identity` (actor map, pseudonym registry, push endpoints, anti-abuse signals) vs `app`/`analytics` (opinion domain keyed by pseudonymous `actor_id`).
- `actor_id ≠ auth_user_id`. The only join point is `identity.actor_map`, readable exclusively through `identity.resolve_actor(auth_uid)` — a SECURITY DEFINER function owned by a definer role. No role with `app` read privileges holds SELECT on `actor_map` or anything in `auth`.
- **Email storage:** in `auth` only (Supabase). Never copied into `app`. Email delivery jobs resolve address at send time through a definer function `identity.delivery_address(actor_id)` granted only to the notification-delivery role, which has **no read grant on opinion content** (it receives pre-rendered payloads).
- **IP handling:** never stored raw. `identity.signup_signal` keeps a salted hash + coarse device hint for velocity checks, 30-day retention. Platform/web-server logs are configured to the platforms' minimum retention; IP never enters application logs (§6).
- **Fraud-prevention data** lives entirely in `identity`; quarantine *state* (a boolean/timestamp, no signals) is denormalized onto `app.profile` so opinion-side logic never touches signals.

**What an engineer or analyst must NOT be able to query casually — and structurally cannot under `analyst_ro`:**
- "Email/IP of the person behind pseudonym X" (no grant on `auth`/`identity`).
- "All positions of the account with email Y" (no reverse path: `actor_map` unreadable).
- "Which users are persuadable by argument class Z, with contact info" — the DATA_ASSET §4 nightmare query; impossible without the audited admin path.
- Individual reading behavior beyond 90 days (rows no longer exist — retention by partition drop).

**The audited exception:** User Ops (sanctions, appeals, legal requests) needs identity access. It runs under `admin_ops`, every identity-layer read is written to `audit_log` (append-only) with reason, and the surface is the single INT-05 screen. This is the *only* legitimate join path and it is logged by construction.

## 2. Database Roles & Row-Level Security (prompt §10)

**Roles:**

| Role | Grants (summary) |
|---|---|
| `web_backend` | `app` R/W via domain functions (definer-owned single write paths for positions/persuasion/splits; direct DML on ordinary tables); `identity` via `resolve_actor()`/`registerPseudonym()` only; `analytics` insert; pg-boss enqueue. No UPDATE/DELETE on append-only tables (revoked). |
| `worker` | `app` R/W as needed per job; pg-boss consume; `analytics` R/W; `identity.delivery_address()` + `push_subscription` read for delivery adapters only |
| `worker_notify` (sub-role for dispatch code path) | activity/push_send_log write, delivery lookups — **no write grant on any opinion table** (enforces PRD §21's "notifications never mutate product events") |
| `analyst_ro` | SELECT on `app` (minus grant-excluded columns) + `analytics`; nothing on `auth`/`identity` |
| `admin_ops` | `app` moderation/claim-ops writes + audited identity reads; all actions through `AdminOps.auditedAction()` |
| `definer_owner` | owns SECURITY DEFINER functions; not a login role |

**RLS assessment:** V1's client never touches the database (no PostgREST/GraphQL exposure; Supabase client-side API disabled), so authorization is enforced in the server layer + role grants. RLS is still **enabled deny-all on every `app`/`identity` table for Supabase's `anon`/`authenticated` roles** — defense-in-depth so that a misconfigured auto-API exposure fails closed. RLS becomes *mandatory-by-policy* (real policies, not deny-all) the day any direct client-DB path is enabled — recorded as the migration trigger in ADR-003.

**Application-layer authorization matrix (enforced in the server layer; tested by the route-authz matrix test):**

| Actor class | Can | Cannot |
|---|---|---|
| Public visitor | Read `ClaimPublicView` surfaces, public profiles, charter; visitor-reveal POST; land shares | Any write; any revealed view; Activity/Settings |
| Authenticated user | Positions/arguments/co-signs/endorsements/attribution per PRD rules (side-match, rate limits, quarantine checks — all in domain functions); own settings/export/deletion | Others' private data (none exists beyond prefs); moderation surfaces; editorial surfaces |
| Argument author | Edit text within freeze rules; manage own evidence; delete own argument | Editing others'; un-freezing |
| Editorial reviewer (founder) | INT-01 decisions, flagship selection | Editing candidate text (structurally absent per PRD AC-16) |
| Moderator (founder) | INT-02 lanes, sanctions ladder, split freeze | Reading identity data outside INT-05's audited path |
| Administrator | Claim ops, source ops, user ops — all audit-logged | Bypassing append-only (revoked at DB level even for `admin_ops`) |
| Background workers | Per-job grants above | `worker_notify` writing opinion data |

**Security-through-UI is absent by construction:** every rule above is a server-side check or a grant; the UI merely reflects them.

## 3. Account Security & Admin Compromise Posture

- Auth: magic-link email + OAuth (no passwords to breach); session cookies httpOnly/secure/SameSite=Lax; session revocation on deletion.
- **Founder/admin accounts:** hardware-key or TOTP 2FA mandatory (Supabase Auth MFA); admin routes additionally gated by a role claim checked server-side; admin sessions shorter-lived; every admin action audit-logged. Admin compromise blast radius is bounded by DB grants: even `admin_ops` cannot rewrite append-only history or bulk-export the identity map (no such grant; bulk export path doesn't exist).
- Secrets: platform secret managers; quarterly rotation note in ops docs; Anthropic/Voyage/Resend keys scoped and budget-capped.

## 4. GDPR Architecture (prompt §23)

Operating posture: controller established in France → GDPR + CNIL supervision; international English-speaking user base; Supabase EU region for the primary store.

| Requirement | V1 implementation (technical control) |
|---|---|
| **Lawful basis** | Service provision under Art. 6(1)(b) for account/product data; **published positions/arguments are special-category-adjacent (political opinions, Art. 9)** — V1 posture: explicit consent at signup (Art. 9(2)(a)) for processing opinion data to operate the service, layered with 9(2)(e) (manifestly made public by the user's own publishing act) as secondary ground. **This dual-basis framing requires counsel sign-off (§8-Q1).** Consent is versioned and recorded (`consent_record`), re-consent on material change (PRD §19.3). |
| **DPIA** | Large-scale processing of special-category data → a DPIA is required **before public launch**; the strategy documents provide most inputs; counsel item (§8-Q2). |
| **Consent versioning** | `consent_version` + `consent_record`, append-only; every write session stamped (DATA_MODEL). |
| **Data export (Art. 20)** | Self-serve; worker job assembles JSON bundle (ledger, arguments, endorsements given/received, own persuasion events, consent history) from `app` only → Storage → signed URL → auto-expiry 7 days. |
| **Erasure (Art. 17)** | §5 below; target ≤30 days, public removal immediate. |
| **Data minimization** | No real names, no phone, no address, no demographics; one credential; salted-hash IP 30d; PRD §18's rejected-instrumentation list is CI-enforced. |
| **Retention** | Schedule as implemented: view-events 90d→aggregate; signup signals 30d; activity 180d; push log 90d; source full-text per licensing policy; opinion/argument/persuasion/consent/audit permanent (the product *is* the record — disclosed at signup); export bundles 7d. |
| **Processor inventory & DPAs** | Supabase (EU; DB/auth/storage) · Vercel (hosting/CDN) · Railway (worker) · Anthropic (pipeline text; **no user personal data in pipeline inputs by design** — the pipeline processes news, not user content; the only user text reaching Anthropic in V1 is *none* — duplicate detection uses Voyage embeddings) · Voyage AI (argument text embeddings — pseudonymous content, no identifiers attached) · Resend (email addresses + notification content) · Sentry EU (scrubbed telemetry) · GitHub (code only). DPAs + SCCs required for each US processor; inventory published in the privacy policy. **Voyage receiving argument text and Resend receiving emails are the two transfers to scrutinize (§8-Q4); EU alternatives identified (Brevo; self-hosted embedding model) if counsel objects.** |
| **International transfers** | Primary data EU-resident; transfers limited to the processors above under SCCs; documented in the ROPA (records of processing) kept in-repo. |
| **Sensitive-data risk posture** | The DATA_ASSET §4 charter is implemented structurally: aggregate-only surfaces, k≥100 reserved for any future segmentation (no segmentation exists in V1), no individual targeting query paths, education-quarantine column pre-provisioned, no commercial exports of any kind in V1. |
| **Minors** | 16+ self-declaration at signup (PRD); no age estimation tech in V1 — adequacy is a counsel question (§8-Q3). |
| **Transparency** | `/charter` (refusal list) + privacy policy with the processor inventory + plain-language signup summary (PRD §19.4); transparency-report practice noted for the subpoena risk (DATA_ASSET §4). |

## 5. Account Deletion & Tombstones (prompt §24)

**Orchestrated by a resumable worker job** (`deletion_tombstone.steps_completed` checklist; retried until complete; stuck >24h alerts):

1. **Sever identity first:** delete `identity.actor_map` row and revoke sessions → even a mid-job crash leaves the opinion data unlinkable. Then delete `auth` user (email purged), `push_subscription`, `signup_signal`.
2. **Public removal (immediate):** `profile.deleted_at` set → ledger URL 404s; pseudonym release scheduled +90d.
3. **Positions:** `record_position(retract)` per held position — splits recount through the single write path (PRD AC-18).
4. **Arguments:** tombstoned (`deleted_at`); counters re-parented to stub display (presentation-level); co-signers notified via the standard event.
5. **Co-signs/endorsements:** soft-removed (`removed_at`) → ranking recomputes.
6. **Persuasion history:** events are aggregate-feeding rows keyed by `actor_id` (now unlinkable to any identity). **Erasure treatment:** the mover's events receive a status row `excluded_moderation('erasure')`? — No: decided treatment is **content-preserving pseudonymous retention**: the rows retain stances/timestamps under the orphaned `actor_id` (no identity path exists), while MOVED aggregate counts are already aggregate. Whether orphaned pseudonymous event rows satisfy Art. 17 without further redaction is a **flagged legal ambiguity (§8-Q5)**; the fallback design (implemented as a switch, decided by counsel): additionally null the `mover_actor_id` via a dedicated redaction function permitted through a narrow definer path (a deliberate, audited exception to append-only for erasure compliance).
7. **Split snapshots:** untouched — aggregates by nature (PRD AC-18).
8. **Analytics:** individual rows for the actor deleted ahead of retention; aggregates untouched.
9. **Backups:** PITR/backups age out on the provider's ≤30-day cycle — erasure completes definitively within the backup horizon; documented in the privacy policy (standard practice; counsel confirms wording, §8-Q5).
10. **Confirmation** to the (already-captured, then discarded) credential address; `deletion_tombstone.completed_at` set; audit-logged.

## 6. Logging Restrictions (binding allowlist)

Log records may contain: request id, route template, pseudonymous `actor_id`, status, latency, job names, entity *ids*. **Never:** emails, IPs, auth tokens/cookies, pseudonym↔auth pairs, position/argument/example content bodies, push endpoints, AI prompt/response bodies outside the `stage_artifact` store. Enforced by a central log-schema serializer (fields not on the allowlist are dropped, not passed through) + Sentry scrubbers + a CI grep-gate for `console.log` outside the logger. AI pipeline traces live in the database (`stage_artifact`), not in logs — queryable, replayable, and inside the same access-control regime as everything else.

## 7. Threat Model (prompt §27)

| Threat | Likelihood | Impact | V1 mitigation | Later mitigation |
|---|---|---|---|---|
| Sockpuppet accounts distorting small splits | High | High (early trust) | New-account quarantine (shadow counts, 72h/3-position gate, PRD §6.8); signup velocity via salted-IP/device signals; email-verified accounts only | Device fingerprinting vendor, optional verification (LATER per PRD matrix) |
| Split manipulation (brigading a claim) | Med | High | Quarantine + velocity anomaly detection job + admin split-freeze with public chip (PRD §6.8) | Graph-based coordination detection |
| Coordinated co-signing / ranking manipulation | Med | Med | log-dampened co-sign weight (PRD §9.4); per-claim co-sign cap (3); velocity flags → moderation | Reviewer-weighted trust scores |
| Persuasion farming (fake MOVED) | Med | High (crown-jewel integrity) | Structural: attribution requires prior recorded position + opened-argument (D17) + position change + 1/claim/7d + flip-flop voiding + quarantine exclusion + reciprocal-pair detection (PRD §10.6) | Statistical anomaly models on the persuasion graph |
| Spam/LLM-boilerplate arguments | High | Med | 280 cap; duplicate collapse (embeddings); rate limits (5/day, 2/claim); 24h+3-position account gate; report category; behavior-targeted enforcement (PRD §8.12) | Similarity clustering review tools |
| Malicious links (evidence submissions) | Med | Med | URL scheme allowlist (https), domain blocklist, `rel="noopener nofollow ugc"` on all UGC links, link-health job; submit-a-source entries marked USER-SUBMITTED until verified | URL reputation service |
| **Prompt injection via ingested news content** | High (it *will* happen) | Med–High | Pipeline posture (AI doc §5): all fetched text is data, never instructions — structured-extraction prompts with delimited untrusted blocks, no tool-use during extraction stages, JSON-schema-constrained outputs, entailment double-check against sources, adversarial gate on a separate prompt, human gate pre-graduation; injected content can at worst produce a bad *candidate*, which the gates + founder exist to catch | Injection-detection classifiers; cross-model gate |
| Source poisoning (compromised/low-quality source feeds) | Low–Med | High (brand) | Allowlist-only ingestion; multi-source corroboration (≥3/≥5 region-diverse); numbers require 2 sources; monthly allowlist review; per-source failure/quality tracking | Source reputation scoring |
| Admin account compromise | Low | High | MFA mandatory; audited admin paths; DB grants bound blast radius (no append-only rewrite, no identity bulk export); session controls | Separate admin origin, IP allowlist |
| Identity/opinion dataset exposure (breach) | Low | Very High | §1 isolation (opinion data leaks ⇒ pseudonymous; identity leaks ⇒ no opinions attached); EU region; encrypted at rest/transit; minimal PII to steal | Field-level encryption for `auth` extras |
| Scraping (ledgers/claim pages) | High | Med (privacy optics; data asset) | Rate limits per IP/session; public pages are public by design but bulk-profiling prohibited in ToS; no bulk/export endpoints exist; pagination caps | Bot-management tier (Vercel/Cloudflare) |
| Rate-limit abuse / cost attacks (visitor-reveal, retrieval endpoints) | Med | Med (cost) | Per-IP and per-actor rate limits on POST endpoints; AI endpoints quota-capped per actor; daily token ceilings; CAPTCHA-class challenge held in reserve (not shipped — friction) | Challenge escalation |

Honest statement (per the prompt): V1 does not "solve" abuse — it makes the crown-jewel signals structurally expensive to fake, bounds the blast radius of everything else, and instruments detection so the founder sees drift before users do.

## 8. Legal / Privacy Questions Requiring Qualified Counsel (before public launch)

1. **Art. 9 lawful basis** for processing published political-opinion data: is the explicit-consent + manifestly-made-public dual framing sound, and what exact consent language is required at signup?
2. **DPIA**: conduct and document formally; confirm whether prior consultation with CNIL is triggered.
3. **Minors**: is 16+ self-declaration adequate for this risk profile in target jurisdictions, or is stronger age assurance required?
4. **Transfers**: SCC adequacy for Anthropic (news-text only), Voyage (pseudonymous argument text), Resend (emails); whether EU-resident alternatives should be mandated for any of them.
5. **Erasure vs pseudonymous history**: do orphaned (identity-severed) position/persuasion event rows satisfy Art. 17, or must `mover_actor_id`/`actor_id` be additionally redacted? (The redaction switch is designed either way — §5.6.) Plus standard backup-aging wording.
6. **News/TDM**: the source-ingestion policy of AI_EDITORIAL_ARCHITECTURE §4 — excerpt limits, full-text retention window, EU TDM opt-out (Art. 4 DSM) compliance, and the curated-argument quoting practice.
7. **Platform classification**: DSA obligations at V1 scale (likely minimal as a small platform, but confirm notice-and-action mechanics in the moderation design suffice).
