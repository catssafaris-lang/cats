'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  Shield,
  Car,
  Heart,
  Check,
} from 'lucide-react';
import { safaris, type Safari } from '@/data/safaris';

/* ────────────────────────── Constants ────────────────────────── */
const WHATSAPP_NUMBER = '254723951388';

const excursionIds = new Set([
  'nairobi-np-private',
  'nairobi-np-group',
  'nairobi-city-tour',
  'nairobi-into-africa',
  'amboseli-day',
  'naivasha-hellsgate-day',
  'ol-pejeta-day',
  'nakuru-naivasha-day',
]);

const seen = new Set<string>();
const allExcursions: Safari[] = safaris.filter((s) => {
  if (!excursionIds.has(s.id) || seen.has(s.id)) return false;
  seen.add(s.id);
  return true;
});

function getById(id: string): Safari | undefined {
  return allExcursions.find((s) => s.id === id);
}

function pickByIds(ids: string[]): Safari[] {
  return ids
    .map((id) => getById(id))
    .filter((s): s is Safari => Boolean(s));
}

const wildlifeSafaris = pickByIds(['nairobi-np-private', 'nairobi-np-group', 'nairobi-city-tour']);
const conservationSafaris = pickByIds(['ol-pejeta-day', 'naivasha-hellsgate-day']);
const fullDaySafaris = pickByIds(['amboseli-day', 'nakuru-naivasha-day', 'nairobi-into-africa']);

const privateTour = getById('nairobi-np-private');
const groupTour = getById('nairobi-np-group');

