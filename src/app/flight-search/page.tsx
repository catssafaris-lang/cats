import type { Metadata } from 'next';
import FlightSearchClient from './FlightSearchClient';

export const metadata: Metadata = {
  title: 'Search & Book Flights to East Africa | C.A.T.S Safaris',
  description: 'Search and compare worldwide flights to Kenya, Tanzania, Uganda, and Rwanda. Find the best fares from hundreds of airlines and travel agencies.',
  keywords: 'flights to Kenya, flights to Nairobi, flights to Tanzania, flights to East Africa, book safari flights, cheap flights Africa, flight search, compare flights',
  alternates: { canonical: '/flight-search' },
};

export default function FlightSearchPage() {
  return <FlightSearchClient />;
}
