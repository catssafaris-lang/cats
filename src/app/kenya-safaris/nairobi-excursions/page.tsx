import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nairobi Excursions & National Park Safaris | CATS',
  description: 'Explore Nairobi National Park on private or group safaris, plus city excursions and cultural tours. Half-day, full-day, and combo packages departing daily from Nairobi.',
  alternates: { canonical: '/kenya-safaris/nairobi-excursions' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.type?.includes('nairobi-departure') &&
      (s.type?.includes('day-trip') || s.type?.includes('group-safari')) &&
      (s.slug.includes('nairobi-national-park') ||
        s.type?.includes('culture') ||
        s.type?.includes('artisan') ||
        s.slug.includes('nairobi-into-africa')),
  );

  return (
    <SafariListingPage
      title="Nairobi Excursions & National Park Safaris"
      subtitle="Wildlife, Culture, Conservation & City Discovery"
      description="Experience Africa's wildest capital city. Join a private or group safari through Nairobi National Park — where lions, rhinos, giraffes, and over 400 bird species roam just 7 km from downtown. Or explore the city's cultural highlights, conservation centres, and artisan workshops on guided excursions departing daily from Nairobi hotels."
      heroImage="https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/Nairobi-National-Park.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
