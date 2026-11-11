import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import gamesJson from "./data/games.json";
import { Game } from "./components/Game";
import GameGrid from "./components/GameGrid";
import { Box, Text } from "@chakra-ui/react";
import Banner from "./components/Banner";

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
        <Box
          bg="Black"
          color="white"
          pb={10}
          textAlign="center"
          width="100%"
        >
          <Text fontSize="6xl">Welcome, Dear Stranger</Text>
        </Box>
        <Banner></Banner>
      </GridItem>

      {/* Render on large screens or above, skipped for now */}
      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid games={games}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
