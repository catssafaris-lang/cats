import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Safaris and Diani Beach Holidays | CATS',
  description: 'Combine a Kenya wildlife safari with a Diani Beach holiday, including expert game drives, iconic parks and Indian Ocean relaxation.',
  alternates: { canonical: '/kenya-safaris/kenya-and-diani' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('safari-and-beach') ||
      (s.destination === 'kenya' &&
        s.type?.includes('beach') &&
        s.type?.includes('wildlife') &&
        !s.type?.includes('nairobi-diani') &&
        !s.type?.includes('diani-departure')),
  );

  return (
    <SafariListingPage
      title="Kenya Safaris and Diani Beach Holidays"
      subtitle="Wildlife Encounters, Indian Ocean Calm"
      description="Combine the thrill of a Kenya safari with the restorative beauty of a Diani Beach holiday. Search for the Big Five on guided game drives in celebrated national parks, then unwind on powder-soft sand beneath palms beside the warm, blue Indian Ocean."
      heroImage="https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
