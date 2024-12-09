import './globals.css';
import type { Metadata } from 'next';
import { Mada } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const mada = Mada({ 
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-mada',
});

export const metadata: Metadata = {
  title: 'مطعم السودان - أشهى المأكولات السودانية',
  description: 'أفضل مطعم للمأكولات السودانية في المملكة العربية السعودية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${mada.variable} font-mada bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}