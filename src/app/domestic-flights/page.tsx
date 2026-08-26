import type { Metadata } from 'next';
import DomesticFlightForm from './DomesticFlightForm';

export const metadata: Metadata = {
  title: 'Domestic and Bush Flights in East Africa',
  description: 'Arrange SafariLink, AirKenya, Fly540 and Coastal Aviation bush flights and private charters for your East Africa safari.',
  alternates: { canonical: '/domestic-flights' },
};

const airlines = ['SafariLink', 'AirKenya', 'Fly540', 'Coastal Aviation'];

export default function DomesticFlightsPage() {
  return <>
    <section className="bg-[var(--forest-canopy)] px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Bush flight bookings</p><h1 className="font-playfair mb-5 text-4xl font-bold md:text-6xl">Spend less time on the road</h1><p className="text-lg leading-relaxed text-white/80">Connect Nairobi, the coast and East Africa&apos;s remote camps by scheduled safari flight or private charter.</p></div></section>
    <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 grid gap-8 lg:grid-cols-2"><div><h2 className="font-playfair mb-4 text-3xl font-bold text-[var(--forest-canopy)]">Flight connections made simple</h2><p className="leading-relaxed text-stone-700">Our team checks routes and timings against your safari itinerary, then coordinates the practical details around airstrips, baggage and transfers.</p></div><div className="grid grid-cols-2 gap-3">{airlines.map((airline) => <div key={airline} className="rounded-xl bg-white p-4 text-center font-semibold text-[var(--forest-canopy)] shadow-sm">{airline}</div>)}</div></div><div className="mx-auto max-w-4xl"><h2 className="font-playfair mb-6 text-3xl font-bold text-[var(--forest-canopy)]">Request bush flight options</h2><DomesticFlightForm /></div></div></section>
  </>;
}
