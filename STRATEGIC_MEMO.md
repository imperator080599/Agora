# AGORA — Strategic Memo

**For:** the founder
**Question:** how does Agora become one of the most valuable education and reasoning companies in the world, rather than an excellent product?
**Written to be disagreed with.**
**Date:** 2026-07-25

---

## I. The verdict, first

Three conclusions, stated before the argument, because you should be able to reject them quickly.

**1 · The product we have designed cannot become a multi-billion-euro company.** Not because it is badly designed — it is the best-specified consumer reasoning product I am aware of — but because the category has a hard ceiling. Consumer learning apps outside language have never crossed €150M ARR. Brilliant, Elevate, Peak, Lumosity all sit far below it. Duolingo is the outlier that proves the rule: it required 500M+ people who already knew they wanted the thing, a legible goal state, and fifteen years. **Reasoning training has none of those.** A consumer-first Agora is plausibly a €50–150M ARR business. That is a good company. It is not the one you asked about.

**2 · There is a much larger company adjacent to it, and the door has just opened.** Not *teaching* reasoning — **verifying** it. Every artifact civilisation used to infer that a person had thought — the essay, the memo, the cover letter, the analysis, the take-home — became producible without thinking, in about eighteen months. Universities are in open crisis over assessment. Employers have lost their screening signals and know it. **The world is losing its ability to tell whether a human thought something, and nobody has replaced it.** That is a real, acute, growing, unsolved pain with institutional buyers and enormous budgets.

**3 · The learning product is the acquisition funnel and the data engine for the verification business — and it is nearly worthless without it.** This is not a pivot. It is the same product with a different centre of gravity, a different first customer, and a different definition of the asset. But the change has to be made *now*, because the asset it depends on only accumulates in real time.

If you build only what we have designed, you will have a beautiful product and a modest company. **The bet worth making is that thinking becomes unverifiable, and Agora becomes how it is verified.**

---

## II. What actually changed, and why it matters more than our product design

For four hundred years, the way you demonstrated that you could think was to produce an artifact that would have been hard to produce without thinking. The essay is a technology for this. So is the memo, the legal brief, the research paper, the strategy deck, the cover letter.

That technology broke.

The consequences are already visible and they are not evenly distributed in time:

- **Education broke first.** Take-home assessment is functionally dead at scale. Institutions have responded by retreating to invigilated handwriting, which is a confession, not a solution.
- **Hiring is breaking now.** The take-home assignment, the writing sample, the cover letter — all of them were signals; none of them are. Structured interviews are next.
- **Professional differentiation breaks last, and hardest.** When any associate can produce a competent-looking memo, what is a firm paying for?

Here is the asymmetry that makes this a company rather than an observation:

> **The supply of convincing text went to zero. The supply of verified judgment did not — and demand for it rose, because now you cannot infer it from the text.**

Every existing verification mechanism is point-in-time: a test, an interview, an exam. **Point-in-time assessment is exactly what AI assistance defeats.** You cannot proctor your way out of this; the arms race is already lost in remote settings and is losing in person.

What AI assistance does *not* defeat is **longitudinal behavioural evidence**: three years of how a specific person reasons, under adversarial pressure from other humans, with their errors, their revisions, their changes of mind, and their calibration against resolved outcomes. You cannot fake a three-year record of being wrong in specific ways and getting better. There is no prompt for that.

**That is the thing we are accidentally building, and it should become the thing we are deliberately building.**

---

## III. Who pays

### The honest ranking

| Buyer | Pain | WTP | Cycle | Data value | Verdict |
|---|---|---|---|---|---|
| **Individuals (consumer)** | Low — no felt deficit | €50–100/yr | Instant | High volume | **Funnel, not business** |
| **Law schools & bar prep** | **Acute** — reasoning is the graded skill | €200–500/student | 6–12mo | Very high | **The wedge** |
| **Professional services** (law, consulting, finance) | **Acute** — structured thinking *is* the product | €500–2,000/head/yr | 6–12mo | High | **The revenue** |
| **Universities (general)** | Acute but unfunded | €30–80k/institution | 12–24mo | **Highest** | **Strategic, not revenue** |
| **Employers / recruiters** | **Severe and growing** | €5–50k/yr per employer | 3–9mo | High | **The €1B path** |
| **Certification bodies** | Existential (their signals are dying) | Partnership | 24mo+ | — | **The moat, not the money** |
| **Governments** | Real, slow, enormous | €1M+ | 24–48mo | High | **Later, or never** |

