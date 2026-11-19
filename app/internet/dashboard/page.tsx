import type { Metadata } from "next";

import { LogoutButton } from "@/components/internet/logout-button";
import { PortalFrame } from "@/components/internet/portal-frame";
import { MainContainer } from "@/components/layout/main-container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { requireCustomer } from "@/lib/internet/session";
import { getServiceFile } from "@/lib/internet/records";

export const metadata: Metadata = {
  title: "Customer portal",
  description: "Primordial Technologies Limited Internet Services customer portal.",
  robots: { index: false, follow: false },
};

const dateFormat = new Intl.DateTimeFormat("en-NG", { dateStyle: "medium" });

function formatDate(value: string | null): string {
  if (!value) return "Not recorded";
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  return dateFormat.format(new Date(Date.UTC(year, month - 1, day)));
}

export default async function CustomerDashboardPage() {
  const principal = await requireCustomer();
  const file = await getServiceFile(principal.id);
  const profile = file?.profile ?? null;
  const installations = file?.installations ?? [];

  return (
    <PortalFrame actions={<LogoutButton />}>
      <MainContainer className="space-y-8 py-12">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            Your customer portal is ready
          </h1>
          <Badge variant="brand">Customer</Badge>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Signed in as {principal.name}. Service details below are maintained by
          Primordial staff.
        </p>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Details issued by Primordial Technologies Limited.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Name: </span>
              {principal.name}
            </p>
            <p>
              <span className="text-muted-foreground">Email: </span>
              {principal.email}
            </p>
            <p>
              <span className="text-muted-foreground">Phone: </span>
              {profile?.phone ?? "Not recorded yet"}
            </p>
            <p>
              <span className="text-muted-foreground">Service address: </span>
              {profile?.serviceAddress ?? "Not recorded yet"}
            </p>
          </CardContent>
        </Card>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Installations</h2>
          {installations.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No installations have been recorded for your account yet.
            </p>
          ) : (
            installations.map((site) => (
              <Card key={site.id} variant="elevated">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle>{site.siteName}</CardTitle>
                    <Badge variant="outline" className="capitalize">
                      {site.status}
                    </Badge>
                  </div>
                  <CardDescription>{site.address}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    <span className="text-muted-foreground">Kit serial: </span>
                    {site.kitSerial ?? "Not recorded"}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Installed: </span>
                    {formatDate(site.installedOn)}
                  </p>
                  {site.notes ? <p>{site.notes}</p> : null}
                  <h3 className="pt-2 font-medium">Service visits</h3>
                  {site.visits.length === 0 ? (
                    <p className="text-muted-foreground">No visits recorded yet.</p>
                  ) : (
                    <ul className="space-y-2">
                      {site.visits.map((visit) => (
                        <li key={visit.id}>
                          <p className="font-medium">{visit.summary}</p>
                          <p className="text-muted-foreground">{formatDate(visit.performedOn)}</p>
                          {visit.details ? <p className="mt-1">{visit.details}</p> : null}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </section>
      </MainContainer>
    </PortalFrame>
  );
}
