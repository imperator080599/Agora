# REASONING SKILL TREE

**Status:** Proposed. The curriculum spine. Feeds `REASONING_GYM.md` (exercises) and `ASSESSMENT_FRAMEWORK.md` (measurement).
**Date:** 2026-07-25

---

## 1. Structure

Eight **strands**, forty-six **skills**. Not levels — a directed graph with prerequisites, so a learner is at different depths in different strands simultaneously, which is how real competence actually looks.

```
A · STRUCTURE      what an argument is made of
B · EVIDENCE       what counts as support
C · CAUSALITY      what makes a because true
D · DIALECTIC      the other side
E · UNCERTAINTY    how sure should you be
F · LANGUAGE       saying exactly what you mean
G · METACOGNITION  knowing your own mind
H · RHETORIC       being understood and moving people
```

**Design rules.** Every skill is (1) *nameable* — a person can say what they are practising; (2) *attemptable in ≤3 minutes*; (3) *observable* — mastery has a behavioural signature; (4) *transferable* — an abstract rule, not an Agora convention.

**Three tiers within each strand:** `recognise` (spot it when present) → `analyse` (explain why) → `produce` (do it yourself under your own steam). Recognition precedes production everywhere; this is the single most reliable sequencing principle in skill instruction.

---

## 2. The strands

### A · STRUCTURE — *what an argument is made of*

| | Skill | Prereq | Tier |
|---|---|---|---|
| A1 | Identify the thesis | — | recognise |
| A2 | Separate premise from conclusion | A1 | recognise |
| A3 | Map an argument's parts and links | A2 | analyse |
| A4 | **Find the unstated warrant** | A3 | analyse |
| A5 | Detect circular reasoning | A2 | recognise |
| A6 | Detect the non-sequitur | A3 | analyse |
| A7 | Distinguish load-bearing from decorative claims | A3 | analyse |
| A8 | Construct a clean three-part argument | A4, A7 | produce |

**A4 in detail — the keystone skill of the whole tree**

*What it is:* naming the unstated principle that licenses moving from your reason to your conclusion.

*Mastery looks like:* given "productivity per hour is higher, so we can cut hours," the learner states unprompted: *"this assumes total output is preserved when hours fall."*

*Common beginner mistakes:* restating the premise and calling it the assumption; identifying a trivially true bridge instead of the contestable one; finding four assumptions and ranking none by load.

*Advanced technique:* **warrant laddering** — surfacing the assumption behind the assumption until you reach something genuinely uncontested, which is how you find where a disagreement actually lives rather than where it appears to.

*Why it anchors everything:* nearly every downstream skill depends on it. You cannot steelman without knowing which assumption the other side rejects; you cannot choose evidence without knowing which link needs support; you cannot detect a motte-and-bailey without noticing the warrant quietly changing.

---

### B · EVIDENCE — *what counts as support*

| | Skill | Prereq | Tier |
|---|---|---|---|
| B1 | Distinguish evidence from assertion | A2 | recognise |
| B2 | **Judge fit — does this support *this* claim?** | A4, B1 | analyse |
| B3 | Assess source independence and interest | B1 | analyse |
| B4 | Read study design | B1 | analyse |
| B5 | Judge scope — does the finding travel? | B4 | analyse |
| B6 | Detect cherry-picking | B2 | analyse |
| B7 | Weigh conflicting evidence | B4, B5 | produce |
| B8 | Select the evidence that would move a skeptic | B2, B7 | produce |

**B2 in detail — the most common expert/novice gap**

*What it is:* judging whether a piece of evidence bears on the specific inference it is attached to.

*Mastery looks like:* rejecting a well-known, high-quality study because it measures the wrong construct — *"this shows collaboration networks got more siloed; my claim is about innovation output. That's a second step I haven't evidenced."*

*Common beginner mistakes:* treating prestige as fit (Nature, therefore relevant); citing evidence for a claim adjacent to the one being made; quantity over fit — three loose sources beat one tight one.

*Advanced technique:* **inference-level citation** — attaching evidence to the specific link in the argument graph rather than to the argument as a whole, which immediately exposes which links have no support at all.

**B5 note:** scope is where most public argument breaks. A UK SME result says little about Indonesian manufacturing, and the skill of noticing that is worth more than any amount of source-list memorisation.

---

### C · CAUSALITY — *what makes a because true*

