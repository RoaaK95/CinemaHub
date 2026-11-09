import type { Movie } from "@/entities/Movie";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Movie>("/movie");
const useMovie = (id: number) =>
  useQuery({
    queryKey: ["movies", id],
    queryFn: () => apiClient.get(id),
    enabled: Number.isInteger(id) && id > 0,
  });

export default useMovie;
