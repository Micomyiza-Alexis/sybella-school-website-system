import Image from "next/image";
import type { PageSection } from "@/config/pages";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toneClass, type Tone } from "./shared";

export function GallerySection({
  section,
  tone,
}: {
  section: Extract<PageSection, { type: "gallery" }>;
  tone: Tone;
}) {
  return (
    <Section id={section.id} className={`scroll-mt-24 ${toneClass[tone]}`}>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {section.images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl bg-surface-dark"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            {image.caption && (
              <figcaption className="p-4 text-sm text-muted">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}