"use client";
import z from "zod";
import PsButton from "@/components/Ps/PsButton";
import PsInput from "@/components/Ps/PsInput";
import { useRef } from "react";
import { useLogin } from "@/hooks/useLogin";

export default function PsStudentLogin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { error, handleLogin } = useLogin();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-800">
      <div className="grid w-[450px] gap-[10px] rounded-xl bg-gray-100 px-5 py-7">
        <h1 className="mb-5 text-center text-2xl font-bold">Login</h1>
        <PsInput
          fullWidth={true}
          placeholder="username"
          ref={usernameRef}
          error={error?.[0].message}
        />
        <PsInput
          fullWidth={true}
          placeholder="password"
          ref={passwordRef}
          error={error?.[1].message}
          type="password"
        />
        <div className="mt-3 w-full">
          <PsButton
            fullWidth={true}
            onClick={() =>
              handleLogin({
                username: usernameRef?.current?.value ?? "",
                password: passwordRef?.current?.value ?? "",
              })
            }
            variant="secondary"
          >
            Login
          </PsButton>
        </div>
      </div>
    </div>
  );
}
