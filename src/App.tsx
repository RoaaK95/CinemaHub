import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import MovieGrid from "./components/Movie/MovieGrid";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import GenreList from "./components/GenreList";

export interface MovieQuery {
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [movieQuery, SetMovieQuery] = useState({} as MovieQuery);
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
      <GridItem area="nav">Navbar</GridItem>

      <Show when={isLarge}>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={movieQuery.genre}
            onSelectGenre={(genre) => SetMovieQuery({ ...movieQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
