import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zanzibar Beach Holidays | Indian Ocean Escapes | CATS',
  description: 'Discover Zanzibar beach holidays with idyllic Indian Ocean shores, Swahili culture and tailor-made tropical escapes from CATS Safaris.',
  alternates: { canonical: '/kenya-safaris/zanzibar' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('zanzibar') || (s.destination === 'beach' && s.slug.includes('zanzibar')),
  );

  return (
    <SafariListingPage
      title="Zanzibar Beach Holidays"
      subtitle="Indian Ocean Island Escapes"
      description="Savour the timeless allure of Zanzibar, where soft white beaches meet clear Indian Ocean water and Swahili heritage fills the air. These beach holidays invite you to slow down, explore Stone Town, enjoy island hospitality and pair a tropical escape with your East African safari."
      heroImage="https://ik.imagekit.io/axd1riwnv/zanzibar-beach-holiday.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
