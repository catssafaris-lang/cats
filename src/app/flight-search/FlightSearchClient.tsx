'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Destination data ─── */
const international = [
  { city: 'London', code: 'LON', country: 'United Kingdom', img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Dubai', code: 'DXB', country: 'United Arab Emirates', img: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Istanbul', code: 'IST', country: 'Turkiye', img: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Mumbai', code: 'BOM', country: 'India', img: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'New York', code: 'NYC', country: 'United States', img: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Paris', code: 'PAR', country: 'France', img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Johannesburg', code: 'JNB', country: 'South Africa', img: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Doha', code: 'DOH', country: 'Qatar', img: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const eastAfrica = [
  { city: 'Nairobi', code: 'NBO', country: 'Kenya', img: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Mombasa', code: 'MBA', country: 'Kenya', img: 'https://images.pexels.com/photos/13418220/pexels-photo-13418220.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Dar es Salaam', code: 'DAR', country: 'Tanzania', img: 'https://images.pexels.com/photos/18806088/pexels-photo-18806088.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Kilimanjaro', code: 'JRO', country: 'Tanzania', img: 'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Zanzibar', code: 'ZNZ', country: 'Tanzania', img: 'https://images.pexels.com/photos/34231432/pexels-photo-34231432.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Entebbe', code: 'EBB', country: 'Uganda', img: 'https://images.pexels.com/photos/38101674/pexels-photo-38101674.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Kigali', code: 'KGL', country: 'Rwanda', img: 'https://images.pexels.com/photos/31466702/pexels-photo-31466702.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const faqs: { q: string; a: string }[] = [
  { q: 'How does the C.A.T.S flight search engine work?', a: 'Our flight search engine connects to hundreds of airlines and online travel agencies in real time. You search, compare prices and schedules on our website, then book directly with the supplier that offers the best fare. C.A.T.S acts as your comparison platform — you only leave when you click Book.' },
  { q: 'Do I pay C.A.T.S for the flight ticket?', a: 'No. You pay the airline or travel agency directly at their checkout. C.A.T.S provides the comparison service at no additional cost to you.' },
  { q: 'Which airlines fly direct to Nairobi (NBO)?', a: 'Nairobi Jomo Kenyatta International Airport is served by Kenya Airways, Ethiopian Airlines, Emirates, Qatar Airways, Turkish Airlines, British Airways, KLM, Lufthansa, Swiss Air, RwandAir, and many more carriers offering direct and connecting flights from every continent.' },
  { q: 'Can I book one-way, return, or multi-city flights?', a: 'Yes. Our search supports one-way, round-trip, and multi-city itineraries. Select the trip type before searching to see all available options.' },
  { q: 'What cabin classes can I search?', a: 'You can search Economy, Premium Economy, Business, and First Class. Availability depends on the airline and route.' },
  { q: 'How do I find the cheapest flights to East Africa?', a: 'Use flexible dates, search mid-week departures (Tuesday to Thursday), and book well in advance. Our engine automatically shows the lowest available fares from all suppliers. Shoulder season months like March, May and November often have the best deals.' },
  { q: 'Can I combine my flight with a C.A.T.S safari package?', a: 'Absolutely. Search your international flight here, then explore our Kenya Safaris, Tanzania Safaris, or multi-country packages. Our team coordinates flight arrivals with safari pickup schedules and accommodation check-ins.' },
  { q: 'Is my booking secure when I click Book?', a: 'Yes. When you click Book, you are redirected to the airline or licensed travel agency for payment through their own secure checkout system. C.A.T.S does not handle payment card details at any point.' },
  { q: 'What worldwide destinations can I search?', a: 'Our engine covers every commercial air route worldwide — any origin and any destination. Popular searches include London to Nairobi, Dubai to Kilimanjaro, New York to Dar es Salaam, Istanbul to Mombasa, and Doha to Entebbe.' },
  { q: 'Do the prices include taxes and fees?', a: 'Prices shown typically include taxes and base fees. Some suppliers may add baggage or seat-selection charges at checkout. Always review the final price before completing payment with the supplier.' },
  { q: 'Can I search flights for children and infants?', a: 'Yes. Adjust the passenger count to include children (2-11 years) and infants (under 2 years). Child and infant fares vary by airline and route.' },
  { q: 'What if I need to change or cancel my flight?', a: 'Changes and cancellations are handled by the airline or agency you booked with. Review the fare conditions shown with each result before booking. Flexible fare tickets offer easier changes.' },
  { q: 'Do you offer domestic flights within Kenya?', a: 'Yes. For domestic flights and private charters within Kenya — Nairobi to Masai Mara, Amboseli, Lamu, Diani, Samburu, and all major airstrips — visit our Domestic Flights & Private Charters page for tailored options and pricing.' },
  { q: 'What is the best time to fly to Kenya for safari?', a: 'The dry seasons (June to October and January to February) offer the best wildlife viewing. The Great Migration crosses the Masai Mara from July to October. Shoulder months often have lower airfares and equally rewarding game drives.' },
  { q: 'How far in advance should I book flights to East Africa?', a: 'For the best fares, book international flights 2 to 4 months in advance. Peak season flights (July-October, December-January) should be booked even earlier to secure availability and lower prices.' },
  { q: 'Can C.A.T.S arrange airport transfers and ground transport?', a: 'Yes. We provide airport pickup, drop-off, and ground transport services across Kenya and East Africa including SGR train coordination. Contact our team at +254 723 951 388 or info@catssafaris.com to arrange seamless transfers from any airport.' },
];

const whyChoose = [
  { title: 'Real-Time Prices', desc: 'Live fares from 500+ airlines and travel agencies updated every second. No cached or outdated prices.' },
  { title: 'Zero Hidden Fees', desc: 'What you see is what you pay. No booking fees, no service charges, no surprises at checkout.' },
  { title: 'Book Direct', desc: 'Pay the airline or travel agency directly through their secure checkout. C.A.T.S never handles your payment.' },
  { title: 'Safari Integration', desc: 'Coordinate your flight with a C.A.T.S safari package. We match arrivals to pickup schedules and accommodations.' },
  { title: 'Every Route Worldwide', desc: 'Search any origin to any destination. International, regional, and domestic flights across all continents.' },
  { title: 'Expert Support', desc: '15 years of East Africa travel expertise. Our team helps coordinate flights with safari itineraries and ground transfers.' },
];

export default function FlightSearchClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ─── BRANDED HEADER BAR ─── */}
      <section className="bg-[#2d3530] px-4 pt-28 pb-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
              Collective African Tours &amp; Safaris
            </h2>
            <span className="text-sm font-semibold text-[#a68b52]">(C.A.T.S)</span>
          </div>
          <Link
            href="/"
            className="rounded-lg border-2 border-[#a68b52] px-5 py-2 text-sm font-semibold text-[#a68b52] transition hover:bg-[#a68b52] hover:text-white"
          >
            Back to Website
          </Link>
        </div>
      </section>

      {/* ─── HERO ─── */}
      <section className="bg-[#2d3530] px-4 pb-6 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Search &amp; Compare Flights
          </h1>
          <p className="text-2xl font-bold text-[#a68b52] md:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Worldwide
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Cheap flights, business class flights and first class flights to every corner of the globe — business, leisure, adventure, safari and luxury travel, all in one search.
          </p>
        </div>
      </section>

      {/* ─── FLIGHT SEARCH ENGINE — flights.catssafaris.com embedded ─── */}
      <section id="flight-search-engine" className="scroll-mt-20 bg-[#f7f4ed]">
        <iframe
          src="https://flights.catssafaris.com"
          title="C.A.T.S Flight Search Engine"
          className="w-full border-0"
          style={{ height: '680px', minHeight: '680px' }}
          allow="geolocation"
          loading="eager"
        />
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#2d3530] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">How It Works</p>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Book Your Flight in 4 Simple Steps
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '1', title: 'Search', desc: 'Enter your origin, destination, dates and passengers' },
              { step: '2', title: 'Compare', desc: 'View real-time prices from 500+ airlines and agencies' },
              { step: '3', title: 'Select', desc: 'Choose the best fare, schedule and cabin class for you' },
              { step: '4', title: 'Book & Pay', desc: 'Click Book to pay directly with the airline or agency' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#a68b52] text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SEARCH WITH C.A.T.S ─── */}
      <section className="bg-[#f7f4ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Why Choose Us</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2d3530] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Why Search Flights With C.A.T.S?
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[#5c4d42]/70">
            15 years of East Africa travel expertise — your trusted flight comparison partner
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-xl border border-[#e8e0d4] bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-[#2d3530]">{w.title}</h3>
                <p className="text-sm leading-relaxed text-[#5c4d42]/80">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERNATIONAL DESTINATIONS ─── */}
      <section className="bg-[#f7f4ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Popular Routes</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2d3530] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            International Destinations
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[#5c4d42]/70">
            Compare fares from major cities worldwide to East Africa and beyond
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {international.map((d) => (
              <a
                key={d.code}
                href="#flight-search-engine"
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <div className="relative h-48 w-full">
                  <Image src={d.img} alt={`Flights to ${d.city}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-white">{d.city}</h3>
                  <p className="text-xs text-white/80">{d.country} ({d.code})</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EAST AFRICAN DESTINATIONS ─── */}
      <section className="bg-[#2d3530] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">East Africa</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Fly to East Africa
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-white/60">
            Direct and connecting flights to Kenya, Tanzania, Uganda and Rwanda from every major international hub
          </p>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {eastAfrica.map((d) => (
              <a
                key={d.code}
                href="#flight-search-engine"
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <div className="relative h-48 w-full">
                  <Image src={d.img} alt={`Flights to ${d.city}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width:640px)100vw,(max-width:768px)50vw,(max-width:1024px)33vw,25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-white">{d.city}</h3>
                  <p className="text-xs text-white/80">{d.country} ({d.code})</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAFARI + FLIGHT CTA ─── */}
      <section className="bg-[#f7f4ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#2d3530] px-8 py-14 text-center shadow-xl">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Combine Your Flight With a Safari
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-white/70">
            Book your flight, then let our team coordinate arrival pickups, domestic connections and your safari schedule. 15 years of seamless East Africa travel logistics.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/kenya-safaris" className="rounded-lg bg-[#a68b52] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#8b7343]">
              Explore Safari Packages
            </Link>
            <a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-[#a68b52] px-8 py-3 text-sm font-bold text-[#a68b52] transition hover:bg-[#a68b52] hover:text-white">
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Call +254 723 951 388 or email info@catssafaris.com
          </p>
        </div>
      </section>

      {/* ─── DOMESTIC FLIGHTS ─── */}
      <section className="bg-[#f7f4ed] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#2d3530] md:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Domestic Flights &amp; Private Charters
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-[#5c4d42]/70">
            Fly-in safaris to Masai Mara, Amboseli, Samburu, Lamu, Diani and every major Kenya airstrip. Private charters and scheduled domestic flights.
          </p>
          <Link href="/domestic-flights" className="inline-block rounded-lg bg-[#2d3530] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#3d4a44]">
            View Domestic Flights
          </Link>
        </div>
      </section>

      {/* ─── 16 FAQs ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Frequently Asked Questions</p>
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2d3530] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Flight Search FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-[#e8e0d4]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-[#2d3530] transition hover:bg-[#f7f4ed]"
                >
                  <span>{f.q}</span>
                  <svg className={`ml-4 h-5 w-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="border-t border-[#e8e0d4] bg-[#faf8f4] px-6 py-4 text-sm leading-relaxed text-[#5c4d42]/80">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO CONTENT BLOCK ─── */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Compare Cheap Flights to Kenya, Tanzania, Uganda &amp; Rwanda
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-[#5c4d42]/80">
            <p>
              Collective African Tours &amp; Safaris (C.A.T.S) brings you a powerful flight comparison engine covering 500+ airlines and travel agencies worldwide. Whether you need cheap flights to Nairobi, business class tickets to Dar es Salaam, first class flights to Kilimanjaro, or budget fares to Mombasa, Zanzibar, Entebbe or Kigali — search, compare, and book directly with the airline or agency offering the best price.
            </p>
            <p>
              Popular routes include London Heathrow to Nairobi, Dubai International to Mombasa, Istanbul to Kilimanjaro, Mumbai to Dar es Salaam, New York JFK to Nairobi, Paris CDG to Entebbe, Johannesburg OR Tambo to Nairobi, and Doha Hamad to Kigali. Major carriers serving East Africa include Kenya Airways, Ethiopian Airlines, Emirates, Qatar Airways, Turkish Airlines, British Airways, KLM Royal Dutch Airlines, Lufthansa, Swiss International Air Lines, RwandAir, Fly540, and many regional and low-cost operators.
            </p>
            <p>
              Planning a safari? Coordinate your international flight with a C.A.T.S safari package. Our team matches arrival schedules to lodge check-ins, arranges airport transfers across Kenya, Tanzania, Uganda and Rwanda, and books domestic fly-in connections to remote safari destinations including Masai Mara, Amboseli, Samburu, Serengeti, Ngorongoro Crater, Bwindi Impenetrable Forest, Volcanoes National Park, and every major East African airstrip. With 15 years of expertise, we deliver seamless travel logistics from takeoff to the bush.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#2d3530] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Fly?
          </h2>
          <p className="mb-8 text-white/70">
            Search real-time fares, compare prices from hundreds of airlines, and book your flight to East Africa today.
          </p>
          <a
            href="#flight-search-engine"
            className="inline-block rounded-lg bg-[#a68b52] px-10 py-4 text-lg font-bold text-white transition hover:bg-[#8b7343]"
          >
            Search Flights Now
          </a>
        </div>
      </section>
    </>
  );
}
