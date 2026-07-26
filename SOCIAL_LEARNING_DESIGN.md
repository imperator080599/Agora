# SOCIAL LEARNING DESIGN — How Strangers Make Each Other Better

**Status:** Proposed.
**Date:** 2026-07-25

---

## 1. The risk this document exists to fix

You named it exactly: the current design is drifting toward *"AI coach plus individual learning platform."* Everything social in it is currently passive — you read other people's arguments, and occasionally one of them changes their mind because of you.

That is not a community. It is an audience.

And it matters beyond product taste, because **the community is the moat** (`LONG_TERM_MOAT.md` §3). If the social layer is thin, a frontier lab replaces us with a better coach and nothing is lost. If the social layer is where the learning actually happens, they cannot.

The design principle throughout:

> **Every social mechanic must make at least one of the two people a better thinker. Preferably both. If it only produces engagement, it does not ship.**

That single rule eliminates likes, follows, feeds, and every ranking surface — not on ethical grounds but on pedagogical ones. It also points at a rich set of mechanics that almost nobody has built, because most social products optimise for reach rather than for learning.

---

## 2. The Circle — the unit of belonging

**Eight to twelve people. Persistent. The same claims. Opt-in, matched by domain interest and rough skill.**

Global membership confers no identity — nobody's self-concept comes from being one of ten million. Belonging happens at a scale where you are known, missed when absent, and have a reputation you would rather not damage. Reddit's identity lives in subreddits; Strava's in clubs; ours must live in Circles.

**What a Circle does:** argues the same daily claim, sees each other's reasoning after the reveal, exchanges structured feedback, and holds a shared seasonal goal.

**What it deliberately lacks:** a leaderboard, a rank, a public membership count, and any way to be "top" of it.

**The specific belonging we offer is unusual, and it should be stated in the onboarding copy:** *not people who agree with you — people who will take your argument seriously enough to attack it properly.* That is rare, valuable, and almost unavailable elsewhere.

**Composition rule:** Circles are deliberately mixed by viewpoint. A Circle that agrees with itself is a comfort blanket and teaches nothing. We should measure viewpoint diversity per Circle and rebalance when it collapses — this is the mechanism that prevents us becoming a network of echo chambers, and it has to be structural because it will never be chosen voluntarily.

---

## 3. Assigned-Side Debate — the highest-value social mechanic

Two users. One claim. **Sides assigned at random**, not chosen.

This is how competitive debate has trained people for a century, and the pedagogy behind it is the strongest of anything in this document:

- **It severs argument from identity.** You cannot be defending your ego, because the side is not yours. This is the single most effective structural intervention against motivated reasoning that exists.
- **It forces genuine steelmanning.** Not as an exercise — as a requirement to do the task at all.
- **It builds empathy as a by-product.** Having argued a position properly, you can no longer believe only fools hold it. Nothing else we could build produces that effect as reliably.
- **It is competitive without being political.** Two people can compete hard on execution while neither's beliefs are on the line.

**Format:** opening (3 min) → rebuttal (2 min) → response (2 min). Judged by a small panel of Circle peers on *reasoning quality only*, with a rubric. **Neither the winner nor the judges are told which side is the "true" one, because there isn't one.**

**Why the judging matters as much as the arguing:** applying an evaluation rubric to someone else's reasoning is one of the most efficient learning activities available. Judges frequently learn more than debaters, which means a format with two debaters and five judges teaches seven people.

---

## 4. The Turing Test Game — our signature social format

**Write the strongest case for the side you personally reject. Others guess which side you actually hold.**

The ideological Turing test, as a game.

- **Fun on its own terms** — it is genuinely enjoyable, which matters because most pedagogically excellent mechanics are not.
- **The deepest steelmanning exercise in existence.** You cannot pass by parodying a view; you must understand it well enough to be indistinguishable from a sincere advocate.
- **Success is unambiguous:** readers cannot tell.
- **Shareable without status.** The result is a puzzle outcome, not a ranking.
- **It changes people.** Writing a persuasive case for something you reject is the most reliable route from contempt to disagreement — and disagreement is the thing we are actually in business to improve.

**Scoring:** you succeed when guessers perform at chance. Guessers score on accuracy. **Both roles learn**, which satisfies the §1 rule twice over.

I would make this the format users describe to their friends.

---

## 5. Structured peer feedback

Peer feedback fails in almost every product because it is unstructured (so it becomes praise or abuse) and unreciprocated (so nobody gives it). Both are solvable.

**Structure it.** Feedback is given against the evaluation rubric, one dimension at a time, in a constrained form:

```
  Dimension:  Evidence fit
  Observation: Your Bell Labs example shows co-location produced
               recombination in one firm, in one era. Your claim is
               about remote work generally.
  Question:    What would show this holds outside physical R&D?
```

Note the shape: observation plus question, never a verdict and never a rewrite. **The same grammar the coach uses**, which means giving feedback is practice at the skill the coach is teaching.

**Reciprocate it.** The writing-workshop model: *to receive feedback on your argument, give feedback on two others.* This solves cold-start, produces more learning for the giver than the receiver, and makes the whole system self-sustaining without a moderation team.

**Rate it.** Recipients mark feedback as helpful or not. Consistently helpful reviewers earn the Mentor title; consistently unhelpful ones stop being routed work. **The reviewer-quality signal is itself a measurement of reasoning skill**, and a rather good one.

---

## 6. Mentorship

Asymmetric pairing, and the surprise is who benefits.

