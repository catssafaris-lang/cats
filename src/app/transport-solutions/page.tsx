import type { Metadata } from 'next';
import { TransportClient } from './TransportClient';

export const metadata: Metadata = {
  title: 'Transport Solutions Kenya | Car Hire, Leasing, Airport Transfers & Safari Vehicles | C.A.T.S Safaris',
  description: 'Premium transport solutions across Kenya and East Africa — corporate car hire, self-drive SUVs, chauffeur service, airport transfers, safari Land Cruisers, buses, and SGR train bookings by Collective African Tours & Safaris.',
  keywords: 'car hire Kenya, vehicle leasing Nairobi, airport transfer Kenya, safari vehicle rental, chauffeur service Nairobi, corporate car hire East Africa, fleet leasing Kenya, Land Cruiser hire, bus rental Nairobi, JKIA transfer, Wilson Airport transfer, SGR booking',
  alternates: { canonical: '/transport-solutions' },
};

export default function TransportSolutionsPage() {
  return <TransportClient />;
}
