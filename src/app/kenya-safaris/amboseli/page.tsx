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
    />
  );
}
