import { PrismaClient } from "@prisma/client";
import { seed as categorySeed } from "./categorySeed";
import { seed as gamesSeed } from "./gameSeed";
import { seed as guidesSeed } from "./guidesSeed";

const prismaClient = new PrismaClient();

export async function main() {
  let exitStatus = 0;

  try {
    await gamesSeed(prismaClient);
    await categorySeed(prismaClient);
    await guidesSeed(prismaClient);
  } catch (error) {
    console.error(error);
    exitStatus = 1;
  } finally {
    await prismaClient.$disconnect();
    process.exit(exitStatus);
  }
}

main();
