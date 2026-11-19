import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { MainContainer } from "@/components/layout/main-container";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: `The page you requested could not be found. Browse ${siteConfig.shortName} services, about, or contact our team in Lagos, Nigeria.`,
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <SiteShell>
      <MainContainer className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-brand-pink">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The link may be outdated or the page may have moved. Use the links below to
        continue exploring our technology services.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="brand" size="lg">
          <Link href="/">
            <Home className="size-4" aria-hidden />
            Back to home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">
            Contact us
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      </div>
      <nav
        aria-label="Helpful links"
        className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
      >
        <Link href="/services" className="hover:text-brand-pink">
          Services
        </Link>
        <Link href="/about" className="hover:text-brand-pink">
          About
        </Link>
        <Link href="/contact" className="hover:text-brand-pink">
          Contact
        </Link>
      </nav>
    </MainContainer>
    </SiteShell>
  );
}
