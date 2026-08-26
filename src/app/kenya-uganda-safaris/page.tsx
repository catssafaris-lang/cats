import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya & Uganda Safari Tours | Gorilla Trekking',
  description: 'Combined Kenya & Uganda safaris — Big Five game drives and mountain gorilla trekking.',
  alternates: { canonical: '/kenya-uganda-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-uganda');
  return (
    <SafariListingPage
      title="Kenya & Uganda Safaris"
      subtitle="Combined Adventures"
      description="Big Five safaris in Kenya meets mountain gorilla trekking in Uganda's Bwindi Impenetrable Forest."
      heroImage="https://images.pexels.com/photos/38294689/pexels-photo-38294689.jpeg?auto=compress&cs=tinysrgb&w=800"
      safaris={filtered}
      destination="kenya-uganda"
    />
  );
}
