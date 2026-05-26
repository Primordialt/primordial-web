import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { MainContainer } from "@/components/layout/main-container";
import { siteConfig } from "@/lib/site-config";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <MainContainer className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-display text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Engineering resilient digital platforms with a futuristic,
              enterprise-grade approach to software, cloud, and product
              innovation.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                  >
                    {item.title}
                    <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Connect</p>
            <div className="flex items-center gap-3">
              <Link
                href={siteConfig.links.linkedin}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-brand-pink/40 hover:text-foreground"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="size-4" aria-hidden />
              </Link>
              <Link
                href={siteConfig.links.github}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-brand-green/40 hover:text-foreground"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-4" aria-hidden />
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built for performance, accessibility, and scale.</p>
        </div>
      </MainContainer>
    </footer>
  );
}
