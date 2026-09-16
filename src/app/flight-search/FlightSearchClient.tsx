'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WL_ID = '3319';
const MARKER = '241052';
const TRS = '486464';

const eastAfrica = [
  { city: 'Dar es Salaam', code: 'DAR', country: 'Tanzania', img: 'https://images.pexels.com/photos/18806088/pexels-photo-18806088.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Kilimanjaro', code: 'JRO', country: 'Tanzania', img: 'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Entebbe', code: 'EBB', country: 'Uganda', img: 'https://images.pexels.com/photos/38101674/pexels-photo-38101674.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Kigali', code: 'KGL', country: 'Rwanda', img: 'https://images.pexels.com/photos/31466702/pexels-photo-31466702.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Zanzibar', code: 'ZNZ', country: 'Tanzania', img: 'https://images.pexels.com/photos/34231432/pexels-photo-34231432.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Mombasa', code: 'MBA', country: 'Kenya', img: 'https://images.pexels.com/photos/13418220/pexels-photo-13418220.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

function getAviasalesUrl(origin: string, dest: string) {
  const today = new Date();
  const dep = new Date(today);
  dep.setDate(dep.getDate() + 30);
  const ret = new Date(dep);
  ret.setDate(ret.getDate() + 14);
  const ddmm = (d: Date) => String(d.getDate()).padStart(2, '0') + String(d.getMonth() + 1).padStart(2, '0');
  return `https://www.aviasales.com/search/${origin}${ddmm(dep)}${dest}${ddmm(ret)}1?marker=${MARKER}.${TRS}`;
}

export default function FlightSearchClient() {
  const [wlLoaded, setWlLoaded] = useState(false);
  const [wlFailed, setWlFailed] = useState(false);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    /* Set TravelPayouts WL config globals */
    (window as any).TPWL_CONFIGURATION = {
      version: 'v2',
      ab_flag: '',
      ab_variant: '',
      ab_evaluation_id: '',
    };
    (window as any).TPWL_EXTRA = {
      currency: 'USD',
      marker: MARKER,
      trs: TRS,
      domain: 'flights.catssafaris.com',
      locale: 'EN',
      link_color: 'a68b52',
    };

    /* Load the WL Web script */
    const script = document.createElement('script');
    script.src = `https://tpscr.com/wl_web/main.js?wl_id=${WL_ID}`;
    script.async = true;
    script.onload = () => setWlLoaded(true);
    script.onerror = () => setWlFailed(true);
    document.head.appendChild(script);

    /* Fallback timeout — if search form doesn't render in 12s */
    const timer = setTimeout(() => {
      const searchEl = document.getElementById('tpwl-search');
      if (!searchEl || searchEl.children.length === 0) {
        setWlFailed(true);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#3b2f1e] px-4 pb-10 pt-36 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">
            C.A.T.S Flight Search
          </p>
          <h1 className="mb-4 text-3xl font-bold md:text-5xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Search, Compare &amp; Book Flights
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80">
            Find the best fares from hundreds of airlines and travel agencies worldwide. Compare prices, choose your preferred flight, and book directly with the supplier.
          </p>
        </div>
      </section>

      {/* TravelPayouts WL Search — renders natively on this page */}
      <section className="bg-[#f7f4ed]">
        {/* Search form container — TP script renders the form here */}
        <div
          className="tpwl-search-header"
          style={{
            padding: '24px 16px',
            backgroundColor: '#5c4d42',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 0 auto', maxWidth: 1240 }}>
              <div id="tpwl-search" />
            </div>
          </div>
        </div>

        {/* Results container — TP script renders results here */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 16px',
            minHeight: 200,
          }}
        >
          <div style={{ flex: '1 0 auto', maxWidth: 1240 }}>
            <div id="tpwl-tickets" />
          </div>
        </div>

        {/* Loading state */}
        {!wlLoaded && !wlFailed && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#a68b52] border-t-transparent" />
            <p className="text-[#5c4d42]/70">Loading flight search...</p>
          </div>
        )}

        {/* Fallback — if WL fails to load (geo-blocked, network issue) */}
        {wlFailed && (
          <div className="mx-auto max-w-4xl px-4 py-12 text-center">
            <div className="mb-6 rounded-xl border border-[#a68b52]/30 bg-white p-8 shadow-md">
              <h2 className="mb-3 text-2xl font-bold text-[#3b2f1e]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Search Flights on Aviasales
              </h2>
              <p className="mb-6 text-[#5c4d42]/80">
                The embedded flight search is temporarily unavailable in your region. Use the links below to search flights directly — your booking still supports C.A.T.S Safaris.
              </p>
              <a
                href={`https://www.aviasales.com/?marker=${MARKER}.${TRS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#a68b52] px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-[#8a7343]"
              >
                Open Aviasales Flight Search
              </a>
            </div>
          </div>
        )}
      </section>

      {/* East African Destinations — link to pre-filled searches, NOT external redirect */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-[#3b2f1e]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Popular East African Destinations
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-[#5c4d42]/80">
            Click any destination to search available flights. Connect your international arrival with a{' '}
            <Link href="/kenya-safaris" className="text-[#a68b52] underline hover:text-[#8a7343]">C.A.T.S safari</Link>.
          </p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {eastAfrica.map((dest) => (
              <a
                key={dest.code}
                href={getAviasalesUrl('LON', dest.code)}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={dest.img}
                    alt={`Flights to ${dest.city}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-bold text-[#3b2f1e]">{dest.city}</h3>
                  <p className="text-xs text-[#5c4d42]/60">{dest.country}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / CTA */}
      <section className="bg-[#3b2f1e] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Need Help Planning Your Journey?
          </h2>
          <p className="mb-8 text-white/80">
            Our travel consultants coordinate international flights with safari schedules, domestic transfers, and accommodation across East Africa. Over 15 years of expertise at your service.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-[#a68b52] px-8 py-3 font-semibold text-white shadow-md transition hover:bg-[#8a7343]"
            >
              Contact Our Team
            </Link>
            <Link
              href="/kenya-flight-safaris"
              className="rounded-lg border-2 border-white/40 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Fly-In Safari Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Global WL CSS overrides for CATS branding */}
      <style jsx global>{`
        :root {
          --tpwl-font-family: 'Inter', sans-serif;
          --tpwl-headline-text: #3b2f1e;
          --tpwl-links: #a68b52;
          --tpwl-main-text: #3b2f1e;
          --tpwl-search-form-background: #5c4d42;
          --tpwl-search-result-background: #f7f4ed;
        }
        .tpwl-logo-header { display: none !important; }
        .tpwl-footer__wrapper { display: none !important; }
        .tpwl-cookie-banner { z-index: 999 !important; }
        .tpwl-widgets__wrapper { display: none !important; }
        #tpwl-search { min-height: 60px; }
      `}</style>
    </>
  );
}
