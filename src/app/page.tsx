import Image from 'next/image';
import Link from 'next/link';
import { safaris } from '@/data/safaris';
import HomeClient from './HomeClient';

const heroSlides = [
  { image: 'https://images.pexels.com/photos/14896671/pexels-photo-14896671.jpeg', alt: 'Giraffe in Nairobi National Park', tag: 'Day Trip \u2022 8 Hours', heading: 'Nairobi National Park', description: 'Experience an urban safari in the only national park within a capital city. Spot lions, rhinos, and giraffes just minutes from downtown Nairobi.', cta: { label: 'Explore Day Trips', href: '/kenya-safaris/nairobi-excursions' }, secondary: { label: 'Book Now', href: '/safari/nairobi-national-park-half-day-private-tour' } },
  { image: 'https://ik.imagekit.io/axd1riwnv/2%20migration.jpg', alt: 'Wildebeest crossing Mara River during the Great Migration', tag: '3 Days \u2022 Masai Mara', heading: '3 Day Masai Mara', description: 'Witness the Great Wildebeest Migration, Big Five wildlife, and legendary Mara sunsets in one unforgettable safari.', cta: { label: 'View Masai Mara Safaris', href: '/kenya-safaris/masai-mara' }, secondary: { label: 'Book Now', href: '/safari/3-day-mara-encounter-masai-mara' } },
  { image: 'https://ik.imagekit.io/axd1riwnv/Amboseli-Kenya-the-shoulder-of-Kilimanjaro-scaled.jpg', alt: 'Elephants beneath Kilimanjaro in Amboseli', tag: '3 Days \u2022 Amboseli', heading: '3 Day Amboseli', description: 'Walk among the largest elephant herds in Africa with the snow-capped peak of Mount Kilimanjaro painting the horizon.', cta: { label: 'Explore Amboseli', href: '/kenya-safaris/amboseli' }, secondary: { label: 'Book Now', href: '/safari/3-day-amboseli-big-five-encounter' } },
  { image: 'https://images.pexels.com/photos/27722327/pexels-photo-27722327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Diani Beach Kenya coast', tag: 'Beach Extensions', heading: 'Beach Safari Extensions', description: 'Combine thrilling Big Five game drives with the powdery white sands of Diani Beach, Watamu, and Zanzibar.', cta: { label: 'View Beach Packages', href: '/kenya-safaris/kenya-and-diani' }, secondary: { label: 'Zanzibar Holidays', href: '/kenya-safaris/zanzibar' } },
];

const exploreDestinations = [
  { title: 'Kenya Safaris', desc: 'Masai Mara, Amboseli, Tsavo & more iconic parks', image: 'https://ik.imagekit.io/axd1riwnv/2%20migration.jpg', href: '/kenya-safaris' },
  { title: 'Tanzania Safaris', desc: 'Serengeti, Ngorongoro & Tarangire adventures', image: 'https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg', href: '/tanzania-safaris' },
  { title: 'Beach Holidays', desc: 'Diani, Zanzibar & coastal paradise escapes', image: 'https://images.pexels.com/photos/27722327/pexels-photo-27722327.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/kenya-safaris/kenya-and-diani' },
  { title: 'Mountain Climbing', desc: 'Kilimanjaro & Mt. Kenya summit adventures', image: 'https://ik.imagekit.io/axd1riwnv/Kenya_SouthEastChyuluHills_GreatPlainsOlDonyo_WildlifeGiraffeKilimanjaro1-1-2-750x450.jpg', href: '/mountain-climbing' },
];

