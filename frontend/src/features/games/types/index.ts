export interface Game {
  gameName: string;
  gameId: number;
  slug: string;
  franchise: string;
  publishYear: string;
}

export interface GamesResponse {
  games: Game[];
}
