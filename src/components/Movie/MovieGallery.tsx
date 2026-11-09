import useMovieImages from "@/hooks/useMovieImage";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  movieId: number;
}
const MovieGallery = ({ movieId }: Props) => {
  const { data, isLoading, error } = useMovieImages(movieId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
      {data?.backdrops.slice(0, 6).map((image) => (
        <Box key={image.file_path} overflow="hidden" borderRadius="lg">
          <Image
            src={`https://image.tmdb.org/t/p/w780${image.file_path}`}
            alt="Movie backdrop"
            width="100%"
            aspectRatio={16 / 9}
            objectFit="cover"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MovieGallery;
