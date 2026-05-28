export const projectsPageHero = {
  eyebrow: "Projects",
  title: "Selected technology projects delivered across Nigeria",
  description:
    "Explore case-focused project outcomes from Primordial Technologies in cybersecurity, software platforms, telecom infrastructure, and digital transformation.",
} as const;

export type ProjectItem = {
  slug: string;
  title: string;
  industry: string;
  service: string;
  summary: string;
  outcomes: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: "financial-cyber-defense-modernization",
    title: "Financial Cyber Defense Modernization",
    industry: "Financial Services",
    service: "Cybersecurity",
    summary:
      "Designed and deployed a multi-layer threat detection and response model for a regulated finance group.",
    outcomes: [
      "Expanded 24/7 threat visibility across critical assets",
      "Reduced incident triage time through SOC playbooks",
      "Improved audit readiness with documented controls",
    ],
  },
  {
    slug: "government-digital-service-platform",
    title: "Government Digital Service Platform",
    industry: "Public Sector",
    service: "Software Development",
    summary:
      "Built a secure citizen-facing digital platform with API integrations and accessibility-focused UX.",
    outcomes: [
      "Launched high-availability public service workflows",
      "Enabled secure integrations with legacy systems",
      "Improved citizen transaction completion rates",
    ],
  },
  {
    slug: "enterprise-fibre-network-expansion",
    title: "Enterprise Fibre Network Expansion",
    industry: "Telecommunications",
    service: "Telecom Infrastructure",
    summary:
      "Delivered end-to-end metro fibre rollout, testing, and optimization for enterprise connectivity growth.",
    outcomes: [
      "Increased network reliability across branch locations",
      "Lowered recurring downtime from link instability",
      "Provided certified OTDR documentation and handover",
    ],
  },
];
