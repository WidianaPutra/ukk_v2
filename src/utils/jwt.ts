import jwt from "jsonwebtoken";
import { env } from "@/config/env";

export const generateToken = (payload: {
  id: string;
  role: "student" | "admin";
}) => {
  return jwt.sign(payload, env?.JWT_SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env?.JWT_SECRET);
};
