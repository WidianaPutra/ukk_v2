import { ServiceResultType } from "@/types/ServiceResult";

export const handleError = (
  err: unknown,
  context: string,
): { ok: false; error: string } => {
  console.error(`[${context}]`, err);
  return { ok: false, error: "Internal server error" };
};
