import Image from 'next/image';
import Link from 'next/link';
import { safaris, getFeaturedSafaris } from '@/data/safaris';

const destinations = [
  { name: 'Masai Mara, Kenya', image: 'https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg', href: '/kenya-safaris' },
  { name: 'Amboseli, Kenya', image: 'https://ik.imagekit.io/axd1riwnv/sunset-at-amboseli-national-300x213.jpg', href: '/kenya-safaris' },
  { name: 'Serengeti, Tanzania', image: 'https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.22.33.jpeg', href: '/tanzania-safaris' },
  { name: 'Ngorongoro, Tanzania', image: 'https://ik.imagekit.io/axd1riwnv/114036745.avif', href: '/tanzania-safaris' },
  { name: 'Zanzibar', image: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/holiday-experiences/zanzibar-beach-holidays' },
  { name: 'Mount Kilimanjaro', image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/mountain-climbing' },
];

const stats = [
  { number: '15+', label: 'Years Experience', icon: 'calendar' },
  { number: '500+', label: 'Safaris Completed', icon: 'check' },
  { number: '4', label: 'Countries Covered', icon: 'globe' },
  { number: '100%', label: 'Tailor-Made', icon: 'heart' },
];

function StatIcon({ type }: { type: string }) {
  const common = { className: 'h-7 w-7', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5 };
  if (type === 'calendar') return <svg {...common}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
  if (type === 'check') return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></svg>;
  if (type === 'globe') return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9s-1.1 6.5-3.3 9c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" /></svg>;
  return <svg {...common}><path d="M20.8 8.7c0 5.3-8.8 11-8.8 11s-8.8-5.7-8.8-11A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.7Z" /></svg>;
}

export default function HomePage() {
  const allSafaris = safaris.slice(0, 12);
  // Keep the curated data source available for future homepage refinements.
  getFeaturedSafaris();

  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
        <Image src="https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg" alt="Lion on the Masai Mara savannah" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--golden-savannah)] sm:text-base">15 Years of Safari Excellence</p>
          <h1 className="font-playfair text-5xl font-semibold leading-[1.08] sm:text-6xl md:text-8xl">Discover the Heart of <span className="block text-[var(--golden-savannah)]">East Africa</span></h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">Handcrafted Kenya, Tanzania, Uganda &amp; Rwanda safari experiences — from the Masai Mara to the Serengeti and beyond.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-[var(--golden-savannah)] px-8 py-4 font-semibold text-white transition hover:bg-[#d0b46c] hover:shadow-xl">Plan My Safari</Link>
            <Link href="/kenya-safaris" className="rounded-full border border-white/70 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">Explore Safaris</Link>
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-0 right-0 z-10 h-20 text-[var(--cats-cream)]">
          <svg className="h-full w-full" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 55c180 55 330-25 540 5 220 31 340 48 520 10 160-34 250-34 380 4v27H0Z" /></svg>
        </div>
      </section>

      <section className="bg-[var(--cats-cream)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => <div key={stat.label} className="flex flex-col items-center text-center"><div className="mb-4 text-[var(--golden-savannah)]"><StatIcon type={stat.icon} /></div><div className="font-playfair text-4xl font-semibold text-[var(--golden-savannah)]">{stat.number}</div><p className="mt-2 text-sm text-stone-600">{stat.label}</p></div>)}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Explore East Africa</p><h2 className="font-playfair text-4xl font-semibold text-[var(--forest-canopy)] sm:text-5xl">Iconic Destinations</h2><div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[var(--golden-savannah)]" /></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{destinations.map((destination) => <Link key={destination.name} href={destination.href} className="group relative h-80 overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl"><Image src={destination.image} alt={destination.name} fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /><h3 className="absolute bottom-6 left-6 text-xl font-bold text-white">{destination.name}</h3></Link>)}</div>
        </div>
      </section>

      <section className="bg-[var(--warm-ivory)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6"><div className="mb-12 text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Curated Adventures</p><h2 className="font-playfair text-4xl font-semibold text-[var(--forest-canopy)] sm:text-5xl">Popular Safari Packages</h2><div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[var(--golden-savannah)]" /></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{allSafaris.map((safari) => <article key={safari.slug} className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"><Link href={`/safari/${safari.slug}`} className="relative block h-56 overflow-hidden"><Image src={safari.image} alt={safari.title} fill className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize text-[var(--driftwood)]">{safari.destination.replace('-', ' & ')}</span><span className="absolute right-4 top-4 rounded-full bg-[var(--golden-savannah)] px-3 py-1 text-xs font-semibold text-white">{safari.duration} {safari.durationUnit}</span></Link><div className="p-6"><Link href={`/safari/${safari.slug}`}><h3 className="line-clamp-2 text-lg font-bold text-[var(--forest-canopy)] transition group-hover:text-[var(--golden-savannah)]">{safari.title}</h3></Link><p className="mt-3 line-clamp-1 text-sm text-stone-500">{safari.parks.join(' • ')}</p><div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-5"><p className="font-bold text-[var(--golden-savannah)]">From ${safari.priceFrom.toLocaleString()}</p><Link href={`/safari/${safari.slug}`} className="text-sm font-semibold text-[var(--forest-canopy)] transition hover:text-[var(--golden-savannah)]">View Details <span aria-hidden="true">→</span></Link></div></div></article>)}</div>
          <div className="mt-12 text-center"><Link href="/kenya-safaris" className="inline-flex rounded-full bg-[var(--forest-canopy)] px-8 py-4 font-semibold text-white transition hover:bg-[var(--cats-green)]">View All Safaris</Link></div>
        </div>
      </section>

      <section className="bg-[var(--forest-canopy)] px-6 py-20 text-center text-white sm:py-24"><div className="mx-auto max-w-3xl"><h2 className="font-playfair text-4xl font-semibold sm:text-5xl">Ready for Your Safari Adventure?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Tell us what inspires you and our safari specialists will craft a personalised journey, with a free custom quote and no obligation.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><Link href="/contact" className="rounded-full bg-[var(--golden-savannah)] px-8 py-4 font-semibold text-white transition hover:bg-[#d0b46c]">Request A Free Custom Quote</Link><Link href="/contact" className="rounded-full border border-white/70 px-8 py-4 font-semibold text-white transition hover:bg-white/15">Contact Us</Link></div></div></section>
    </main>
  );
}
