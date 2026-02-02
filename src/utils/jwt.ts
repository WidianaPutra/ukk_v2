import jwt from "jsonwebtoken";
import { env } from "@/config/env";

export const generateToken = (payload: { userId: string }) => {
  return jwt.sign(payload, env?.JWT_SECRET!, { expiresIn: "1d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env?.JWT_SECRET!);
};
