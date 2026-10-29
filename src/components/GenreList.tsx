import type { Genre } from "@/entities/Genre";
import { Button, Heading, List, Spinner, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId: number | undefined;
}

function GenreList({ selectedGenreId, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
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
