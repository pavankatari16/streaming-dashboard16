# Streaming Dashboard

A Next.js 14 streaming dashboard featuring TMDB API integration.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- TMDB API

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` with:
```
TMDB_API_KEY=your_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMG_URL=https://image.tmdb.org/t/p
```

3. Run dev server:
```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure

- `app/` - Next.js App Router pages
- `components/` - React components
- `lib/` - TMDB API helpers
- `types/` - TypeScript types

## Deployment

Deploy on Vercel. Set environment variables in project settings.
