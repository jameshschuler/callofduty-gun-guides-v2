import { Game } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export async function getGames(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const games = await prisma.game.findMany();
    res.status(200).json({
      data: {
        games: games.map(({ franchise, publishYear, id, name, slug }: Game) => {
          return {
            gameId: id,
            gameName: name,
            franchise,
            publishYear,
            slug,
          };
        }),
      },
      error: null,
    });
  } catch (err) {
    next(err);
  }
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  try {
    return prisma.game.findFirst({
      where: {
        slug,
      },
    });
  } catch (err) {
    return null;
  }
}
