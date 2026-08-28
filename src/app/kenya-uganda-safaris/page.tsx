import { Metadata } from 'next';
import KenyaUgandaSafarisContent from './KenyaUgandaSafarisContent';

export const metadata: Metadata = {
  title: 'Kenya & Uganda Safaris | C.A.T.S | Gorilla Trekking & Wildlife Tours',
  description:
    'Combine Kenya wildlife safaris with Uganda mountain gorilla trekking. C.A.T.S coordinates seamless cross-border adventures from the Masai Mara to Bwindi Impenetrable Forest.',
  keywords: [
    'Kenya Uganda safari',
    'gorilla trekking Uganda',
    'Bwindi gorilla safari',
    'Kenya Uganda combined safari',
    'Big Five gorilla trekking',
    'East Africa safari',
    'CATS safaris',
    'Masai Mara Bwindi',
  ],
};

export default function KenyaUgandaSafarisPage() {
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
                name: 'Kenya & Uganda Safaris',
                item: 'https://www.catssafaris.com/kenya-uganda-safaris',
              },
            ],
          }),
        }}
      />
      <KenyaUgandaSafarisContent />
    </>
  );
}
