# MOTIVATION SYSTEM — Progression Without Popularity

**Status:** Proposed.
**Governing constraint:** Popularity is never the objective. No mechanic may reward reception over reasoning.
**Date:** 2026-07-25

---

## 1. The problem, and a warning worth reading before the design

Writing costs three minutes. Tapping costs five seconds. Absent a reason, almost nobody writes, and the entire vision depends on people writing.

The brief proposes XP, levels, titles, streaks, skill trees. I want to design that system — but first I owe you the finding that most gamification projects fail on, because it determines the *shape* of everything below.

> **The overjustification effect.** When you attach an extrinsic reward to an activity someone already finds intrinsically interesting, their intrinsic motivation for it tends to *decrease*. The reward reframes the activity from something done for its own sake into something done for payment. Withdraw the reward and behaviour drops below where it started. This is one of the more robust findings in motivational psychology, and it has killed a great many well-intentioned points systems.

Thinking hard about a claim you care about is intrinsically motivating for exactly the people we want. **A naive XP system would take that and make it feel like a chore they are being paid for in fake currency.**

The related distinction, from the same literature, is the one to design around:

| Feedback that is **controlling** | Feedback that is **informational** |
|---|---|
| "Write 3 arguments to reach Level 4" | "Your causal reasoning is sharper than it was in April" |
| Points for volume | Evidence of competence |
| Undermines intrinsic motivation | *Supports* it |

Both are "progression". Only one works. So:

> **Design rule 0 — every mechanic must be a mirror, not a currency.** It exists to show you something true about your own competence. If it exists to make you do more of something, it is a currency, and it will corrode the motivation it was meant to create.

That single constraint disqualifies leaderboards, volume XP, and daily quotas — and it still leaves a rich, satisfying progression system, which is what the rest of this document is.

---

## 2. Foundations

**Self-Determination Theory** identifies three needs that sustain intrinsic motivation. Every mechanic here serves at least one:

| Need | How Agora serves it |
|---|---|
| **Competence** | Visible, honest evidence that your reasoning is improving |
| **Autonomy** | You choose whether to write, what to argue, when to stop. Nothing is required. |
| **Relatedness** | Real humans read you, argue back, and occasionally change their minds |

**Goal orientation** (Dweck). *Mastery* orientation — "get better" — produces persistence through difficulty. *Performance* orientation — "look good" — produces avoidance of hard tasks, because failure threatens identity. Every social platform's ranking mechanics manufacture performance orientation. **Test each mechanic: does it make a user want to attempt something hard, or avoid looking bad?**

**Flow.** Engagement peaks when challenge matches skill. Argues for adaptive difficulty in drills, and for the coach's fading (`REASONING_ENGINE.md` §9).

**What we deliberately refuse:** variable-ratio reward schedules. Intermittent, unpredictable reinforcement is the slot-machine mechanic underneath every engagement-optimised feed. It works, it is the reason those products are compulsive, and using it would make us the thing we are defining ourselves against. Our rewards are **contingent and predictable**: you earn them by doing the thing well, and you can see exactly why.

---

## 3. The five design principles

1. **Reward the behaviour, never the reception.** You control whether you address the strongest counterargument. You do not control whether anyone reads you. Rewarding reception is popularity with extra steps.
2. **Progression is earned by demonstrated skill, not accumulated volume.** Ten thoughtless arguments must advance you less than one careful one.
3. **Private by default.** Progression is your mirror. Titles may be *displayed* by choice; nothing is ever *ranked*.
4. **Never compare users.** Your only comparison is your past self. No leaderboards, ever — not global, not among friends, not "top 10% of thinkers this week".
5. **Changing your mind is the highest-status act available.** Not a consolation prize. The single most honoured behaviour in the system.

---

## 4. Reps, not XP

**A Rep is one completed act of reasoning that met a quality floor.** The gym metaphor is deliberate: reps are how you got stronger, not what you were paid.

Rules that keep it a mirror:

- **Quality-gated.** An argument below the floor (`ARGUMENT_EVALUATION.md`) is not a rep. It is not punished either — you can publish it, and you learn from what happens. It simply is not training.
- **Diminishing returns within a day.** The third argument in one sitting counts less than the first. Kills grinding, and reflects the truth that quality falls with fatigue.
- **Effort-weighted.** Attaching evidence is a rep. Writing a full argument with a rebuttal is worth several. Rungs on the ladder carry honest weights.
- **No decay.** Your history is yours; nothing evaporates for being away a fortnight. Punishing absence is a currency behaviour.
- **Never a spendable balance.** Reps buy nothing. They are a count of work done.

---

## 5. The Faculties — a skill tree that tells the truth

