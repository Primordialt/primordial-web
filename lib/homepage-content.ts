import type { HomepageIndustryIconKey, HomepageServiceIconKey } from "@/lib/icon-keys";

export const heroContent = {
  eyebrow: "Nigerian Technology Company",
  headline: "Technology Solutions Built for Modern Businesses",
  subheadline:
    "Primordial Technologies Limited is a Nigerian technology company delivering reliable IT solutions, cybersecurity services, software development, telecom infrastructure, and digital transformation services for businesses, organizations, and government institutions.",
  primaryCta: { label: "Request a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
  metrics: [
    { value: "150+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Security Operations" },
    { value: "50+", label: "Enterprise Clients" },
  ],
} as const;

export const aboutPreview = {
  eyebrow: "About Us",
  title: "Trusted technology partner for Nigeria's digital future",
  description:
    "We combine deep local market understanding with enterprise-grade engineering to help organizations modernize securely. From telecom backbone deployments to proactive cyber defense, Primordial delivers outcomes, not just deliverables.",
  highlights: [
    "ISO-aligned security practices",
    "Nationwide telecom & network expertise",
    "Government & enterprise experience",
    "End-to-end delivery teams",
  ],
  cta: { label: "Learn more about us", href: "/about" },
} as const;

export type ServiceItem = {
  icon: HomepageServiceIconKey;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const services: ServiceItem[] = [
  {
    icon: "shield",
    title: "Cybersecurity Services",
    description:
      "Protect critical assets with managed detection, penetration testing, security audits, and incident response tailored for high-risk environments.",
    tags: ["SOC", "MDR", "Compliance"],
    href: "/services#cybersecurity",
  },
  {
    icon: "code2",
    title: "Software Development",
    description:
      "Design and build scalable web platforms, internal systems, and customer-facing applications with modern, maintainable architectures.",
    tags: ["Web Apps", "APIs", "Cloud"],
    href: "/services#web-development",
  },
  {
    icon: "radio",
    title: "Telecom Infrastructure",
    description:
      "Plan, deploy, and optimize network infrastructure for carriers, enterprises, and institutions requiring reliable connectivity at scale.",
    tags: ["Fiber", "Wireless", "Core Network"],
    href: "/services#telecom-infrastructure",
  },
  {
    icon: "server",
    title: "IT Solutions & Support",
    description:
      "Managed IT services, infrastructure modernization, cloud migration, and round-the-clock technical support for business continuity.",
    tags: ["Cloud", "Helpdesk", "Infra"],
    href: "/services#it-consulting",
  },
  {
    icon: "globe2",
    title: "Digital Transformation",
    description:
      "Strategy, process digitization, and technology roadmaps that align leadership vision with measurable operational improvement.",
    tags: ["Strategy", "Automation", "Analytics"],
    href: "/services#branding",
  },
  {
    icon: "wifi",
    title: "Network & Connectivity",
    description:
      "Enterprise LAN/WAN design, SD-WAN, secure remote access, and performance monitoring for distributed teams and sites.",
    tags: ["SD-WAN", "VPN", "Monitoring"],
    href: "/services#fibre-optics",
  },
];

export const whyChooseUs = [
  {
    title: "Security-first engineering",
    description:
      "Every solution is architected with zero-trust principles, continuous monitoring, and compliance-ready documentation.",
  },
  {
    title: "Telecom-grade reliability",
    description:
      "We apply carrier-level standards to network design, redundancy planning, and uptime commitments.",
  },
  {
    title: "Local expertise, global standards",
    description:
      "Nigerian market knowledge paired with international best practices in software, cloud, and cyber operations.",
  },
  {
    title: "Dedicated delivery teams",
    description:
      "Cross-functional squads aligned to your timeline, from discovery through deployment and long-term support.",
  },
];

export type IndustryItem = {
  icon: HomepageIndustryIconKey;
  name: string;
  description: string;
};

export const industries: IndustryItem[] = [
  {
    icon: "landmark",
    name: "Government",
    description: "Secure digital services and infrastructure for public institutions.",
  },
  {
    icon: "building2",
    name: "Financial Services",
    description: "Compliance-ready platforms and fraud-resistant architectures.",
  },
  {
    icon: "factory",
    name: "Manufacturing",
    description: "OT/IT convergence, IoT connectivity, and operational dashboards.",
  },
  {
    icon: "smartphone",
    name: "Telecommunications",
    description: "Core network, billing integrations, and subscriber experience systems.",
  },
  {
    icon: "globe2",
    name: "Enterprise & SME",
    description: "Scalable IT, cloud, and software for growing Nigerian businesses.",
  },
];

export const workingProcess = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We audit your current environment, risks, and goals to define a clear scope and success criteria.",
  },
  {
    step: "02",
    title: "Solution Design",
    description:
      "Architecture blueprints, security models, and project plans aligned to budget and timeline.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Agile delivery with transparent milestones, quality gates, and stakeholder checkpoints.",
  },
  {
    step: "04",
    title: "Support & Optimization",
    description:
      "Ongoing monitoring, patching, performance tuning, and strategic improvements post-launch.",
  },
];

export const testimonials = [
  {
    quote:
      "Primordial transformed our network operations with a resilient telecom rollout and 24/7 monitoring. Downtime dropped significantly within the first quarter.",
    author: "Operations Director",
    company: "National Telecom Partner",
    role: "Infrastructure Program",
  },
  {
    quote:
      "Their cybersecurity team identified critical gaps we had missed for years. The remediation roadmap was practical, fast, and fully documented for our auditors.",
    author: "Chief Information Security Officer",
    company: "Financial Services Group",
    role: "Security Transformation",
  },
  {
    quote:
      "From requirements to production, the software team delivered a secure citizen-facing portal on schedule. Communication and quality were exceptional throughout.",
    author: "Program Manager",
    company: "Public Sector Agency",
    role: "Digital Services Platform",
  },
];

export const finalCta = {
  title: "Ready to modernize your technology stack?",
  description:
    "Partner with Primordial Technologies Limited for cybersecurity, software, telecom, and digital transformation solutions built for Nigerian enterprises and institutions.",
  primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Services", href: "#services" },
} as const;
