import { Button, Card, CardFooter, CardHeader, Heading } from '@chakra-ui/react';
import { Link as NavLink } from 'react-router-dom';
import { Game } from '../types';

export interface GameCardProps {
  game: Game;
}

export function GameCard({ game: { gameName, slug, franchise, publishYear } }: GameCardProps) {
  return (
    <Card maxW="350" h="200px" borderRadius="8">
      <CardHeader>
        <Heading as="h3" size="lg">
          {franchise}
        </Heading>
        <Heading as="h5" size="md" mt="4">
          {gameName} ({publishYear})
        </Heading>
      </CardHeader>
      <CardFooter justify="end">
        <Button as={NavLink} to={`/${slug}`}>
          Select Game
        </Button>
      </CardFooter>
    </Card>
  );
}
