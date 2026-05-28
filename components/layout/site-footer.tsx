import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { MainContainer } from "@/components/layout/main-container";
import { siteConfig } from "@/lib/site-config";

const currentYear = new Date().getFullYear();

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/50" aria-label="Site footer">
      <MainContainer className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${siteConfig.name} home`}
            >
              <BrandLogo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Nigerian technology company delivering cybersecurity, software,
              telecom infrastructure, and digital transformation for modern
              businesses and institutions.
            </p>
            <nav aria-label="Social media links" className="flex items-center gap-3 pt-1">
              <Link
                href={siteConfig.links.linkedin}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-brand-pink/40 hover:text-foreground hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-4" aria-hidden />
              </Link>
              <Link
                href={siteConfig.links.github}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-brand-green/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" aria-hidden />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-brand-pink/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="size-4" />
              </Link>
            </nav>
          </div>

          <nav aria-labelledby="footer-services-heading">
            <h2 id="footer-services-heading" className="mb-4 text-sm font-semibold">
              Services
            </h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {siteConfig.footer.services.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 transition-colors hover:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {item.title}
                    <ArrowUpRight className="size-3 opacity-60" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company-heading">
            <h2 id="footer-company-heading" className="mb-4 text-sm font-semibold">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {siteConfig.footer.company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 transition-colors hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {item.title}
                    <ArrowUpRight className="size-3 opacity-60" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic" aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading" className="mb-4 text-sm font-semibold">
              Contact
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Mail className="size-4 shrink-0 text-brand-pink" aria-hidden />
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Phone className="size-4 shrink-0 text-brand-green" aria-hidden />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden />
                {siteConfig.address}
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-wider">
            Cybersecurity · Telecom · Software · Digital Transformation
          </p>
        </div>
      </MainContainer>
    </footer>
  );
}
