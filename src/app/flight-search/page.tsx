import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Globe, Mail, MapPin, Phone, Plane } from 'lucide-react';

export const metadata: Metadata = {
  title: 'International Flights to East Africa | C.A.T.S Safaris',
  description: 'Search international and regional flights to East Africa, then connect your journey seamlessly with a C.A.T.S Safaris adventure.',
  keywords: 'flights to Kenya, flights to Nairobi, international flights East Africa, Kenya Airways, flights to Tanzania, flights to Uganda, flights to Rwanda',
  alternates: { canonical: '/flight-search' },
};

const imageSuffix = '?auto=compress&cs=tinysrgb&w=800';

const routes = [
  { city: 'London Heathrow', code: 'LHR', image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg', airline: 'Kenya Airways, British Airways', time: '~8.5h direct' },
  { city: 'Amsterdam', code: 'AMS', image: 'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg', airline: 'KLM', time: '~8h direct' },
  { city: 'Paris CDG', code: 'CDG', image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg', airline: 'Kenya Airways', time: '~8.5h direct' },
  { city: 'Frankfurt', code: 'FRA', image: 'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg', airline: 'Lufthansa', time: '~10h' },
  { city: 'Zurich', code: 'ZRH', image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg', airline: 'Swiss, Edelweiss', time: '~8.5h direct' },
  { city: 'Istanbul', code: 'IST', image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg', airline: 'Turkish Airlines', time: '~6h direct' },
  { city: 'Dubai', code: 'DXB', image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg', airline: 'Emirates, flydubai', time: '~5h direct' },
  { city: 'Doha', code: 'DOH', image: 'https://images.pexels.com/photos/3551355/pexels-photo-3551355.jpeg', airline: 'Qatar Airways', time: '~5.5h direct' },
  { city: 'Abu Dhabi', code: 'AUH', image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg', airline: 'Etihad', time: '~5h direct' },
  { city: 'New York JFK', code: 'JFK', image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg', airline: 'Kenya Airways', time: '~15h direct' },
  { city: 'Atlanta', code: 'ATL', image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg', airline: 'Via Dubai / Amsterdam', time: '~18h+' },
  { city: 'Mumbai', code: 'BOM', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg', airline: 'Kenya Airways', time: '~5.5h direct' },
  { city: 'Bangkok', code: 'BKK', image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg', airline: 'Via Dubai / Doha', time: '~12h+' },
  { city: 'Guangzhou', code: 'CAN', image: 'https://images.pexels.com/photos/2846034/pexels-photo-2846034.jpeg', airline: 'Kenya Airways', time: '~11h direct' },
];

const destinations = [
  { name: 'Dar es Salaam', code: 'DAR', image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg', detail: 'Gateway to Serengeti and Zanzibar' },
  { name: 'Kilimanjaro', code: 'JRO', image: 'https://images.pexels.com/photos/3889916/pexels-photo-3889916.jpeg', detail: 'Mt Kilimanjaro and Northern Tanzania' },
  { name: 'Entebbe', code: 'EBB', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg', detail: 'Uganda gorilla trekking' },
  { name: 'Kigali', code: 'KGL', image: 'https://images.pexels.com/photos/4350201/pexels-photo-4350201.jpeg', detail: 'Rwanda gorilla trekking' },
  { name: 'Zanzibar', code: 'ZNZ', image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg', detail: 'Beaches and spice tours' },
  { name: 'Mombasa', code: 'MBA', image: 'https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg', detail: 'Kenya coast and Diani Beach' },
];

function searchUrl(origin: string, destination = 'NBO') {
  const originParameter = origin ? `origin_iata=${origin}&` : '';
  return `https://flights.catssafaris.com/?${originParameter}destination_iata=${destination}&currency=usd&language=EN&with_request=true&locale=EN`;
}

function FlightCard({ route }: { route: (typeof routes)[number] }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={`${route.image}${imageSuffix}`} alt={`${route.city} city landmark`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 rounded-lg bg-white/95 px-3 py-2 text-sm font-bold tracking-wider text-[#5c4d42]">{route.code}</span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a68b52]">To Nairobi</p>
        <h3 className="mt-1 text-xl text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>{route.city}</h3>
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p className="flex gap-2"><Plane className="mt-0.5 h-4 w-4 shrink-0 text-[#a68b52]" aria-hidden="true" />{route.airline}</p>
          <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-[#a68b52]" aria-hidden="true" />{route.time}</p>
        </div>
        <a href={searchUrl(route.code)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5c4d42] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#a68b52]">Search Flights <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
    </article>
  );
}

export default function FlightSearchPage() {
  return (
    <main className="bg-[#f7f4ed] text-stone-800">
      <section className="bg-[#5c4d42] px-4 pb-20 pt-40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#d5bf88]"><Plane className="h-4 w-4" aria-hidden="true" /> Your journey begins here</div>
          <h1 className="text-4xl leading-tight text-white md:text-6xl" style={{ fontFamily: 'var(--font-playfair)' }}>International Flights to East Africa</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">Find exceptional routes to Kenya, Tanzania, Uganda, and Rwanda, then arrive perfectly placed for the safari of a lifetime.</p>
          <a href="https://flights.catssafaris.com" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#d5bf88] px-7 py-4 text-base font-bold text-[#5c4d42] shadow-lg transition hover:bg-white"><Plane className="h-5 w-5" aria-hidden="true" />Search All Flights<ArrowRight className="h-5 w-5" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Plan your arrival</p><h2 className="text-3xl text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Popular Routes to Nairobi</h2><p className="mt-4 leading-relaxed text-stone-600">Nairobi (NBO) is East Africa&apos;s leading safari gateway. Explore common international routes, then search your preferred dates.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{routes.map((route) => <FlightCard key={route.code} route={route} />)}</div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="mb-9 text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Beyond Nairobi</p><h2 className="text-3xl text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Fly to East Africa</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{destinations.map((destination) => <article key={destination.code} className="group overflow-hidden rounded-2xl border border-stone-200 bg-[#f7f4ed] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"><div className="relative aspect-[16/10] overflow-hidden"><Image src={`${destination.image}${imageSuffix}`} alt={`${destination.name} destination`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute right-3 top-3 rounded-lg bg-white/95 px-3 py-2 text-sm font-bold tracking-wider text-[#5c4d42]">{destination.code}</span></div><div className="p-5"><h3 className="text-xl text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>{destination.name}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{destination.detail}</p><a href={searchUrl('', destination.code)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#a68b52] transition hover:text-[#5c4d42]">Search Flights <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div></article>)}</div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Travel, thoughtfully connected</p><h2 className="text-3xl text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Why Book Through C.A.T.S</h2><p className="mt-5 leading-relaxed text-stone-600">A flight is only the first chapter. Our team helps align each connection with the rhythm of your safari, so your journey into the wild feels effortless.</p></div><div className="grid gap-4 sm:grid-cols-2">{[['International + domestic', 'Coordinate your international arrival with regional flights.'], ['Safari schedules', 'Build connections around your lodge, game drive, and transfer times.'], ['Bush flights and charters', 'Continue seamlessly to remote camps and reserves.'], ['SGR train connections', 'Consider rail connections for a relaxed onward journey.'], ['Airport pickup included', 'Every C.A.T.S safari includes a warm welcome at the airport.']].map(([title, description]) => <div key={title} className="rounded-xl border border-stone-200 bg-white p-5"><Globe className="h-5 w-5 text-[#a68b52]" aria-hidden="true" /><h3 className="mt-3 font-semibold text-[#5c4d42]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-stone-600">{description}</p></div>)}<Link href="/kenya-flight-safaris" className="rounded-xl border border-[#a68b52] bg-[#5c4d42] p-5 text-white transition hover:bg-[#a68b52]"><Plane className="h-5 w-5 text-[#d5bf88]" aria-hidden="true" /><span className="mt-3 block font-semibold">Explore Kenya flight safaris</span><span className="mt-1 inline-flex items-center gap-2 text-sm text-white/80">View options <ArrowRight className="h-4 w-4" aria-hidden="true" /></span></Link></div><p className="lg:col-start-2 -mt-5 text-sm text-stone-500">For SGR rail schedules and bookings, visit <a href="https://krc.co.ke" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#a68b52] hover:underline">Kenya Railways</a>.</p></div></section>

      <section className="bg-[#5c4d42] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center text-white"><h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>Need a hand with your flight plans?</h2><p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/80">Speak with a C.A.T.S specialist for thoughtful flight advice and a seamless connection to your safari.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="mailto:info@catssafaris.com?subject=%5BFlight%20Enquiry%5D" className="inline-flex items-center gap-2 rounded-xl bg-[#a68b52] px-5 py-3 font-semibold text-white transition hover:bg-[#c0a56d]"><Mail className="h-4 w-4" aria-hidden="true" />Email us</a><a href="tel:+254723951388" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"><Phone className="h-4 w-4" aria-hidden="true" />+254 723 951 388</a><a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"><Phone className="h-4 w-4" aria-hidden="true" />WhatsApp</a><a href="https://krc.co.ke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"><MapPin className="h-4 w-4" aria-hidden="true" />SGR Kenya Railways</a></div></div></section>
    </main>
  );
}
