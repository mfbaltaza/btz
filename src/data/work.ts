/*
 * Selected Work entries — case studies + hobby projects shown in
 * WorkSection.astro on /. Client entries mirror the CV — keep them factual;
 * no invented companies, stacks or numbers.
 */

export type WorkKind = "client" | "hobby";

export interface WorkOutcome {
  value: string;
  label: string;
}

export interface WorkEntry {
  id: string;
  kind: WorkKind;
  name: string;
  role: string;
  years: string;
  stack: string[];
  blurb: string;
  outcomes?: WorkOutcome[];
}

export const workEntries: WorkEntry[] = [
  {
    id: "pagoswow",
    kind: "client",
    name: "PagosWOW",
    role: "Software Engineer",
    years: "2025",
    stack: [],
    blurb:
      "Led web development on user experience across payment rails, onboarding and product testing, owning the whole product pipeline. Doubled weekly releases on web and mobile by streamlining standards and putting AI codegen to proper use.",
    outcomes: [{ value: "2×", label: "Weekly releases, web & mobile" }],
  },
  {
    id: "cargofive",
    kind: "client",
    name: "Cargofive",
    role: "Software Engineer",
    years: "2024–2025",
    stack: [],
    blurb:
      "Streamlined contract management with a system for uploading, processing and displaying provider contracts, plus a dedicated section for operations staff to monitor contract issues.",
  },
  {
    id: "splice-digital",
    kind: "client",
    name: "Splice Digital",
    role: "Software Engineer",
    years: "2023–2024",
    stack: ["Next.js", "Sanity", "WordPress"],
    blurb:
      "Built fast, responsive headless CMS sites with Next.js on Sanity and WordPress, and rescued unmaintained client projects with fixes and a plan to improve them.",
  },
  {
    id: "keybe",
    kind: "client",
    name: "Keybe",
    role: "Software Engineer",
    years: "2021–2022",
    stack: [],
    blurb:
      "Built KB Metrics, an analytics dashboard that improved company insight by at least 20%, and a self-managed chatbot that grew adoption of the automation product and the revenue behind it.",
    outcomes: [{ value: "+20%", label: "Company insight" }],
  },
  {
    id: "veinte",
    kind: "client",
    name: "Veinte",
    role: "Software Engineer",
    years: "2021",
    stack: ["React"],
    blurb:
      "Built a self-serve profile section (personal data, KYC level, account changes) that cut support tickets by 40%, and a Services section that raised account-balance usage by more than 30%.",
    outcomes: [
      { value: "-40%", label: "Support tickets" },
      { value: "+30%", label: "Account-balance usage" },
    ],
  },
  {
    id: "crt-site",
    kind: "hobby",
    name: "The CRT Site",
    role: "Everything",
    years: "2025",
    stack: ["Three.js", "Astro"],
    blurb:
      "This very site: an editorial page framing a 3D-rendered CRT that hosts a period-faithful 2005 website through a homography-projected screen.",
  },
];
