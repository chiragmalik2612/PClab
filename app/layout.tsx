import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Research Laboratory | Home',
  description: 'Academic and translational research exploration platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/* Background set to white, selection color set to #009966 */}
      <body className={`${inter.className} bg-white text-slate-900 flex flex-col min-h-screen antialiased selection:bg-[#009966] selection:text-white`}>
        <Navbar />
        <main className="flex-grow w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}