import type { Metadata, Viewport } from 'next'
import './globals.css'
import { AppProvider } from '@/context/AppContext'

export const metadata: Metadata = {
  title: 'Zapmeal - Food Delivery',
  description: 'Order food from multiple restaurants with Zapmeal',
  icons: {
    icon: '/zaplogo.png',
    apple: '/zaplogo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