**The protégé effect is large:** teaching produces substantial gains in the teacher, often exceeding the gains from studying the same material. So mentorship is not community service subsidised by advanced users — **it is one of the most efficient learning activities we offer**, and it should be framed that way in the invitation. *"Explaining this will sharpen it for you"* is both true and a better recruitment line than an appeal to altruism.

**Format:** one claim, one week, one exchange. Deliberately small — the failure mode of mentorship programmes is over-commitment. The mentor comments on one argument; the mentee revises; the mentor responds once. Done.

**Matching:** two to three bands apart. Too close and the mentor has nothing to offer; too far and the advice is unusable.

---

## 7. Collaborative reasoning

Some questions deserve more than one head, and the argument graph makes genuine collaboration possible in a way prose never did.

**Shared argument construction.** A Circle builds one argument graph together: someone proposes the thesis, others supply premises, someone else finds the unstated warrant, another attaches evidence, another supplies the strongest objection. **The structure makes the division of labour natural** — you can see which link has no support and claim it.

This is the clearest case where our technical design creates a social possibility. You cannot collaborate on a paragraph without stepping on each other; you can absolutely collaborate on a graph.

**Evidence expeditions.** A Circle takes one mechanism and builds out its evidence over a week — supporting, undermining, and boundary conditions. The output is a collection that becomes part of the graph, permanently, with the Circle credited. Real, durable, collectively-owned work, which is the strongest bonding agent a group can have.

---

## 8. Domain Guilds

Larger, looser communities around subject matter: economics, law, science, technology, history, ethics.

**Purpose:** depth, standards, and expertise. A Guild curates its corner of the evidence graph, sets domain-specific standards (what counts as adequate evidence in law differs from science), and provides the specialist knowledge a general reasoning coach cannot.

**Why they matter for transfer:** reasoning skill is partly domain-general and partly domain-specific. You cannot evaluate a study design well without knowing the field's conventions. Guilds are where domain-specific competence lives, and they are also where genuine experts might contribute — which raises quality and credibility simultaneously.

---

## 9. Tournaments — with a deliberate constraint

Competition is motivating and it manufactures performance orientation, which is the opposite of what we want. The resolution is to compete on the right thing.

**Team tournaments, assigned sides, judged on reasoning quality.**

Three constraints make this safe:
1. **Sides are assigned**, so nobody's beliefs are at stake.
2. **Judging is on reasoning quality against a rubric**, never on who is "right".
3. **Teams, not individuals** — cooperative within, competitive between, which is the configuration that produces the most learning and the least ego damage.

**And the constraint that matters most:** tournaments are *seasonal events*, not a permanent ladder. A standing competitive rank would leak performance orientation into everything else, which would undo the work of every other document in the set.

---

## 10. Attribution — the connective tissue

Learning is social only if people can see they affected each other. Four visible signals, all of which reward the right behaviour:

| Signal | Meaning |
|---|---|
| **Persuasion event** | Your argument changed someone's position |
| **Adopted suggestion** | Someone incorporated your feedback and their argument improved |
| **Cited contribution** | Your evidence atom was used by someone else |
| **Credited steelman** | An opponent endorsed your rendering of their view |

Each is **rare, specific, earned, and impossible to farm.** None is a count of attention. Together they are the entire reward economy of the social layer, and none of them resembles a like.

---

## 11. Safety, and why it is a learning problem

User-written prose is a harassment surface that a three-button poll was not, and this needs real investment earlier than currently planned.

The strongest protections are structural rather than punitive:

- **Pseudonymity** removes most identity-based attack.
- **Small Circles** create accountability — anonymous cruelty is much harder among ten people who will still be there tomorrow.
- **Structured feedback** makes abuse formally awkward: the observation-plus-question grammar has nowhere to put an insult.
- **Assigned sides** remove the tribal frame entirely.
- **One rebuttal, not a thread.** You may answer a challenge once. This single rule eliminates the escalation spiral that produces most online cruelty.
- **No public scores** means there is no status to defend.

**The one hard rule:** attack the argument, never the arguer. Enforced, and enforced most strictly against our best users — because tolerated contempt from a high-status member sets the norm faster than any policy document.

---

## 12. What we are not building

| Rejected | Why |
|---|---|
| Follows / followers | Popularity graph; creates an in-crowd |
| Likes / upvotes | Rewards agreeability over quality |
| A global feed | Attention competition; nothing to do with learning |
| Comment threads | Escalation spirals. One rebuttal only |
| Public reply counts | Reception as status |
| DMs | Harassment vector with no learning value; Circles are the channel |
| Permanent competitive ladder | Performance orientation, permanently |
| Sharing arguments to external social media with metrics attached | Imports the incentives we exist to escape |

---

## 13. Measuring the social layer

| Question | Measure |
|---|---|
| Does the community teach? | Learning rate of Circle members vs. solo users |
| Does feedback help the giver? | Skill gain of active reviewers vs. matched non-reviewers |
| Are Circles diverse? | Viewpoint distribution per Circle; rebalance trigger |
| Does the Turing test work? | Guesser accuracy trending toward chance |
| Is it safe? | Reported hostility; share of exchanges that stay on the argument |
| Does belonging retain? | Retention of Circle members vs. non-members |

The second row is the one I would watch. **If reviewing others' arguments improves the reviewer more than writing their own does, we have found the highest-leverage mechanic in the product** — and the entire ladder should be re-weighted toward peer feedback.
