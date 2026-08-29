import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5–8 Day Safari Tours from Nairobi | CATS Safaris Kenya',
  description: 'Explore Kenya on a 5–8 day safari from Nairobi, combining superb game drives, Masai Mara wildlife and remarkable national parks.',
  alternates: { canonical: '/kenya-safaris/extended-safaris' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.destination === 'kenya' &&
      s.type?.includes('nairobi-departure') &&
      s.duration >= 5 &&
      s.duration <= 8 &&
      !s.type?.includes('flight-safari') &&
      !s.type?.includes('nairobi-diani'),
  );

  return (
    <SafariListingPage
      title="5–8 Day Safari Tours from Nairobi"
      subtitle="Extended Kenya Safari Adventures"
      description="Travel deeper into Kenya’s wild landscapes on a 5–8 day safari from Nairobi. Follow the rhythm of unhurried game drives through the Masai Mara, Amboseli, Lake Nakuru and beyond, with time to seek the Big Five, photograph dramatic scenery and settle into exceptional safari lodges."
      heroImage="https://ik.imagekit.io/axd1riwnv/masai-mara-wildebeest-crossing.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
