'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Safari } from '@/data/safaris';

export interface SafariGroup {
  title: string;
  description: string;
  safaris: Safari[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedDestination {
  name: string;
  href: string;
  image: string;
}

interface Props {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  introContent?: ReactNode;
  safaris: Safari[];
  destination: string;
  groups?: SafariGroup[];
  faqs?: FAQItem[];
  relatedDestinations?: RelatedDestination[];
}

function SafariCard({ safari, destination }: { safari: Safari; destination: string }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      <Link href={`/safari/${safari.slug}`} className="group block">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={safari.image}
            alt={safari.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--forest-canopy)]">
            {safari.destination || destination}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-[var(--golden-savannah)] px-3 py-1 text-xs font-semibold text-white">
            {safari.duration} {safari.durationUnit}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-playfair text-2xl font-bold text-[var(--cats-green)] transition group-hover:text-[var(--golden-savannah)]">
            {safari.title}
          </h3>
          <p className="mt-2 text-sm text-stone-500">{safari.parks.join(' • ')}</p>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-lg font-bold text-[var(--cats-green)]">From ${safari.priceFrom.toLocaleString()}</p>
            <span className="text-sm font-semibold text-[var(--golden-savannah)]">Learn More</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function SafariGrid({ safaris, destination }: { safaris: Safari[]; destination: string }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {safaris.map((safari) => (
        <SafariCard key={safari.slug} safari={safari} destination={destination} />
      ))}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-[var(--savannah-dust)] rounded-2xl border border-[var(--savannah-dust)] bg-white shadow-sm">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-playfair text-lg font-semibold text-[var(--cats-green)]">{faq.question}</span>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[var(--golden-savannah)] text-[var(--golden-savannah)] transition-transform ${isOpen ? 'rotate-45' : ''}`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm leading-7 text-[var(--driftwood)]">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function SafariListingPage({
  title,
  subtitle,
  description,
  heroImage,
  introContent,
  safaris,
  destination,
  groups,
  faqs,
  relatedDestinations,
}: Props) {
  const [search, setSearch] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');

  const applyFilters = useMemo(() => {
    const query = search.trim().toLowerCase();
    return (list: Safari[]) =>
      list.filter((safari) => {
        const searchable = `${safari.title} ${safari.parks.join(' ')}`.toLowerCase();
        const matchesSearch = !query || searchable.includes(query);
        const matchesDuration =
          durationFilter === 'all' ||
          (durationFilter === 'short' && safari.duration >= 1 && safari.duration <= 3) ||
          (durationFilter === 'medium' && safari.duration >= 4 && safari.duration <= 7) ||
          (durationFilter === 'long' && safari.duration >= 8);
        return matchesSearch && matchesDuration;
      });
  }, [durationFilter, search]);

  const filteredSafaris = useMemo(() => applyFilters(safaris), [applyFilters, safaris]);

  const groupedSafaris = useMemo(() => {
    if (!groups) return null;
    return groups
      .map((group) => ({
        ...group,
        safaris: applyFilters(group.safaris),
      }))
      .filter((group) => group.safaris.length > 0);
  }, [groups, applyFilters]);

  return (
    <main className="bg-[var(--warm-ivory)]">
      {/* Hero */}
      <section className="relative flex h-[55vh] min-h-[400px] items-center justify-center overflow-hidden text-center text-white">
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

      {/* Rich intro */}
      {introContent && (
        <section className="mx-auto max-w-4xl px-6 py-14 text-left">
          <div className="space-y-5 text-base leading-7 text-[var(--driftwood)]">{introContent}</div>
        </section>
      )}

      {/* Trust strip */}
      <section className="border-y border-[var(--savannah-dust)] bg-[var(--cats-cream)] py-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 px-6 text-center text-sm font-semibold uppercase tracking-wide text-[var(--forest-canopy)] sm:flex-row sm:gap-4">
          <span>15 Years of Safari Excellence</span>
          <span className="hidden text-[var(--golden-savannah)] sm:inline">|</span>
          <span>Licensed and Insured</span>
          <span className="hidden text-[var(--golden-savannah)] sm:inline">|</span>
          <span>Eco-Friendly Tourism</span>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-b border-[var(--savannah-dust)] bg-[var(--warm-ivory)]" aria-label="Filter safaris">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center">
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search safaris</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search safaris or parks"
              className="w-full rounded-full border border-[var(--savannah-dust)] bg-[var(--cats-cream)] px-4 py-2 text-sm text-[var(--driftwood)] outline-none transition focus:ring-2 focus:ring-[var(--golden-savannah)]"
            />
          </label>
          <label>
            <span className="sr-only">Filter by duration</span>
            <select
              value={durationFilter}
              onChange={(event) => setDurationFilter(event.target.value)}
              className="w-full rounded-full border border-[var(--savannah-dust)] bg-[var(--cats-cream)] px-4 py-2 text-sm text-[var(--driftwood)] outline-none focus:ring-2 focus:ring-[var(--golden-savannah)] sm:w-40"
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

      {/* Package grid(s) */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {filteredSafaris.length === 0 ? (
          <div className="py-20 text-center text-[var(--driftwood)]">
            <h2 className="font-playfair text-2xl text-[var(--cats-green)]">No safaris found</h2>
            <p className="mt-2">Try adjusting your search or duration filter.</p>
          </div>
        ) : groupedSafaris ? (
          <div className="space-y-16">
            {groupedSafaris.map((group) => (
              <div key={group.title}>
                <h2 className="font-playfair text-2xl font-bold text-[var(--cats-green)] sm:text-3xl">{group.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--driftwood)]">{group.description}</p>
                <div className="mt-8">
                  <SafariGrid safaris={group.safaris} destination={destination} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <SafariGrid safaris={filteredSafaris} destination={destination} />
        )}
      </section>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[var(--cats-cream)] px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold text-[var(--cats-green)]">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* Related destinations */}
      {relatedDestinations && relatedDestinations.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-playfair text-3xl font-bold text-[var(--cats-green)]">Explore More Destinations</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {relatedDestinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative block h-40 overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-4 right-4 font-playfair text-base font-semibold text-white">
                  {dest.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--cats-green)] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-playfair text-3xl font-bold sm:text-4xl">Your Safari Story Begins Here</h2>
          <p className="mt-4 text-white/85">
            Tell our safari consultants your dates, budget and dream destinations, and we will craft a tailor-made
            itinerary just for you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[var(--golden-savannah)] px-8 py-3 font-semibold text-white transition hover:brightness-95"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
