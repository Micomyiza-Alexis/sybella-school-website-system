import Link from "next/link";
import { schoolConfig } from "@/config/school";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "School Life", href: "#school-life" },
  { label: "News", href: "#news" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* School Brand */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${schoolConfig.name} home`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
              {schoolConfig.shortName.slice(0, 2).toUpperCase()}
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-foreground">
                {schoolConfig.name}
              </p>

              <p className="text-xs text-muted">
                {schoolConfig.location.district}, Rwanda
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="#contact">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label="Open navigation menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </Container>
    </header>
  );
}