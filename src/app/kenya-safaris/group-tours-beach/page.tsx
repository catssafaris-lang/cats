import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Safari Tours from Kenya Beach | CATS Safaris',
  description: 'Join a group safari from Diani, Mombasa or Kenya’s coast for guided game drives and wildlife encounters in Tsavo and beyond.',
  alternates: { canonical: '/kenya-safaris/group-tours-beach' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('group-safari') &&
      (s.type?.includes('diani-departure') || s.type?.includes('mombasa-departure') || s.type?.includes('beach')),
  );

  return (
    <SafariListingPage
      title="Group Safari Tours from Kenya Beach"
      subtitle="Coast-to-Bush Group Adventures"
      description="Trade Kenya’s palm-fringed coast for the red-earth wilderness of Tsavo on a shared group safari from Diani or Mombasa. Enjoy guided game drives among elephants, lions and other African wildlife, then return to the Indian Ocean with stories from the bush to take home."
      heroImage="https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
