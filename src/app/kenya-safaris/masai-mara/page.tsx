import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masai Mara Safaris | Kenya Big Five Game Drives | CATS',
  description: 'Discover Masai Mara safaris with expertly guided Kenya game drives, Big Five wildlife viewing and Great Migration experiences.',
  alternates: { canonical: '/kenya-safaris/masai-mara' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('masai-mara') && !s.type?.includes('flight-safari'));

  return (
    <SafariListingPage
      title="Masai Mara Safaris"
      subtitle="Kenya’s Legendary Wildlife Reserve"
      description="Answer the call of the Masai Mara on a Kenya safari shaped around world-class game drives. Scan golden plains for lion, leopard, cheetah, elephant and buffalo, follow the Mara River during the Great Migration, and experience the enduring drama of one of Africa’s finest wildlife reserves."
      heroImage="https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
