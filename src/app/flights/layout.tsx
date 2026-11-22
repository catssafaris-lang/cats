import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheap Flights to Kenya, Nairobi, Mombasa & Zanzibar | Safari Flights',
  description: 'Compare flights to Nairobi (JKIA), Mombasa, Kilimanjaro and Zanzibar for your East Africa safari. Indicative guide fares, booking tips and bush-flight connections from C.A.T.S Safaris.',
  keywords: ['cheap flights to Kenya', 'flights to Nairobi', 'flights to Mombasa', 'flights to Zanzibar', 'flights to Kilimanjaro', 'safari flights Kenya'],
  alternates: { canonical: '/flights' },
};

export default function FlightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
