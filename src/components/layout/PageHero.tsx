import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-primary-dark py-20 text-white sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[0.95rem] text-white/70">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page" className="text-white">
                {title}
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 text-5xl text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <span
            className="mt-6 block h-1 w-16 bg-accent"
            aria-hidden="true"
          />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}