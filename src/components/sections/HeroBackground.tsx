"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { HeroImage } from "@/config/school";

const INTERVAL_MS = 6500;

/** Biased upward so heads stay in frame on group photos. */
const DEFAULT_FOCUS = "50% 25%";

type HeroBackgroundProps = {
  images?: readonly HeroImage[];
};

function normalize(image: HeroImage) {
  return typeof image === "string"
    ? { src: image, focus: DEFAULT_FOCUS }
    : { src: image.src, focus: image.focus ?? DEFAULT_FOCUS };
}

/**
 * Full-bleed background that slowly crossfades between images.
 * - Only the first image loads up front; the rest load after it has painted,
 *   which keeps the first view fast on slow mobile data.
 * - Users who prefer reduced motion get a static first image.
 */
export function HeroBackground({ images = [] }: HeroBackgroundProps) {
  const slides = images.map(normalize);
  const [active, setActive] = useState(0);
  const [loadAll, setLoadAll] = useState(false);

  // Fallback: a cached first image may never fire onLoad after hydration.
  useEffect(() => {
    const timer = window.setTimeout(() => setLoadAll(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loadAll || slides.length < 2) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [loadAll, slides.length]);

  const visible = loadAll ? slides : slides.slice(0, 1);

  return (
    <div className="absolute inset-0 bg-primary" aria-hidden="true">
      {visible.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          priority={index === 0}
          quality={85}
          sizes="100vw"
          onLoad={index === 0 ? () => setLoadAll(true) : undefined}
          style={{ objectPosition: slide.focus }}
          className={`object-cover transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
