import type { MovieQuery } from "@/App";
import APIClient, { type FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Movie {
  adult: boolean;
  poster_path: string;
  id: number;
  release_date: string;
  title: string;
  vote_average: number;
}

const apiClient = new APIClient<Movie>("/discover/movie");
const useMovies = (movieQuery: MovieQuery) =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.genre?.id,
          sort_by: movieQuery.sortOrder || undefined,
          with_text_query: movieQuery.searchText || undefined,
          page: movieQuery.page,
        },
      }),
  });
export default useMovies;
