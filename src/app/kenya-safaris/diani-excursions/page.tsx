import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diani Beach One Day Excursions and Safaris | CATS',
  description: 'Discover Diani Beach day excursions and one-day Kenya safaris, from coastal adventures to rewarding wildlife game drives.',
  alternates: { canonical: '/kenya-safaris/diani-excursions' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('diani-one-day') || (s.type?.includes('diani-departure') && s.type?.includes('day-trip')),
  );

  return (
    <SafariListingPage
      title="Diani Beach One Day Excursions and Safaris"
      subtitle="A Day of Coast and Wildlife"
      description="Make every day on Kenya’s coast count with a Diani Beach excursion or one-day safari. Set out for a guided game drive, discover local coastal landscapes and wildlife, and return to your beach retreat with the colours, sounds and stories of Kenya’s untamed south."
      heroImage="https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
