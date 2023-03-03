import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

import './globals.css';

export const metadata = {
  title: 'Frontend Developer | Travis Nguyen',
  description: 'Portfolio made by Travis Nguyen',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${montserrat.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
