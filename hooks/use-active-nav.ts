"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { isNavLinkActive } from "@/lib/nav-utils";

export function useActiveNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isActive = (href: string) => isNavLinkActive(pathname, hash, href);

  return { isActive, pathname };
}
