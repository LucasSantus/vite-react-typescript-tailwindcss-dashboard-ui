import classNames from "classnames";
import { FC } from "react";
interface IItemProps {
  title: string;
  value: number;
  color: string;
}

export const ItemStatistics: FC<IItemProps> = ({ title, value, color }) => {
  return (
    <div className="flex items-center gap-1">
      <div className={classNames("h-4 w-4 rounded-full", color)}></div>
      <span>
        {title} {value}
      </span>
    </div>
  );
};