### Which customer creates the strongest company

**Employers, eventually — but you cannot start there.** The buyer of verified reasoning is whoever is currently making expensive decisions on broken signals, and that is the hiring market. It is also the largest: pre-employment assessment is a $3–5B market growing double digits, and it is being disrupted from underneath as its incumbents' products stop working.

But an assessment business has a chicken-and-egg problem that kills most entrants: **employers only trust credentials candidates hold, and candidates only earn credentials employers trust.** You break that by having candidates first, for a different reason.

**So the sequence is: individuals train → institutions adopt → employers recognise → the credential becomes the business.** Each stage funds and legitimises the next. Getting the order wrong is the most common way this specific company dies.

---

## IV. The moat

Your instruction was to assume frontier labs reproduce argument coaching, fallacy detection, Toulmin parsing, evidence retrieval, debate assistants and reasoning evaluation. **Correct assumption. Assume it fully.** Everything in this section is what survives that.

### The disqualifying conflict — the single strongest structural fact we have

> **OpenAI cannot certify that you did not use OpenAI.**

An AI company cannot credibly verify that a human's thinking is unassisted. The conflict of interest is total and obvious to any institution that would rely on it. No university accreditation body, no bar association, no hiring compliance function will ever accept "our assessment says this candidate reasons well" from the company whose product wrote the answer.

This is not a moat we built. It is a structural exclusion that removes the five most capable companies on earth from our actual market. **They will build better coaches than us and be unable to enter the business the coaches feed.**

That fact should be on the first slide of every deck.

### The taxonomy you asked for

| Type | Asset | Replicable by a frontier lab? | Compounds? |
|---|---|---|---|
| **Feature** | Coaching, fallacy detection, Toulmin parsing, retrieval | **Yes — assume within 12 months** | No |
| **Capability** | Mechanism-based retrieval, the review board | Yes, 12–24 months | Weakly |
| **Dataset — behavioural** | Longitudinal reasoning records: how a person argues, errs, revises, updates, over years | **No.** Requires being in market, with real humans, for years | **Exponentially** |
| **Dataset — outcome** | Measured persuasion: which arguments changed which real minds | **No.** Requires operating a social product | **Exponentially** |
| **Dataset — psychometric** | Item difficulty and discrimination parameters calibrated on hundreds of thousands of human responses | **No.** Same reason standardised tests are undisplaceable | **Yes** |
| **Network effect** | Opposition marketplace: more users → better-matched opponents → better learning → more users | No — needs the community | **Yes, but weak early** |
| **Network effect** | **Credential recognition:** employers trust it because candidates hold it; candidates earn it because employers trust it | No | **Strongest available, once ignited** |
| **Institutional trust** | Accreditation partnerships, published validity studies, external governance | **No — and structurally excluded for AI labs** | Slowly, then permanently |
| **Brand** | "Agora-verified" as a shorthand | No | Slowly |

**Rank order of durability:** institutional trust > credential network effect > longitudinal behavioural data > psychometric calibration > persuasion data > opposition network > capabilities > features.

Note what that ordering implies: **the most defensible assets are the slowest to build and the least visible in a demo.** That is precisely why frontier labs will not build them, and precisely why we must start now.

### What compounds exponentially

Three things, and only three:

1. **Time-in-market on the behavioural record.** A competitor starting in 2029 is three years behind in 2032, permanently. There is no capital substitute for elapsed time.
2. **Credential recognition.** Zero value until a threshold, then step-function. Once fifty employers recognise it, the fifty-first is free.
3. **Psychometric calibration.** Each response sharpens every future measurement. This is the same barrier that has kept the SAT and the CFA in place for decades despite being technically unremarkable.

---

## V. Market sequencing — ranked

If I could build one market first:

**1 · Law — specifically LSAT and legal education.** This is the wedge, and I want to be concrete about why it is not an arbitrary pick.

