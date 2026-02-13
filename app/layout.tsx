import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HOS Pilot - AI-Driven Truck Driver Schedule Optimizer',
  description: 'Value Proposition: Automates and optimizes complex truck driver schedules (sleeper berth splits, time zones) to ensure strict Hours of Service (HOS) compliance, reduce violations, and improve driver well-being and operational efficiency for logistics companies.

Target Customer: Small to medium-sized trucking companies, logistics dispatchers, fleet managers, owner-operators facing HOS complexity.

---
Category: Micro-SaaS
Target Market: Small to medium-sized trucking companies, logistics dispatchers, fleet managers, owner-operators facing HOS complexity.
Source Hypothesis ID: 19206987-7f0c-4a1c-97d7-72eabcf88760
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">HOS Pilot - AI-Driven Truck Driver Schedule Optimizer</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
