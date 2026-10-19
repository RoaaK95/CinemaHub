import type { MovieQuery } from "../../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  movieQuery: MovieQuery;
}

const MovieHeading = ({ movieQuery }: Props) => {
  const heading = `${movieQuery.genre?.name || ""} Movies`;
  return (
    <Heading as={"h1"} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;
