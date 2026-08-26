import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Safari Tours | Best Kenya Safari Packages',
  description: 'Explore Kenya with handcrafted safari packages — Masai Mara, Amboseli, Tsavo, Lake Nakuru, Samburu & more.',
  alternates: { canonical: '/kenya-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya' || s.destination === 'beach');
  return (
    <SafariListingPage
      title="Kenya Safari Tours"
      subtitle="Discover Kenya"
      description="From the sweeping plains of the Masai Mara to the elephant herds of Amboseli and the white sands of Diani Beach."
      heroImage="https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
