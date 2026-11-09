import ExpandableText from "@/components/ExpandableText";
import MovieAttributes from "@/components/Movie/MovieAttributes";
import MovieGallery from "@/components/Movie/MovieGallery";
import MovieTrailer from "@/components/Movie/MovieTrailer";
import useMovie from "@/hooks/useMovie";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const movieId = Number(id);

  const { data: movie, isLoading, error } = useMovie(movieId);

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <GridItem>
        <Heading>{movie?.title}</Heading>
        <ExpandableText>{movie.overview}</ExpandableText>
        <MovieAttributes movie={movie} />
      </GridItem>
      <GridItem>
        <MovieTrailer movieId={movie.id} />
        <MovieGallery movieId={movie.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default MovieDetailPage;