- **The demand already exists and is already paid for.** LSAT prep is a ~$300M market; ~100k+ test-takers a year. The LSAT is, almost literally, our skill tree — logical reasoning, assumption identification, flaw detection, argument structure. We would not be creating a category; we would be entering one with a better product.
- **Bar prep is a $500M+ market** dominated by three incumbents with poor products.
- **Legal reasoning is codified.** IRAC maps almost exactly onto our Toulmin structure. Mastery is definable and gradeable.
- **Law schools are in acute AI crisis** over written assessment, and they are prestige-sensitive institutions with real budgets.
- **Lawyers are paid to argue.** Willingness to pay for demonstrable reasoning skill is structurally higher than in any other profession.

Entering through law converts our Gym from a category-creation problem into a product-quality problem in an existing market. That is a far easier company to start.

**2 · Professional services — consulting and finance.** MBB firms spend €10–50k per consultant per year on development. "Structured thinking" is literally the product they sell. They already have internal frameworks. A small number of very large buyers is the easiest enterprise motion that exists.

**3 · Employers / assessment.** Largest ultimate prize, but requires credential trust that does not yet exist. Enter at year 3–4, not year 1.

**4 · Universities (general).** Highest data and credibility value, worst economics — 18-month cycles, committee procurement, thin budgets. Pursue for legitimacy and data, price near cost, do not model as revenue.

**5 · Executive education.** High price, relationship-driven, hard to scale, no compounding asset.

**6 · Public policy and government.** Enormous and sticky, but 24–48-month cycles will kill a startup that depends on it.

**7 · Journalism.** Prestigious, tiny, and the budgets are shrinking. Do it for credibility, not revenue.

**8 · Consumer, standalone.** The funnel. Never the business.

---

## VI. Business models, with honest numbers

| Model | Realistic ARR ceiling | Probability | Notes |
|---|---|---|---|
| **Consumer freemium/subscription** | €40–150M | Medium | Requires Duolingo-grade category creation. Funnel value exceeds revenue value |
| **Test prep (LSAT/bar)** | €50–120M | **High** | Existing demand, existing budgets, weak incumbents. The fastest real revenue |
| **Professional services SaaS** | €100–250M | Medium-high | Few buyers, large contracts, long retention |
| **University licensing** | €15–40M | Medium | Strategic. Do not build the model on it |
| **Professional certification** | **€200–600M** | Medium | The CFA does ~€400M on one credential. Requires a decade and independence |
| **Assessment / hiring platform** | **€300M–1B+** | Low-medium | The €1B path. Requires credential trust first, and verification to be solvable |
| **Executive coaching** | €20–50M | Medium | Doesn't compound |
| **API / evidence graph** | €10–30M | Medium | Nice margin, small |
| **Marketplace (coaches, opponents)** | €20–60M | Low | Adds moderation cost, little compounding |
| **Corporate academies** | €50–150M | Medium | Services-heavy, low multiple |

**Composite realistic paths:**

| Scenario | Ten-year ARR | Probability |
|---|---|---|
| Consumer learning company only | €60–150M | ~35% |
| Learning + professional + test prep | €200–400M | ~25% |
| **+ credential and assessment adoption** | **€600M–1.5B** | **~12%** |
| Becomes the standard for verified human judgment | €2B+ | ~3% |
| Fails to establish the loop at all | ~0 | ~25% |

**The honest read: the expected value is carried almost entirely by the 15% of outcomes that include the credential.** Everything else is a good small company. If you are optimising for the outcome you asked about, you are optimising for that 15% — and that means making decisions today that only pay off in year five.

---

## VII. The category

You proposed *"I train my reasoning on Agora."* I think it is directionally right and strategically incomplete, for one reason: **training has no felt demand, and categories built on unfelt demand require Duolingo-scale marketing spend to create.**

Reconsider GitHub, since you raised it. GitHub did not create version control — Git already existed and was free. **GitHub created the developer's portable professional identity.** The value was never the tooling; it was that your work became visible, attributable, and yours across employers. Developers did not join to get better at coding. They joined because that was where the record lived.

That is the right shape.

> **Agora is where thinking is verified.**
>
> Consumer expression: *"it's on my Agora."*
> Institutional expression: *"Agora-verified reasoning."*

The practice and the proof are the same act — as on GitHub, where committing is both how you work and how you are known. You train by arguing; the record accumulates; the record becomes the asset.

**The category to create is not "reasoning training." It is "verified thinking" — a proof layer for human judgment.** Nobody owns it, the pain that creates it is already here, and the companies best equipped to build the technology are structurally barred from selling the trust.

