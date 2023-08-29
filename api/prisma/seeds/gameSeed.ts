import { PrismaClient } from "@prisma/client";
import { BlopsColdWarId } from "../../src/constants";

export async function seed(prismaClient: PrismaClient) {
  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Game" CASCADE;`);
  await prismaClient.game.create({
    data: {
      id: BlopsColdWarId,
      name: "Black Ops: Cold War",
      publishYear: "2020",
      franchise: "Call of Duty",
      slug: "black-ops-cold-war",
    },
  });
}
