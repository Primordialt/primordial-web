import type { Metadata } from "next";
import Link from "next/link";

import {
  InstallationForm,
  RemoveInstallationButton,
  RemoveVisitButton,
  ServiceProfileForm,
  ServiceVisitForm,
} from "@/components/internet/service-file-forms";
import { LogoutButton } from "@/components/internet/logout-button";
import { PortalFrame } from "@/components/internet/portal-frame";
import { MainContainer } from "@/components/layout/main-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServiceFile } from "@/lib/internet/records";
import { requireStaff } from "@/lib/internet/session";

type CustomerServicePageProps = {
  params: Promise<{ userId: string }>;
};

export const metadata: Metadata = {
  title: "Customer service file",
  description: "Staff service records for a Primordial Internet customer.",
  robots: { index: false, follow: false },
};

const dateFormat = new Intl.DateTimeFormat("en-NG", { dateStyle: "medium" });

function formatDate(value: string | null): string {
  if (!value) return "Not set";
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  return dateFormat.format(new Date(Date.UTC(year, month - 1, day)));
}

export default async function CustomerServicePage({ params }: CustomerServicePageProps) {
  await requireStaff();
  const { userId } = await params;
  const file = await getServiceFile(userId);

  return (
    <PortalFrame actions={<LogoutButton />}>
      <MainContainer className="space-y-8 py-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-pink">
              Service file
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              {file ? file.customer.name : "Customer not found"}
            </h1>
          </div>
          <Button asChild variant="outline">
            <Link href="/internet/admin">Back to accounts</Link>
          </Button>
        </div>

        {!file ? (
          <p className="text-muted-foreground">
            That account is not a customer service file.
          </p>
        ) : (
          <>
            <p className="max-w-2xl text-sm text-muted-foreground">
              {file.customer.email}. Record the site and visits here. Starlink account
              references are notes for staff. This portal does not sign in to Starlink.
            </p>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>Contact and reference details for this customer.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ServiceProfileForm customerUserId={file.customer.id} profile={file.profile} />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Add installation</CardTitle>
                    <CardDescription>A site Primordial installs or looks after.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InstallationForm customerUserId={file.customer.id} />
                  </CardContent>
                </Card>

                {file.installations.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No installations recorded yet.</p>
                ) : (
                  file.installations.map((site) => (
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
                      <CardContent className="space-y-6">
                        <InstallationForm customerUserId={file.customer.id} installation={site} />
                        <RemoveInstallationButton
                          customerUserId={file.customer.id}
                          installationId={site.id}
                        />
                        <div className="space-y-3 border-t border-border pt-4">
                          <h2 className="text-sm font-semibold">Service visits</h2>
                          {site.visits.length === 0 ? (
                            <p className="text-sm text-muted-foreground">No visits recorded yet.</p>
                          ) : (
                            <ul className="space-y-3">
                              {site.visits.map((visit) => (
                                <li key={visit.id} className="rounded-lg border border-border p-3">
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <p className="text-sm font-medium">{visit.summary}</p>
                                      <p className="text-xs text-muted-foreground">
                                        {formatDate(visit.performedOn)}
                                      </p>
                                      {visit.details ? (
                                        <p className="mt-2 text-sm text-muted-foreground">
                                          {visit.details}
                                        </p>
                                      ) : null}
                                    </div>
                                    <RemoveVisitButton
                                      customerUserId={file.customer.id}
                                      recordId={visit.id}
                                    />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                          <ServiceVisitForm
                            customerUserId={file.customer.id}
                            installationId={site.id}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </MainContainer>
    </PortalFrame>
  );
}
