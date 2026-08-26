import type { Metadata } from 'next';
import Link from 'next/link';
import FaqList from './FaqList';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about planning, packing, payments and travelling on safari with C.A.T.S Safaris.',
  alternates: { canonical: '/faqs' },
};

export default function FaqPage() {
  return <>
    <section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Good to know</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Your safari questions, answered</h1><p className="text-lg leading-relaxed text-white/80">A few practical answers to help you feel ready for your East African journey.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl"><FaqList /><div className="mt-12 rounded-2xl bg-[var(--savannah-dust)] p-7 text-center"><h2 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)]">Still wondering about something?</h2><p className="mb-5 text-stone-700">Our team is happy to talk through the details of your journey.</p><Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg">Ask our team</Link></div></div></section>
  </>;
}
