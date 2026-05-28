"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { MainContainer } from "@/components/layout/main-container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { useActiveNav } from "@/hooks/use-active-nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function navLinkState(active: boolean, mobile = false) {
  return cn(
    navLinkClass,
    mobile && "rounded-lg px-3 py-2",
    active
      ? mobile
        ? "bg-brand-pink/10 font-semibold text-brand-pink"
        : "font-semibold text-brand-pink"
      : mobile
        ? "text-muted-foreground hover:bg-muted hover:text-foreground"
        : "text-muted-foreground hover:text-foreground",
  );
}

type NavItemLinkProps = {
  href: string;
  title: string;
  active: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
};

function NavItemLink({ href, title, active, mobile, onNavigate }: NavItemLinkProps) {
  const hasHash = href.includes("#");

  return (
    <Link
      href={href}
      className={navLinkState(active, mobile)}
      aria-current={active ? (hasHash ? "location" : "page") : undefined}
      onClick={onNavigate}
    >
      {title}
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isActive } = useActiveNav();
  const contactActive = isActive("/contact");
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const menu = mobileNavRef.current;
    if (!menu) return;

    const focusables = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <MainContainer as="div" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${siteConfig.name} home`}
        >
          <BrandLogo priority className="h-11 w-auto sm:h-12 md:h-14" />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {siteConfig.nav.map((item) => (
            <NavItemLink
              key={item.href}
              href={item.href}
              title={item.title}
              active={isActive(item.href)}
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            variant={contactActive ? "default" : "brand"}
            className={cn(
              "hidden sm:inline-flex",
              contactActive && "ring-2 ring-brand-pink/40",
            )}
          >
            <Link href="/contact" aria-current={contactActive ? "page" : undefined}>
              Get Consultation
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            ref={mobileToggleRef}
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
        ref={mobileNavRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "border-t border-border/60 bg-background/95 md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <MainContainer className="flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <NavItemLink
              key={item.href}
              href={item.href}
              title={item.title}
              active={isActive(item.href)}
              mobile
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
          <Button asChild variant="brand" className="mt-2 w-full sm:hidden">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              aria-current={contactActive ? "page" : undefined}
            >
              Get Consultation
            </Link>
          </Button>
        </MainContainer>
      </div>
    </header>
  );
}
