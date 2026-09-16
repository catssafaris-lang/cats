import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi Excursions & National Park Safaris | CATS',
  description: 'Explore Nairobi National Park on private or group safaris, plus city excursions and cultural tours. Half-day, full-day, and combo packages departing daily from Nairobi.',
  alternates: { canonical: '/kenya-safaris/nairobi-excursions' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('nairobi-departure') &&
      (s.type?.includes('day-trip') || s.type?.includes('group-safari')) &&
      (s.slug.includes('nairobi-national-park') ||
        s.type?.includes('culture') ||
        s.type?.includes('artisan') ||
        s.slug.includes('nairobi-into-africa')),
  );

  return (
    <SafariListingPage
      title="Nairobi Excursions & National Park Safaris"
      subtitle="Wildlife, Culture, Conservation & City Discovery"
      description="Experience Africa's wildest capital city. Join a private or group safari through Nairobi National Park — where lions, rhinos, giraffes, and over 400 bird species roam just 7 km from downtown. Or explore the city's cultural highlights, conservation centres, and artisan workshops on guided excursions departing daily from Nairobi hotels."
      heroImage="https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Nairobi offers more than a stopover between flights. Beyond game drives in{' '}
            <Link href="/kenya-safaris/nairobi-day-trips" className="text-[var(--forest-canopy)] underline">
              Nairobi National Park
            </Link>
            , the city is home to the David Sheldrick Wildlife Trust elephant orphanage, the Giraffe Centre, and
            vibrant artisan markets showcasing Kenyan craft and culture. C.A.T.S Safaris arranges these excursions
            privately or as part of a small group, with pickup from your Nairobi hotel.
          </p>
          <p>
            These half and full-day tours suit travellers extending a business trip, arriving before a longer{' '}
            <Link href="/kenya-safaris/short-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya safari
            </Link>
            , or looking for a cultural counterpoint to wildlife viewing. With 15 years of local knowledge, our guides
            add context and access that a self-drive visit cannot match.
          </p>
          <p>
            Prefer a shared, budget-friendly option? See our{' '}
            <Link href="/kenya-safaris/group-tours-nairobi" className="text-[var(--forest-canopy)] underline">
              group tours from Nairobi
            </Link>{' '}
            for scheduled departures.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time for Nairobi excursions and city safaris?',
          answer:
            "Nairobi National Park is rewarding year-round, with June to October and January to February often bringing drier tracks and comfortable sightseeing weather. Cultural attractions such as the Giraffe Centre, Karen Blixen Museum and artisan workshops can be visited in any season, subject to their opening hours. We plan around morning wildlife activity, rain forecasts and your airport or safari connection.",
        },
        {
          question: 'How much do Nairobi excursions and national park tours cost?',
          answer:
            "Pricing depends on the number of hours, private or shared vehicle, park and attraction entrance fees, guide service, transfers and the number of stops. A private 4x4 Land Cruiser costs more than a group tour but allows your party to choose the pace and interests. We itemise transport, tickets, meals and optional conservation or cultural activities in the quotation.",
        },
        {
          question: 'Are Nairobi city excursions and national park visits safe?',
          answer:
            "Yes, C.A.T.S Safaris has 15 years of experience arranging guided Nairobi itineraries with professional driver-guides and vetted attraction partners. The guide manages city traffic, secure drop-offs, park regulations and wildlife distances, while guests follow site instructions at museums, markets and conservation centres. We monitor local conditions and can adjust the route if weather, traffic or an attraction schedule changes.",
        },
        {
          question: 'Are Nairobi excursions suitable for families with children?',
          answer:
            "Yes, families can combine a short Nairobi National Park game drive with the Giraffe Centre, elephant conservation visit or a suitable cultural stop. Children usually enjoy seeing giraffes and learning about rescued elephants, while a private vehicle lets us include breaks and adjust the pace. Share the children’s ages and interests so we can avoid an overlong day and confirm attraction age policies.",
        },
        {
          question: 'What should I pack and wear for a Nairobi excursion?',
          answer:
            "Wear comfortable layers and closed shoes for getting in and out of the vehicle and walking around museums, workshops or visitor paths. Bring a hat, sunscreen, water, insect repellent, a light jacket for early game drives, binoculars and a camera, and keep valuables secure in a small day bag. Modest clothing is respectful at cultural sites, while a soft bag is easiest if you are travelling onward to a safari or airport.",
        },
        {
          question: 'Are there health, mobility or accessibility considerations?',
          answer:
            "Consult a travel clinician about Kenya health advice and carry any required medication with you, particularly on a full-day combination. Nairobi traffic and attraction grounds can involve walking, uneven paving, steps or queues, but we can shorten the route, request assistance and select more accessible stops where available. Tell us about mobility limits, pregnancy, medical needs or sensory considerations before we finalise the schedule.",
        },
        {
          question: 'What wildlife can I see on a Nairobi National Park excursion?',
          answer:
            "The park holds black rhino, lion, leopard, giraffe, zebra, buffalo, eland, hippo and more than 400 bird species, often with the city skyline as a striking backdrop. The Giraffe Centre offers close educational encounters with Rothschild’s giraffe, while the David Sheldrick Wildlife Trust focuses on rescued elephants during its visitor sessions. Wild sightings are never guaranteed, and our guides prioritise respectful observation rather than promising a particular animal.",
        },
        {
          question: 'What vehicle is used for Nairobi excursions?',
          answer:
            "Wildlife-focused excursions use a well-maintained 4x4 Land Cruiser with a pop-up roof, large windows, seat belts and high clearance for park tracks. City and cultural visits can use an appropriate private vehicle, with the guide coordinating convenient drop-offs and secure parking. The Land Cruiser is comfortable for game viewing, although park roads may be bumpy and city traffic can lengthen transfers.",
        },
        {
          question: 'How long do Nairobi excursions take, and when are pickups?',
          answer:
            "A half-day can cover one major attraction or a compact park drive, while a full day allows Nairobi National Park plus one or two cultural or conservation stops. Pickup is arranged from your Nairobi hotel, residence or airport, often early for wildlife and later for museums according to opening times. Traffic around the CBD, Karen and the airport is unpredictable, so we build realistic buffers into every airport or onward-safari transfer.",
        },
        {
          question: 'What is included and excluded in a Nairobi excursion?',
          answer:
            "The package normally includes pickup and drop-off, private transport, a professional driver-guide and the game drive or attractions listed in your itinerary. Park and attraction tickets, meals, drinks, tips, travel insurance and personal purchases may be separate unless clearly included in the quotation. We confirm opening hours, ticket costs, airport transfers and any child or photography fees before departure.",
        },
        {
          question: 'Can I customise a Nairobi wildlife, culture and conservation tour?',
          answer:
            "Yes, you can focus on wildlife, conservation, history, artisan craft, food and culture or combine several highlights at a comfortable pace. Popular combinations include Nairobi National Park with the Giraffe Centre, David Sheldrick Wildlife Trust, Karen Blixen Museum, Kazuri Beads or Maasai Market, subject to opening hours. Our local team uses 15 years of experience to sequence stops around traffic and your onward flight or safari.",
        },
        {
          question: 'How many people can join, and are private Nairobi excursions available?',
          answer:
            "Private excursions are available for solo travellers, couples, families and larger parties, with a vehicle and driver-guide reserved for your booking. Scheduled group tours can reduce the cost per person but use a fixed route and may combine guests with different interests. Tell us your group size, mobility needs and priorities so we can recommend the right vehicle and format.",
        },
        {
          question: 'Can you accommodate dietary needs, and is tipping expected?',
          answer:
            "We can arrange vegetarian, vegan, halal and allergy-aware meals or restaurant stops when requested before the excursion, although short museum or park outings may not include lunch. Carry water and a snack for traffic delays, especially when travelling with children or managing an allergy. Tips for the driver-guide and attraction staff are voluntary and appreciated for good service, and we can advise on customary local etiquette.",
        },
        {
          question: 'What are the best photography opportunities in Nairobi?',
          answer:
            "Nairobi National Park offers black rhino, giraffe, lion and bird photography with grassland and skyline backgrounds, while the Giraffe Centre and artisan workshops provide distinctive close cultural images. Always ask before photographing people, craftspeople or children, and follow each attraction’s photography rules. Bring a camera, spare battery and memory card, and use the Land Cruiser’s pop-up roof for wildlife angles without leaving the vehicle in an unsafe area.",
        },
        {
          question: 'How far ahead should I book, and can I change or cancel?',
          answer:
            "Book early for school holidays, peak safari dates and timed conservation visits because vehicle availability and attraction sessions can be limited. We confirm the deposit and the cancellation terms for each park, museum or conservation partner in writing, including any non-refundable ticket. If your flight or meeting changes, contact us promptly and we will try to shift the schedule or substitute an attraction subject to availability.",
        },
      ]}
      relatedDestinations={[
        { name: 'Nairobi Day Trips', href: '/kenya-safaris/nairobi-day-trips', image: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg' },
        { name: 'Group Tours from Nairobi', href: '/kenya-safaris/group-tours-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
