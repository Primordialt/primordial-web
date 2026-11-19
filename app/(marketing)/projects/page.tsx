import { Heading, Text } from "@/components/design-system";
import { MainContainer } from "@/components/layout/main-container";
import { Section } from "@/components/layout/section";
import { PageBreadcrumbs } from "@/components/seo/page-breadcrumbs";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";
import { projects, projectsPageHero } from "@/lib/projects-content";
import { collectionPageSchema } from "@/lib/structured-data";

const title = "Projects";
const description =
  "View selected Primordial Technologies projects in cybersecurity, software development, telecom infrastructure, and digital transformation across Nigeria.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/projects",
  keywords: [
    "technology projects Nigeria",
    "cybersecurity case studies",
    "software project portfolio",
    "telecom infrastructure projects",
    "digital transformation projects",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
        page={{ name: title, description, path: "/projects" }}
        extra={collectionPageSchema({ name: title, description, path: "/projects" })}
      />

      <Section spacing="none" className="border-b border-border/40 pt-6">
        <MainContainer>
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
            ]}
          />
        </MainContainer>
      </Section>

      <Section spacing="hero" className="relative overflow-hidden">
        <div aria-hidden className="ds-gradient-hero absolute inset-0 -z-10" />
        <div aria-hidden className="grid-overlay absolute inset-0 -z-10 opacity-40" />
        <MainContainer size="narrow" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/80">
            {projectsPageHero.eyebrow}
          </p>
          <Heading level="display" className="mt-3">
            {projectsPageHero.title}
          </Heading>
          <Text variant="lead" className="mx-auto mt-4 max-w-3xl">
            {projectsPageHero.description}
          </Text>
        </MainContainer>
      </Section>

      <Section spacing="default">
        <MainContainer>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} aria-labelledby={project.slug}>
                <Card variant="elevated" className="h-full p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.industry} · {project.service}
                  </p>
                  <Heading level="h2" id={project.slug} className="mt-3 text-xl">
                    {project.title}
                  </Heading>
                  <Text variant="small" className="mt-3 leading-relaxed">
                    {project.summary}
                  </Text>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>• {outcome}</li>
                    ))}
                  </ul>
                </Card>
              </article>
            ))}
          </div>
        </MainContainer>
      </Section>
    </>
  );
}
