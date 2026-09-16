import { whyChooseUsData } from "@/data/whyChooseUs";
import { Section } from "@/components/ui/Section";

export function WhyChooseUs() {
  return (
    <Section className="bg-primary text-white">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Introduction */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            {whyChooseUsData.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {whyChooseUsData.title}
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            {whyChooseUsData.description}
          </p>
        </div>

        {/* Reasons */}
        <div className="divide-y divide-white/15 border-y border-white/15">
          {whyChooseUsData.reasons.map((reason) => (
            <article
              key={reason.number}
              className="grid gap-4 py-8 sm:grid-cols-[80px_1fr] sm:gap-8"
            >
              <span className="text-sm font-bold text-white/50">
                {reason.number}
              </span>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-white/70">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}