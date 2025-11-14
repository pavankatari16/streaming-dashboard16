"use client"

import Image from 'next/image'
import Link from 'next/link'
import type { Movie } from '../../types/movie'

type Props = { movie: Movie; imageBase: string }

export default function MovieCard({ movie, imageBase }: Props) {
  const poster = movie.poster_path ? `${imageBase}/w342${movie.poster_path}` : '/placeholder.png'

  return (
    <Link href={`/movie/${movie.id}`} className="block w-40 flex-shrink-0">
      <div className="rounded overflow-hidden bg-neutral-700">
        <div className="relative h-56 w-full">
          <Image src={poster} alt={movie.title} fill className="object-cover" />
        </div>
        <div className="p-2">
          <h3 className="text-sm font-medium truncate">{movie.title}</h3>
          <div className="text-xs opacity-80">{movie.release_date}</div>
        </div>
      </div>
    </Link>
  )
}
