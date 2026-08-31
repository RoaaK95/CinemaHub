import type { Movie } from "@/hooks/useMovies";
import { getImageUrl } from "@/services/image-url";
import { Box, Card, Image, Text, Heading, Badge } from "@chakra-ui/react";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card.Root
      overflow="hidden"
      borderRadius="lg"
      bg="gray.900"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "xl",
      }}
      cursor="pointer"
    >
      <Box position="relative">
        <Image
          src={getImageUrl(movie.poster_path)}
          width="100%"
          aspectRatio={2 / 3}
          objectFit="cover"
        />

        <Badge
          position="absolute"
          top={2}
          right={2}
          colorPalette="yellow"
          fontSize="sm"
          px={2}
          py={1}
          borderRadius="md"
        >
          {movie.vote_average.toFixed(1)}
        </Badge>
      </Box>

      <Card.Body gap={2}>
        <Heading fontSize="lg" lineHeight="short" lineClamp={2}>
          {movie.title}
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
