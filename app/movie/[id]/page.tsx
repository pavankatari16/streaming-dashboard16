import { fetchMovie, imageUrl } from '@/lib/tmdb'
import Image from 'next/image'
import Link from 'next/link'
import type { Movie } from '@/types/movie'

type Props = {
  params: {
    id: string
  }
}

export default async function MoviePage({ params }: Props) {
  const movie = (await fetchMovie(params.id)) as Movie
  const posterUrl = imageUrl(movie.poster_path, 'w500')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm opacity-70 hover:opacity-100 mb-6 block">
        ← Back to home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          {posterUrl ? (
            <div className="relative h-96 w-full">
              <Image src={posterUrl} alt={movie.title} fill className="object-cover rounded" />
            </div>
          ) : (
            <div className="h-96 bg-neutral-800 rounded flex items-center justify-center">
              No poster available
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="text-sm opacity-70 mb-4">
            {movie.release_date} • Rating: {movie.vote_average?.toFixed(1) || 'N/A'}
          </div>
          <div className="prose prose-invert max-w-none">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
