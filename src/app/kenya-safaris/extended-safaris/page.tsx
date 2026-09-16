import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5–8 Day Safari Tours from Nairobi | CATS Safaris Kenya',
  description: 'Explore Kenya on a 5–8 day safari from Nairobi, combining superb game drives, Masai Mara wildlife and remarkable national parks.',
  alternates: { canonical: '/kenya-safaris/extended-safaris' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.destination === 'kenya' &&
      s.type?.includes('nairobi-departure') &&
      s.duration >= 5 &&
      s.duration <= 8 &&
      !s.type?.includes('flight-safari') &&
      !s.type?.includes('nairobi-diani'),
  );

  return (
    <SafariListingPage
      title="5–8 Day Safari Tours from Nairobi"
      subtitle="Extended Kenya Safari Adventures"
      description="Travel deeper into Kenya’s wild landscapes on a 5–8 day safari from Nairobi. Follow the rhythm of unhurried game drives through the Masai Mara, Amboseli, Lake Nakuru and beyond, with time to seek the Big Five, photograph dramatic scenery and settle into exceptional safari lodges."
      heroImage="https://ik.imagekit.io/axd1riwnv/masai-mara-wildebeest-crossing.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            An extended 5–8 day Kenya safari gives you time to properly explore two or three national parks instead
            of rushing between one or two. Classic circuits from Nairobi combine{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            with{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            and Lake Nakuru, giving you a genuine chance at all of the Big Five as well as flamingo-lined lakeshores
            and Rift Valley scenery.
          </p>
          <p>
            C.A.T.S Safaris has run these longer Kenya itineraries for 15 years, pairing each with a private 4x4 Land
            Cruiser, an experienced driver-guide and a choice of{' '}
            <Link href="/travel-info/kenya-lodges" className="text-[var(--forest-canopy)] underline">
              lodges and tented camps
            </Link>
            . For guests who want to save travel time between parks, ask about upgrading sections of your route to a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              flight safari
            </Link>
            .
          </p>
          <p>
            An extended safari also pairs naturally with a beach finish. Many travellers extend their Kenya safari
            with a stay at{' '}
            <Link href="/kenya-safaris/kenya-and-diani" className="text-[var(--forest-canopy)] underline">
              Diani Beach
            </Link>{' '}
            once the game drives are complete.
          </p>
        </>
      }
      groups={[
        {
          title: '5–6 Day Safaris',
          description: 'A comfortable circuit through two or three parks with generous time at each.',
          safaris: filtered.filter((s) => s.duration >= 5 && s.duration <= 6),
        },
        {
          title: '7–8 Day Safaris',
          description: 'Our most complete Kenya itineraries, covering the Masai Mara, Amboseli, Lake Nakuru and more.',
          safaris: filtered.filter((s) => s.duration >= 7 && s.duration <= 8),
        },
      ]}
      faqs={[
        {
          question: 'Which parks are usually included in a 5–8 day safari?',
          answer:
            'Most extended itineraries combine the Masai Mara with Amboseli and Lake Nakuru, and some routes add Samburu or Tsavo. Exact parks vary by package, so check the itinerary tab on each safari page.',
        },
        {
          question: 'Is a longer safari better for photography?',
          answer:
            'Yes. More days mean more game drives at the best light of early morning and late afternoon, plus the flexibility to wait for a sighting rather than moving on. Several of our extended itineraries are popular with photography-focused travellers.',
        },
        {
          question: 'Can I customise a 5–8 day itinerary?',
          answer:
            'Absolutely. We can adjust the parks visited, upgrade lodges, add a hot-air balloon safari over the Mara, or swap a driving leg for a flight safari. Contact our team with your preferences and we will tailor the route.',
        },
        {
          question: 'What is the best season for an extended Kenya safari?',
          answer:
            'The dry season from June to October is ideal for the Masai Mara and often coincides with the Great Migration river crossings. January to March offers lush scenery and excellent birdlife across all the parks on this route.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/samburu-reticulated-giraffe.jpg' },
      ]}
    />
  );
}
