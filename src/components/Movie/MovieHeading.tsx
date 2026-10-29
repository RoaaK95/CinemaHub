import useGenre from "@/hooks/useGenre";
import { Heading } from "@chakra-ui/react";
import type { MovieQuery } from "../../App";

interface Props {
  movieQuery: MovieQuery;
}

const MovieHeading = ({ movieQuery }: Props) => {
  const genre = useGenre(movieQuery.genreId);
  const heading = `${genre?.name || ""} Movies`;
  return (
    <Heading as={"h1"} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
