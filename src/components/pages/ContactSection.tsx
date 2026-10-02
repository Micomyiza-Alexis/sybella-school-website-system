import { Mail, MapPin, Phone } from "lucide-react";
import type { PageSection } from "@/config/pages";
import { schoolConfig } from "@/config/school";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toneClass, type Tone } from "./shared";

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactSection({
  section,
  tone,
}: {
  section: Extract<PageSection, { type: "contact" }>;
  tone: Tone;
}) {
  const { phone, email } = schoolConfig.contact;
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  const details = [
    {
      icon: MapPin,
      label: "Visit us",
      value: `${schoolConfig.name}, ${schoolConfig.location.district}, ${schoolConfig.location.country}`,
      href: undefined,
    },
    { icon: Phone, label: "Call us", value: phone, href: phoneHref },
    { icon: Mail, label: "Email us", value: email, href: `mailto:${email}` },
  ];

  return (
    <Section id={section.id} className={`scroll-mt-24 ${toneClass[tone]}`}>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <ul className="mt-10 space-y-6">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-dark text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="font-semibold text-primary-dark hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-primary-dark">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-7 sm:p-10">
          <h3 className="text-3xl text-primary-dark">Send us a message</h3>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className={`${inputClass} resize-none`}
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition hover:bg-primary-dark"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}