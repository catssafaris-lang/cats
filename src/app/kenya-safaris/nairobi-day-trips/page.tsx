import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi Day Trips and Day Safaris | CATS Safaris Kenya',
  description: 'Choose a Nairobi day trip or day safari for game drives, wildlife encounters and memorable Kenya experiences close to the capital.',
  alternates: { canonical: '/kenya-safaris/nairobi-day-trips' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('day-trip') && s.type?.includes('nairobi-departure') && !s.type?.includes('group'),
  );

  return (
    <SafariListingPage
      title="Nairobi Day Trips and Day Safaris"
      subtitle="Wild Kenya Within Easy Reach"
      description="Turn one day in Nairobi into an authentic Kenya safari experience. Explore Nairobi National Park and nearby highlights on private, guided day trips, with game drives for rhino, lion, giraffe and more, plus the flexibility to match the adventure to your schedule."
      heroImage="https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Nairobi is the only capital city in the world with a national park inside its boundaries, and{' '}
            <Link href="/kenya-safaris/nairobi-day-trips" className="text-[var(--forest-canopy)] underline">
              Nairobi National Park
            </Link>{' '}
            is just a 20-minute drive from downtown. On a single-day safari with C.A.T.S Safaris, you can spot black
            rhino, lion, giraffe, buffalo and over 400 bird species with the city skyline visible in the distance.
          </p>
          <p>
            These day trips run in a private 4x4 Land Cruiser with a professional guide and can begin or end at your
            Nairobi hotel or the airport, making them ideal for guests on a layover or a short business trip. If you
            would prefer a longer wildlife experience, our{' '}
            <Link href="/kenya-safaris/short-safaris" className="text-[var(--forest-canopy)] underline">
              short safaris from Nairobi
            </Link>{' '}
            extend the adventure to the Masai Mara or Amboseli.
          </p>
          <p>
            For city culture, conservation centres and artisan visits alongside wildlife, see our{' '}
            <Link href="/kenya-safaris/nairobi-excursions" className="text-[var(--forest-canopy)] underline">
              Nairobi excursions
            </Link>{' '}
            page.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time for a Nairobi day safari?',
          answer:
            "Nairobi National Park is open for rewarding wildlife viewing throughout the year, with June to October and January to February usually offering drier tracks and concentrated animals. Early morning is often best for cool temperatures, active predators and clear light, while late afternoon can also be productive. C.A.T.S Safaris checks park conditions and your schedule before recommending a half-day or full-day departure.",
        },
        {
          question: 'How much does a Nairobi day trip or day safari cost?',
          answer:
            "Price depends on the duration, park entrance fees, vehicle, number of travellers, guide service and whether you add an airport transfer or cultural stop. A private 4x4 Land Cruiser costs more than a shared option but lets your party control the pace and route within park rules. We give a written quotation with transport, fees, meals and optional activities separated clearly.",
        },
        {
          question: 'Is Nairobi National Park safe for a day trip?',
          answer:
            "Yes, it is a protected park visited daily by guided vehicles, and C.A.T.S Safaris has 15 years of experience operating around Nairobi. Your professional driver-guide follows park rules, maintains safe distances from wildlife and keeps you informed about where it is safe to stop or leave the vehicle. We also allow for city traffic and coordinate secure hotel or airport pickup and return.",
        },
        {
          question: 'Are Nairobi day safaris suitable for families with children?',
          answer:
            "Yes, Nairobi National Park is a convenient first Kenya safari for families because it avoids a long transfer to the Mara or Amboseli. Children can look for rhino, lion, giraffe, zebra and birds, with a private vehicle allowing comfort breaks and age-appropriate pacing. We recommend discussing the children’s ages so we can choose an early or shorter drive and add a suitable conservation visit.",
        },
        {
          question: 'What should I pack and wear for a Nairobi day trip?',
          answer:
            "Wear comfortable neutral-coloured layers, closed shoes and a light jacket for the cool early morning, and bring a hat, sunscreen, insect repellent, water, binoculars and a camera. A small day bag is sufficient for a city-to-park outing, and soft luggage is easiest if you are connecting to an airport transfer. Keep valuables and travel documents with you rather than leaving them in the vehicle.",
        },
        {
          question: 'Are there health or accessibility considerations in Nairobi National Park?',
          answer:
            "Ask a travel clinician about routine vaccinations and malaria advice for Kenya, and carry any prescribed medication with you. The 4x4 is generally more accessible than a walking tour, but park tracks are bumpy and some visitor facilities have uneven ground or steps, so tell us about mobility needs in advance. We can plan shorter drives, assistance and a suitable vehicle where available.",
        },
        {
          question: 'What wildlife can I see on a Nairobi day safari?',
          answer:
            "The park is known for black rhino, lion, leopard, giraffe, zebra, buffalo, eland, hippo and more than 400 bird species, with the city skyline sometimes visible beyond the grasslands. Sightings are never guaranteed because animals move freely, but early and late drives improve the chances of active wildlife. Our guides use local knowledge and patient observation rather than crowding animals.",
        },
        {
          question: 'What vehicle is used, and is it comfortable for a full day?',
          answer:
            "Private Nairobi day safaris use a well-maintained 4x4 Land Cruiser with a pop-up roof, large viewing windows, seat belts and high clearance for park tracks. The suspension handles rough sections, though a safari is still an outdoor drive with some natural bumps. Your professional driver-guide can adjust the pace, stop at permitted viewpoints and arrange comfort breaks.",
        },
        {
          question: 'What time do Nairobi day trips start and finish?',
          answer:
            "Early morning trips commonly start before sunrise, while half-day and afternoon options can begin later according to your hotel, flight or business schedule. A full day usually lasts around four to eight hours in the park and city, with the exact return time affected by traffic and the itinerary. We build extra time into airport transfers because Nairobi congestion can be unpredictable.",
        },
        {
          question: 'What is included and excluded in a Nairobi day safari?',
          answer:
            "The package normally includes Nairobi hotel or airport pickup, private 4x4 transport, a professional driver-guide, the listed park entrance fees and the game drive. Meals, drinks, conservation-centre tickets, travel insurance, tips and personal purchases are excluded unless specifically shown in the quotation. We confirm whether each optional stop, airport drop-off and child seat is included before departure.",
        },
        {
          question: 'Can I customise a Nairobi day trip around my schedule?',
          answer:
            "Yes, we can tailor the departure time, half-day or full-day duration, park route, airport connection and optional conservation or cultural visit. Popular combinations include Nairobi National Park with the Giraffe Centre or David Sheldrick Wildlife Trust, subject to opening hours and travel time. Our 15 years of local experience help sequence stops realistically around traffic rather than overloading one day.",
        },
        {
          question: 'How many people can join a Nairobi day safari, and are private trips available?',
          answer:
            "Private trips reserve the 4x4 Land Cruiser and driver-guide for your party, making them ideal for solo travellers, couples and families who want flexible stops. Shared departures may lower the cost but follow a fixed route and can involve other guests’ preferences. Tell us your group size and we will recommend the most comfortable vehicle and format.",
        },
        {
          question: 'Can you accommodate dietary needs and what is the tipping etiquette?',
          answer:
            "We can arrange vegetarian, vegan, halal, child-friendly and allergy-aware meals or snacks when requested in advance, although many half-day trips do not include a meal. Bring water and any essential food for a busy schedule, particularly if you have a severe allergy. Tips for the driver-guide are voluntary and appreciated for good service, and we can advise on customary amounts without adding an automatic charge.",
        },
        {
          question: 'What photography opportunities does a Nairobi day safari offer?',
          answer:
            "Nairobi National Park offers distinctive photographs of black rhino, giraffe, lion, zebra and birdlife with a modern city skyline or acacia grassland backdrop. The Land Cruiser’s pop-up roof provides useful angles, and the guide can position the vehicle respectfully while following park rules. Bring a telephoto lens, spare batteries, memory cards and a dust cloth, especially for early light and dry tracks.",
        },
        {
          question: 'How far ahead should I book, and can I cancel or change a day trip?',
          answer:
            "Booking a few days ahead is wise for peak dates, park entry availability and a specific airport schedule, although we can often arrange a last-minute Nairobi excursion. We confirm the deposit and cancellation terms in writing, including any non-refundable park or attraction fees. If your flight or meeting changes, contact us promptly and we will try to move the start time or date subject to availability.",
        },
      ]}
      relatedDestinations={[
        { name: 'Nairobi Excursions', href: '/kenya-safaris/nairobi-excursions', image: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Group Tours from Nairobi', href: '/kenya-safaris/group-tours-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
      ]}
    />
  );
}
