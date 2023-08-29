import { Guide } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";
import { GuideData } from "../types";

export async function getGuideDetails(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { category, game, guide } = req.app.locals;

    const { title, id, slug, data } = guide;
    const { primary, secondary, perks, equipment, wildcard } =
      data as GuideData;
    res.status(200).json({
      data: {
        gameName: game.name,
        categoryName: category.name,
        guide: {
          title,
          slug,
          guideId: id,
          guideWeaponName: primary?.name,
          primary,
          secondary,
          perks,
          equipment,
          wildcard,
        },
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function getGuides(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { category, game } = req.app.locals;

    const guides = await prisma.guide.findMany({
      where: {
        game_id: game.id,
        guide_category_id: category.id,
      },
      select: {
        slug: true,
        title: true,
        id: true,
        data: true,
      },
      orderBy: {
        title: "asc",
      },
    });

    // TODO: type response
    res.status(200).json({
      data: {
        gameName: game.name,
        categoryName: category.name,
        guideCount: guides.length,
        guides: guides.map(({ data, id, slug, title }) => {
          return {
            slug,
            title,
            guideId: id,
            guideWeaponName: (data as GuideData).primary?.name,
          };
        }),
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  try {
    return prisma.guide.findFirst({
      where: {
        slug,
      },
    });
  } catch (err) {
    return null;
  }
}