const faqs: { question: string; answer: string }[] = [
  {
    question: 'How long is the Nairobi National Park safari?',
    answer:
      "Our standard Nairobi National Park excursion is a half-day safari lasting approximately 5 hours including hotel or airport transfers, typically running from around 6:00 AM to 11:30 AM or 12:00 PM. For travellers who want to see more of the city, we also offer a full-day combination that pairs the park game drive with a Nairobi city tour covering the David Sheldrick Wildlife Trust, the Giraffe Centre and either the Karen Blixen Museum or Bomas of Kenya. Both half-day and full-day options can be tailored to your arrival or departure times.",
  },
  {
    question: 'What time does the safari start?',
    answer:
      "Most Nairobi National Park safaris depart early, typically around 6:00 AM, because wildlife is most active in the cool morning hours and traffic on the way to the park gate is lightest at that time. For guests who prefer not to rise before dawn, afternoon departures are available for half-day tours, though morning game drives generally offer the best sightings of predators and grazing herds. We coordinate your pickup time around your hotel location, flight schedule and personal preference.",
  },
  {
    question: 'Is hotel pickup included?',
    answer:
      "Yes, complimentary pickup and drop-off is included from any Nairobi hotel, Airbnb or guesthouse within the city for our private excursions. Our driver-guide will confirm your pickup point and approximate time the day before your tour. Group tours depart from a central meeting point in Langata, with hotel drop-off available for a small additional fee per person.",
  },
  {
    question: 'Is airport pickup available?',
    answer:
      "Yes, pickup and drop-off from Jomo Kenyatta International Airport (JKIA) or Wilson Airport can be arranged as part of your excursion booking. This makes our Nairobi National Park safaris especially popular with travellers on a long layover, since you can go straight from arrivals to the park gate without needing a hotel stay. Simply share your flight details when booking so we can time the pickup and return to match your onward departure.",
  },
  {
    question: "What animals can I see in Nairobi National Park?",
    answer:
      "Nairobi National Park is home to black rhinos, lions, leopards, buffaloes, giraffes, zebras, eland, hippos, ostriches, secretary birds and over 400 recorded bird species, all set against a backdrop of the Nairobi city skyline. It is important to note that the park does not have elephants, unlike Amboseli or Ol Pejeta, since the park's boundaries are not large enough to sustain resident elephant herds. Sightings vary by season and time of day, and our guides use their local knowledge to maximise your chances of good wildlife encounters.",
  },
  {
    question: 'Can I see rhino in Nairobi National Park?',
    answer:
      "Yes, Nairobi National Park is one of Kenya's most successful black rhino sanctuaries, with a healthy population living in the park's open grassland and dense bush areas. The park's relatively compact size and fenced boundary on three sides make it easier for rangers to monitor and protect the rhino population compared to larger, unfenced reserves. Many guests are pleasantly surprised at how reliably rhinos are spotted here given the park's small footprint and proximity to the city.",
  },
  {
    question: 'Can I see lion in Nairobi National Park?',
    answer:
      "Yes, lion prides are regularly sighted within Nairobi National Park, often resting on rocky outcrops or in the shade of acacia trees during the cooler morning hours. One of the most striking and frequently photographed sights is a lion or lioness lounging in the grass with the glass towers of the Nairobi skyline visible in the background, a juxtaposition unique to this park. As with any wild safari, sightings are never guaranteed, but our experienced driver-guides know the areas where prides are most commonly found.",
  },
  {
    question: 'What vehicle is used?',
    answer:
      "Excursions use a private 4x4 Toyota Land Cruiser fitted with a pop-up roof, large windows, seat belts and high ground clearance suited to the park's dirt tracks. Each vehicle comfortably seats a maximum of 7 passengers, allowing everyone unobstructed views and space to stand through the roof hatch for photography. Group tours use the same style of vehicle on a shared basis with other travellers.",
  },
  {
    question: 'Are park fees included?',
    answer:
      "Yes, all Kenya Wildlife Service (KWS) park entrance fees are included in our quoted price for every Nairobi excursion and day trip. This covers the standard citizen, resident or non-resident entry rates as applicable to your nationality, along with any vehicle entry charges. The only fees not included are entrance tickets to optional add-on attractions not specified in your chosen itinerary, such as extra museum visits requested on the day.",
  },
  {
    question: 'Can children join the safari?',
    answer:
      "Yes, children of all ages are welcome on our Nairobi excursions and day trips, and our vehicles and guides are experienced in accommodating families. Children aged 3 to 11 years qualify for reduced Kenya Wildlife Service park entry fees, while infants under 3 years enter the park free of charge. We recommend a private vehicle rather than a group tour for families with young children, as it allows more flexibility for breaks and pacing.",
  },
  {
    question: 'Can I combine this with another Nairobi attraction?',
    answer:
      "Yes, popular combinations include the Giraffe Centre, the David Sheldrick Wildlife Trust elephant orphanage, the Karen Blixen Museum, Bomas of Kenya and the Kazuri Beads Factory, subject to each attraction's opening hours and feeding or show times. Our Nairobi Into Africa Tour and our 1-Day Nairobi National Park & City Tour are pre-built combinations that bundle several of these highlights into a single day. We can also build a fully custom combination itinerary around your specific interests and available time.",
  },
  {
    question: 'Can this be done during a Nairobi layover?',
    answer:
      "Absolutely. Our half-day Nairobi National Park safari is ideal for layovers of 6 hours or more, since the park gate is only a short drive from both JKIA and Wilson Airport. We coordinate the pickup and return transfer directly with your airline schedule, building in a buffer for check-in, security and immigration so you can safely make your connecting flight. Simply provide your arrival and departure flight numbers when booking and we will plan the timing accordingly.",
  },
  {
    question: 'What should I bring?',
    answer:
      "We recommend comfortable, neutral-coloured clothing, a light jacket or layers for the cool early morning game drive, a hat and sunscreen for the midday sun, and insect repellent. A pair of binoculars and a camera with a telephoto lens will greatly enhance wildlife viewing and photography, particularly for distant sightings of rhino or lion. Bring bottled water for the drive (though we also provide some), and any prescribed medication you may need during the day.",
  },
  {
    question: 'How do I book a Nairobi excursion?',
    answer:
      "Click \"Book This Tour\" or \"Request Custom Quote\" on any product page to submit an inquiry through our booking form, which asks for your preferred dates, group size and any special requests. Our excursions team reviews every request and responds within 24 hours with confirmed availability, a detailed quotation and next steps for securing your booking. You can also reach us directly via WhatsApp for a faster response if your travel dates are close.",
  },
  {
    question: 'What is the difference between private and group tours?',
    answer:
      "Private tours reserve the 4x4 Land Cruiser and driver-guide exclusively for your own party, giving you full flexibility over departure time, pace and any stops along the way, at a higher per-person cost. Group tours join other travellers in a shared vehicle departing at set times from a fixed meeting point, which lowers the per-person price but offers less flexibility on timing and route. Families, honeymooners and guests with tight flight connections generally prefer the private option, while solo travellers and budget-conscious guests often choose the group tour.",
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      "Cancellation terms are confirmed in writing at the time of your booking and vary depending on how far in advance you cancel and whether any non-refundable third-party costs, such as park entrance fees, have already been incurred. As a general rule, the earlier you notify us of a change of plans, the more flexibility we have to adjust or refund your booking. Please contact our excursions team as soon as your plans change so we can advise on the specific terms that apply to your booking.",
  },
  {
    question: 'Are meals included?',
    answer:
      "Half-day Nairobi National Park tours do not typically include meals, since guests usually depart before or return in time for breakfast or lunch at their hotel. Full-day tours and combination excursions, such as the Amboseli, Lake Nakuru and Ol Pejeta day trips, include a packed or restaurant lunch as specified in the itinerary. Special dietary requirements, including vegetarian, vegan and allergy-related needs, can be accommodated with advance notice at the time of booking.",
  },
];

