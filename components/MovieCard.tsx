'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Movie } from '@/types/movie'

type Props = {
  movie: Movie
  imageBase: string
}

export default function MovieCard({ movie, imageBase }: Props) {
  const posterUrl = movie.poster_path ? `${imageBase}/w342${movie.poster_path}` : '/placeholder.png'

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative h-56 w-40 bg-neutral-800 rounded overflow-hidden hover:opacity-80 transition-opacity">
        <Image
          src={posterUrl}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  )
}
