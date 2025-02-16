import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CustomThemeProvider } from './context/ThemeContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Modern Dashboard with Theme Toggle',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
