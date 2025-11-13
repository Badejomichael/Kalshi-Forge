import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Kalshi Forge',
  description: 'Design and simulate prediction markets',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
              {/* Favicon */}
              <link rel="icon" type="image/jpg" href="/KalshiForge.jpg" />
            </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-100 ">
        <Navbar />
        <main className="flex-1 container mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
