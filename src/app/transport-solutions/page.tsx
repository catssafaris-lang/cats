import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transport Solutions Kenya | Car Hire, Leasing & Airport Transfers | C.A.T.S Safaris',
  description: 'Premium transport solutions across Kenya and East Africa — corporate car hire, long-term vehicle leasing, airport transfers, safari vehicles, and SGR train bookings. Self-drive or chauffeur-driven.',
  keywords: 'car hire Kenya, vehicle leasing Nairobi, airport transfer Kenya, safari vehicle rental, chauffeur service Nairobi, corporate car hire East Africa, fleet leasing Kenya',
  alternates: { canonical: '/transport-solutions' },
};

const carHireFeatures = [
  'Self-Drive & Chauffeur',
  'Daily / Weekly / Monthly',
  'GPS Tracking',
  'Fuel Plans Available',
  'Insurance Included',
  'Airport Delivery',
];

const leasingFeatures = [
  '3 / 6 / 12 Month Terms',
  'Maintained & Insured',
  'Replacement Guarantee',
  'Dedicated Account Manager',
  'Fleet Branding Available',
  'Nationwide Coverage',
];

const services = [
  {
    title: 'Airport Transfers',
    description: 'Meet-and-greet transfers from Jomo Kenyatta International Airport (JKIA), Wilson Airport, Kilimanjaro, Zanzibar, Entebbe, and other regional airports. Professional drivers, flight tracking, and 24/7 availability.',
  },
  {
    title: 'Safari Vehicles',
    description: 'Comfortable 4×4 Land Cruisers and minivans with pop-up roofs, experienced driver-guides, and all permits. Purpose-built for Kenya\'s national parks, conservancies, and cross-border safaris.',
  },
  {
    title: 'SGR Train Booking',
    description: 'Travel between Nairobi and Mombasa aboard the Madaraka Express — First Class and Economy. We handle ticketing and coordinate seamless transfers at both terminals.',
  },
];

export default function TransportSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden text-white">
        <Image
          src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Safari vehicle on a scenic road through East Africa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">
            Getting You There
          </p>
          <h1 className="max-w-3xl text-5xl font-bold md:text-7xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Transport Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            From airport arrivals to cross-country safaris, every journey is built around your schedule and budget.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-[var(--forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                {svc.title}
              </h2>
              <p className="leading-relaxed text-stone-600">{svc.description}</p>
              {svc.title === 'SGR Train Booking' && (
                <a
                  href="https://krc.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-semibold text-[var(--golden-savannah)] hover:underline"
                >
                  Visit Kenya Railways &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Car Hire */}
      <section className="px-4 py-4 sm:px-6 lg:px-8 bg-[var(--warm-ivory)]">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl min-h-[500px] flex items-end">
            <Image
              src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Modern corporate vehicles in a city setting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/60 to-sky-900/30" />
            <div className="relative z-10 p-8 sm:p-12 max-w-2xl">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Need a premium vehicle for a day, a week, or an entire project? Our corporate car hire service puts you behind the wheel of late-model SUVs, executive sedans, and luxury MPVs — self-drive or with a professional chauffeur. Perfect for NGO field operations, diplomatic missions, conference logistics, and business travel across Kenya and East Africa.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {carHireFeatures.map((f) => (
                  <span key={f} className="rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white">
                    {f}
                  </span>
                ))}
              </div>
              <a
                href="mailto:info@catssafaris.com?subject=[C.A.T.S Transport] Corporate Car Hire Enquiry"
                className="inline-flex items-center gap-2 text-lg font-semibold text-[var(--golden-savannah)] hover:text-white transition-colors"
              >
                Enquire Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Leasing */}
      <section className="px-4 py-4 pb-16 sm:px-6 lg:px-8 bg-[var(--warm-ivory)]">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl min-h-[500px] flex items-end">
            <Image
              src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Vehicle fleet management and leasing documents"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-stone-900/20" />
            <div className="relative z-10 p-8 sm:p-12 max-w-2xl">
              <p className="text-white/90 text-lg leading-relaxed mb-2">
                Long-term vehicle solutions for tour operators, hotels, schools, embassies, and organisations operating across Nairobi, Mombasa, and upcountry Kenya.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Attractive vehicles — maintained, insured, and delivered to your doorstep. Ideal for tour operators, hotels, schools, embassies, and organisations operating across Nairobi, Mombasa, and upcountry Kenya.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {leasingFeatures.map((f) => (
                  <span key={f} className="rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white">
                    {f}
                  </span>
                ))}
              </div>
              <a
                href="mailto:info@catssafaris.com?subject=[C.A.T.S Transport] Vehicle Leasing Enquiry"
                className="inline-flex items-center gap-2 text-lg font-semibold text-[var(--golden-savannah)] hover:text-white transition-colors"
              >
                Get a Leasing Quote &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">Our Fleet</p>
            <h2 className="text-4xl font-bold text-[var(--forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Comfort for every stretch
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <Image src="https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Safari-ready 4x4 vehicle" fill className="object-cover" />
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <Image src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Road journey through scenic landscape" fill className="object-cover" />
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <Image src="https://images.pexels.com/photos/1389339/pexels-photo-1389339.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Travel route through East Africa" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-block rounded-full bg-[var(--golden-savannah)] px-7 py-3.5 font-semibold text-white hover:shadow-lg transition-shadow">
              Arrange your transfers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
