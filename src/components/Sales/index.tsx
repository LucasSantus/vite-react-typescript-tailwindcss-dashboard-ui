import { Card } from "../Card";

import { SimpleGraph } from "../SimpleGraph";
import { InfoOfTheDay } from "./components/InfoOfTheDay";
import { SALES_DATA } from "./constants";

export const Sales: React.FC = () => {
  const { mostSales, leastSales } = SALES_DATA;

  return (
    <Card>
      <div className="px-12 py-7 flex flex-col justify-center">
        <span className="text-white font-inter text-2xl text-center sm:text-left">
          Vendas por dia da semana
        </span>
        <div className="grid sm:grid-cols-2 grid-cols-1 pt-8">
          <div className="flex flex-col gap-2">
            <InfoOfTheDay {...mostSales} />
            <div className="pt-7" />
            <InfoOfTheDay {...leastSales} />
          </div>

          <SimpleGraph />
        </div>
      </div>
    </Card>
  );
};
