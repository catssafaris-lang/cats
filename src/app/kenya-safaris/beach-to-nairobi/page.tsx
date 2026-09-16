import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Beach to Nairobi Safari Tours | CATS Safaris',
  description: 'Journey from Kenya’s coast to Nairobi on a safari with immersive game drives, Tsavo wildlife and remarkable changing landscapes.',
  alternates: { canonical: '/kenya-safaris/beach-to-nairobi' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('beach-to-nairobi') || s.slug.includes('coast-to-nairobi'),
  );

  return (
    <SafariListingPage
      title="Kenya Beach to Nairobi Safari Tours"
      subtitle="A Coast-to-Capital Safari Journey"
      description="Travel from Kenya’s sunlit beaches to Nairobi through some of the country’s most compelling safari country. These coast-to-capital tours weave game drives in Tsavo and other wildlife parks with dramatic scenery, offering elephants, big cats and a rewarding overland adventure."
      heroImage="https://ik.imagekit.io/axd1riwnv/tsavo-west-landscape.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            For travellers ending their Kenya holiday inland, a beach to Nairobi safari turns the return journey into
            an adventure in its own right. C.A.T.S Safaris routes these itineraries through Tsavo&apos;s red-earth
            plains, with stops for game drives among elephant herds, lion and giraffe, before arriving in Nairobi
            ready for your onward flight.
          </p>
          <p>
            These tours mirror our{' '}
            <Link href="/kenya-safaris/nairobi-to-diani" className="text-[var(--forest-canopy)] underline">
              Nairobi to Diani Beach
            </Link>{' '}
            routes but run in the opposite direction, so guests who started their holiday at the coast can still
            experience Kenya&apos;s wildlife parks before departure. With 15 years of experience coordinating overland
            transfers, C.A.T.S handles every stop, lodge booking and airport connection.
          </p>
        </>
      }
      faqs={[
        {
          question: 'Why choose a beach to Nairobi safari instead of flying directly?',
          answer:
            'It lets you add wildlife game drives in Tsavo or Amboseli to the end of a beach holiday, rather than losing that time to a direct transfer with no safari content.',
        },
        {
          question: 'How long does the journey from the coast to Nairobi take?',
          answer:
            'Driven directly it takes roughly 8 to 9 hours, so most itineraries break the journey with one or more overnight stops in a national park for game drives along the way.',
        },
        {
          question: 'Can I fly instead of driving on this route?',
          answer:
            'Yes, we can arrange a scheduled flight from Mombasa or Ukunda to Nairobi if you prefer not to drive, while still including game drives at the start of your stay.',
        },
        {
          question: 'What parks are typically visited on this route?',
          answer:
            'Tsavo East and Tsavo West are the most common stops, with some itineraries extending to Amboseli for elephant sightings beneath Mount Kilimanjaro.',
        },
      ]}
      relatedDestinations={[
        { name: 'Nairobi to Diani', href: '/kenya-safaris/nairobi-to-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
      ]}
    />
  );
}
