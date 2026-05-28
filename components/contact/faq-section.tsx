"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionHeader } from "@/components/layout/section-header";
import { SectionShell } from "@/components/layout/section-shell";
import { faqItems } from "@/lib/contact-content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="faq" background="muted" containerSize="narrow">
      <SectionHeader
        eyebrow="FAQ"
        eyebrowTone="green"
        title="Frequently asked questions"
        description="Quick answers to common questions about working with Primordial Technologies."
        className="mb-10"
      />

      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-button-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-border/70 bg-card/80 backdrop-blur-sm"
            >
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/40"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-display text-base font-semibold sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 text-brand-pink",
                  )}
                  aria-hidden
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-border/60 px-5 pb-4 pt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
