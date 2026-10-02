import { homeContent } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SchoolHighlights() {
  const { highlights } = homeContent;

  return (
    <Section className="bg-surface">
      <SectionHeading
        align="center"
        eyebrow={highlights.eyebrow}
        title={highlights.title}
        description={highlights.description}
      />

      <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.items.map((item) => (
          <li key={item.label} className="border-t-2 border-accent pt-6">
            <h3 className="text-2xl text-primary-dark">{item.label}</h3>
            <p className="mt-3 leading-7 text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}