Two framings I would reject: *"the gym for your mind"* (correct about the practice, silent about the asset, and it caps us at a consumer app), and *"AI debate coach"* (describes the commodity layer and dies within eighteen months).

---

## VIII. Competition — where we win and lose

| Competitor | We lose on | We win on |
|---|---|---|
| **ChatGPT / Claude / Gemini** | Capability, cost, distribution, convenience. Completely, on "help me write this" | **They cannot verify their own absence.** Structurally disqualified from certification. Also: they optimise for doing your thinking; we optimise for you doing it |
| **Perplexity** | Retrieval breadth, speed | Mechanism-level evidence tied to a specific inference; symmetric retrieval including what undermines you |
| **GitHub** | Nothing directly | Different asset — they verify artifacts, we verify cognition |
| **LinkedIn** | Network, distribution, incumbency | LinkedIn verifies *claims*, and everyone knows the claims are inflated. We verify *behaviour* |
| **Duolingo** | Category demand, habit design, brand, capital | They cannot credential the underlying skill — nobody hires on a Duolingo streak. Our practice produces an employable signal |
| **Chess.com** | Nothing — different domain | The model, not the competitor. Their Elo is the proof that honest measurement retains for decades |
| **Strava** | Nothing | Same |
| **Ground News** | News breadth | We are not in the news business; news is our context layer |
| **Substack** | Writer economics, audience | We reward being persuaded, not being popular |
| **MasterClass / Coursera** | Content, brand, catalogue | **Completion is not competence.** Course certificates are famously worthless because they certify attendance. We certify demonstrated behaviour |
| **ETS / Pearson / SHL** | Institutional relationships, decades of trust, sales force | **Their product is point-in-time and AI is dissolving it.** We are longitudinal, which is the only form that survives |

**The two sentences that matter:**

Against AI companies: *they will build better coaches than us, and they can never sell the certificate.*

Against assessment incumbents: *their instruments assume the candidate is alone in the room, and that assumption is gone.*

---

## IX. The next ten years

**If reasoning becomes the scarce human skill because text becomes free, three things follow.**

**1 · The premium shifts from producing arguments to evaluating them.** When any analyst can generate a competent memo in thirty seconds, the valuable person is the one who can tell whether it is right. That is a *different skill*, it is currently untaught anywhere, and it is exactly what our loop trains — because opposition and review teach evaluation, not production.

**2 · Verification becomes infrastructure.** Not a product — a layer. Universities need it for admission and graduation. Employers need it for screening. Professional bodies need it because their existing signals are dissolving. Whoever provides it becomes a toll on a very large amount of economic activity. This is the Stripe shape: boring, essential, embedded, and impossible to displace once it is in the workflow.

**3 · The record becomes portable property.** GitHub's real innovation was that your work followed you between employers. A reasoning record that follows a person across their career — private by default, disclosed at their choice — is the same primitive applied to judgment.

**Is Agora "GitHub for reasoning"? Nearly — and the analogy understates it.** GitHub sat on top of work developers already did for other reasons. Nobody currently produces a record of their reasoning for any reason. **We must create the behaviour *and* host the record**, which is harder, slower, and — if it works — more defensible, because the behaviour and the record are the same product and cannot be unbundled by a competitor.

The larger opportunity, stated plainly: **if human judgment becomes the scarce input to the economy, the company that measures it credibly is positioned like the credit bureau of cognition.** That is a several-billion-euro company with a governance obligation heavy enough that it should frighten us. It should not be built carelessly, and it should probably not be built without an independent standards body from early on — for real reasons, not for optics.

---

## X. The five ways we fail

Ranked by probability, not by drama.

**1 · The behaviour never happens. (~40%)**
People will not write, or they write once and will not revise. The loop never closes, and everything downstream — the record, the credential, the assessment business — never has an input. **This is by far the most likely failure and it is the only one we can test cheaply.** It is what the ten-day concierge experiment exists for, and it should be run before another euro is spent.

**2 · Verification proves impossible. (~20%)**
AI assistance defeats every remote assessment format, longitudinal signals turn out to be spoofable by a persistent assistant, and the credential is worthless. This is existential and *partly outside our control*. Mitigation: bet on longitudinal-behavioural rather than point-in-time, build assistance-detection as a first-class research problem, and be honest that we are in an arms race. If we cannot verify, we are a €100M learning company at best.

