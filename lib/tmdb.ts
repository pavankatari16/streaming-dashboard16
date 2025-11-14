const BASE = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3'
const IMG = process.env.TMDB_IMG_URL || 'https://image.tmdb.org/t/p'
const apiKey = process.env.TMDB_API_KEY

if (!apiKey) {
	throw new Error('Missing TMDB_API_KEY in environment')
}

async function fetchFromTmdb(path: string, params: Record<string, string> = {}) {
	const url = new URL(`${BASE}${path}`)
	url.searchParams.set('api_key', apiKey)
	Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

	const res = await fetch(url.toString(), { cache: 'no-store' })
	if (!res.ok) {
		throw new Error(`TMDB fetch failed: ${res.status} ${res.statusText}`)
	}
	return res.json()
}

export async function fetchList(list: 'popular' | 'now_playing' | 'top_rated') {
	const data = await fetchFromTmdb(`/movie/${list}`)
	return data.results ?? []
}

export async function fetchMovie(id: string | number) {
	return fetchFromTmdb(`/movie/${id}`)
}

export function imageUrl(path: string | null | undefined, size = 'w500') {
	if (!path) return null
	return `${IMG}/${size}${path}`
}

export const IMG_URL = IMG
