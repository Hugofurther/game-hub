import { Card, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Heading padding={3} fontSize="2xl">
        {game.name}
      </Heading>
    </Card>
  );
};

export default GameCard;
