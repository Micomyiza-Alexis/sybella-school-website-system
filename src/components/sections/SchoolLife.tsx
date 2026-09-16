import { schoolLifeData } from "@/data/schoolLife";
import { Section } from "@/components/ui/Section";

export function SchoolLife() {
  return (
    <Section id="school-life" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Introduction */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            {schoolLifeData.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {schoolLifeData.title}
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
            {schoolLifeData.description}
          </p>
        </div>

        {/* Activities */}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {schoolLifeData.activities.map((activity, index) => (
            <article key={activity.title}>
              <span className="text-sm font-bold text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-3 text-xl font-bold text-foreground">
                {activity.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}