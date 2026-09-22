import type { Metadata } from 'next';
import FlightSearchClient from './FlightSearchClient';

export const metadata: Metadata = {
  title: 'Search & Compare Cheap Flights to Kenya, East Africa & Worldwide | C.A.T.S Safaris',
  description: 'Compare real-time flight prices from 500+ airlines and travel agencies. Find cheap flights to Nairobi, Mombasa, Dar es Salaam, Kilimanjaro, Zanzibar, Entebbe, Kigali, Dubai, London and worldwide. Book directly with the airline — no hidden fees. Collective African Tours & Safaris.',
  keywords: 'cheap flights to Kenya, flights to Nairobi, cheap flights East Africa, flights to Tanzania, flights to Kilimanjaro, flights to Dar es Salaam, flights to Zanzibar, flights to Entebbe Uganda, flights to Kigali Rwanda, compare flight prices Africa, book safari flights Kenya, London to Nairobi flights, Dubai to Nairobi flights, Istanbul to Nairobi flights, New York to Nairobi cheap flights, international flights Africa, flight comparison East Africa, Kenya Airways flights, Emirates flights to Nairobi, Qatar Airways East Africa, budget flights Mombasa, last minute flights Kenya, fly in safari Kenya, domestic flights Kenya, Nairobi to Masai Mara flights, airport transfers Kenya',
  alternates: { canonical: '/flight-search' },
  openGraph: {
    title: 'Search & Compare Cheap Flights Worldwide | C.A.T.S Safaris',
    description: 'Find the lowest fares from 500+ airlines. Compare prices to Nairobi, Mombasa, Dar es Salaam, Kilimanjaro, Zanzibar, Entebbe and Kigali. Book directly with the airline or agency — zero hidden fees.',
    url: 'https://www.catssafaris.com/flight-search',
    siteName: 'Collective African Tours & Safaris',
    type: 'website',
  },
};

export default function FlightSearchPage() {
  return <FlightSearchClient />;
}
