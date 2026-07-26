# HABIT ARCHITECTURE — Why Someone Opens Agora Tomorrow

**Status:** Proposed. The most commercially decisive document in the set.
**Date:** 2026-07-25

---

## 0. The uncomfortable diagnosis

Before designing the loop, the honest problem statement — because Agora has a habit problem that Duolingo, Strava and Chess.com do not.

| Product | Felt deficit | Feedback | Timescale |
|---|---|---|---|
| Duolingo | *"I can't speak Spanish"* — concrete, admitted | Comprehension grows audibly | weeks |
| Strava | *"I'm unfit"* — felt in the body | Pace, distance, breath | weeks |
| Chess.com | *"I lost"* — unambiguous | Elo, and the game is fun regardless | instant |
| GitHub | none needed — it's where work happens | the work ships | instant |
| **Agora** | **almost nobody feels one** | **invisible** | **months** |

**Nobody wakes up thinking "I reasoned badly yesterday."** People know they're unfit. They know they can't speak French. They do *not* know their reasoning is weak — and Dunning–Kruger guarantees the people who most need this feel the least deficient. There is no soreness, no scoreboard, no moment of being obviously beaten.

So the strategic conclusion, which contradicts a lot of how we've been designing:

> **The daily habit cannot be built on "I want to improve my reasoning."**
>
> That is the month-six retrospective feeling. It is never the tomorrow-morning feeling. A product that depends on self-improvement as its daily hook will be opened by the small population who already have the identity — and they were going to be fine anyway.

What actually gets people to open something tomorrow is much more ordinary: **curiosity, unfinished business, and other people.** Self-improvement is the *retention* engine at month six. It is not the *acquisition* engine at day two, and conflating the two is the most common way products like this die.

---

## 1. "I open Agora because ___" — twenty answers, scored

Scored 1–5 on emotional strength (E), retention potential (R), ethical alignment (Eth), defensibility — could only Agora offer it (D), and scalability across the whole user base (S).

| # | I open Agora because… | E | R | Eth | D | S | Σ |
|---|---|---|---|---|---|---|---|
| 1 | **someone answered my argument and I want to reply** | 5 | 5 | 5 | 4 | 2 | **21** |
| 2 | **I want to know if my prediction was right** | 4 | 5 | 5 | 4 | 5 | **23** |
| 3 | **I want to know what people actually think about this** | 4 | 4 | 5 | 3 | 5 | **21** |
| 4 | **I want to know whether I changed anyone's mind** | 5 | 5 | 5 | 5 | 2 | **22** |
| 5 | I like the feeling of catching my own mistake | 5 | 5 | 5 | 4 | 2 | 21 |
| 6 | I want to see today's claim before anyone spoils it | 3 | 4 | 5 | 3 | 5 | 20 |
| 7 | it's three minutes and I always learn something | 3 | 4 | 5 | 2 | 5 | 19 |
| 8 | I want to understand this issue before I have to discuss it | 4 | 3 | 5 | 3 | 4 | 19 |
| 9 | I want to get better at arguing with people in my life | 5 | 4 | 4 | 3 | 3 | 19 |
| 10 | my circle is arguing about something and I want in | 4 | 4 | 5 | 4 | 2 | 19 |
| 11 | I want to see how people who disagree with me think | 4 | 3 | 5 | 4 | 3 | 19 |
| 12 | I want to know what the evidence actually says | 4 | 3 | 5 | 4 | 3 | 19 |
| 13 | I'm curious whether I'm still calibrated | 3 | 4 | 5 | 5 | 2 | 19 |
| 14 | I want to build a record I'm proud of | 4 | 5 | 5 | 4 | 1 | 19 |
| 15 | I'm in training for something | 3 | 5 | 5 | 3 | 2 | 18 |
| 16 | I want to defend my position | 4 | 3 | 3 | 2 | 3 | 15 |
| 17 | I want to win the argument I'm having tomorrow | 5 | 2 | 3 | 3 | 4 | 17 |
| 18 | my streak | 4 | 4 | 2 | 1 | 5 | 16 |
| 19 | my profile matters for my career | 3 | 4 | 4 | 4 | 2 | 17 |
| 20 | I want to be the kind of person who does this | 3 | 4 | 4 | 2 | 3 | 16 |

### What the ranking actually says

**No single answer wins, and that is the finding.** The top five split cleanly by *when in a user's life they apply*:

- **#2, #3, #6** work on day two, for everyone, and require nothing of the user.
- **#1, #4, #5, #10** are far stronger emotionally but only exist once someone has written something.
- **#14, #15, #19** only exist after months.

