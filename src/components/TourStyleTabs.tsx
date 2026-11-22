'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TourCard } from './TourStyleHub';
import type { TourCardData } from '@/data/tourStyles';

interface Tab { key: string; label: string; blurb: string; href: string; cta: string; tours: TourCardData[] }

export default function TourStyleTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].key);
  const tab = tabs.find((t) => t.key === active) || tabs[0];
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--sunset-bronze)]">Choose Your Way to Travel</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[var(--deep-jungle)] md:text-4xl">Private Tours, Group Tours &amp; Festive Safaris</h2>
        </div>
        <div role="tablist" className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2 rounded-2xl bg-[var(--warm-ivory)] p-2">
          {tabs.map((t) => (
            <button key={t.key} role="tab" aria-selected={active === t.key} onClick={() => setActive(t.key)}
              className={`flex-1 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${active === t.key ? 'bg-[var(--sunset-bronze)] text-white shadow' : 'text-[var(--deep-jungle)] hover:bg-white'}`}>
              {t.label}
            </button>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-center text-stone-600">{tab.blurb}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{tab.tours.map((t) => <TourCard key={t.slug} t={t} />)}</div>
        <div className="mt-10 text-center">
          <Link href={tab.href} className="inline-block rounded-lg bg-[var(--logo-sage)] px-8 py-3.5 font-semibold text-white transition hover:bg-[var(--forest-canopy)]">{tab.cta}</Link>
        </div>
      </div>
    </section>
  );
}
