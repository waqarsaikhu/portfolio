import type { Metadata } from 'next'
import { Header } from '@/components/ui/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Waqar Safdar - Frontend Developer',
  description: 'Personal portfolio of Waqar Safdar, Frontend Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <main className="min-h-screen w-full max-w-7xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
