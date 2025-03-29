import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
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
        <GridItem
          area="aside"
          bg="gold"
        >
          Aside
        </GridItem>
      </Show>
      <GridItem
        area="main"
        bg="blue"
      >
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
