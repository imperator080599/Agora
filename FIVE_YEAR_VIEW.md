# FIVE-YEAR VIEW — Answering the Founder's Question

*You asked me to forget implementation, think as a founder, and challenge every assumption. This document does that. It is deliberately more speculative and more argumentative than the specs, and several sections disagree with decisions we have already ratified. That is the assignment.*

**Date:** 2026-07-25

---

## Part I — Seven assumptions worth attacking

### 1. That the daily claim is the right unit

The daily claim is a brilliant *training* device: shared, bounded, comparable, and it manufactures an audience. It is also the reason the product is currently a place you *visit* rather than a thing you *use*.

Nobody's actual reasoning problems arrive on a daily schedule. They arrive as: *should we sunset this product line*, *is my colleague's argument for restructuring sound*, *am I about to say something stupid in this town-hall meeting*.

**In five years the daily claim is the gym, not the product.** The product is that you bring your own question — a decision, a draft, an argument you are about to have — and Agora runs the same engine over it. The daily claim persists because shared exercise is how you build the community, the persuasion data, and the habit. But the thing people pay for is reasoning support on what matters to them.

That is a different product with a different shape, and the daily claim is how you earn the right to build it.

### 2. That Agora is a destination

Every hour of real argument happens somewhere else: Slack, email, docs, comment fields, group chats, meeting rooms.

A five-year Agora is partly **infrastructure**. A browser extension that offers to steelman before you send. An API a document tool calls. A meeting bot that, afterwards, tells you which claims went unsupported.

There is a real strategic tension here and I do not want to paper over it: infrastructure has no community, and the community is the moat. My resolution is **destination for practice, infrastructure for application** — you get better in the Arena, you use it everywhere. The infrastructure is monetisable precisely because the practice made you trust it.

### 3. That the medium is text

**This is the assumption I would attack first, and it may be the single biggest unlock available to us.**

Writing is the highest-friction way to externalise reasoning. It is also not how most argument actually happens — people argue out loud, and most people are markedly more fluent speaking than writing.

Problem 4 is "why should users write?" There is another answer available: **let them talk.**

A 90-second spoken argument is far easier to produce than three minutes of writing, and it can be transcribed, structured into an argument graph, and coached identically. Everything in `REASONING_ENGINE.md` operates on structure, not prose — the engine does not care how the words arrived.

And the coaching gets *better*, because speech carries signal text does not: hedging, hesitation, where you slow down because you do not believe what you are saying. A coach that can say *"you sped up through your weakest premise"* is doing something no writing tool can.

This could plausibly multiply participation several times over, and it makes Agora usable while walking. If I were choosing one experiment to run in the next year outside the current plan, it would be voice.

### 4. That the AI is only a coach

D22 says the assistant never writes *your* argument. It says nothing about the assistant arguing *against* you.

**In five years the AI is also an opponent** — a calibrated sparring partner that argues the opposing side at exactly your level, that you can face any time, that never gets bored and never gets personal.

This is fully consistent with the no-ghostwriting rule. It solves the availability problem (real opponents are not always there, especially in a small beta). And it is the most natural expression of "reasoning gym": pads before the ring. Human opponents remain the point — a machine you convince proves nothing — but you should be able to spar at midnight.

### 5. That the audience is consumers

The consumer product is the one that generates the data and the brand. The revenue may not be.

Reasoning is a near-universal curriculum gap. Schools teach *what* to think about, almost never *how* to evaluate an argument. There is no standard instrument, no accepted curriculum, and every institution that produces knowledge workers privately knows it is a problem.

**In five years the largest line is institutional**: universities, law and business schools, debate programmes, professional bodies, corporate comms and strategy functions. They pay per seat, they pay reliably, and they bring cohorts — which solves the cold-start problem that every social product dies of.

### 6. That we are building a product rather than a credential

This is the one I would push hardest.

Consider what we accumulate: months of a person's reasoning, evaluated on ten dimensions by an instrument with measured reliability, with a verifiable record of arguments that changed real people's minds. That is not usage data. **That is the substrate of a credential** — and one that is behaviourally earned rather than examined, which makes it more meaningful than most of what people currently put on a CV.

*"Certified in argumentation by Agora"* could become a genuinely valued signal for law, consulting, policy, journalism, and management. Credentials are extraordinarily durable businesses, they pull institutional adoption behind them, and they give users a reason to persist for years rather than weeks.

The bar is rigour: a credential that can be gamed is worth nothing, and issuing one carelessly would destroy the trust that makes it valuable. But if we hold that bar, the credential may be worth more than the subscription.

### 7. That people want to be better thinkers

**The uncomfortable one, and I think the most important thing in this document.**

Very few people wake up wanting to improve their reasoning. They want to win the argument. They want to feel clever. They want to be right, and to be *seen* to be right. "Become a better thinker" is a benefit people admire in the abstract and rarely act on — the same category as "eat more vegetables".

I do not think this invalidates the vision. I think it means **the promise and the delivery can honestly differ.**

Duolingo does not sell spaced repetition; it sells speaking Spanish, and delivers a game. Strava does not sell training-load management; it sells being an athlete. In both cases the surface promise is what people want and the underlying mechanism is what actually works.

Agora's honest surface promise might be: **"Never lose an argument you should win."**

That is a promise people feel. It gets them in the door. And the only way to deliver on it is rigorous reasoning, evidence, and anticipating objections — which is precisely the thing that makes them better thinkers, whether or not that was ever the goal.

