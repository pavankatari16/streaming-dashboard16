import { fetchMovie, imageUrl } from '../../../lib/tmdb'
import Image from 'next/image'
import Link from 'next/link'
import type { Movie } from '../../../types/movie'

type Props = { params: { id: string } }

export default async function MoviePage({ params }: Props) {
	const data = await fetchMovie(params.id)
	const movie = data as Movie

	const poster = imageUrl(movie.poster_path, 'w500')

	return (
		<div className="min-h-screen bg-neutral-900 text-white">
			<header className="max-w-6xl mx-auto px-4 py-6">
				<Link href="/" className="text-sm opacity-80">
					← Back
				</Link>
			</header>

			<main className="max-w-6xl mx-auto px-4 pb-12">
				<div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
					<div className="rounded overflow-hidden bg-neutral-800">
						{poster ? (
							<div className="relative h-[450px] w-full">
								<Image src={poster} alt={movie.title} fill className="object-cover" />
							</div>
						) : (
							<div className="h-[450px] flex items-center justify-center">No poster</div>
						)}
					</div>

					<div>
						<h1 className="text-3xl font-bold">{movie.title}</h1>
						<div className="mt-2 text-sm opacity-80">{movie.release_date} • {movie.vote_average ?? ''}</div>
						<p className="mt-4 text-neutral-200">{movie.overview}</p>
					</div>
				</div>
			</main>
		</div>
	)
}
