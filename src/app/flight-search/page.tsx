import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Globe, Mail, MapPin, Phone, Plane } from 'lucide-react';

export const metadata: Metadata = {
  title: 'International Flights to East Africa | C.A.T.S Safaris',
  description:
    'Search international flights to Kenya, Nairobi, Tanzania, Uganda, and Rwanda, then connect your journey seamlessly with a C.A.T.S Safaris adventure.',
  keywords:
    'flights to Kenya, flights to Nairobi, international flights East Africa, fly to safari, Kenya Airways, flights to Tanzania, flights to Uganda, flights to Rwanda, safari flights',
  alternates: { canonical: '/flight-search' },
};

const routes = [
  { city: 'London Heathrow', code: 'LHR', airline: 'Kenya Airways, British Airways', time: '~8.5h direct' },
  { city: 'Amsterdam', code: 'AMS', airline: 'KLM', time: '~8h direct' },
  { city: 'Paris CDG', code: 'CDG', airline: 'Kenya Airways', time: '~8.5h direct' },
  { city: 'Frankfurt', code: 'FRA', airline: 'Lufthansa via Addis / connection', time: '~10h' },
  { city: 'Zurich', code: 'ZRH', airline: 'Swiss, Edelweiss', time: '~8.5h direct' },
  { city: 'Istanbul', code: 'IST', airline: 'Turkish Airlines', time: '~6h direct' },
  { city: 'Dubai', code: 'DXB', airline: 'Emirates, flydubai', time: '~5h direct' },
  { city: 'Doha', code: 'DOH', airline: 'Qatar Airways', time: '~5.5h direct' },
  { city: 'Abu Dhabi', code: 'AUH', airline: 'Etihad', time: '~5h direct' },
  { city: 'New York JFK', code: 'JFK', airline: 'Kenya Airways', time: '~15h direct' },
  { city: 'Atlanta', code: 'ATL', airline: 'Via Dubai / Amsterdam', time: '~18h+' },
  { city: 'Mumbai', code: 'BOM', airline: 'Kenya Airways', time: '~5.5h direct' },
  { city: 'Bangkok', code: 'BKK', airline: 'Via Dubai / Doha', time: '~12h+' },
  { city: 'Guangzhou', code: 'CAN', airline: 'Kenya Airways', time: '~11h direct' },
];

const destinations = [
  { name: 'Dar es Salaam', code: 'DAR', detail: 'Gateway to Serengeti and Zanzibar' },
  { name: 'Kilimanjaro', code: 'JRO', detail: 'Mt Kilimanjaro and Northern Tanzania' },
  { name: 'Entebbe', code: 'EBB', detail: 'Uganda and gorilla trekking' },
  { name: 'Kigali', code: 'KGL', detail: 'Rwanda and gorilla trekking' },
  { name: 'Zanzibar', code: 'ZNZ', detail: 'Beaches and spice tours' },
  { name: 'Mombasa', code: 'MBA', detail: 'Kenya coast and Diani Beach' },
];

function searchUrl(origin: string, destination = 'NBO') {
  const originParameter = origin ? `origin_iata=${origin}&` : '';
  return `https://flights.catssafaris.com/?${originParameter}destination_iata=${destination}&currency=usd&language=EN&with_request=true&locale=EN`;
}

