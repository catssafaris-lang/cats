import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masai Mara Safaris | Kenya Big Five Game Drives | CATS',
  description: 'Discover Masai Mara safaris with expertly guided Kenya game drives, Big Five wildlife viewing and Great Migration experiences.',
  alternates: { canonical: '/kenya-safaris/masai-mara' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('masai-mara') && !s.type?.includes('flight-safari'));

  return (
    <SafariListingPage
      title="Masai Mara Safaris"
      subtitle="Kenya’s Legendary Wildlife Reserve"
      description="Answer the call of the Masai Mara on a Kenya safari shaped around world-class game drives. Scan golden plains for lion, leopard, cheetah, elephant and buffalo, follow the Mara River during the Great Migration, and experience the enduring drama of one of Africa’s finest wildlife reserves."
      heroImage="https://ik.imagekit.io/axd1riwnv/Masai-Mara-Kenya-wildlife-and-wildebeest-migration-safari-tour-packages.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            The Masai Mara National Reserve is Kenya&apos;s most celebrated safari destination and the northern
            extension of Tanzania&apos;s Serengeti ecosystem. Its open grassland supports one of the highest
            concentrations of lions in Africa, along with resident leopard, cheetah, elephant, buffalo and giraffe
            populations that make Big Five game drives here consistently rewarding.
          </p>
          <p>
            Between July and October, the Mara hosts the dramatic river crossings of the Great Migration, as over a
            million wildebeest and zebra cross the crocodile-filled Mara River. C.A.T.S Safaris has guided visitors to
            these crossings for 15 years, running private game drives from both Nairobi and the reserve&apos;s own
            airstrips for guests booking a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              flight safari
            </Link>
            .
          </p>
          <p>
            A Masai Mara safari pairs naturally with other Kenya highlights. Consider extending your trip with{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            for elephant herds beneath Kilimanjaro, or choose one of our{' '}
            <Link href="/kenya-safaris/extended-safaris" className="text-[var(--forest-canopy)] underline">
              extended safaris
            </Link>{' '}
            to combine the Mara with Lake Nakuru in a single circuit.
          </p>
        </>
      }
      groups={[
        {
          title: 'Short Masai Mara Safaris',
          description: 'Efficient 2–4 day game drive itineraries focused on the reserve.',
          safaris: filtered.filter((s) => s.duration <= 4),
        },
        {
          title: 'Extended Masai Mara Circuits',
          description: 'Longer itineraries combining the Mara with other Kenya parks.',
          safaris: filtered.filter((s) => s.duration >= 5),
        },
      ]}
      faqs={[
        {
          question: 'When is the best time to visit the Masai Mara?',
          answer:
            'The Great Migration river crossings typically occur from July to October, making this the most popular period. However, the Mara offers excellent resident wildlife viewing year-round, including during the quieter, greener months from November to June.',
        },
        {
          question: 'How far is the Masai Mara from Nairobi?',
          answer:
            'By road it is roughly a 5 to 6 hour drive through the Great Rift Valley. By light aircraft from Wilson Airport, the flight takes about 45 minutes to an hour, which is why many guests choose a Kenya flight safari for this route.',
        },
        {
          question: 'What animals can I expect to see in the Masai Mara?',
          answer:
            'The Mara is known for its lion prides, leopard and cheetah sightings, large elephant and buffalo herds, giraffe, hippo pods in the Mara River, and, during the migration season, huge numbers of wildebeest and zebra.',
        },
        {
          question: 'Should I stay inside the reserve or in a nearby conservancy?',
          answer:
            'Conservancies bordering the reserve, such as Naboisho or Olare Motorogi, offer night game drives, walking safaris and lower visitor density, while lodges inside the reserve boundary put you closest to the main river crossing points during migration season.',
        },
        {
          question: 'Can I add a hot air balloon safari over the Mara?',
          answer:
            'Yes, a sunrise hot air balloon flight followed by a champagne bush breakfast can be added to most Masai Mara itineraries. Let your safari consultant know when planning your trip.',
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Lake Nakuru', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/lake-nakuru-flamingos.jpg' },
        { name: 'Samburu', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/samburu-reticulated-giraffe.jpg' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
