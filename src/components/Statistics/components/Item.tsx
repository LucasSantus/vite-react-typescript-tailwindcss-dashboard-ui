import classNames from "classnames";
import { FC, useMemo } from "react";
import { formatterNumbers } from "../../../utils/formatterNumbers";

interface IItemProps {
  title: string;
  value: number;
  color: string;
  type: "money" | "integer";
}

export const ItemStatistics: FC<IItemProps> = ({
  title,
  value,
  color,
  type,
}) => {
  const valueFormatted = useMemo(() => {
    if (type === "integer") return value;

    return formatterNumbers(value, 1);
  }, [value, type]);

  return (
    <div className="flex gap-1 text-white font-inter text-sm font-medium">
      <div className={classNames("h-4 w-4 rounded-full", color)}></div>
      <div>
        {title} {valueFormatted}
      </div>
    </div>
  );
};
