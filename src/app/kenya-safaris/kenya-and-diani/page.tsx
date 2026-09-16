import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Safaris and Diani Beach Holidays | CATS',
  description: 'Combine a Kenya wildlife safari with a Diani Beach holiday, including expert game drives, iconic parks and Indian Ocean relaxation.',
  alternates: { canonical: '/kenya-safaris/kenya-and-diani' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('safari-and-beach') ||
      (s.destination === 'kenya' &&
        s.type?.includes('beach') &&
        s.type?.includes('wildlife') &&
        !s.type?.includes('nairobi-diani') &&
        !s.type?.includes('diani-departure')),
  );

  return (
    <SafariListingPage
      title="Kenya Safaris and Diani Beach Holidays"
      subtitle="Wildlife Encounters, Indian Ocean Calm"
      description="Combine the thrill of a Kenya safari with the restorative beauty of a Diani Beach holiday. Search for the Big Five on guided game drives in celebrated national parks, then unwind on powder-soft sand beneath palms beside the warm, blue Indian Ocean."
      heroImage="https://ik.imagekit.io/axd1riwnv/Kenya-14517-scaled.webp"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Kenya is one of the few destinations where a serious wildlife safari and a genuine beach holiday sit only
            hours apart. C.A.T.S Safaris designs combined itineraries that pair game drives in parks such as{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            or{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            with a restful stay at Diani Beach, one of Africa&apos;s most acclaimed stretches of coast.
          </p>
          <p>
            These packages give you the best of both worlds: expert-led Big Five game drives in a private 4x4 Land
            Cruiser, followed by white sand, warm water and coral reef snorkelling on the Indian Ocean. With 15 years
            of experience sequencing safari and beach logistics, we build the itinerary so both halves feel unhurried.
          </p>
          <p>
            For routes that begin directly from the coast rather than Nairobi, see our{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              safaris from Diani Beach
            </Link>
            .
          </p>
        </>
      }
      faqs={[
        {
          question: "When is the best time to combine a Kenya safari with Diani Beach?",
          answer:
            "June to October is popular for dry-season game viewing in the Masai Mara, Amboseli and Tsavo, while January to March often offers clear wildlife conditions and warm beach weather. The coast and parks have different rainfall patterns, so a shoulder-season itinerary can still work well with fewer visitors and attractive value. C.A.T.S Safaris helps balance migration ambitions, park conditions and the Diani relaxation you want rather than promising a single perfect month.",
        },
        {
          question: "What does a Kenya safari and Diani Beach holiday cost?",
          answer:
            "The total price reflects safari length, parks, lodge category, Diani hotel, season, park fees, road or air transfers and whether your vehicle is private. Our quotation separates the safari and beach portions and shows accommodation, meals, a private 4x4 Land Cruiser, professional driver-guide and transfers. Flights, drinks, tips, water activities, visas, laundry and personal purchases may be extra, and we point out these costs before booking.",
        },
        {
          question: "Is a safari-and-beach holiday safe for families and international travellers?",
          answer:
            "Yes, this is a well-established Kenya itinerary when arranged with a reputable operator and sensible precautions. For 15 years C.A.T.S Safaris has coordinated park transfers, guides and coastal stays, and we brief guests on wildlife distance, beach safety, valuables and transport. Remain inside the vehicle near animals, use hotel security guidance after dark and take normal precautions around the ocean, boats and busy public areas.",
        },
        {
          question: "Is this combination suitable for families with children?",
          answer:
            "It is one of our most popular family formats because game drives can be followed by pool time, calm beach days and child-friendly activities at Diani. We can use a private vehicle, shorter drives, family rooms and flexible meal schedules, choosing Masai Mara, Amboseli or Tsavo according to the children's ages and tolerance for transfers. We also discuss supervised water activities, child life jackets and age limits for walking, ballooning or cultural visits.",
        },
        {
          question: "What should I pack for safari and Diani Beach?",
          answer:
            "Pack light neutral safari layers, a warm fleece for dawn, sun protection, insect repellent, closed shoes, a light rain jacket and binoculars, then add swimwear, sandals and reef-friendly sun protection for Diani. Soft-sided luggage is easiest in the Land Cruiser or light aircraft, and a small daypack protects cameras, medication and documents. Keep beach valuables secure and bring a modest cover-up for villages or town visits as well as suitable clothes for lodge dinners.",
        },
        {
          question: "What health precautions apply to both the safari and coast?",
          answer:
            "Ask a travel-health professional about routine vaccinations, recommended vaccines, malaria prevention and any individual medical needs before departure. Malaria risk exists in safari and coastal areas, so use repellent, cover up at dusk and follow prescribed prophylaxis; also protect yourself from sun, heat and dehydration. Bring personal medicines and prescriptions, and tell us about allergies, mobility needs or dietary restrictions so both lodges and beach hotels can prepare.",
        },
        {
          question: "Which wildlife and parks pair best with Diani Beach?",
          answer:
            "The Masai Mara is excellent for lions, cheetahs, leopards, elephants, buffalo and possible migration encounters, while Amboseli is known for elephant herds beneath Kilimanjaro. Tsavo is the most convenient wildlife addition from the coast and brings red-dust elephants, big landscapes and strong birding, so the best pairing depends on your starting point and available time. Wildlife is never guaranteed, but private game drives with an experienced guide give you the best chance of meaningful sightings.",
        },
        {
          question: "What vehicle and transfers are used, and are the road journeys tiring?",
          answer:
            "The safari section uses a private 4x4 Land Cruiser with comfortable seats, seat belts and a raised viewing roof, giving you a secure platform for game drives. Between Nairobi, the parks and Diani we can arrange road transfers, scheduled flights or private charters according to time and budget. Nairobi to Diani is long if driven directly, while Tsavo is much closer to the coast and Nairobi to the Masai Mara commonly takes five to six hours; some park tracks are rough or corrugated. Your consultant plans luggage, airport or airstrip connections, overnight stops and vehicle changes so families, older guests and travellers with limited mobility can avoid an exhausting transfer.",
        },
        {
          question: "What accommodation, meals and dietary support are available?",
          answer:
            "Safari accommodation ranges from lodges and permanent tented camps to luxury properties, followed by Diani hotels or beach resorts selected for location, service, security and atmosphere. Meals are generally full-board on safari and structured around breakfast, lunch and dinner at the beach, with vegetarian, vegan, halal, gluten-free and allergy-aware menus available when requested early. Bush breakfasts, sundowners and a private beach dinner can be added where safe and appropriate, while drinks and premium dining may cost extra.",
        },
        {
          question: "Can C.A.T.S customise a private safari and beach itinerary?",
          answer:
            "Yes, we can tailor the balance of game drives and beach nights, select Masai Mara, Amboseli, Tsavo or another park, and add flights, a balloon safari, diving or a dhow excursion. Private travel with a dedicated Land Cruiser suits families, honeymooners, photographers and solo guests who want flexible timing, while group departures can reduce cost. We build the connections between the two halves so you are not left arranging separate transfers or accommodation.",
        },
        {
          question: "How much should I tip on safari and at the beach?",
          answer:
            "Tipping is discretionary; guests often thank the safari guide at the end of the game-driving section and use the shared tip box at the lodge or camp for other staff. At Diani, you may tip hotel staff, drivers, boat crew or activity guides according to the service received, and we can explain current local practice. Tips are not a hidden compulsory charge, and your briefing will clarify whether a property distributes pooled gratuities.",
        },
        {
          question: "Can solo travellers book a Kenya-and-Diani holiday?",
          answer:
            "Solo travellers can choose a private safari, a small group for the wildlife section or a tailor-made itinerary with a beach stay. Single supplements may apply to rooms, vehicles and some transfers, and we show them clearly while checking whether shared dates offer savings. A professional guide provides support on safari, while Diani's restaurants, resorts and excursions offer easy opportunities to meet other travellers without sacrificing personal time.",
        },
        {
          question: "What photography and connectivity should I expect?",
          answer:
            "Bring a telephoto lens, spare batteries, memory cards and dust protection for the Masai Mara, Amboseli or Tsavo, plus a wide lens for Kilimanjaro and Diani's coastline. Early morning and late afternoon give the best safari light, while beach photography benefits from sunrise, sunset and protection from sand and salt spray. WiFi is usually stronger at Diani and city hotels than in the parks, so download essentials and expect limited mobile signal during remote game drives.",
        },
        {
          question: "How far ahead should I book, and what insurance or flexibility do I need?",
          answer:
            "Reserve six to twelve months ahead for migration season, Christmas, school holidays and sought-after Diani resorts, especially if you need family rooms or connecting flights. Comprehensive travel insurance should cover cancellation, medical evacuation, delays, baggage, beach activities and non-refundable deposits. C.A.T.S Safaris explains each supplier's terms before payment and can help amend the sequence, hotel or park when conditions and availability allow.",
        },
        {
          question: "How physically demanding is the trip, and can I include cultural experiences?",
          answer:
            "Game drives are seated, while Diani can be as restful or active as you choose, but rough tracks, lodge steps, heat, boats and beach activities should be considered for older travellers or guests with mobility needs. Walking safaris, snorkelling and diving are optional, and we can select accessible accommodation, private transfers and additional rest days. A respectful Maasai or other local-community visit can be added with consent, clear dress guidance and responsible photography practices.",
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Zanzibar', href: '/kenya-safaris/zanzibar', image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]}
    />
  );
}
