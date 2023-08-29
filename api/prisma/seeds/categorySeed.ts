import { PrismaClient } from "@prisma/client";

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(
    `TRUNCATE TABLE "GuideCategory" CASCADE;`
  );
  await prismaClient.guideCategory.createMany({
    data: [
      { id: 1, name: "Assault Rifles", slug: "assault-rifles" },
      { id: 2, name: "Pistols", slug: "pistols" },
      { id: 3, name: "Light Machine Guns", slug: "light-machine-guns" },
      { id: 4, name: "Shotguns", slug: "shotguns" },
      { id: 5, name: "Submachine Guns", slug: "submachine-guns" },
      { id: 6, name: "Sniper Rifles", slug: "sniper-rifles" },
      { id: 7, name: "Tactical Rifles", slug: "tactical-rifles" },
    ],
  });
}
