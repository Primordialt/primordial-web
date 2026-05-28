"use client";

import dynamic from "next/dynamic";

import { SectionSkeleton } from "@/components/ui/section-skeleton";

export const ServiceDetailSections = dynamic(
  () =>
    import("@/components/services/service-detail-sections").then((m) => ({
      default: m.ServiceDetailSections,
    })),
  { loading: () => <SectionSkeleton lines={5} /> },
);