The mistake would be to pick one and build around it. **The right design is a relay** — each driver hands off to a stronger one before the first one fades.

**#2 deserves special attention.** *"Was I right?"* is the most underrated answer on this list: it is emotionally real, it works from day one, it is completely ethical, it produces objective feedback (a resolved outcome, not our opinion), it is nearly impossible to game, and it scales to every user regardless of whether they write. It is also currently a minor feature in our design. §5 argues it should be a major one.

**#18 (streak) scores worst on ethics and defensibility** and I would use it only in the humane form specified in `MOTIVATION_SYSTEM.md` §9 — a thin scaffold under other motives, never the load-bearing beam.

---

## 2. The motivation relay

Different mechanisms carry different phases. Each must be strong enough to hold until the next one activates.

```
 DAY 1–7      CURIOSITY        "what's today's claim / what do people think"
                 │             cost: 20s   ·   needs: nothing
                 ▼
 WEEK 1–4     RESOLUTION       "was I right?"  predictions resolve
                 │             cost: 30s   ·   needs: one prediction
                 ▼
 MONTH 1–3    RECIPROCITY      "someone answered me"  ·  "I moved someone"
                 │             cost: 2min  ·   needs: one published argument
                 ▼
 MONTH 3–12   COMPETENCE       "I caught that myself"  ·  visible skill gain
                 │             cost: —     ·   needs: measurement they trust
                 ▼
 YEAR 1+      IDENTITY         "this is who I am"  ·  record, circle, standing
                               cost: —     ·   needs: history and belonging
```

**Every handoff is a churn cliff.** The product's job is to get a user to the next driver before the current one wears out. Concretely: a user who has taken positions for two weeks but never made a prediction is at risk; one who has predicted for a month but never published is at risk; one who has published but never received a response is *acutely* at risk.

That gives us the four intervention points that matter more than any feature:

| Cliff | Intervention |
|---|---|
| Curiosity fading (~day 5) | Surface the first prediction resolution |
| Prediction alone (~week 4) | Invite composition at the moment of minority position |
| Published into silence (~48h) | **Guarantee a first response.** Seed it if necessary — this is legitimate |
| Competence invisible (~month 3) | The first honest measurement they believe |

---

## 3. The daily loop — first five minutes

Designed so the *floor* is 40 seconds and the *ceiling* is unbounded. Nobody should ever feel they failed the day.

```
 ┌── 0:00 ─────────────────────────────────────────────────────┐
 │ RESOLUTION FIRST                                            │
 │ "Yesterday you predicted 60% would agree. It was 58%."      │
 │ Your calibration curve, nudged.                             │
 └─────────────────────────────────────────────────────────────┘
 ┌── 0:20 ─────────────────────────────────────────────────────┐
 │ THE CLAIM                                                   │
 │ Today's proposition. Sourced context. Two teasers.          │
 └─────────────────────────────────────────────────────────────┘
 ┌── 0:50 ─────────────────────────────────────────────────────┐
 │ PREDICT → COMMIT                                            │
 │ "Where will people land?"  then  "Where do you stand?"      │
 │ Prediction before position. Both before the reveal.         │
 └─────────────────────────────────────────────────────────────┘
 ┌── 1:10 ─────────────────────────────────────────────────────┐
 │ THE REVEAL                                                  │
 │ The split. How close your prediction was. Where you sit.    │
 │ ◄── 40% of users leave here, having had a complete day      │
 └─────────────────────────────────────────────────────────────┘
 ┌── 1:30 ─────────────────────────────────────────────────────┐
 │ THE DAILY DRILL — one shared item, everyone gets the same   │
 │ Then: what the population picked, and why it's seductive    │
 └─────────────────────────────────────────────────────────────┘
 ┌── 3:00 ─────────────────────────────────────────────────────┐
 │ THE INVITATION (conditional, never nagging)                 │
 │ minority position → "you know something they don't"         │
 │ someone replied  → "your argument was answered"             │
 │ moved someone    → "you changed a mind"                     │
 └─────────────────────────────────────────────────────────────┘
```

### The psychology of each element

**Resolution first.** Opening on *your* outcome rather than our content. Zeigarnik: an open loop from yesterday is closed today, which is the strongest available reason to return. *Motivation:* self-knowledge. *Behaviour:* opens the app to find out. *Tomorrow:* today's prediction is tomorrow's open loop. *Long-term:* calibration is a genuine skill and this is deliberate practice on it.

