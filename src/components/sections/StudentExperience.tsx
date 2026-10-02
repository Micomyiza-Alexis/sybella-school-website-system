import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Rename this file to something like student-life.jpg (no spaces or brackets)
const PHOTO = "/images/gallery/images (1).jpg";

export function StudentExperience() {
  const { studentExperience } = homeContent;

  return (
    <Section className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={PHOTO}
            alt="Students enjoying school life"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1.5 bg-accent"
            aria-hidden="true"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow={studentExperience.eyebrow}
            title={studentExperience.title}
            description={studentExperience.description}
          />

          <ul className="mt-10 space-y-7">
            {studentExperience.experiences.map((item) => (
              <li key={item.title} className="border-l-2 border-accent pl-6">
                <h3 className="text-xl text-primary-dark">{item.title}</h3>
                <p className="mt-2 leading-7 text-muted">{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={studentExperience.linkHref}>
              {studentExperience.linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}