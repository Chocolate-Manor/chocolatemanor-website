import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "./Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <a
      href={game.external_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        borderRadius="0"
        overflow="hidden"
      >
        <Image
          src={game.background_image}
          width="100%"
          height="auto"
          aspectRatio="1"
          objectFit="cover"
        />
        <CardBody>
          <Heading fontSize="lg">{game.name}</Heading>
        </CardBody>
      </Card>
    </a>
  );
};

export default GameCard;
