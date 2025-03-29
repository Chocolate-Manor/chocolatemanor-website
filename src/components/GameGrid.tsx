import { SimpleGrid } from "@chakra-ui/react";
import { Game } from "./Game";
import GameCard from "./GameCard";

interface Props {
  games: Game[];
}

const GameGrid = ({ games }: Props) => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 6 }}
        spacing={10}
      >
        {games.map((game: Game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
