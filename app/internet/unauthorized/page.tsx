import type { Metadata } from "next";
import Link from "next/link";

import { PortalFrame } from "@/components/internet/portal-frame";
import { LogoutButton } from "@/components/internet/logout-button";
import { MainContainer } from "@/components/layout/main-container";
import { Button } from "@/components/ui/button";
import { portalHomeForRole } from "@/lib/internet/access";
import { getPortalContext } from "@/lib/internet/session";

export const metadata: Metadata = {
  title: "Access denied",
  description: "You do not have access to this Internet Services page.",
  robots: { index: false, follow: false },
};

export default async function UnauthorizedPage() {
  const principal = await getPortalContext();

  return (
    <PortalFrame actions={principal ? <LogoutButton /> : null}>
      <MainContainer size="narrow" className="py-20 text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-brand-pink">
          Access denied
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          This page is not available for your account
        </h1>
        <p className="mt-4 text-muted-foreground">
          Staff tools are limited to Primordial staff. Your session was checked on the
          server.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {principal ? (
            <Button asChild variant="brand">
              <Link href={portalHomeForRole(principal.role)}>Go to your portal</Link>
            </Button>
          ) : (
            <Button asChild variant="brand">
              <Link href="/internet/login">Sign in</Link>
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href="/">Back to the website</Link>
          </Button>
        </div>
      </MainContainer>
    </PortalFrame>
  );
}
