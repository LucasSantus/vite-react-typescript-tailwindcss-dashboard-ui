import { ReactNode } from "react";

interface IInfoOfTheDayProps {
  icon: ReactNode;
  dailySale: string;
  weekday: string;
}

export const InfoOfTheDay: React.FC<IInfoOfTheDayProps> = ({
  icon,
  dailySale,
  weekday,
}) => {
  return (
    <>
      <div className="flex items-center gap-1">
        {icon}
        <span className="text-white font-inter text-sm font-medium">
          {dailySale}
        </span>
      </div>

      <span className="text-white font-inter text-2xl font-medium">
        {weekday}
      </span>
    </>
  );
};
