import { Compass, Eye } from "lucide-react";
import type { PageSection } from "@/config/pages";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { toneClass, type Tone } from "../shared";

type MissionSectionProps = {
  section: Extract<PageSection, { type: "mission" }>;
  tone: Tone;
};

export function MissionSection({
  section,
  tone,
}: MissionSectionProps) {
  return (
    <Section
      id={section.id}
      className={`scroll-mt-24 ${toneClass[tone]}`}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-primary-dark p-8 text-white sm:p-10 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-dark">
              <Compass className="h-5 w-5" aria-hidden="true" />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {section.mission.title}
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              {section.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              {section.mission.description}
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-white p-8 sm:p-10 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Eye className="h-5 w-5" aria-hidden="true" />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {section.vision.title}
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight text-primary-dark sm:text-4xl">
              Looking beyond today.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted">
              {section.vision.description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}