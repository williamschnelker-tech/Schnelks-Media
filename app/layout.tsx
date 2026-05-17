import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'Schnelks Media | Google Ads, Websites & AI Automation',
  description:
    'We run Google Ads, build and maintain websites, and set up AI automation for businesses. Real results, done for you.',
  openGraph: {
    title: 'Schnelks Media | Google Ads, Websites & AI Automation',
    description: 'Google Ads, website design, website upkeep, and AI automation — all done for you.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#04091a] text-gray-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
