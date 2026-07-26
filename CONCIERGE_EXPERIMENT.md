# CONCIERGE EXPERIMENT — 14 Days, No Product

**Status:** Ready to run. Requires no engineering.
**Purpose:** find out why Agora might fail, before building more.
**Date:** 2026-07-25

---

## 0. The frame

This is a **falsification exercise**, not a demo. Its success condition is *learning something that changes what we build* — and the most valuable outcome is discovering the concept is wrong in a specific, nameable way.

Three commitments make that real:

1. **Thresholds are pre-registered below.** Written before the run, not fitted after. If you move a threshold once results are in, the experiment has taught you nothing.
2. **Kill criteria are explicit.** There is a defined result that means stop.
3. **We recruit strangers.** Friends will be polite, and politeness destroys the signal completely. This is the single most common way founder-run tests produce false positives.

You are the operator. Budget **2–3 hours a day for 14 days.** That is the real cost and it should be committed before starting, because the experiment fails if you go quiet on day 9.

---

## 1. What we are testing

Four load-bearing hypotheses. Everything else in eighteen documents rests on these.

| | Hypothesis | If false |
|---|---|---|
| **H1** | People will write a real argument when invited | The concept is dead in its current form |
| **H2** | Coaching makes writing feel *easier*, not harder | The coach is friction wearing a helpful costume |
| **H3** | Opposition + review is the moment people value most | We built the wrong half of the loop |
| **H4** | People return without being nagged | There is no habit, only novelty |

Plus one secondary: **H5** — assigned-side (The Turn) is accepted rather than refused.

Note what we are *not* testing: whether reasoning improves. Fourteen days cannot show that, and any claim otherwise would be noise. We are testing whether the behaviour happens at all.

---

## 2. Who

**Two cohorts of 15. The comparison is the point.**

**Cohort A — High propensity (15).** People who already write arguments online: active commenters on Hacker News, r/changemyview, forecasting communities, debate alumni, opinion newsletter writers.

**Cohort B — Normal (15).** Educated professionals who read the news and have views but do not write them anywhere. Recruited via a general call, not from argument communities.

**Why two cohorts rather than one:** it converts a single ambiguous number into a diagnosis.

| A writes | B writes | Reading |
|---|---|---|
| Yes | Yes | Concept is viable and broad. Proceed |
| Yes | No | Real but niche — a product for the already-inclined. Reconsider TAM and positioning |
| No | No | **The concept is dead.** If people who argue for fun won't do this, nobody will |
| No | Yes | Something is badly wrong with how we recruited or framed it |

**Exclusions:** friends, family, anyone who has heard the pitch, anyone who would feel bad letting you down. Ideally participants never learn you are the founder — recruit as "a research study on how people argue."

**Recruitment ask:** *"14 days, ~10 minutes a day. One claim daily, you take a position and optionally explain it. You'll get written feedback on your reasoning from a coach. £40 / gift voucher on completion."* Pay them — unpaid participants drop out for reasons unrelated to the product, which contaminates the retention signal.

---

## 3. What runs, day by day

**Infrastructure:** one WhatsApp or Discord group per cohort, one Google Doc per participant, one tracking spreadsheet. Nothing else.

### The daily rhythm

**08:00 — you post the claim** to both groups. One sentence, three sourced context bullets, one short quote from each side. Then:

> *Before you look at anything: where will people land? Reply with your guess (agree / disagree / complicated, and a % if you like), then your own position.*

**Participants (2 min).** Predict the split, state their position, in the group.

**12:00 — you post the reveal.** The actual split of the group. Then the invitation, directed at whoever is in the minority:

> *@person you're in the minority today. That usually means you know something the others don't. Want to write why? Two minutes, in your doc.*

**Anyone who writes (3 min).** Idea → Argument → Evidence, in their private doc.

**You coach (10–15 min per argument).** In the doc margin, following D22 absolutely:

- **You never write a sentence they could paste.** Questions, diagnoses, and evidence pointers only. If you catch yourself drafting, delete it and ask a question instead.
- One or two observations maximum, not a list.
- Name the abstract rule, not just the local fix.
- Before they finish, ask: **"Which part of your argument will they attack?"** Record the answer — this is the H3 instrument.

