import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import MovieRow from './components/MovieRow'
import { fetchList, IMG_URL } from '../lib/tmdb'
import type { Movie } from '../types/movie'

export default async function HomePage() {
  const [popular, nowPlaying, topRated] = await Promise.all([
    fetchList('popular'),
    fetchList('now_playing'),
    fetchList('top_rated'),
  ])

  const hero = (popular as Movie[])[0]

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main>
        <HeroBanner movie={hero} />
        <div className="max-w-6xl mx-auto px-4">
          <MovieRow title="Popular" movies={popular as Movie[]} imageBase={IMG_URL} />
          <MovieRow title="Now Playing" movies={nowPlaying as Movie[]} imageBase={IMG_URL} />
          <MovieRow title="Top Rated" movies={topRated as Movie[]} imageBase={IMG_URL} />
        </div>
      </main>
    </div>
  )
}
