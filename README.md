# CinemaHub 🎬

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-v3-319795?style=flat-square&logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**CinemaHub** is a responsive movie discovery web application built with modern React and TypeScript. It interfaces directly with [The Movie Database (TMDB) API](https://www.themoviedb.org/) to deliver a rich, fluid browsing experience complete with infinite scrolling, advanced filtering, dynamic media views, and persistent theme support.

---

## ✨ Key Features

- **Responsive Discovery Grid:** Browse movies seamlessly across device sizes, complete with poster art, release years, and aggregate vote scores.
- **Global Search:** Search for movies by title instantly via navigation bar controls.
- **Advanced Sorting & Filtering:** Filter collections by genre and sort by popularity, average rating, release date, vote count, revenue, or title.
- **Infinite Scrolling:** Enjoy fluid, uninterrupted pagination powered by automatic background loading as you scroll.
- **Immersive Detail Pages:** View comprehensive metadata including runtimes, overview summaries, genres, production companies, integrated YouTube trailers, and high-res image galleries.
- **Theme Customization:** Switch effortlessly between light and dark modes with persistent state management.
- **Resilient UI/UX:** Built-in loading skeletons, fallback states for missing posters, and local initial genre data for lightning-fast initial paints.

---

## 🛠️ Tech Stack & Architecture

### Application Libraries

| Library                                                        | Purpose                                                                               |
| :------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **React 19** (`react`, `react-dom`)                            | Component-driven UI rendering architecture.                                           |
| **Chakra UI** (`@chakra-ui/react`, `@emotion/react`)           | Accessible component primitives and responsive styling layouts.                       |
| **TanStack Query** (`@tanstack/react-query`)                   | Robust asynchronous state management, caching, and background synchronization.        |
| **Zustand** (`zustand`)                                        | Lightweight global state management for search text, genres, and sort configurations. |
| **Axios** (`axios`)                                            | Type-safe HTTP client configuration for TMDB interactions.                            |
| **React Router** (`react-router-dom`)                          | Client-side routing handling home and dynamic movie detail views.                     |
| `react-infinite-scroll-component`                              | Scroll-triggered pagination handler.                                                  |
| `next-themes`                                                  | Seamless light/dark theme persistence.                                                |
| **React Icons** (`react-icons`)                                | Scalable vector iconography.                                                          |
| `ms`                                                           | Human-readable cache duration formatting for TanStack Query.                          |
| **TanStack Query Devtools** (`@tanstack/react-query-devtools`) | Real-time query state inspection during development.                                  |

### Development Tools

- **TypeScript:** Static type checking and strict API data contracts.
- **Vite:** Blazing fast development server and production bundler (`@vitejs/plugin-react`).
- **ESLint:** Codebase linting enforcing clean React and TypeScript best practices.

---

## 🏗️ Technical Architecture Highlights

- **Application Startup:** `src/main.tsx` mounts the React app and composes the Chakra/color-mode provider, TanStack Query client, and router.
- **Navigation & Routing:** `src/routes.tsx` defines the home page and `/movies/:id` detail route. `src/pages/Layout.tsx` provides the shared navigation bar and shell.
- **TMDB Data Flow:** `src/services/api-client.ts` centralizes Axios requests to TMDB. Custom hooks in `src/hooks/` encapsulate data fetching logic for lists, genres, details, images, and videos.
- **Server State & Infinite Results:** TanStack Query caches requests. The movie list query key includes active filters, and `useInfiniteQuery` loads subsequent API pages for the scrolling grid.
- **Filter State:** `src/store.ts` uses Zustand to share search text, selected genre, and sort order between navigation/search controls and movie results.
- **Responsive Interface:** Chakra UI components and responsive layout props arrange filters, controls, cards, and detail content cleanly across all screen sizes.
- **Theme Support:** `next-themes` applies and persists the selected light or dark theme.
- **Typed Data:** Strict interfaces in `src/entities/` describe movie, genre, image, company, and video payloads returned by TMDB.

---

## 📂 Project Structure

```text
src/
├── components/        # Navigation, search, filters, movie cards, and UI components
│   ├── Movie/         # Movie grid, cards, details, trailer, and gallery components
│   └── ui/            # Chakra and color-mode providers
├── data/              # Local genre data fallback
├── entities/          # TypeScript interfaces for movies, genres, images, and videos
├── hooks/             # Custom TanStack Query hooks for TMDB endpoints
├── pages/             # Home, movie detail, layout, and error pages
├── services/          # TMDB API client and image URL helper utilities
├── main.tsx           # React entry point and application providers
├── routes.tsx         # Application route declarations
└── store.ts           # Zustand global query and filter state store
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v20.19+ or v22.12+)
- **npm**
- A valid **TMDB API Read Access Token**

### Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/RoaaK95/CinemaHub.git
   cd CinemaHub
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure your TMDB API Token:**
   Provide your TMDB API Read Access Token inside the `Authorization` header configuration in [`src/services/api-client.ts`](./src/services/api-client.ts).

   > ⚠️ **Security Note:** Because this app communicates with TMDB directly from the browser, any token placed in frontend code is visible to end users. Do not commit personal tokens to public repositories. For production deployments, proxy requests through a secure backend or serverless function.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

### Available Scripts

| Command           | Description                                              |
| :---------------- | :------------------------------------------------------- |
| `npm run dev`     | Launch the local Vite development server.                |
| `npm run build`   | Perform TypeScript compilation and build for production. |
| `npm run preview` | Locally preview the production build output.             |
| `npm run lint`    | Execute ESLint checks across the codebase.               |

---

## 📝 TMDB Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB. Movie data, metadata, and imagery are provided courtesy of [The Movie Database](https://www.themoviedb.org/).

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.
