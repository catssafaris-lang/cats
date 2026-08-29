import Image from 'next/image';
import Link from 'next/link';
import { safaris } from '@/data/safaris';
import HomeClient from './HomeClient';

/* ── SEO-rich metadata is in layout.tsx ── */

/* ── Hero Slides ── */
const heroSlides = [
  {
    image: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/360_F_707047866_az9J9SSGiQ94MLRFzySmbVihKtdXWZDh.jpg',
    alt: 'Giraffe in Nairobi National Park with Nairobi city skyline in the background — Kenya urban safari experience',
    tag: 'Nairobi National Park',
    heading: 'Where the Wild\nMeets the City',
    description: 'The only national park on earth set against a modern city skyline. Encounter black rhinos, lions, leopards, and 500+ bird species — all just 15 minutes from downtown Nairobi.',
    cta: { label: 'Explore Nairobi Safaris', href: '/kenya-safaris/nairobi-excursions' },
    secondary: { label: 'Book Half-Day Tour', href: '/safari/nairobi-national-park-half-day-private-tour' },
  },
  {
    image: 'https://images.pexels.com/photos/27722327/pexels-photo-27722327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Pristine white sand beach on the Kenya coast — Diani Beach safari and beach holiday',
    tag: 'Beach Safaris & Coastal Escapes',
    heading: 'Safari to Shoreline\nin a Single Trip',
    description: 'Combine thrilling Big Five game drives with the powdery white sands of Diani Beach and Watamu. Coral reefs, dolphin encounters, and Swahili culture — the perfect bush-to-beach adventure.',
    cta: { label: 'View Beach Packages', href: '/kenya-safaris/bush-beach-safari' },
    secondary: { label: 'Zanzibar Holidays', href: '/holiday-experiences/zanzibar-beach-holidays' },
  },
  {
    image: 'https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg',
    alt: 'Male lion in golden grasslands of the Masai Mara National Reserve — Kenya Big Five safari',
    tag: 'Masai Mara — Africa\'s Greatest Wildlife Arena',
    heading: 'The Great Migration\nAwaits You',
    description: 'Over two million wildebeest, zebra, and gazelle thunder across the Mara River. Lion prides, cheetah families, and leopards in every direction — this is the safari that defines East Africa.',
    cta: { label: 'Masai Mara Safaris', href: '/kenya-safaris/masai-mara-safaris' },
    secondary: { label: 'View 3-Day Package', href: '/safari/3-day-mara-encounter-masai-mara' },
  },
];

/* ── Destinations Grid ── */
const destinations = [
  {
    name: 'Masai Mara',
    country: 'Kenya',
    image: 'https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg',
    href: '/kenya-safaris/masai-mara-safaris',
    description: 'Big Five encounters, the Great Migration, and golden savannah sunsets.',
    packages: 30,
  },
  {
    name: 'Amboseli',
    country: 'Kenya',
    image: 'https://ik.imagekit.io/axd1riwnv/Amboseli-Kenya-the-shoulder-of-Kilimanjaro-scaled.jpg',
    href: '/kenya-safaris/amboseli-safaris',
    description: 'Iconic elephant herds beneath the snow-capped peak of Mount Kilimanjaro.',
    packages: 15,
  },
  {
    name: 'Tsavo',
    country: 'Kenya',
    image: 'https://ik.imagekit.io/axd1riwnv/4-DAYS-3-EXCITING-PARKS-_-TSAVO-WEST-AMBOSELI-TSAVO-EAST-750x420.jpg',
    href: '/kenya-safaris/tsavo-safaris',
    description: 'Kenya\'s largest wilderness — red elephants, Mzima Springs, and volcanic landscapes.',
    packages: 12,
  },
  {
    name: 'Serengeti',
    country: 'Tanzania',
    image: 'https://ik.imagekit.io/axd1riwnv/2.The-Serengeti-and-the-Maasai-Mara.jpg',
    href: '/tanzania-safaris',
    description: 'Endless plains, the Great Migration\'s calving season, and predator-rich grasslands.',
    packages: 10,
  },
  {
    name: 'Ngorongoro Crater',
    country: 'Tanzania',
    image: 'https://ik.imagekit.io/axd1riwnv/114036745.avif',
    href: '/tanzania-safaris',
    description: 'The world\'s largest intact caldera — 25,000 animals in a natural amphitheatre.',
    packages: 8,
  },
  {
    name: 'Diani Beach',
    country: 'Kenya Coast',
    image: 'https://images.pexels.com/photos/27722327/pexels-photo-27722327.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/kenya-safaris/bush-beach-safari',
    description: 'Coral reefs, white sand, Colobus monkeys, and the warmth of Swahili hospitality.',
    packages: 6,
  },
];

