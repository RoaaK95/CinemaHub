import genre from "@/data/genre";
import type { Genre } from "@/entities/Genre";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface GenreResponse {
  genres: Genre[];
}
const apiClient = new APIClient<GenreResponse>("/genre/movie/list");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll({}),
    initialData: genre,
  });

export default useGenres;
