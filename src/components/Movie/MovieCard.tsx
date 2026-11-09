import type Movie from "@/entities/Movie";
import { getImageUrl } from "@/services/image-url";
import { Badge, Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CriticScore from "./CriticScore";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card.Root
      overflow="hidden"
      borderRadius="lg"
      bg="gray.900"
      cursor="pointer"
    >
      <Box position="relative">
        <Image
          src={getImageUrl(movie.poster_path)}
          width="100%"
          aspectRatio={2 / 3}
          objectFit="cover"
        />

        <CriticScore
          score={movie.vote_average}
          position="absolute"
          top={2}
          right={2}
        />
      </Box>

      <Card.Body gap={2}>
        <Heading fontSize="lg" lineHeight="short" lineClamp={2} color="white">
          <Link to={`/movies/` + movie.id}> {movie.title}</Link>
        </Heading>

        <Text color="gray.400" fontSize="sm">
          {movie.release_date?.slice(0, 4)}
        </Text>
        {movie.adult && (
          <Badge width={8} colorPalette="red">
            18+
          </Badge>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default MovieCard;
