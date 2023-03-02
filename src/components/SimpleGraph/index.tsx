import { useMemo } from "react";
import { DAYS } from "./constants";

const calculateValue = (value: number) => {
  let total = value * 10;

  if (total < 0) return 1;
  else if (total > 140) return 140;

  return total;
};

export const SimpleGraph: React.FC = () => {
  const valueMemoized = useMemo(() => {
    return DAYS.reduce((acc, item) => {
      acc[item.day] = calculateValue(item.value);
      return acc;
    }, {} as { [key: string]: number });
  }, []);

  return (
    <div className="relative h-full flex items-center pt-48 sm:pt-0">
      <div className="w-full bg-[#4A4556] h-[3px]" />

      <div className="absolute flex items-end justify-between w-full overflow-auto p-1 inset-0">
        {DAYS.map((item) => {
          const value = valueMemoized[item.day];

          return (
            <div
              key={item.day}
              className="flex flex-col justify-center items-center"
            >
              <div
                className={"bg-custom-cyan-600 w-[15px] rounded-full"}
                style={{ height: `${value}px` }}
              />
              <span className="font-inter font-medium text-sm text-white">
                {item.day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
