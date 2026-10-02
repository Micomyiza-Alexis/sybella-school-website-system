import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AcademicJourney() {
  const { academicJourney } = homeContent;

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
        <SectionHeading
          eyebrow={academicJourney.eyebrow}
          title={academicJourney.title}
        />
        <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
          {academicJourney.description}
        </p>
      </div>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3">
        {academicJourney.programs.map((program, index) => (
          <li key={program.title} className="bg-white p-8 sm:p-10">
            <span className="block h-1 w-10 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-sm font-medium text-muted">
              Stage {index + 1}
            </p>
            <h3 className="mt-2 text-2xl text-primary-dark sm:text-3xl">
              {program.title}
            </h3>
            <p className="mt-4 leading-7 text-muted">{program.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <Button href={academicJourney.linkHref} variant="outline">
          {academicJourney.linkLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}