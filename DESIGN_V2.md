# DESIGN v2 — The Manuscript and the Margin

**Status:** Proposed. Supersedes `DESIGN.md` where they conflict; `DESIGN.md` §24 (responsive breakpoints) and the accessibility rules survive unchanged.
**Date:** 2026-07-25

---

## 1. Why the current design is not enough

The v1 interface is clean, readable, and correct. That is the problem. It is the visual equivalent of a well-written spec: nothing is wrong and nothing is felt.

Reviewing the prototype honestly, three things are missing:

1. **No point of view.** Warm paper, a serif, an accent colour. Competent, and identical to a hundred other well-made reading products. Nothing about it could only be Agora.
2. **No sense of occasion.** Publishing an argument you thought hard about should feel different from submitting a form. Right now it does not.
3. **No spatial confidence.** Everything sits in a single 680px column at a uniform rhythm. Premium interfaces vary density deliberately — they know which moments deserve air and which deserve compression.

## 2. What actually makes the benchmark products feel premium

Studying Linear, Arc, Notion, Cursor, Claude, Perplexity, Stripe, and Apple's HIG, the shared properties are not decorative. They are:

| Property | What it means in practice |
|---|---|
| **Motion explains state** | Nothing animates for delight alone. Every transition tells you where something came from or went. Linear's issue transitions, Arc's tab morphs. |
| **Restraint as confidence** | One accent, used rarely. Colour is a signal, not a decoration. Stripe's dashboard is 95% neutral. |
| **Typographic authority** | A real type scale, held to. Optical alignment. Tabular figures in data. Nobody uses six weights. |
| **Density is designed, not defaulted** | Compressed where scanning happens, generous where reading happens. Notion and Linear are dense in lists, airy in documents. |
| **Latency is designed** | Optimistic states, skeletons that match final layout, no spinner where a shape will do. Perceived speed *is* the premium feeling. |
| **The empty state is a designed screen** | Not "no items yet". A moment with intent. |
| **Craft in the last 5%** | Focus rings that match the brand. Selection colour. Scrollbar treatment. Caret colour. The things nobody names and everybody feels. |

None of that requires gradients, glassmorphism, or a mascot. It requires deciding and then holding the decision everywhere.

## 3. The design thesis

> **The manuscript and the margin.**

The user's writing is a **manuscript** — warm paper, a real serif, a generous measure, the caret blinking in a space that belongs to them.

The coach lives in the **margin** — a distinct surface, cooler and quieter, where a tutor's annotations appear. It comments, questions, and points. It never sets foot on the page.

This does three things at once, which is why it is the right thesis rather than merely a nice one:

1. **It encodes D22 visually.** The no-ghostwriting constraint stops being a policy in a document and becomes a spatial fact: the assistant is *architecturally* outside the writing surface. A user understands the rule without being told it.
2. **It comes from the subject's own world** — scholarly annotation, editorial markup, the marked-up proof, the tutor's pencil. Not from the generic vocabulary of SaaS.
3. **It scales down honestly.** On mobile the margin becomes a sheet that rises from the bottom — still adjacent, still never overlapping the text being written.

Everything below derives from this thesis.

---

## 4. Colour

The v1 palette (warm cream, terracotta) is the most common look in AI-generated interfaces, and it is not distinctive enough to carry a premium product. v2 keeps warm paper — it is genuinely the right ground for sustained reading — and changes everything around it.

**The move: paper is for the manuscript. Everything else is ink and slate.**

### Core ramp — warm, green-biased neutrals

The neutrals carry a slight green-grey bias rather than the usual yellow-orange. Against them the paper reads as warmer than it is, and the accent belongs to the same family instead of fighting it.

| Token | Light | Role |
|---|---|---|
| `--paper` | `#F5F2EB` | The manuscript ground. Only writing and reading surfaces. |
| `--paper-raised` | `#FFFDF8` | Cards on paper |
| `--slate-950` | `#12140F` | Deepest ink; focus-mode ground |
| `--slate-900` | `#1B1E18` | Primary text |
| `--slate-600` | `#5C6153` | Secondary text |
| `--slate-400` | `#8C9184` | Tertiary, metadata |
| `--slate-200` | `#D8D6C9` | Borders |
| `--slate-100` | `#E8E5D9` | Dividers, rails |

