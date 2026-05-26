"use client";

import { Mail, Send } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <Section id="contact" className="pb-24">
      <MainContainer size="narrow">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-brand-pink/10 via-card to-brand-green/10 p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-pink/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -left-8 size-44 rounded-full bg-brand-green/20 blur-3xl"
            />

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-pink">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build what&apos;s next
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Tell us about your initiative and our team will respond with a
              tailored roadmap for architecture, delivery, and growth.
            </p>

            <form
              className="mt-8 grid gap-4"
              action={`mailto:${siteConfig.contactEmail}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span>Name</span>
                  <Input name="name" placeholder="Your name" required autoComplete="name" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span>Email</span>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                <span>Project details</span>
                <Input
                  name="message"
                  placeholder="What are you looking to build?"
                  required
                />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" className="w-full sm:w-auto">
                  Send inquiry
                  <Send className="size-4" aria-hidden />
                </Button>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" aria-hidden />
                  {siteConfig.contactEmail}
                </a>
              </div>
            </form>
          </div>
        </FadeIn>
      </MainContainer>
    </Section>
  );
}
