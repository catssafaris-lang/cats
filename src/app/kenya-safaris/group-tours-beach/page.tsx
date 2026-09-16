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
      heroImage="https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg"
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
          question: 'How much cheaper is a group safari from the coast?',
          answer:
            'Sharing vehicle and guide costs among several travellers usually makes group departures noticeably more affordable than booking an equivalent private safari, particularly for solo travellers.',
        },
        {
          question: 'Which wildlife park do these group safaris visit?',
          answer:
            'Most departures from Diani or Mombasa head to Tsavo East, known for its red-dust elephants, healthy lion population and dramatic semi-arid landscape.',
        },
        {
          question: 'Can I book a group safari as a day trip or does it require an overnight stay?',
          answer:
            'Both are available. Some group departures run as a single long day, while others include an overnight stay in Tsavo for two full days of game drives.',
        },
        {
          question: 'Do group safaris from the coast include hotel pickup?',
          answer:
            'Yes, pickup and drop-off at your Diani or Mombasa resort is included as standard on all our group safari departures.',
        },
      ]}
      relatedDestinations={[
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
        { name: 'Group Tours from Nairobi', href: '/kenya-safaris/group-tours-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Diani Excursions', href: '/kenya-safaris/diani-excursions', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
      ]}
    />
  );
}
