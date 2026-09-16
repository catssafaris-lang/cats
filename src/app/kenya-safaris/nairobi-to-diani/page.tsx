import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi to Diani Beach Safari Tours | CATS Safaris',
  description: 'Travel from Nairobi to Diani Beach on a Kenya safari combining exciting game drives, wildlife parks and an Indian Ocean escape.',
  alternates: { canonical: '/kenya-safaris/nairobi-to-diani' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('nairobi-diani'));

  return (
    <SafariListingPage
      title="Nairobi to Diani Beach Safari Tours"
      subtitle="From Savannah to the Indian Ocean"
      description="Journey from Nairobi’s vibrant gateway to the soft white sands of Diani Beach on a Kenya safari that blends bush and coast. Enjoy game drives in renowned wildlife parks, look for elephants and big cats, then slow down beside the warm Indian Ocean."
      heroImage="https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            A Nairobi to Diani Beach safari links two very different sides of Kenya in a single itinerary. Starting
            in Nairobi, C.A.T.S Safaris guides you through wildlife-rich parks such as{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            and Tsavo, tracking elephant herds, lions and giraffe, before the route continues south-east to the
            palm-fringed shores of{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              Diani Beach
            </Link>
            .
          </p>
          <p>
            These itineraries are ideal for travellers who want the full Kenya story: game drives by day, a private
            4x4 Land Cruiser and driver-guide throughout, and a beach resort finish where you can relax, snorkel or
            dive the coral reef. With 15 years of experience routing overland journeys, we handle every transfer and
            border-free logistics.
          </p>
          <p>
            Prefer to start at the coast instead? See our{' '}
            <Link href="/kenya-safaris/beach-to-nairobi" className="text-[var(--forest-canopy)] underline">
              Kenya beach to Nairobi
            </Link>{' '}
            routes, which run the same journey in reverse.
          </p>
        </>
      }
      faqs={[
        {
          question: 'How long does the drive from Nairobi to Diani Beach take?',
          answer:
            'Driven directly, it takes roughly 8 to 9 hours, which is why these itineraries break the journey into stages with game drives and overnight stops in wildlife parks along the way, rather than one long drive.',
        },
        {
          question: 'Which parks are visited on a Nairobi to Diani safari?',
          answer:
            'Most routes include Amboseli and Tsavo, both known for elephant herds and dramatic landscapes, before continuing to the coast. Some itineraries also include Taita Hills.',
        },
        {
          question: 'Can I fly one leg of the journey instead of driving?',
          answer:
            'Yes, several guests choose to drive the safari portion and then fly from Ukunda or Mombasa back to Nairobi, saving a full day of road travel. Ask your safari consultant about combining road and flight options.',
        },
        {
          question: 'What is there to do once I reach Diani Beach?',
          answer:
            'Diani offers watersports, dhow cruises, the Wasini Island dolphin excursion and simply relaxing on one of Kenya\'s finest white-sand beaches after your safari.',
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Tsavo', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Diani Beach', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
        { name: 'Beach to Nairobi', href: '/kenya-safaris/beach-to-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
