'use client';

import { useRef, useState, useCallback } from 'react';
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
  { city: 'Doha', code: 'DOH', country: 'Qatar', img: 'https://images.pexels.com/photos/3571160/pexels-photo-3571160.jpeg?auto=compress&cs=tinysrgb&w=400' },
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

const howItWorks = [
  { step: '1', title: 'Search Flights', desc: 'Enter your origin, destination, travel dates, passengers and cabin class. Our engine searches hundreds of airlines and travel agencies simultaneously.' },
  { step: '2', title: 'Compare Results', desc: 'View real-time prices from multiple suppliers. Compare airlines, flight times, stops, baggage allowances and fares side by side.' },
  { step: '3', title: 'Select Your Flight', desc: 'Choose the best option for your itinerary. Review full flight details, layover information and fare conditions — all without leaving C.A.T.S.' },
  { step: '4', title: 'Book & Pay', desc: 'Click "Book" to proceed to the airline or travel agency for secure checkout. You pay directly with the verified supplier at their advertised price.' },
];

const faqs: { q: string; a: string }[] = [
  { q: 'How does the C.A.T.S flight search work?', a: 'Our flight engine searches hundreds of airlines and online travel agencies in real time. You compare prices and schedules on our website, then book directly with the supplier that offers the best fare.' },
  { q: 'Do I pay C.A.T.S for the flight?', a: 'No. You pay the airline or travel agency directly at checkout. C.A.T.S provides the comparison platform at no additional cost to you.' },
  { q: 'Which airlines fly to Nairobi (NBO)?', a: 'Nairobi Jomo Kenyatta International Airport is served by Kenya Airways, Ethiopian Airlines, Emirates, Qatar Airways, Turkish Airlines, British Airways, KLM, Lufthansa, Swiss Air, and many more carriers offering direct and connecting flights from every continent.' },
  { q: 'Can I book one-way, return, or multi-city flights?', a: 'Yes. Our search supports one-way, round-trip, and multi-city itineraries. Select the trip type before searching to see all available options.' },
  { q: 'What cabin classes are available?', a: 'You can search Economy, Premium Economy, Business, and First Class. Availability depends on the airline and route.' },
  { q: 'How do I find the cheapest flights to East Africa?', a: 'Use flexible dates, search mid-week departures (Tuesday to Thursday), and book well in advance. Our engine automatically shows the lowest available fares from all suppliers.' },
  { q: 'Can I combine my flight with a C.A.T.S safari package?', a: 'Absolutely. Search your international flight here, then explore our Kenya Safaris, Tanzania Safaris, or multi-country packages. Our team coordinates flight arrivals with safari pickup schedules.' },
  { q: 'Is my booking secure?', a: 'Yes. When you click "Book", you are redirected to the airline or licensed travel agency for payment through their secure checkout. C.A.T.S does not handle payment card details.' },
  { q: 'What destinations can I search?', a: 'Our engine covers worldwide routes — any origin and any destination served by commercial airlines. Popular searches include London to Nairobi, Dubai to Kilimanjaro, and New York to Dar es Salaam.' },
  { q: 'Do prices include taxes and fees?', a: 'Prices shown typically include taxes and base fees. Some suppliers may add baggage or seat-selection charges at checkout. Always review the final price before completing payment.' },
  { q: 'Can I search flights for children and infants?', a: 'Yes. Adjust the passenger count in the search form to include children (2-11 years) and infants (under 2 years). Child and infant fares vary by airline.' },
  { q: 'What if I need to change or cancel my flight?', a: 'Changes and cancellations are handled by the airline or agency you booked with. Review the fare conditions shown with each result before booking.' },
  { q: 'Do you offer domestic flights within Kenya?', a: 'For domestic flights and private charters within Kenya (Nairobi to Masai Mara, Amboseli, Lamu, etc.), visit our Domestic Flights & Private Charters page for tailored options.' },
  { q: 'What is the best time to fly to Kenya for safari?', a: 'The dry seasons (June to October and January to February) offer the best wildlife viewing. The Great Migration crosses the Masai Mara from July to October. Shoulder months often have lower fares.' },
  { q: 'How far in advance should I book flights to East Africa?', a: 'For the best fares, book international flights 2 to 4 months in advance. Peak season flights (July-October, December-January) should be booked even earlier.' },
  { q: 'Can C.A.T.S arrange airport transfers?', a: 'Yes. We provide airport pickup and drop-off services across Kenya and East Africa. Contact our team at +254 723 951 388 or info@catssafaris.com to arrange transfers.' },
];