/* ── Why Choose Us ── */
const whyChoose = [
  {
    icon: 'shield',
    title: '15 Years of Safari Expertise',
    description: 'Since 2011, our network of trusted local partners has delivered safe, seamless safaris across Kenya, Tanzania, Uganda, and Rwanda — with deep knowledge no algorithm can match.',
  },
  {
    icon: 'route',
    title: '100% Tailor-Made Itineraries',
    description: 'Every safari is handcrafted to your interests, pace, and budget. From Big Five game drives to bush-and-beach combos, gorilla trekking to cultural immersions — your adventure, your way.',
  },
  {
    icon: 'vehicle',
    title: 'Expert Guides & 4x4 Vehicles',
    description: 'Travel in custom safari Land Cruisers with pop-up roofs, led by KPSGA-certified guides who know every waterhole, migration crossing, and secret leopard haunt.',
  },
  {
    icon: 'price',
    title: 'Transparent, Fair Pricing',
    description: 'No hidden fees, no surprise add-ons. Every quote includes park fees, accommodation, meals, and transfers — with Economy to Superior Luxury tiers for every budget.',
  },
  {
    icon: 'globe',
    title: '4 Countries, 174+ Packages',
    description: 'Kenya\'s Masai Mara. Tanzania\'s Serengeti. Uganda\'s gorillas. Rwanda\'s volcanoes. One operator covering East Africa\'s finest wildlife destinations with local expertise everywhere.',
  },
  {
    icon: 'heart',
    title: 'Responsible Tourism',
    description: 'We partner with conservancies, community lodges, and wildlife foundations. Every safari supports local livelihoods and the protection of East Africa\'s extraordinary ecosystems.',
  },
];

/* ── Safari Experience Types ── */
const experienceTypes = [
  { name: 'Big Five Wildlife Safaris', href: '/kenya-safaris', icon: 'binoculars', count: 95 },
  { name: 'Great Migration Safaris', href: '/kenya-safaris/masai-mara-safaris', icon: 'wildebeest', count: 12 },
  { name: 'Bush & Beach Holidays', href: '/kenya-safaris/bush-beach-safari', icon: 'palm', count: 10 },
  { name: 'Mountain Climbing', href: '/mountain-climbing', icon: 'mountain', count: 3 },
  { name: 'Gorilla Trekking', href: '/kenya-uganda-safaris', icon: 'gorilla', count: 8 },
  { name: 'Cultural Experiences', href: '/holiday-experiences', icon: 'culture', count: 15 },
  { name: 'Bird Watching Safaris', href: '/holiday-experiences/bird-watching-safaris-in-kenya-and-tanzania', icon: 'bird', count: 20 },
  { name: 'Kenya-Tanzania Combos', href: '/kenya-tanzania-safaris', icon: 'combo', count: 15 },
];

/* ── Featured Package Picks ── */
function getFeaturedPackages() {
  const slugs = [
    '3-day-mara-encounter-masai-mara',
    'nairobi-national-park-half-day-private-tour',
    '4-day-amboseli-tsavo-west-tsavo-east',
    '7-day-masai-mara-lake-nakuru-amboseli',
    '5-day-zanzibar-beach-holiday',
    '3-day-mount-kilimanjaro-marangu-route',
  ];
  return slugs.map(s => safaris.find(sf => sf.slug === s)).filter(Boolean);
}

