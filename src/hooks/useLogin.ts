"use client";
import { useState } from "react";
import z from "zod";

type ErrorFormType =
  | [{ key: "username"; message: string }, { key: "password"; message: string }]
  | null;

export const useLogin = () => {
  const [error, setError] = useState<ErrorFormType>([
    { key: "username", message: "" },
    { key: "password", message: "" },
  ]);

  const handleLogin = ({
    username = "",
    password = "",
  }: {
    username: string;
    password: string;
  }) => {
    const inputSchema = z.object({
      username: z.string().min(5, "Minimal 5 karakter"),
      password: z.string().min(4, "Minimal 4 karakter"),
    });
    const result = inputSchema.safeParse({
      username: username ?? "",
      password: password ?? "",
    });

    if (!result.success) {
      const errors = result.error.format();
      setError([
        {
          key: "username",
          message: errors.username?._errors?.[0] ?? "",
        },
        {
          key: "password",
          message: errors.password?._errors?.[0] ?? "",
        },
      ]);
      return;
    }
    setError(null);
    console.log("Login success", result.data);
  };

  return { error, handleLogin };
};
