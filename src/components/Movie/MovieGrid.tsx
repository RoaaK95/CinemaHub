import useMovies from "@/hooks/useMovies";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import type { MovieQuery } from "@/App";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";
import Pagination from "./Pagination";

interface Props {
  movieQuery: MovieQuery;
  onPageChange: (page: number) => void;
}

const MovieGrid = ({ movieQuery, onPageChange }: Props) => {
  const { data, error, isLoading, totalPages } = useMovies(movieQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4, xl: 5 }}
        gap={6}
        padding={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer
              key={skeleton}
              childern={<MovieCardSkeleton />}
            />
          ))}

        {data?.map((movie) => (
          <MovieCardContainer
            key={movie.id}
            childern={<MovieCard movie={movie} />}
          />
        ))}
      </SimpleGrid>

      <Pagination
        currentPage={movieQuery.page}
        totalPages={totalPages}
        isLoading={isLoading}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default MovieGrid;
