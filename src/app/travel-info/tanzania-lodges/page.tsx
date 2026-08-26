import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tanzania Lodges and Safari Camps',
  description: 'Explore lodge and camp options in Tanzania’s Serengeti, Ngorongoro, Tarangire and Zanzibar.',
  alternates: { canonical: '/travel-info/tanzania-lodges' },
};

const lodges = [
  ['Serengeti camps', 'Choose a location and style of camp that puts you close to the wildlife while keeping the experience personal.', 'https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.22.33.jpeg'],
  ['Ngorongoro stays', 'Combine crater access with highland scenery, thoughtful hospitality and time to understand the area’s history.', 'https://ik.imagekit.io/axd1riwnv/114036745.avif'],
  ['Zanzibar retreats', 'Slow down after safari with an island stay shaped around beaches, water, history and your preferred pace.', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200'],
];

export default function TanzaniaLodgesPage() {
  return <><section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Stay close to the story</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Tanzania lodges and camps</h1><p className="text-lg leading-relaxed text-white/80">Find the right base for the Serengeti, Ngorongoro, northern circuit and the islands beyond.</p></div></section><section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">{lodges.map(([name, detail, image]) => <article key={name} className="overflow-hidden rounded-2xl bg-white shadow-sm"><div className="relative h-56"><Image src={image} alt={name} fill className="object-cover" /></div><div className="p-6"><h2 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)]">{name}</h2><p className="leading-relaxed text-stone-600">{detail}</p></div></article>)}</div><div className="mx-auto mt-12 max-w-3xl text-center"><p className="mb-6 leading-relaxed text-stone-700">Accommodation shapes the feeling of a safari. We will compare location, seasonality and atmosphere to find stays that work together.</p><Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Ask about Tanzania stays</Link></div></section></>;
}