| | Skill | Prereq | Tier |
|---|---|---|---|
| C1 | Correlation is not causation | B1 | recognise |
| C2 | Generate candidate confounders | C1 | produce |
| C3 | Consider reverse causation | C1 | analyse |
| C4 | Specify a mechanism | A4, C1 | produce |
| C5 | Recognise selection effects | C2 | analyse |
| C6 | Read a natural experiment | C2, B4 | analyse |
| C7 | Construct the counterfactual | C6 | produce |
| C8 | Handle multi-causal and interaction effects | C4, C7 | produce |

*Why this strand gets outsized attention:* causal error is the most common defect in real argument, and — per Nisbett — training in exactly this class of reasoning is among the small set of interventions with demonstrated far transfer. If we only got one strand right, this is the one with the best evidence behind it.

**C4 mastery:** stating the causal pathway in steps small enough that each one can be independently doubted. Beginners assert *"remote work reduces innovation"*; competents say *"remote work reduces unplanned encounters, which reduce cross-domain idea exposure, which reduces novel recombination"* — and immediately see that they have three links to defend rather than one.

**Beginner mistake worth naming:** treating "I can imagine a mechanism" as evidence that the mechanism operates. Plausibility is not magnitude.

---

### D · DIALECTIC — *the other side*

| | Skill | Prereq | Tier |
|---|---|---|---|
| D1 | Restate an opposing view accurately | A1 | recognise |
| D2 | **Steelman** | D1, A4 | produce |
| D3 | Anticipate the strongest objection to your own view | D2 | produce |
| D4 | Distinguish rebutting from undercutting defeaters | A4, D3 | analyse |
| D5 | Concede precisely — give ground without collapse | D3 | produce |
| D6 | Detect the strawman | D1 | recognise |
| D7 | Sustain a position under repeated challenge | D4, D5 | produce |

**D2 in detail — the skill that changes people**

*What it is:* constructing the strongest version of a view you reject — stronger, ideally, than its actual advocates manage.

*Mastery:* an advocate of the opposing view would say *"yes, that's my argument, and you've put it better than I did."*

*Common beginner mistakes:* steelmanning the position but not the *reasoning*; adding "of course they're wrong because…" inside the steelman; choosing the most defensible version rather than the most *persuasive* one — those differ.

*Advanced technique:* **the ideological Turing test** — write the opposing case well enough that neutral readers cannot tell which side you hold.

*Why it matters beyond argument quality:* D2 is the highest-leverage intervention we have against motivated reasoning, and it is the one skill most reliably absent from online discourse. It is also the strongest candidate for our signature exercise.

**D5 is badly underrated.** Most people treat any concession as defeat, so they defend indefensible peripheral claims and lose the core. Learning to say *"you're right about that, and here's why my main point survives"* is both better reasoning and dramatically more persuasive.

---

### E · UNCERTAINTY — *how sure should you be*

| | Skill | Prereq | Tier |
|---|---|---|---|
| E1 | Express confidence explicitly | — | recognise |
| E2 | Use base rates | E1 | analyse |
| E3 | Distinguish probability from plausibility | E2 | analyse |
| E4 | Update proportionally to evidence strength | E2, B4 | produce |
| E5 | **Calibrate — say 70% and be right 70% of the time** | E1, E4 | produce |
| E6 | Reason about tails and asymmetric costs | E3 | produce |
| E7 | Decide under irreducible uncertainty | E5, E6 | produce |

**E5 is the most objectively measurable skill in the entire tree**, because a proper scoring rule exists. Every split prediction a user makes is a forecast with a resolved outcome, so we get a Brier score essentially free, and it is close to ungameable — the only way to improve it is to actually become better calibrated.

*Common beginner mistakes:* using confidence language as emphasis rather than as a quantity ("definitely" meaning "I feel strongly"); moving from 50% to 95% on one anecdote; treating uncertainty as a rhetorical weakness to be hidden.

*Advanced technique:* pre-registering what evidence would move you, and by how much, **before** looking.

---

### F · LANGUAGE — *saying exactly what you mean*

| | Skill | Prereq | Tier |
|---|---|---|---|
| F1 | Define contested terms | — | recognise |
| F2 | Detect equivocation | F1 | analyse |
| F3 | Notice loaded framing | F1 | recognise |
| F4 | Hedge accurately — no more, no less | E1 | produce |
| F5 | Detect the motte-and-bailey | F2, A4 | analyse |
| F6 | Write so a reader gets it first time | F4 | produce |

**F5 is worth teaching by name** because it is everywhere and almost nobody has the concept: a strong controversial claim is defended by retreating to a weak uncontroversial one, then quietly reasserted. Once you can see it you cannot unsee it, which is exactly the property a transferable skill should have.

---

### G · METACOGNITION — *knowing your own mind*

