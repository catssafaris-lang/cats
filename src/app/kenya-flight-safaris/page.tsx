import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Flight Safaris | Fly-In Safaris to Masai Mara & Amboseli | CATS',
  description: 'Scenic bush flights from Nairobi to the Masai Mara, Amboseli, Samburu, Laikipia, Tsavo, Lamu and Diani Beach. Skip the drive and fly straight into the wild.',
  alternates: { canonical: '/kenya-flight-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('flight-safari'));

  return (
    <SafariListingPage
      title="Kenya Flight Safaris"
      subtitle="Skip the Drive, Soar Into the Wild"
      description="Scenic bush flights from Nairobi to the Masai Mara, Amboseli, Samburu, Laikipia, Tsavo, Lamu and Diani Beach — less time travelling, more time watching wildlife."
      heroImage="https://images.pexels.com/photos/16444267/pexels-photo-16444267.jpeg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            For travellers who want to maximise every moment in the wild, a Kenya flight safari is the fastest way to
            experience the country&apos;s parks. Skip the long road transfers and fly directly from Nairobi&apos;s
            Wilson Airport onto bush airstrips inside{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>
            ,{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>
            , Samburu and other leading reserves, often reaching your first game drive in under 90 minutes.
          </p>
          <p>
            With 15 years of experience arranging fly-in safaris across Kenya, C.A.T.S Safaris partners with trusted
            bush aviation operators and premium lodges to deliver seamless air safari experiences. Choose a quick
            2–3 day Amboseli escape, a dedicated Masai Mara migration fly-in, or a longer multi-park circuit linking
            Samburu to the Indian Ocean coast.
          </p>
          <p>
            Prefer a private 4x4 road safari instead? Explore our{' '}
            <Link href="/kenya-safaris/short-safaris" className="text-[var(--forest-canopy)] underline">
              short safaris from Nairobi
            </Link>{' '}
            or{' '}
            <Link href="/kenya-safaris/extended-safaris" className="text-[var(--forest-canopy)] underline">
              extended safaris
            </Link>
            .
          </p>
        </>
      }
      groups={[
        {
          title: '2 & 3-Day Quick Escapes',
          description: 'Perfect for short stays or add-ons — fly in, experience the wild, fly back to Nairobi.',
          safaris: filtered.filter((s) => s.duration <= 3),
        },
        {
          title: '4 & 5-Day Immersive Safaris',
          description: 'Multi-park fly-in itineraries combining migration season, beach and bush, or conservation experiences.',
          safaris: filtered.filter((s) => s.duration === 4 || s.duration === 5),
        },
        {
          title: '6+ Day Grand Circuits',
          description: 'The ultimate Kenya experiences — multiple reserves connected by air for a complete safari journey.',
          safaris: filtered.filter((s) => s.duration >= 6),
        },
      ]}
      faqs={[
        {
          question: 'How much time does a flight safari save compared to driving?',
          answer:
            'A flight from Nairobi to the Masai Mara takes roughly 45 minutes compared to a 5 to 6 hour drive, meaning more time for game drives and less time on the road.',
        },
        {
          question: 'Which parks can I reach on a Kenya flight safari?',
          answer:
            'Scheduled bush flights connect Nairobi to the Masai Mara, Amboseli, Samburu, Laikipia conservancies, Tsavo, Lamu and Diani Beach, allowing multi-park itineraries entirely by air.',
        },
        {
          question: 'Is a flight safari more expensive than a road safari?',
          answer:
            'Flight safaris typically cost more than an equivalent road itinerary due to air transfer fares, but the time saved and access to exclusive conservancy airstrips make them worthwhile for many travellers.',
        },
        {
          question: 'What is the luggage allowance on bush flights?',
          answer:
            'Light aircraft used for bush flights usually restrict luggage to around 15 kilograms per person in soft-sided bags. Our team will advise the exact allowance when booking your flight safari.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Samburu', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/samburu-reticulated-giraffe.jpg' },
        { name: 'Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
      ]}
    />
  );
}