Six faculties, each mapped to a dimension the evaluator already measures. This is the skill tree, and unlike most it is not a tree of things you *unlock* — it is a picture of what you have *become*.

| Faculty | What it measures |
|---|---|
| **Structure** | Clear thesis, stated premises, no circularity or non-sequitur |
| **Evidence** | Appropriate, well-scoped, honestly represented support |
| **Counterargument** | Anticipating and answering the strongest objection |
| **Clarity** | A reader understands you on the first pass |
| **Calibration** | Confidence proportional to evidence |
| **Humility** | Engaging opposing views at their strongest; updating when warranted |

Each is a level 1–10, computed from **your evaluations over a rolling 90-day window** — not cumulative activity. So the level says something true: *this is how you reason now*.

**Peak and Current Form.** Rolling windows mean levels can fall, and a falling number is demoralising and can read as punishment for a bad week. So we show both, borrowing from how chess ratings are actually experienced:

```
   COUNTERARGUMENT        Peak 7   ·   Current form 6
   ▓▓▓▓▓▓▓░░░
   You've been publishing without addressing the strongest objection.
   Two arguments that answer one would put you back at 7.
```

Peak is permanent — it is a thing you did and nobody can take it. Current form is honest and actionable. Together they are motivating rather than punishing, and they never lie.

**Faculties are private.** No user sees another's.

---

## 6. Titles — earned by behaviour, not by score

Titles are the one *displayable* element, and they come from specific, countable, hard-to-fake behaviours. Not from scores (scores get gamed) and not from popularity (which we do not measure).

| Title | Earned by |
|---|---|
| **Evidence Builder** | 25 contributed atoms passing verification |
| **Counterargument Master** | 50 arguments addressing the strongest objection *before* the coach raised it |
| **Logical Thinker** | 30 consecutive arguments with no detected structural defect |
| **Persuasion Craftsman** | 25 persuasion events |
| **Steelmanner** | 10 times writing the strongest version of a view you disagree with |
| **Mind-Changer** | 10 position changes after engaging contrary evidence |
| **Bridge-Builder** | 25 times supplying a missing warrant in someone else's argument |
| **Debate Mentor** | 25 suggestions that another user adopted and that improved their evaluation |
| **Curator** | A collection used by 50 other people |
| **Corrector** | 10 times publicly correcting your own published argument |

Two of these deserve comment.

**Mind-Changer** should be among the most visibly prestigious things on the platform. Every other product on earth rewards you for holding your ground; making this high-status is our cheapest and most powerful defence against the smugness that kills this category.

**Corrector** rewards publicly amending your own work. Costly, honest, and almost nowhere on the internet is it rewarded.

Titles are **displayed at the user's option**, never ranked, and never sorted on.

---

## 7. The participation ladder

Your instinct is right and it is the most important structural idea in this document. Ten rungs, each genuinely useful to the system, each a small step from the one below.

| # | Rung | Time | What it gives the system |
|---|---|---|---|
| 0 | Take a position | 5s | The split; the audience |
| 1 | **Moved me** — mark what changed your thinking | 2s | **Persuasion events for others** |
| 2 | Co-sign an argument — "this says it better than I could" | 3s | Signal of which reasoning lands |
| 3 | Attach an evidence atom to someone's argument | 30s | **Feeds the graph** |
| 4 | Ask a question of an argument | 20s | Surfaces gaps the author can fix |
| 5 | Supply a missing warrant in someone's argument | 60s | Teaches both parties |
| 6 | One-sentence take | 45s | The first act of authorship |
| 7 | Full argument (Idea → Argument → Evidence) | 3m | The core artifact |
| 8 | Rebut a challenge to your argument | 2m | Depth; defended reasoning |
| 9 | Curate a collection · mentor a newcomer | ongoing | Compounding community assets |

Three properties make this work:

**Every rung is real work, not busywork.** Rung 1 generates the persuasion events that motivate writers. Rung 3 builds the moat. Rung 5 is peer teaching. There is no participation theatre.

**The ratchet.** After you comfortably perform a rung, the product occasionally invites you one step up — at a good moment, never as a nag, always declinable without consequence. *"You've co-signed four arguments on this claim. What would you add that none of them said?"*

**No rung is a lesser state.** Someone who lives at rungs 0–2 for a year and changes their mind three times has become a better thinker. The copy must never suggest otherwise.

---

## 8. The Gym — drills, and the answer to "why write?"

The best answer to the writing-motivation problem may not be a better incentive to write. It may be a lower-effort way to practise that makes writing feel achievable.

**Short reasoning drills. 30–90 seconds. No audience. No stakes.**

