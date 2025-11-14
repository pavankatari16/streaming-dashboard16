"use client"

import MovieCard from './MovieCard'
import type { Movie } from '@/types/movie'

type Props = {
  title: string
  movies: Movie[]
  imageBase: string
}

export default function MovieRow({ title, movies, imageBase }: Props) {
  if (!movies || movies.length === 0) return null

  return (
    <section className="my-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} imageBase={imageBase} />
        ))}
      </div>
    </section>
  )
}
