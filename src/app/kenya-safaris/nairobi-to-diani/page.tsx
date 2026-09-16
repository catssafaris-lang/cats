import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi to Diani Beach Safari Tours | CATS Safaris',
  description: 'Travel from Nairobi to Diani Beach on a Kenya safari combining exciting game drives, wildlife parks and an Indian Ocean escape.',
  alternates: { canonical: '/kenya-safaris/nairobi-to-diani' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('nairobi-diani'));

  return (
    <SafariListingPage
      title="Nairobi to Diani Beach Safari Tours"
      subtitle="From Savannah to the Indian Ocean"
      description="Journey from Nairobi’s vibrant gateway to the soft white sands of Diani Beach on a Kenya safari that blends bush and coast. Enjoy game drives in renowned wildlife parks, look for elephants and big cats, then slow down beside the warm Indian Ocean."
      heroImage="https://ik.imagekit.io/axd1riwnv/Kenya-14517-scaled.webp"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            A Nairobi to Diani Beach safari links two very different sides of Kenya in a single itinerary. Starting
            in Nairobi, C.A.T.S Safaris guides you through wildlife-rich parks such as{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            and Tsavo, tracking elephant herds, lions and giraffe, before the route continues south-east to the
            palm-fringed shores of{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              Diani Beach
            </Link>
            .
          </p>
          <p>
            These itineraries are ideal for travellers who want the full Kenya story: game drives by day, a private
            4x4 Land Cruiser and driver-guide throughout, and a beach resort finish where you can relax, snorkel or
            dive the coral reef. With 15 years of experience routing overland journeys, we handle every transfer and
            border-free logistics.
          </p>
          <p>
            Prefer to start at the coast instead? See our{' '}
            <Link href="/kenya-safaris/beach-to-nairobi" className="text-[var(--forest-canopy)] underline">
              Kenya beach to Nairobi
            </Link>{' '}
            routes, which run the same journey in reverse.
          </p>
        </>
      }
      faqs={[
        {
          question: "When is the best time for a Nairobi to Diani safari?",
          answer:
            "June to October generally offers dry conditions for game drives in Amboseli and Tsavo, while January to March is often warm, clear and rewarding for wildlife and the coast. Shoulder seasons can bring greener scenery, fewer visitors and better value, though rain may affect some roads. C.A.T.S Safaris matches the route to your priorities because the best migration dates and the best beach weather do not always fall together.",
        },
        {
          question: "How much does a Nairobi to Diani safari cost?",
          answer:
            "Pricing depends on the number of safari nights, parks visited, accommodation, season, road or flight connections and whether you travel in a private or shared vehicle. Our quotation includes the agreed private 4x4 Land Cruiser, professional driver-guide, park fees, accommodation, meals and transfers, with inclusions itemised. Flights, drinks, tips, visas, optional beach activities, laundry and personal spending can be extra, and we identify those costs before payment.",
        },
        {
          question: "Is the Nairobi to Diani route safe?",
          answer:
            "Yes, it is a well-travelled Kenya safari route when managed by an experienced operator. C.A.T.S Safaris has 15 years of experience coordinating Nairobi departures, game drives and coastal arrivals, with driver-guides who understand wildlife behaviour and road conditions. Guests should follow instructions around animals and water, secure valuables, use hotel or camp escorts after dark and avoid unplanned roadside stops.",
        },
        {
          question: "Is this itinerary suitable for families with children?",
          answer:
            "Families often enjoy the variety of Nairobi, Amboseli or Tsavo and a relaxing finish at Diani Beach. We can use a private vehicle, schedule shorter driving stages, request family rooms and add pool or beach time so children are not in transit every day. Children must follow the guide's safety instructions near wildlife, and we discuss age suitability for boat trips, walking, cultural visits and other coastal activities.",
        },
        {
          question: "What should I pack for the journey from Nairobi to Diani?",
          answer:
            "Pack neutral, breathable safari layers, a warm fleece for early game drives, sun protection, insect repellent, closed shoes, a light rain jacket, binoculars and a refillable bottle. Add swimwear, sandals and reef-friendly sun protection for Diani, plus a small daypack for cameras, medication and documents. Soft-sided luggage fits the Land Cruiser and aircraft better, and a modest cover-up is useful for villages, towns and cultural visits.",
        },
        {
          question: "What health precautions are needed on this route?",
          answer:
            "Speak to a travel-health professional about routine vaccinations, recommended vaccines, malaria prevention and your individual medical needs before travelling. Malaria risk exists in safari and coastal areas, so use repellent, cover up at dusk and take prescribed medication as directed; protect yourself from heat, sun and dehydration as well. Bring personal medicines and prescriptions, and tell C.A.T.S Safaris about allergies, dietary requirements or mobility needs in advance.",
        },
        {
          question: "Which parks and wildlife are included on a Nairobi to Diani safari?",
          answer:
            "Many routes visit Amboseli for elephant herds and possible Mount Kilimanjaro views, then Tsavo East or Tsavo West for red-dust elephants, lions, buffalo, giraffe, zebra and birdlife. Taita Hills may be added for a different landscape, while routes with more time can include further wildlife areas. Sightings are wild and never guaranteed, but private game drives let the guide follow tracks, water sources and the conditions of the day.",
        },
        {
          question: "What vehicle and transfers are used, and how long are the drives to Diani?",
          answer:
            "The safari portion uses a private 4x4 Land Cruiser with seat belts, comfortable seating and a raised viewing roof for safe wildlife observation. Depending on your schedule, the journey can be completed by road, by flying one leg from Ukunda or Mombasa, or by combining road and air. Nairobi to Amboseli commonly takes four to five hours, and the onward route through Tsavo to Diani is broken into manageable stages rather than one direct eight- to nine-hour transfer; park tracks can be rough. We coordinate luggage, overnight stops, airport transfers and vehicle changes so families and older travellers can enjoy the route without an exhausting transfer.",
        },
        {
          question: "What accommodation and meals are included?",
          answer:
            "The route can use lodges, permanent tented camps and comfortable camps in different categories, followed by a Diani hotel or beach resort selected for your preferred atmosphere. Remote safari properties may use solar power or have scheduled hot water and limited WiFi, while beach hotels usually offer more conventional facilities. Meals can accommodate vegetarian, vegan, halal, gluten-free and allergy-aware diets with advance notice, and bush dining or a private beach meal can be arranged where appropriate.",
        },
        {
          question: "Can I customise the Nairobi to Diani itinerary?",
          answer:
            "Yes, we can adjust the parks, number of nights, accommodation, game-drive rhythm, beach length and transport method around your dates. Add Amboseli elephants, Tsavo, Taita Hills, a cultural experience, a flight, diving or a dhow excursion, or remove a long road section for a more relaxed route. Private travel gives the most control, while group options may suit travellers prioritising a lower price.",
        },
        {
          question: "What are the tipping customs on the Nairobi-to-Diani route?",
          answer:
            "Tipping is optional and based on service; many guests thank the driver-guide at the end of the safari and contribute to a shared lodge tip box for camp staff. At Diani, gratuities for hotel staff, drivers, boat crew or activity guides can be given separately according to the service received. We explain current local practice and each property's system so tips are fair and are not confused with package costs.",
        },
        {
          question: "Can solo travellers book this route?",
          answer:
            "Yes, solo guests can travel privately with a dedicated guide, join a small group or combine a private safari with an independent Diani stay. A single supplement may apply to the room, vehicle and some transfers, and we show it clearly in the quote while checking shared options. The guide provides support during long road stages and game drives, while Diani offers a relaxed, social base for optional activities.",
        },
        {
          question: "How should I photograph the safari and coast, and will I have connectivity?",
          answer:
            "Bring a telephoto lens, spare batteries, memory cards, dust protection and binoculars for elephants and predators, with a wider lens for Kilimanjaro and Diani's shoreline. Early and late game drives give the best light, and the guide can position the Land Cruiser patiently without disturbing wildlife; protect equipment from beach sand and salt. WiFi and mobile signal are variable in parks and stronger in Nairobi and Diani, so download documents and expect occasional offline stretches.",
        },
        {
          question: "How far ahead should I book, and what happens if I need to cancel?",
          answer:
            "Book several months ahead for school holidays, dry-season travel, migration add-ons and popular Diani resorts, especially if family rooms or flights are needed. We recommend travel insurance covering cancellation, medical evacuation, delays, baggage, activities and non-refundable deposits. C.A.T.S Safaris explains supplier deadlines before payment and will help amend dates, hotels, parks or transport when availability permits.",
        },
        {
          question: "How physically demanding is the route, and can I add cultural experiences?",
          answer:
            "The game drives are seated, but long roads, bumpy park tracks, vehicle steps, heat and uneven lodge paths can affect older guests or travellers with limited mobility, so tell us early. Walking, swimming, snorkelling and other beach activities are optional, and we can add rest days and accessible transfers. Where suitable, we can arrange a respectful Maasai or local-community visit with consent, guidance on dress and responsible photography.",
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Tsavo', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Diani Beach', href: '/kenya-safaris/safaris-from-diani', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Beach to Nairobi', href: '/kenya-safaris/beach-to-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
