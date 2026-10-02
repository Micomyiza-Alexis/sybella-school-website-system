import type { PageKey, PageSection } from "@/config/pages";
import { pages } from "@/config/pages";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactSection } from "./ContactSection";
import { FacilitiesSection } from "./about/FacilitiesSection";
import { LeadershipSection } from "./about/LeadershipSection";
import { MissionSection } from "./about/MissionSection";
import { StorySection } from "./about/StorySection";
import { ValuesSection } from "./about/ValuesSection";
import { GallerySection } from "./GallerySection";
import { TimelineSection } from "./TimelineSection";
import { toneClass, type Tone } from "./shared";

interface PageRendererProps {
  page: PageKey;
}

function IntroSection({
  section,
  tone,
}: {
  section: Extract<PageSection, { type: "intro" }>;
  tone: Tone;
}) {
  return (
    <Section id={section.id} className={`scroll-mt-24 ${toneClass[tone]}`}>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-20">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />

        <p className="text-lg leading-8 text-muted lg:pt-10">
          {section.description}
        </p>
      </div>
    </Section>
  );
}

function CardsSection({
  section,
  tone,
}: {
  section: Extract<PageSection, { type: "cards" }>;
  tone: Tone;
}) {
  return (
    <Section id={section.id} className={`scroll-mt-24 ${toneClass[tone]}`}>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-border border-t-4 border-t-accent bg-white p-8"
          >
            <h3 className="text-2xl text-primary-dark">{item.title}</h3>

            <p className="mt-4 leading-7 text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function StepsSection({
  section,
  tone,
}: {
  section: Extract<PageSection, { type: "steps" }>;
  tone: Tone;
}) {
  return (
    <Section id={section.id} className={`scroll-mt-24 ${toneClass[tone]}`}>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <ol className="mt-12 grid gap-6 md:grid-cols-2">
        {section.items.map((item) => (
          <li
            key={item.number}
            className="flex gap-6 rounded-2xl border border-border bg-white p-7"
          >
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-dark font-display text-xl font-semibold text-accent"
            >
              {item.number}
            </span>

            <div>
              <h3 className="text-xl text-primary-dark sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function RenderSection({
  section,
  tone,
}: {
  section: PageSection;
  tone: Tone;
}) {
  switch (section.type) {
    case "intro":
      return <IntroSection section={section} tone={tone} />;

    case "cards":
      return <CardsSection section={section} tone={tone} />;

    case "steps":
      return <StepsSection section={section} tone={tone} />;

    case "timeline":
      return <TimelineSection section={section} tone={tone} />;

    case "gallery":
      return <GallerySection section={section} tone={tone} />;

    case "contact":
      return <ContactSection section={section} tone={tone} />;

    case "story":
      return <StorySection section={section} tone={tone} />;

    case "mission":
      return <MissionSection section={section} tone={tone} />;

    case "values":
      return <ValuesSection section={section} tone={tone} />;

    case "leadership":
      return <LeadershipSection section={section} tone={tone} />;

    case "facilities":
      return <FacilitiesSection section={section} tone={tone} />;

    default:
      return null;
  }
}

export function PageRenderer({ page }: PageRendererProps) {
  const config = pages[page];

  return (
    <>
      <PageHero title={config.title} description={config.description} />

      {config.sections.map((section, index) => (
        <RenderSection
          key={section.id}
          section={section}
          tone={index % 2 === 0 ? "white" : "grey"}
        />
      ))}
    </>
  );
}