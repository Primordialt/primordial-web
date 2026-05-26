import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { ContactPageHero } from "@/components/contact/contact-page-hero";
import { FaqSection } from "@/components/contact/faq-section";
import { MapSection } from "@/components/contact/map-section";
import { WhatsAppCta } from "@/components/contact/whatsapp-cta";
import { SectionShell } from "@/components/layout/section-shell";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { faqItems } from "@/lib/contact-content";
import { createPageMetadata } from "@/lib/seo";
import { contactPageSchema, faqPageSchema } from "@/lib/structured-data";

const title = "Contact Us";
const description =
  "Contact Primordial Technologies Limited for IT consulting, cybersecurity, software development, and telecom solutions in Nigeria. Email, phone, form, or WhatsApp.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/contact",
  keywords: [
    "contact Primordial Technologies",
    "IT company Lagos contact",
    "cybersecurity consultation Nigeria",
    "WhatsApp technology support",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        page={{ name: title, description, path: "/contact" }}
        extra={[contactPageSchema(), faqPageSchema(faqItems)]}
      />
      <ContactPageHero />
      <ContactInfoSection />
      <SectionShell containerSize="narrow" spacing="compact">
        <WhatsAppCta variant="banner" />
      </SectionShell>
      <FaqSection />
      <MapSection />
      <WhatsAppCta variant="floating" />
    </>
  );
}