| | Skill | Prereq | Tier |
|---|---|---|---|
| G1 | Notice when you are reasoning toward a conclusion | E1 | recognise |
| G2 | State what would change your mind | E4 | produce |
| G3 | **Change your mind when the evidence warrants** | G2, D2 | produce |
| G4 | Recognise your own recurring error patterns | — | analyse |
| G5 | Separate the argument from the arguer | D1 | recognise |
| G6 | Teach the skill to someone else | any produce | produce |

**G3 is the summit of the tree.** Every other skill is instrumental to being able to do this. It is also the rarest, the hardest to fake, and — per `MOTIVATION_SYSTEM.md` — the highest-status act on the platform.

**G4 is the skill Agora can teach better than any other product on earth**, and it deserves emphasis because it is our structural advantage: we hold years of your reasoning, so we can tell you *"you conflate correlation with cause specifically on economic questions, and specifically when you already agree with the conclusion."* No chatbot, no book and no course can say that. It is the clearest case where our data asset becomes pedagogy.

**G6 exploits the protégé effect** — teaching produces large gains in the teacher. Ladder rung 5 is not community service; it is one of the more efficient learning activities we offer.

---

### H · RHETORIC — *being understood, and moving people*

| | Skill | Prereq | Tier |
|---|---|---|---|
| H1 | Model your audience's priors | D1 | analyse |
| H2 | Frame honestly — true, and hearable | F3, H1 | produce |
| H3 | Construct and stress-test an analogy | A4 | produce |
| H4 | Choose the illustrative example | B2, H1 | produce |
| H5 | Order an argument for a resistant reader | H1, D5 | produce |
| H6 | Persuade without manipulating | H2, G5 | produce |

**The ethical line, stated inside the curriculum rather than beside it:** we teach persuasion that survives the audience discovering exactly how it worked. Framing that clarifies, yes; framing that misleads, no. **H6 is a skill, not a disclaimer** — it is taught, practised and assessed, and an argument that scores well on persuasion while relying on a distortion scores badly overall.

**H3 deserves its own note.** Analogy is the most powerful and most abused device in argument. The skill is not producing one; it is *stress-testing* it — asking where the mapping breaks and whether the shared property is the relevant one. Practising the breaking is what separates it from rhetoric-as-trickery.

---

## 3. The critical path

Forty-six skills is a curriculum, not a starting point. If someone learns only eight things, these are the eight, in order:

```
A1 identify the thesis
  └─ A2 premise vs conclusion
       └─ A4 find the unstated warrant        ◄ keystone
            ├─ C1 correlation ≠ causation
            │    └─ C4 specify a mechanism
            ├─ B2 does this evidence fit?
            └─ D2 steelman                    ◄ the one that changes people
                 └─ D3 anticipate the objection
                      └─ G3 change your mind  ◄ the summit
```

This is the spine of the first six months, and each node has an unambiguous behavioural signature we can measure.

---

## 4. How a learner moves through it

**Unlocking is soft.** Prerequisites shape *recommendation*, not access. Anyone may attempt anything; the scheduler simply steers. Hard gates are a control mechanic and they violate autonomy for no pedagogical gain.

**Mastery is provisional and decays.** A skill is `mastered` on sustained held-out performance, and it reverts to `needs review` if spaced re-tests slip. This is honest — skills genuinely decay — and it makes the tree a living picture rather than a trophy case.

**Diagnosis drives the path.** Weekly, the Study compares Arena behaviour against Gym performance and prescribes. The interesting signal is the *gap*: a user who aces warrant drills but never states warrants in real arguments has a transfer problem, not a knowledge problem, and needs Arena work rather than more drills.

**Depth beats breadth.** Better to have six skills at `produce` than thirty at `recognise`. The scheduler defaults to deepening, not collecting.

---

## 5. Mastery signatures

Because "mastery" must mean something checkable:

| Level | Definition |
|---|---|
| **Exposed** | Encountered; can define the concept |
| **Recognises** | ≥80% on held-out identification items across ≥3 domains |
| **Analyses** | Can explain *why* — self-explanation quality rated at criterion |
| **Produces** | Demonstrates it unprompted in real Arena arguments, ≥3 occasions, ≥2 domains |
| **Transfers** | Demonstrated in a context never practised, including outside Agora where observable |
| **Teaches** | Another user adopted their explanation and improved |

**`Produces` requires Arena evidence, not drill scores.** This is the tree's structural commitment to the correction in `LEARNING_ARCHITECTURE.md` §0: no skill counts as owned until it shows up in real argument with real stakes. Drills alone can never advance a learner past `analyses`.
