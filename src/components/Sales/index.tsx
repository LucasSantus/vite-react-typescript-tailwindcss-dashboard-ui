import { Card } from "../Card";
import { IconPolygon } from "../Icons/IconPolygon";
import { SimpleGraph } from "../SimpleGraph";
import { InfoOfTheDay } from "./components/InfoOfTheDay";

export const Sales: React.FC = () => {
  return (
    <Card>
      <div className="px-12 py-7">
        <span className="text-white font-inter text-2xl">
          Vendas por dia da semana
        </span>
        <div className="grid sm:grid-cols-2 grid-cols-1 pt-8">
          <div className="flex flex-col gap-2 sm:justify-center sm:items-start items-center">
            <InfoOfTheDay
              dailySale="Dia com mais vendas"
              weekday="quarta-feira"
              icon={<IconPolygon className="text-green-700 shadow-sm" />}
            />
            <div className="pt-7" />
            <InfoOfTheDay
              dailySale="Dia com menos vendas"
              weekday="domingo"
              icon={
                <IconPolygon className="text-red-700 rotate-180 shadow-sm" />
              }
            />
          </div>

          <div className="pt-10">
            <SimpleGraph />
          </div>
        </div>
      </div>
    </Card>
  );
};
