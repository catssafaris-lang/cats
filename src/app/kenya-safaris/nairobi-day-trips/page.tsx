import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi Day Trips and Day Safaris | CATS Safaris Kenya',
  description: 'Choose a Nairobi day trip or day safari for game drives, wildlife encounters and memorable Kenya experiences close to the capital.',
  alternates: { canonical: '/kenya-safaris/nairobi-day-trips' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('day-trip') && s.type?.includes('nairobi-departure') && !s.type?.includes('group'),
  );

  return (
    <SafariListingPage
      title="Nairobi Day Trips and Day Safaris"
      subtitle="Wild Kenya Within Easy Reach"
      description="Turn one day in Nairobi into an authentic Kenya safari experience. Explore Nairobi National Park and nearby highlights on private, guided day trips, with game drives for rhino, lion, giraffe and more, plus the flexibility to match the adventure to your schedule."
      heroImage="https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/nairobi-national-park-rhino.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
