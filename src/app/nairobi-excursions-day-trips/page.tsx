import type { Metadata } from 'next';
import NairobiExcursionsHub from './NairobiExcursionsHub';

export const metadata: Metadata = {
  title: 'Nairobi Excursions & Day Trips | Nairobi National Park & Kenya Tours | C.A.T.S',
  description: 'Explore Nairobi excursions and Kenya day trips with C.A.T.S Safaris. Discover Nairobi National Park, wildlife, culture and day trips to Amboseli, Naivasha, Hell\'s Gate, Ol Pejeta and more.',
  alternates: { canonical: '/nairobi-excursions-day-trips' },
  openGraph: { title: 'Nairobi Excursions & Day Trips | C.A.T.S Safaris', description: 'Explore Nairobi excursions and Kenya day trips with C.A.T.S Safaris.', url: 'https://www.catssafaris.com/nairobi-excursions-day-trips', type: 'website' },
};

export default function Page() {
  return <NairobiExcursionsHub />;
}
