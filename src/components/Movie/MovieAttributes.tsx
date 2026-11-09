import type Movie from "@/entities/Movie";
import DefinitionItem from "../DefinitionItem";
import CriticScore from "./CriticScore";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  movie: Movie;
}
const MovieAttributes = ({ movie }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Runtime">
        <Text>{movie.runtime} minutes</Text>
      </DefinitionItem>
      <DefinitionItem term="Vote Average">
        <CriticScore score={movie.vote_average} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {movie.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Production Companies">
        {movie.production_companies.map((company) => (
          <Text key={company.id}>{company.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default MovieAttributes;
