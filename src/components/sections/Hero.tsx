import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { schoolConfig } from "@/config/school";
import { Container } from "@/components/ui/Container";
import { HeroBackground } from "./HeroBackground";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function Hero() {
  const stats = schoolConfig.stats ?? [];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] overflow-hidden bg-primary text-white"
    >
      <HeroBackground images={schoolConfig.heroImages} />

      <div
        className="absolute inset-0 bg-slate-950/35"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/10"
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full items-center">
        <Container>
          <div className="grid min-h-[calc(100svh-4.5rem)] items-center py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {schoolConfig.location.district},{" "}
                  {schoolConfig.location.country}
                </span>
              </div>

              <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                {schoolConfig.tagline}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                {schoolConfig.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className={`group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 ${focusRing}`}
                >
                  Explore our school
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/contact"
                  className={`inline-flex h-12 items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 ${focusRing}`}
                >
                  Enquire about admissions
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-32 lg:w-[19rem]">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  At a glance
                </p>

                {stats.length > 0 && (
                  <dl className="mt-5 grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-white/10 bg-black/10 p-3"
                      >
                        <dd className="text-2xl font-semibold tracking-tight">
                          {stat.value}
                        </dd>
                        <dt className="mt-1 text-xs leading-5 text-white/65">
                          {stat.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-5 flex items-start gap-3 border-t border-white/15 pt-4">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/70"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-5 text-white/75">
                    Proudly serving learners and families in{" "}
                    <span className="font-medium text-white">
                      {schoolConfig.location.district}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}