"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { homepageServiceIcons } from "@/components/icons/content-icons";
import { services } from "@/lib/homepage-content";

export function ServicesOverviewSection() {
  return (
    <SectionShell id="services">
      <SectionHeader
        eyebrow="Services"
        eyebrowTone="pink"
        title="Comprehensive technology services for modern organizations"
        description="From cyber defense to telecom infrastructure, we deliver integrated solutions that secure, connect, and scale your operations."
        className="mb-12"
      />

      <StaggerChildren className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const ServiceIcon = homepageServiceIcons[service.icon];

          return (
          <StaggerItem key={service.title}>
            <Link
              href={service.href}
              className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card variant="interactive" className="h-full">
                <CardHeader>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink/15 to-brand-green/15 text-brand-pink transition-transform duration-300 group-hover:scale-110">
                      <ServiceIcon className="size-6" strokeWidth={1.5} aria-hidden />
                    </div>
                    <ArrowUpRight
                      className="size-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-pink group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <CardTitle className="transition-colors group-hover:text-brand-pink">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-md text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="sr-only">View {service.title} details</span>
                </CardHeader>
              </Card>
            </Link>
          </StaggerItem>
          );
        })}
      </StaggerChildren>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        <Link
          href="/services"
          className="font-medium text-brand-pink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          View all services
        </Link>
      </p>
    </SectionShell>
  );
}
