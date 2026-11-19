"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ServiceFile, ServiceInstallation } from "@/lib/internet/records";

import {
  addVisit,
  deleteSite,
  deleteVisit,
  saveProfile,
  saveSite,
  type ServiceActionState,
} from "@/app/internet/admin/customers/[userId]/actions";

const initialState: ServiceActionState = {};

const selectClass =
  "flex h-10 w-full rounded-lg border border-input bg-background/80 px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function Feedback({ state }: { state: ServiceActionState }) {
  return (
    <>
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
    </>
  );
}

export function ServiceProfileForm({
  customerUserId,
  profile,
}: {
  customerUserId: string;
  profile: ServiceFile["profile"];
}) {
  const [state, action, pending] = useActionState(saveProfile, initialState);

  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="customerUserId" value={customerUserId} />
      <FormField label="Phone" htmlFor="service-phone">
        <Input id="service-phone" name="phone" defaultValue={profile?.phone ?? ""} disabled={pending} />
      </FormField>
      <FormField label="Service address" htmlFor="service-address">
        <Textarea
          id="service-address"
          name="serviceAddress"
          defaultValue={profile?.serviceAddress ?? ""}
          className="min-h-20"
          disabled={pending}
        />
      </FormField>
      <FormField
        label="Starlink account reference"
        htmlFor="starlink-ref"
        hint="Typed by staff for their own records. This portal does not connect to Starlink."
      >
        <Input
          id="starlink-ref"
          name="starlinkAccountRef"
          defaultValue={profile?.starlinkAccountRef ?? ""}
          disabled={pending}
        />
      </FormField>
      <FormField label="Notes" htmlFor="service-notes">
        <Textarea
          id="service-notes"
          name="notes"
          defaultValue={profile?.notes ?? ""}
          className="min-h-20"
          disabled={pending}
        />
      </FormField>
      <Feedback state={state} />
      <Button type="submit" variant="brand" disabled={pending}>
        {pending ? "Saving..." : "Save profile"}
      </Button>
    </form>
  );
}

export function InstallationForm({
  customerUserId,
  installation,
}: {
  customerUserId: string;
  installation?: ServiceInstallation;
}) {
  const [state, action, pending] = useActionState(saveSite, initialState);
  const fieldPrefix = installation?.id ?? "new";

  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="customerUserId" value={customerUserId} />
      <input type="hidden" name="installationId" value={installation?.id ?? ""} />
      <FormField label="Site name" htmlFor={`${fieldPrefix}-site`} required>
        <Input
          id={`${fieldPrefix}-site`}
          name="siteName"
          defaultValue={installation?.siteName ?? ""}
          required
          disabled={pending}
        />
      </FormField>
      <FormField label="Address" htmlFor={`${fieldPrefix}-address`} required>
        <Textarea
          id={`${fieldPrefix}-address`}
          name="address"
          defaultValue={installation?.address ?? ""}
          className="min-h-20"
          required
          disabled={pending}
        />
      </FormField>
      <FormField
        label="Kit serial"
        htmlFor={`${fieldPrefix}-kit`}
        hint="Serial or kit number recorded by staff."
      >
        <Input
          id={`${fieldPrefix}-kit`}
          name="kitSerial"
          defaultValue={installation?.kitSerial ?? ""}
          disabled={pending}
        />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Installed on" htmlFor={`${fieldPrefix}-installed`}>
          <Input
            id={`${fieldPrefix}-installed`}
            name="installedOn"
            type="date"
            defaultValue={installation?.installedOn ?? ""}
            disabled={pending}
          />
        </FormField>
        <FormField label="Status" htmlFor={`${fieldPrefix}-status`} required>
          <select
            id={`${fieldPrefix}-status`}
            name="status"
            defaultValue={installation?.status ?? "planned"}
            className={selectClass}
            disabled={pending}
          >
            <option value="planned">Planned</option>
            <option value="installed">Installed</option>
            <option value="inactive">Inactive</option>
          </select>
        </FormField>
      </div>
      <FormField label="Notes" htmlFor={`${fieldPrefix}-notes`}>
        <Textarea
          id={`${fieldPrefix}-notes`}
          name="notes"
          defaultValue={installation?.notes ?? ""}
          className="min-h-20"
          disabled={pending}
        />
      </FormField>
      <Feedback state={state} />
      <Button type="submit" variant={installation ? "outline" : "brand"} disabled={pending}>
        {pending ? "Saving..." : installation ? "Update installation" : "Add installation"}
      </Button>
    </form>
  );
}

export function RemoveInstallationButton({
  customerUserId,
  installationId,
}: {
  customerUserId: string;
  installationId: string;
}) {
  const [state, action, pending] = useActionState(deleteSite, initialState);

  return (
    <form action={action} className="space-y-2">
      <input type="hidden" name="customerUserId" value={customerUserId} />
      <input type="hidden" name="installationId" value={installationId} />
      <Feedback state={state} />
      <Button type="submit" variant="outline" size="sm" disabled={pending}>
        {pending ? "Removing..." : "Remove installation"}
      </Button>
    </form>
  );
}

export function ServiceVisitForm({
  customerUserId,
  installationId,
}: {
  customerUserId: string;
  installationId: string;
}) {
  const [state, action, pending] = useActionState(addVisit, initialState);

  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="customerUserId" value={customerUserId} />
      <input type="hidden" name="installationId" value={installationId} />
      <FormField label="Visit date" htmlFor={`${installationId}-visit-date`} required>
        <Input
          id={`${installationId}-visit-date`}
          name="performedOn"
          type="date"
          required
          disabled={pending}
        />
      </FormField>
      <FormField label="Summary" htmlFor={`${installationId}-visit-summary`} required>
        <Input id={`${installationId}-visit-summary`} name="summary" required disabled={pending} />
      </FormField>
      <FormField label="Details" htmlFor={`${installationId}-visit-details`}>
        <Textarea
          id={`${installationId}-visit-details`}
          name="details"
          className="min-h-20"
          disabled={pending}
        />
      </FormField>
      <Feedback state={state} />
      <Button type="submit" variant="outline" size="sm" disabled={pending}>
        {pending ? "Saving..." : "Add service visit"}
      </Button>
    </form>
  );
}

export function RemoveVisitButton({
  customerUserId,
  recordId,
}: {
  customerUserId: string;
  recordId: string;
}) {
  const [state, action, pending] = useActionState(deleteVisit, initialState);

  return (
    <form action={action}>
      <input type="hidden" name="customerUserId" value={customerUserId} />
      <input type="hidden" name="recordId" value={recordId} />
      <Button type="submit" variant="ghost" size="sm" disabled={pending}>
        {pending ? "Removing..." : "Remove"}
      </Button>
      {state.error ? (
        <p role="alert" className="text-xs text-destructive">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
