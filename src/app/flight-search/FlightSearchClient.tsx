'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
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

const howItWorks = [
  { step: '01', title: 'Search', desc: 'Enter your origin, destination, dates, passengers and cabin class. Our engine searches hundreds of airlines and travel agencies instantly.', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
  { step: '02', title: 'Compare', desc: 'View real-time prices from multiple suppliers. Compare airlines, flight duration, stops, baggage and fares side by side.', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
  { step: '03', title: 'Select', desc: 'Choose the best option. Review full flight details, layover info, fare conditions and baggage — all without leaving C.A.T.S.', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { step: '04', title: 'Book & Pay', desc: 'Click "Book" to proceed directly to the airline or travel agency for secure checkout. You pay the supplier at their advertised price.', icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' },
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

export default function FlightSearchClient() {
  const wlRef = useRef<HTMLDivElement>(null);
  const [wlLoaded, setWlLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [engineFailed, setEngineFailed] = useState(false);

  /* Load TravelPayouts WL engine with fallback detection */
  useEffect(() => {
    if (wlLoaded) return;

    // Force USD currency cookie before TP loads
    document.cookie = 'tpwl_currency=USD;path=/;max-age=31536000';

    // Set TP globals
    (window as any).TPWL_CONFIGURATION = {
      version: 'v2',
      ab_flag: '',
      ab_variant: '',
      ab_evaluation_id: '',
    };
    (window as any).TPWL_EXTRA = {
      currency: 'USD',
      marker: '241052',
      trs: '486464',
      domain: 'flights.catssafaris.com',
      locale: 'EN',
      link_color: 'a68b52',
    };
    (window as any).tpwlCurrencyChange = (v: string) => {
      document.cookie = `tpwl_currency=${v};path=/;max-age=31536000`;
    };
    (window as any).tpwlLocaleChange = (v: string) => {
      document.cookie = `tpwl_locale=${v};path=/;max-age=31536000`;
      window.location.reload();
    };

    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.src = 'https://tpscr.com/wl_web/main.js?wl_id=3319';
    script.onload = () => setWlLoaded(true);
    script.onerror = () => setEngineFailed(true);
    document.head.appendChild(script);

    // Fallback: if TP hasn't rendered anything in 6 seconds, show iframe fallback
    const fallbackTimer = setTimeout(() => {
      const searchEl = document.getElementById('tpwl-search');
      if (!searchEl || searchEl.children.length === 0) {
        setEngineFailed(true);
      }
    }, 6000);

    return () => clearTimeout(fallbackTimer);
  }, [wlLoaded]);

  const scrollToSearch = useCallback(() => {
    const el = document.getElementById('flight-search-engine');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#2d3530] px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d3530] via-[#1a1f1c] to-[#0d1210]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a68b52]/30 bg-[#a68b52]/10 px-5 py-2">
            <svg className="h-4 w-4 text-[#a68b52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            <span className="text-sm font-medium tracking-wide text-[#a68b52]">C.A.T.S Flight Centre</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Search, Compare &amp; Book<br className="hidden sm:block" />
            <span className="text-[#a68b52]">Flights Worldwide</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Real-time prices from hundreds of airlines and travel agencies. Compare fares to Nairobi, Dubai, London, Dar es Salaam, Kilimanjaro and beyond — book directly with the supplier.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={scrollToSearch}
              className="group inline-flex items-center gap-3 rounded-xl bg-[#a68b52] px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-[#a68b52]/20 transition-all hover:-translate-y-0.5 hover:bg-[#b89a5f] hover:shadow-xl"
            >
              Search Flights Now
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </button>
            <Link
              href="/domestic-flights"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Domestic &amp; Charter Flights
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#a68b52]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Real-time prices
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#a68b52]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#a68b52]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              500+ airlines
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#a68b52]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Book with the supplier
            </span>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#f7f4ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Simple Process</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2d3530] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            How It Works
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[#5c4d42]/70">
            Search and compare on C.A.T.S — you only leave when you click Book
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-[#e8e3d9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2d3530]">
                  <svg className="h-6 w-6 text-[#a68b52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#a68b52]">Step {item.step}</span>
                <h3 className="mb-2 text-xl font-bold text-[#2d3530]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5c4d42]/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FLIGHT SEARCH ENGINE ─── */}
      <div id="flight-search-engine" className="scroll-mt-20">
        <section className="bg-gradient-to-b from-[#2d3530] to-[#1a1f1c] px-4 py-10 text-center sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
              Find Your <span className="text-[#a68b52]">Perfect Flight</span>
            </h2>
            <p className="mt-3 text-white/60">
              Search real-time prices from airlines and travel agencies worldwide. Compare and book directly.
            </p>
          </div>
        </section>

        {/* Primary: TP WL renders here when accessible */}
        {!engineFailed && (
          <div ref={wlRef} className="tpwl-page-wrapper" style={{ background: '#f7f4ed' }}>
            <div className="tpwl-search-header" style={{ backgroundColor: '#2d3530', padding: '24px 16px' }}>
              <div className="tpwl-search__wrapper">
                <div className="tpwl__content" id="tpwl-search" />
              </div>
            </div>
            <div className="tpwl-main" style={{ backgroundColor: '#f7f4ed' }}>
              <div className="tpwl-tickets__wrapper" style={{ padding: '0 16px' }}>
                <div className="tpwl__content" id="tpwl-tickets" />
              </div>
            </div>
          </div>
        )}

        {/* Fallback: iframe to flights.catssafaris.com when TP script is geo-blocked */}
        {engineFailed && (
          <div className="bg-[#f7f4ed] px-4 py-6 sm:px-6">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#e8e3d9] bg-white shadow-xl">
              <iframe
                src="https://flights.catssafaris.com"
                title="C.A.T.S Flight Search"
                className="w-full border-0"
                style={{ height: '700px', minHeight: '600px' }}
                allow="geolocation"
                loading="eager"
              />
            </div>
            <p className="mt-4 text-center text-sm text-[#5c4d42]/50">
              Having trouble loading?{' '}
              <a
                href="https://flights.catssafaris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a68b52] underline hover:text-[#8a7342]"
              >
                Open flight search in a new window
              </a>
            </p>
          </div>
        )}

        {/* Hide TP branding elements */}
        <style>{`
          .tpwl-logo-header,
          .tpwl-logo__wrapper,
          .tpwl-footer__wrapper,
          .tpwl-widgets__wrapper,
          [class*="tpwl-footer"],
          [class*="tpwl-cookie"],
          .tpwl-header__wrapper,
          [class*="tpwl-logo"],
          [class*="cookie-notice"],
          [class*="CookieNotice"],
          .tpwl-footer,
          footer.tpwl-footer {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            overflow: hidden !important;
          }
          .tpwl-search-header {
            position: relative !important;
            background-color: #2d3530 !important;
          }
          .tpwl-main {
            background-color: #f7f4ed !important;
          }
          .tpwl__content {
            max-width: 1100px !important;
            min-width: unset !important;
            margin: 0 auto;
          }
          .tpwl-tickets__wrapper {
            padding: 20px 16px !important;
          }
          /* Force USD currency display */
          .tpwl-currency-selector { display: none !important; }
          @media (min-width: 768px) {
            .tpwl-search-header { padding: 24px 40px !important; }
            .tpwl-tickets__wrapper { padding: 20px 40px !important; }
          }
          @media (min-width: 1024px) {
            .tpwl-search-header { padding: 24px 80px !important; }
            .tpwl-tickets__wrapper { padding: 20px 80px !important; }
          }
          /* Mobile fix: ensure search form doesn't overlap other sections */
          @media (max-width: 767px) {
            .tpwl-search-header {
              padding: 16px 12px !important;
            }
            .tpwl-page-wrapper {
              overflow-x: hidden !important;
            }
            .tpwl__content {
              width: 100% !important;
              max-width: 100% !important;
              overflow-x: hidden !important;
            }
          }
        `}</style>
      </div>

      {/* ─── POPULAR INTERNATIONAL ROUTES ─── */}
      <section className="bg-[#f7f4ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Worldwide Coverage</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2d3530] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Popular International Routes
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[#5c4d42]/70">
            Compare fares from London, Dubai, Istanbul, Mumbai, New York, Paris, Johannesburg and Doha to East Africa
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {international.map((dest) => (
              <button
                key={dest.code}
                onClick={scrollToSearch}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 w-full overflow-hidden lg:h-48">
                  <Image
                    src={dest.img}
                    alt={`Book cheap flights from ${dest.city} to Nairobi, Kenya`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width:640px) 50vw,(max-width:768px) 33vw,25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{dest.city}</h3>
                      <p className="text-xs text-white/70">{dest.country}</p>
                    </div>
                    <span className="rounded-lg bg-[#a68b52] px-2.5 py-1 text-xs font-bold text-white">{dest.code}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FLY TO EAST AFRICA ─── */}
      <section className="bg-[#2d3530] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Gateway Airports</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Fly to East Africa
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/60">
            Direct and connecting flights to Kenya, Tanzania, Uganda and Rwanda. Combine your flight with a{' '}
            <Link href="/kenya-safaris" className="text-[#a68b52] underline decoration-[#a68b52]/40 hover:decoration-[#a68b52]">C.A.T.S safari</Link>{' '}
            for the ultimate African adventure.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {eastAfrica.map((dest) => (
              <button
                key={dest.code}
                onClick={scrollToSearch}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#a68b52]/30 hover:bg-white/10"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-t-2xl lg:h-48">
                  <Image
                    src={dest.img}
                    alt={`Flights to ${dest.city} ${dest.country} from London Dubai New York`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width:640px) 50vw,(max-width:768px) 33vw,25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3530]/80 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="text-base font-bold text-white">{dest.city}</h3>
                    <p className="text-xs text-white/50">{dest.country}</p>
                  </div>
                  <span className="rounded-lg bg-[#a68b52]/20 px-2.5 py-1 text-xs font-bold text-[#a68b52]">{dest.code}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SEARCH WITH C.A.T.S ─── */}
      <section className="bg-[#f7f4ed] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Your Advantage</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2d3530] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Why Search Flights with C.A.T.S
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[#5c4d42]/70">
            15 years of East Africa travel expertise combined with the world&rsquo;s best flight comparison technology
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Real-Time Flight Prices', desc: 'Live fares from hundreds of airlines and travel agencies updated every second. No cached or fabricated prices — what you see is what suppliers are charging right now.' },
              { title: 'Compare Multiple Suppliers', desc: 'See offers from Kenya Airways, Emirates, Qatar Airways, Turkish Airlines, Ethiopian Airlines, British Airways and dozens more — side by side with baggage and fare details.' },
              { title: 'Zero Hidden Fees', desc: 'C.A.T.S adds nothing to the ticket price. You pay the airline or agency directly at their advertised rate. Our comparison service is completely free.' },
              { title: 'Safari Flight Coordination', desc: 'Our team coordinates international flight arrivals with safari pickup schedules, domestic bush flights, SGR train transfers, and accommodation check-ins across East Africa.' },
              { title: 'Secure Supplier Checkout', desc: 'Book directly with verified airlines and licensed travel agencies through their own secure payment systems. Your payment details never pass through C.A.T.S.' },
              { title: '15 Years of Travel Expertise', desc: 'Collective African Tours & Safaris brings over 15 years of East Africa travel knowledge. We know the best routes, airline connections, transit hubs, and optimal timing for every journey.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#e8e3d9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="mb-3 text-lg font-bold text-[#2d3530]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#5c4d42]/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAFARI + FLIGHT CTA ─── */}
      <section className="relative overflow-hidden bg-[#3b2f1e] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #a68b52 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Complete Your Journey</p>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Pair Your Flight with an Unforgettable Safari
          </h2>
          <p className="mb-10 text-lg text-white/75">
            Book your international flight here, then let our safari consultants design the perfect East African itinerary. From airport pickup to game drives, bush dinners, beach extensions and mountain treks — we handle every detail.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kenya-safaris"
              className="rounded-xl bg-[#a68b52] px-10 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#b89a5f]"
            >
              Browse Safari Packages
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-white/30 px-10 py-4 font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              Talk to Our Team
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/40">
            Call: <a href="tel:+254723951388" className="text-[#a68b52] hover:underline">+254 723 951 388</a> &nbsp;|&nbsp; Email: <a href="mailto:info@catssafaris.com" className="text-[#a68b52] hover:underline">info@catssafaris.com</a> &nbsp;|&nbsp; WhatsApp: <a href="https://wa.me/254723951388" className="text-[#a68b52] hover:underline">Chat with us</a>
          </p>
        </div>
      </section>

      {/* ─── DOMESTIC FLIGHTS ─── */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Domestic Flights &amp; Private Charters
          </h2>
          <p className="mb-8 text-[#5c4d42]/75">
            Flying within Kenya? We arrange scheduled domestic flights and private charters to the Masai Mara, Amboseli, Lamu, Diani Beach, Samburu, and all major safari airstrips. Perfect for fly-in safari packages that save time and maximize your adventure.
          </p>
          <Link
            href="/domestic-flights"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2d3530] px-10 py-4 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#3d4a44]"
          >
            Explore Domestic Flights
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </Link>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Questions Answered</p>
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2d3530] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Flight Search FAQs
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-[#5c4d42]/70">
            Everything you need to know about searching, comparing and booking flights through Collective African Tours &amp; Safaris
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-[#e8e3d9] transition-shadow hover:shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-[#fdfcf9]"
                >
                  <span className="pr-4 font-semibold text-[#2d3530]">{faq.q}</span>
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${openFaq === i ? 'bg-[#a68b52] text-white' : 'bg-[#f7f4ed] text-[#a68b52]'}`}>
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="border-t border-[#e8e3d9] bg-[#fdfcf9] px-6 py-5 text-sm leading-relaxed text-[#5c4d42]/80">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO CONTENT BLOCK ─── */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-[#2d3530]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Book Cheap Flights to Kenya, Tanzania, Uganda &amp; Rwanda
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-[#5c4d42]/75">
            <p>
              Collective African Tours &amp; Safaris (C.A.T.S) offers a comprehensive flight search and comparison service for travellers heading to East Africa and beyond. Whether you are searching for cheap flights to Nairobi, affordable airfares to Dar es Salaam, budget flights to Kilimanjaro, or last-minute deals to Mombasa, Zanzibar, Entebbe or Kigali — our real-time engine compares prices from over 500 airlines and travel agencies to find you the lowest fares.
            </p>
            <p>
              Popular routes include London to Nairobi, Dubai to Nairobi, Istanbul to Nairobi, New York to Nairobi, Mumbai to Dar es Salaam, Paris to Kilimanjaro, Johannesburg to Entebbe, and Doha to Mombasa. We also cover domestic Kenya flights from Nairobi Wilson Airport to Masai Mara, Amboseli, Lamu, Diani, Samburu, and Nanyuki — ideal for fly-in safari packages.
            </p>
            <p>
              With 15 years of East Africa travel expertise, C.A.T.S coordinates international flight arrivals with safari game drives, airport transfers, SGR train connections, beach holiday extensions, gorilla trekking in Uganda and Rwanda, Mount Kilimanjaro and Mount Kenya climbing expeditions, and cultural experiences across the region. Search, compare and book your next flight to Africa today.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#2d3530] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Fly?
          </h2>
          <p className="mb-8 text-lg text-white/60">
            Search hundreds of airlines. Compare real-time fares. Book directly with the supplier.
          </p>
          <button
            onClick={scrollToSearch}
            className="group inline-flex items-center gap-3 rounded-xl bg-[#a68b52] px-12 py-4 text-lg font-semibold text-white shadow-lg shadow-[#a68b52]/20 transition-all hover:-translate-y-0.5 hover:bg-[#b89a5f] hover:shadow-xl"
          >
            Search Flights Now
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
          </button>
        </div>
      </section>
    </>
  );
}
