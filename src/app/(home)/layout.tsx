import type { Metadata } from 'next'

import Navbar from '@/components/Navbar/Nav'
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
      <main className="h-screen flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}
