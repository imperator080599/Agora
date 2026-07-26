# CONCIERGE RUNBOOK — Operational Detail

**Status:** Ready to run. Companion to `CONCIERGE_EXPERIMENT.md` (design and thresholds); this is the day-by-day operating manual with verbatim copy.
**Objective:** discover whether Agora produces measurable improvement in reasoning — or find out why it cannot.
**Date:** 2026-07-25

---

## 1. Before day 1

### Tooling

| Need | Tool |
|---|---|
| Cohort channels | Two Discord servers (A and B), kept separate so they never see each other |
| Private workspace per participant | One Google Doc each, shared only with you |
| Tracking | One Google Sheet, schema in §7 |
| Evidence | 4 hand-picked atoms per claim, in a doc you paste from |
| Interviews | Recorded calls, transcribed |

Nothing else. **If you find yourself building tooling, stop — that is the failure mode this experiment exists to prevent.**

### Recruitment strategy

**Cohort A — high propensity (15).** Where they are: r/changemyview, Hacker News, LessWrong, Metaculus/Manifold, university debating society alumni groups, opinion-newsletter comment sections.

Approach: post in-community where rules allow, DM where they do not. Do not mention a startup, a product, or Agora.

> **Cohort A recruitment post**
>
> *Looking for 15 people for a two-week study on how people build arguments.*
>
> *Each weekday you get one contested claim — economics, tech, policy, culture. You take a position, and if you want, write two or three sentences explaining why. You'll get written feedback on the reasoning itself from a coach, and someone who disagrees with you will write a rebuttal.*
>
> *About 10 minutes a day for 14 days. £40 voucher on completion. Not a product test — I'm trying to find out whether this kind of practice does anything.*
>
> *Reply if interested and I'll send three screening questions.*

**Cohort B — normal (15).** Where they are: general-interest Slack/Discord communities, local professional groups, alumni lists, friends-of-friends *two hops out* (never one), Prolific/Respondent if you want speed.

> **Cohort B recruitment post**
>
> *Paid research study: 14 days, ~10 minutes a day.*
>
> *You'll get one interesting claim each weekday — things like "remote work reduces innovation" or "universities should drop test scores." You say where you stand. Optionally you explain why, and you'll get feedback on your reasoning plus a reply from someone who disagrees.*
>
> *No writing experience needed — most people who do this have never written an argument anywhere. £40 voucher on completion.*

The line *"most people who do this have never written an argument anywhere"* is doing deliberate work: it lowers the perceived bar, which is exactly the variable we are testing.

### Screening — three questions

1. *In the last month, have you written more than three sentences of opinion anywhere public? (Yes / No)* → cohort assignment check
2. *Roughly how much do you read news or analysis weekly?* → exclude near-zero
3. *What's a topic you have a strong view on that people you respect disagree with you about?* → tests for both engagement and the capacity to hold that others reasonably disagree

**Exclude:** anyone who knows you personally; anyone who asks whether you are building something; anyone whose answer to Q3 shows contempt for the other side (they will not survive The Turn and they will poison a channel).

**Never disclose that you are the founder.** You are "running a study on argumentation practice." If asked directly, say you are researching whether coaching improves reasoning and you may build something later. Do not lie; do not volunteer.

### Welcome message

> **Welcome — read once, then forget about it**
>
> *For the next 14 days I'll post one claim here each weekday at 8am. Here's the rhythm:*
>
> *1. **Guess** where the group will land, then say where **you** stand. Two lines, in the channel.*
> *2. At noon I post the actual split.*
> *3. If you want, write out **why** in your private doc — an idea, a reason, and one concrete example. Two or three minutes.*
> *4. I'll add questions in the margin. I won't rewrite anything — the words stay yours.*
> *5. Someone who disagrees will write a rebuttal within a day. You get one reply.*
> *6. Then you can revise, if you want to.*
>
> *Writing is always optional. Some days you'll just take a position and get on with your life — that's a normal day, not a failure.*
>
> *One request: be blunt with me. If something is annoying, boring, or feels like homework, say so. That's more useful to me than politeness.*

That last paragraph is the most important copy in the study. It is your only defence against the politeness bias that makes founder-run tests useless.

---

## 2. The daily schedule

**Total operator time: 2h30 – 3h.** Budget it before you start; the experiment dies if you go quiet on day 9.

