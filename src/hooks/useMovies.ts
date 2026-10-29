import type { MovieQuery } from "@/App";
import APIClient, { type FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Movie {
  adult: boolean;
  poster_path: string | null;
  id: number;
  release_date: string;
  title: string;
  vote_average: number;
}

const apiClient = new APIClient<Movie>("/discover/movie");

const useMovies = (movieQuery: MovieQuery) => {
  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genre?.id,
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