export default function FlightSearchPage() {
  return (
    <main className="bg-[#f7f4ed] text-stone-800">
      <section className="bg-[#5c4d42] px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#d5bf88]">
            <Plane className="h-4 w-4" aria-hidden="true" /> Your journey begins here
          </div>
          <h1 className="text-4xl leading-tight text-white md:text-6xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            International Flights to East Africa
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Find exceptional routes to Kenya, Tanzania, Uganda, and Rwanda—then arrive perfectly placed for the safari of a lifetime.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-3 shadow-xl shadow-stone-900/10 sm:p-6">
            <iframe
              src="https://flights.catssafaris.com"
              title="C.A.T.S Safaris flight search"
              className="min-h-[700px] w-full rounded-2xl border-0"
              allow="payment"
              sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
              scrolling="auto"
            />
          </div>
          <p className="mt-4 text-center text-sm text-stone-500">
            Search securely for international and regional flights through our C.A.T.S flight partner.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Plan your arrival</p>
            <h2 className="text-3xl text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Popular routes to Nairobi</h2>
            <p className="mt-4 leading-relaxed text-stone-600">Nairobi (NBO) is East Africa&apos;s leading safari gateway. Explore common international routes, then search your preferred dates.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {routes.map((route) => (
              <article key={route.code} className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a68b52]">To Nairobi</p>
                    <h3 className="mt-1 text-2xl text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>{route.city}</h3>
                  </div>
                  <span className="rounded-lg bg-[#f7f4ed] px-3 py-2 text-sm font-bold tracking-wider text-[#5c4d42]">{route.code}</span>
                </div>
                <div className="mt-5 space-y-3 text-sm text-stone-600">
                  <p className="flex gap-2"><Plane className="mt-0.5 h-4 w-4 shrink-0 text-[#a68b52]" aria-hidden="true" />{route.airline}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-[#a68b52]" aria-hidden="true" />{route.time}</p>
                </div>
                <a href={searchUrl(route.code)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5c4d42] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#a68b52]">
                  Search Flights <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Beyond Nairobi</p>
            <h2 className="text-3xl text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Also fly to East Africa</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.code} className="rounded-2xl border border-stone-200 bg-[#f7f4ed] p-6">
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#a68b52]" aria-hidden="true" /><h3 className="text-xl text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>{destination.name}</h3></div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600"><span className="font-bold text-[#5c4d42]">{destination.code}</span> · {destination.detail}</p>
                <a href={searchUrl('', destination.code)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a68b52] transition hover:text-[#5c4d42]">Search Flights <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Travel, thoughtfully connected</p>
            <h2 className="text-3xl text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Why book through C.A.T.S</h2>
            <p className="mt-5 leading-relaxed text-stone-600">A flight is only the first chapter. Our team helps align each connection with the rhythm of your safari, so your journey into the wild feels effortless.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['International + domestic', 'Coordinate your international arrival with regional flights.'],
              ['Safari schedules', 'Build connections around your lodge, game drive, and transfer times.'],
              ['Bush flights and charters', 'Continue seamlessly to remote camps and reserves.'],
              ['SGR train connections', 'Consider rail connections for a relaxed onward journey.'],
              ['Airport pickup included', 'Every C.A.T.S safari includes a warm welcome at the airport.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-xl border border-stone-200 bg-white p-5">
                <Globe className="h-5 w-5 text-[#a68b52]" aria-hidden="true" />
                <h3 className="mt-3 font-semibold text-[#5c4d42]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-stone-600">{description}</p>
              </div>
            ))}
            <Link href="/kenya-flight-safaris" className="rounded-xl border border-[#a68b52] bg-[#5c4d42] p-5 text-white transition hover:bg-[#a68b52]">
              <Plane className="h-5 w-5 text-[#d5bf88]" aria-hidden="true" /><span className="mt-3 block font-semibold">Explore Kenya flight safaris</span><span className="mt-1 inline-flex items-center gap-2 text-sm text-white/80">View options <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </Link>
          </div>
          <p className="lg:col-start-2 -mt-5 text-sm text-stone-500">For SGR rail schedules and bookings, visit <a href="https://krc.co.ke" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#a68b52] hover:underline">Kenya Railways</a>.</p>
        </div>
      </section>

      <section className="bg-[#5c4d42] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Need a hand with your flight plans?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/80">Speak with a C.A.T.S specialist for thoughtful flight advice and a seamless connection to your safari.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:info@catssafaris.com?subject=%5BFlight%20Enquiry%5D" className="inline-flex items-center gap-2 rounded-xl bg-[#a68b52] px-5 py-3 font-semibold text-white transition hover:bg-[#c0a56d]"><Mail className="h-4 w-4" aria-hidden="true" />Email us</a>
            <a href="tel:+254723951388" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"><Phone className="h-4 w-4" aria-hidden="true" />+254 723 951 388</a>
            <a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"><Phone className="h-4 w-4" aria-hidden="true" />WhatsApp</a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10">Contact C.A.T.S <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
