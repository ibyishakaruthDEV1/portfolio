import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio | ABC Web Dev',
  description: 'Portfolio website created by ABC Web Development Company',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Portfolio', 'Kigali'],
  authors: [{ name: 'ABC Web Development', url: 'https://abcwebdev.rw' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.abcwebdev.rw',
    title: 'Professional Portfolio',
    description: 'Showcasing my work as a Next.js developer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ABC Web Development Portfolio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
          {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}