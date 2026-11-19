import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/internet/login-form";
import { PortalFrame } from "@/components/internet/portal-frame";
import { MainContainer } from "@/components/layout/main-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPortalContext } from "@/lib/internet/session";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Primordial Technologies Limited Internet Services.",
  robots: { index: false, follow: false },
};

export default async function InternetLoginPage() {
  const principal = await getPortalContext();

  if (principal) redirect("/internet");

  return (
    <PortalFrame>
      <MainContainer size="narrow" className="flex flex-1 flex-col justify-center py-16">
        <Card variant="elevated">
          <CardHeader>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-pink">
              {siteConfig.name}
            </p>
            <CardTitle className="text-2xl">Internet Services</CardTitle>
            <CardDescription>
              Sign in to the account issued by Primordial Technologies Limited. Customer
              self-registration is not available.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm />
            <p className="text-sm text-muted-foreground">
              Password reset by email is not available yet. Contact{" "}
              <Link href={`mailto:${siteConfig.contactEmail}`} className="text-brand-pink">
                {siteConfig.contactEmail}
              </Link>{" "}
              if you need access.
            </p>
          </CardContent>
        </Card>
      </MainContainer>
    </PortalFrame>
  );
}
