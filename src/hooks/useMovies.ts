import type { MovieQuery } from "@/App";
import APIClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Movie {
  adult: boolean;
  poster_path: string | null;
  id: number;
  release_date: string;
  title: string;
  vote_average: number;
}
export interface MovieResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
  genres?: T[];
}
const apiClient = new APIClient<MovieResponse<Movie>>("/discover/movie");

const useMovies = (movieQuery: MovieQuery) => {
  return useInfiniteQuery<MovieResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genreId,
          sort_by: movieQuery.sortOrder || undefined,
          with_text_query: movieQuery.searchText || undefined,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });
};
export default useMovies;
