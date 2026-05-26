"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services-content";

export function ServicesGrid() {
  return (
    <SectionShell id="all-services" background="muted">
      <SectionHeader
        eyebrow="Service Catalog"
        eyebrowTone="pink"
        title="Nine capabilities. One trusted partner."
        description="Explore our full range of technology services. Click any card to jump to detailed information below."
        className="mb-12"
      />

      <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={`#${service.slug}`}
              className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
            >
              <Card
                variant="interactive"
                className="h-full transition-all duration-300 group-focus-visible:border-brand-pink/50"
              >
                <CardHeader>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink/15 to-brand-green/15 text-brand-pink transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                      <service.icon className="size-6" strokeWidth={1.5} aria-hidden />
                    </div>
                    <ArrowUpRight
                      className="size-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-pink group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <CardTitle className="transition-colors group-hover:text-brand-pink">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 leading-relaxed">
                    {service.summary}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-md text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionShell>
  );
}
