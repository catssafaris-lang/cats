import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Safari Tours from Nairobi | Kenya Safaris | CATS',
  description: 'Join a group Kenya safari from Nairobi for guided game drives, shared adventure and outstanding wildlife viewing in iconic parks.',
  alternates: { canonical: '/kenya-safaris/group-tours-nairobi' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('group-safari') && !s.type?.includes('diani-departure') && !s.type?.includes('mombasa-departure'),
  );

  return (
    <SafariListingPage
      title="Group Safari Tours from Nairobi"
      subtitle="Shared Kenya Safari Adventures"
      description="Set out from Nairobi with fellow travellers on a sociable, expertly guided Kenya group safari. Share sunrise game drives, Masai Mara wildlife sightings and memorable evenings in the bush while experienced guides reveal the parks, animals and stories that make Kenya extraordinary."
      heroImage="https://ik.imagekit.io/axd1riwnv/group-safari-masai-mara.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            A group safari is the most cost-effective way to experience Kenya&apos;s wildlife, sharing a 4x4 Land
            Cruiser and driver-guide with a small number of fellow travellers on a fixed departure date. C.A.T.S
            Safaris runs scheduled group departures from Nairobi to{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            and other leading parks, with the same standard of guiding as our private itineraries.
          </p>
          <p>
            These tours suit solo travellers, budget-conscious groups and anyone who enjoys sharing the excitement of
            game drives with new people. Prefer complete privacy and a flexible schedule? Our{' '}
            <Link href="/kenya-safaris/short-safaris" className="text-[var(--forest-canopy)] underline">
              private short safaris
            </Link>{' '}
            and{' '}
            <Link href="/kenya-safaris/extended-safaris" className="text-[var(--forest-canopy)] underline">
              extended safaris
            </Link>{' '}
            remain fully customisable. After 15 years running both formats, we can advise which suits your travel
            style and budget best.
          </p>
        </>
      }
      faqs={[
        {
          question: 'How many people share a group safari vehicle?',
          answer:
            'Group departures typically run with up to six or seven travellers per 4x4 Land Cruiser, keeping the experience personal while sharing the cost of the vehicle and guide.',
        },
        {
          question: 'Are group safaris cheaper than private safaris?',
          answer:
            'Yes, sharing transport and guiding costs among several travellers makes group safaris one of our most affordable ways to see Kenya\'s parks without compromising on guide quality.',
        },
        {
          question: 'Can solo travellers join a group safari?',
          answer:
            'Absolutely, group departures are popular with solo travellers looking for good company and a lower single-supplement cost compared to a fully private safari.',
        },
        {
          question: 'What parks do Nairobi group safaris typically visit?',
          answer:
            'Most group departures head to the Masai Mara, with some itineraries also including Lake Nakuru or Amboseli depending on the duration selected.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Group Tours from Beach', href: '/kenya-safaris/group-tours-beach', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
      ]}
    />
  );
}
