import { cn } from "@/utils/cn";
import React from "react";

interface PsTextAreaPropTypes extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  fullWidth?: boolean;
  fullHegiht?: boolean;
  parentClassName?: string;
  error?: string;
}
const PsTextArea = ({
  label,
  fullWidth,
  fullHegiht,
  parentClassName,
  error,
  ...props
}: PsTextAreaPropTypes) => {
  const id = React.useId();
  return (
    <div
      className={cn(
        `flex flex-col gap-1`,
        fullWidth ? "w-full" : "w-fit",
        parentClassName,
      )}
    >
      {label && (
        <label htmlFor={id} className="text-smtext-base text-gray-600">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "resize-none rounded-[10px] border-2 border-black px-2 py-1 text-sm shadow-sm outline-none transition-colors",
          "disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500",
          "focus:ring-0",
          fullHegiht ? "h-[130px]" : "h-auto",
          fullWidth ? "w-full" : "max-w-[300px]",
        )}
        {...props}
      />
      {error && (
        <span className="text-xs font-medium text-red-500">*{error}</span>
      )}
    </div>
  );
};

export default PsTextArea;
