"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import type { PortalRole } from "@/lib/internet/access";
import { MIN_PASSWORD_LENGTH } from "@/lib/internet/validation";

import { provisionAccount, type PortalActionState } from "@/app/internet/admin/actions";

const initialState: PortalActionState = {};

export function ProvisionForm({ actorRole }: { actorRole: PortalRole }) {
  const [state, action, pending] = useActionState(provisionAccount, initialState);

  return (
    <form action={action} className="space-y-4">
      <FormField label="Full name" htmlFor="account-name" required>
        <Input id="account-name" name="name" autoComplete="name" required disabled={pending} />
      </FormField>
      <FormField label="Email" htmlFor="account-email" required>
        <Input
          id="account-email"
          name="email"
          type="email"
          autoComplete="off"
          required
          disabled={pending}
        />
      </FormField>
      <FormField
        label="Temporary password"
        htmlFor="account-password"
        required
        hint={`At least ${MIN_PASSWORD_LENGTH} characters. Email delivery is not available yet, so share this through a trusted channel.`}
      >
        <Input
          id="account-password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={MIN_PASSWORD_LENGTH}
          required
          disabled={pending}
        />
      </FormField>
      {actorRole === "admin" ? (
        <FormField label="Role" htmlFor="account-role" required>
          <select
            id="account-role"
            name="role"
            defaultValue="customer"
            disabled={pending}
            className="flex h-10 w-full rounded-lg border border-input bg-background/80 px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="customer">Customer</option>
            <option value="staff">Staff</option>
          </select>
        </FormField>
      ) : (
        <input type="hidden" name="role" value="customer" />
      )}
      {state.error ? (
        <p role="alert" className="text-sm text-destructive">
          {state.error}
        </p>
      ) : null}
      {state.success ? (
        <p role="status" className="text-sm text-brand-green">
          {state.success}
        </p>
      ) : null}
      <Button type="submit" variant="brand" disabled={pending}>
        {pending ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}
