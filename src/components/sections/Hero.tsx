import Image from "next/image";
import { schoolConfig } from "@/config/school";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <Container>
        <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-primary">
              Excellence in Education
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              {schoolConfig.tagline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              {schoolConfig.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#about">
                Discover Our School
              </Button>

              <Button href="#contact" variant="outline">
                Get in Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">25+</p>
                <p className="mt-1 text-sm text-muted">Years of Excellence</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-primary">1,200+</p>
                <p className="mt-1 text-sm text-muted">Students</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-primary">95%</p>
                <p className="mt-1 text-sm text-muted">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary/10 shadow-2xl lg:aspect-[4/5]">
              <Image
                src="/images/school/hero.jpg"
                alt={`${schoolConfig.name} students and school campus`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-white p-4 shadow-xl sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Located in
              </p>

              <p className="mt-1 text-sm font-bold text-foreground">
                {schoolConfig.location.district}, Rwanda
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}