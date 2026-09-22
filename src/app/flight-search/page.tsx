import type { Metadata } from 'next';
import FlightSearchClient from './FlightSearchClient';

export const metadata: Metadata = {
  title: 'Search & Compare Flights to East Africa | Book Cheap Flights | C.A.T.S Safaris',
  description: 'Search real-time flight prices from hundreds of airlines and travel agencies. Compare fares to Nairobi, Dar es Salaam, Kilimanjaro, Entebbe, Kigali, Zanzibar and worldwide destinations. Book directly with the supplier — no hidden fees.',
  keywords: 'flights to Kenya, flights to Nairobi, cheap flights East Africa, flights to Tanzania, flights to Kilimanjaro, flights to Dar es Salaam, flights to Zanzibar, flights to Entebbe Uganda, flights to Kigali Rwanda, compare flight prices, book safari flights, London to Nairobi flights, Dubai to Nairobi flights, international flights Africa, airline ticket search, flight comparison East Africa',
  alternates: { canonical: '/flight-search' },
  openGraph: {
    title: 'Search & Compare Flights Worldwide | C.A.T.S Safaris',
    description: 'Find the best fares from hundreds of airlines. Compare prices to Nairobi, Mombasa, Dar es Salaam, Kilimanjaro, Zanzibar, Entebbe and Kigali. Book directly with the airline or agency.',
    url: 'https://www.catssafaris.com/flight-search',
    siteName: 'Collective African Tours & Safaris',
    type: 'website',
  },
};

export default function FlightSearchPage() {
  return <FlightSearchClient />;
}
