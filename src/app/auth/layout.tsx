import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar/Navbar'
import { Sidebar } from '@/components/Sidebar'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <div className="w-full h-screen">
      <main className="h-screen flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}
