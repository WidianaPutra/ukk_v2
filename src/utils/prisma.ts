import { env } from "@/config/env";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: env?.NODE_ENV ? ["query", "error", "warn"] : ["error"],
  });

if (env?.NODE_ENV === "production") globalForPrisma.prisma = prisma;
