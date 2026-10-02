"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { schoolConfig } from "@/config/school";
import { navigation, type NavItem } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

function isItemActive(item: NavItem, pathname: string) {
  if (item.href === "/") {
    return pathname === "/";
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function LogoMark() {
  if (schoolConfig.logo) {
    return (
      <Image
        src={schoolConfig.logo}
        alt=""
        width={44}
        height={44}
        priority
        className="h-11 w-11 object-contain"
      />
    );
  }

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
      {schoolConfig.shortName.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const { phone, email } = schoolConfig.contact;
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedId(null);
  };


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setExpandedId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-200 ${
          scrolled
            ? "border-border bg-white/90 shadow-[0_1px_12px_rgba(15,23,42,0.06)]"
            : "border-border/60 bg-white"
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>

        <Container>
          <div className="flex h-[4.5rem] items-center justify-between gap-6">
            {/* School brand */}
            <Link
              href="/"
              className={`flex min-w-0 items-center gap-3 rounded-lg ${focusRing}`}
              aria-label={`${schoolConfig.name} home`}
              onClick={closeMenu}
            >
              <LogoMark />

              <div className="min-w-0">
                <p className="truncate text-sm font-bold leading-tight text-foreground sm:text-[0.95rem]">
                  {schoolConfig.name}
                </p>

                <p className="hidden text-xs text-muted sm:block">
                  {schoolConfig.location.district},{" "}
                  {schoolConfig.location.country}
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => {
                const isActive = isItemActive(item, pathname);

                const linkClass = `relative flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-200 motion-reduce:after:transition-none ${focusRing} ${
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "text-muted after:scale-x-0 hover:after:scale-x-100"
                }`;

                if (!item.children) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={linkClass}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setOpenId(item.id)}
                    onMouseLeave={() => setOpenId(null)}
                    onFocus={() => setOpenId(item.id)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setOpenId(null);
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setOpenId(null);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      aria-expanded={isOpen}
                      className={linkClass}
                    >
                      {item.label}

                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </Link>

                    <div
                      className={`absolute left-0 top-full w-72 pt-3 transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none ${
                        isOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="rounded-xl border border-border bg-white p-2 shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenId(null)}
                              className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-surface focus-visible:bg-surface focus-visible:outline-none"
                            >
                              <span className="text-sm font-semibold text-foreground">
                                {child.label}
                              </span>

                              {child.description && (
                                <span className="mt-0.5 text-xs text-muted">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button href="/contact">Contact Us</Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface lg:hidden ${focusRing}`}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-white transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col py-4" aria-label="Mobile navigation">
            {navigation.map((item) => {
              const isActive = isItemActive(item, pathname);

              const rowClass = `text-lg font-semibold transition-colors ${
                isActive ? "text-primary" : "text-foreground"
              }`;

              if (!item.children) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b border-l-2 border-border py-4 pl-4 ${rowClass} ${
                      isActive ? "border-l-primary" : "border-l-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = expandedId === item.id;

              return (
                <div key={item.id} className="border-b border-border">
                  <div
                    className={`flex items-stretch border-l-2 ${
                      isActive ? "border-l-primary" : "border-l-transparent"
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex-1 py-4 pl-4 ${rowClass}`}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-label={`${expanded ? "Hide" : "Show"} ${
                        item.label
                      } pages`}
                      onClick={() =>
                        setExpandedId(expanded ? null : item.id)
                      }
                      className="flex w-14 items-center justify-center text-muted"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 motion-reduce:transition-none ${
                          expanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="overflow-hidden" inert={!expanded}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-3 pl-8 pr-4 text-base text-muted transition-colors hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="space-y-3 pb-8 pt-2">
            <a
              href={phoneHref}
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              {email}
            </a>

            <Button href="/contact" className="w-full" onClick={closeMenu}>
              Contact Us
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

