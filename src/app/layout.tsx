import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import CookieConsent from '../components/CookieConsent'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ausmoapp.com'),
  title: 'Ausmo AAC - Empowering Communication for Everyone',
  description: 'AAC communication app with custom image uploads, express pages, and full accessibility support. Designed for children with autism and communication difficulties.',
  keywords: [
    'AAC',
    'communication app',
    'autism',
    'speech therapy',
    'accessibility',
    'augmentative communication',
    'alternative communication',
    'children',
    'special needs'
  ],
  authors: [{ name: 'Ausmo Team' }],
  creator: 'Ausmo',
  publisher: 'Ausmo',
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
    locale: 'en_US',
    url: 'https://ausmoapp.com',
    siteName: 'Ausmo AAC',
    title: 'Ausmo AAC - Empowering Communication for Everyone',
    description: 'AAC communication app with custom image uploads, express pages, and full accessibility support.',
    images: [
      {
        url: '/images/app-icon.png',
        width: 512,
        height: 512,
        alt: 'Ausmo AAC App Icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ausmo AAC - Empowering Communication for Everyone',
    description: 'AAC communication app with custom image uploads, express pages, and full accessibility support.',
    images: ['/images/app-icon.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/images/app-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme-preference') || 'system';
                  let resolved = 'light';
                  if (theme === 'dark') {
                    resolved = 'dark';
                  } else if (theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(resolved);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${inter.className}`}>
        <ThemeProvider>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}