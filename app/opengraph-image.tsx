import {
  createBrandedOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage() {
  return createBrandedOgImage();
}
