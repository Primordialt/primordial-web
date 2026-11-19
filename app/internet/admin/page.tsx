import type { Metadata } from "next";
import Link from "next/link";

import { AccountStatusButton } from "@/components/internet/account-status-button";
import { LogoutButton } from "@/components/internet/logout-button";
import { PortalFrame } from "@/components/internet/portal-frame";
import { ProvisionForm } from "@/components/internet/provision-form";
import { MainContainer } from "@/components/layout/main-container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { visibleAccountRoles } from "@/lib/internet/access";
import { listManagedAccounts } from "@/lib/internet/provision";
import { requireStaff } from "@/lib/internet/session";

export const metadata: Metadata = {
  title: "Administration",
  description: "Primordial Technologies Limited Internet Services administration.",
  robots: { index: false, follow: false },
};

const dateFormat = new Intl.DateTimeFormat("en-NG", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatWhen(value: Date | null): string {
  if (!value) return "Never";
  return dateFormat.format(value);
}

export default async function AdminDashboardPage() {
  const principal = await requireStaff();
  const roles = visibleAccountRoles(principal.role) ?? [];
  const accounts = await listManagedAccounts(roles);

  return (
    <PortalFrame actions={<LogoutButton />}>
      <MainContainer className="space-y-8 py-12">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            Internet administration
          </h1>
          <Badge variant="brand">{principal.role === "admin" ? "Admin" : "Staff"}</Badge>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Signed in as {principal.name}. Create accounts, then open a customer
          service file to record installations and visits.
        </p>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Create account</CardTitle>
              <CardDescription>
                {principal.role === "admin"
                  ? "Create a customer or staff account. Administrator accounts are created only with the operator command."
                  : "Create a customer account. Staff cannot create staff or administrator accounts."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProvisionForm actorRole={principal.role} />
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Accounts</CardTitle>
              <CardDescription>
                {accounts.length === 0
                  ? "No accounts in your view yet."
                  : "Disable an account to end its sessions immediately."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {accounts.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Created accounts will be listed here.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[40rem] text-left text-sm">
                    <thead className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <th className="py-2 pr-3 font-medium">Name</th>
                        <th className="py-2 pr-3 font-medium">Email</th>
                        <th className="py-2 pr-3 font-medium">Role</th>
                        <th className="py-2 pr-3 font-medium">Status</th>
                        <th className="py-2 pr-3 font-medium">Last sign-in</th>
                        <th className="py-2 font-medium">Access</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accounts.map((account) => (
                        <tr key={account.id} className="border-b border-border/70">
                          <td className="py-3 pr-3">
                            <div>{account.name}</div>
                            {account.role === "customer" ? (
                              <Link
                                href={`/internet/admin/customers/${account.id}`}
                                className="text-brand-pink hover:underline"
                              >
                                Service file
                              </Link>
                            ) : null}
                          </td>
                          <td className="py-3 pr-3">{account.email}</td>
                          <td className="py-3 pr-3 capitalize">{account.role}</td>
                          <td className="py-3 pr-3 capitalize">{account.status}</td>
                          <td className="py-3 pr-3">{formatWhen(account.lastLoginAt)}</td>
                          <td className="py-3">
                            <AccountStatusButton
                              userId={account.id}
                              status={account.status}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </MainContainer>
    </PortalFrame>
  );
}
