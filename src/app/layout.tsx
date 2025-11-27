import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/../ThemeContext";
import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#007b7b' },
    { media: '(prefers-color-scheme: dark)', color: '#00f7f7' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://deptachris.de'),
  title: {
    default: 'Christoph Depta - Frontend Entwickler | deptachris.de',
    template: '%s | deptachris.de'
  },
  description: 'Professionelle Webentwicklung, moderne Frontend Lösungen und kreative digitale Projekte von Christoph Depta aus Nürnberg. Spezialisiert auf React, Next.js und responsive Webdesign.',
  keywords: ['Frontend Entwickler', 'Webentwicklung', 'React', 'Next.js', 'JavaScript', 'Responsive Design', 'Nürnberg', 'Portfolio'],
  authors: [{ name: 'Christoph Depta', url: 'https://deptachris.de' }],
  creator: 'Christoph Depta',
  publisher: 'Christoph Depta',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://deptachris.de',
    title: 'Christoph Depta - Frontend Entwickler',
    description: 'Professionelle Webentwicklung und moderne Frontend Lösungen aus Nürnberg',
    siteName: 'deptachris.de',
    images: [
      {
        url: '/portrait.webp',
        width: 1200,
        height: 630,
        alt: 'Christoph Depta - Frontend Entwickler',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christoph Depta - Frontend Entwickler',
    description: 'Professionelle Webentwicklung und moderne Frontend Lösungen',
    images: ['/portrait.webp'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Christoph Depta',
              url: 'https://deptachris.de',
              image: 'https://deptachris.de/portrait.webp',
              sameAs: [
                'https://www.linkedin.com/in/christoph-depta-09683221a/',
                'https://github.com/ChrisDepta',
                'https://www.instagram.com/deptachris.de/',
                'https://www.facebook.com/profile.php?id=61566083339386'
              ],
              jobTitle: 'Frontend Entwickler',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelancer'
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nürnberg',
                addressCountry: 'DE'
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Zum Hauptinhalt springen
          </a>
          <div className="min-h-screen overflow-x-hidden flex flex-col items-center">
            <main id="main-content">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
