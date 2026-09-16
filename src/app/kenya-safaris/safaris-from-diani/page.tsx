import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Day Safaris from Diani Beach | CATS Safaris Kenya',
  description: 'Book a multi-day safari from Diani Beach for Kenya game drives, Tsavo wildlife and a seamless coast-to-bush adventure.',
  alternates: { canonical: '/kenya-safaris/safaris-from-diani' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('diani-departure') && !s.type?.includes('day-trip') && !s.type?.includes('group-safari'),
  );

  return (
    <SafariListingPage
      title="Multi-Day Safaris from Diani Beach"
      subtitle="Escape the Coast, Enter the Wild"
      description="Leave Diani Beach behind for a multi-day Kenya safari through the untamed landscapes of Tsavo and beyond. Private guided game drives reveal red-dust elephants, lions, giraffes and wide horizons, before your journey returns you to the ease of the Indian Ocean coast."
      heroImage="https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Diani Beach makes an excellent base for a Kenya safari, sitting close to the Tsavo parks and within easy
            reach of Amboseli. C.A.T.S Safaris arranges private, guided multi-day safaris directly from your Diani
            resort, using a 4x4 Land Cruiser and a professional driver-guide for the entire journey.
          </p>
          <p>
            Tsavo East and Tsavo West are home to the famous red-dust elephants, along with lion, giraffe, buffalo and
            some of Kenya&apos;s most dramatic volcanic scenery, while routes extending to{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            add the classic backdrop of Mount Kilimanjaro. After the safari, you return to the beach for a final
            night or more of relaxation.
          </p>
          <p>
            Looking for something shorter? Our{' '}
            <Link href="/kenya-safaris/diani-excursions" className="text-[var(--forest-canopy)] underline">
              Diani day excursions
            </Link>{' '}
            fit a wildlife encounter into a single day, while our{' '}
            <Link href="/kenya-safaris/group-tours-beach" className="text-[var(--forest-canopy)] underline">
              group safaris from the coast
            </Link>{' '}
            offer a shared, lower-cost alternative. With 15 years of local experience, we tailor every route to your
            available time.
          </p>
        </>
      }
      groups={[
        {
          title: '2–3 Day Safaris',
          description: 'A focused escape into Tsavo or Amboseli that fits neatly around a beach holiday.',
          safaris: filtered.filter((s) => s.duration >= 2 && s.duration <= 3),
        },
        {
          title: '4+ Day Safaris',
          description: 'Longer circuits that add extra parks and more time for game drives.',
          safaris: filtered.filter((s) => s.duration >= 4),
        },
      ]}
      faqs={[
        {
          question: 'Should Diani Beach be included in an African safari?',
          answer:
            'Yes. Diani\'s proximity to Tsavo East and Tsavo West makes it one of the easiest coastal bases in Kenya from which to add a wildlife safari, without the long transfers required from some other beach destinations.',
        },
        {
          question: 'Can I reach the Masai Mara from Diani Beach?',
          answer:
            'It is possible, though the Mara sits further away than Tsavo or Amboseli. Most guests either fly between Diani and the Mara or choose Tsavo and Amboseli for a more time-efficient road safari from the coast.',
        },
        {
          question: 'How much does a safari from Diani Beach cost?',
          answer:
            'Pricing depends on duration, vehicle exclusivity and lodge category, ranging from budget tented camps to luxury lodges. Contact our team for a tailored quote based on your dates and preferences.',
        },
        {
          question: 'What wildlife will I see on a Tsavo safari from Diani?',
          answer:
            'Tsavo is known for its red-earth elephants, along with lion, buffalo, giraffe, zebra and healthy birdlife, plus striking volcanic and semi-arid scenery that differs from Kenya\'s central highland parks.',
        },
        {
          question: 'How long does it take to reach Tsavo from Diani Beach?',
          answer:
            'The drive to Tsavo East typically takes around 3 to 4 hours, making it a comfortable single travel day at the start of your safari.',
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Diani Excursions', href: '/kenya-safaris/diani-excursions', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
        { name: 'Group Tours from Beach', href: '/kenya-safaris/group-tours-beach', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Beach to Nairobi', href: '/kenya-safaris/beach-to-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
