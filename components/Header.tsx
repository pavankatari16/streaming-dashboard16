'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-neutral-800 border-b border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          StreamDesk
        </Link>
      </div>
    </header>
  )
}
