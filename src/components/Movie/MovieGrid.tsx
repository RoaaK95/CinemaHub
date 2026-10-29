import type { MovieQuery } from "@/App";
import useMovies from "@/hooks/useMovies";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useMovies(movieQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedMoviesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedMoviesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
        endMessage={<Text textAlign="center">No more movies to show.</Text>}
      >
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

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results?.map((movie) => (
                <MovieCardContainer
                  key={movie.id}
                  childern={<MovieCard movie={movie} />}
                />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default MovieGrid;
