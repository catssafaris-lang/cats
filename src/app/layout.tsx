import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Collective African Tours & Safaris | Kenya Safari Holidays',
  description: 'Collective African Tours & Safaris — unforgettable Kenya safari holidays and African travel experiences.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
