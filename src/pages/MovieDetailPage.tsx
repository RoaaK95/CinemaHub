import ExpandableText from "@/components/ExpandableText";
import MovieAttributes from "@/components/Movie/MovieAttributes";
import MovieTrailer from "@/components/Movie/MovieTrailer";
import useMovie from "@/hooks/useMovie";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const movieId = Number(id);

  const { data: movie, isLoading, error } = useMovie(movieId);

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;
  return (
    <>
      <Heading>{movie?.title}</Heading>
      <ExpandableText>{movie.overview}</ExpandableText>
      <MovieAttributes movie={movie} />
      <MovieTrailer movieId={movie.id} />
    </>
  );
};

export default MovieDetailPage;