**Evening — opposition.** Every argument gets answered within 24 hours. Match participants who disagree; where nobody is available, **you write the opposition yourself**, in the voice of someone who genuinely holds that view. One rebuttal, one response, then stop.

**Next morning — the review.** Two lines in their doc:

> *You predicted they'd attack your evidence. They attacked the assumption underneath your second sentence — the one I flagged. Want to revise?*

Log whether they revise.

### Two set-pieces

**Day 7 — The Turn.** Assign each participant the side they did *not* take on a previous claim. *"Write the strongest case for it."* Then have someone who actually holds that view rate it: *"would you say they understood you?"* This tests H5 and produces the most interesting qualitative data in the study.

**Day 14 — exit interview.** 20 minutes, every participant, recorded. Questions in §6.

---

## 4. The claims

Fourteen needed. Selection rules:

- **No electoral politics** (D4). Contested, not tribal.
- Span domains: economics, tech, business, geopolitics, science, ethics, culture.
- Mix types: some where evidence is close to decisive, some where it genuinely is not, some normative ("should") and some empirical ("does").
- Each must be **arguable in two minutes by a non-expert** — if it needs domain expertise, it tests knowledge rather than reasoning.
- Two should be deliberately near-consensus, to see whether people will write when they agree with everyone.

Draft set:

| Day | Claim |
|---|---|
| 1 | Remote work reduces innovation |
| 2 | The 4-day work week is a luxury of rich economies |
| 3 | Universities should stop using standardised test scores |
| 4 | Protectionism hurts long-term growth |
| 5 | Social media is the main driver of the teen mental-health decline |
| 6 | Nuclear power is the most realistic path to decarbonisation |
| 7 | **The Turn** (re-uses days 1–6) |
| 8 | AI regulation harms startups more than incumbents |
| 9 | Cities should abolish minimum parking requirements |
| 10 | Most corporate training is theatre |
| 11 | Chip subsidies are national security spending, not industrial policy |
| 12 | Sports leagues should have no salary caps |
| 13 | Reading fiction makes people more empathetic |
| 14 | Anonymity online does more good than harm |

---

## 5. Metrics and pre-registered thresholds

Recorded daily in the sheet, per participant.

| # | Metric | Kill | Concern | Pass | Strong |
|---|---|---|---|---|---|
| M1 | **Writing rate** — % of positioned users who wrote, cohort A | <10% | 10–20% | **>25%** | >40% |
| M2 | Writing rate, cohort B | <5% | 5–12% | **>15%** | >25% |
| M3 | **Repeat writing** — wrote ≥3 times in 14 days | <15% | 15–30% | **>35%** | >50% |
| M4 | **Median time to publish** | >6 min | 4–6 min | **<3 min** | <2 min |
| M5 | **Abandonment** — started, didn't finish | >50% | 35–50% | **<30%** | <20% |
| M6 | **Day-14 retention** — still positioning | <30% | 30–50% | **>60%** | >75% |
| M7 | **Revision rate** after opposition | <10% | 10–25% | **>35%** | >50% |
| M8 | **Weak-link prediction accuracy** — trend | flat/down | flat | **rising** | — |
| M9 | **The Turn acceptance** | <40% | 40–60% | **>70%** | >85% |
| M10 | **Advocate endorsement** of steelmen | <20% | 20–40% | **>50%** | >70% |
| M11 | **Unprompted returns** — opened without a nudge | <25% | 25–45% | **>55%** | — |
| M12 | **Coaching wanted** — asked for more, or objected to less | — | — | **net positive** | — |

**Decision rule, pre-registered:** proceed if **M1, M3, M6 and M7 all reach Pass**. Those four are the loop closing — people write, keep writing, come back, and improve what they wrote. Anything less is a pivot conversation, not a build conversation.

---

## 6. Qualitative instruments

Numbers at n=30 are directional. The interviews are where the actual finding lives.

**Daily, one line in the group:** *"One word for how today felt."* Cheap, and the drift over 14 days is informative.

**After each coached argument:** *"Did that make it easier or harder?"* — the H2 instrument, in five words.

**Exit interview (20 min, recorded):**