| Drill | Task |
|---|---|
| **Spot the flaw** | Find the defect in a short argument |
| **Supply the warrant** | What unstated assumption connects these two statements? |
| **Which evidence?** | Two atoms; which better supports this argument, and why? |
| **Steelman it** | Given a weak version of a view, write its strongest form |
| **Scope check** | Does this finding actually support this conclusion? |
| **Predict the split** | Guess how people positioned — calibration training |

Why this is more than a side feature:

- **It makes "reasoning gym" literal**, which is the product's whole identity.
- **Difficulty adapts** to your faculty levels — flow, by construction.
- **Drills are the on-ramp to writing.** Someone who has done twenty *Supply the warrant* drills finds the Composer's step 2 far less intimidating, because they have practised the exact move in a low-stakes setting.
- **Cheap to run and grade** — bounded tasks with known answers, so this is the least expensive part of the product per unit of learning.
- **It gives the 90% something to do daily** that is genuinely educational and requires no audience.

I would rank the Gym as the highest-leverage unbuilt feature in this document.

---

## 9. Rhythm: streaks, challenges, seasons

**Streaks — of thinking, not writing.** A streak day is any day you took a position. Low bar deliberately: it should measure showing up, not output.

Streaks exploit loss aversion, which is powerful and easy to make cruel. Two humane constraints: **grace days** (two per month, automatic, no ceremony) and **repair** (a broken streak can be restored the next day). We want a habit, not hostages. And the streak counter is private.

**Weekly goals — chosen, never assigned.** At week's start, pick one: *address the counterargument every time* · *cite evidence on every argument* · *change my mind at least once if the evidence warrants*. Self-set goals serve autonomy; assigned quotas destroy it.

**Seasons — 90 days, and the reason for the length.** Faculties, form, and drill difficulty reset their window each season, with a season summary: what improved, what regressed, what to work on. Ninety days is long enough for real change to be measurable and short enough to feel like a fresh start. Season summaries are also where the *delta* framing lives, which is the most motivating true thing we can tell anyone.

---

## 10. What we will not build

| Rejected | Why |
|---|---|
| Leaderboards of any kind | Manufactures performance orientation; the single most toxic mechanic available |
| Follower counts | Popularity as objective |
| Public likes / upvotes on arguments | Rewards agreeability, not quality; creates the outrage gradient |
| Visible view counts | Reception, not reasoning |
| Volume XP | Overjustification; rewards quantity |
| Variable-ratio rewards | Compulsion mechanics |
| Daily writing quotas | Controlling; produces filler |
| Public faculty scores | Status game; punishes beginners into silence |
| Badges for logging in | Rewards presence, teaches nothing |
| Notification streak-pressure | Coercion dressed as care |

**Every one of these would increase engagement.** That is precisely why they are listed. If our metric review ever proposes one of them, the correct response is to question the metric.

---

## 11. Gaming resistance

Any measured thing gets optimised, so the mechanics are chosen to make gaming either impossible or indistinguishable from the behaviour we want.

- **Quality-gated reps** mean volume alone does nothing.
- **Rolling windows** mean past grinding does not carry you.
- **Behaviour-based titles** are harder to fake than score-based ones — you cannot fake a verified evidence atom.
- **Peer-adoption requirements** (Debate Mentor) need another human to accept your help.
- **Diminishing daily returns** cap burst farming.
- **Mind-Changer needs genuine evidence engagement** — flip-flopping without reading contrary atoms does not count.
- Titles are **revocable** on detected abuse, and the graph's verification queue catches evidence spam before it counts.

The deepest protection: **the reward is a mirror.** Gaming a mirror gets you a distorted picture of yourself and nothing else. There is no leaderboard to top and no audience to impress, so the payoff for cheating is a lie you tell yourself.

---

## 12. Measuring whether this works

| Question | Measure |
|---|---|
| Do people write more? | Composition rate per positioned user (target H1 ≥ 15%) |
| Do they write *better*? | Evaluation trend per user — the point of the whole thing |
| Is the ladder smooth? | Rung-to-rung progression rates; where users stall |
| Is the Gym an on-ramp? | Composition rate of drill users vs non-users |
| Is motivation internalising? | Ratio of self-initiated to prompted compositions, over time |
| Are we corroding intrinsic motivation? | **Cohort holdout with progression hidden** — if they write *more*, we have built a currency |
| Is it toxic? | Reported hostility; share of arguments that are rebuttals-in-bad-faith |

The holdout is the uncomfortable one and I recommend it for the same reason as the no-assistant cohort in `VISION_V2.md` §11: it is the only design that can tell us our motivation system is doing harm. If users with progression hidden write *more* and *better* than those who see it, we have built exactly the thing this document opens by warning against, and we should delete it.
