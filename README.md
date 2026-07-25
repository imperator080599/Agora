# Agora

An opinion ledger. One claim a day, stated as a single falsifiable sentence. You take a
position before you are allowed to see what anyone else thinks — commit, then reveal.

This repository holds both the authoritative specification set (`PRD.md`,
`TECHNICAL_ARCHITECTURE.md`, `DATA_MODEL.md`, `SECURITY_PRIVACY.md`, `ACCESS_CONTROL_MATRIX.md`,
`DESIGN.md`, and the rest) and the implementation. The specs are the contract; the code
inherits them and does not silently deviate.

## What runs today (M1 walking skeleton)

One responsive web application serving both laptop and mobile from the same codebase
(mobile-first, per `DESIGN.md` §24). The end-to-end path is live:

- **Today feed** — the flagship claim plus everything else currently live.
- **Claim page, pre-position** — the claim sentence, sourced context bullets, and text-only
  debate teasers. No split data of any kind is reachable here.
- **Take a position** — Agree / Disagree / It's complicated, as a plain form POST that works
  without client-side JavaScript.
- **Claim page, post-position** — the split (percentages at n ≥ 25, raw counts below that),
  the curated debate map, and a once-per-24-hours position change.

### Breakpoints

| Range | Layout |
| --- | --- |
| < 768px | Single column, stacked debate, full-width stance buttons |
| ≥ 768px | Stance buttons in a row, debate map in two columns |
| ≥ 1120px | Reading column widens to 60rem, feed becomes a two-column grid |

## Invariants the code enforces

These are structural, not conventions — breaking one fails a build, a test, or a database call.

1. **Commit-to-reveal.** `ClaimPublicView` has no split fields *as a type*: the keys are absent,
   not nulled. A type-level guard in `packages/contracts/src/public/claim.ts` fails compilation
   if a denylisted key is ever added, and the factory picks fields explicitly rather than
   spreading database rows, so a new column cannot leak by accident.
2. **One write path for positions.** `app.record_position()` is the only way a position is
   recorded. `web_backend` holds no `INSERT`/`UPDATE`/`DELETE` on the position tables, so a raw
   write from application code fails at the database rather than in review.
3. **Append-only history.** `app.position_event` rejects `UPDATE` and `DELETE` by trigger *and*
   by revoked grant.
4. **Identity/opinion isolation.** `auth_user_id` and the pseudonymous `actor_id` live in
   separate schemas with no foreign key between them. The web tier can call
   `identity.resolve_actor()` but cannot read `identity.actor_map` — verified, not assumed.
5. **No service-role key.** The web application connects only as `web_backend`. There is no
   general-purpose service-role credential anywhere in the web tier.
6. **No hardcoded origin.** The deployment origin comes from `PUBLIC_APP_URL` only.

## Local development

Requires Node 22+ and PostgreSQL 16.

```bash
npm install
cp .env.example .env        # adjust DATABASE_URL_* for your local Postgres
npm run db:reset            # drop, migrate, and seed the fixture world
npm run dev                 # http://localhost:3000
```

`npm run db:reset` refuses to run against anything but a local database.

### Checks

```bash
npm test        # contract and split-rule tests, including leakage guards
npm run typecheck
```

The fixture world is deterministic. The four-day-week claim carries an 83/11/6 split
specifically so leakage tests have distinctive digits to search for: those numbers must never
appear in a pre-position response.

## Layout

```
apps/web            Next.js App Router application (the only user-facing surface)
packages/contracts  View types and serializers — the commit-to-reveal boundary
packages/domain     Data access; the only module that talks to Postgres
packages/db         Migrations, migration runner, seed, local reset
packages/fixtures   The deterministic fixture world
```

## Not yet built

Supabase Auth (the current dev adapter issues a signed anonymous cookie), the pg-boss worker
and AI editorial pipeline, user-authored arguments, MOVED ME attribution, notifications, and
the analytics surface. Milestones and sequencing are in `IMPLEMENTATION_PLAN.md`.
