import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  NODE_ENV: z
    .enum(["development", "testing", "production"])
    .default("development"),
});

export const env = envSchema.safeParse(process.env)?.data;
