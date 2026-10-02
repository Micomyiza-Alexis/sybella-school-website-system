import type { PageSection } from "@/config/pages";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toneClass, type Tone } from "./shared";

export function TimelineSection({
  section,
  tone,
}: {
  section: Extract<PageSection, { type: "timeline" }>;
  tone: Tone;
}) {
  return (
    <Section id={section.id} className={`scroll-mt-24 ${toneClass[tone]}`}>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <ol className="relative mt-12 space-y-10 border-l-2 border-border pl-8 sm:pl-10">
        {section.items.map((item) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-accent ring-2 ring-primary-dark sm:-left-[3.1rem]"
            />
            <h3 className="text-2xl text-primary-dark">{item.title}</h3>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}