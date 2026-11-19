/** First non-empty value. Bracket access stays runtime-safe for Vercel aliases. */
export function readEnv(...names: string[]): string | undefined {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }

  return undefined;
}

function normalizeSiteUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    return url.origin;
  } catch {
    throw new Error(
      "Invalid MI_SITE_URL. Provide a full URL, e.g. https://primordialt.com",
    );
  }
}

export function getPublicSiteUrl(): string {
  const envUrl = readEnv("MI_SITE_URL", "NEXT_PUBLIC_SITE_URL");

  if (!envUrl) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "MI_SITE_URL is not set. Falling back to https://primordialt.com. Set MI_SITE_URL in Vercel Production/Preview for correct canonical URLs.",
      );
    }

    return "https://primordialt.com";
  }

  return normalizeSiteUrl(envUrl);
}
