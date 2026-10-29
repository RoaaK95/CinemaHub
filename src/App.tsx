import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/Movie/MovieGrid";
import MovieHeading from "./components/Movie/MovieHeading";
import Navbar from "./components/Navbar";
import SortSelector from "./components/SortSelector";

export interface MovieQuery {
  genreId: number | undefined;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [movieQuery, SetMovieQuery] = useState<MovieQuery>({
    genreId: undefined,
    sortOrder: "",
    searchText: "",
  });

  const isLarge = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) =>
            SetMovieQuery({ ...movieQuery, searchText })
          }
        />
      </GridItem>

      <Show when={isLarge}>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={movieQuery.genreId}
            onSelectGenre={(genre) =>
              SetMovieQuery({ ...movieQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <MovieHeading movieQuery={movieQuery} />
          <Flex marginBottom={5}>
            <SortSelector
              sortOrder={movieQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                SetMovieQuery({ ...movieQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
