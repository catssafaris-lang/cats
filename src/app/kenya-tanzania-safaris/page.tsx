import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya-Tanzania Combined Safari Tours | Cross-Border Adventures',
  description: 'Experience the best of East Africa — combine Kenya\'s Masai Mara with Tanzania\'s Serengeti, Ngorongoro Crater, Tarangire & Lake Manyara in one unforgettable safari.',
  alternates: { canonical: '/kenya-tanzania-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-tanzania');
  return (
    <SafariListingPage
      title="Kenya-Tanzania Combined Safaris"
      subtitle="The Best of Both Worlds"
      description="Cross the border from Kenya's Masai Mara into Tanzania's Serengeti — two legendary ecosystems, one extraordinary safari. Explore Ngorongoro Crater, Tarangire, Lake Manyara and more."
      heroImage="https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg"
      safaris={filtered}
      destination="kenya-tanzania"
    />
  );
}