/* ── SVG Icons ── */
function FeatureIcon({ type }: { type: string }) {
  const cls = 'h-10 w-10';
  const common = { className: cls, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.3 };
  switch (type) {
    case 'shield': return <svg {...common}><path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" /><path d="m9 12 2 2 4-4" /></svg>;
    case 'route': return <svg {...common}><circle cx="6" cy="7" r="2" /><circle cx="18" cy="17" r="2" /><path d="M8 7h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6" /></svg>;
    case 'vehicle': return <svg {...common}><rect x="2" y="10" width="20" height="7" rx="2" /><path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3M6 17v2M18 17v2" /><circle cx="7" cy="13.5" r="1" /><circle cx="17" cy="13.5" r="1" /></svg>;
    case 'price': return <svg {...common}><path d="M12 2v20M6 6h8a3 3 0 0 1 0 6H6M6 12h10a3 3 0 0 1 0 6H6" /></svg>;
    case 'globe': return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>;
    case 'heart': return <svg {...common}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

function ExpIcon({ type }: { type: string }) {
  const cls = 'h-8 w-8';
  const common = { className: cls, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.3 };
  switch (type) {
    case 'binoculars': return <svg {...common}><circle cx="6" cy="16" r="4" /><circle cx="18" cy="16" r="4" /><path d="M6 12V4h4v8M18 12V4h-4v8M10 16h4" /></svg>;
    case 'wildebeest': return <svg {...common}><path d="M4 16c0-4 3-8 8-8s8 4 8 8M8 8V4M16 8V4M12 16v4M8 20h8" /></svg>;
    case 'palm': return <svg {...common}><path d="M12 22V10M7 3c3 3 5 7 5 7s2-4 5-7M4 8c4 1 8 2 8 2s4-1 8-2M2 14c5-1 10 0 10 0s5-1 10 0" /></svg>;
    case 'mountain': return <svg {...common}><path d="m2 20 7-14 4 6 3-4 6 12H2z" /><path d="m14 12 2-3" /></svg>;
    case 'gorilla': return <svg {...common}><circle cx="12" cy="8" r="5" /><path d="M5 20c0-4 3-7 7-7s7 3 7 7M7 6c-2-1-4 0-4 2M17 6c2-1 4 0 4 2" /></svg>;
    case 'culture': return <svg {...common}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" /></svg>;
    case 'bird': return <svg {...common}><path d="M16 7c0-2-1-4-4-4-2 0-4 2-4 5 0 4 4 6 8 8l4-4c-2-2-4-3-4-5zM4 17l3-1M9 20l1-3" /></svg>;
    case 'combo': return <svg {...common}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

/* ── Stats ── */
const stats = [
  { number: '15+', label: 'Years of Safari Excellence' },
  { number: '174+', label: 'Handcrafted Safari Packages' },
  { number: '4', label: 'East African Countries' },
  { number: '50+', label: 'National Parks & Reserves' },
];

export default function HomePage() {
  const featured = getFeaturedPackages();

  return (
    <main>
      {/* ── HERO SLIDER (client component) ── */}
      <HomeClient slides={heroSlides} />

      {/* ── TRUST STATS BAR ── */}
      <section className="bg-[#3d2b1f] py-10 sm:py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 md:grid-cols-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="font-playfair text-4xl font-bold text-[var(--golden-savannah)] sm:text-5xl">{s.number}</span>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO / ABOUT SECTION ── */}
      <section className="bg-[var(--warm-ivory)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">East Africa&apos;s Trusted Safari Partner</p>
          <h2 className="mt-4 font-playfair text-3xl font-bold text-[#3d2b1f] sm:text-4xl md:text-5xl">
            Handcrafted Safari Experiences Across Kenya, Tanzania, Uganda &amp; Rwanda
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
            Collective African Tours &amp; Safaris (C.A.T.S) is a network of trusted local partners with over 15 years of
            expertise in designing bespoke East African safaris. From the thundering wildebeest crossings of the Masai Mara
            to the snow-capped summit of Mount Kilimanjaro, the pristine beaches of Diani, and the misty forests where
            mountain gorillas roam — we craft journeys that transform travellers into storytellers.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-stone-500">
            Every itinerary is tailor-made: your pace, your interests, your budget. Whether you seek a luxury fly-in safari,
            an affordable group tour, a cultural immersion with the Maasai, or a once-in-a-lifetime gorilla trekking expedition,
            our KPSGA-certified guides and custom 4x4 Land Cruisers ensure an experience that is safe, seamless, and unforgettable.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/about" className="rounded-full bg-[#3d2b1f] px-8 py-3.5 font-semibold text-white transition hover:bg-[#5a3e28]">About Our Team</Link>
            <Link href="/contact" className="rounded-full border-2 border-[#3d2b1f] px-8 py-3.5 font-semibold text-[#3d2b1f] transition hover:bg-[#3d2b1f] hover:text-white">Plan My Safari</Link>
          </div>
        </div>
      </section>

      {/* ── POPULAR DESTINATIONS ── */}
      <section className="bg-[var(--cats-cream)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Top Safari Destinations</p>
            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#3d2b1f] sm:text-4xl">Where Will Your Safari Take You?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">From Kenya&apos;s iconic savannahs to Tanzania&apos;s endless plains and the tropical Kenya coast — explore East Africa&apos;s most extraordinary wildlife destinations.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Link key={dest.name} href={dest.href} className="group relative block h-80 overflow-hidden rounded-2xl shadow-lg">
                <Image src={dest.image} alt={`${dest.name} safari destination — ${dest.description}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 w-full p-6">
                  <span className="inline-block rounded-full bg-[var(--golden-savannah)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">{dest.country}</span>
                  <h3 className="mt-2 font-playfair text-2xl font-bold text-white">{dest.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{dest.description}</p>
                  <p className="mt-2 text-xs font-semibold text-[var(--golden-savannah)]">{dest.packages}+ Packages Available</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE C.A.T.S ── */}
      <section className="bg-[#3d2b1f] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Why Travel With Us</p>
            <h2 className="mt-3 font-playfair text-3xl font-bold text-white sm:text-4xl">The C.A.T.S Safari Difference</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">What sets Collective African Tours &amp; Safaris apart from every other East Africa safari operator.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10">
                <div className="text-[var(--golden-savannah)]"><FeatureIcon type={item.icon} /></div>
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SAFARIS ── */}
      <section className="bg-[var(--warm-ivory)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Bestselling Safari Packages</p>
            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#3d2b1f] sm:text-4xl">Most Popular Safari Experiences</h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">From half-day city safaris to week-long cross-country expeditions — our guests&apos; favourite journeys.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((safari: any) => (
              <Link key={safari.slug} href={`/safari/${safari.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
                <div className="relative h-60 overflow-hidden">
                  <Image src={safari.image} alt={safari.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  {safari.priceFrom && (
                    <div className="absolute right-3 top-3 rounded-full bg-[#3d2b1f] px-4 py-1.5 text-sm font-bold text-[var(--golden-savannah)]">
                      From ${safari.priceFrom.toLocaleString()}
                    </div>
                  )}
                  <div className="absolute left-3 top-3 rounded-full bg-[var(--golden-savannah)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {safari.duration} {safari.durationUnit}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#3d2b1f] transition group-hover:text-[var(--golden-savannah)]">{safari.title}</h3>
                  {safari.parks?.length > 0 && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-stone-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                      {safari.parks.slice(0, 3).join(', ')}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 line-clamp-3">{safari.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[var(--golden-savannah)]">View Itinerary &amp; Pricing →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/kenya-safaris" className="rounded-full bg-[#3d2b1f] px-10 py-4 font-semibold text-white transition hover:bg-[#5a3e28]">Browse All 174+ Safari Packages</Link>
          </div>
        </div>
      </section>

      {/* ── SAFARI EXPERIENCE TYPES ── */}
      <section className="bg-[var(--cats-cream)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">Safari Categories</p>
            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#3d2b1f] sm:text-4xl">Choose Your Safari Style</h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">Whether you dream of Big Five encounters, mountain summits, or tropical beaches — we have the perfect East African adventure for you.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experienceTypes.map((exp) => (
              <Link key={exp.name} href={exp.href} className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md hover:bg-[#3d2b1f]">
                <div className="text-[var(--golden-savannah)] transition group-hover:text-white"><ExpIcon type={exp.icon} /></div>
                <div>
                  <h3 className="font-semibold text-[#3d2b1f] transition group-hover:text-white">{exp.name}</h3>
                  <p className="text-xs text-stone-500 transition group-hover:text-white/70">{exp.count}+ Packages</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMMERSIVE CTA BANNER ── */}
      <section className="relative py-24 sm:py-32">
        <Image
          src="https://ik.imagekit.io/axd1riwnv/BANNER-MASAI-MARA-2026-1024x576.png"
          alt="Golden sunset over the Masai Mara savannah — plan your East Africa safari with C.A.T.S"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Your Dream Safari Starts With a Single Message
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Tell us where you want to go, how long you want to stay, and what you want to see.
            We&apos;ll design a tailor-made itinerary — no obligation, no booking fees, just expert guidance from a team that knows East Africa inside and out.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-[var(--golden-savannah)] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#d0b46c] hover:shadow-xl">Get a Free Safari Quote</Link>
            <a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/25">WhatsApp Us</a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Email: info@catssafaris.com &nbsp;|&nbsp; Phone: +254 723 951 388
          </p>
        </div>
      </section>

      {/* ── SEO CONTENT BLOCK ── */}
      <section className="bg-[var(--warm-ivory)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-playfair text-2xl font-bold text-[#3d2b1f] sm:text-3xl">Kenya Safari Holidays &amp; East Africa Tour Packages — Expert-Led Wildlife Experiences</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-600">
            <p>
              Collective African Tours &amp; Safaris (C.A.T.S) is one of East Africa&apos;s most experienced safari operators,
              offering tailor-made Kenya safari packages, Tanzania wildlife tours, Uganda gorilla trekking safaris, and
              Rwanda primate expeditions. Based in Nairobi with a network of trusted partners across four countries, we
              design every journey around your interests — from affordable group tours to exclusive fly-in luxury safaris.
            </p>
            <p>
              Our Kenya safari holidays cover the country&apos;s most iconic national parks and reserves: the Masai Mara
              (home to the annual Great Migration and unrivalled Big Five game drives), Amboseli National Park (famed
              for its elephant herds and Kilimanjaro views), Tsavo East and West (Kenya&apos;s largest wilderness area),
              Lake Nakuru (flamingos and rhinos), Samburu (rare Northern Five species), and Nairobi National Park — the
              only place on earth where you can photograph a black rhino against a city skyline.
            </p>
            <p>
              Beyond Kenya, we operate cross-border safari packages combining the Masai Mara with Tanzania&apos;s Serengeti
              National Park, Ngorongoro Crater, Tarangire, and Lake Manyara. Our Kenya-Uganda safaris include mountain
              gorilla trekking in Bwindi Impenetrable Forest, while Kenya-Rwanda packages feature Volcanoes National Park
              and golden monkey tracking. Bush-and-beach combos pair thrilling game drives with the white-sand shores of
              Diani Beach, Watamu, and Zanzibar.
            </p>
            <p>
              Every C.A.T.S safari includes KPSGA-certified guides, custom 4x4 Land Cruisers with pop-up roofs,
              handpicked accommodation from Economy to Superior Luxury, all park and conservancy fees, full-board meals,
              and airport/hotel transfers. We also offer domestic flight safaris, SGR train bookings, mountain climbing
              expeditions on Mount Kilimanjaro and Mount Kenya, and specialised bird-watching safaris across 60+ Important
              Bird Areas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
