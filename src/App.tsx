import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import MovieGrid from "./components/Movie/MovieGrid";

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
      <GridItem area="nav">Navbar</GridItem>
      <Show when={isLarge}>
        <GridItem area="aside" paddingX={5}>
          Genre list
        </GridItem>
      </Show>
      <GridItem area="main">
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
