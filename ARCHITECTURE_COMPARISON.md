# ARCHITECTURE: Daily Claim vs News Feed

**Decision record.** Companion to the V3 artifact, which implements the recommendation.
**Date:** 2026-07-25

---

## The question

**A · Daily Claim first** — one curated proposition per day is the entry point. News is invisible.

**B · News Feed first** — a serious-source news reader is the entry point. Debates start from articles.

---

## Scored

| Criterion | A · Claim | B · News | H · Hybrid |
|---|---|---|---|
| User acquisition | **Weak** — nobody searches for "daily claim" | **Strong** — news has enormous existing demand | **Strong** |
| Daily habit | Medium — a manufactured habit | **Strong** — inserts into an existing one | **Strong** |
| Discussion quality | **Strong** — everyone on one question | **Weak** — fragments across thousands of articles | **Strong** |
| Educational value | **Strong** — mature evidence base | **Weak** — 24-hour-old events have none | **Strong** |
| Scalability | Weak — editorial bottleneck | **Strong** — the world generates the content | Medium-strong |
| Moderation | **Strong** — one vetted claim | **Weak** — current politics at volume | Medium |
| Differentiation | **Strong** | **Weak** — a graveyard of failed aggregators | **Strong** |
| Business | Medium | Weak — licensing costs, crowded | Medium-strong |

---

## Where you are right

**Acquisition and habit are genuine, unsolved problems for A.** Nobody has a "daily claim" habit; everybody has a news habit. Inserting into an existing behaviour is enormously cheaper than manufacturing a new one, and it is the single strongest argument in this document.

**Content supply is a real constraint on A.** One flagship claim a day, forever, curated to a high standard, is an editorial treadmill with a permanent staffing cost. News is generated free by the world.

**Claims without context feel arbitrary.** *"The 4-day work week is a luxury of rich economies"* — why today? A news layer answers "why now," which makes a claim feel urgent rather than academic.

---

## Five objections to B, in order of severity

### 1 · Licensing is a wall, not a detail

Reuters and AP license their wires commercially — six figures annually, minimum. The FT and The Economist run hard paywalls and enforce aggressively. Nature, Science and The Lancet are subscription journals. **You cannot legally build a feed of full articles from these sources without content licences that would exceed a seed round.**

The legally defensible version is **headline + standfirst + link, never full text** — and even that is constrained in the EU, where the press publishers' right covers snippets beyond "very short extracts."

That is survivable, but it makes B a *link* product rather than a *reading* product, which is materially weaker than what you described.

### 2 · Fragmentation kills the mechanic that makes us different

This is the deepest structural objection. **Commit-before-reveal is only interesting at scale.** A split of 83/11/6 across 400 people is a genuine discovery about the world. A split of 2/1/0 across three people who happened to open the same Reuters story is nothing.

News-first fragments attention across thousands of articles. Our core mechanic requires concentration. **B trades the thing that makes Agora Agora for reach.**

Persuasion events die the same way: with three participants per debate, nobody's mind gets changed by a stranger, and the moat argument evaporates.

### 3 · A news feed is the most reaction-optimised artifact ever built

The entire product thesis is *slowing people down*. Putting a text box under a breaking news story is the mechanism that produced every comment section on the internet — and those are the exact behaviour we exist to cure. Architecture B builds the on-ramp to the disease.

### 4 · Breaking news is the worst possible material for reasoning practice

Evidence on a 24-hour-old event is thin, facts are still moving, and positions are purely tribal. **The evidence graph is near-useless on yesterday's story** — mechanisms and counterexamples take years to accumulate. Evergreen and slow-moving claims are where our best asset actually works.

### 5 · News aggregation is a graveyard, and the most recent grave is instructive

Google News, Apple News, SmartNews, Ground News — and *Artifact*, a beautifully built serious-news app by the Instagram founders, which shut down in 2024 having failed to find product-market fit despite world-class execution and distribution. The category has repeatedly defeated better-resourced teams than ours.

**Adopting B means competing in a proven graveyard while abandoning the mechanic nobody else has.**

---

## What A gives up that is easy to underweight

Editorial control over *which propositions get argued* is not a limitation, it is the product. It lets us choose claims that are genuinely arguable, that have a mature evidence base, and that avoid electoral politics (D4). Architecture B surrenders all three: a serious news feed cannot avoid elections, and moderation load moves from "one vetted claim" to "every story on earth."

---

## The hybrid

> **News is the context and acquisition layer. Claims remain the concentration layer.**
>
> Articles do not host debates. **Articles nominate claims.**

```
   NEWS FEED                 THE CLAIM                  DEBATE
   world · country       one proposition per        everyone argues
   serious sources       story cluster              the same thing
   headline + link            │                          │
        │                     │                          │
        └── "the claim  ──────┘                          │
             under this story"                           │
                                                         │
   acquisition + habit  →  concentration  →  learning ────┘
```

**How it works**

1. The news feed is real and is the front door — world and country channels, serious sources, headline plus standfirst plus link out.
2. Each **story cluster** (several articles on one development) carries **one claim**: the arguable proposition underneath the reporting.
3. Users read the news, then hit *"The claim under this story"* → position → composer. The claim is the concentration point.
4. Users may **nominate** a claim from any article. Nominations are promoted editorially, or automatically at a support threshold. This gives B's sense of agency without B's fragmentation.
5. **Live claims are capped** — one flagship, three to five supporting, plus the evergreen library. Concentration is preserved by design, not by hope.
6. The **debate feed** is a second feed: discussions that grew from the news, with their splits and open oppositions.

**What each layer earns**

| Layer | Earns |
|---|---|
| News feed | Acquisition, daily habit, "why now," legitimacy, SEO |
| Claim | Concentration, meaningful splits, curated evidence, bounded moderation, The Turn |
| Debate | Opposition, review, revision — the learning |

**What it costs.** Two surfaces to build instead of one, and the news layer needs licensing discipline from day one. Neither is fatal, and the first can be staged.

---

## Recommendation

**Adopt the hybrid, and stage it.**

The concierge experiment (`MVP_DEFINITION.md` §8) tests the *claim → argument → opposition → revision* loop, and that test is unchanged by this decision — the loop is identical whether the claim arrived from a news story or from an editor. **Run it first.** If people will not revise, no amount of news traffic saves us.

Build the news layer second, as the acquisition solution to a validated loop. Building it first would mean solving distribution for a product we have not yet proven works, which is the more expensive order.

**One honest note on framing.** If Agora presents primarily as a news app, we will be measured against news apps, and we will lose — they have more content, more money, and licences. If it presents as *the place where you argue well about what is happening*, the news is a feature and we are in a category with no incumbent.
