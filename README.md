# CinemaHub 🍿

A responsive, feature-rich movie discovery web application built to explore the TMDB API through a clean, type-safe React and TypeScript architecture.

I built **CinemaHub** because I wanted a lightning-fast, distraction-free interface to browse movies, experiment with complex server-state caching, and build smooth infinite-scroll experiences without bloated third-party UI libraries getting in the way.

## What It Actually Does

- **Real-time discovery:** Instantaneous search by title combined with fluid genre filtering that updates query keys dynamically.
- **Flexible sorting:** Sort on the fly by popularity, vote average, release date, vote count, revenue, or alphabetical order.
- **Infinite scrolling:** Replaces rigid pagination pages with a seamless, continuous-load experience as you scroll through the catalogue.
- **Defensive UI & Fallbacks:** Custom skeleton loading states, graceful fallbacks for missing posters, and static fallback data for genres if the network drops.
- **Color Mode Support:** Built-in light and dark mode handling that adapts cleanly to system preferences or manual toggles.

## Technical Architecture & Highlights

- **Server-State Management (TanStack Query):** Handles all asynchronous data fetching, automatic background refetching, and intelligent caching. Movie queries are strictly typed and keyed by active filter parameters.
- **Modular API Layer:** Built using a centralized Axios client dedicated to TMDB endpoints, keeping data-fetching logic cleanly decoupled from presentation components through custom React hooks.
- **Responsive Design (Chakra UI):** Employs Chakra’s style props and layout primitives to build a fluid, adaptive grid that scales gracefully from mobile viewports to ultra-wide displays.
- **Type Safety:** Written completely in strict TypeScript, establishing clear contracts for movie entities, genres, and API response payloads.

## Tech Stack

| Layer                | Technologies                                                           |
| -------------------- | ---------------------------------------------------------------------- |
| **Core**             | React 19, TypeScript                                                   |
| **Build Tool**       | Vite                                                                   |
| **State & Fetching** | TanStack Query, Axios                                                  |
| **UI & Styling**     | Chakra UI, React Icons                                                 |
| **Interactions**     | React Infinite Scroll Component                                        |
| **Data Provider**    | [The Movie Database (TMDB) API](https://developer.themoviedb.org/docs) |

## Getting Started Locally

### Prerequisites

Make sure you have **Node.js** (v18+) and **npm** installed on your machine. You will also need a free developer account and API Read Access Token from [TMDB](https://www.themoviedb.org/).

### Installation & Setup

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/your-username/cinemahub.git
   cd cinemahub
   npm install
   ```

2. Configure your API token:
   Open [`src/services/api-client.ts`](./src/services/api-client.ts) and plug in your TMDB Bearer Token.

   > **Note:** Because this app runs entirely client-side, your token is bundled into the build. For public production deployments, consider routing requests through a serverless or backend proxy to protect your credentials.

3. Fire up the local development server:
   ```bash
   npm run dev
   ```

## Project Structure

```text
src/
├── components/     # Layout wrappers, filter controls, and movie grid cards
├── data/           # Local fallback constants (e.g., fallback genres)
├── entities/       # TypeScript interfaces and type definitions
├── hooks/          # Custom TanStack Query hooks for fetching movies and genres
├── services/       # Axios client configuration and URL helper utilities
└── App.tsx         # Root component managing filter state and layout composition
```

## TMDB Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB. All movie data, posters, and metadata are provided courtesy of [The Movie Database](https://www.themoviedb.org/).
