'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  image: string;
  alt: string;
  tag: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
  secondary: { label: string; href: string };
}

export default function HomeClient({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      className="relative h-[60vh] min-h-[420px] max-h-[680px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Safari highlights slideshow"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className={`relative z-20 flex h-full items-center transition-all duration-700 ${i === current ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="max-w-2xl">
                <span className="inline-block rounded-full border border-[var(--golden-savannah)]/50 bg-[var(--golden-savannah)]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)] backdrop-blur-sm">
                  {slide.tag}
                </span>
                <h1 className="mt-5 font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ whiteSpace: 'pre-line' }}>
                  {slide.heading}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                  {slide.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href={slide.cta.href}
                    className="rounded-full bg-[var(--golden-savannah)] px-8 py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-[#d0b46c] hover:shadow-xl"
                  >
                    {slide.cta.label}
                  </Link>
                  <Link
                    href={slide.secondary.href}
                    className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
                  >
                    {slide.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-black/50 sm:left-6"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-black/50 sm:right-6"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-[var(--golden-savannah)]' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}
