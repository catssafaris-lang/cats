import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Safari Tours from Nairobi | Kenya Safaris | CATS',
  description: 'Join a group Kenya safari from Nairobi for guided game drives, shared adventure and outstanding wildlife viewing in iconic parks.',
  alternates: { canonical: '/kenya-safaris/group-tours-nairobi' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('group-safari') && !s.type?.includes('diani-departure') && !s.type?.includes('mombasa-departure'),
  );

  return (
    <SafariListingPage
      title="Group Safari Tours from Nairobi"
      subtitle="Shared Kenya Safari Adventures"
      description="Set out from Nairobi with fellow travellers on a sociable, expertly guided Kenya group safari. Share sunrise game drives, Masai Mara wildlife sightings and memorable evenings in the bush while experienced guides reveal the parks, animals and stories that make Kenya extraordinary."
      heroImage="https://ik.imagekit.io/axd1riwnv/group-safari-masai-mara.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
