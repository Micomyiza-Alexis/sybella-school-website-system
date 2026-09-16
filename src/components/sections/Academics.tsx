import { academicData } from "@/data/academics";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Academics() {
  return (
    <Section id="academics" className="bg-surface">
      <SectionHeading
        eyebrow={academicData.eyebrow}
        title={academicData.title}
        description={academicData.description}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {academicData.programs.map((program, index) => (
          <article
            key={program.title}
            className="group rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="mt-6 text-xl font-bold text-foreground">
              {program.title}
            </h3>

            <p className="mt-3 leading-7 text-muted">
              {program.description}
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Learn more →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}