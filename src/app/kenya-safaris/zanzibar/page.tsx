import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zanzibar Beach Holidays | Indian Ocean Escapes | CATS',
  description: 'Discover Zanzibar beach holidays with idyllic Indian Ocean shores, Swahili culture and tailor-made tropical escapes from CATS Safaris.',
  alternates: { canonical: '/kenya-safaris/zanzibar' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('zanzibar') || (s.destination === 'beach' && s.slug.includes('zanzibar')),
  );

  return (
    <SafariListingPage
      title="Zanzibar Beach Holidays"
      subtitle="Indian Ocean Island Escapes"
      description="Savour the timeless allure of Zanzibar, where soft white beaches meet clear Indian Ocean water and Swahili heritage fills the air. These beach holidays invite you to slow down, explore Stone Town, enjoy island hospitality and pair a tropical escape with your East African safari."
      heroImage="https://ik.imagekit.io/axd1riwnv/zanzibar-beach-holiday.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Zanzibar is the classic finish to an East African safari, a spice island off the Tanzanian coast known
            for its coral-fringed beaches, historic Stone Town and centuries of Swahili and Omani heritage. C.A.T.S
            Safaris arranges Zanzibar stays as a stand-alone beach holiday or as the closing chapter of a{' '}
            <Link href="/kenya-tanzania-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya-Tanzania safari
            </Link>
            .
          </p>
          <p>
            Days here can be as active or restful as you choose, from snorkelling and diving the reef to Stone Town
            walking tours, spice farm visits and dhow sunset cruises. With 15 years of experience linking safari and
            beach itineraries, we handle the flight connections between the mainland and the island seamlessly.
          </p>
          <p>
            Prefer to stay within Kenya for your beach finish? See our{' '}
            <Link href="/kenya-safaris/kenya-and-diani" className="text-[var(--forest-canopy)] underline">
              Kenya safaris and Diani Beach
            </Link>{' '}
            packages instead.
          </p>
        </>
      }
      faqs={[
        {
          question: 'How do I get from Kenya or Tanzania to Zanzibar?',
          answer:
            'Zanzibar is reached by a short scheduled flight from Nairobi, Arusha or Dar es Salaam, typically under an hour and a half, making it easy to combine with a mainland safari.',
        },
        {
          question: 'What is there to do in Zanzibar besides the beach?',
          answer:
            'Stone Town offers a UNESCO World Heritage old town with Swahili, Arab, Persian and European influences, while spice farm tours, dolphin excursions and sunset dhow cruises are popular half-day activities.',
        },
        {
          question: 'How many days should I spend in Zanzibar?',
          answer:
            'Most guests spend 3 to 5 days, enough time to enjoy the beach, take one or two excursions and explore Stone Town without feeling rushed.',
        },
        {
          question: 'Is Zanzibar suitable for a honeymoon?',
          answer:
            'Yes, Zanzibar is one of our most requested honeymoon destinations, and we can arrange private beachfront villas, sunset cruises and romantic dining.',
        },
      ]}
      relatedDestinations={[
        { name: 'Kenya-Tanzania Safaris', href: '/kenya-tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Tanzania Safaris', href: '/tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Kenya Safaris and Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
      ]}
    />
  );
}
