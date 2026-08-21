/*
 * Selected Work entries — case studies + hobby projects shown in
 * WorkSection.astro on /. Company names are placeholders for now.
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
    id: "northgate",
    kind: "client",
    name: "Northgate Bank",
    role: "Frontend Lead",
    years: "2023—2025",
    stack: ["React", "TypeScript", "Design System"],
    blurb:
      "Rebuilt the retail banking experience end to end: a new design system, a rewritten onboarding flow and a payments surface that stopped leaking customers.",
    outcomes: [
      { value: "+34%", label: "Onboarding conversion" },
      { value: "-61%", label: "Time to interactive" },
      { value: "4/mo", label: "Release cadence" },
    ],
  },
  {
    id: "meridian",
    kind: "client",
    name: "Meridian Logistics",
    role: "Full-stack Engineer",
    years: "2021—2023",
    stack: ["Next.js", "Node", "Postgres"],
    blurb:
      "Built the dispatch console a 400-truck fleet runs its day on: live map, route edits under load, and alerts drivers actually read.",
    outcomes: [
      { value: "-45%", label: "Dispatch handling time" },
      { value: "120k", label: "Daily events processed" },
      { value: "99.9%", label: "Console uptime" },
    ],
  },
  {
    id: "helios",
    kind: "client",
    name: "Helios Health",
    role: "Product Engineer",
    years: "2020—2021",
    stack: ["Vue", "Rails", "a11y"],
    blurb:
      "Took a patient portal from compliance checkbox to something people use without calling support. Accessibility was the product feature, not the audit.",
    outcomes: [
      { value: "31→67", label: "NPS" },
      { value: "AA", label: "WCAG conformance" },
      { value: "-52%", label: "Support tickets" },
    ],
  },
  {
    id: "rom-kitchen",
    kind: "hobby",
    name: "ROM Kitchen",
    role: "Maintainer",
    years: "2016—2019",
    stack: ["Android", "Shell", "Kernel"],
    blurb:
      "Custom Android ROMs for a handful of devices and a small XDA following. My first lesson in shipping to users who are not me.",
  },
  {
    id: "crt-site",
    kind: "hobby",
    name: "The CRT Site",
    role: "Everything",
    years: "2025",
    stack: ["Three.js", "Astro", "GSAP"],
    blurb:
      "This very site: an editorial page framing a 3D-rendered CRT that hosts a period-faithful 2005 website through a homography-projected screen.",
  },
  {
    id: "pocket-tally",
    kind: "hobby",
    name: "Pocket Tally",
    role: "Everything",
    years: "2024",
    stack: ["Preact", "PWA", "IndexedDB"],
    blurb:
      "A tiny offline-first budgeting PWA. One input, one number, zero accounts. Built because every other app asked for my bank login.",
  },
];
