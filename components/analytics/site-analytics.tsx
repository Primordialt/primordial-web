"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

function excludePortal(event: BeforeSendEvent): BeforeSendEvent | null {
  try {
    const pathname = new URL(event.url).pathname;
    if (pathname === "/internet" || pathname.startsWith("/internet/")) {
      return null;
    }
  } catch {
    if (event.url.includes("/internet")) return null;
  }

  return event;
}

export function SiteAnalytics() {
  return <Analytics beforeSend={excludePortal} />;
}
