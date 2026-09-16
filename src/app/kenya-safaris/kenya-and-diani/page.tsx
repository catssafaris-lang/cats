import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Safaris and Diani Beach Holidays | CATS',
  description: 'Combine a Kenya wildlife safari with a Diani Beach holiday, including expert game drives, iconic parks and Indian Ocean relaxation.',
  alternates: { canonical: '/kenya-safaris/kenya-and-diani' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('safari-and-beach') ||
      (s.destination === 'kenya' &&
        s.type?.includes('beach') &&
        s.type?.includes('wildlife') &&
        !s.type?.includes('nairobi-diani') &&
        !s.type?.includes('diani-departure')),
  );

  return (
    <SafariListingPage
      title="Kenya Safaris and Diani Beach Holidays"
      subtitle="Wildlife Encounters, Indian Ocean Calm"
      description="Combine the thrill of a Kenya safari with the restorative beauty of a Diani Beach holiday. Search for the Big Five on guided game drives in celebrated national parks, then unwind on powder-soft sand beneath palms beside the warm, blue Indian Ocean."
      heroImage="https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Kenya is one of the few destinations where a serious wildlife safari and a genuine beach holiday sit only
            hours apart. C.A.T.S Safaris designs combined itineraries that pair game drives in parks such as{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            or{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            with a restful stay at Diani Beach, one of Africa&apos;s most acclaimed stretches of coast.
          </p>
          <p>
            These packages give you the best of both worlds: expert-led Big Five game drives in a private 4x4 Land
            Cruiser, followed by white sand, warm water and coral reef snorkelling on the Indian Ocean. With 15 years
            of experience sequencing safari and beach logistics, we build the itinerary so both halves feel unhurried.
          </p>
          <p>
            For routes that begin directly from the coast rather than Nairobi, see our{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              safaris from Diani Beach
            </Link>
            .
          </p>
        </>
      }
      faqs={[
        {
          question: 'How many days should I plan for safari and beach combined?',
          answer:
            'Most guests allow 7 to 10 days in total, split roughly evenly between wildlife game drives and beach relaxation, though the balance can be adjusted to your preference.',
        },
        {
          question: 'Which national parks pair best with a Diani Beach stay?',
          answer:
            'The Masai Mara and Amboseli are popular choices when starting from Nairobi, while Tsavo is the most convenient wildlife destination when the beach leg is based at Diani.',
        },
        {
          question: 'Do I need to change vehicles between the safari and beach sections?',
          answer:
            'Typically yes; road transfers, a scheduled flight, or a private charter are used to move between the parks and the coast, and we plan this connection as part of your itinerary.',
        },
        {
          question: 'Is this combination suitable for a honeymoon?',
          answer:
            'Yes, safari and beach combinations are among our most popular honeymoon itineraries, and we can arrange romantic touches such as private bush dinners and a beachfront room upgrade.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Zanzibar', href: '/kenya-safaris/zanzibar', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
      ]}
    />
  );
}