const safariCategories = [
  { title: 'NAIROBI EXCURSIONS', image: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg', description: 'C.A.T.S Safaris offers you full and half-day excursions & trips from Nairobi.', href: '/kenya-safaris/nairobi-excursions', cta: 'View Nairobi Excursions & Daytrips' },
  { title: 'KENYA SAFARI FROM NAIROBI', image: 'https://ik.imagekit.io/axd1riwnv/4-days-tsavo-eastamboseli-salt-lick-reserve-kenya_Ma8DJ.jpeg', description: 'Explore our multi-day Kenya safari adventures ranging from 2 \u2013 12 days from Nairobi.', href: '/kenya-safaris/short-safaris', cta: 'View Kenya Safaris from Nairobi' },
  { title: 'NAIROBI TO DIANI BEACH SAFARIS', image: 'https://ik.imagekit.io/axd1riwnv/5-days-amboseli-lake-nakuru-an17368567244.webp', description: "Enjoy a Kenya wildlife safari then finish up your holiday at Kenya's Diani Beach.", href: '/kenya-safaris/nairobi-to-diani', cta: 'View Nairobi to Diani Beach Safaris' },
  { title: 'DIANI BEACH KENYA SAFARIS', image: 'https://images.pexels.com/photos/27722327/pexels-photo-27722327.jpeg?auto=compress&cs=tinysrgb&w=800', description: "Explore our Kenya safaris from beach resorts of Diani \u2013 voted Africa's leading beach destination.", href: '/kenya-safaris/kenya-and-diani', cta: 'View Kenya Safaris from Diani Beach' },
  { title: 'AMBOSELI KENYA SAFARIS', image: 'https://ik.imagekit.io/axd1riwnv/10-reasons-to-visit-amboseli-national-park-1.jpg', description: 'Explore Amboseli \u2013 famous for large herds of elephants and scenic views of Mount Kilimanjaro.', href: '/kenya-safaris/amboseli', cta: 'View Amboseli Kenya Safaris' },
  { title: 'KENYA FLIGHT SAFARIS', image: 'https://ik.imagekit.io/axd1riwnv/161Kenya_Day3m.jpg', description: 'Book Kenya flight Safaris and explore Masai Mara, Amboseli, Samburu & Lewa Conservancy.', href: '/kenya-flight-safaris', cta: 'View Kenya Flight Safaris' },
  { title: 'MASAI MARA KENYA SAFARIS', image: 'https://ik.imagekit.io/axd1riwnv/2%20migration.jpg', description: 'Masai Mara is home of the Great Wildebeest Migration, Big Five of Africa, Big cats, Masai culture etc.', href: '/kenya-safaris/masai-mara', cta: 'View Masai Mara Kenya Safaris' },
  { title: 'KENYA BEACH TO NAIROBI SAFARIS', image: 'https://ik.imagekit.io/axd1riwnv/4-days-Amboseli-Taita-hills-and-Tsavo-east-safari.jpg', description: 'Book Exciting African safaris starting from/to the beautiful Diani beach resorts.', href: '/kenya-safaris/beach-to-nairobi', cta: 'View Safaris from Kenya Beach' },
  { title: 'KENYA-TANZANIA SAFARIS', image: 'https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg', description: 'Experience wildlife parks, private conservancies, beaches and mountains of Kenya & Tanzania.', href: '/kenya-tanzania-safaris', cta: 'View Combined Kenya & Tanzania Safaris' },
  { title: 'KENYA SAFARI & DIANI BEACH', image: 'https://ik.imagekit.io/axd1riwnv/Boat-safari-Lake-Naivasha-hippo-28229-scaled.jpg', description: 'Experience the best of both worlds \u2013 a thrilling Kenya safari and a dream Diani beach vacation.', href: '/kenya-safaris/safaris-from-diani', cta: 'View Kenya Safari + Diani Tours' },
  { title: 'KENYA SHORT GROUP SAFARIS', image: 'https://ik.imagekit.io/axd1riwnv/4-days-masai-mara-and-lake-nakuru-park-group-joining-landcruiser_Urf4r.jpeg', description: 'Join our exciting Kenya short Group safari Tours from Nairobi in 4x4 safari jeeps.', href: '/kenya-safaris/group-tours-nairobi', cta: 'View Kenya Group Joining Safaris' },
  { title: 'TANZANIA SAFARI HOLIDAYS', image: 'https://ik.imagekit.io/axd1riwnv/Ngorongoro-crater3.jpg', description: 'Exciting 4x4 Tanzania safaris from Arusha town. Explore Serengeti, Ngorongoro, Manyara & Tarangire.', href: '/tanzania-safaris', cta: 'View Tanzania Safari Tours' },
  { title: 'ZANZIBAR BEACH HOLIDAYS', image: 'https://images.pexels.com/photos/34231432/pexels-photo-34231432.jpeg?auto=compress&cs=tinysrgb&w=800', description: "Pre/post your African safari holiday in Kenya & Tanzania, enjoy a beach holiday at Africa's leading beach destination \u2013 Zanzibar!", href: '/kenya-safaris/zanzibar', cta: 'View Zanzibar Beach Vacations' },
  { title: 'MOUNTAIN CLIMBING ADVENTURES', image: 'https://ik.imagekit.io/axd1riwnv/Kenya_SouthEastChyuluHills_GreatPlainsOlDonyo_WildlifeGiraffeKilimanjaro1-1-2-750x450.jpg', description: 'Best Africa mountain climbing adventure tour. Climb Mount Kenya and Mount Kilimanjaro (Roof of Africa).', href: '/mountain-climbing', cta: 'View Mountain Climbing Tours' },
  { title: 'EAST AFRICA BEACH HOLIDAYS', image: 'https://images.pexels.com/photos/13418220/pexels-photo-13418220.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Best family-friendly beach holidays on the sandy beaches of Mombasa, Diani, Malindi, Watamu, Lamu & Zanzibar.', href: '/kenya-safaris/kenya-and-diani', cta: 'View Memorable Beach Holidays' },
  { title: 'KENYA-UGANDA GORILLA SAFARIS', image: 'https://images.pexels.com/photos/38294718/pexels-photo-38294718.jpeg?auto=compress&cs=tinysrgb&w=800', description: "Combine Kenya wildlife safaris with mountain gorilla trekking in Uganda's Bwindi Impenetrable Forest.", href: '/kenya-uganda-safaris', cta: 'View Kenya-Uganda Safaris' },
  { title: 'KENYA-RWANDA GORILLA SAFARIS', image: 'https://images.pexels.com/photos/38294705/pexels-photo-38294705.jpeg?auto=compress&cs=tinysrgb&w=800', description: "Explore Kenya's Big Five parks, then trek to see mountain gorillas and golden monkeys in Rwanda.", href: '/kenya-rwanda-safaris', cta: 'View Kenya-Rwanda Safaris' },
  { title: 'AFRICA SAFARI EXPERIENCES', image: 'https://ik.imagekit.io/axd1riwnv/Africa-Kenya-Masai-Mara-Cheetah-on-termite-mound.jpg', description: 'You came to Africa to live an experience \u2013 to see the Big 5, Big cats, wildebeest migration & so much more!', href: '/holiday-experiences', cta: 'Explore Africa Safari Experiences' },
];

const curatedExperiences = [
  { title: 'Masai Mara Hot Air Balloon Safari', desc: 'Experience the ultimate perspective as you rise above the earth on a hot air balloon safari. The Masai Mara unfolds beneath you \u2014 thousands of wildebeest, golden grasslands, and a champagne bush breakfast awaiting your landing.', image: 'https://ik.imagekit.io/axd1riwnv/BANNER-MASAI-MARA-2026-1024x576.png', href: '/holiday-experiences' },
  { title: 'Great Wildebeest Migration', desc: 'Embark on a journey to witness the largest herding mass of wildlife on the planet. Millions of wildebeest, zebra, and gazelle thunder across the Mara River in dramatic crossings.', image: 'https://ik.imagekit.io/axd1riwnv/experiences-great-migration-safaris-1600x670-Wildebeest-jumping-into-Mara-River-Great-Migration-Kenya-Tanzania-65138518_xxl.jpg', href: '/kenya-safaris/masai-mara' },
  { title: 'Masai Village Cultural Visit', desc: "Get to know the oldest tribes of East Africa \u2014 the Maasai and Samburu people. Known for their vibrant beadwork, warrior dances, and centuries-old traditions.", image: 'https://ik.imagekit.io/axd1riwnv/10-reasons-to-visit-amboseli-national-park-1.jpg', href: '/holiday-experiences' },
  { title: 'Safari Sundowners', desc: "Celebrate Africa's famous 'Happy Hour' with a sundowner. After a full day of wildlife tracking, settle into a scenic viewpoint as the African sun dips below the horizon.", image: 'https://ik.imagekit.io/axd1riwnv/Amboseli-Kenya-the-shoulder-of-Kilimanjaro-scaled.jpg', href: '/holiday-experiences' },
  { title: 'Night Game Drives', desc: 'Explore the African wilds after dark, when up to 70 percent of animal species become active. Spot aardvarks, bush babies, hunting leopards under a canopy of stars.', image: 'https://ik.imagekit.io/axd1riwnv/4-days-Amboseli-Taita-hills-and-Tsavo-east-safari.jpg', href: '/holiday-experiences' },
  { title: 'East Africa Beach Holidays', desc: "Explore Kenya's 563 km of coastline featuring crystalline sand beaches like Diani, Malindi, Watamu, Lamu, and Zanzibar \u2014 the perfect post-safari paradise.", image: 'https://images.pexels.com/photos/13418220/pexels-photo-13418220.jpeg?auto=compress&cs=tinysrgb&w=800', href: '/kenya-safaris/kenya-and-diani' },
];

const whyChoose = [
  { title: '100% Customizable', desc: 'Every safari is tailored to your preferences, schedule, and budget.' },
  { title: 'Local Experts', desc: "Our guides are born and raised in Kenya \u2013 the wildlife parks are their second home." },
  { title: 'No Hidden Charges', desc: 'All trips include permits, accommodation, and meals. No surprise charges.' },
  { title: 'Memorable Experiences', desc: 'Create unforgettable memories with thoughtfully planned adventures.' },
  { title: 'Personalized Support', desc: 'Dedicated assistance at every step, from booking to safari completion.' },
  { title: 'TripAdvisor Rated', desc: "Read authentic reviews from guests who've experienced our safaris." },
];

const homeFaqs = [
  { q: 'How do I book a safari with C.A.T.S?', a: "Simply contact us via our website form, email info@catssafaris.com, or WhatsApp +254 723 951 388. We'll send you a personalised quote within 24 hours. A 30% deposit secures your booking with the balance due 60 days before departure." },
  { q: 'What is the best time to visit Kenya for a safari?', a: "Kenya is a year-round destination. Dry seasons (June\u2013October and January\u2013February) offer the best game viewing. The Great Migration peaks July\u2013October. Green season (April\u2013May, November) brings lush landscapes and lower prices." },
  { q: 'What vehicles do you use for game drives?', a: "All our safaris use custom-built 4x4 Toyota Land Cruisers and safari minivans with pop-up roofs for 360-degree game viewing. Every guest gets a window seat. Vehicles have charging ports, cooler boxes, and first aid kits." },
  { q: 'What is included in your safari packages?', a: "Every package includes full board accommodation, all national park and conservancy entry fees, transport in 4x4 safari vehicles, KPSGA-certified driver-guide, drinking water, and airport/hotel transfers." },
  { q: 'Can you accommodate dietary requirements?', a: "Absolutely. All our partner lodges cater to vegetarian, vegan, gluten-free, halal, kosher, and other dietary needs. Just let us know when booking." },
];

function getFeaturedPackages() {
  const slugs = ['3-day-mara-encounter-masai-mara', 'nairobi-national-park-half-day-private-tour', '4-day-amboseli-tsavo-beast-to-beach', '5-days-masai-mara-amboseli-unlimited-wildlife', '5-day-zanzibar-beach-holiday', '6-day-mount-kilimanjaro-marangu-route'];
  return slugs.map(s => safaris.find(sf => sf.slug === s)).filter(Boolean);
}

export default function HomePage() {
  const featured = getFeaturedPackages();
  return (
    <main>
      <HomeClient slides={heroSlides} />

      {/* EXPLORE EAST AFRICA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset-bronze)]">Destination</p>
          <h2 className="mt-2 font-playfair text-3xl font-bold text-[var(--driftwood)] sm:text-4xl">Explore East Africa</h2>
          <p className="mt-3 max-w-2xl text-[var(--misty-sage)]">From the iconic Masai Mara to the pristine beaches of Zanzibar, discover the best of Kenya and Tanzania.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {exploreDestinations.map(d => (
              <Link key={d.title} href={d.href} className="group relative block h-72 overflow-hidden rounded-2xl shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                <Image src={d.image} alt={d.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-xl font-bold text-white">{d.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{d.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--golden-savannah)]">View Packages <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 18-CARD SAFARI CATALOGUE */}
      <section className="py-16 md:py-24 bg-[var(--warm-ivory)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-[var(--driftwood)] sm:text-4xl">Our Africa Safaris in Kenya, Tanzania &amp; Zanzibar</h2>
          <p className="mt-3 text-[var(--misty-sage)]">Check out our many East Africa safari tours:</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {safariCategories.map(cat => (
              <div key={cat.title} className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--savannah-dust)] bg-white shadow-sm transition-all hover:shadow-lg hover:border-[var(--sunset-bronze)]/40">
                <Link href={cat.href} className="relative block h-48 overflow-hidden"><Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /></Link>
                <div className="flex flex-1 flex-col p-5 text-center">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--driftwood)]">{cat.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--misty-sage)]">{cat.description}</p>
                  <Link href={cat.href} className="mt-4 block rounded-lg bg-[var(--sunset-bronze)] py-3 px-4 text-[13px] font-semibold text-white transition hover:bg-[#8c7544]">{cat.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-[80%] max-w-[500px] aspect-square opacity-[0.03]"><Image src="/cats-logo.png" alt="" fill className="object-contain" sizes="500px" /></div></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset-bronze)]">Why Choose Collective African Tours &amp; Safaris</p>
            <h2 className="mt-2 font-playfair text-3xl font-bold text-[var(--driftwood)] sm:text-4xl">Your Trusted Safari Partner</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--misty-sage)]">We offer expert guides, personalized itineraries, reliable service, and great value.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(item => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600"><svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h3 className="mt-5 text-lg font-bold text-[var(--driftwood)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--misty-sage)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES & VEHICLES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-lg"><Image src="https://ik.imagekit.io/axd1riwnv/4-days-masai-mara-and-lake-nakuru-park-group-joining-landcruiser_Urf4r.jpeg" alt="C.A.T.S 4x4 Land Cruiser on game drive" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset-bronze)]">Your Safari Team</p>
              <h2 className="mt-2 font-playfair text-3xl font-bold text-[var(--driftwood)] sm:text-4xl">We Offer The Very Best Guides &amp; Safari Vehicles</h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--misty-sage)]">Every C.A.T.S safari is led by a <strong className="text-[var(--driftwood)]">KPSGA-certified driver-guide</strong> &mdash; locally born and raised, fluent in wildlife behaviour, and trained in first aid.</p>
              <p className="mt-4 text-base leading-relaxed text-[var(--misty-sage)]">You&apos;ll travel in <strong className="text-[var(--driftwood)]">custom-built 4x4 Toyota Land Cruisers</strong> with pop-up roofs for 360-degree game viewing. Maximum 6 guests per vehicle &mdash; everyone gets a window seat.</p>
              <Link href="/transport-solutions" className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--sunset-bronze)] hover:underline">View Our Fleet &amp; Transport Solutions <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEET DAVID */}
      <section className="py-20 bg-[var(--deep-jungle)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--golden-savannah)]">The Heart of C.A.T.S</p>
              <h2 className="mt-3 font-playfair text-3xl font-bold text-white sm:text-4xl md:text-5xl">Meet David &mdash; Your Safari Architect</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">David has spent over 15 years guiding travellers through the wild heart of East Africa. Growing up in Kenya, he watched the Masai Mara transform visitors from curious tourists into passionate advocates for African wildlife.</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">Today, David leads a network of trusted local partners spanning Kenya, Tanzania, Uganda, and Rwanda. He personally reviews every itinerary, hand-selects guides and lodges, and is available on WhatsApp for every guest.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="rounded-lg bg-[var(--sunset-bronze)] px-8 py-3.5 text-center font-semibold text-white transition hover:bg-[#8c7544]">Chat With David</Link>
                <a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-center font-semibold text-white transition hover:bg-white/10">WhatsApp David</a>
              </div>
            </div>
            <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-xl lg:col-span-2 lg:h-[450px]"><Image src="https://ik.imagekit.io/axd1riwnv/experiences-great-migration-safaris-1600x670-Wildebeest-jumping-into-Mara-River-Great-Migration-Kenya-Tanzania-65138518_xxl.jpg" alt="Great Migration" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" /></div>
          </div>
        </div>
      </section>

      {/* TRAVEL PREP */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset-bronze)]">Prepare for Your Safari</p>
          <h2 className="mt-2 font-playfair text-3xl font-bold text-[var(--driftwood)] sm:text-4xl">Essential Travel Resources</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Kenya eVisa / ETA', desc: 'How to apply for your Kenya electronic travel authorisation.', href: '/travel-info/kenya-visa', img: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg' },
              { title: 'Tanzania eVisa', desc: 'Everything about obtaining your Tanzania tourist visa online.', href: '/travel-info/tanzania-visa', img: 'https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg' },
              { title: 'Kenya Safari Lodges', desc: 'Browse handpicked lodges across all major Kenya national parks.', href: '/travel-info/kenya-lodges', img: 'https://ik.imagekit.io/axd1riwnv/4-days-Amboseli-Taita-hills-and-Tsavo-east-safari.jpg' },
              { title: 'Tanzania Safari Lodges', desc: 'Discover lodges in Serengeti, Ngorongoro, and Tarangire.', href: '/travel-info/tanzania-lodges', img: 'https://ik.imagekit.io/axd1riwnv/Ngorongoro-crater3.jpg' },
              { title: 'What to Pack', desc: 'Complete packing list for an East Africa safari.', href: '/travel-info/what-to-pack', img: 'https://ik.imagekit.io/axd1riwnv/Amboseli-Kenya-the-shoulder-of-Kilimanjaro-scaled.jpg' },
              { title: 'Safari FAQs', desc: 'Answers to common questions about booking, safety, and logistics.', href: '/faqs', img: 'https://ik.imagekit.io/axd1riwnv/2%20migration.jpg' },
            ].map(r => (
              <Link key={r.title} href={r.href} className="group flex items-center gap-5 rounded-xl border border-[var(--savannah-dust)] bg-[var(--warm-ivory)] p-5 transition hover:shadow-md hover:border-[var(--sunset-bronze)]/40">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg"><Image src={r.img} alt={r.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="80px" /></div>
                <div><h3 className="font-semibold text-[var(--driftwood)] group-hover:text-[var(--sunset-bronze)] transition">{r.title}</h3><p className="mt-1 text-sm text-[var(--misty-sage)]">{r.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--warm-ivory)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset-bronze)]">Questions &amp; Answers</p>
          <h2 className="mt-2 font-playfair text-3xl font-bold text-[var(--driftwood)] sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 max-w-2xl text-[var(--misty-sage)]">Find quick answers to common questions about our safari experiences, accommodations, and logistics.</p>
          <div className="mt-12 flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-80 flex-shrink-0">
              <div className="rounded-2xl bg-[#f5f0e3] p-8">
                <h3 className="font-playfair text-xl font-bold text-[var(--driftwood)]">Still have questions?</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--misty-sage)]">Can&apos;t find the answer you&apos;re looking for? Check out our full FAQ page or contact our friendly team.</p>
                <Link href="/faqs" className="mt-6 inline-block rounded-lg bg-[var(--logo-sage)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--forest-canopy)]">View All FAQs</Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-[var(--savannah-dust)] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10">
                {homeFaqs.map((faq, i) => (
                  <details key={i} className="group border-b border-[var(--savannah-dust)] last:border-0">
                    <summary className="flex cursor-pointer items-center justify-between py-5 font-semibold text-[var(--driftwood)] hover:text-[var(--sunset-bronze)] transition [&::-webkit-details-marker]:hidden"><span>{faq.q}</span><svg className="h-5 w-5 flex-shrink-0 text-[var(--sunset-bronze)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M19 9l-7 7-7-7" /></svg></summary>
                    <div className="pb-5 text-sm leading-relaxed text-[var(--misty-sage)]">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA BANNER */}
      <section className="relative py-24 sm:py-32">
        <Image src="https://ik.imagekit.io/axd1riwnv/BANNER-MASAI-MARA-2026-1024x576.png" alt="Golden sunset over the Masai Mara savannah" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white sm:text-4xl md:text-5xl">Your Dream Safari Starts With a Single Message</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">Tell us where you want to go, how long you want to stay, and what you want to see. We&apos;ll design a tailor-made itinerary &mdash; no obligation, no booking fees, just expert guidance from a team that knows East Africa inside and out.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-lg bg-[var(--sunset-bronze)] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#8c7544] hover:shadow-xl">Get a Free Safari Quote</Link>
            <a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-white bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/25">WhatsApp Us</a>
          </div>
          <p className="mt-6 text-sm text-white/60">Email: info@catssafaris.com &nbsp;|&nbsp; Phone: +254 723 951 388</p>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-16 sm:py-20 bg-[var(--warm-ivory)]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-playfair text-2xl font-bold text-[var(--driftwood)] sm:text-3xl">Kenya Safari Holidays &amp; East Africa Tour Packages &mdash; Expert-Led Wildlife Experiences</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--misty-sage)]">
            <p>Collective African Tours &amp; Safaris (C.A.T.S) is one of East Africa&apos;s most experienced safari operators, offering tailor-made <Link href="/kenya-safaris" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Kenya safari packages</Link>, <Link href="/tanzania-safaris" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Tanzania wildlife tours</Link>, <Link href="/kenya-uganda-safaris" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Uganda gorilla trekking safaris</Link>, and <Link href="/kenya-rwanda-safaris" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Rwanda primate expeditions</Link>. Based in Nairobi with a network of trusted partners across four countries, we design every journey around your interests &mdash; from affordable <Link href="/kenya-safaris/group-tours-nairobi" className="font-semibold text-[var(--sunset-bronze)] hover:underline">group tours</Link> to exclusive <Link href="/kenya-flight-safaris" className="font-semibold text-[var(--sunset-bronze)] hover:underline">fly-in luxury safaris</Link>.</p>
            <p>Our Kenya safari holidays cover the country&apos;s most iconic national parks and reserves: the <Link href="/kenya-safaris/masai-mara" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Masai Mara</Link> (home to the annual Great Migration and unrivalled Big Five game drives), <Link href="/kenya-safaris/amboseli" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Amboseli National Park</Link> (famed for its elephant herds and Kilimanjaro views), Tsavo East and West (Kenya&apos;s largest wilderness area), Lake Nakuru (flamingos and rhinos), Samburu (rare Northern Five species), and <Link href="/kenya-safaris/nairobi-excursions" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Nairobi National Park</Link> &mdash; the only place on earth where you can photograph a black rhino against a city skyline.</p>
            <p>Beyond Kenya, we operate cross-border <Link href="/kenya-tanzania-safaris" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Kenya-Tanzania safari packages</Link> combining the Masai Mara with Tanzania&apos;s Serengeti National Park, Ngorongoro Crater, Tarangire, and Lake Manyara. Bush-and-beach combos pair thrilling game drives with the white-sand shores of <Link href="/kenya-safaris/kenya-and-diani" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Diani Beach</Link>, Watamu, and <Link href="/kenya-safaris/zanzibar" className="font-semibold text-[var(--sunset-bronze)] hover:underline">Zanzibar</Link>.</p>
            <p>Every C.A.T.S safari includes KPSGA-certified guides, custom 4x4 Land Cruisers with pop-up roofs, handpicked accommodation from Economy to Superior Luxury, all park and conservancy fees, full-board meals, and airport/hotel transfers. We also offer <Link href="/flights" className="font-semibold text-[var(--sunset-bronze)] hover:underline">domestic flight safaris</Link>, SGR train bookings, <Link href="/mountain-climbing" className="font-semibold text-[var(--sunset-bronze)] hover:underline">mountain climbing expeditions</Link> on Mount Kilimanjaro and Mount Kenya, and specialised <Link href="/holiday-experiences" className="font-semibold text-[var(--sunset-bronze)] hover:underline">bird-watching safaris</Link> across 60+ Important Bird Areas.</p>
          </div>
        </div>
      </section>

      {/* CURATED EXPERIENCES */}
      <section className="py-24 relative overflow-hidden bg-[#1a1f1c]">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--sunset-bronze)]/5 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--logo-sage)]/5 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">Curated Adventures</span>
            <h2 className="mt-5 font-playfair text-3xl font-bold text-white sm:text-4xl md:text-5xl">Unforgettable Safari <em>Experiences</em></h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">Experience the raw beauty of Africa through our handcrafted adventures that blend luxury with the authentic soul of the wilderness.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {curatedExperiences.map(exp => (
              <Link key={exp.title} href={exp.href} className="group relative block h-80 overflow-hidden rounded-2xl">
                <Image src={exp.image} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="h-0.5 w-0 bg-[var(--sunset-bronze)] transition-all duration-500 group-hover:w-16 mb-4" />
                  <h3 className="font-playfair text-xl font-bold text-white">{exp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 line-clamp-2">{exp.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60">Explore Curations <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md"><svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg></span></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/holiday-experiences" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">Explore all East Africa curations <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg></Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-[var(--driftwood)] sm:text-4xl md:text-5xl">Ready for Your African Adventure?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--misty-sage)]">Let us help you plan the safari of your dreams. Our expert travel advisors are ready to create a personalized itinerary just for you.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-lg bg-[var(--sunset-bronze)] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#8c7544] hover:shadow-lg">Get a Free Quote</Link>
            <a href="tel:+254723951388" className="rounded-lg border-2 border-[var(--logo-sage)] px-10 py-4 text-lg font-semibold text-[var(--logo-sage)] transition hover:bg-[var(--logo-sage)] hover:text-white">Call +254 723 951 388</a>
          </div>
        </div>
      </section>
    </main>
  );
}
