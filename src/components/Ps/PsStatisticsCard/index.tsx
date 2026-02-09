import { cn } from "@/utils/cn";

export const statusVariants = {
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  blue: "bg-blue-500",
};

type PsStatisticsCard = {
  title: string;
  count: number;
  width?: "full" | "fixed";
  variant?: keyof typeof statusVariants;
};

const PsStatisticsCard = ({
  title,
  count,
  width = "full",
  variant = "green",
}: PsStatisticsCard) => {
  return (
    <div
      className={cn(
        "rounded-xl px-4 py-3",
        statusVariants[variant],
        width == "full" ? "w-auto" : "max-w-[300px]",
      )}
    >
      <p className="text-[50px] font-bold text-white">{count}</p>
      <p className="text-lg text-white font-semibold">{title}</p>
    </div>
  );
};

export default PsStatisticsCard;
