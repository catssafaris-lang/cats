import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Search Worldwide Flights',
  description: 'Search commercial flights worldwide and connect your international journey with a C.A.T.S East Africa safari.',
  alternates: { canonical: '/flight-search' },
};

export default function FlightSearchPage() {
  return <>
    <Script src="https://www.travelpayouts.com/widgets/3319.js?wl_id=3319" strategy="afterInteractive" />
    <section className="bg-[var(--forest-canopy)] px-4 pb-16 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Commercial flight search</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Find your route to East Africa</h1><p className="text-lg leading-relaxed text-white/80">Compare worldwide flight options, then let our team coordinate the regional connections that complete your safari.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-12 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl"><div className="min-h-[320px] rounded-2xl bg-white p-4 shadow-sm sm:p-8"><div id="travelpayouts-flight-widget" data-wl_id="3319" className="min-h-[260px]"><p className="pt-20 text-center text-stone-500">Loading the flight search widget...</p></div></div><div className="mx-auto mt-12 max-w-3xl"><h2 className="font-playfair mb-4 text-3xl font-bold text-[var(--forest-canopy)]">Plan the whole journey</h2><p className="leading-relaxed text-stone-700">Use the search above for your international flights. If you need help choosing an arrival airport, adding domestic flights or building a safari around your dates, <a href="mailto:info@catssafaris.com" className="font-semibold text-[var(--golden-savannah)] hover:underline">email our team</a> and we will help with the details.</p></div></div></section>
  </>;
}
