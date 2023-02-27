import { FC } from "react";
import { Card } from "../Card";
import { CircleProgress } from "../CircleProgress";
import { ItemStatistics } from "./components/Item";

interface IStatisticsProps {
  title: string;
  expected: number;
  reached: number;
  colorCircleProgress: string;
}

export const Statistics: FC<IStatisticsProps> = ({
  title,
  expected,
  reached,
  colorCircleProgress,
}) => {
  return (
    <Card>
      <div className="py-7 px-12">
        <div className="flex flex-col items-center justify-between gap-4">
          <span className="font-inter font-semibold text-2xl text-white">
            {title}
          </span>
          <div className="relative">
            <CircleProgress size={8} color="green" percentage={reached} />

            <div className="absolute inset-0 h-full w-full rounded-full items-center justify-center flex flex-col text-white">
              <span className="font-inter text-3xl font-bold">{reached}%</span>
              <span className="font-inter text-base font-light">alcançada</span>
            </div>
          </div>
          <div className="grid">
            <ItemStatistics
              title="Esperado"
              value={expected}
              color={colorCircleProgress}
            />
            <ItemStatistics
              title="Alcançado"
              value={reached}
              color={colorCircleProgress}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
