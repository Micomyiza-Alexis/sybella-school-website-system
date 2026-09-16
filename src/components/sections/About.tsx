import { schoolStory } from "@/data/school";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Visual */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
            <div className="flex h-full items-center justify-center p-8 text-center text-muted">
              <p className="max-w-xs text-sm">
                School story image
              </p>
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute -bottom-6 -right-4 hidden w-64 rounded-2xl border border-border bg-white p-5 shadow-xl sm:block">
            <p className="text-sm font-semibold text-muted">
              Our commitment
            </p>

            <p className="mt-2 text-lg font-bold text-primary">
              Every learner matters.
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionHeading
            eyebrow={schoolStory.eyebrow}
            title={schoolStory.title}
            description={schoolStory.description}
          />

          <div className="mt-8 space-y-5">
            {schoolStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-7 text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {schoolStory.highlights.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-primary sm:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}