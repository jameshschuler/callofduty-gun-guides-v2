import { NextFunction, Request, Response } from "express";
import { getCategoryBySlug, getGameBySlug, getGuideBySlug } from "../handlers";

interface AppError extends Error {
  statusCode: number;
}

export interface RequestParamsValidationRule {
  paramName: string;
  required?: boolean;
  type?: string | number | boolean;
  lookupType: LookupType;
}

export enum LookupType {
  Game,
  Category,
  Guide,
}

export function validateQueryParams(
  validationRules: RequestParamsValidationRule[]
) {
  return async function (req: Request, res: Response, next: NextFunction) {
    for (let rule of validationRules) {
      if (!(rule.paramName in req.params)) {
        return next({
          statusCode: 400,
          message: `"${rule.paramName}" not found in request params.`,
        });
      }

      switch (rule.lookupType) {
        case LookupType.Game:
          const game = await getGameBySlug(req.params.gameSlug);
          if (!game) {
            return next({
              statusCode: 404,
              message: "Game not found",
            });
          }

          req.app.locals.game = game;
          break;
        case LookupType.Category:
          const category = await getCategoryBySlug(req.params.categorySlug);
          if (!category) {
            return next({
              statusCode: 404,
              message: "Category not found",
            });
          }

          req.app.locals.category = category;
          break;
        case LookupType.Guide:
          const guide = await getGuideBySlug(req.params.guideSlug);
          if (!guide) {
            return next({
              statusCode: 404,
              message: "Guide not found",
            });
          }

          req.app.locals.guide = guide;
          break;
        default:
          return next();
      }
    }

    next();
  };
}

export function errorLogger(
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  next(error);
}

export function errorResponder(
  error: AppError,
  req: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.statusCode || 400;
  response.status(status).json({
    errorMessage:
      error.message ?? "Something went wrong while processing your request.",
  });
}

export function invalidPathHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404).json({ errorMessage: "invalid path" });
}