1. Walk me through the last time you wrote something here. What were you thinking?
2. What made you *not* write, on the days you didn't?
3. What was the best moment in two weeks? The worst?
4. When the coach questioned your reasoning — how did that feel, honestly?
5. Did anything change how you thought about a topic? Which one?
6. Have you noticed yourself doing anything differently outside this? *(Probe hard; do not accept a polite yes.)*
7. The Turn — what was that like?
8. Would you keep doing this if I stopped paying you? *(Then: would you pay? — and watch the face, not the answer.)*
9. What would you tell a friend this was?
10. What's the thing you'd change?

**Question 9 is the most important in the study.** How participants spontaneously describe Agora tells us the real category, and it is the only honest read on positioning we will get.

---

## 7. What would invalidate the concept

Pre-registering these matters, because in the moment every result is rationalisable.

**Fatal — stop and rethink from scratch**

- **Cohort A won't write** (M1 <10%). People who argue online for free won't do it here. Nothing downstream survives this.
- **Writing happens once and stops** (M3 <15%). Novelty, not a loop.
- **Coaching makes it harder** (M2 negative, M4 >6 min, M5 >50%). The core differentiator is friction. The whole design premise is wrong.

**Serious — pivot required**

- **Only cohort A writes.** Real but niche. Reconsider the market and possibly the positioning entirely.
- **Nobody revises** (M7 <10%). Stages 5–6 of the loop are inert, which means we have an opinion platform again.
- **The Turn is refused** (M9 <40%). The steelmanning mechanic — the strongest thing in the design — does not survive contact with users.
- **They write but don't return** (M6 <30%). Expression works, habit doesn't. `HABIT_ARCHITECTURE.md` is wrong.

**Concerning — investigate**

- Coaching received as criticism rather than help (interviews).
- Only extroverts and existing debaters engage.
- Nobody notices anything about their own reasoning by day 14.
- The evidence step is skipped by nearly everyone.

**Results that would look like success and are not:**

- High engagement in the group chat with no written arguments — that is a discussion group, which is a different (and easier) product.
- Enthusiasm from participants who know you are the founder.
- People praising the *idea* while not doing the *behaviour*. Watch what they do, not what they say in the exit interview.

---

## 8. Deliberately not tested

Naming these prevents scope creep and prevents over-reading the result.

| Not tested | Why |
|---|---|
| Whether reasoning improves | Needs 6+ months and blind raters |
| Whether AI coaching matches human coaching | You are the coach; that is the point — validate the *behaviour* before automating it |
| The evidence graph | Hand-curate 3–5 atoms per claim. We are testing whether evidence is *wanted*, not whether retrieval works |
| Reputation, progression, the Gym | Downstream of the loop existing |
| Scale, monetisation, the credential | Meaningless at n=30 |

**On the coach being human:** this is a feature, not a compromise. If a thoughtful human coach cannot make people want to write, no model will. You are establishing the ceiling. If the behaviour works with you, automation is an engineering problem; if it fails with you, it fails.

---

## 9. Outputs

By day 21, three artifacts:

**The result** — the metrics table with actuals against pre-registered thresholds, and the decision rule applied honestly. Written *before* you interpret it.

**The failure inventory** — every way it broke, ranked by severity. This is the primary deliverable. The experiment succeeds by producing a good version of this document.

**The revised loop** — which of the six stages survived, which need redesign, and what to build first.

---

## 10. The two mistakes to avoid while running it

**Rescuing the experiment.** When participants go quiet on day 6, the instinct is to nudge, cheerlead, make it work. Don't — unprompted return (M11) is the metric that matters most and you will destroy it. Post the claim, do the coaching, answer what is asked. Nothing else.

**Coaching too well.** You will be a far better coach than our model, and you will be tempted to be brilliant. Keep to the constraints: one or two observations, questions not answers, never a sentence they could paste. **The point is to test the mechanic at a realistic level, not to prove that expert coaching is valuable.** We already know it is; nobody can afford it, which is why we are building this.

And one instruction that matters more than the rest: **if the result is bad, publish it to yourself in full and act on it.** The value of this fortnight is entirely in your willingness to believe a disappointing number over eighteen documents of good design — including all of mine.
