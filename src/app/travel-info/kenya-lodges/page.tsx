import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kenya Lodges and Safari Camps',
  description: 'Explore the types of lodges and safari camps available across Kenya, from the Masai Mara to Amboseli and the coast.',
  alternates: { canonical: '/travel-info/kenya-lodges' },
};

const lodges = [
  ['Masai Mara camps', 'Wake to open grasslands, resident wildlife and expert guiding in and around the reserve.', 'https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg'],
  ['Amboseli lodges', 'Stay beneath views of Kilimanjaro with elephant-filled plains and rich local culture nearby.', 'https://ik.imagekit.io/axd1riwnv/sunset-at-amboseli-national-300x213.jpg'],
  ['Kenya coast retreats', 'End your safari with a slower stay on the Indian Ocean, from lively beaches to quiet hideaways.', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200'],
];

export default function KenyaLodgesPage() {
  return <><section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Stay well in the wild</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Kenya lodges and camps</h1><p className="text-lg leading-relaxed text-white/80">From intimate tented camps to comfortable lodges, we help you choose stays that fit your route and travel style.</p></div></section><section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">{lodges.map(([name, detail, image]) => <article key={name} className="overflow-hidden rounded-2xl bg-white shadow-sm"><div className="relative h-56"><Image src={image} alt={name} fill className="object-cover" /></div><div className="p-6"><h2 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)]">{name}</h2><p className="leading-relaxed text-stone-600">{detail}</p></div></article>)}</div><div className="mx-auto mt-12 max-w-3xl text-center"><p className="mb-6 leading-relaxed text-stone-700">Every camp has its own setting, atmosphere and approach. Tell us what matters to you and we will recommend the right combination.</p><Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Ask about Kenya stays</Link></div></section></>;
}
