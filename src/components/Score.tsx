import { FC } from "react";
import { Card } from "./Card";
import { IconAddition } from "./icons/IconAddition";

export const Score: FC = () => {
  return (
    <Card>
      <div className="">
        <span className="font-inter font-semibold text-2xl text-white">
          NPS Geral
        </span>
        <span className="font-inter font-semibold text-2xl text-custom-green-500 flex flex-col justify-center items-center gap-2">
          <IconAddition className="text-black" />
          Excelente!
        </span>
        <span className="font-inter font-normal text-sm text-white">
          NPS Score 75
        </span>
      </div>
    </Card>
  );
};
