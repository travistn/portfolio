import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

import './globals.css';

export const metadata = {
  title: 'Travis Nguyen | Frontend Developer',
  description: 'Portfolio made by Travis Nguyen',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${montserrat.variable} font-sans`}>
      <body className='bg-bg bg-cover min-h-screen dark:bg-none dark:bg-[#181a1b]'>{children}</body>
    </html>
  );
}
