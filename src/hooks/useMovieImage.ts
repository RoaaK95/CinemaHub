import type MovieImage from "@/entities/MovieImage";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
interface MovieImagesResponse {
  id: number;
  backdrops: MovieImage[];
  posters: MovieImage[];
  logos: MovieImage[];
}

const useMovieImages = (movieId: number) => {
  const apiClient = new APIClient<MovieImagesResponse>(
    `/movie/${movieId}/images`,
  );
  return useQuery({
    queryKey: ["movies", movieId, "images"],
    queryFn: apiClient.getAll,
    enabled: Number.isInteger(movieId) && movieId > 0,
  });
};

export default useMovieImages;