### Accent — a single deep green, used rarely

| Token | Value | Rule |
|---|---|---|
| `--accent` | `#1D3B32` | Primary actions, focus rings, active nav. Never decorative. |
| `--accent-soft` | `#E4EDE7` | Accent-tinted fills |

One accent. If a screen has more than two accent-coloured elements, one of them is wrong.

### Stance triad — semantic, never brand

| Stance | Colour | Note |
|---|---|---|
| Agree | `#2F6B58` | Deep green |
| Disagree | `#9C4A2F` | Burnt sienna |
| It's complicated | `#4E5B73` | Slate blue |

These are the only three colours permitted to appear at high saturation, because they carry meaning. They must never be borrowed for UI chrome.

### Coach ink — the margin's own colour

The margin uses a distinct, cooler ink so annotations never read as part of the manuscript:

| Token | Value | Used for |
|---|---|---|
| `--coach` | `#4A5B6E` | Coach body text and rails |
| `--coach-probe` | `#5A6B7E` | Questions |
| `--coach-flag` | `#8C4A3A` | Detected problems |
| `--coach-affirm` | `#3D6B57` | Confirmed strengths |
| `--coach-evidence` | `#1D3B32` | Evidence surfacing |

### Dark: focus mode, not a theme toggle

D18 ratified light mode, and that stands for the product. **The exception is the Composer's focus mode**, where the surround goes to `--slate-950` and the manuscript stays paper — the page appears to be lit. This is the letterpress/darkroom feel: the writing surface becomes the only lit object in the room, which is exactly the attention state we want.

This is a *mode*, entered deliberately, not a theme the OS decides. It gives us the emotional range of dark UI without abandoning a ratified decision or maintaining two full palettes.

---

## 5. Typography

### The stack

| Role | Production face | Fallback stack | Why |
|---|---|---|---|
| **Manuscript / claims** | Source Serif 4 (OFL) | `Charter, "Iowan Old Style", Georgia, serif` | High x-height, sturdy at display size, warm without being twee. Reads as *considered*. |
| **Interface** | Inter Tight (OFL) | `system-ui, -apple-system, "Segoe UI"` | Neutral, dense, excellent at small sizes |
| **Data & meta** | IBM Plex Mono (OFL) | `ui-monospace, SFMono-Regular, Menlo` | Tabular figures, timestamps, evidence IDs. Signals *record* rather than *prose*. |

Open-license only, per D19. Self-hosted, subset, `font-display: swap`. Never a CDN.

The mono is the distinctive choice. Used sparingly — for the claim number, timestamps, evidence citation keys, the progress figures — it gives the product an archival, ledger-like quality that fits an *opinion ledger* and separates it from every other rounded-sans social product.

### Scale

A modular scale at 1.25, held everywhere. No off-scale sizes.

| Step | Size | Use |
|---|---|---|
| `display` | 44 / 1.05 | Flagship claim, desktop |
| `title` | 32 / 1.12 | Claim on claim page |
| `heading` | 25 / 1.2 | Section heads |
| `subhead` | 20 / 1.35 | Card claims |
| `body` | 17 / 1.6 | Manuscript text, arguments |
| `ui` | 15 / 1.45 | Interface text |
| `small` | 13 / 1.4 | Metadata |
| `micro` | 11 / 1.3 | Labels, uppercase, `0.1em` tracking |

### Rules

- **Measure:** 62–68 characters in the manuscript. Never wider, regardless of viewport.
- **Claims are always serif, always `text-wrap: balance`.** A claim is a proposition, and it should look like one.
- **Uppercase micro-labels get `0.1em` letter-spacing** and never appear in more than one weight.
- **Tabular figures everywhere numbers align** — splits, counts, the ledger.
- **Two weights per family.** Regular and semibold for UI; regular and bold for the serif. A third weight is a decision that needs defending.

---

## 6. Space and density

