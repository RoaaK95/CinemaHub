import type { MovieQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import type { FetchResponse } from "./useData";

export interface Movie {
  adult: boolean;
  poster_path: string;
  id: number;
  release_date: string;
  title: string;
  vote_average: number;
}

const useMovies = (movieQuery: MovieQuery) =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Movie>>("/discover/movie", {
          params: {
            with_genres: movieQuery.genre?.id,
            sort_by: movieQuery.sortOrder || undefined,
            with_text_query: movieQuery.searchText || undefined,
            page: movieQuery.page,
          },
        })
        .then((res) => res.data),
  });
export default useMovies;
