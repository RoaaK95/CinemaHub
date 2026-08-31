import useMovies from "@/hooks/useMovies";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();

  if (error) return <Text>{error}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} gap={6} padding={4}>
      {data?.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
