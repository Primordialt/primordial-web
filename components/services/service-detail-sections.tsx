"use client";

import { ServiceDetailSection } from "@/components/services/service-detail-section";
import { services } from "@/lib/services-content";

export function ServiceDetailSections() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceDetailSection key={service.slug} slug={service.slug} index={index} />
      ))}
    </>
  );
}
