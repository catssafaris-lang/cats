import type { Metadata } from 'next';
import NairobiExcursionsHub from './NairobiExcursionsHub';

const title = 'Private Nairobi National Park Tours & Day Trips from Nairobi | C.A.T.S';
const description =
  'Book a private Nairobi National Park tour, half-day Nairobi safari, Giraffe Centre & Sheldrick elephant excursion, or a private day trip from Nairobi to Amboseli, Naivasha, Hell\'s Gate, Lake Nakuru or Ol Pejeta. Hotel & JKIA pickup.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Nairobi National Park private tour',
    'private Nairobi safari',
    'Nairobi National Park half day tour',
    'Nairobi excursions',
    'day trips from Nairobi',
    'things to do in Nairobi',
    'Nairobi layover safari',
    'Nairobi city tour',
    'Giraffe Centre and Sheldrick elephant orphanage tour',
    'Amboseli day trip from Nairobi',
    'Lake Naivasha and Hell\'s Gate day trip',
    'Ol Pejeta day trip',
    'Lake Nakuru day trip',
    'Nairobi game drive',
  ],
  alternates: { canonical: '/nairobi-excursions-day-trips' },
  openGraph: {
    title,
    description,
    url: 'https://www.catssafaris.com/nairobi-excursions-day-trips',
    type: 'website',
    images: [{ url: 'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg' }],
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <NairobiExcursionsHub />;
}
