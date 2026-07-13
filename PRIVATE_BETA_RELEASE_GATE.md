# PRIVATE_BETA_RELEASE_GATE.md — Agora V1

**Version:** 1.0 · 2026-07-13 · The gate for inviting the first external cohort (M13 exit). Two sections; **every item is checked, none pre-marked complete. Legal items are NOT marked complete by engineering under any circumstance.**

## A. TECHNICAL RELEASE BLOCKERS

**Functional & invariants**
- [ ] All PRD AC-1..AC-20 pass via their TEST_PLAN suites on the release SHA
- [ ] Full release-blocking set green (T-CR, T-AO, T-PE, T-SE, T-DEL, T-NC, T-FD) + supporting suites
- [ ] Editorial golden set passes at frozen tolerance (T-GS); golden set ≥60 cases
- [ ] Kill-test metric definitions inserted, hash-pinned, `frozen=true` (founder decision 4) — verified immutable (T-AN-1)
- [ ] Traceability matrix current: no orphaned requirement, all rows point at merged code

**Quality & coverage**
- [ ] Accessibility: axe clean on core surfaces; keyboard traversal incl. review queue (DAC-11); reduced-motion verified
- [ ] Browser coverage: latest Chrome, Safari (macOS+iOS), Firefox, Edge; Android Chrome
- [ ] Mobile responsive: all 22 UX flows completable at 360px; 200% zoom without loss (DAC-10)
- [ ] Visual regression baseline approved (DESIGN acceptance criteria spot-audit DAC-1..14)

**Data safety & ops**
- [ ] PITR enabled and verified on production project; backup schedule confirmed
- [ ] **Restore drill executed**: point-in-time restore to a scratch project, app boots against it, invariant suite passes on restored data — documented with date
- [ ] Deletion test on production stack (synthetic account): full T-DEL graph verified live
- [ ] Export test on production stack: bundle correct, link expiry works
- [ ] Split reconciliation clean for 7 consecutive days pre-invite

**Abuse, limits, access**
- [ ] Rate limits live on all C-* contracts (spot-verified with load script); visitor-reveal bot filter active
- [ ] Quarantine behavior verified with fresh accounts; sanctions ladder exercised end-to-end incl. appeal
- [ ] Admin access: founder MFA enforced; admin routes deny non-admin (T-SEC matrix on prod build); audit log capturing all admin actions (T-AD)
- [ ] Credential inventory matches ACCESS_CONTROL §4 on all platforms; no stray secrets (scanner clean); rotation runbook in place
- [ ] Data API confirmed disabled on production project; grant/DEFINER/RLS audits green against prod schema

**AI & editorial ops**
- [ ] AI cost ceilings tested live: soft alert fires at $15 simulated spend; **hard stop at $30 halts pipeline calls and triggers degraded day**; monthly 80% alert wired
- [ ] **Degraded-day test:** pipeline artificially failed → feed serves evergreen bank correctly, review queue shows the banner, no quality-threshold lowering anywhere
- [ ] **Provider outage test:** Anthropic unreachable (mock) → pipeline pauses, ops alert fires, product unaffected
- [ ] Model-routing calibration checkpoint completed (ADR-012 / IMPLEMENTATION_PLAN §9) and routing table committed **before automation enabled**
- [ ] Evergreen bank stocked (≥60 approved at beta; target 100 by public); source allowlist reviewed with licensing column; source-link health job green
- [ ] Founder review-window rehearsal: 3 consecutive real days within 15 minutes; missed-window path exercised once deliberately

**Monitoring & response**
- [ ] Sentry alerts routed (email/push to founder) for: pipeline run missed, publication slot missed, deletion stuck, reconciliation drift, budget breach, job DLQ growth
- [ ] INT-07 weekly ops report generating with real data; `job_health` all green
- [ ] Runbook (`docs/ops/runbook.md`): incident basics, restore, rotation, degraded-day, provider outage, moderation surge, contact escalation
- [ ] `PUBLIC_APP_URL` set to the purchased beta domain across all environments; OG/share/deep links verified on it; no hardcoded domain anywhere (lint + grep gate)

## B. LEGAL / COUNSEL RELEASE BLOCKERS (status: ⚠ OPEN — completed only by counsel/founder, never by engineering)

- [ ] ⚠ Art. 9 lawful-basis opinion delivered; **explicit-consent signup copy approved by counsel** (currently draft — pending review)
- [ ] ⚠ DPIA completed and documented; CNIL prior-consultation question answered
- [ ] ⚠ Processor inventory + DPAs executed: Supabase, Vercel, Railway, Anthropic, Voyage, **Brevo**, Sentry; SCC posture for the two US transfers (Anthropic, Voyage) confirmed
- [ ] ⚠ Privacy notice + ToS (incl. anti-scraping/profiling clause, 16+ terms) published and counsel-approved
- [ ] ⚠ Erasure treatment decision: orphaned-pseudonymous rows vs redaction switch (SECURITY_PRIVACY §5.6/§8-Q5) — switch configured per the answer
- [ ] ⚠ News ingestion/TDM/excerpt policy reviewed (AI_EDITORIAL §4; §8-Q6); allowlist licensing column sign-off
- [ ] ⚠ Minors posture (16+ self-declaration adequacy) confirmed
- [ ] ⚠ DSA notice-and-action adequacy of the moderation design confirmed for launch scale
- [ ] Charter page (`/charter`) live and consistent with counsel-approved policies (engineering readies it; counsel approves wording)

**Gate rule:** Section A fully green + Section B fully resolved ⇒ invite the founding cohort. Any A-item red = no invites. Any B-item open = no *external* users (internal/founder testing only), regardless of A.
