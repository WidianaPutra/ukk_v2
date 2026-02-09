import { cn } from "@/utils/cn";
import React, { useId } from "react";

interface PsInputPropTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
  parentClassName?: string;
  value?: string;
  error?: string;
  event?: () => void;
}

const PsInput = React.forwardRef<HTMLInputElement, PsInputPropTypes>(
  (
    {
      label,
      fullWidth = false,
      parentClassName,
      className,
      value = undefined,
      event,
      ...props
    },
    ref,
  ) => {
    const id = useId();
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
        <input
          id={id}
          ref={ref}
          {...props}
          value={value}
          onChange={event}
          className={cn(
            "rounded-[10px] border-2 px-4 py-2 text-lg shadow-sm outline-none transition-colors focus:ring-0",
            "disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500",
            fullWidth ? "w-full" : "max-w-[300px]",
            className,
          )}
        />
        {props.error && (
          <span className="text-xs font-medium text-red-500">
            *{props.error}
          </span>
        )}
      </div>
    );
  },
);

PsInput.displayName = "PsInput";

export default PsInput;
