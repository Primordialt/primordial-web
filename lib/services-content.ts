import type { ServicePageIconKey } from "@/lib/icon-keys";

export const servicesPageHero = {
  eyebrow: "Our Services",
  title: "End-to-end technology services for modern organizations",
  description:
    "From strategic IT consulting to fibre optics deployment, Primordial Technologies Limited delivers integrated solutions that secure, connect, and elevate your digital operations across Nigeria.",
} as const;

export type Service = {
  slug: string;
  icon: ServicePageIconKey;
  title: string;
  summary: string;
  description: string;
  features: string[];
  deliverables: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "it-consulting",
    icon: "briefcase",
    title: "IT Consulting",
    summary:
      "Strategic technology advisory aligned to your business goals, risk profile, and growth roadmap.",
    description:
      "Our consultants assess your current IT landscape, identify gaps, and design actionable roadmaps for modernization. We help leadership teams make informed decisions on cloud adoption, vendor selection, governance, and digital investment, ensuring technology spend delivers measurable ROI.",
    features: [
      "IT strategy & digital roadmaps",
      "Infrastructure and cloud assessments",
      "Vendor evaluation & procurement support",
      "Technology governance frameworks",
    ],
    deliverables: ["Assessment reports", "Architecture blueprints", "Implementation plans"],
    tags: ["Strategy", "Advisory", "Governance"],
  },
  {
    slug: "cybersecurity",
    icon: "shield",
    title: "Cybersecurity",
    summary:
      "Proactive defense, threat detection, and compliance-ready security for high-risk environments.",
    description:
      "We protect your organization with layered security controls, continuous monitoring, and incident response capabilities. Our cybersecurity practice covers penetration testing, security audits, SOC services, and employee awareness, helping you stay ahead of evolving threats in Nigeria's digital economy.",
    features: [
      "Penetration testing & vulnerability assessments",
      "Managed detection & response (MDR)",
      "Security operations center (SOC)",
      "Compliance & risk management",
    ],
    deliverables: ["Security audit reports", "Remediation roadmaps", "24/7 monitoring"],
    tags: ["SOC", "MDR", "Compliance"],
  },
  {
    slug: "mobile-app-development",
    icon: "smartphone",
    title: "Mobile App Development",
    summary:
      "Native and cross-platform mobile applications built for performance, security, and scale.",
    description:
      "We design and develop mobile experiences that engage users and integrate seamlessly with your backend systems. From fintech and logistics to government citizen services, our mobile teams deliver iOS and Android applications with robust APIs, offline support, and enterprise-grade security.",
    features: [
      "iOS & Android native development",
      "Cross-platform (React Native / Flutter)",
      "API integration & backend connectivity",
      "App store deployment & maintenance",
    ],
    deliverables: ["Production-ready apps", "API documentation", "Ongoing support plans"],
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    slug: "ui-ux-design",
    icon: "palette",
    title: "UI/UX Design",
    summary:
      "Human-centered interfaces that improve usability, accessibility, and conversion.",
    description:
      "Our design team creates intuitive digital experiences through research, wireframing, prototyping, and visual design. We align user journeys with business objectives, delivering design systems, responsive layouts, and WCAG-conscious interfaces that work across devices and contexts.",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Usability testing & iteration",
    ],
    deliverables: ["Figma design files", "Design system docs", "Prototype demos"],
    tags: ["UX Research", "Prototyping", "Design Systems"],
  },
  {
    slug: "branding",
    icon: "pen-tool",
    title: "Branding",
    summary:
      "Distinct brand identities that communicate trust, innovation, and market positioning.",
    description:
      "We help organizations define and express their brand through visual identity, messaging, and digital presence. From logo systems and brand guidelines to marketing collateral, Primordial ensures your brand resonates with enterprise, government, and consumer audiences.",
    features: [
      "Brand strategy & positioning",
      "Logo & visual identity design",
      "Brand guidelines & asset libraries",
      "Marketing & digital collateral",
    ],
    deliverables: ["Brand style guides", "Logo suites", "Template kits"],
    tags: ["Identity", "Guidelines", "Collateral"],
  },
  {
    slug: "web-development",
    icon: "code2",
    title: "Web Development",
    summary:
      "High-performance websites and web applications built with modern, scalable stacks.",
    description:
      "We engineer secure, SEO-friendly web platforms using Next.js, React, and cloud-native architectures. Whether you need a corporate site, customer portal, or complex SaaS product, our development teams prioritize speed, accessibility, and maintainability from day one.",
    features: [
      "Corporate & marketing websites",
      "Web applications & customer portals",
      "Headless CMS integration",
      "Performance & SEO optimization",
    ],
    deliverables: ["Deployed web platforms", "CMS training", "Hosting & DevOps setup"],
    tags: ["Next.js", "React", "Cloud"],
  },
  {
    slug: "telecom-infrastructure",
    icon: "radio",
    title: "Telecom Infrastructure",
    summary:
      "Carrier-grade network design, deployment, and optimization for reliable connectivity.",
    description:
      "We plan and implement telecom infrastructure for enterprises, ISPs, and institutions requiring robust connectivity. Our expertise spans core network architecture, last-mile solutions, redundancy planning, and performance monitoring, delivering uptime you can depend on.",
    features: [
      "Network architecture & design",
      "Wireless & microwave deployments",
      "Core network integration",
      "NOC monitoring & support",
    ],
    deliverables: ["Network designs", "Deployment reports", "SLA-backed support"],
    tags: ["Core Network", "Wireless", "NOC"],
  },
  {
    slug: "device-supply",
    icon: "package",
    title: "Device Supply",
    summary:
      "Enterprise hardware procurement, configuration, and lifecycle management.",
    description:
      "We supply and configure enterprise-grade devices, including routers, switches, servers, endpoints, and security appliances. Our procurement team ensures compatibility, warranty coverage, and timely delivery for rollouts across single sites or nationwide deployments.",
    features: [
      "Enterprise hardware sourcing",
      "Pre-configuration & staging",
      "Bulk deployment logistics",
      "Warranty & replacement support",
    ],
    deliverables: ["Configured devices", "Asset registers", "Deployment support"],
    tags: ["Hardware", "Procurement", "Deployment"],
  },
  {
    slug: "fibre-optics",
    icon: "cable",
    title: "Fibre Optics",
    summary:
      "High-speed fibre deployment, splicing, testing, and maintenance for lasting performance.",
    description:
      "Our fibre optics team delivers end-to-end solutions, from survey and trenching to fusion splicing, OTDR testing, and ongoing maintenance. We support metro networks, campus backbones, and last-mile fibre connections that power modern businesses and telecom operators.",
    features: [
      "Fibre route survey & planning",
      "Underground & aerial installation",
      "Fusion splicing & OTDR testing",
      "Maintenance & fault resolution",
    ],
    deliverables: ["Test certificates", "As-built documentation", "Maintenance contracts"],
    tags: ["FTTH", "Metro Fibre", "OTDR"],
  },
];

export const servicesCta = {
  title: "Not sure which service fits your needs?",
  description:
    "Speak with our consultants for a tailored assessment. We will recommend the right combination of services for your goals and budget.",
  primaryCta: { label: "Request a Consultation", href: "/contact" },
  secondaryCta: { label: "Learn About Us", href: "/about" },
} as const;
