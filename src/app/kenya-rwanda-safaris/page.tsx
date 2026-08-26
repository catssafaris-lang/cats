import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya & Rwanda Safari Tours | Gorilla Trekking',
  description: 'Combined Kenya & Rwanda safaris — Masai Mara game drives and gorilla trekking in Volcanoes National Park.',
  alternates: { canonical: '/kenya-rwanda-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-rwanda');
  return (
    <SafariListingPage
      title="Kenya & Rwanda Safaris"
      subtitle="Combined Adventures"
      description="Kenya's iconic wildlife and Rwanda's mountain gorillas — the ultimate East African safari combination."
      heroImage="https://images.pexels.com/photos/19755751/pexels-photo-19755751.jpeg?auto=compress&cs=tinysrgb&w=800"
      safaris={filtered}
      destination="kenya-rwanda"
    />
  );
}
