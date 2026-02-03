import { ServiceResultType } from "@/types/ServiceResult";

export const handleError = (
  err: unknown,
  context: string,
): ServiceResultType<never> => {
  console.error(`[${context}]`, err);
  return { ok: false, error: "Internal server error" };
};
