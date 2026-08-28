import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { experiences } from '@/data/experiences';

export const metadata: Metadata = {
  title: 'Holiday Experiences in East Africa',
  description: 'Discover birding, cultural, wellness, beach and mountain experiences to add to your Kenya or Tanzania journey.',
  alternates: { canonical: '/holiday-experiences' },
};

export default function HolidayExperiencesPage() {
  return <>
    <section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Travel your way</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">More ways to experience East Africa</h1><p className="text-lg leading-relaxed text-white/80">Build a journey around the things you love, from wildlife and culture to coastlines, mountains and restorative time.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">{experiences.map((experience) => <Link key={experience.slug} href={`/holiday-experiences/${experience.slug}`} className="group overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-shadow hover:shadow-xl"><div className="relative h-60 overflow-hidden"><Image src={experience.imageUrl ?? "https://ik.imagekit.io/axd1riwnv/Masai-Mara-Wildlife.webp"} alt={experience.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-6"><p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">{experience.description}</p><h2 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)] group-hover:text-[var(--golden-savannah)]">{experience.title}</h2><p className="leading-relaxed text-stone-600">{experience.description}</p><span className="mt-5 inline-block font-semibold text-[var(--golden-savannah)]">Explore experience</span></div></Link>)}</div></section>
  </>;
}
