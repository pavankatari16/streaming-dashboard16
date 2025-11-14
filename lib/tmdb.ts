const BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3'
const IMG_URL = process.env.TMDB_IMG_URL || 'https://image.tmdb.org/t/p'
const API_KEY = process.env.TMDB_API_KEY

if (!API_KEY) {
  throw new Error('TMDB_API_KEY is not set in environment variables')
}

async function fetchFromTmdb(endpoint: string) {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`

  const response = await fetch(url, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.status}`)
  }

  return response.json()
}

export async function fetchList(list: 'popular' | 'now_playing' | 'top_rated') {
  const data = await fetchFromTmdb(`/movie/${list}`)
  return data.results || []
}

export async function fetchMovie(id: string | number) {
  return fetchFromTmdb(`/movie/${id}`)
}

export function imageUrl(path: string | null | undefined, size: string = 'w500'): string | null {
  if (!path) return null
  return `${IMG_URL}/${size}${path}`
}

export { IMG_URL }
