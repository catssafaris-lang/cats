import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi to Diani Beach Safari Tours | CATS Safaris',
  description: 'Travel from Nairobi to Diani Beach on a Kenya safari combining exciting game drives, wildlife parks and an Indian Ocean escape.',
  alternates: { canonical: '/kenya-safaris/nairobi-to-diani' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('nairobi-diani'));

  return (
    <SafariListingPage
      title="Nairobi to Diani Beach Safari Tours"
      subtitle="From Savannah to the Indian Ocean"
      description="Journey from Nairobi’s vibrant gateway to the soft white sands of Diani Beach on a Kenya safari that blends bush and coast. Enjoy game drives in renowned wildlife parks, look for elephants and big cats, then slow down beside the warm Indian Ocean."
      heroImage="https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
