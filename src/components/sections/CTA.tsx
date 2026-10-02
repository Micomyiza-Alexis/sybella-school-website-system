import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { schoolConfig } from "@/config/school";

export function CTA() {
  return (
    <section className="bg-primary">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to learn more about {schoolConfig.name}?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Get in touch with our school team to learn about admissions,
              programs, activities, and opportunities for your child.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="#contact"
              variant="secondary"
              className="px-7 py-3.5"
            >
              Contact the School
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}