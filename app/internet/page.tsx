import { redirect } from "next/navigation";

import { portalHomeForRole } from "@/lib/internet/access";
import { getPortalContext } from "@/lib/internet/session";

export default async function InternetEntryPage() {
  const principal = await getPortalContext();

  if (!principal) redirect("/internet/login");

  redirect(portalHomeForRole(principal.role));
}
