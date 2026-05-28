/** Brand assets in `public/lobatan/` (Lobatan export pack). */
const base = "/lobatan" as const;

/** Shared brand colors (Lobatan SVG + site theme). */
export const brandColors = {
  pink: "#ed1d7e",
  pinkLogo: "#E81756",
  green: "#0a6b36",
  background: "#020617",
  surface: "#0f172a",
} as const;

export const brandAssets = {
  base,
  logos: {
    /** Dark ink — use when site theme is light (`logo-light.svg`). */
    onLightMode: `${base}/logo-light.svg`,
    /** Light ink — use when site theme is dark (`logo-dark.svg`). */
    onDarkMode: `${base}/logo-dark.svg`,
  },
  favicon: `${base}/favicon.ico`,
  icons: {
    png16: `${base}/favicon-16x16.png`,
    png32: `${base}/favicon-32x32.png`,
    png48: `${base}/favicon-48x48.png`,
    chrome192: `${base}/android-chrome-192x192.png`,
    chrome512: `${base}/android-chrome-512x512.png`,
    maskable512: `${base}/maskable-icon-512x512.png`,
  },
} as const;

/** Logo SVG intrinsic dimensions (viewBox). */
export const brandLogoDimensions = { width: 1200, height: 630 } as const;

/** Open Graph / Twitter card dimensions (1.91:1). */
export const ogImageDimensions = { width: 1200, height: 630 } as const;
