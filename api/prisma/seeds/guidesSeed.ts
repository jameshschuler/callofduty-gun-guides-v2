import { PrismaClient } from "@prisma/client";
import fs from "fs";
import { dirname } from "path";
import path, { fileURLToPath } from "url";
import { BlopsColdWarId } from "../../src/constants";
import { GuideData } from "../../src/types";

interface GuideJson {
  guides: GuideData[];
}

export async function seed(prismaClient: PrismaClient) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dirPath = path.resolve(__dirname, "data/blops-cw-guides");

  const guides = new Array<GuideData>();
  const files = fs.readdirSync(dirPath);
  files.forEach((fileName: string) => {
    const rawData = fs.readFileSync(`${dirPath}/${fileName}`);
    const data = JSON.parse(rawData.toString()) as GuideJson;
    if (data.guides.length) {
      guides.push(...data.guides);
    }
  });

  const categories = await prismaClient.guideCategory.findMany();

  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Guide" CASCADE;`);
  const response = await prismaClient.guide.createMany({
    data: guides.map((guide: any) => {
      const categoryId = guide.primary.categoryId ?? guide.secondary.categoryId;
      const category = categories.find((c) => c.id === categoryId);
      return {
        game_id: BlopsColdWarId,
        guide_category_id: category?.id ?? -1,
        data: guide,
        slug: slugify(guide.title),
        title: guide.title,
        description: guide.description ?? "",
        source: guide.source ?? "",
        sourceUrl: guide.sourceUrl ?? "",
        tags: guide.tags ?? [],
      };
    }),
  });
  console.log(`Seeded ${response.count} guide(s)!`);
}

function slugify(value: string) {
  value = value.replace(/^\s+|\s+$/g, ""); // trim
  value = value.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    value = value.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  value = value
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return value;
}
