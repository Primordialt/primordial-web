import { siteConfig } from "@/lib/site-config";

export const contactPageHero = {
  eyebrow: "Contact Us",
  title: "Let's discuss your next technology initiative",
  description:
    "Reach our team for consultations on cybersecurity, software development, telecom infrastructure, and digital transformation. We typically respond within one business day.",
} as const;

export const contactInfo = {
  email: siteConfig.contactEmail,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
  whatsapp: siteConfig.whatsapp,
  whatsappHref: siteConfig.whatsappHref,
  address: siteConfig.address,
  hours: "Monday to Friday, 8:00 AM to 6:00 PM WAT",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.67410965978!2d3.3792057!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0997476d1d%3A0xec0591ad08901e70!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  mapLink: "https://maps.google.com/?q=Lagos,Nigeria",
} as const;

export const serviceOptions = [
  "IT Consulting",
  "Cybersecurity",
  "Mobile App Development",
  "UI/UX Design",
  "Branding",
  "Web Development",
  "Telecom Infrastructure",
  "Device Supply",
  "Fibre Optics",
  "Other / Not sure",
] as const;

export type ServiceOption = (typeof serviceOptions)[number];

export const faqItems = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "Our team aims to respond to all inquiries within one business day. Urgent cybersecurity or infrastructure matters are prioritized for same-day follow-up where possible.",
  },
  {
    question: "Do you work with government and enterprise clients?",
    answer:
      "Yes. Primordial Technologies serves government agencies, financial institutions, telecom operators, and enterprises across Nigeria with compliance-aware delivery practices.",
  },
  {
    question: "Can you support projects outside Lagos?",
    answer:
      "Absolutely. We deliver nationwide, including Abuja and other regions, with on-site teams for infrastructure, fibre, and telecom deployments as required.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Share your organization name, project goals, timeline, and any technical constraints. The more context you provide, the more tailored our initial consultation will be.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. We provide managed IT, SOC monitoring, maintenance contracts, and long-term support agreements tailored to your operational needs.",
  },
] as const;
