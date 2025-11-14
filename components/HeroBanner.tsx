import Image from 'next/image'
import { imageUrl } from '@/lib/tmdb'
import type { Movie } from '@/types/movie'

type Props = {
  movie?: Movie
}

export default function HeroBanner({ movie }: Props) {
  if (!movie || !movie.backdrop_path) {
    return null
  }

  const backdropUrl = imageUrl(movie.backdrop_path, 'original')

  return (
    <div className="relative h-96 w-full bg-neutral-800 overflow-hidden">
      {backdropUrl && (
        <Image
          src={backdropUrl}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent flex items-end">
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
          <p className="text-sm opacity-90 max-w-2xl line-clamp-3">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
