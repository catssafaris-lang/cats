import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Beach to Nairobi Safari Tours | CATS Safaris',
  description: 'Journey from Kenya’s coast to Nairobi on a safari with immersive game drives, Tsavo wildlife and remarkable changing landscapes.',
  alternates: { canonical: '/kenya-safaris/beach-to-nairobi' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('beach-to-nairobi') || s.slug.includes('coast-to-nairobi'),
  );

  return (
    <SafariListingPage
      title="Kenya Beach to Nairobi Safari Tours"
      subtitle="A Coast-to-Capital Safari Journey"
      description="Travel from Kenya’s sunlit beaches to Nairobi through some of the country’s most compelling safari country. These coast-to-capital tours weave game drives in Tsavo and other wildlife parks with dramatic scenery, offering elephants, big cats and a rewarding overland adventure."
      heroImage="https://ik.imagekit.io/axd1riwnv/tsavo-west-landscape.jpg"
      safaris={filtered}
      destination="kenya"
    />
  );
}
