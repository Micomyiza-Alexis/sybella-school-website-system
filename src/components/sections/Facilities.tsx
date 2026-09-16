import Image from "next/image";
import { facilitiesData } from "@/data/facilities";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Facilities() {
  return (
    <Section id="facilities" className="bg-white">
      <SectionHeading
        eyebrow={facilitiesData.eyebrow}
        title={facilitiesData.title}
        description={facilitiesData.description}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facilitiesData.facilities.map((facility) => (
          <article
            key={facility.title}
            className="group overflow-hidden rounded-2xl border border-border bg-white"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-surface">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground">
                {facility.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {facility.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}