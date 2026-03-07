import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import './tailwind.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Gyp6.sale - B2B Marketplace',
    template: '%s | Gyp6.sale - B2B Marketplace',
  },
  description: 'Gyp6.sale - B2B Marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
