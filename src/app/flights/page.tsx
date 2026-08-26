import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flight Booking for East Africa',
  description: 'Arrange domestic bush flights, private charters and commercial flight connections for your Kenya and Tanzania safari.',
  alternates: { canonical: '/flights' },
};

const destinations = [
  { name: 'Masai Mara', detail: 'Connect to the reserve from Nairobi or the coast.', image: 'https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg' },
  { name: 'Amboseli', detail: 'Reach the foothills of Kilimanjaro with ease.', image: 'https://ik.imagekit.io/axd1riwnv/sunset-at-amboseli-national-300x213.jpg' },
  { name: 'Serengeti', detail: 'Fly between Tanzania’s great wildlife regions.', image: 'https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.22.33.jpeg' },
  { name: 'Zanzibar', detail: 'Add island time to your safari itinerary.', image: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1000' },
];

export default function FlightsPage() {
  return <>
    <section className="relative flex min-h-[540px] items-center overflow-hidden text-white"><Image src="https://images.pexels.com/photos/46148/aircraft-landing-rear-view-approach-46148.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Aircraft travelling over East Africa" fill priority className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" /><div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Flight connections</p><h1 className="font-playfair mb-6 max-w-3xl text-5xl font-bold md:text-7xl">More time in the places that matter</h1><p className="max-w-2xl text-lg leading-relaxed text-white/85">From commercial flights into East Africa to bush connections between remote camps, we help make every mile part of a smoother journey.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Our flight partners</p><h2 className="font-playfair mb-4 text-4xl font-bold text-[var(--forest-canopy)]">The right connection for your itinerary</h2><p className="leading-relaxed text-stone-700">We work with established regional airlines and trusted aviation partners to coordinate schedules, airstrips and transfers around your safari plans.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['SafariLink', 'AirKenya', 'Fly540', 'Coastal Aviation'].map((airline) => <div key={airline} className="rounded-2xl bg-white p-7 text-center shadow-sm"><h3 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)]">{airline}</h3><p className="mt-2 text-sm text-stone-500">Regional flight partner</p></div>)}</div></div></section>
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="font-playfair mb-10 text-center text-4xl font-bold text-[var(--forest-canopy)]">Where can we take you?</h2><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{destinations.map((destination) => <div key={destination.name} className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm"><div className="relative h-48"><Image src={destination.image} alt={destination.name} fill className="object-cover" /></div><div className="p-5"><h3 className="font-playfair text-2xl font-bold text-[var(--forest-canopy)]">{destination.name}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{destination.detail}</p></div></div>)}</div><div className="mt-12 flex flex-col justify-center gap-4 text-center sm:flex-row"><Link href="/domestic-flights" className="rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Book a bush flight or charter</Link><Link href="/flight-search" className="rounded-full border-2 border-[var(--forest-canopy)] px-7 py-3.5 font-semibold text-[var(--forest-canopy)] hover:bg-[var(--forest-canopy)] hover:text-white">Search commercial flights</Link></div></div></section>
  </>;
}
