import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import type { PageSection } from "@/config/pages";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toneClass, type Tone } from "../shared";

type StorySectionProps = {
  section: Extract<PageSection, { type: "story" }>;
  tone: Tone;
};

export function StorySection({
  section,
  tone,
}: StorySectionProps) {
  return (
    <Section
      id={section.id}
      className={`scroll-mt-24 ${toneClass[tone]}`}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />

            <ul className="mt-8 space-y-4">
              {section.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm font-medium text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>

                  {highlight}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Talk to our school
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-slate-200">
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Our Story
              </p>

              <p className="mt-2 text-lg font-medium leading-7 text-white">
                A learning environment built around people, purpose, and
                possibility.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}