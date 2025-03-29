import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import gamesJson from "./data/games.json";
import { Game } from "./components/Game";
import GameGrid from "./components/GameGrid";

function App() {
  const games: Game[] = gamesJson;
  console.log(games);
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem
        area="nav"
        bg="black"
      >
        <NavBar></NavBar>
      </GridItem>
      {/* Render on large screens or above */}
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid games={games}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
