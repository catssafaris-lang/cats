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
      heroImage="https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/nairobi-national-park-rhino.jpg"
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
          question: 'Is Nairobi National Park worth visiting on a day trip?',
          answer:
            'Yes. Despite its proximity to the city, the park holds a healthy population of black rhino along with lion, giraffe, zebra, buffalo and abundant birdlife, making it a genuinely rewarding half or full day safari.',
        },
        {
          question: 'How long does a Nairobi day safari take?',
          answer:
            'Most day trips run 4 to 8 hours depending on whether you choose a half-day or full-day itinerary, with private transport from your Nairobi hotel included.',
        },
        {
          question: 'Can I do a day safari before an evening flight?',
          answer:
            'Yes, our Nairobi day trips are popular with travellers on a layover, and we can plan the schedule around your flight time with a direct airport transfer afterward.',
        },
        {
          question: 'What should I bring on a Nairobi day trip?',
          answer:
            'Comfortable clothing, sun protection, a camera or binoculars and a light jacket for early morning game drives are recommended. See our what to pack guide for a full checklist.',
        },
      ]}
      relatedDestinations={[
        { name: 'Nairobi Excursions', href: '/kenya-safaris/nairobi-excursions', image: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Group Tours from Nairobi', href: '/kenya-safaris/group-tours-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
      ]}
    />
  );
}
