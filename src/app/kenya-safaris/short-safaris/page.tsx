import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2–4 Day Safari Tours from Nairobi | CATS Safaris Kenya',
  description: 'Book a 2–4 day Kenya safari from Nairobi, with Big Five game drives in Masai Mara, Amboseli and Kenya’s leading wildlife parks.',
  alternates: { canonical: '/kenya-safaris/short-safaris' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.destination === 'kenya' &&
      s.type?.includes('nairobi-departure') &&
      s.duration >= 2 &&
      s.duration <= 4 &&
      !s.type?.includes('day-trip') &&
      !s.type?.includes('flight-safari'),
  );

  return (
    <SafariListingPage
      title="2–4 Day Safari Tours from Nairobi"
      subtitle="Short Kenya Safari Escapes"
      description="Make the most of a short Kenya safari from Nairobi with expertly guided game drives in the Masai Mara, Amboseli and other iconic wildlife parks. These 2–4 day tours pair efficient travel with unforgettable encounters with the Big Five, elephants, lions and wide-open savannah."
      heroImage="https://ik.imagekit.io/axd1riwnv/Kenya_MasaiMara_GreatPlainsMaraPlains_WildlifeWildebeestMigration.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            A 2–4 day safari from Nairobi is the fastest way to experience Kenya&apos;s wildlife without a long
            itinerary. C.A.T.S Safaris departs daily from Nairobi hotels and Jomo Kenyatta International Airport for
            game drives in{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            and{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>
            , two of Kenya&apos;s most rewarding national parks for spotting the Big Five in a compact window.
          </p>
          <p>
            Each short safari runs in a private 4x4 Land Cruiser with a professional driver-guide, so you set your own
            pace between game drives. Travellers with even less time can consider our{' '}
            <Link href="/kenya-safaris/nairobi-day-trips" className="text-[var(--forest-canopy)] underline">
              Nairobi day trips
            </Link>{' '}
            or upgrade to a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              flight safari
            </Link>{' '}
            to reach the Mara in under an hour.
          </p>
          <p>
            With 15 years of experience running Kenya safaris, our team pairs every package with comfortable{' '}
            <Link href="/travel-info/kenya-lodges" className="text-[var(--forest-canopy)] underline">
              lodges and tented camps
            </Link>{' '}
            suited to your budget, from economy to luxury.
          </p>
        </>
      }
      groups={[
        {
          title: '2-Day Safaris',
          description: 'A quick, focused introduction to Kenya wildlife over a single overnight stay.',
          safaris: filtered.filter((s) => s.duration === 2),
        },
        {
          title: '3–4 Day Safaris',
          description: 'More time for multiple game drives and a second national park.',
          safaris: filtered.filter((s) => s.duration >= 3 && s.duration <= 4),
        },
      ]}
      faqs={[
        {
          question: 'Is a 2–4 day safari long enough to see the Big Five?',
          answer:
            'It is possible, especially in the Masai Mara where lion, elephant, buffalo and leopard sightings are frequent. Rhino sightings can be less predictable on a short visit, so travellers wanting a guaranteed Big Five encounter often prefer 5 or more days.',
        },
        {
          question: 'Which park is better for a short safari, Masai Mara or Amboseli?',
          answer:
            'Masai Mara offers the highest density of predators and, in season, the Great Migration. Amboseli is unmatched for close elephant sightings with Mount Kilimanjaro as a backdrop. Both are reachable within a few hours of Nairobi by road, or under an hour by air.',
        },
        {
          question: 'What is included in the price?',
          answer:
            'Park entrance fees, private 4x4 transport with a driver-guide, accommodation at your chosen lodge category, and specified meals are included. Full inclusions are listed on each individual safari page.',
        },
        {
          question: 'Can these short safaris be combined with a beach holiday?',
          answer:
            'Yes. Many guests extend a short Nairobi safari with a stay at Diani Beach. See our Kenya safaris and Diani Beach packages to combine both in one trip.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Extended Safaris', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/lake-nakuru-flamingos.jpg' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/samburu-reticulated-giraffe.jpg' },
      ]}
    />
  );
}
