import type { AboutIconKey } from "@/lib/icon-keys";

export const aboutHero = {
  eyebrow: "About Primordial",
  title: "Engineering Nigeria's secure digital infrastructure",
  description:
    "We are a technology company committed to delivering dependable IT, cybersecurity, telecom, and software solutions that empower businesses, institutions, and government agencies to thrive in a connected world.",
} as const;

export const companyIntroduction = {
  title: "Company Introduction",
  paragraphs: [
    "Primordial Technologies Limited was founded to bridge the gap between enterprise-grade technology and the evolving needs of Nigerian organizations. We serve clients who require more than off-the-shelf solutions. They need partners who understand local context, regulatory environments, and the urgency of secure, scalable systems.",
    "Our teams specialize in cybersecurity operations, custom software engineering, telecom infrastructure, managed IT services, and digital transformation programs. From Lagos to Abuja and across the nation, we help organizations modernize with confidence.",
    "Whether deploying secure networks for a financial institution, building citizen-facing platforms for public sector agencies, or hardening critical infrastructure against cyber threats, Primordial brings discipline, transparency, and long-term partnership to every engagement.",
  ],
  stats: [
    { value: "2018", label: "Founded" },
    { value: "50+", label: "Team Members" },
    { value: "150+", label: "Projects Completed" },
    { value: "6", label: "Core Service Lines" },
  ],
} as const;

export const mission = {
  title: "Our Mission",
  statement:
    "To deliver innovative, secure, and reliable technology solutions that enable Nigerian businesses and institutions to operate efficiently, protect their assets, and achieve sustainable digital growth.",
  icon: "target" as AboutIconKey,
} as const;

export const vision = {
  title: "Our Vision",
  statement:
    "To become Nigeria's most trusted technology partner, recognized for excellence in cybersecurity, telecom infrastructure, and software engineering that shapes a safer, more connected future for Africa.",
  icon: "eye" as AboutIconKey,
} as const;

export type CoreValue = {
  icon: AboutIconKey;
  title: string;
  description: string;
};

export const coreValues: CoreValue[] = [
  {
    icon: "shield",
    title: "Integrity & Security",
    description:
      "We embed trust and protection into every solution, holding ourselves to the highest ethical and security standards.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description:
      "We continuously adopt modern tools and methodologies to solve complex challenges with creative, practical outcomes.",
  },
  {
    icon: "handshake",
    title: "Partnership",
    description:
      "We work alongside our clients as long-term allies, invested in their success beyond individual project milestones.",
  },
  {
    icon: "zap",
    title: "Excellence",
    description:
      "We pursue quality in delivery, communication, and support, measuring our work against clear, accountable standards.",
  },
  {
    icon: "users",
    title: "People First",
    description:
      "We invest in our people and prioritize human-centered design, ensuring technology serves people and communities.",
  },
];

export const companyGoals = [
  {
    year: "2024",
    title: "Expand cybersecurity operations",
    description:
      "Launch managed detection and response capabilities with 24/7 SOC services for enterprise and government clients.",
  },
  {
    year: "2025",
    title: "Scale telecom infrastructure practice",
    description:
      "Grow nationwide fiber and wireless deployment partnerships, supporting carriers and large enterprise networks.",
  },
  {
    year: "2026",
    title: "Accelerate software innovation",
    description:
      "Establish a dedicated product engineering studio for secure web platforms, APIs, and cloud-native applications.",
  },
  {
    year: "2027",
    title: "Lead digital transformation in public sector",
    description:
      "Deliver citizen-centric digital services and secure government platforms aligned with national ICT objectives.",
  },
  {
    year: "2028",
    title: "Regional technology leadership",
    description:
      "Extend Primordial's footprint across West Africa as a benchmark for secure, reliable technology delivery.",
  },
];
