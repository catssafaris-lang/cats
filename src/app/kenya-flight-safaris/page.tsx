import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Flight Safaris | Fly-In Safaris to Masai Mara & Amboseli | CATS',
  description: 'Scenic bush flights from Nairobi to the Masai Mara, Amboseli, Samburu, Laikipia, Tsavo, Lamu and Diani Beach. Skip the drive and fly straight into the wild.',
  alternates: { canonical: '/kenya-flight-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('flight-safari'));

  return (
    <SafariListingPage
      title="Kenya Flight Safaris"
      subtitle="Skip the Drive, Soar Into the Wild"
      description="Scenic bush flights from Nairobi to the Masai Mara, Amboseli, Samburu, Laikipia, Tsavo, Lamu and Diani Beach — less time travelling, more time watching wildlife."
      heroImage="https://images.pexels.com/photos/16444267/pexels-photo-16444267.jpeg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            For travellers who want to maximise every moment in the wild, a Kenya flight safari is the fastest way to
            experience the country&apos;s parks. Skip the long road transfers and fly directly from Nairobi&apos;s
            Wilson Airport onto bush airstrips inside{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>
            ,{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>
            , Samburu and other leading reserves, often reaching your first game drive in under 90 minutes.
          </p>
          <p>
            With 15 years of experience arranging fly-in safaris across Kenya, C.A.T.S Safaris partners with trusted
            bush aviation operators and premium lodges to deliver seamless air safari experiences. Choose a quick
            2–3 day Amboseli escape, a dedicated Masai Mara migration fly-in, or a longer multi-park circuit linking
            Samburu to the Indian Ocean coast.
          </p>
          <p>
            Prefer a private 4x4 road safari instead? Explore our{' '}
            <Link href="/kenya-safaris/short-safaris" className="text-[var(--forest-canopy)] underline">
              short safaris from Nairobi
            </Link>{' '}
            or{' '}
            <Link href="/kenya-safaris/extended-safaris" className="text-[var(--forest-canopy)] underline">
              extended safaris
            </Link>
            .
          </p>
        </>
      }
      groups={[
        {
          title: '2 & 3-Day Quick Escapes',
          description: 'Perfect for short stays or add-ons — fly in, experience the wild, fly back to Nairobi.',
          safaris: filtered.filter((s) => s.duration <= 3),
        },
        {
          title: '4 & 5-Day Immersive Safaris',
          description: 'Multi-park fly-in itineraries combining migration season, beach and bush, or conservation experiences.',
          safaris: filtered.filter((s) => s.duration === 4 || s.duration === 5),
        },
        {
          title: '6+ Day Grand Circuits',
          description: 'The ultimate Kenya experiences — multiple reserves connected by air for a complete safari journey.',
          safaris: filtered.filter((s) => s.duration >= 6),
        },
      ]}
      faqs={[
        {
          question: 'What aircraft are used on a flight safari Kenya itinerary?',
          answer:
            'Kenya bush flights generally use reliable light aircraft configured for short-field operations, with the exact model depending on the route, airstrip and operator. Aircraft are flown by licensed pilots under the operator’s aviation procedures, and CATS works with established bush-flight partners rather than informal providers. We confirm the planned sectors, aircraft rules and passenger details before ticketing, while operational decisions always rest with the pilot and airline.',
        },
        {
          question: 'How much luggage can I take on a Kenya flight safari?',
          answer:
            'Many bush flights allow around 15 kilograms per passenger in soft-sided luggage, although limits vary by aircraft, route and whether the flight is full. Hard cases and bulky bags may not fit, so we confirm the exact allowance and can arrange secure storage in Nairobi for items you do not need in the bush. Pack compactly with essentials, camera equipment and medication in a small personal bag.',
        },
        {
          question: 'How long are flights from Nairobi to Kenya’s parks?',
          answer:
            'A direct flight from Wilson Airport to the Masai Mara is often around 45 minutes, while Amboseli, Samburu, Laikipia, Tsavo, Lamu and Diani vary by route and may include intermediate airstrips. Scheduled bush flights can make multiple stops to collect or drop guests, which is part of the safari experience. CATS builds realistic transfer and first-game-drive times around the published schedule rather than promising an exact airborne duration.',
        },
        {
          question: 'Will I see wildlife or scenery from the aircraft?',
          answer:
            'Low-level bush flights offer superb views of Kenya’s rift valleys, savannah, forests, farms and coast, and occasional wildlife sightings are possible, though they are not a substitute for a game drive. Window seats are not guaranteed on every aircraft, but the small cabin gives most passengers a good view. We can choose routes and connections with scenic value while keeping the main focus on time in the reserve.',
        },
        {
          question: 'Why choose a flight safari instead of driving?',
          answer:
            'Flying can reduce a Nairobi-to-Mara transfer from roughly five or six hours by road to under an hour, leaving more time for game drives and reducing fatigue. A road safari offers changing landscapes, flexible roadside stops and sometimes a lower price, so the right choice depends on time, budget and the journey you want. CATS can combine flights in one direction with a private 4x4 road segment for a balanced Kenya safari.',
        },
        {
          question: 'Is a flight safari more expensive than a road safari?',
          answer:
            'Usually yes, because it includes airfares, airstrip transfers and the operational cost of small aircraft, but the time saved can be especially valuable on a short trip. Flying also provides access to remote conservancies and reduces long transfer days, which many guests consider worthwhile. We compare the full costs and game-drive time of both options so you can choose value rather than simply the lowest initial fare.',
        },
        {
          question: 'Which destinations can I reach by flight in Kenya?',
          answer:
            'Scheduled and charter links serve the Masai Mara, Amboseli, Samburu, Laikipia conservancies, Tsavo, Lamu and Diani Beach, with availability varying by season and operator. Multi-park routes can connect bush and coast without returning to Nairobi, although the best sequence depends on airstrip schedules. CATS checks the practical connections and pairs flights with lodge transfers and private guides at each destination.',
        },
        {
          question: 'How far ahead should I book a flight safari?',
          answer:
            'Book several months ahead for peak migration dates, Christmas, school holidays, popular camps and limited seats on small aircraft. Shorter trips in quieter periods may have more flexibility, but last-minute bookings can force a different airstrip, lodge or routing. We reserve the accommodation and flight sectors together where possible so a change in one does not undermine the rest of your itinerary.',
        },
        {
          question: 'What happens if weather cancels or delays a bush flight?',
          answer:
            'Bush aviation is weather-dependent, and heavy rain, low cloud, wind or airstrip conditions can require a delay, rerouting or cancellation for safety. Your pilot and airline make the operational decision, while CATS monitors the situation, communicates updates and works on road, later-flight or accommodation alternatives. Travel insurance covering delays, missed connections and additional costs is strongly recommended, particularly on a tightly timed international itinerary.',
        },
        {
          question: 'What are Kenya’s bush airstrips like?',
          answer:
            'Many airstrips are simple graded or grass runways near a conservancy or national park, without a conventional terminal building. Guests may wait in a small shelter, and aircraft can land close to wildlife areas under strict park procedures, so your guide will explain where to stand and when to move. We select reputable operators and arrange a lodge representative or private guide to meet you at the airstrip.',
        },
        {
          question: 'When is the best season for a Kenya flight safari?',
          answer:
            'Flight safaris operate year-round, with dry periods generally offering easier road access, clearer skies and strong wildlife viewing, while green seasons can bring dramatic scenery and attractive rates. The Masai Mara migration is seasonal, whereas resident wildlife in Amboseli, Samburu and other reserves remains rewarding outside peak months. CATS matches your chosen parks, migration hopes and tolerance for weather variability to the most suitable dates.',
        },
        {
          question: 'Are Kenya flight safaris safe for families and children?',
          answer:
            'Families can enjoy a fly-in safari, particularly when short flights replace tiring road transfers and lodges provide family rooms or child-friendly programmes. We check each airline’s child and infant policies, baggage limits and lodge age restrictions before confirming the route. A private 4x4 at the destination lets your guide adapt game drives, meal stops and activity length to the family’s needs.',
        },
        {
          question: 'What should I pack, and are there health precautions?',
          answer:
            'Use soft-sided luggage, pack light layers, a fleece for early game drives, sun protection, insect repellent, closed shoes, binoculars and spare camera batteries. Ask a travel-health professional about routine vaccinations, malaria prevention and personal medication, and keep prescriptions in your hand luggage. We confirm laundry availability and the exact baggage allowance, then can store larger bags safely in Nairobi if your route requires it.',
        },
        {
          question: 'What accommodation and food are included on a fly-in safari?',
          answer:
            'Fly-in itineraries use a range of tented camps, lodges and conservancy properties selected for airstrip access, comfort, wildlife setting and budget. Full-board plans commonly include breakfast, lunch and dinner, with packed meals arranged for longer game drives, and most properties can accommodate vegetarian, vegan, halal or allergy-related diets when advised early. CATS confirms room configuration, meal plan, drinks and any conservation or park charges in the quotation.',
        },
        {
          question: 'Can CATS customise a flight safari, and what about tipping or insurance?',
          answer:
            'Yes, we can build a short Masai Mara escape, a multi-park flight safari Kenya circuit, a migration trip or a bush-and-Zanzibar beach combination around your dates and budget. Tipping is discretionary, and we explain practical expectations for pilots, guides, drivers and camp staff so you can reward good service appropriately. Comprehensive insurance for cancellation, medical care, evacuation, delays and baggage is essential, and we make airline and lodge terms clear before payment.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Samburu', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/reticulated-giraffe-giraffa-camelopardalis-reticulata-samburu-national-reserve-kenya_28942449116_o.jpg' },
        { name: 'Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]}
    />
  );
}
