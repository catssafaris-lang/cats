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
          question: 'What can I see on a Nairobi excursion besides the national park?',
          answer:
            'Popular add-ons include the David Sheldrick elephant orphanage, the Giraffe Centre, the Karen Blixen Museum, Kazuri Beads workshop, and Maasai Market for local crafts. These can be combined with a national park game drive or booked separately.',
        },
        {
          question: 'Are these tours private or shared?',
          answer:
            'Both options are available. Private excursions use your own vehicle and guide, while our group departures share a vehicle with other travellers at a lower cost per person.',
        },
        {
          question: 'How much time do I need for a Nairobi excursion?',
          answer:
            'A half-day covers one or two highlights, while a full day allows a national park game drive plus one or two cultural stops. We can tailor the schedule to your available time.',
        },
        {
          question: 'Can these excursions be booked as a single add-on to a longer safari?',
          answer:
            'Yes, most guests add a Nairobi excursion at the start or end of a longer Kenya safari itinerary, and we coordinate the timing with your airport transfers.',
        },
      ]}
      relatedDestinations={[
        { name: 'Nairobi Day Trips', href: '/kenya-safaris/nairobi-day-trips', image: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/nairobi-national-park-rhino.jpg' },
        { name: 'Group Tours from Nairobi', href: '/kenya-safaris/group-tours-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
