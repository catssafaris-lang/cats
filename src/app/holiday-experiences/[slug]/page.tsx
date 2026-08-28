import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { experiences } from '@/data/experiences';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) return { title: 'Experience Not Found', alternates: { canonical: `/holiday-experiences/${slug}` } };
  return { title: experience.title, description: experience.description, alternates: { canonical: `/holiday-experiences/${slug}` } };
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) notFound();
  return <>
    <section className="relative flex min-h-[500px] items-end overflow-hidden text-white"><Image src={experience.imageUrl || ""} alt={experience.title} fill priority className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" /><div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-40 sm:px-6 lg:px-8"><Link href="/holiday-experiences" className="mb-6 inline-block text-sm font-semibold text-white/80 hover:text-white">All experiences</Link><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">{experience.description}</p><h1 className="font-playfair max-w-4xl text-4xl font-bold md:text-6xl">{experience.title}</h1></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr]"><div><h2 className="font-playfair mb-5 text-3xl font-bold text-[var(--forest-canopy)]">Overview</h2><p className="text-lg leading-8 text-stone-700">{experience.description}</p>{experience.highlights.map((h: string, i: number) => <div key={i} className="mt-10"><h3 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)]">{h}</h3><p className="leading-7 text-stone-700">{h}</p></div>)}</div><div className="relative h-80 overflow-hidden rounded-2xl lg:h-[28rem]"><Image src={experience.imageUrl || "https://ik.imagekit.io/axd1riwnv/Masai-Mara-Wildlife.webp"} alt={`${experience.title} in East Africa`} fill className="object-cover" /></div></div></section>
    <section className="bg-[var(--forest-canopy)] px-4 py-16 text-center text-white sm:px-6 lg:px-8"><h2 className="font-playfair mb-4 text-3xl font-bold">Make it part of your journey</h2><p className="mx-auto mb-7 max-w-2xl leading-relaxed text-white/80">Tell us what you are drawn to and our team will shape the right combination of places and experiences.</p><Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold hover:shadow-lg">Talk to our team</Link></section>
  </>;
}
