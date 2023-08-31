import { GuideCategory } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export async function getCategoriesByGame(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { game } = req.app.locals;

    const categories = await prisma.guideCategory.findMany({
      include: {
        _count: {
          select: {
            guides: {
              where: {
                game_id: game?.id,
              },
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });
    res.status(200).json({
      data: {
        gameName: game.name,
        categories: categories.map(({ id, name, slug, _count }) => {
          return {
            categoryId: id,
            categoryName: name,
            guideCount: _count.guides,
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

export async function getCategoryBySlug(
  slug: string
): Promise<GuideCategory | null> {
  try {
    return prisma.guideCategory.findFirst({
      where: {
        slug,
      },
    });
  } catch (err) {
    return null;
  }
}
