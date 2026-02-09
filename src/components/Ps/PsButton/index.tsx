import React from "react";
import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-purple-500 text-white",
  secondary: "bg-blue-500 text-white",
};

interface PsButtonPropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classname?: string;
  variant?: keyof typeof variants;
  fullWidth?: boolean;
}

const PsButton = ({
  children,
  classname = "",
  variant = "primary",
  fullWidth = false,
  ...props
}: PsButtonPropTypes) => {
  return (
    <button
      className={cn(
        `rounded-[10px] px-7 py-2 text-[18px] hover:cursor-pointer`,
        variants[variant],
        fullWidth ? "w-full" : "w-fit",
        classname,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PsButton;
