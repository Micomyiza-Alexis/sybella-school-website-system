import { Quote } from "lucide-react";
import { homeContent } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ParentTestimonials() {
  const { testimonials } = homeContent;
  const [featured, ...supporting] = testimonials.quotes;

  return (
    <Section className="bg-primary-dark text-white">
      <SectionHeading
        light
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        description={testimonials.description}
      />

      <figure className="mt-14 max-w-4xl">
        <Quote className="h-10 w-10 text-accent" aria-hidden="true" />
        <blockquote className="mt-6 font-display text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
          {featured.quote}
        </blockquote>
        <figcaption className="mt-6 text-white/70">
          {featured.name}, {featured.role}
        </figcaption>
      </figure>

      <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 md:grid-cols-2">
        {supporting.map((item) => (
          <figure key={item.quote}>
            <blockquote className="leading-8 text-white/85">
              {item.quote}
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              {item.name}, {item.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}