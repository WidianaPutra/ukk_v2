export type CleanPrismaData<T> = Omit<T, "createdAt" | "updatedAt" | "id">;
