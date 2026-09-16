import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diani Beach One Day Excursions and Safaris | CATS',
  description: 'Discover Diani Beach day excursions and one-day Kenya safaris, from coastal adventures to rewarding wildlife game drives.',
  alternates: { canonical: '/kenya-safaris/diani-excursions' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('diani-one-day') || (s.type?.includes('diani-departure') && s.type?.includes('day-trip')),
  );

  return (
    <SafariListingPage
      title="Diani Beach One Day Excursions and Safaris"
      subtitle="A Day of Coast and Wildlife"
      description="Make every day on Kenya’s coast count with a Diani Beach excursion or one-day safari. Set out for a guided game drive, discover local coastal landscapes and wildlife, and return to your beach retreat with the colours, sounds and stories of Kenya’s untamed south."
      heroImage="https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Not every guest at Diani Beach has time for a multi-day safari, so C.A.T.S Safaris runs a set of one-day
            excursions that fit around a beach holiday. Options include wildlife game drives, cultural visits and the
            popular Wasini Island dolphin excursion, all departing directly from your Diani resort.
          </p>
          <p>
            These day trips run with a private guide and vehicle and can start early to make the most of morning
            wildlife activity before returning you to the beach by evening. For guests wanting a longer wildlife
            encounter, our{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              multi-day safaris from Diani Beach
            </Link>{' '}
            add overnight stays in Tsavo or Amboseli.
          </p>
          <p>
            With 15 years of coastal operating experience, we know exactly how to time these excursions around tides,
            traffic and daylight for the smoothest possible day out.
          </p>
        </>
      }
      faqs={[
        {
          question: 'What wildlife can I see on a one-day safari from Diani?',
          answer:
            'Day trips typically head toward Tsavo East, where elephant, buffalo, giraffe and, with some luck, lion can be spotted on a guided game drive, all within a single day round trip from the coast.',
        },
        {
          question: 'Is the Wasini Island dolphin excursion included?',
          answer:
            'The dolphin excursion is a separate marine day trip involving a dhow cruise, snorkelling at Kisite Marine Park and a Swahili seafood lunch. It can be booked alongside or instead of a wildlife day trip.',
        },
        {
          question: 'How early do these excursions depart?',
          answer:
            'Wildlife day trips usually depart before sunrise to reach the parks while animals are most active, while marine excursions typically depart mid-morning. Exact times are arranged with your consultant.',
        },
        {
          question: 'Are these excursions suitable for families?',
          answer:
            'Yes, both the wildlife game drives and the marine dolphin excursion are family-friendly, with flexible pacing available for children.',
        },
      ]}
      relatedDestinations={[
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Group Tours from Beach', href: '/kenya-safaris/group-tours-beach', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Kenya Safaris and Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
      ]}
    />
  );
}
