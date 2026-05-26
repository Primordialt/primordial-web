"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { MainContainer } from "@/components/layout/main-container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <MainContainer as="div" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${siteConfig.name} home`}
        >
          <span
            aria-hidden
            className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink to-brand-green shadow-glow"
          >
            <span className="size-3 rounded-full bg-primary-foreground" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
              Primordial
            </span>
            <span className="text-xs text-muted-foreground">Technologies</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" variant="brand" className="hidden sm:inline-flex">
            <Link href="/contact">Get Consultation</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </MainContainer>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-border/60 bg-background/95 md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <MainContainer className="flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button asChild variant="brand" className="mt-2 w-full sm:hidden">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Get Consultation
            </Link>
          </Button>
        </MainContainer>
      </div>
    </header>
  );
}
