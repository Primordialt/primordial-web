"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { contactInfo } from "@/lib/contact-content";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = {
  variant?: "banner" | "floating";
  className?: string;
};

const whatsappMessage = encodeURIComponent(
  "Hello Primordial Technologies, I would like to discuss a technology project.",
);

export function WhatsAppCta({ variant = "banner", className }: WhatsAppCtaProps) {
  const href = `${contactInfo.whatsappHref}?text=${whatsappMessage}`;

  if (variant === "floating") {
    return (
      <div className={cn("fixed bottom-6 right-6 z-40", className)}>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="size-5" aria-hidden />
          <span className="hidden sm:inline">WhatsApp</span>
        </Link>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[#25D366]/30 bg-gradient-to-r from-[#25D366]/10 via-card to-[#25D366]/5 p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md">
            <MessageCircle className="size-6" aria-hidden />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold sm:text-xl">
              Prefer WhatsApp?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Chat with our team directly for quick questions and consultation requests.
            </p>
          </div>
        </div>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#052e16] transition-all hover:brightness-110 sm:w-auto"
        >
          <MessageCircle className="size-4" aria-hidden />
          Start WhatsApp Chat
        </Link>
      </div>
    </div>
  );
}
