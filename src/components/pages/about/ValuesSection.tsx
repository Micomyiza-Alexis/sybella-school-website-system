import type { PageSection } from "@/config/pages";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toneClass, type Tone } from "../shared";

type ValuesSectionProps = {
  section: Extract<PageSection, { type: "values" }>;
  tone: Tone;
};

export function ValuesSection({
  section,
  tone,
}: ValuesSectionProps) {
  return (
    <Section
      id={section.id}
      className={`scroll-mt-24 ${toneClass[tone]}`}
    >
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-14 divide-y divide-border border-y border-border">
          {section.items.map((item) => (
            <article
              key={item.number}
              className="group grid gap-5 py-8 md:grid-cols-[100px_1fr_1.5fr] md:items-center md:gap-10"
            >
              <span className="font-display text-4xl font-semibold text-primary/20 transition-colors duration-300 group-hover:text-accent">
                {item.number}
              </span>

              <h3 className="font-display text-2xl text-primary-dark sm:text-3xl">
                {item.title}
              </h3>

              <p className="max-w-xl leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}