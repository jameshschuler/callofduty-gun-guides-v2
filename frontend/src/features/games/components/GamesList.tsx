import { SimpleGrid } from '@chakra-ui/react';
import { GameCard } from '..';
import { useGames } from '../api/getGames';
import { Game } from '../types';

export function GamesList() {
  const { data } = useGames();

  return (
    <SimpleGrid mt="10" py="4" spacing={10} minChildWidth={300}>
      {data?.data &&
        data?.data?.games?.map((game: Game) => {
          return <GameCard key={game.gameId} game={game} />;
        })}
    </SimpleGrid>
  );
}
