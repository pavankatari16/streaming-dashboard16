import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Streaming Dashboard',
  description: 'Movie streaming dashboard using TMDB API'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
