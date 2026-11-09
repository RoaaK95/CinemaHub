import useVideos from "@/hooks/useVideos";

interface Props {
  movieId: number;
}

const MovieTrailer = ({ movieId }: Props) => {
  const { data, error, isLoading } = useVideos(movieId);

  if (isLoading) return null;
  if (error) throw error;

  const trailer = data?.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );

  return trailer ? (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${trailer.key}`}
      title={trailer.name}
      width="100%"
      style={{ aspectRatio: "16 / 9", border: 0 }}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  ) : null;
};

export default MovieTrailer;
