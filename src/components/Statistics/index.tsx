import { FC, useMemo } from "react";
import { Card } from "../Card";
import { CircleProgress } from "../CircleProgress";
import { ItemStatistics } from "./components/Item";

interface IStatisticsProps {
  title: string;
  expected: number;
  reached: number;
  backgroundColor: string;
  strokeColor: string;
}

export const Statistics: FC<IStatisticsProps> = ({
  title,
  expected,
  reached,
  backgroundColor,
  strokeColor,
}) => {
  const percentage = useMemo(() => {
    const value = (reached / expected) * 100;

    if (value > 100) return 100;

    return Math.ceil(value);
  }, [reached, expected]);

  return (
    <Card>
      <div className="py-7 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4">
          <span className="font-inter font-semibold text-2xl text-white">
            {title}
          </span>
          <div className="relative">
            <CircleProgress
              size={8}
              color={strokeColor}
              percentage={percentage}
            />

            <div className="absolute inset-0 h-full w-full rounded-full items-center justify-center flex flex-col text-white">
              <span className="font-inter text-sm md:text-3xl font-bold">
                {percentage}%
              </span>
              <span className="font-inter text-base font-light">alcançada</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ItemStatistics
              title="Esperado"
              value={expected}
              color={"bg-custom-purple-700"}
            />
            <ItemStatistics
              title="Alcançado"
              value={reached}
              color={backgroundColor}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
