import { env } from "@/config/env";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: env?.DATABASE_URL,
});

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: env?.NODE_ENV ? ["query", "error", "warn"] : ["error"],
    adapter,
  });

if (env?.NODE_ENV === "production") globalForPrisma.prisma = prisma;
