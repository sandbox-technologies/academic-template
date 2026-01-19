import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quentin Romero Lauro',
  description: 'Co-Founder & CEO of Inspector (YC F25). Researcher at the intersection of AI, HCI, and developer tools. University of Pittsburgh CS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
