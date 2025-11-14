import { fetchList } from '@/lib/tmdb'
import HeroBanner from '@/components/HeroBanner'
import MovieRow from '@/components/MovieRow'
import type { Movie } from '@/types/movie'

export default async function Home() {
  const popular = await fetchList('popular')
  const nowPlaying = await fetchList('now_playing')
  const topRated = await fetchList('top_rated')

  const hero = popular[0]

  return (
    <main>
      <HeroBanner movie={hero} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <MovieRow title="Popular" movies={popular as Movie[]} />
        <MovieRow title="Now Playing" movies={nowPlaying as Movie[]} />
        <MovieRow title="Top Rated" movies={topRated as Movie[]} />
      </div>
    </main>
  )
}
