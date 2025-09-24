// Next.js imports
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif } from 'next/font/google';

// Global styles
import './globals.css';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
});

// Application metadata
export const metadata: Metadata = {
  title: 'Horizon',
  description: 'Horizon is a modern banking platform for everyone.',
  icons: {
    icon: '/icons/logo.svg'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
