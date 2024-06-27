import type { Metadata } from 'next'

import Navbar from '@/components/Navbar/Nav'
import Footer from '@/components/Bar/Footer'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'DIME Rewards',
  description: 'Plan de recompensas',
  icons: {
    apple: '/icon.png',
  },
  // themeColor: "#00000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="h-full flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
