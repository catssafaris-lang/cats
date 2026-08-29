import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2–4 Day Safari Tours from Nairobi | CATS Safaris Kenya',
  description: 'Book a 2–4 day Kenya safari from Nairobi, with Big Five game drives in Masai Mara, Amboseli and Kenya’s leading wildlife parks.',
  alternates: { canonical: '/kenya-safaris/short-safaris' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.destination === 'kenya' &&
      s.type?.includes('nairobi-departure') &&
      s.duration >= 2 &&
      s.duration <= 4 &&
      !s.type?.includes('day-trip') &&
      !s.type?.includes('flight-safari'),
  );

  return (
    <SafariListingPage
      title="2–4 Day Safari Tours from Nairobi"
      subtitle="Short Kenya Safari Escapes"
      description="Make the most of a short Kenya safari from Nairobi with expertly guided game drives in the Masai Mara, Amboseli and other iconic wildlife parks. These 2–4 day tours pair efficient travel with unforgettable encounters with the Big Five, elephants, lions and wide-open savannah."
      heroImage="https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
