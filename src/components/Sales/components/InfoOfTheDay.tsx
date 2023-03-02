import { IInfoOfTheDayProps } from "../types";

export const InfoOfTheDay: React.FC<IInfoOfTheDayProps> = ({
  icon,
  description,
  weekday,
}) => (
  <>
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-white font-inter text-sm font-medium">
        {description}
      </span>
    </div>

    <span className="text-white font-inter text-2xl font-medium">
      {weekday}
    </span>
  </>
);
