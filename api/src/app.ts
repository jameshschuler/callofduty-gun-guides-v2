import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import {
  getCategoriesByGame,
  getGames,
  getGuideDetails,
  getGuides,
} from "./handlers";
import {
  LookupType,
  errorLogger,
  errorResponder,
  invalidPathHandler,
  validateQueryParams,
} from "./middleware";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "Hello!" });
  } catch (err) {
    console.error(err);
  }
});

router.get("/games", getGames);
router.get(
  "/games/:gameSlug/categories",
  validateQueryParams([
    {
      paramName: "gameSlug",
      lookupType: LookupType.Game,
    },
  ]),
  getCategoriesByGame
);
router.get(
  "/games/:gameSlug/categories/:categorySlug/guides",
  validateQueryParams([
    { paramName: "gameSlug", lookupType: LookupType.Game },
    { paramName: "categorySlug", lookupType: LookupType.Category },
  ]),
  getGuides
);
router.get(
  "/games/:gameSlug/categories/:categorySlug/guides/:guideSlug",
  validateQueryParams([
    { paramName: "gameSlug", lookupType: LookupType.Game },
    { paramName: "categorySlug", lookupType: LookupType.Category },
    { paramName: "guideSlug", lookupType: LookupType.Guide },
  ]),
  getGuideDetails
);

app.use("/api", router);
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
