import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mountain Climbing in Kenya and Tanzania',
  description: 'Compare Kilimanjaro and Mount Kenya routes, difficulty and duration with C.A.T.S Safaris mountain specialists.',
  alternates: { canonical: '/mountain-climbing' },
};

const climbs = [
  { mountain: 'Mount Kilimanjaro', location: 'Tanzania', duration: '6–9 days', difficulty: 'Challenging', route: 'Machame, Marangu, Lemosho and Rongai routes', image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { mountain: 'Mount Kenya', location: 'Kenya', duration: '4–7 days', difficulty: 'Moderate to challenging', route: 'Sirimon, Naro Moru and Chogoria routes', image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200' },
];

export default function MountainClimbingPage() {
  return <>
    <section className="relative flex min-h-[520px] items-center overflow-hidden text-white"><Image src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Mountain peak at sunrise" fill priority className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/20" /><div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Higher journeys</p><h1 className="font-playfair max-w-3xl text-5xl font-bold md:text-7xl">Climb above the ordinary</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">Take on East Africa&apos;s iconic peaks with experienced guides, careful acclimatisation and support at every stage.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><h2 className="font-playfair mb-4 text-4xl font-bold text-[var(--forest-canopy)]">Choose your mountain</h2><p className="leading-relaxed text-stone-700">The right route makes all the difference. We will help you compare landscapes, pace, acclimatisation days and technical requirements before you commit.</p></div><div className="grid gap-8 lg:grid-cols-2">{climbs.map((climb) => <article key={climb.mountain} className="overflow-hidden rounded-2xl bg-white shadow-sm"><div className="relative h-64"><Image src={climb.image} alt={climb.mountain} fill className="object-cover" /></div><div className="p-7"><p className="text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">{climb.location}</p><h3 className="font-playfair my-2 text-3xl font-bold text-[var(--forest-canopy)]">{climb.mountain}</h3><dl className="grid grid-cols-2 gap-4 border-y border-stone-100 py-5 text-sm"><div><dt className="text-stone-500">Typical duration</dt><dd className="mt-1 font-semibold text-stone-800">{climb.duration}</dd></div><div><dt className="text-stone-500">Difficulty</dt><dd className="mt-1 font-semibold text-stone-800">{climb.difficulty}</dd></div></dl><p className="mt-5 text-sm leading-relaxed text-stone-600"><span className="font-semibold text-stone-800">Routes: </span>{climb.route}</p></div></article>)}</div></div></section>
    <section className="bg-[var(--forest-canopy)] px-4 py-16 text-center text-white sm:px-6 lg:px-8"><h2 className="font-playfair mb-4 text-3xl font-bold">Prepare for your summit</h2><p className="mx-auto mb-7 max-w-2xl leading-relaxed text-white/80">Talk with our team about the best season, kit list, training and how to combine your climb with a safari.</p><Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold hover:shadow-lg">Plan a climb</Link></section>
  </>;
}
