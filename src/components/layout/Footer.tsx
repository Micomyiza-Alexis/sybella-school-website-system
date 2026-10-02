import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { schoolConfig } from "@/config/school";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/academics#admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/student-life#gallery" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  const { phone, email } = schoolConfig.contact;
  const { district, province, country, latitude, longitude } =
    schoolConfig.location;

  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <footer className="border-t-4 border-accent bg-primary-dark text-white">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.5fr] lg:gap-10">
          {/* School identity */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label={`${schoolConfig.name} home`}
            >
              {schoolConfig.logo ? (
                <Image
                  src={schoolConfig.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent font-display text-lg font-semibold text-primary-dark"
                >
                  {schoolConfig.shortName
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              )}

              <span className="font-display text-xl font-semibold">
                {schoolConfig.name}
              </span>
            </Link>

            <p className="mt-6 leading-7 text-white/70">
              {schoolConfig.description}
            </p>

            <p className="mt-4 font-display text-lg text-accent">
              {schoolConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-display text-xl text-white">Explore</h2>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-white/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-xl text-white">
              Visit and contact
            </h2>

            <address className="mt-5 not-italic leading-7 text-white/70">
              {district}, {province}
              <br />
              {country}
            </address>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href={phoneHref}
                className="w-fit text-white/70 transition-colors hover:text-accent"
              >
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="w-fit text-white/70 transition-colors hover:text-accent"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xl text-white">
                Find us
              </h2>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-white"
              >
                Get directions
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="relative mt-5 h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                title={`Map showing ${schoolConfig.name}`}
                src={mapUrl}
                loading="lazy"
                className="h-full w-full border-0 grayscale-[20%] opacity-90"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div
                className="pointer-events-none absolute left-4 bottom-4 flex items-center gap-2 rounded-full border border-white/10 bg-primary-dark/90 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md"
              >
                <MapPin
                  className="h-3.5 w-3.5 text-accent"
                  aria-hidden="true"
                />
                {district}, Rwanda
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {schoolConfig.name}. All rights
            reserved.
          </p>

          <p>
            Website by{" "}
            <span className="font-medium text-white/75">
              Sybella Systems
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}