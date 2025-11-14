"use client"

import Link from 'next/link'

export default function Header() {
	return (
		<header className="bg-neutral-900 text-white">
			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="text-2xl font-semibold">
					StreamDesk
				</Link>
				<nav>
					<Link href="/" className="text-sm opacity-80 hover:opacity-100">
						Home
					</Link>
				</nav>
			</div>
		</header>
	)
}
