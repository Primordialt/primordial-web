function normalizeSiteUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    return url.origin;
  } catch {
    throw new Error(
      "Invalid NEXT_PUBLIC_SITE_URL. Provide a full URL, e.g. https://primordialt.com",
    );
  }
}

export function getPublicSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!envUrl) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "NEXT_PUBLIC_SITE_URL is not set. Falling back to https://primordialt.com. Set this env var in Vercel Production/Preview for correct canonical URLs.",
      );
    }

    return "https://primordialt.com";
  }

  return normalizeSiteUrl(envUrl);
}
