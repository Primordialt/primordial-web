import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  contactInformationSchema,
  localBusinessSchema,
  organizationSchema,
  professionalServiceSchema,
  serviceCatalogSchema,
  webSiteSchema,
} from "@/lib/structured-data";

/** Global structured data — included on every page via root layout */
export function GlobalJsonLd() {
  return (
    <JsonLdScript
      data={[
        organizationSchema(),
        webSiteSchema(),
        localBusinessSchema(),
        professionalServiceSchema(),
        serviceCatalogSchema(),
        contactInformationSchema(),
      ]}
    />
  );
}