**Predict before you position.** A small but consequential addition. It converts the reveal from a dopamine hit into a *test of your model of other people* — which trains perspective-taking, the skill most directly opposed to the contempt that ruins online argument. It also generates a Brier score (`ASSESSMENT_FRAMEWORK.md` §2), the closest thing we have to an ungameable number. *Motivation:* curiosity + competitiveness against yourself. *Long-term:* the most measurable skill in the tree.

**Commit before reveal.** Unchanged, and now pedagogically load-bearing: forming an independent view before exposure to social proof is lesson one. *Motivation:* the reveal is withheld. *Long-term:* it is the anti-anchoring habit itself.

**The reveal.** The emotional peak. Surprise when you were wrong about the room is the single most re-tellable thing that happens. *Why tomorrow:* the surprise is not repeatable from memory — a new claim means a new unknown.

**The Daily Drill.** One shared item for everyone, resolving at midnight. Bounded, universal, shareable as a *pattern* rather than a score. *Motivation:* puzzle instinct. *Behaviour:* 60 seconds. *Long-term:* it is the transfer engine — interleaved retrieval practice disguised as a puzzle.

**The invitation.** Conditional, contextual, declinable with zero friction and no re-prompt. Fires hardest at minority position, because being outnumbered on something you have lived is the strongest natural trigger to explain yourself.

### The floor matters more than the ceiling

A complete, satisfying day is **90 seconds**: see yesterday's result, take a position, see the split. Everything after is optional depth.

This is Duolingo's actual discipline and it is widely misread. Their genius is not the streak; it is that a streak can be maintained in under a minute. **The habit forms on the floor, not the ceiling.** Design the 90-second day as the product and everything longer as a bonus, or the habit never forms at all.

---

## 4. Weekly and seasonal rhythm

Daily loops decay without a larger cycle. Three nested rhythms:

**Weekly — The Study (10 minutes, Sunday).** What you argued, where you were miscalibrated, the one error you repeated, the drill prescribed for it, one thing to try. This is where a week of activity becomes learning; without it we have engagement, not development.

**Monthly — The Retrospective.** One of your arguments from a month ago, shown beside a recent one. No commentary, just the pair. **Seeing your own improvement in your own words is more convincing than any metric we could compute**, and it costs us nothing but retrieval.

**Seasonal — 90 days.** Profile updated with confidence intervals, faculties re-windowed, one milestone named. Long enough for real change; short enough to feel like a fresh start.

---

## 5. The reframe I would seriously consider

Following the diagnosis in §0 to its conclusion produces an uncomfortable but genuine strategic option, and I would be failing you not to put it on the table.

> **What if the daily product is forecasting, and argument is the depth layer?**

The case for it is strong:

- **Prediction has a natural daily loop that reasoning lacks.** Questions resolve. There is a right answer. Feedback is objective and arrives on a schedule we do not control.
- **It creates the felt deficit we currently lack.** Nobody believes their reasoning is poor. Everybody discovers they are overconfident the moment they see their calibration curve — and that discovery is genuinely startling, immediate, and undeniable.
- **The loop is proven.** Forecasting communities sustain intense daily engagement with no social-media mechanics at all, on a smaller and less mainstream premise than ours.
- **It is the most defensible measurement we have.** Brier scores against reality cannot be argued with or gamed.
- **It fixes the writing problem sideways.** Once you *know* you are overconfident, the motivation to reason more carefully is intrinsic rather than exhorted.

The case against: forecasting is a niche taste; our claims are normative ("should we…") as often as predictive; and it risks pulling us toward a different, smaller product.

**My actual recommendation is the hybrid, and it is not a fudge.** The daily loop leads with prediction-and-resolution because that is what reliably brings people back; the argument layer is what they graduate into, and it is where the depth, the community and the moat live. Predicting the split, which we already half-designed, is exactly the bridge: it is a forecast about *people*, it trains perspective-taking, and it sits inside the existing claim loop without a new content pipeline.

That is a meaningful change of emphasis from everything before this document, and I think it is the right one.

---

## 6. Notification discipline

The place where products with good values quietly become products with bad ones.

**We send at most one notification per day**, and it must be about *the user's own open loop*, never about our content needing attention.

| Send | Never send |
|---|---|
| "Your prediction resolved" | "You haven't opened Agora in 3 days" |
| "Someone answered your argument" | "Don't lose your streak!" |
| "Your argument changed someone's mind" | "12 new arguments on today's claim" |
| "Your weekly study is ready" (opt-in) | "People are debating without you" |

The test: **would a thoughtful person be glad we interrupted them?** If the notification's real purpose is our retention rather than their interest, it fails. Every product listed in the brief that we admire has, at some point, failed this test — and it is the most visible way we could betray the positioning.
