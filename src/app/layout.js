import './globals.css';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Ummu Salmah — UI/UX Designer | Crafting Meaningful Digital Experiences',
  description:
    'Ummu Salmah is a UI/UX Designer specializing in intuitive, accessible, and visually engaging digital experiences that solve real user problems.',
  keywords: 'UI/UX designer, user experience, user interface, Figma, prototyping, wireframing, design systems, mobile app design, web design',
  openGraph: {
    title: 'Ummu Salmah — UI/UX Designer',
    description: 'Crafting intuitive, accessible, and visually engaging digital experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ummu Salmah — UI/UX Designer',
    description: 'Crafting intuitive, accessible, and visually engaging digital experiences.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
