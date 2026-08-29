import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transport Solutions in Kenya and Tanzania',
  description: 'Arrange airport transfers, safari vehicles and SGR train bookings with the C.A.T.S Safaris team.',
  alternates: { canonical: '/transport-solutions' },
};

const services = [
  ['Airport transfers', 'Meet-and-greet transfers from Nairobi, Kilimanjaro, Zanzibar and other regional airports.'],
  ['Safari vehicles', 'Comfortable 4x4 vehicles with experienced driver-guides, prepared for the roads and parks on your itinerary.'],
  ['SGR train booking', 'Travel between Nairobi and Mombasa by train and connect your rail journey with our transfers and stays.'],
];

export default function TransportSolutionsPage() {
  return <>
    <section className="relative flex min-h-[500px] items-center overflow-hidden text-white"><Image src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Safari vehicle on a road through East Africa" fill priority className="object-cover" /><div className="absolute inset-0 bg-black/50" /><div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Getting you there</p><h1 className="font-playfair max-w-3xl text-5xl font-bold md:text-7xl">Transport, taken care of</h1></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{services.map(([name, description]) => <div key={name} className="rounded-2xl bg-white p-7 shadow-sm"><h2 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)]">{name}</h2><p className="leading-relaxed text-stone-600">{description}</p>{name === 'SGR train booking' && <a href="https://krc.co.ke" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold text-[var(--golden-savannah)] hover:underline">Visit Kenya Railways</a>}</div>)}</div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-10"><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Our fleet</p><h2 className="font-playfair text-4xl font-bold text-[var(--forest-canopy)]">Comfort for every stretch</h2></div><div className="grid gap-6 md:grid-cols-3"><div className="relative h-72 overflow-hidden rounded-2xl"><Image src="https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Safari vehicle ready for a journey" fill className="object-cover" /></div><div className="relative h-72 overflow-hidden rounded-2xl"><Image src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Road journey through a scenic landscape" fill className="object-cover" /></div><div className="relative h-72 overflow-hidden rounded-2xl"><Image src="https://images.pexels.com/photos/1389339/pexels-photo-1389339.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Travel route through East Africa" fill className="object-cover" /></div></div><div className="mt-10 text-center"><Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Arrange your transfers</Link></div></div></section>
  </>;
}
