import {
  createBrandedOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

/** Twitter/X uses the same 1200×630 card as Open Graph. */
export default async function TwitterImage() {
  return createBrandedOgImage();
}
