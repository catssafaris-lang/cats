import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search & Book Flights to East Africa | C.A.T.S Safaris',
  description: 'Search and compare worldwide flights to Kenya, Tanzania, Uganda, and Rwanda. Find the best fares and connect your international journey with a C.A.T.S East Africa safari.',
  keywords: 'flights to Kenya, flights to Nairobi, flights to Tanzania, flights to East Africa, book safari flights, cheap flights Africa',
  alternates: { canonical: '/flight-search' },
};

export default function FlightSearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#5c4d42] px-4 pb-16 pt-40 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a68b52]">
            Commercial Flight Search
          </p>
          <h1 className="mb-5 text-4xl font-bold md:text-6xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Find Your Route to East Africa
          </h1>
          <p className="text-lg leading-relaxed text-white/80">
            Compare worldwide flight options, then let our team coordinate the regional connections that complete your safari.
          </p>
        </div>
      </section>

      {/* Flight Search Widget */}
      <section className="bg-[#f7f4ed] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="min-h-[500px] rounded-2xl bg-white p-4 shadow-sm sm:p-8">
            <iframe
              src="https://www.travelpayouts.com/widgets/3319.html?wl_id=3319"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="auto"
              className="w-full min-h-[460px] rounded-xl"
              title="Flight Search Widget"
              allow="payment"
            />
          </div>

          {/* Fallback / Manual Search CTA */}
          <div className="mx-auto mt-8 max-w-3xl bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <h2 className="mb-4 text-2xl font-bold text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Need Help Finding the Right Flight?
            </h2>
            <p className="leading-relaxed text-stone-700 mb-6">
              Our travel specialists can help you find the best routes and fares to East Africa. We coordinate international flights with domestic connections and safari schedules for a seamless journey.
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

          {/* Plan Your Journey Section */}
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-[#5c4d42]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Plan the Whole Journey
            </h2>
            <p className="leading-relaxed text-stone-700">
              Use the search above for your international flights. If you need help choosing an arrival airport, adding domestic flights, or building a safari around your dates,{' '}
              <a href="mailto:info@catssafaris.com?subject=[Flight Enquiry] Safari Flight Planning" className="font-semibold text-[#a68b52] hover:underline">
                email our team
              </a>{' '}
              and we will help with the details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