/* ────────────────────────── Helpers ────────────────────────── */
function getSafariImage(safari: Safari): string {
  if (safari.image && safari.image.includes('ik.imagekit.io')) return safari.image;
  if (safari.gallery && safari.gallery.length > 0) return safari.gallery[0];
  return safari.image;
}

function truncateText(text: string, maxLength: number): string {
  const clean = text.replace(/[#*_>`]/g, ' ').replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength).trim()}...`;
}

function whatsappLink(title: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello C.A.T.S, I am interested in ${title}`)}`;
}

/* ────────────────────────── Excursion Card ────────────────────────── */
function ExcursionCard({ safari }: { safari: Safari }) {
  const image = getSafariImage(safari);
  const description = safari.description ? truncateText(safari.description, 120) : '';

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <Link href={`/safari/${safari.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={safari.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-5 pb-3">
          <h3 className="font-serif text-base font-bold text-[#5c4d42] mb-2">{safari.title}</h3>
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-1">
            <Clock className="w-4 h-4 text-[#a68b52] flex-shrink-0" />
            <span>{safari.duration} {safari.durationUnit}</span>
          </div>
          {safari.parks && safari.parks.length > 0 && (
            <p className="text-xs text-stone-400 mb-2">{safari.parks.join(', ')}</p>
          )}
          {description && <p className="text-sm text-stone-600 mb-3 leading-relaxed">{description}</p>}
          <p className="text-[#a68b52] font-bold">From ${safari.priceFrom.toLocaleString()} {safari.currency}</p>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <a
          href={whatsappLink(safari.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone-500 hover:text-[#a68b52] underline transition-colors"
        >
          WhatsApp about this tour
        </a>
      </div>
    </div>
  );
}

/* ────────────────────────── Featured NNP Card ────────────────────────── */
function FeaturedCard({ safari, badge }: { safari: Safari; badge: string }) {
  const image = getSafariImage(safari);
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="relative h-56">
        <Image
          src={image}
          alt={safari.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 left-3 bg-[#a68b52] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          {badge}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-[#5c4d42] mb-2">{safari.title}</h3>
        <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
          <Clock className="w-4 h-4 text-[#a68b52] flex-shrink-0" />
          <span>{safari.duration} {safari.durationUnit}</span>
        </div>
        <p className="text-[#a68b52] font-bold text-lg mb-4">From ${safari.priceFrom.toLocaleString()} {safari.currency}</p>
        <ul className="space-y-2 mb-6">
          {safari.highlights.slice(0, 4).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
              <Check className="w-4 h-4 text-[#a68b52] flex-shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Link
            href={`/safari/${safari.slug}`}
            className="flex-1 text-center border-2 border-[#a68b52] text-[#5c4d42] font-semibold py-2.5 rounded-lg hover:bg-[#a68b52]/10 transition"
          >
            View Details
          </Link>
          <Link
            href={`/safari/${safari.slug}`}
            className="flex-1 text-center bg-[#a68b52] text-white font-semibold py-2.5 rounded-lg hover:bg-[#8a7343] transition"
          >
            Book This Tour
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────── Category Section ────────────────────────── */
function CategorySection({ title, intro, items }: { title: string; intro: string; items: Safari[] }) {
  if (items.length === 0) return null;
  return (
    <div className="bg-white rounded-2xl p-8 mb-8">
      <h3 className="font-serif text-xl text-[#5c4d42] mb-2">{title}</h3>
      <p className="text-stone-600 mb-6">{intro}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s) => (
          <ExcursionCard key={s.id} safari={s} />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────── Main Component ────────────────────────── */
export default function NairobiExcursionsHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const scrollToExcursions = () => {
    document.getElementById('excursions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Shield,
      title: '15 Years of Safari Expertise',
      description: 'A trusted network of local partners ensuring safe, seamless experiences across East Africa.',
    },
    {
      icon: Car,
      title: 'Private 4x4 Land Cruisers',
      description: 'Pop-up roof vehicles for optimal wildlife viewing and photography, exclusively for your party.',
    },
    {
      icon: Users,
      title: 'KPSGA-Certified Guides',
      description: 'Professional English-speaking driver-guides with deep local knowledge and wildlife expertise.',
    },
    {
      icon: MapPin,
      title: 'Hotel & Airport Pickup',
      description: 'Complimentary pickup and drop-off from your Nairobi hotel, Airbnb or JKIA.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Half-day, full-day and custom itineraries designed around your travel schedule.',
    },
    {
      icon: Heart,
      title: 'Child & Family Friendly',
      description: 'Age-appropriate pacing, comfort breaks and kid-friendly guides for family adventures.',
    },
  ];

  return (
    <main className="bg-[#f7f4ed]">
      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg"
          alt="Nairobi National Park with the Nairobi city skyline in the background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="max-w-4xl font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Nairobi Excursions &amp; Day Trips
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
            Explore Nairobi and beyond with professionally organised wildlife, cultural and day-trip experiences.
            From Nairobi National Park to full-day escapes into Kenya&apos;s iconic landscapes, choose an experience
            that fits your time, interests and travel style.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={scrollToExcursions}
              className="rounded-xl bg-[#a68b52] px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-[#8a7343] hover:shadow-xl"
            >
              Explore Excursions
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white bg-white/10 px-8 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <div className="mx-auto max-w-6xl px-4 py-5">
        <nav className="text-sm text-stone-500">
          <Link href="/" className="hover:text-[#a68b52] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/kenya-safaris" className="hover:text-[#a68b52] transition-colors">Kenya Safaris</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-700">Nairobi Excursions &amp; Day Trips</span>
        </nav>
      </div>

      {/* ── Introduction ── */}
      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="space-y-5 text-stone-700 leading-relaxed">
          <p>
            Nairobi is the only capital city in the world with a national park within its boundaries, making it one
            of Africa&apos;s most accessible safari destinations. For 15 years, Collective African Tours &amp; Safaris
            (C.A.T.S) has been connecting travellers with the best of Nairobi&apos;s wildlife, culture and conservation
            experiences, alongside our wider portfolio of{' '}
            <Link href="/kenya-safaris" className="text-[#a68b52] underline hover:text-[#8a7343]">
              Kenya safaris
            </Link>
            .
          </p>
          <p>
            Whether you have a few hours between flights, a free day during a business trip, or want to ease into a
            longer East African adventure, our Nairobi excursions deliver authentic wildlife encounters in private 4x4
            Land Cruisers with KPSGA-certified guides. Travellers who prefer a shared, more budget-friendly
            experience can also join our{' '}
            <Link href="/kenya-safaris/group-tours-nairobi" className="text-[#a68b52] underline hover:text-[#8a7343]">
              group tours from Nairobi
            </Link>
            .
          </p>
          <p>
            From half-day game drives in Nairobi National Park to full-day expeditions to Amboseli, Lake Nakuru, Ol
            Pejeta and the Rift Valley lakes, every excursion includes hotel or airport pickup, professional guiding,
            and the flexibility to match the adventure to your schedule. Explore our full range of{' '}
            <Link href="/holiday-experiences" className="text-[#a68b52] underline hover:text-[#8a7343]">
              holiday experiences
            </Link>{' '}
            for more ways to discover Kenya.
          </p>
        </div>
      </section>

      {/* ── Featured: Nairobi National Park ── */}
      <section className="bg-[#2d2a26] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">
            Nairobi National Park — Our Flagship Experience
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/70">
            Nairobi National Park is Kenya&apos;s most accessible safari destination — a wilderness of rhino, lion and
            giraffe just minutes from downtown, with the city skyline as a striking, only-in-Nairobi backdrop. Choose
            a private safari for total flexibility, or a group tour for a shared, budget-friendly experience.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {privateTour && <FeaturedCard safari={privateTour} badge="Private Tour" />}
            {groupTour && <FeaturedCard safari={groupTour} badge="Group Tour" />}
          </div>
        </div>
      </section>

      {/* ── All Excursions Grid ── */}
      <section id="excursions" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-[#5c4d42] sm:text-4xl">
          All Nairobi Excursions &amp; Day Trips
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
          Choose the experience that fits your schedule and interests.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allExcursions.map((safari) => (
            <ExcursionCard key={safari.id} safari={safari} />
          ))}
        </div>
      </section>

      {/* ── Category Sections ── */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <CategorySection
          title="Wildlife & Safari"
          intro="Experience Africa's wildest capital through the eyes of expert guides."
          items={wildlifeSafaris}
        />
        <CategorySection
          title="Conservation & Nature"
          intro="Visit Kenya's leading conservation sanctuaries and dramatic Rift Valley landscapes."
          items={conservationSafaris}
        />
        <CategorySection
          title="Full-Day Kenya Adventures"
          intro="Venture beyond Nairobi for a full day of iconic Kenya wildlife and scenery."
          items={fullDaySafaris}
        />
      </section>

      {/* ── Why Choose C.A.T.S ── */}
      <section className="bg-[#f7f4ed] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl font-bold text-[#5c4d42] sm:text-4xl">
            Why Choose C.A.T.S for Your Nairobi Excursion
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a68b52]/10">
                  <feature.icon className="h-6 w-6 text-[#a68b52]" />
                </div>
                <h3 className="mt-4 font-semibold text-[#5c4d42]">{feature.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl bg-white p-8">
          <h2 className="font-serif text-3xl font-bold text-[#5c4d42]">Frequently Asked Questions</h2>
          <div className="mt-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-stone-200 py-4 last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-4 font-semibold text-[#5c4d42]">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-[#a68b52]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#a68b52]" />
                  )}
                </button>
                {openFaq === i && (
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#2d2a26] px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">Ready to Explore Nairobi?</h2>
          <p className="mt-4 text-white/80">
            From rhinos against the city skyline to flamingos on the Rift Valley lakes, our Nairobi excursions and
            day trips bring you closer to Kenya&apos;s wildlife and culture, whatever your schedule allows. Talk to
            our team and let us design the perfect excursion for your visit.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-[#a68b52] px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-[#8a7343] hover:shadow-xl"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello C.A.T.S, I am interested in your Nairobi excursions and day trips.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white bg-white/10 px-8 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="mt-8 text-sm text-white/60">
            Email: excursions@catssafaris.com | Phone: +254 723 951 388
          </p>
        </div>
      </section>
    </main>
  );
}
