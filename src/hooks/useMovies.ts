import type { MovieQuery } from "@/App";
import useData from "./useData";
import { useMemo } from "react";

export interface Movie {
  adult: boolean;
  poster_path: string;
  id: number;
  release_date: string;
  title: string;
  vote_average: number;
}

const useMovies = (movieQuery: MovieQuery) => {
  const requestConfig = useMemo(
    () => ({
      params: {
        with_genres: movieQuery.genre?.id,
        sort_by: movieQuery.sortOrder || undefined,
        with_text_query: movieQuery.searchText || undefined,
        page: movieQuery.page,
      },
    }),
    [
      movieQuery.genre?.id,
      movieQuery.sortOrder,
      movieQuery.searchText,
      movieQuery.page,
    ],
  );

  return useData<Movie>("/discover/movie", requestConfig);
};

export default useMovies;
