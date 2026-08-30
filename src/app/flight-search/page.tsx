import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Search & Book Flights to East Africa | C.A.T.S Safaris',
  description: 'Search and compare worldwide flights to Kenya, Tanzania, Uganda, and Rwanda. Find the best fares and connect your international journey with a C.A.T.S East Africa safari.',
  keywords: 'flights to Kenya, flights to Nairobi, flights to Tanzania, flights to East Africa, book safari flights, cheap flights Africa',
  alternates: { canonical: '/flight-search' },
};

const routes = [
  { city: 'London', code: 'LHR', country: 'United Kingdom', airlines: 'Kenya Airways, British Airways, Emirates', time: '8h 30m direct', img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Amsterdam', code: 'AMS', country: 'Netherlands', airlines: 'KLM, Kenya Airways', time: '8h 45m direct', img: 'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Paris', code: 'CDG', country: 'France', airlines: 'Kenya Airways, Air France', time: '8h 30m direct', img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Frankfurt', code: 'FRA', country: 'Germany', airlines: 'Lufthansa, Condor', time: '8h 15m direct', img: 'https://images.pexels.com/photos/1124469/pexels-photo-1124469.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Zurich', code: 'ZRH', country: 'Switzerland', airlines: 'Swiss, Edelweiss Air', time: '8h direct', img: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Istanbul', code: 'IST', country: 'Turkey', airlines: 'Turkish Airlines', time: '6h direct', img: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Dubai', code: 'DXB', country: 'UAE', airlines: 'Emirates, flydubai', time: '5h direct', img: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Doha', code: 'DOH', country: 'Qatar', airlines: 'Qatar Airways', time: '5h 15m direct', img: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Abu Dhabi', code: 'AUH', country: 'UAE', airlines: 'Etihad Airways', time: '5h 30m direct', img: 'https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'New York', code: 'JFK', country: 'United States', airlines: 'Kenya Airways (direct), Ethiopian', time: '15h direct', img: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Mumbai', code: 'BOM', country: 'India', airlines: 'Kenya Airways, Ethiopian', time: '5h 30m direct', img: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Bangkok', code: 'BKK', country: 'Thailand', airlines: 'Kenya Airways, Ethiopian, Qatar', time: '9h (1 stop)', img: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Guangzhou', code: 'CAN', country: 'China', airlines: 'Kenya Airways, Ethiopian', time: '12h (1 stop)', img: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { city: 'Johannesburg', code: 'JNB', country: 'South Africa', airlines: 'Kenya Airways, South African Airways', time: '4h direct', img: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const eastAfrica = [
  { city: 'Dar es Salaam', code: 'DAR', country: 'Tanzania', img: 'https://images.pexels.com/photos/18806088/pexels-photo-18806088.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Kilimanjaro', code: 'JRO', country: 'Tanzania', img: 'https://images.pexels.com/photos/8427984/pexels-photo-8427984.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Entebbe', code: 'EBB', country: 'Uganda', img: 'https://images.pexels.com/photos/38101674/pexels-photo-38101674.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Kigali', code: 'KGL', country: 'Rwanda', img: 'https://images.pexels.com/photos/31466702/pexels-photo-31466702.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Zanzibar', code: 'ZNZ', country: 'Tanzania', img: 'https://images.pexels.com/photos/34231432/pexels-photo-34231432.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { city: 'Mombasa', code: 'MBA', country: 'Kenya', img: 'https://images.pexels.com/photos/13418220/pexels-photo-13418220.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function FlightSearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#5c4d42] px-4 pb-16 pt-40 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">
            International Flight Search
          </p>
          <h1 className="mb-5 text-4xl font-bold md:text-6xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Fly to East Africa
          </h1>
          <p className="text-lg leading-relaxed text-white/80">
            Search and compare flights from cities worldwide to Nairobi, Mombasa, Dar es Salaam, Kilimanjaro, Entebbe, and Kigali. Our team coordinates your international arrival with domestic connections and safari schedules.
          </p>
        </div>
      </section>

      {/* Flight Search Widget — embedded whitelabel */}
      <section className="bg-[#f7f4ed] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Search Flights
          </h2>
          <div className="rounded-2xl bg-white shadow-sm overflow-hidden border border-stone-200">
            <iframe
              src="https://flights.catssafaris.com/?locale=en"
              width="100%"
              height="620"
              frameBorder="0"
              scrolling="auto"
              className="w-full min-h-[580px]"
              title="C.A.T.S Safaris Flight Search"
              allow="payment"
              loading="lazy"
            />
          </div>

          {/* Need Help CTA */}
          <div className="mx-auto mt-8 max-w-3xl bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <h2 className="mb-4 text-2xl font-bold text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Need Help Finding the Right Flight?
            </h2>
            <p className="leading-relaxed text-stone-700 mb-6">
              Our travel specialists coordinate international flights with domestic connections and safari schedules for a seamless journey. Flexible booking policies are subject to airline terms and conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@catssafaris.com?subject=[Flight Enquiry] Help Finding Flights to East Africa"
                className="inline-flex items-center gap-2 bg-[#a68b52] hover:bg-[#8a7343] text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Email Our Flight Team
              </a>
              <a
                href="https://wa.me/254723951388?text=Hello%2C%20I%20need%20help%20finding%20flights%20to%20East%20Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#a68b52] text-[#5c4d42] hover:bg-[#a68b52] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* International Routes */}
      <section className="bg-[#f7f4ed] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Direct &amp; Convenient Connections</p>
            <h2 className="text-3xl font-bold text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
              Popular Routes to Nairobi
            </h2>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Jomo Kenyatta International Airport (NBO) is East Africa&apos;s premier hub, served by over 40 international airlines with direct flights from Europe, the Middle East, Asia, and the Americas.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {routes.map((r) => (
              <a
                key={r.code}
                href={`https://flights.catssafaris.com/?origin=${r.code}&destination=NBO&locale=en`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={r.img}
                    alt={`${r.city} skyline`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{r.city}</h3>
                    <p className="text-sm text-white/80">{r.country}</p>
                  </div>
                  <span className="absolute top-3 right-3 bg-white/90 text-[#5c4d42] text-xs font-bold px-2 py-1 rounded-lg">
                    {r.code}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-stone-600 mb-1">{r.airlines}</p>
                  <p className="text-sm font-semibold text-[#a68b52]">{r.time}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#5c4d42] group-hover:text-[#a68b52] transition-colors">
                    Search Flights &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* East African Destinations */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">Beyond Nairobi</p>
            <h2 className="text-3xl font-bold text-[#5c4d42] md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
              East African Destinations
            </h2>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Fly directly to Tanzania, Uganda, or Rwanda — or connect via Nairobi to these safari gateways.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {eastAfrica.map((d) => (
              <a
                key={d.code}
                href={`https://flights.catssafaris.com/?destination=${d.code}&locale=en`}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center rounded-2xl bg-[#f7f4ed] p-4 hover:shadow-md transition-all border border-stone-100"
              >
                <div className="relative mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full">
                  <Image src={d.img} alt={d.city} fill className="object-cover" sizes="80px" />
                </div>
                <h3 className="font-bold text-[#5c4d42] group-hover:text-[#a68b52] transition-colors">{d.city}</h3>
                <p className="text-xs text-stone-500">{d.code} &middot; {d.country}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Through C.A.T.S */}
      <section className="bg-[#5c4d42] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Why Book Through Collective African Tours &amp; Safaris
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-3 text-4xl">&#9992;</div>
              <h3 className="mb-2 text-lg font-bold text-[#a68b52]">Seamless Coordination</h3>
              <p className="text-sm text-white/80">We align international arrivals with domestic flights, ground transfers, and safari departures — one itinerary, zero gaps.</p>
            </div>
            <div>
              <div className="mb-3 text-4xl">&#127757;</div>
              <h3 className="mb-2 text-lg font-bold text-[#a68b52]">15 Years of Expertise</h3>
              <p className="text-sm text-white/80">Our network of trusted partners across East Africa ensures every detail is handled by specialists who know the terrain.</p>
            </div>
            <div>
              <div className="mb-3 text-4xl">&#128222;</div>
              <h3 className="mb-2 text-lg font-bold text-[#a68b52]">24/7 Support</h3>
              <p className="text-sm text-white/80">From the moment you book until you land back home, our team is available by phone, email, or WhatsApp.</p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="mailto:info@catssafaris.com?subject=[Flight Enquiry] Complete Safari & Flight Planning"
              className="inline-flex items-center gap-2 bg-[#a68b52] hover:bg-[#8a7343] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Plan Your Journey With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
