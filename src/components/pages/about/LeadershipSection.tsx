import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PageSection } from "@/config/pages";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { toneClass, type Tone } from "../shared";

type LeadershipSectionProps = {
  section: Extract<PageSection, { type: "leadership" }>;
  tone: Tone;
};

export function LeadershipSection({
  section,
  tone,
}: LeadershipSectionProps) {
  return (
    <Section
      id={section.id}
      className={`scroll-mt-24 ${toneClass[tone]}`}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-slate-200">
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Our People
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {section.eyebrow}
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-primary-dark sm:text-5xl">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              {section.description}
            </p>

            <div className="mt-10 space-y-7">
              {section.groups.map((group, index) => (
                <article
                  key={group.title}
                  className="border-t border-border pt-6"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-display text-sm font-semibold text-accent">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-display text-xl text-primary-dark">
                        {group.title}
                      </h3>

                      <p className="mt-2 leading-7 text-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Connect with our school
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}