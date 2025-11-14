import Image from 'next/image'
import type { Movie } from '../../types/movie'
import { imageUrl } from '../../lib/tmdb'

type Props = {
	movie?: Movie | null
}

export default function HeroBanner({ movie }: Props) {
	if (!movie) return null

	const backdrop = imageUrl(movie.backdrop_path, 'original')

	return (
		<section className="relative h-[420px] w-full bg-neutral-800 text-white">
			{backdrop && (
				<div className="absolute inset-0 -z-10">
					<Image src={backdrop} alt={movie.title} fill priority className="object-cover" />
				</div>
			)}

			<div className="max-w-6xl mx-auto px-6 h-full flex items-end pb-8">
				<div className="bg-gradient-to-r from-black/80 via-black/40 to-transparent p-6 rounded-md max-w-3xl">
					<h2 className="text-3xl font-bold">{movie.title}</h2>
					<p className="mt-2 text-sm opacity-90">{movie.overview}</p>
				</div>
			</div>
		</section>
	)
}
