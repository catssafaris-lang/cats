import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya-Tanzania Combined Safari Tours | Cross-Border Adventures',
  description: 'Experience the best of East Africa — combine Kenya\'s Masai Mara with Tanzania\'s Serengeti, Ngorongoro Crater, Tarangire & Lake Manyara in one unforgettable safari.',
  alternates: { canonical: '/kenya-tanzania-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-tanzania');

  return (
    <SafariListingPage
      title="Kenya-Tanzania Combined Safaris"
      subtitle="The Best of Both Worlds"
      description="Cross the border from Kenya's Masai Mara into Tanzania's Serengeti — two legendary ecosystems, one extraordinary safari. Explore Ngorongoro Crater, Tarangire, Lake Manyara and more."
      heroImage="https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg"
      safaris={filtered}
      destination="kenya-tanzania"
      introContent={
        <>
          <p>
            The Masai Mara and the Serengeti are a single connected ecosystem split by an international border, and a
            Kenya-Tanzania safari lets you experience both halves in one itinerary. C.A.T.S Safaris has coordinated
            these cross-border journeys for 15 years, handling the border crossing, vehicle changes and permit
            paperwork so the transition feels seamless.
          </p>
          <p>
            A typical route begins with game drives in Kenya&apos;s{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>
            , then crosses into Tanzania for the Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara before
            concluding at Arusha or a{' '}
            <Link href="/kenya-safaris/zanzibar" className="text-[var(--forest-canopy)] underline">
              Zanzibar
            </Link>{' '}
            beach finish.
          </p>
          <p>
            These combined safaris suit travellers who want to see the full range of East African landscapes, from
            Kenya&apos;s open savannah to Tanzania&apos;s volcanic crater floor, in a single trip.
          </p>
        </>
      }
      faqs={[
        {
          question: 'How does the border crossing work on a Kenya-Tanzania safari?',
          answer:
            'Crossings are typically made at the Isebania/Sirari or Namanga border posts, or by light aircraft for guests who prefer to skip the road transfer. Our team manages visa and permit requirements and arranges the vehicle or guide change at the border.',
        },
        {
          question: 'Do I need separate visas for Kenya and Tanzania?',
          answer:
            'Yes, each country requires its own visa, though the East Africa Tourist Visa can cover Kenya, Tanzania and Uganda for a single fee if applicable to your nationality. Check our Kenya and Tanzania visa information pages for current requirements.',
        },
        {
          question: 'How long does a Kenya-Tanzania combined safari usually take?',
          answer:
            'Most itineraries run 8 to 15 days to allow meaningful time in both the Masai Mara and the northern Tanzania circuit without excessive travel days.',
        },
        {
          question: 'What is the benefit of combining both countries instead of visiting one?',
          answer:
            'You experience two ecosystems, a wider range of scenery from Kenya\'s open plains to Tanzania\'s crater and woodland habitats, and greater flexibility for timing the Great Migration wherever the herds currently are.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Tanzania Safaris', href: '/tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Zanzibar', href: '/kenya-safaris/zanzibar', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
      ]}
    />
  );
}
