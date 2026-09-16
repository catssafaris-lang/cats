import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Safari Tours from Kenya Beach | CATS Safaris',
  description: 'Join a group safari from Diani, Mombasa or Kenya’s coast for guided game drives and wildlife encounters in Tsavo and beyond.',
  alternates: { canonical: '/kenya-safaris/group-tours-beach' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('group-safari') &&
      (s.type?.includes('diani-departure') || s.type?.includes('mombasa-departure') || s.type?.includes('beach')),
  );

  return (
    <SafariListingPage
      title="Group Safari Tours from Kenya Beach"
      subtitle="Coast-to-Bush Group Adventures"
      description="Trade Kenya’s palm-fringed coast for the red-earth wilderness of Tsavo on a shared group safari from Diani or Mombasa. Enjoy guided game drives among elephants, lions and other African wildlife, then return to the Indian Ocean with stories from the bush to take home."
      heroImage="https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Guests staying at Diani or Mombasa can join a scheduled group safari into Tsavo without booking a fully
            private vehicle. C.A.T.S Safaris runs these coast-departure group tours with the same 4x4 Land Cruisers
            and professional guides used on our private routes, at a lower shared cost.
          </p>
          <p>
            Group tours from the coast are ideal for solo travellers and budget-conscious groups who still want a
            genuine wildlife encounter with elephants, lion, buffalo and giraffe. For full flexibility and a private
            vehicle, see our{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              multi-day safaris from Diani Beach
            </Link>
            . With 15 years of coastal operating experience, our team knows exactly how to time these shared
            departures around your resort stay.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time for a group safari from Diani or Mombasa?',
          answer:
            "Tsavo East and Tsavo West are particularly comfortable for game viewing in the dry seasons from June to October and January to February. Wildlife is visible year-round, and the green season can bring beautiful landscapes and fewer visitors, although rain may affect tracks. C.A.T.S Safaris helps you choose a departure date that fits both beach conditions and the best wildlife opportunities.",
        },
        {
          question: 'How much does a group safari from the Kenya coast cost?',
          answer:
            "Sharing a 4x4 Land Cruiser, guide and some operating costs makes a group safari less expensive than an equivalent private coast-to-bush trip. Price still varies with the number of nights, park fees, lodge category, season, meals and whether the departure is a day trip or overnight itinerary. We explain what is included and can compare the shared price with a private vehicle if your group values flexibility.",
        },
        {
          question: 'Are group safaris from Diani or Mombasa safe?',
          answer:
            "Yes, our professional driver-guides have 15 years of experience on the coastal routes and in Tsavo’s park environment. The guide follows park regulations, maintains safe wildlife distances and coordinates the group at stops, while guests remain in the vehicle unless an authorised area is clearly designated. We use established lodges and monitor roads, weather and any transfer changes before departure.",
        },
        {
          question: 'Are coast-departure group safaris suitable for families?',
          answer:
            "They can suit families with school-age children who are comfortable sharing a vehicle and following a fixed schedule. Early starts, long road sections and bumpy Tsavo tracks can be tiring for toddlers, so a private safari may be better when you need frequent breaks or a flexible pace. Tell us the children’s ages and we can recommend a manageable overnight itinerary, family room and meal plan.",
        },
        {
          question: 'What should I pack and wear for a group safari from the beach?',
          answer:
            "Bring light neutral layers, comfortable trousers, a fleece for cool mornings, closed shoes, sun protection, insect repellent, a refillable bottle and a soft-sided bag. Binoculars and a camera are useful, while bright beach clothing and hard suitcases are less practical in a shared Land Cruiser. Keep essential medication, documents and valuables in your day bag rather than the luggage compartment.",
        },
        {
          question: 'What health or mobility issues should I consider?',
          answer:
            "Ask a travel clinician about vaccinations and malaria prevention, and bring prescriptions in their original packaging. Tsavo roads are uneven and lodge paths may have steps, so guests with limited mobility should tell us before joining a shared departure; we can discuss an accessible lodge or private vehicle where more assistance is possible. Motion sickness medication, hydration and regular rest stops are helpful on the road from the coast.",
        },
        {
          question: 'Which wildlife can I expect in Tsavo on a group safari?',
          answer:
            "Tsavo is famous for red-dust elephants and can also produce sightings of lion, buffalo, giraffe, zebra, antelope, hippo and abundant birdlife. Tsavo West adds volcanic scenery, while some routes may include Amboseli for elephants beneath Mount Kilimanjaro. Wildlife is free-ranging and never guaranteed, but our guides use local knowledge and patient game drives to improve your chances respectfully.",
        },
        {
          question: 'What vehicle is used, and will a shared safari be comfortable?',
          answer:
            "Group departures use a well-maintained 4x4 Land Cruiser with a pop-up roof, open viewing sides, seat belts and high clearance for Tsavo tracks. Sharing means you should expect less personal space and a schedule agreed with fellow travellers, but the vehicle still provides excellent wildlife visibility. C.A.T.S matches numbers to the vehicle’s safe capacity and can quote a private Land Cruiser if comfort or privacy is a priority.",
        },
        {
          question: 'How long are the tours, and how do beach pickups work?',
          answer:
            "The selection includes long day safaris and overnight or multi-day group itineraries, with exact timings depending on Tsavo entry, lodge and game-drive plans. Pickup and drop-off are arranged at Diani, Mombasa or the specified coastal resort, often before sunrise to reach the park early. Traffic around Mombasa, ferry or road conditions can affect timing, so we confirm a realistic meeting point and return window.",
        },
        {
          question: 'What is included and excluded in a coast group safari?',
          answer:
            "The quoted package normally includes resort pickup and drop-off, shared 4x4 transport, a professional driver-guide, park fees, accommodation on overnight trips, specified meals and the listed game drives. Drinks, tips, travel insurance, visas, personal purchases and activities not shown in the itinerary are usually excluded. We provide the final inclusions in writing so each traveller knows what to budget for before joining the group.",
        },
        {
          question: 'Can a group safari from the coast be customised?',
          answer:
            "A scheduled group departure has a set park route, dates and game-drive schedule so every guest receives the shared price. We can often advise on lodge category, beach pickup, dietary needs or adding a private pre- or post-safari transfer, while major route changes usually require a private booking. If your party needs a slower pace or extra photography time, a private Tsavo safari is the more flexible option.",
        },
        {
          question: 'How many travellers join a group safari, and can I book privately?',
          answer:
            "Group vehicles commonly carry up to six or seven travellers plus the professional driver-guide, subject to the selected vehicle and departure. Solo travellers are welcome, and families or friends can request seats together, but the final group is confirmed according to bookings. A private 4x4 Land Cruiser is available for couples, families or friends who prefer their own vehicle and schedule.",
        },
        {
          question: 'Can the lodges provide special diets and what is the tipping etiquette?',
          answer:
            "Vegetarian, vegan, halal and many allergy-aware meals can be requested from the lodge when we receive the information before departure. Carry water and a snack for the long coastal road, and tell us about severe allergies or children’s needs in advance. Tips for the driver-guide and lodge staff are appreciated for good service but are voluntary; we can explain customary amounts without adding them automatically to your package.",
        },
        {
          question: 'What photography opportunities are there on a Tsavo group safari?',
          answer:
            "Tsavo offers dramatic red-earth elephants, big skies, baobabs, lions and changing coastal-to-bush landscapes that photograph well in early and late light. The pop-up roof gives everyone viewing and camera angles, although a shared vehicle means the guide must balance several guests’ requests. Bring spare batteries, memory cards and dust protection, and follow the guide’s instructions so photography never disturbs wildlife.",
        },
        {
          question: 'How far ahead should I book, and what happens if I need to cancel?',
          answer:
            "Book early for school holidays, peak dry-season dates and a specific Diani or Mombasa pickup because group seats and lodges are limited. We confirm the deposit, departure details and accommodation cancellation terms in writing, and those supplier terms determine the refund or date-change options. If plans change, tell C.A.T.S Safaris as soon as possible so we can seek an alternative departure or transfer, subject to availability.",
        },
      ]}
      relatedDestinations={[
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Group Tours from Nairobi', href: '/kenya-safaris/group-tours-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Diani Excursions', href: '/kenya-safaris/diani-excursions', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
      ]}
    />
  );
}
