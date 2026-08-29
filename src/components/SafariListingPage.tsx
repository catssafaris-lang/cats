'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Safari } from '@/data/safaris';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  safaris: Safari[];
  destination: string;
}

export default function SafariListingPage({
  title,
  subtitle,
  description,
  heroImage,
  safaris,
  destination,
}: Props) {
  const [search, setSearch] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');

  const filteredSafaris = useMemo(() => {
    const query = search.trim().toLowerCase();
    return safaris.filter((safari) => {
      const searchable = `${safari.title} ${safari.parks.join(' ')}`.toLowerCase();
      const matchesSearch = !query || searchable.includes(query);
      const matchesDuration =
        durationFilter === 'all' ||
        (durationFilter === 'short' && safari.duration >= 1 && safari.duration <= 3) ||
        (durationFilter === 'medium' && safari.duration >= 4 && safari.duration <= 7) ||
        (durationFilter === 'long' && safari.duration >= 8);
      return matchesSearch && matchesDuration;
    });
  }, [durationFilter, safaris, search]);

  return (
    <main className="bg-[var(--warm-ivory)]">
      <section className="relative flex h-[50vh] min-h-[350px] items-center justify-center overflow-hidden text-center text-white">
        <Image src={heroImage} alt={title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">{subtitle}</p>
          <h1 className="font-playfair text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">{description}</p>
        </div>
        <svg className="absolute bottom-0 z-10 h-16 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C240,120 480,8 720,64 C960,120 1200,8 1440,64 L1440,120 L0,120 Z" fill="var(--warm-ivory)" />
        </svg>
      </section>

      <section className="sticky top-16 z-30 border-b border-[var(--savannah-dust)] bg-[var(--warm-ivory)]" aria-label="Filter safaris">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search safaris</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search safaris or parks"
              className="w-full rounded-full border border-[var(--savannah-dust)] bg-[var(--cats-cream)] px-5 py-3 text-sm text-[var(--driftwood)] outline-none transition focus:ring-2 focus:ring-[var(--golden-savannah)]"
            />
          </label>
          <label>
            <span className="sr-only">Filter by duration</span>
            <select
              value={durationFilter}
              onChange={(event) => setDurationFilter(event.target.value)}
              className="w-full rounded-full border border-[var(--savannah-dust)] bg-[var(--cats-cream)] px-5 py-3 text-sm text-[var(--driftwood)] outline-none focus:ring-2 focus:ring-[var(--golden-savannah)] sm:w-44"
            >
              <option value="all">All durations</option>
              <option value="short">1–3 days</option>
              <option value="medium">4–7 days</option>
              <option value="long">8+ days</option>
            </select>
          </label>
          <p className="whitespace-nowrap text-sm text-[var(--forest-canopy)]">
            {filteredSafaris.length} {filteredSafaris.length === 1 ? 'safari' : 'safaris'}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {filteredSafaris.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredSafaris.map((safari) => (
              <article key={safari.slug} className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
                <Link href={`/safari/${safari.slug}`} className="group block">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={safari.image} alt={safari.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--forest-canopy)]">{safari.destination || destination}</span>
                    <span className="absolute right-4 top-4 rounded-full bg-[var(--golden-savannah)] px-3 py-1 text-xs font-semibold text-white">{safari.duration} {safari.durationUnit}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-playfair text-2xl font-bold text-[var(--cats-green)] transition group-hover:text-[var(--golden-savannah)]">{safari.title}</h2>
                    <p className="mt-2 text-sm text-stone-500">{safari.parks.join(' • ')}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <p className="text-lg font-bold text-[var(--cats-green)]">From ${safari.priceFrom.toLocaleString()}</p>
                      <span className="text-sm font-semibold text-[var(--golden-savannah)]">View Details</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-[var(--driftwood)]">
            <h2 className="font-playfair text-2xl text-[var(--cats-green)]">No safaris found</h2>
            <p className="mt-2">Try adjusting your search or duration filter.</p>
          </div>
        )}
      </section>
    </main>
  );
}
