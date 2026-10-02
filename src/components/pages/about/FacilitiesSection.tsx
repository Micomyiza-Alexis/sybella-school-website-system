import Image from "next/image";
import type { PageSection } from "@/config/pages";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { toneClass, type Tone } from "../shared";

type FacilitiesSectionProps = {
  section: Extract<PageSection, { type: "facilities" }>;
  tone: Tone;
};

export function FacilitiesSection({
  section,
  tone,
}: FacilitiesSectionProps) {
  return (
    <Section
      id={section.id}
      className={`scroll-mt-24 ${toneClass[tone]}`}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {section.images.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[1.5rem] bg-slate-200 ${
                  index === 0
                    ? "aspect-[4/5]"
                    : "mt-12 aspect-[4/5]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-3">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="bg-white p-7 sm:p-8"
            >
              <span className="font-display text-sm font-semibold text-accent">
                0{index + 1}
              </span>

              <h3 className="mt-6 font-display text-2xl text-primary-dark">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}