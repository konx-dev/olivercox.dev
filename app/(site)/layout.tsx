// Styles, Theming & Fonts
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

import ThemeSwitch from '@/components/atom/ThemeSwitch';

// SEO & Metadata
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    default: 'Frontend Developer | olivercox.dev',
    template: '%s | olivercox.dev'
  },
  description: 'front-end developer based in Nottingham, UK. Building bespoke, performant and accessible solutions'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} font-primary`}>
      <body className="bg-white-700 dark:bg-black-900 text-black-900 dark:text-white-700">
        <Providers>
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <div className="fixed bottom-[0px] rounded-t-md cursor-pointer right-5 bg-red-500 dark:bg-blue-500">
            <ThemeSwitch />
          </div>
        </Providers>
      </body>
    </html>
  );
}
