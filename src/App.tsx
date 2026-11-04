import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/Movie/MovieGrid";
import MovieHeading from "./components/Movie/MovieHeading";
import Navbar from "./components/Navbar";
import SortSelector from "./components/SortSelector";

function App() {
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
        <Navbar />
      </GridItem>

      <Show when={isLarge}>
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <MovieHeading />
          <Flex marginBottom={5}>
            <SortSelector />
          </Flex>
        </Box>
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
