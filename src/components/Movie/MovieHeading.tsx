import useGenre from "@/hooks/useGenre";
import useMovieQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const MovieHeading = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  const genre = useGenre(movieQuery.genreId);
  const heading = `${genre?.name || ""} Movies`;
  return (
    <Heading as={"h1"} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
