import { cn } from "@/utils/cn";
import React from "react";
import { statusVariants } from "../PsStatisticsCard";

type PsBadgePropTypes = {
  variant?: keyof typeof statusVariants;
  children?: React.ReactNode;
  classname?: string;
};

const PsBadge = ({
  variant = "red",
  children,
  classname = "",
}: PsBadgePropTypes) => {
  return (
    <div
      className={cn(
        "w-max cursor-pointer rounded-full px-4 py-2 text-sm",
        statusVariants[variant],
        classname,
      )}
    >
      <label className="cursor-pointer text-white">{children}</label>
    </div>
  );
};

export default PsBadge;