export default function FlightSearchClient() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSearch = useCallback(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#2d3530] px-4 pb-14 pt-36 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a68b52]">
            C.A.T.S Flight Centre
          </p>
          <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Search, Compare &amp; Book<br />Flights Worldwide
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Find the lowest fares from hundreds of airlines and travel agencies. Compare prices, schedules and cabin classes — then book directly with the supplier. Your entire search stays right here on C.A.T.S.
          </p>
          <button
            onClick={scrollToSearch}
            className="mt-8 inline-block rounded-lg bg-[#a68b52] px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#8a7343] hover:shadow-xl"
          >
            Search Flights Now
          </button>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            How It Works
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[#5c4d42]/70">
            Search and compare on C.A.T.S — pay only when you choose your flight
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2d3530] text-xl font-bold text-[#a68b52]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2d3530]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5c4d42]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FLIGHT SEARCH ENGINE (iframe) ─── */}
      <div ref={searchRef} className="scroll-mt-0">
        <section className="bg-[#3b2f1e] px-4 py-6 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Find Your Flight
          </h2>
          <p className="mt-1 text-sm text-white/60">
            Search real-time prices from airlines and travel agencies worldwide
          </p>
        </section>
        <div className="relative w-full bg-[#F6F7F8]" style={{ minHeight: '700px' }}>
          <iframe
            ref={iframeRef}
            src="https://flights.catssafaris.com"
            className="w-full border-0"
            style={{ height: '900px', minHeight: '700px' }}
            title="C.A.T.S Flight Search"
            allow="clipboard-write"
            loading="eager"
          />
        </div>
      </div>

      {/* ─── INTERNATIONAL DESTINATIONS ─── */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Popular International Routes
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-[#5c4d42]/70">
            Fly from major cities worldwide to East Africa. Click any destination to start your search.
          </p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {international.map((dest) => (
              <button
                key={dest.code}
                onClick={scrollToSearch}
                className="group overflow-hidden rounded-xl bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={dest.img}
                    alt={`Flights from ${dest.city} to East Africa`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded bg-[#a68b52]/90 px-2 py-0.5 text-xs font-semibold uppercase text-white">{dest.code}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-[#2d3530]">{dest.city}</h3>
                  <p className="text-xs text-[#5c4d42]/60">{dest.country}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EAST AFRICAN DESTINATIONS ─── */}
      <section className="bg-[#2d3530] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            Fly to East Africa
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-white/70">
            Gateway airports across Kenya, Tanzania, Uganda and Rwanda. Combine your flight with a{' '}
            <Link href="/kenya-safaris" className="text-[#a68b52] underline hover:text-[#c9a960]">C.A.T.S safari</Link>{' '}
            for the ultimate African adventure.
          </p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {eastAfrica.map((dest) => (
              <button
                key={dest.code}
                onClick={scrollToSearch}
                className="group overflow-hidden rounded-xl bg-white/10 text-left backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/20"
              >
                <div className="relative h-36 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={dest.img}
                    alt={`Flights to ${dest.city}, ${dest.country}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-white">{dest.city}</h3>
                  <p className="text-xs text-white/60">{dest.country}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BOOK THROUGH C.A.T.S ─── */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Why Search Flights with C.A.T.S
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Real-Time Prices', desc: 'Live fares from hundreds of airlines and travel agencies updated in real time. No cached or fabricated prices.' },
              { title: 'Compare Multiple Suppliers', desc: 'See offers from different airlines and booking agencies side by side. Choose the best fare, schedule, and baggage allowance.' },
              { title: 'No Hidden Fees', desc: 'C.A.T.S adds nothing to the ticket price. You pay the airline or agency directly at their advertised rate.' },
              { title: 'Safari Flight Coordination', desc: 'Our team coordinates international arrivals with safari pickup schedules, domestic transfers, and accommodation check-ins across East Africa.' },
              { title: 'Secure Supplier Checkout', desc: 'Book directly with verified airlines and licensed agencies through their own secure payment systems.' },
              { title: '15 Years of East Africa Expertise', desc: 'Collective African Tours & Safaris brings over 15 years of travel expertise. We know the best routes, connections, and timing for East African journeys.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-bold text-[#2d3530]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5c4d42]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECT WITH SAFARI ─── */}
      <section className="bg-[#3b2f1e] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Pair Your Flight with an Unforgettable Safari
          </h2>
          <p className="mb-8 text-white/80">
            Book your international flight here, then let our safari consultants design the perfect itinerary. From airport pickup to game drives, bush dinners and beach extensions — we handle every detail.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kenya-safaris"
              className="rounded-lg bg-[#a68b52] px-8 py-3 font-semibold text-white shadow-md transition hover:bg-[#8a7343]"
            >
              Browse Safari Packages
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white/40 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Talk to Our Team
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Call us: <a href="tel:+254723951388" className="text-[#a68b52] hover:underline">+254 723 951 388</a> | Email: <a href="mailto:info@catssafaris.com" className="text-[#a68b52] hover:underline">info@catssafaris.com</a>
          </p>
        </div>
      </section>

      {/* ─── DOMESTIC FLIGHTS ─── */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Domestic Flights &amp; Private Charters
          </h2>
          <p className="mb-8 text-[#5c4d42]/80">
            Flying within Kenya? We arrange scheduled domestic flights and private charters to Masai Mara, Amboseli, Lamu, Diani, Samburu, and all major airstrips. Perfect for fly-in safari packages.
          </p>
          <Link
            href="/domestic-flights"
            className="inline-block rounded-lg bg-[#2d3530] px-8 py-3 font-semibold text-white shadow-md transition hover:bg-[#3d4a44]"
          >
            Domestic Flights &amp; Charters
          </Link>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Flight Search FAQs
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-[#5c4d42]/70">
            Everything you need to know about searching, comparing and booking flights through C.A.T.S
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-[#e8e3d9]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-[#f7f4ed]"
                >
                  <span className="pr-4 font-semibold text-[#2d3530]">{faq.q}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-[#a68b52] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="border-t border-[#e8e3d9] bg-[#fdfcf9] px-6 py-4 text-sm leading-relaxed text-[#5c4d42]/80">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#2d3530] px-4 py-14 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Fly?
          </h2>
          <p className="mb-6 text-white/70">
            Search hundreds of airlines and agencies. Compare fares. Book directly with the supplier.
          </p>
          <button
            onClick={scrollToSearch}
            className="rounded-lg bg-[#a68b52] px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#8a7343]"
          >
            Search Flights Now
          </button>
        </div>
      </section>
    </>
  );
}
