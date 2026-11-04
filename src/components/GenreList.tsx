import useMovieQueryStore from "@/store";
import { Button, Heading, List, Spinner, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const setSelectedGenreId = useMovieQueryStore((s) => s.setGenreId);
  if (error) return null;

  if (isLoading) {
    return (
      <VStack align="center" padding={4}>
        <Spinner size="sm" color="red.500" />
      </VStack>
    );
  }

  return (
    <VStack align="stretch" gap={4}>
      <Heading
        size="md"
        color="fg"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        Explore Genres
      </Heading>

      <List.Root listStyle="none" gap={1}>
        {data?.genres?.map((genre) => {
          const isSelected = genre.id === selectedGenreId;

          return (
            <List.Item key={genre.id}>
              <Button
                variant="ghost"
                width="100%"
                justifyContent="flex-start"
                height="42px"
                paddingX={3}
                borderRadius="md"
                fontSize="sm"
                fontWeight={isSelected ? "semibold" : "medium"}
                color={isSelected ? "red.600" : "fg.muted"}
                background={isSelected ? "bg.muted" : "transparent"}
                transition="all 0.2s ease"
                _hover={{
                  background: "bg.subtle",
                  color: "fg",
                }}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </List.Item>
          );
        })}
      </List.Root>
    </VStack>
  );
}

export default GenreList;
