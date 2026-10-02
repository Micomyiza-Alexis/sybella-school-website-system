import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function UpcomingEvents() {
  const { upcomingEvents } = homeContent;

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow={upcomingEvents.eyebrow}
            title={upcomingEvents.title}
            description={upcomingEvents.description}
          />
          <div className="mt-8">
            <Button href={upcomingEvents.linkHref} variant="outline">
              {upcomingEvents.linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <ul className="space-y-4">
          {upcomingEvents.events.map((event) => (
            <li
              key={`${event.date}-${event.month}-${event.title}`}
              className="flex gap-5 rounded-2xl border border-border bg-white p-5 sm:gap-7 sm:p-6"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-white">
                <span className="font-display text-3xl font-semibold leading-none">
                  {event.date}
                </span>
                <span className="mt-1.5 text-xs font-semibold tracking-wide text-accent">
                  {event.month}
                </span>
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-muted">
                  {event.category}
                </p>
                <h3 className="mt-1 text-xl text-primary-dark sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-2 leading-7 text-muted">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}