"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Stack } from "@/components/layout/stack";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact/lazy-contact";
import { Card } from "@/components/ui/card";
import { Heading, Text } from "@/components/design-system";
import { contactInfo } from "@/lib/contact-content";

const infoItems = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
  },
  {
    icon: MapPin,
    label: "Office",
    value: contactInfo.address,
    href: contactInfo.mapLink,
  },
  {
    icon: Clock,
    label: "Business hours",
    value: contactInfo.hours,
    href: undefined,
  },
] as const;

export function ContactInfoSection() {
  return (
    <SectionShell id="contact-form" spacing="default">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <FadeIn>
          <Stack gap="lg">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/80">
                Get in touch
              </p>
              <Heading level="h2" className="mt-3">
                Contact information
              </Heading>
              <Text variant="lead" className="mt-3">
                Speak with our team about your project requirements, security needs, or
                infrastructure goals.
              </Text>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoItems.map((item) => (
                <Card
                  key={item.label}
                  variant="glass"
                  className="group p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-pink/30"
                >
                  <div className="flex gap-4">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-pink/10 text-brand-pink transition-colors group-hover:bg-brand-pink/15">
                      <item.icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="mt-1 block text-sm font-medium transition-colors hover:text-brand-pink sm:text-base"
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="mt-1 text-sm font-medium sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Stack>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card variant="elevated" className="p-6 sm:p-8">
            <Heading level="h3" className="mb-6">
              Send us a message
            </Heading>
            <ContactForm />
          </Card>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
