import type { ReactNode } from "react";
import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { MainContainer } from "@/components/layout/main-container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site-config";

type PortalFrameProps = {
  children: ReactNode;
  actions?: ReactNode;
};

export function PortalFrame({ children, actions }: PortalFrameProps) {
  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <MainContainer as="div" className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`${siteConfig.name} home`}
          >
            <BrandLogo className="h-10 w-auto sm:h-11" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {actions}
          </div>
        </MainContainer>
      </header>
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
