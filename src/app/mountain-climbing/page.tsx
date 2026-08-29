import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mountain Climbing Safaris | Mt Kilimanjaro & Mt Kenya Treks | CATS',
  description: 'Summit Africa\'s greatest peaks with CATS Safaris — Kilimanjaro Marangu, Machame, Lemosho, Rongai and Northern Circuit routes plus Mt Kenya Sirimon, Naro Moru and Chogoria climbs.',
  alternates: { canonical: '/mountain-climbing' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'mountain');

  return (
    <SafariListingPage
      title="Mountain Climbing Safaris"
      subtitle="Summit Africa's Greatest Peaks"
      description="From the snow-capped summit of Mount Kilimanjaro — Africa's highest point at 5,895 metres — to the jagged twin peaks of Mount Kenya, our mountain climbing expeditions combine expert guiding, careful acclimatisation and unmatched alpine scenery. Choose from classic routes like Marangu and Machame on Kilimanjaro, or the dramatic Sirimon-Chogoria traverse on Mt Kenya. Every climb is fully supported with experienced porters, mountain cooks and all technical equipment."
      heroImage="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1800"
      safaris={filtered}
      destination="mountain"
    />
  );
}
