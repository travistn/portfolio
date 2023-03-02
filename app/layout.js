import './globals.css';

export const metadata = {
  title: 'Frontend Developer | Travis Nguyen',
  description: 'Portfolio made by Travis Nguyen',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
