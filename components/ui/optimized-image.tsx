import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type OptimizedImageProps = ImageProps & {
  /** Wrap in figure with optional caption */
  caption?: string;
};

/**
 * SEO & performance-friendly image wrapper.
 * Defaults: lazy loading, async decoding, responsive sizes.
 */
export function OptimizedImage({
  className,
  alt,
  loading,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  caption,
  ...props
}: OptimizedImageProps) {
  const image = (
    <Image
      alt={alt}
      loading={priority ? undefined : (loading ?? "lazy")}
      decoding="async"
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-full", className)}
      {...props}
    />
  );

  if (caption) {
    return (
      <figure className="space-y-2">
        {image}
        <figcaption className="text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return image;
}
