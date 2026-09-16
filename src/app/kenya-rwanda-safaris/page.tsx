import Link from 'next/link';
import { Metadata } from 'next';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';

export const metadata: Metadata = {
  title: 'Kenya & Rwanda Safaris | C.A.T.S | Gorilla Trekking & Safari Adventures',
  description:
    'Combine Kenya safari adventures with Rwanda gorilla trekking in Volcanoes National Park. C.A.T.S delivers seamless cross-border itineraries from the Masai Mara to the Virunga Mountains.',
  keywords: [
    'Kenya Rwanda safari',
    'gorilla trekking Rwanda',
    'Volcanoes National Park',
    'Kenya Rwanda combined safari',
    'golden monkey trekking',
    'East Africa safari',
    'CATS safaris',
    'Masai Mara Rwanda',
  ],
};

export default function KenyaRwandaSafarisPage() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-rwanda');

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
                name: 'Kenya & Rwanda Safaris',
                item: 'https://www.catssafaris.com/kenya-rwanda-safaris',
              },
            ],
          }),
        }}
      />
      <SafariListingPage
        title="Kenya & Rwanda Safaris"
        subtitle="Savannah Meets the Virunga Mountains"
        description="From the sweeping savannahs of the Masai Mara to the misty Virunga Mountains — track mountain gorillas and witness the Great Migration in one seamless journey."
        heroImage="https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg"
        safaris={filtered}
        destination="kenya-rwanda"
        introContent={
          <>
            <p>
              A Kenya-Rwanda safari combines two of Africa&apos;s most extraordinary wildlife experiences. Begin with
              Kenya&apos;s legendary national parks, the{' '}
              <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
                Masai Mara
              </Link>
              , Amboseli and Lake Nakuru, then fly to Kigali for an unforgettable mountain gorilla trek in Volcanoes
              National Park.
            </p>
            <p>
              C.A.T.S Safaris has run these cross-border itineraries for 15 years, coordinating every transfer,
              gorilla permit and lodge booking so guests move between Kenya&apos;s open plains and Rwanda&apos;s
              volcanic highlands without complication. Many itineraries also include golden monkey trekking, offered
              only in Rwanda and Uganda.
            </p>
            <p>
              Prefer to trek in Uganda instead? See our{' '}
              <Link href="/kenya-uganda-safaris" className="text-[var(--forest-canopy)] underline">
                Kenya-Uganda safaris
              </Link>{' '}
              for the Bwindi Impenetrable Forest option.
            </p>
          </>
        }
        faqs={[
          {
            question: 'How far is Rwanda from Kenya?',
            answer:
              'Kigali is reached from Nairobi by a direct scheduled flight of roughly two and a half hours, making Rwanda one of the more time-efficient gorilla trekking add-ons to a Kenya safari.',
          },
          {
            question: 'What is included in a Rwanda gorilla trekking permit?',
            answer:
              'A Volcanoes National Park gorilla permit includes one hour with a habituated gorilla family, accompanied by park rangers and trackers. Permits are limited and should be secured well in advance of travel.',
          },
          {
            question: 'Can I see golden monkeys as well as gorillas in Rwanda?',
            answer:
              'Yes, Volcanoes National Park also offers golden monkey trekking, a shorter and generally easier activity that can be added alongside your gorilla trek.',
          },
          {
            question: 'What is the best time of year to visit Rwanda for gorilla trekking?',
            answer:
              'Rwanda\'s dry seasons, roughly June to September and December to February, offer the most comfortable trail conditions, though trekking is possible throughout the year.',
          },
        ]}
        relatedDestinations={[
          { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
          { name: 'Kenya-Uganda Safaris', href: '/kenya-uganda-safaris', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
          { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        ]}
      />
    </>
  );
}
