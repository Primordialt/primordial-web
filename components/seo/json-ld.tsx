import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  organizationSchema,
  professionalServiceSchema,
  webSiteSchema,
} from "@/lib/structured-data";

/** Global structured data — included on every page via root layout */
export function GlobalJsonLd() {
  return (
    <JsonLdScript
      data={[organizationSchema(), webSiteSchema(), professionalServiceSchema()]}
    />
  );
}
