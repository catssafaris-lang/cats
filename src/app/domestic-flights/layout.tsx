import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domestic Flights & Private Charters in Kenya | Safari Airstrips',
  description: 'Domestic flights and private charter requests to Masai Mara, Amboseli, Samburu, Lamu and Diani airstrips. Send your route and dates to C.A.T.S Safaris for a quote.',
  keywords: ['domestic flights Kenya', 'private charter Kenya', 'Masai Mara flights', 'bush flights Kenya', 'Wilson Airport flights'],
  alternates: { canonical: '/domestic-flights' },
};

export default function DomesticFlightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
