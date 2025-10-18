import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from '../components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

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
    icon: '/favicon.png',
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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}