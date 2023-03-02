import classNames from "classnames";
import { FC, useMemo } from "react";
import { formatterNumbers } from "../../../utils/formatterNumbers";
import { IItemStatisticsProps } from "./types";

export const ItemStatistics: FC<IItemStatisticsProps> = ({
  title,
  value,
  color,
  type,
}) => {
  const valueFormatted = useMemo(() => {
    return type === "integer" ? value : formatterNumbers(value, 1);
  }, [value, type]);

  return (
    <div className={`flex gap-1 text-white font-inter text-sm font-medium`}>
      <div className={classNames(`h-4 w-4 rounded-full`, color)}></div>
      <div>{`${title} ${valueFormatted}`}</div>
    </div>
  );
};