| Time | Action | Duration |
|---|---|---|
| 08:00 | Post claim + prediction prompt, both channels | 10 min |
| 12:00 | Post reveal + targeted invitations | 20 min |
| 12:00–18:00 | Coach each argument as it lands | 15 min each |
| 18:00 | Assign and write opposition | 45 min |
| 21:00 | Post Analysis Board notes for yesterday's arguments | 25 min |
| 21:30 | Update tracking sheet | 15 min |

---

## 3. Exact prompts

### 3.1 The claim post (08:00)

> **Day 4 · Today's claim**
>
> **"Protectionism hurts long-term economic growth."**
>
> *What's established:*
> *· Average applied tariffs across G20 economies roughly halved between 1990 and 2015. (World Bank)*
> *· Several economies that industrialised rapidly — South Korea, Taiwan — used substantial trade protection while doing so. (Rodrik)*
> *· US steel tariffs in 2018 raised steel-using manufacturers' costs measurably. (Fed working paper)*
>
> *One voice each way:*
> *· "Protection shelters incumbents from the pressure that makes them efficient." — The Economist*
> *· "Every rich country got rich behind tariffs, then recommended free trade to everyone else." — Chang*
>
> ---
> **Before you read anything else:**
> **1. Where will this group land?** (agree / disagree / it's complicated — add a % if you like)
> **2. Where do *you* stand?**
>
> *Two lines. Don't overthink it.*

### 3.2 The reveal (12:00)

> **The split: 5 agree · 7 disagree · 3 it's complicated**
>
> *Closest prediction: @user_a, who said disagree would lead.*
> *Most surprised: five of you expected agree to win comfortably.*

### 3.3 The invitation

Post as a **direct mention**, not a broadcast. Minority first — it is the strongest trigger.

> **Minority variant**
> *@user_b you're one of three saying it's complicated today. That usually means you're seeing something the other twelve aren't. Want to write why? Your doc's open — an idea, a reason, one example. Three minutes.*

> **Majority variant**
> *@user_c you're with the majority. The interesting question is whether you'd still hold this if you weren't — want to try writing it out?*

> **Never-written variant (day 5+)**
> *@user_d you've taken a position every day and haven't written one yet, which is completely fine. If you ever fancy it, today's a good one — you said disagree, and the strongest case against you is genuinely hard.*

**No follow-up if they decline.** No second ask that day. No guilt.

### 3.4 The composer — verbatim doc template

Paste this into their doc at the top:

> **① IDEA — What are you trying to say?**
> *One sentence. Not whether the claim is true — what you actually think is going on.*
>
> ⟨write here⟩
>
> **② ARGUMENT — Why do you believe that?**
> *The mechanism. Not the conclusion again — the steps that get you there.*
>
> ⟨write here⟩
>
> **③ EXAMPLE — What's one concrete case that makes this real?**
> *A specific instance, from anywhere: history, business, science, your own work. Not a statistic — a case.*
>
> ⟨write here⟩
>
> ---
> *Before I comment: **which part do you think a critic would attack first?*** *(one line — I'll seal it and we'll see)*

**The three headings are the product.** Notice the third asks for an *example*, not evidence — a case they already know, not a literature they do not.

### 3.5 Coaching templates

**The hard rule: you never write a sentence they could paste.** If you catch yourself drafting, delete it and ask a question instead. One or two observations maximum.

| Detector | Template |
|---|---|
| **Hidden assumption** | *"There's a step you haven't written down: ⟨the bridge⟩. Is that true — and would someone who disagrees grant it?"* |
| **Overreach** | *"'⟨quantifier⟩' is doing a lot of work here. One counterexample sinks it. Would a narrower claim still support your idea?"* |
| **Correlation as cause** | *"You've shown these move together. What's the mechanism that makes one produce the other?"* |
| **Unsupported load-bearing premise** | *"Two of your three reasons are grounded. The third is the one your conclusion actually rests on, and it's the one with nothing behind it."* |
| **Weak example — scope** | *"Your example is ⟨scope⟩. Your claim is about ⟨broader scope⟩. What makes it travel?"* |
| **Weak example — unrepresentative** | *"⟨Case⟩ is one instance. Was it typical, or exceptional? Exceptional cases make vivid examples and weak evidence."* |
| **Weak example — counterexampled** | *"⟨Case⟩ supports you. ⟨Contrary case⟩ cuts the other way. Which is more like the situation in the claim?"* |
| **Irrelevance — adjacent** | *"This is about ⟨what they wrote about⟩. The claim is about ⟨what it's about⟩. Both can be true at once. The bridge you'd need is ⟨named⟩."* |
| **Irrelevance — off-topic** | *"I can't find a route from ⟨what they wrote⟩ to the claim. If you're heading somewhere, start there instead."* |
| **Circularity** | *"Your reason and your conclusion are saying the same thing in different words. What's the step between them?"* |
| **Genuine strength** | *"Your ⟨specific part⟩ is doing the real work — it says something the claim doesn't."* Only when true. Never as a softener. |

**Evidence offer** (after their example, max 4 atoms, always including one that cuts against them):

> *Three things in the literature touch your mechanism — and one that cuts against it:*
> *· ⟨Source, year⟩ — ⟨one line⟩. Supports your step about ⟨X⟩.*
> *· ⟨Source, year⟩ — ⟨one line⟩. Bounds it: only holds in ⟨scope⟩.*
> *· ⟨Source, year⟩ — ⟨one line⟩. **Cuts against you:** ⟨how⟩.*
>
> *Want to cite any of these, or does your own example do the work better?*

Including the contrary atom every single time is not optional. **It is the symmetric-retrieval rule, and it is also the most informative thing you will observe** — whether people engage with the thing that undermines them is close to the whole question of whether this product can work.

### 3.6 Opposition brief

To the opposer:

> *@user_e you said disagree on today's claim. @user_b argued the other way and I'd like you to answer them — 3–4 sentences, and one rule: **go after a specific part of their argument, not the position.***
>
> *Their argument: ⟨paste⟩*
>
> *Pick the weakest link and say why it fails. If nothing's actually weak, say that instead — that's a legitimate answer.*

If nobody is available, **you write it** — sincerely, in the voice of someone who holds that view. Do not sandbag; weak opposition teaches the author their argument survived when it did not.

### 3.7 The Analysis Board (21:00, next day)

> **Review — "Protectionism hurts long-term growth"**
>
> **Where you were attacked**
> *You wrote three reasons. @user_e went after the second one: that shelter from competition reduces efficiency pressure. Their point — Korea and Taiwan had shelter *and* rising productivity — is a real counterexample to that step.*
>
> **Your prediction**
> *You said they'd attack your example. They attacked the mechanism underneath it. ⟨or: You called it exactly.⟩*
>
> **What I'd flagged**
> *I asked on Tuesday whether the efficiency-pressure step held everywhere. You kept it general. That's the step that got hit.*
>
> **The one move**
> *Either narrow it — protection reduces efficiency pressure *absent* export discipline, which is what Korea had — or defend the general version. Either would hold.*
>
> *→ Revise? Concede the point? Let it stand? All three are fine answers.*

### 3.8 Revision prompt

> *If you revise, tag which of these it is — it matters more than the edit:*
> *· **Conceded** — they were right, I've dropped it*
> *· **Narrowed** — the claim was too broad; here's where it holds*
> *· **Clarified** — I meant something narrower than I wrote*
> *· **Supported** — the gap was real; here's the support*
> *· **Held** — I've answered them without changing my position*
> *· **Withdrew** — this doesn't survive*
>
> *Narrowing isn't losing. A claim scoped to where it's true is a stronger claim.*

Then to the opposer:

> *@user_e they revised. Does that answer your objection? "Yes, that answers it" / "Partly — the core stands" / "No."*

**That single response is the most valuable data point in the study.** It is a person who disagreed saying the reasoning improved.

### 3.9 The Turn (day 7)

> **Today is different. Today you argue the other side.**
>
> *@user_b on Tuesday you argued protectionism hurts growth. Today write the strongest case that it doesn't.*
>
> *Not a parody. Not "some people think…". The best version — the one an actual advocate would recognise as their own argument, put well.*
>
> *Same three parts. Same doc. I'll ask someone who genuinely holds that view whether you got it.*

Then to a genuine advocate:

> *@user_f you argued protectionism can help. Someone who disagrees just wrote the case for your side. Would you say they understood you?*
> *· "Yes — that's my argument"*
> *· "Close, but they missed the main point"*
> *· "No — that's not what I think"*

### 3.10 Exit interview (day 14)

20 minutes, recorded. Ask in this order; do not lead.

1. *Walk me through the last time you wrote something. What were you actually thinking?*
2. *On the days you didn't write — what stopped you?* **(Do not accept "no time." Push once: "what would have made you?")**
3. *Best moment in two weeks? Worst?*
4. *When I questioned your reasoning — how did that feel, honestly?*
5. *Did anything change how you think about a topic? Which?*
6. *Have you caught yourself doing anything differently outside this?* **(Probe hard. Ask for a specific instance. A polite yes with no example is a no.)*
7. *The day you argued the other side — what was that like?*
8. *Would you keep doing this if I stopped paying you?* Then: *would you pay for it?* **(Watch the face, not the answer.)**
9. ***What would you tell a friend this was?*** **(The most important question in the study — this is the real category.)**
10. *What's the one thing you'd change?*

---

## 4. Manual operations checklist

Daily, in order:

- [ ] Post claim + prediction prompt (both channels)
- [ ] Record predictions and positions in the sheet
- [ ] Post reveal + closest-prediction call-out
- [ ] Send 2–4 targeted invitations (minority first)
- [ ] Coach each argument within 2 hours of it landing
- [ ] Record the sealed weakest-link prediction before commenting
- [ ] Offer 4 atoms, one of which cuts against them
- [ ] Assign opposition; write it yourself if unmatched
- [ ] Post Analysis Board notes for yesterday's arguments
- [ ] Log revisions with reason tags; request opposer acknowledgment
- [ ] Update the sheet
- [ ] Note anything surprising in a running log — **this is where the real finding will come from**

Weekly:
- [ ] Day 7: run The Turn, collect advocate ratings
- [ ] Day 7 and 14: check metrics against pre-registered thresholds

---

## 5. Two operator disciplines

**Do not rescue the experiment.** When people go quiet on day 6 you will want to nudge, cheerlead, make it work. Don't. Unprompted return is the metric that matters most and enthusiasm destroys it. Post the claim, coach what arrives, answer what is asked. Nothing else.

**Do not coach too well.** You will be far better than any model we ship, and you will be tempted to be brilliant. Keep to the constraints: one or two observations, questions never answers, never a sentence they could paste, and stop. **We are testing the mechanic at a realistic level, not proving that expert human coaching is valuable.** We know it is — nobody can afford it, which is the reason to build this.

---

## 6. What result would convince us to build

Pre-registered, and stated as a conjunction so it cannot be satisfied by one flattering number.

> **Build if all five hold:**
>
> **1 · They write.** ≥25% of positioned users in cohort A, and ≥15% in cohort B, write at least once.
> **2 · They keep writing.** ≥35% of writers write three or more times in 14 days.
> **3 · They come back unprompted.** ≥55% still taking positions on day 14 without being nudged.
> **4 · They improve what they wrote.** ≥35% revise after opposition — and at least five *"yes, that answers it"* acknowledgments across the study.
> **5 · Something transfers.** ≥5 participants give a *specific, unprompted instance* of using it outside Agora in interview question 6.

Conditions 4 and 5 are the ones that distinguish this from an engagement result. **Revision is the behavioural signature of the loop closing; transfer is the only early evidence that we are teaching rather than entertaining.** A study that hits 1–3 and misses 4–5 has found a discussion group, not a reasoning gym.

**Pivot, don't build, if:** cohort A writes but B does not (real but niche — reconsider market and positioning); or revision rate is under 10% (stages 5–6 are inert); or The Turn is refused by more than 60% (the strongest mechanic in the design does not survive users).

**Stop and rethink from scratch if:** cohort A writing rate is under 10%; or writing happens once and stops; or coaching measurably increases time-to-publish and abandonment while participants report it as criticism.

---

## 7. Tracking sheet schema

One row per participant per day.

`date · participant · cohort · predicted_split · actual_split · brier · position · invited(y/n) · invite_type · wrote(y/n) · minutes_to_publish · abandoned(y/n) · word_count · has_example(y/n) · coach_notes_count · detector_types · atoms_offered · atoms_cited · engaged_contrary_atom(y/n) · weakest_link_prediction · opposition_source(peer/operator) · opposition_target · prediction_correct(y/n) · revised(y/n) · revision_tag · opposer_acknowledged · returned_next_day(y/n) · prompted(y/n) · one_word_feeling`

Two columns will earn their keep more than the rest. **`engaged_contrary_atom`** tells you whether people will look at what undermines them, which is the whole epistemic premise. **`prediction_correct`** is the earliest available signal of self-knowledge improving — and if it rises across fourteen days in a group of thirty amateurs, that is the most encouraging thing this study could possibly produce.

---

## 8. Outputs, by day 21

**The result.** Metrics against pre-registered thresholds, decision rule applied. Written before interpretation.

**The failure inventory.** Every way it broke, ranked. **This is the primary deliverable** — the experiment succeeds by producing a good version of this document.

**The transfer evidence.** Verbatim answers to question 6, with a hard-nosed judgement on which are real instances and which are politeness.

**The category.** Verbatim answers to question 9. How thirty strangers describe this, unprompted, is worth more than every positioning document we have written.
