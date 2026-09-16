import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amboseli Safaris | Kenya Elephant Game Drives | CATS',
  description: 'Plan an Amboseli safari in Kenya for close elephant encounters, classic game drives and unforgettable views of Mount Kilimanjaro.',
  alternates: { canonical: '/kenya-safaris/amboseli' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('amboseli') && !s.type?.includes('flight-safari') && !s.type?.includes('nairobi-diani'),
  );

  return (
    <SafariListingPage
      title="Amboseli Safaris"
      subtitle="Elephants Beneath Kilimanjaro"
      description="Discover Amboseli National Park, where great elephant herds cross open plains beneath the snow-capped silhouette of Mount Kilimanjaro. A Kenya safari here brings rewarding game drives, superb photography and the chance to spot lions, giraffes, buffalo and prolific birdlife in an unforgettable setting."
      heroImage="https://ik.imagekit.io/axd1riwnv/amboseli-kilimanjaro-elephants.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Amboseli National Park sits at the foot of Mount Kilimanjaro, Africa&apos;s highest peak, and is famous
            for hosting some of the continent&apos;s largest and best-studied free-ranging elephant herds. Open
            plains and swamp-fed grasslands make for exceptional sightings and some of the most photographed wildlife
            scenery in Kenya.
          </p>
          <p>
            C.A.T.S Safaris has guided travellers through Amboseli for 15 years, running private game drives from
            Nairobi and combining the park with{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            or Tsavo on longer circuits. Guests short on time can also reach Amboseli quickly on a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya flight safari
            </Link>
            .
          </p>
          <p>
            Beyond elephants, Amboseli supports lion, giraffe, buffalo, spotted hyena and over 400 recorded bird
            species. Many guests continue their trip toward the coast; see our{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              safaris from Diani Beach
            </Link>{' '}
            for routes that link Amboseli with the Indian Ocean.
          </p>
        </>
      }
      groups={[
        {
          title: 'Short Amboseli Safaris',
          description: '2–4 day itineraries focused on elephant game drives and Kilimanjaro views.',
          safaris: filtered.filter((s) => s.duration <= 4),
        },
        {
          title: 'Amboseli Combined Circuits',
          description: 'Longer safaris pairing Amboseli with the Masai Mara, Tsavo or Lake Nakuru.',
          safaris: filtered.filter((s) => s.duration >= 5),
        },
      ]}
      faqs={[
        {
          question: 'Why is Amboseli famous for elephants?',
          answer:
            'Amboseli has been the site of long-running elephant research since the 1970s, and its swamps provide reliable year-round water and grazing, allowing large, stable elephant family groups to be observed at close range.',
        },
        {
          question: 'Can I see Mount Kilimanjaro from Amboseli?',
          answer:
            'Yes, on clear days, usually in the early morning, Amboseli offers unobstructed views of Kilimanjaro across the border in Tanzania, making it one of the best places in Kenya for iconic wildlife-and-mountain photography.',
        },
        {
          question: 'How far is Amboseli from Nairobi?',
          answer:
            'The drive takes approximately 4 to 5 hours by road. A scenic flight safari from Nairobi\'s Wilson Airport takes roughly 40 minutes.',
        },
        {
          question: 'Can Amboseli be combined with the Masai Mara?',
          answer:
            'Yes, this is one of our most popular extended safari routes, typically covering 5 to 8 days and giving you the chance to see both Kilimanjaro\'s elephants and the Mara\'s predators in one trip.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Tsavo', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Diani Beach', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/samburu-reticulated-giraffe.jpg' },
      ]}
    />
  );
}
