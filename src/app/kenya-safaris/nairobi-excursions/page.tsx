import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi City Excursions and Cultural Tours | CATS',
  description: 'Explore Nairobi city excursions and cultural tours, from artisan workshops and heritage sites to inspiring Kenya wildlife encounters.',
  alternates: { canonical: '/kenya-safaris/nairobi-excursions' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('day-trip') &&
      s.type?.includes('nairobi-departure') &&
      (s.type?.includes('culture') || s.type?.includes('artisan')),
  );

  return (
    <SafariListingPage
      title="Nairobi City Excursions and Cultural Tours"
      subtitle="Culture, Conservation and City Discovery"
      description="See a richer side of Kenya’s capital on Nairobi city excursions that connect culture, conservation and craft. Meet local artisans, explore heritage and community stories, and add memorable wildlife experiences to your Nairobi stay with a knowledgeable local guide."
      heroImage="https://ik.imagekit.io/axd1riwnv/nairobi-giraffe-centre.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
