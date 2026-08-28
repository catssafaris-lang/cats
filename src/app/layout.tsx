import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyBottomBar from '@/components/StickyBottomBar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'C.A.T.S Safaris | Kenya & Tanzania Safari Tours', template: '%s | C.A.T.S Safaris' },
  description: 'Collective African Tours & Safaris — 15 years of crafting unforgettable safari experiences across East Africa. Kenya, Tanzania, Uganda & Rwanda.',
  metadataBase: new URL('https://www.catssafaris.com'),
  openGraph: { type: 'website', locale: 'en_US', url: 'https://www.catssafaris.com', siteName: 'C.A.T.S Safaris' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
    <head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FGYWE55NRT" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FGYWE55NRT');`}</Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+"xqh5bkqx86";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script");`}</Script>
    </head>
    <body className={`${inter.className} pb-16 lg:pb-0`}>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <StickyBottomBar />
    </body>
  </html>;
}