I raise this as a provocation rather than a recommendation, because it interacts directly with D29 and because getting it wrong in the cynical direction — selling "win arguments" and *delivering* rhetorical tricks — would be building the opposite of what we set out to build. But if we position purely on self-improvement, I think we address the small population who already value it and miss the much larger one we could actually help.

---

## Part II — What the product is in 2031

### Three surfaces, one engine

**The Arena.** The daily claim, commit-before-reveal, the debate map, persuasion events. Where the community lives and the persuasion data is generated. Roughly what we are building now, at scale, with voice and AI opponents added.

**The Gym.** Adaptive drills, sparring against calibrated AI opponents, replaying historical debates against the actual positions taken. This is where measurable skill development happens and where most daily minutes are spent — the same way most Duolingo minutes are lessons, not conversations.

**The Desk.** Bring your own reasoning. A decision you are weighing, a document you are about to send, a position you are about to defend. Same engine, your material, private by default. This is where the willingness to pay lives, because it is where the stakes are real.

One reasoning engine, one evidence graph, one record, three contexts.

### The Evidence Graph as public infrastructure

By year five the graph should be the most complete mechanism-linked map of evidence-for-contested-claims that exists — hundreds of thousands of verified atoms, thousands of curated mechanisms, with `supports` / `undermines` / `qualifies` structure and effectiveness weighting nobody else can generate.

I would make substantial parts of it **openly readable**. It is a public good, opening it builds the reputation that drives institutional adoption, and the moat was never the atoms — it is the mechanism ontology, the effectiveness data, and the community that maintains it. Mechanism pages could become the thing people link to from outside Agora when they want to show what the evidence on a question actually looks like.

### The record as portable property

A person's reasoning record — private, exportable, cryptographically verifiable, theirs. Not ours to sell, ever (D28). The credential is the part they can choose to show.

### Persuasion science

Five years of measured mind-changing, linked to argument structure and evidence, is the largest dataset on human persuasion ever assembled. Not predicted persuasiveness — measured.

I would treat this as a **research asset governed by an external ethics board**, published openly, partnered with academic institutions. Never sold to advertisers or political operations, and that constraint should be structural rather than a policy we could quietly revise. The reputational and scientific value of being the place that studies persuasion honestly exceeds anything the data would fetch, and selling it once would end the product.

---

## Part III — The business

| Line | Five-year role |
|---|---|
| **Consumer subscription** | Unlimited coaching, the Desk, full evidence access, progress analytics |
| **Institutional seats** | Universities, schools, professional programmes. Probably the largest line |
| **Credential** | Assessment and certification. Highest margin, deepest moat |
| **Evidence API** | Publishers, research tools, fact-checking organisations |
| **Research partnerships** | Funded, published, ethics-governed |
| **Not: advertising** | Structurally incompatible with a product whose value is unhurried thinking |
| **Not: data brokerage** | D28. Selling reasoning profiles would end the trust the product runs on |

Note what this is: a self-improvement subscription plus an education business plus a credential plus an API. **None of it depends on monetising opinion data**, which was the fragile and ethically hot part of the original plan. The pivot toward teaching did not just improve the product; it produced a business that does not need the thing we were least comfortable selling.

---

## Part IV — What would have to go right, and what could go wrong

**The three bets that must land:**

1. **People will write.** If H1 fails, everything else is moot. Voice is the strongest lever we have not pulled.
2. **The improvement is real and provable.** The credential, the institutional business, and the entire positioning depend on H3 surviving honest measurement — including the control cohort that could kill it.
3. **The graph compounds faster than models commoditise coaching.** We are in a race between our accumulating asset and the frontier labs' improving general capability.

**The five things most likely to kill it:**

**Frontier models make the coach a commodity.** Largely priced in — the moat is the graph, the record, and the community, not the coach. But if a general assistant becomes good enough that people stop wanting a dedicated space, the destination business erodes and we become infrastructure earlier than planned.

**We become a political weapon.** *"Agora rated this argument weak"* is ammunition, and someone will screenshot it. Mitigations are already specified — no public scores, the mirror test as a release gate — and they must never be relaxed for growth. This is the risk I would worry about most, because the pressure to relax them will come from inside.

**The community is too small to generate persuasion events.** A writer publishing into silence quits. Institutional cohorts are the structural fix: they arrive as groups.

**We measure our own success with our own instrument.** The circularity problem. Independent graders, human samples, and control cohorts are not optional if the credential is ever going to mean anything.

**We optimise for engagement in a weak quarter.** Every mechanic listed in `MOTIVATION_SYSTEM.md` §10 works. The day we ship one, we become a debate site with good typography.

---

## Part V — If I were you

**In the next year:** run the concierge test; test voice as an input; keep building the graph depth-first on eight mechanisms; find one university that will run a cohort.

**In the next three:** the Gym as a real product surface; AI opponents; the Desk in beta; the first institutional contracts; the first honest longitudinal study of whether users actually improve — published, whatever it says.

**By five:** the credential, the open evidence graph, and a research programme on persuasion that gives the whole thing a reason to exist beyond commerce.

**The one thing I would not compromise on:** the assistant never writes the argument. Every commercial pressure will push against it — it would raise composition rates, lower abandonment, and demo better. It is also the only thing standing between a product that teaches people to think and a product that thinks for them while they take the credit. Everything valuable here, including the credential and the science, depends on the reasoning being genuinely the user's.

The moment we relax it, we have built a very elegant machine for helping people believe they are getting smarter.
