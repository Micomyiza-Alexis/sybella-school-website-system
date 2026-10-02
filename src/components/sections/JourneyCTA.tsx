import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JourneyCTA() {
  const { journeyCta } = homeContent;

  return (
    <Section>
      <div className="rounded-3xl bg-primary-dark px-6 py-14 sm:px-12 sm:py-20 lg:px-20">
        <SectionHeading
          light
          align="center"
          eyebrow={journeyCta.eyebrow}
          title={journeyCta.title}
          description={journeyCta.description}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={journeyCta.primaryAction.href} variant="gold">
            {journeyCta.primaryAction.label}
          </Button>
          <Button href={journeyCta.secondaryAction.href} variant="outlineLight">
            {journeyCta.secondaryAction.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}