import type { Metadata } from 'next'

import { Navbar } from '@/components/Navbar/Navbar'
import '@/app/globals.css'
import { Sidebar } from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Dashboard | DIME Rewards',
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
    <html lang="en">
      <body >
        <div className="h-screen flex flex-col bg-blue-100">
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
