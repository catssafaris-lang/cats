import Image from 'next/image';
import Link from 'next/link';
import { safaris, getFeaturedSafaris } from '@/data/safaris';

export default function HomePage() {
  const featured = getFeaturedSafaris().slice(0, 6);
  const allSafaris = safaris.slice(0, 12);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center text-white overflow-hidden">
        <Image
          src="https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg"
          alt="Sweeping savannah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-lg font-medium mb-4 tracking-wider uppercase">
            15 Years of Safari Excellence
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Heart of
            <span className="block" style={{ color: '#c4a35a' }}> East Africa</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto mb-10">
            Handcrafted Kenya, Tanzania, Uganda & Rwanda safari experiences — from the Masai Mara to the Serengeti and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[var(--golden-savannah)] text-white font-semibold rounded-full hover:shadow-xl transition-all text-lg"
            >
              Plan My Safari
            </Link>
            <Link
              href="/kenya-safaris"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-lg"
            >
              Explore Safaris
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-[var(--warm-ivory)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--golden-savannah)] font-semibold uppercase tracking-wider mb-3">Explore East Africa</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--forest-canopy)]">
              Iconic Destinations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Masai Mara, Kenya', image: 'https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg', href: '/kenya-safaris' },
              { name: 'Amboseli, Kenya', image: 'https://ik.imagekit.io/axd1riwnv/sunset-at-amboseli-national-300x213.jpg', href: '/kenya-safaris' },
              { name: 'Serengeti, Tanzania', image: 'https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.22.33.jpeg', href: '/tanzania-safaris' },
              { name: 'Ngorongoro, Tanzania', image: 'https://ik.imagekit.io/axd1riwnv/114036745.avif', href: '/tanzania-safaris' },
              { name: 'Zanzibar', image: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/holiday-experiences/zanzibar-beach-holidays' },
              { name: 'Mount Kilimanjaro', image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/mountain-climbing' },
            ].map((dest) => (
              <Link key={dest.name} href={dest.href} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-bold text-xl">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--golden-savannah)] font-semibold uppercase tracking-wider mb-3">Curated Adventures</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--forest-canopy)]">
              Popular Safari Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allSafaris.map((safari) => (
              <Link
                key={safari.slug}
                href={`/safari/${safari.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-stone-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={safari.image}
                    alt={safari.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-stone-700 capitalize">
                      {safari.destination}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[var(--golden-savannah)] rounded-full text-xs font-semibold text-white">
                      {safari.duration} {safari.durationUnit === 'hours' ? 'hrs' : 'Days'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-[var(--golden-savannah)] transition-colors line-clamp-2 mb-2">
                    {safari.title}
                  </h3>
                  <p className="text-sm text-stone-500 mb-4 line-clamp-2">
                    {safari.parks.join(' • ')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--golden-savannah)] font-bold text-lg">
                      From ${safari.priceFrom.toLocaleString()}
                    </span>
                    <span className="text-sm text-stone-400 group-hover:text-[var(--golden-savannah)] group-hover:gap-2.5 flex items-center gap-1.5 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/kenya-safaris"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--forest-canopy)] text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              View All Safaris
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--forest-canopy)] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Safari Adventure?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let our team of East Africa safari experts craft a personalized itinerary just for you. Free quotes, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[var(--golden-savannah)] text-white font-semibold rounded-full hover:shadow-xl transition-all text-lg">
              Request A Free Custom Quote
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
