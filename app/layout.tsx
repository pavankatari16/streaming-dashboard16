import './globals.css'
import Header from './components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
