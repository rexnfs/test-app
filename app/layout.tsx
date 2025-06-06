import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GTM Data Cost Calculator | Calculate the True Cost of Poor Go-to-Market Data',
  description: 'Discover the hidden costs of poor go-to-market data quality. Calculate time, opportunity, and productivity costs to understand the true impact on your business.',
  keywords: ['GTM data', 'sales productivity', 'data quality', 'cost calculator', 'sales efficiency'],
  authors: [{ name: 'GTM Data Solutions' }],
  openGraph: {
    title: 'GTM Data Cost Calculator',
    description: 'Calculate the true cost of poor go-to-market data quality',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Data Cost Calculator',
    description: 'Calculate the true cost of poor go-to-market data quality',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="floating-shapes"></div>
        {children}
      </body>
    </html>
  )
}