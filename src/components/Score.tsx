import { Card } from "./Card";
import { IconHappyPerson } from "./Icons/IconHappyPerson";

export const Score: React.FC = () => (
  <Card>
    <div className="flex flex-col h-72 justify-between items-center p-7">
      <span className="font-inter font-semibold text-2xl text-white">
        NPS Geral
      </span>
      <span className="font-inter font-semibold text-2xl text-custom-green-500 flex-col justify-center items-center gap-2">
        <IconHappyPerson />
        Excelente!
      </span>
      <span className="font-inter font-normal text-sm text-white">
        NPS Score 75
      </span>
    </div>
  </Card>
);
