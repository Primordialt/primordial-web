import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getAuth } from "@/lib/internet/auth";

export function LogoutButton() {
  async function signOut() {
    "use server";

    await getAuth().api.signOut({ headers: await headers() });
    redirect("/internet/login");
  }

  return (
    <form action={signOut}>
      <Button type="submit" variant="outline" size="sm">
        Log out
      </Button>
    </form>
  );
}
