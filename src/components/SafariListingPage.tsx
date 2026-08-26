'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Safari } from '@/data/safaris';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  safaris: Safari[];
  destination: string;
}

export default function SafariListingPage({ title, subtitle, description, heroImage, safaris, destination }: Props) {
  const [search, setSearch] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');

  const filtered = useMemo(() => {
    return safaris.filter((s) => {
      const matchesSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.parks.some(p => p.toLowerCase().includes(search.toLowerCase()));
      const matchesDuration = durationFilter === 'all' ||
        (durationFilter === 'short' && s.duration <= 3) ||
        (durationFilter === 'medium' && s.duration >= 4 && s.duration <= 7) ||
        (durationFilter === 'long' && s.duration >= 8);
      return matchesSearch && matchesDuration;
    });
  }, [safaris, search, durationFilter]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center text-white overflow-hidden">
        <Image src={heroImage} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-wider mb-3">{subtitle}</p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-stone-100 sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search safaris..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)] focus:border-transparent"
          />
          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--golden-savannah)]"
          >
            <option value="all">All Durations</option>
            <option value="short">1-3 Days</option>
            <option value="medium">4-7 Days</option>
            <option value="long">8+ Days</option>
          </select>
          <span className="text-sm text-stone-500">{filtered.length} safaris</span>
        </div>
      </section>

      {/* Safari Grid */}
      <section className="py-16 bg-[var(--warm-ivory)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((safari) => (
              <Link
                key={safari.slug}
                href={`/safari/${safari.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-stone-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={safari.image} alt={safari.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-stone-700 capitalize">{safari.destination}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[var(--golden-savannah)] rounded-full text-xs font-semibold text-white">{safari.duration} {safari.durationUnit === 'hours' ? 'hrs' : 'Days'}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-[var(--golden-savannah)] transition-colors line-clamp-2 mb-2">{safari.title}</h3>
                  <p className="text-sm text-stone-500 mb-4 line-clamp-2">{safari.parks.join(' • ')}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--golden-savannah)] font-bold text-lg">From ${safari.priceFrom.toLocaleString()}</span>
                    <span className="text-sm text-stone-400 group-hover:text-[var(--golden-savannah)] flex items-center gap-1.5 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">No safaris match your search. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
