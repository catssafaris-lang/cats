import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyBottomBar from '@/components/StickyBottomBar';
import { QuoteModalProvider } from '@/context/QuoteModalContext';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Kenya Safaris, Nairobi Day Trips & Tanzania Safari Tours | C.A.T.S Safaris', template: '%s | C.A.T.S Safaris' },
  description: 'Kenya safari packages, private Nairobi National Park tours and day trips from Nairobi, Kenya–Tanzania safaris, beach holidays and transport. Led by a team leader with 15+ years of safari experience.',
  keywords: ['Kenya safari', 'Kenya safari packages', 'Masai Mara safari', 'Nairobi National Park tour', 'day trips from Nairobi', 'Nairobi excursions', 'private safari Kenya', 'group joining safari Kenya', 'Kenya Tanzania safari', 'Amboseli safari', 'Diani beach safari', 'Kenya safari tour operator', 'Collective African Tours & Safaris', 'C.A.T.S Safaris'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  metadataBase: new URL('https://www.catssafaris.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: { type: 'website', locale: 'en_US', url: 'https://www.catssafaris.com', siteName: 'Collective African Tours & Safaris', images: [{ url: 'https://ik.imagekit.io/axd1riwnv/2%20migration.jpg', width: 1200, height: 630, alt: 'Kenya safari with Collective African Tours & Safaris' }] },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
    <head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FGYWE55NRT" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FGYWE55NRT');`}</Script>
      <Script id="microsoft-clarity" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+"xqh5bkqx86";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script");`}</Script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"TravelAgency","@id":"https://www.catssafaris.com/#organization","name":"Collective African Tours & Safaris","alternateName":["C.A.T.S Safaris","CATS Safaris"],"url":"https://www.catssafaris.com","logo":"https://www.catssafaris.com/apple-touch-icon.png","image":"https://ik.imagekit.io/axd1riwnv/2%20migration.jpg","telephone":"+254723951388","email":"info@catssafaris.com","address":{"@type":"PostalAddress","addressLocality":"Nairobi","addressCountry":"KE"},"areaServed":["Kenya","Tanzania","Uganda","Rwanda"],"sameAs":["https://www.facebook.com/CATSAFARISKENYA"],"knowsAbout":["Kenya safaris","Nairobi National Park tours","Day trips from Nairobi","Masai Mara safaris","Kenya Tanzania safaris"]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebSite","@id":"https://www.catssafaris.com/#website","name":"Collective African Tours & Safaris","alternateName":"C.A.T.S Safaris","url":"https://www.catssafaris.com","publisher":{"@id":"https://www.catssafaris.com/#organization"}}) }} />
    </head>
    <body className={`${inter.className} pb-16 lg:pb-0`}>
      <QuoteModalProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <StickyBottomBar />
      </QuoteModalProvider>
    </body>
  </html>;
}
