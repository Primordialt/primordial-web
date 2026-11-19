"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import type { AccountStatus } from "@/lib/internet/access";

import { updateAccountStatus, type PortalActionState } from "@/app/internet/admin/actions";

const initialState: PortalActionState = {};

export function AccountStatusButton({
  userId,
  status,
}: {
  userId: string;
  status: AccountStatus;
}) {
  const [state, action, pending] = useActionState(updateAccountStatus, initialState);
  const nextStatus = status === "active" ? "disabled" : "active";

  return (
    <form action={action} className="space-y-1">
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="status" value={nextStatus} />
      <Button type="submit" variant="outline" size="sm" disabled={pending}>
        {pending ? "Saving..." : status === "active" ? "Disable" : "Enable"}
      </Button>
      {state.error ? (
        <p role="alert" className="text-xs text-destructive">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
