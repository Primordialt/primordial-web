"use client";

import dynamic from "next/dynamic";

import { SectionSkeleton } from "@/components/ui/section-skeleton";

const sectionLoading = () => <SectionSkeleton lines={4} />;

export const ContactForm = dynamic(
  () =>
    import("@/components/contact/contact-form").then((m) => ({
      default: m.ContactForm,
    })),
  { loading: sectionLoading, ssr: false },
);

export const FaqSection = dynamic(
  () =>
    import("@/components/contact/faq-section").then((m) => ({
      default: m.FaqSection,
    })),
  { loading: sectionLoading, ssr: false },
);

export const MapSection = dynamic(
  () =>
    import("@/components/contact/map-section").then((m) => ({
      default: m.MapSection,
    })),
  { loading: sectionLoading, ssr: false },
);

export const WhatsAppCta = dynamic(
  () =>
    import("@/components/contact/whatsapp-cta").then((m) => ({
      default: m.WhatsAppCta,
    })),
  { ssr: false },
);
