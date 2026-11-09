import type Video from "@/entities/Video";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface VideoResponse {
  id: number;
  results: Video[];
}
const useVideos = (movieId: number) => {
  const apiClient = new APIClient<VideoResponse>(`/movie/${movieId}/videos`);
  return useQuery({
    queryKey: ["movies", movieId, "videos"],
    queryFn: apiClient.getAll,
  });
};
export default useVideos;
