import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About C.A.T.S Safaris',
  description: 'Meet Collective African Tours & Safaris, a trusted East African travel network with 15 years of experience.',
  alternates: { canonical: '/about' },
};

const values = [
  ['Thoughtful expertise', 'We pair deep destination knowledge with careful listening, so each itinerary reflects the traveller rather than a template.'],
  ['Trusted relationships', 'Our network of guides, hosts, drivers and operators is built on long-term relationships and shared standards.'],
  ['Responsible journeys', 'We encourage travel that respects wildlife, supports local communities and leaves room for meaningful connection.'],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Collective African Tours & Safaris</p><h1 className="font-playfair mb-6 text-4xl font-bold md:text-6xl">East Africa, thoughtfully connected</h1><p className="text-lg leading-relaxed text-white/80">For 15 years, C.A.T.S has brought together trusted local partners to create personal, well-paced journeys through Kenya, Tanzania and beyond.</p></div></section>
      <section className="bg-[var(--color-warm-ivory)] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Who we are</p><h2 className="font-playfair mb-6 text-4xl font-bold text-[var(--color-forest-canopy)]">A collective made for meaningful travel</h2><p className="mb-5 leading-relaxed text-stone-700">C.A.T.S stands for Collective African Tours & Safaris. We are a Nairobi-based travel company and a network of people who know East Africa closely: local guides, camp teams, transport specialists and destination planners.</p><p className="leading-relaxed text-stone-700">Together, we design safari, beach, mountain and cultural experiences with the practical detail and human care that make travel feel effortless. Our role is to connect you with the right people and places.</p></div><div className="relative h-80 overflow-hidden rounded-2xl sm:h-96"><Image src="https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg" alt="Wildlife landscape in East Africa" fill className="object-cover" /></div></div></section>
      <section className="bg-[var(--color-savannah-dust)] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">What guides us</p><h2 className="font-playfair text-4xl font-bold text-[var(--color-forest-canopy)]">Mission, vision and values</h2></div><div className="grid gap-6 md:grid-cols-3">{values.map(([heading, body]) => <div key={heading} className="rounded-2xl bg-[var(--color-warm-ivory)] p-7"><h3 className="font-playfair mb-3 text-2xl font-bold text-[var(--color-forest-canopy)]">{heading}</h3><p className="leading-relaxed text-stone-700">{body}</p></div>)}</div></div></section>
      <section className="bg-[var(--color-warm-ivory)] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[220px_1fr]"><div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full"><Image src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="David, part of the C.A.T.S Safaris team" fill className="object-cover" /></div><div><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Meet David</p><h2 className="font-playfair mb-4 text-3xl font-bold text-[var(--color-forest-canopy)]">A human touch behind the collective</h2><p className="mb-4 leading-relaxed text-stone-700">David is one of the familiar faces behind C.A.T.S. His warm, practical approach helps travellers turn a first idea into a journey that feels genuinely theirs. He works alongside our wider team and trusted partners to keep every detail moving.</p><Link href="/contact" className="font-semibold text-[var(--golden-savannah)] hover:underline">Talk with our team</Link></div></div></section>
      <section className="bg-[var(--color-forest-canopy)] px-4 py-20 text-center text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><h2 className="font-playfair mb-5 text-4xl font-bold">What we deliver</h2><p className="mb-8 text-lg leading-relaxed text-white/80">From your first conversation to your return transfer, we bring together thoughtful planning, reliable operations and the flexibility to make a journey your own.</p><Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Start planning</Link></div></section>
    </>
  );
}
