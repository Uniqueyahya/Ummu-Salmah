import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import { Inter, Syne, Geist } from 'next/font/google';

const inter = Inter({
  variable: '--font-secondary',
  subsets: ['latin'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

const geist = Geist({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Unique Yahya — Web & Mobile App Developer | Building Revenue-Driven Products',
  description:
    'I help startups, businesses, and founders launch scalable web and mobile products that generate users, leads, and sales.',
  keywords: 'web developer, mobile app developer, react, node.js, freelance developer, Nigeria',
  openGraph: {
    title: 'Unique Yahya — Web & Mobile App Developer',
    description: 'I build web & mobile apps that turn ideas into revenue.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${geist.variable}`} data-theme="dark" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