**3 · Right thesis, wrong decade. (~15%)**
The verification crisis is real but institutions absorb it slowly — universities muddle through with oral exams, employers fall back on referrals — and the acute demand arrives in 2033 while we run out of money in 2028. **Timing risk is the classic killer of correct theses.** Mitigation: enter through law and test prep, where demand exists *today*, and let the credential mature on revenue rather than on venture patience.

**4 · Political capture or perceived bias. (~15%)**
One credible analysis showing our instrument scores one ideological side lower and institutional trust is gone permanently — and institutional trust is the whole asset. This is why the mirror test is a release gate, why no public scores can ever exist, and why an independent governance board is a structural necessity rather than a nicety. The pressure to relax these will come from inside, during a growth quarter.

**5 · We are commoditised before the slow asset matures. (~10%)**
Frontier labs ship free coaching good enough that our consumer funnel never reaches scale, so we never accumulate the data or the revenue to fund the decade-long credential build. Mitigation: do not depend on consumer scale — enter through paying professional markets from year one.

**And the failure mode that is not on the list because it is a choice, not a risk:** shipping engagement mechanics in a weak quarter. Leaderboards, virality, popularity metrics. Every one of them would work, and each would convert us into a debate site with unusually good typography.

---

## XI. Why should this company exist?

Not why the product is useful. Why the world needs the company.

For most of history, being able to think well and being able to *show* you could think well were nearly the same thing, because the showing was expensive. That coupling was doing enormous invisible work: it was how universities admitted, how employers hired, how professions licensed, and how people decided whom to believe.

**That coupling broke, permanently, in about eighteen months, and nothing has replaced it.**

Two futures follow.

In the first, human judgment becomes unverifiable. Because it is unverifiable it cannot be credentialed; because it cannot be credentialed it is not selected for; because it is not selected for it is not trained; and because it is not trained, fewer people have it — at exactly the moment when everyone can produce fluent, confident, plausible text about anything. That is a world with more argument and less reasoning, and it is the default trajectory.

In the second, someone builds a trustworthy way to demonstrate that a person actually thinks. Not a test — a record. Earned over years, under adversarial pressure from real humans, with the errors left in.

**Agora exists to make the second future available.** The company is not "an AI product that teaches reasoning." It is the institution that keeps human judgment legible in an era when its traditional evidence has become free to fake.

That is a company that should exist. It is also a company with an obligation attached: if we build the instrument that decides whose reasoning counts, we inherit a responsibility closer to an examination board's than a startup's, and we should structure for that early — independent governance, published methods, external validation, and a bright line against ever selling the reasoning record.

**And the honest caveat, which belongs in the same paragraph as the ambition:** we have not yet demonstrated that a single human being will revise an argument after being told it has a hole. Everything above is downstream of that one behaviour. It is testable in ten days by one person with a Discord server and a spreadsheet, and until it is tested, this memo is a hypothesis with good footnotes.

---

## XII. What changes now

Six decisions that follow from the memo. Each is cheap today and expensive in two years.

**1 · Instrument the record for verification, not just for coaching.** Every argument, opposition, revision, attestation and resolved prediction, immutably, with provenance. The behavioural dataset is the company; it only accumulates in real time and there is no retroactive path.

**2 · Enter through law.** LSAT and legal-reasoning training as the first paid product. Existing demand, existing budgets, codified skill, weak incumbents, acute AI crisis. It turns category creation into product competition.

**3 · Separate the examining function from the teaching function, structurally, from the start.** Different governance, and the examining arm must be able to say the teaching arm's users are not good enough. Retrofitting independence is impossible — it is either in the founding structure or it is never credible.

**4 · Start the psychometric validation programme in year one.** Reliability, then convergent and discriminant validity, then fairness. It takes three to five years and external replication, so beginning it late means having no credential in year eight.

**5 · Treat consumer as funnel, and say so internally.** Judge it on cohort quality and data yield, not revenue. A consumer team with a revenue target will ship the engagement mechanics that destroy the asset.

**6 · Run the ten-day concierge test before anything else on this list.** If people do not revise, the memo is void and you have learned it for £400 and a fortnight instead of four years and a Series A.

---

*The strongest version of the bet, in one sentence: the supply of convincing arguments went to zero, the supply of verified judgment did not, and the five companies best equipped to build the technology are the five companies that can never be trusted to certify its absence.*
