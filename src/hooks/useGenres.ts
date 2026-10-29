import genre from "@/data/genre";
import type { Genre } from "@/entities/Genre";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface GenreResponse {
  genres: Genre[];
}
const apiClient = new APIClient<GenreResponse>("/genre/movie/list");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms("24h"),
    initialData: genre,
  });

export default useGenres;
