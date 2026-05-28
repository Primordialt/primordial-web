"use client";

import dynamic from "next/dynamic";

import { SectionSkeleton } from "@/components/ui/section-skeleton";

const sectionLoading = () => <SectionSkeleton />;

export const AboutPreviewSection = dynamic(
  () =>
    import("@/components/sections/about-preview-section").then((m) => ({
      default: m.AboutPreviewSection,
    })),
  { loading: sectionLoading },
);

export const ServicesOverviewSection = dynamic(
  () =>
    import("@/components/sections/services-overview-section").then((m) => ({
      default: m.ServicesOverviewSection,
    })),
  { loading: sectionLoading },
);

export const WhyChooseUsSection = dynamic(
  () =>
    import("@/components/sections/why-choose-us-section").then((m) => ({
      default: m.WhyChooseUsSection,
    })),
  { loading: sectionLoading },
);

export const IndustriesServedSection = dynamic(
  () =>
    import("@/components/sections/industries-served-section").then((m) => ({
      default: m.IndustriesServedSection,
    })),
  { loading: sectionLoading },
);

export const WorkingProcessSection = dynamic(
  () =>
    import("@/components/sections/working-process-section").then((m) => ({
      default: m.WorkingProcessSection,
    })),
  { loading: sectionLoading },
);

export const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/testimonials-section").then((m) => ({
      default: m.TestimonialsSection,
    })),
  { loading: sectionLoading },
);

export const FinalCtaSection = dynamic(
  () =>
    import("@/components/sections/final-cta-section").then((m) => ({
      default: m.FinalCtaSection,
    })),
  { loading: sectionLoading },
);
