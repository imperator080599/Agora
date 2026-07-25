// The deterministic fixture world (TEST_PLAN). FIX-83 carries the distinctive 83/11/6 split
// (counts 83/11/6) used by every leakage test: those digits must never appear pre-position.
type Src = { publisher: string; url: string; title: string };
export const FIXTURE_SOURCES = [
  { publisher: "Reuters", region: "global" },
  { publisher: "Financial Times", region: "eu" },
  { publisher: "The Economist", region: "eu" },
  { publisher: "Ars Technica", region: "us" },
  { publisher: "Nikkei Asia", region: "asia" },
];

export type FixtureClaim = {
  slug: string;
  sentence: string;
  domain: "economics" | "business" | "tech_ai" | "geopolitics";
  type: "news" | "evergreen";
  tier?: "standard" | "conflict";
  ageHours: number;
  flagshipToday?: boolean;
  bullets: { text: string; source: Src }[];
  curatedArguments: { side: "for" | "against"; attribution: string; text: string }[];
  seedSplit?: { agree: number; disagree: number; complicated: number };
};

const b = (text: string, publisher: string, path: string, title: string) => ({
  text,
  source: { publisher, url: `https://example.org/${path}`, title },
});

export const FIXTURE_CLAIMS: FixtureClaim[] = [
  {
    slug: "four-day-week-rich-economies",
    sentence: "The 4-day work week is a luxury of rich economies.",
    domain: "economics",
    type: "news",
    ageHours: 4,
    flagshipToday: true,
    bullets: [
      b("Iceland ran trials from 2015 to 2019 covering roughly 1% of its workforce.", "Reuters", "iceland-trials", "Iceland four-day week trials evaluated"),
      b("Belgium legalised a compressed four-day week in 2022.", "Financial Times", "belgium-week", "Belgium labour reform passes"),
      b("In a UK pilot, 56 of 61 participating firms continued the schedule.", "The Economist", "uk-pilot", "UK four-day week pilot results"),
    ],
    curatedArguments: [
      { side: "for", attribution: "The Economist, editorial, 2026", text: "Productivity gains appear mainly in service sectors that rich economies dominate; manufacturing-heavy economies cannot compress output hours without losing throughput." },
      { side: "for", attribution: "Financial Times, opinion, 2026", text: "Shorter weeks assume slack in knowledge work that subsistence and industrial labour markets simply do not have." },
      { side: "against", attribution: "Reuters analysis, 2026", text: "Middle-income economies adopted the 40-hour week when they were far poorer than today's candidates for a 32-hour one; norms follow bargaining power, not GDP." },
      { side: "against", attribution: "Nikkei Asia, 2026", text: "Trials in mixed-income regions show absenteeism and turnover savings that offset most of the direct cost, independent of national income." },
    ],
    seedSplit: { agree: 83, disagree: 11, complicated: 6 },
  },
  {
    slug: "eu-ai-act-startups",
    sentence: "The EU AI Act will push AI startups out of Europe.",
    domain: "tech_ai",
    type: "news",
    ageHours: 10,
    bullets: [
      b("The Act's general-purpose AI obligations began applying in stages from 2025.", "Reuters", "ai-act-stages", "EU AI Act timeline"),
      b("Several European AI firms have opened US entities in the past year.", "Financial Times", "eu-ai-us", "European AI firms expand to the US"),
    ],
    curatedArguments: [
      { side: "for", attribution: "Ars Technica, 2026", text: "Compliance costs are fixed; they weigh most on the small labs the ecosystem needs, while incumbents absorb them as overhead." },
      { side: "against", attribution: "The Economist, 2026", text: "Regulatory certainty is itself a location advantage: rules you can read beat rules improvised in litigation." },
    ],
    seedSplit: { agree: 19, disagree: 24, complicated: 9 },
  },
  {
    slug: "chip-subsidies-national-security",
    sentence: "Chip subsidies are national security spending, not industrial policy.",
    domain: "geopolitics",
    type: "news",
    ageHours: 20,
    bullets: [
      b("Multiple governments now subsidise domestic semiconductor fabrication at record levels.", "Nikkei Asia", "chip-subsidies", "Global chip subsidy race accelerates"),
    ],
    curatedArguments: [
      { side: "for", attribution: "Nikkei Asia, 2026", text: "A single strait carries most advanced logic capacity; redundancy pricing belongs in defence budgets, not commercial ROI models." },
      { side: "against", attribution: "Financial Times, 2026", text: "Labelling subsidies as security removes the cost-benefit discipline that keeps them from becoming permanent corporate welfare." },
    ],
    seedSplit: { agree: 31, disagree: 12, complicated: 14 },
  },
  {
    slug: "nuclear-decarbonization-path",
    sentence: "Nuclear power is the most realistic path to decarbonization.",
    domain: "economics",
    type: "evergreen",
    ageHours: 30,
    bullets: [
      b("Grid-scale storage costs have fallen but remain the binding constraint on renewable baseload.", "The Economist", "storage-costs", "The storage bottleneck"),
    ],
    curatedArguments: [
      { side: "for", attribution: "The Economist, 2026", text: "Every grid that decarbonised fast did it with hydro or nuclear; none has yet done it with wind and solar alone." },
      { side: "against", attribution: "Reuters analysis, 2026", text: "New nuclear's cost curve bends up while solar-plus-storage bends down; realism favours the curve that improves." },
    ],
    seedSplit: { agree: 12, disagree: 7, complicated: 4 },
  },
  {
    slug: "remote-work-innovation",
    sentence: "Remote work reduces innovation.",
    domain: "business",
    type: "evergreen",
    ageHours: 40,
    bullets: [
      b("Patent-citation studies since 2020 disagree on the effect of distributed teams on breakthrough work.", "Ars Technica", "remote-patents", "What remote work does to invention"),
    ],
    curatedArguments: [
      { side: "for", attribution: "Financial Times, 2026", text: "Breakthroughs correlate with unplanned high-bandwidth collisions, which scheduling software does not reproduce." },
      { side: "against", attribution: "Ars Technica, 2026", text: "Distributed teams widen the talent pool more than they narrow serendipity; the biggest innovation input is who you can hire." },
    ],
    // Early-debate fixture: below the n=25 threshold → counts mode (T-SP boundary)
    seedSplit: { agree: 9, disagree: 5, complicated: 3 },
  },
];

export const LEAKAGE_DENYLIST_KEYS = [
  "split", "agreeN", "disagreeN", "complicatedN", "agree_n", "disagree_n", "complicated_n",
  "movement", "rank", "cosignCount", "movedCount", "percent",
];
