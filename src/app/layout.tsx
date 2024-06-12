import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/app/globals.css'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

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
    <html lang="en">
      <body className={poppins.className}>
        <main className="h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
