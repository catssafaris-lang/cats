import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Safari Tours | Serengeti & Ngorongoro',
  description: 'Explore Tanzania — Serengeti, Ngorongoro Crater, Tarangire, Lake Manyara & Zanzibar beach holidays.',
  alternates: { canonical: '/tanzania-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'tanzania' || s.destination === 'kenya-tanzania');
  return (
    <SafariListingPage
      title="Tanzania Safari Tours"
      subtitle="Explore Tanzania"
      description="The endless Serengeti, the ancient Ngorongoro Crater, and the spice island of Zanzibar await."
      heroImage="https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg"
      safaris={filtered}
      destination="tanzania"
    />
  );
}
