"use client"

import type { Movie } from '../../types/movie'
import MovieCard from './MovieCard'

type Props = {
	title: string
	movies: Movie[]
	imageBase: string
}

export default function MovieRow({ title, movies, imageBase }: Props) {
	if (!movies || movies.length === 0) return null

	return (
		<section className="my-6">
			<h3 className="text-lg font-semibold px-4">{title}</h3>
			<div className="mt-3 px-4 flex gap-3 overflow-x-auto py-2">
				{movies.map((m) => (
					<MovieCard movie={m} imageBase={imageBase} key={m.id} />
				))}
			</div>
		</section>
	)
}
