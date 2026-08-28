import { Metadata } from 'next';
import KenyaRwandaSafarisContent from './KenyaRwandaSafarisContent';

export const metadata: Metadata = {
  title: 'Kenya & Rwanda Safaris | C.A.T.S | Gorilla Trekking & Safari Adventures',
  description:
    'Combine Kenya safari adventures with Rwanda gorilla trekking in Volcanoes National Park. C.A.T.S delivers seamless cross-border itineraries from the Masai Mara to the Virunga Mountains.',
  keywords: [
    'Kenya Rwanda safari',
    'gorilla trekking Rwanda',
    'Volcanoes National Park',
    'Kenya Rwanda combined safari',
    'golden monkey trekking',
    'East Africa safari',
    'CATS safaris',
    'Masai Mara Rwanda',
  ],
};

export default function KenyaRwandaSafarisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.catssafaris.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Kenya & Rwanda Safaris',
                item: 'https://www.catssafaris.com/kenya-rwanda-safaris',
              },
            ],
          }),
        }}
      />
      <KenyaRwandaSafarisContent />
    </>
  );
}
