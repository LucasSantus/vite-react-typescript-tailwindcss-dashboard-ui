import { CircleProgress } from "../components/CircleProgress";
import Spinner from "../components/Spinner";
import { Statistics } from "../components/Statistics";

export const Dashboard = () => {
  return (
    <div className="w-screen w- h-screen bg-custom-purple-800 flex justify-center items-center">
      {/* <div>
        <Score />
      </div> */}

      <div>
        <Statistics
          title="Vendas fechadas"
          expected={100}
          reached={50}
          colorCircleProgress="stroke-blue-800"
        />
      </div>

      <div>
        <Statistics
          title="Meta mensal"
          expected={100}
          reached={70}
          colorCircleProgress="stroke-red-800"
        />
      </div>

      {/* Gráfico */}
    </div>
  );
};
