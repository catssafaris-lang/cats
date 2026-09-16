import Link from 'next/link';
import { Metadata } from 'next';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';

export const metadata: Metadata = {
  title: 'Kenya & Uganda Safaris | C.A.T.S | Gorilla Trekking & Wildlife Tours',
  description:
    'Combine Kenya wildlife safaris with Uganda mountain gorilla trekking. C.A.T.S coordinates seamless cross-border adventures from the Masai Mara to Bwindi Impenetrable Forest.',
  keywords: [
    'Kenya Uganda safari',
    'gorilla trekking Uganda',
    'Bwindi gorilla safari',
    'Kenya Uganda combined safari',
    'Big Five gorilla trekking',
    'East Africa safari',
    'CATS safaris',
    'Masai Mara Bwindi',
  ],
};

export default function KenyaUgandaSafarisPage() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-uganda');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.catssafaris.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Kenya & Uganda Safaris',
                item: 'https://www.catssafaris.com/kenya-uganda-safaris',
              },
            ],
          }),
        }}
      />
      <SafariListingPage
        title="Kenya & Uganda Safaris"
        subtitle="Savannah Meets Rainforest"
        description="Experience Kenya's Big Five savannahs and Uganda's ancient forests — from the Masai Mara to Bwindi Impenetrable Forest for an unforgettable gorilla encounter."
        heroImage="https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg"
        safaris={filtered}
        destination="kenya-uganda"
        introContent={
          <>
            <p>
              A Kenya-Uganda safari merges the open-plains drama of Kenya&apos;s{' '}
              <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
                Masai Mara
              </Link>
              , Amboseli and Lake Nakuru with Uganda&apos;s primate-rich rainforests. Trek to within metres of a
              mountain gorilla family in Bwindi Impenetrable National Park, cruise the Kazinga Channel, and track
              tree-climbing lions in Queen Elizabeth National Park.
            </p>
            <p>
              C.A.T.S Safaris has coordinated cross-border East Africa itineraries for 15 years, handling every
              gorilla trekking permit, flight connection and lodge booking so the journey between countries feels
              effortless. Most itineraries combine a Kenya wildlife safari with a dedicated multi-day gorilla trekking
              extension in Uganda.
            </p>
            <p>
              Looking for a similar combination with a shorter flight to the gorillas? See our{' '}
              <Link href="/kenya-rwanda-safaris" className="text-[var(--forest-canopy)] underline">
                Kenya-Rwanda safaris
              </Link>{' '}
              instead.
            </p>
          </>
        }
        faqs={[
          {
            question: 'What is included in a gorilla trekking permit?',
            answer:
              'A Uganda gorilla permit grants one hour with a habituated mountain gorilla family, accompanied by armed rangers and trackers. Permits are limited daily and should be booked well in advance, which we handle as part of your itinerary.',
          },
          {
            question: 'How difficult is gorilla trekking in Bwindi?',
            answer:
              'Treks can range from one to several hours through forested, hilly terrain depending on where the gorilla family is located that day. A reasonable level of fitness is recommended, and porters are available to assist.',
          },
          {
            question: 'How do I travel between Kenya and Uganda?',
            answer:
              'Most itineraries use a short scheduled flight between Nairobi and Entebbe, followed by road or light-aircraft transfers to Bwindi. We arrange all connecting flights and transfers as part of your safari.',
          },
          {
            question: 'When is the best time for gorilla trekking?',
            answer:
              'Gorilla trekking is possible year-round, though the drier months from June to September and December to February offer easier trail conditions in Bwindi\'s forest terrain.',
          },
        ]}
        relatedDestinations={[
          { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
          { name: 'Kenya-Rwanda Safaris', href: '/kenya-rwanda-safaris', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
          { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        ]}
      />
    </>
  );
}
