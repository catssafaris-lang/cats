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
  { label: 'All Safaris', value: '/kenya-safaris' },
  { label: 'Nairobi Excursions', value: '/kenya-safaris/nairobi-excursions' },
  { label: 'Kenya Safaris', value: '/kenya-safaris/short-safaris' },
  { label: 'Masai Mara', value: '/kenya-safaris/masai-mara' },
  { label: 'Amboseli', value: '/kenya-safaris/amboseli' },
  { label: 'Diani Beach', value: '/kenya-safaris/kenya-and-diani' },
  { label: 'Tanzania Safaris', value: '/tanzania-safaris' },
  { label: 'Kenya-Tanzania', value: '/kenya-tanzania-safaris' },
  { label: 'Mountain Climbing', value: '/mountain-climbing' },
  { label: 'Beach Holidays', value: '/kenya-safaris/zanzibar' },
  { label: 'Experiences', value: '/holiday-experiences' },
];

export default function HomeClient({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [destination, setDestination] = useState('/kenya-safaris');
  const router = useRouter();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] overflow-hidden w-full">
      <div className="relative h-full w-full" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} aria-label="Safari highlights slideshow">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={i === 0} sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className={`relative z-20 h-full flex flex-col justify-center transition-all duration-700 ${i === current ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">{slide.tag}</span>
                  <h1 className="mt-6 font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ whiteSpace: 'pre-line' }}>{slide.heading}</h1>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{slide.description}</p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href={slide.cta.href} className="rounded-lg bg-[var(--sunset-bronze)] px-8 py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-[#8c7544] hover:shadow-xl">{slide.cta.label}</Link>
                    <Link href={slide.secondary.href} className="rounded-lg border-2 border-white/30 bg-white/10 px-8 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">{slide.secondary.label}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={prev} className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-black/50 sm:left-6" aria-label="Previous slide"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 19l-7-7 7-7" /></svg></button>
        <button onClick={next} className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition hover:bg-black/50 sm:right-6" aria-label="Next slide"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg></button>
        {/* Search Panel */}
        <div className="absolute bottom-32 sm:bottom-24 left-1/2 z-30 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
          <div className="rounded-2xl border border-white/20 bg-black/30 p-4 shadow-xl backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/60">Destination</label>
                <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full rounded-lg border border-gray-100/20 bg-white/50 px-3 py-2.5 text-sm text-[var(--driftwood)] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--sunset-bronze)]/40">
                  {destinations.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/60">Travel Dates</label>
                <input type="date" className="w-full rounded-lg border border-gray-100/20 bg-white/50 px-3 py-2.5 text-sm text-[var(--driftwood)] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--sunset-bronze)]/40" />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/60">Guests</label>
                <select className="w-full rounded-lg border border-gray-100/20 bg-white/50 px-3 py-2.5 text-sm text-[var(--driftwood)] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--sunset-bronze)]/40">
                  <option>Travellers</option>
                  {[1,2,3,4,5,6].map(n => <option key={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                  <option>7+ Guests</option>
                </select>
              </div>
              <div className="flex items-end">
                <button onClick={() => router.push(destination)} className="w-full rounded-lg bg-[var(--sunset-bronze)] px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#8c7544]">
                  <span className="flex items-center justify-center gap-2"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 z-30 hidden sm:flex flex-wrap gap-4 sm:gap-6 text-sm text-white/70">
          <span className="flex items-center gap-1.5"><svg className="h-4 w-4 text-[var(--golden-savannah)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>4.9 TripAdvisor</span>
          <span className="flex items-center gap-1.5"><svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>Licensed &amp; Insured</span>
          <span className="flex items-center gap-1.5"><svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>Eco-Friendly</span>
        </div>
        <div className="absolute bottom-32 right-8 z-30 hidden lg:flex flex-col gap-3">
          {slides.map((slide, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`text-right text-xs font-medium tracking-wide transition-all ${i === current ? 'text-white' : 'text-white/40 hover:text-white/70'}`} aria-label={`Slide ${i + 1}`}>
              {slide.tag.split('•')[0].trim()}
              {i === current && <div className="mt-1 ml-auto h-0.5 w-16 rounded-full bg-white/20 overflow-hidden"><div className="h-full w-full bg-white rounded-full" style={{ animation: 'progress 5s linear' }} /></div>}
            </button>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:hidden">
          {slides.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-[var(--sunset-bronze)]' : 'w-2 bg-white/40'}`} aria-label={`Slide ${i + 1}`} />))}
        </div>
      </div>
    </section>
  );
}
