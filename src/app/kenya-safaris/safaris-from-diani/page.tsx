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
    />
  );
}
