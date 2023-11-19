// src/components/RootLayout.js
import { Inter } from 'next/font/google';
import TopNavigation from '../../../front/src/TopNavigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HackTrace',
  description: 'Created at the ETH Istanbul 2023 Hackathon',
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <TopNavigation />
      <main>{children}</main>
    </div>
  );
}
