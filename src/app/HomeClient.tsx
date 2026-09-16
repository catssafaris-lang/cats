'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Slide {
  image: string;
  alt: string;
  tag: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
  secondary: { label: string; href: string };
}

const destinations = [
  { label: 'All Safaris', value: '' },
  { label: 'Kenya Safaris', value: '/kenya-safaris' },
  { label: 'Tanzania Safaris', value: '/tanzania-safaris' },
  { label: 'Kenya-Tanzania', value: '/kenya-tanzania-safaris' },
  { label: 'Masai Mara', value: '/kenya-safaris/masai-mara' },
  { label: 'Amboseli', value: '/kenya-safaris/amboseli' },
  { label: 'Diani Beach', value: '/kenya-safaris/diani-beach' },
  { label: 'Mountain Climbing', value: '/mountain-climbing' },
  { label: 'Experiences', value: '/holiday-experiences' },
];

export default function HomeClient({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState('Travellers');
  const router = useRouter();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const handleSearch = () => {
    if (destination) {
      router.push(destination);
    } else {
      router.push('/kenya-safaris');
    }
  };

  return (
    <section className="relative">
      {/* Hero slider */}
      <div
        className="relative h-[65vh] min-h-[480px] max-h-[720px] overflow-hidden"
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

                  {/* Trust badges */}
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4 text-[var(--golden-savannah)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      4.8 TripAdvisor
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      Licensed &amp; Insured
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /><circle cx="12" cy="12" r="10" /></svg>
                      Eco-Friendly
                    </span>
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
        <div className="absolute bottom-20 sm:bottom-16 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-[var(--golden-savannah)]' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── SEARCH/FILTER BAR — overlapping hero bottom ── */}
      <div className="relative z-30 -mt-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl bg-white shadow-2xl border border-stone-200/60 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Destination */}
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1 px-1">Destination</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#1a3c34]/30 focus:border-[#1a3c34] appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px' }}
              >
                {destinations.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>

            {/* Divider (desktop) */}
            <div className="hidden sm:block w-px h-10 bg-stone-200" />

            {/* Travel Date */}
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1 px-1">Travel Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#1a3c34]/30 focus:border-[#1a3c34] cursor-pointer"
                placeholder="mm/dd/yyyy"
              />
            </div>

            {/* Divider (desktop) */}
            <div className="hidden sm:block w-px h-10 bg-stone-200" />

            {/* Guests */}
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1 px-1">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#1a3c34]/30 focus:border-[#1a3c34] appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px' }}
              >
                <option value="Travellers">Travellers</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6+ Guests</option>
              </select>
            </div>

            {/* Search button */}
            <button
              onClick={handleSearch}
              className="sm:flex-shrink-0 flex items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-lg"
              style={{ background: '#1a3c34' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#244a41'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#1a3c34'; }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