Space is on a 4px base with a deliberate density split:

| Zone | Density | Rationale |
|---|---|---|
| Feed, ledger, lists | Compressed — 12/16px rhythm | Scanning |
| Manuscript, claim page | Generous — 24/32px rhythm | Reading and writing |
| Coach margin | Medium — 16/20px rhythm | Glanceable, adjacent, not competing |

The Composer is the most generous screen in the product. It should feel like a desk with room on it.

---

## 7. Motion

**Rule: motion explains state. If a transition does not tell the user where something came from, went, or changed into, it should not exist.**

| Moment | Motion | Duration / curve |
|---|---|---|
| Coach annotation appears | Fade + 4px rise, from the margin edge | 220ms `cubic-bezier(.22,1,.36,1)` |
| Split reveal | Bar wipes L→R as one unit; legend rows stagger 40ms | 600ms / 200ms |
| Step advance in Composer | Completed step collapses to a summary line; next step expands | 320ms |
| Evidence attaches to argument | Card flies from the panel to its slot in the manuscript | 340ms |
| Publish | Manuscript lifts, settles, and the debate map builds beneath it | 500ms |
| Hover on interactive card | 1px border darken + 1px rise | 120ms |
| Focus mode | Surround crossfades to slate; manuscript unchanged | 400ms |

**Three prohibitions:** nothing bounces; nothing longer than 600ms except the publish sequence; nothing animates on page load except the split reveal, which is the one moment that earns it.

`prefers-reduced-motion: reduce` removes all of it and keeps every end state. The product must be identical in information, only stiller.

---

## 8. Signature components

**The claim card.** Serif proposition, mono claim number, domain chip, and — pre-position — no numbers at all. The restraint is the design.

**The coach annotation.** A left rail in the coach's ink, a micro-label naming the intervention type, and one or two sentences. Never a chat bubble; this is a margin note, not a conversation. Types: `probe`, `flag`, `affirm`, `evidence`, `counter`.

**The evidence card.** Publisher in mono micro-caps, title in UI regular, a one-line relevance note. Selecting it snaps a citation into the manuscript with the fly-to-slot motion. This is the "magical" moment in the brief and it earns that by being *fast and physical* — the evidence visibly travels into the user's argument.

**The split bar.** One continuous bar, wiped in as a unit so proportions are honest throughout the animation. The viewer's own stance is marked with a `you` tag, never a different colour.

**The ledger row.** Mono date, serif claim fragment, stance chip, persuasion count. Reads like a record because it is one.

**Empty states.** Every one is a written screen, not a shrug:

| Screen | Copy |
|---|---|
| Ledger, no positions | *Your ledger is empty. It fills one claim at a time.* |
| No arguments on a claim | *No one has explained themselves yet. You could be the reason this debate has a shape.* |
| Evidence search, no match | *Nothing in the library fits this yet. You can publish without evidence — it will be labelled honestly.* |
| Composer, blank idea field | *One sentence. Not whether the claim is true — what you actually think is going on.* |

---

## 9. The last five percent

The details nobody names:

- **Selection colour** is `--accent-soft`, not the browser default blue.
- **Caret** in the manuscript is `--accent`, 2px, and does not blink during active typing.
- **Focus rings** are 2px `--accent` at 2px offset — visible, on-brand, never removed.
- **Scrollbars** in the coach margin are 4px, `--slate-200`, appearing on hover only.
- **Touch targets** are 44px minimum, always, including the stance buttons.
- **Numbers never reflow** — tabular figures mean a split animating from 82% to 83% does not shift the layout.
- **The publish button is the only filled accent button on its screen.** Everything else is outline or text.

---

## 10. What carries over unchanged from DESIGN.md

- §24 responsive breakpoints: XS/S mobile, M ≥768px tablet, L ≥1120px desktop
- WCAG AA contrast minimums on all text
- D15: the debate map shows no side-share numbers
- D18: light mode is the product default (focus mode is a deliberate exception, §4)
- D19: open-license typefaces only, self-hosted
- Calm, intelligent, modern, subtly rewarding — the ratified tone
