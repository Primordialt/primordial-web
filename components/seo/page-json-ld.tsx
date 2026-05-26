import { JsonLdScript } from "@/components/seo/json-ld-script";
import type { BreadcrumbItem } from "@/lib/structured-data";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

type PageJsonLdProps = {
  breadcrumbs: BreadcrumbItem[];
  page: {
    name: string;
    description: string;
    path: string;
  };
  extra?: Record<string, unknown> | Record<string, unknown>[];
};

export function PageJsonLd({ breadcrumbs, page, extra }: PageJsonLdProps) {
  const schemas: Record<string, unknown>[] = [
    breadcrumbSchema(breadcrumbs),
    webPageSchema(page),
  ];

  if (extra) {
    const extras = Array.isArray(extra) ? extra : [extra];
    schemas.push(...extras);
  }

  return <JsonLdScript data={schemas} />;
}
