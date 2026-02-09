import { cn } from "@/utils/cn";
import PsSVG, { PsSVGName } from "../PsSVG";
import Link from "next/link";

type ActionType = "trash" | "view" | "edit";

interface ClickToActionProps {
  deleteUrl: string;
  viewUrl: string;
  updateUrl: string;
}

const ClickToAction = ({
  deleteUrl,
  viewUrl,
  updateUrl,
}: ClickToActionProps) => {
  return (
    <div className="flex gap-2">
      <Link
        href={deleteUrl ?? "/"}
        className={cn(
          "inline-flex bg-red-500 w-10 h-10 justify-center items-center rounded-xl p-2",
        )}
      >
        <PsSVG name={"trash"} className={cn("text-white")} />
      </Link>
      <Link
        href={viewUrl ?? "/"}
        className={cn(
          "inline-flex bg-blue-500 w-10 h-10 justify-center items-center rounded-xl p-2",
        )}
      >
        <PsSVG name={"eye"} className={cn("text-white")} />
      </Link>
      <Link
        href={updateUrl ?? "/"}
        className={cn(
          "inline-flex bg-green-500 w-10 h-10 justify-center items-center rounded-xl p-2",
        )}
      >
        <PsSVG name={"pen"} className={cn("text-white")} />
      </Link>
    </div>
  );
};

export default ClickToAction;
