import { Sales } from "../components/Sales";
import { Score } from "../components/Score";
import { Statistics } from "../components/Statistics";

export const Dashboard = () => {
  return (
    <div className="w-screen h-screen bg-custom-purple-800">
      <div className="sm:flex sm:justify-center sm:items-center h-full">
        <div className="container grid-cols-1 mx-auto px-4 grid gap-5 max-w-[1200px]">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
            <Score />

            <Statistics
              title="Vendas fechadas"
              data={{
                expected: 100,
                reached: 70,
                type: "integer",
              }}
              backgroundColor={"bg-[#7367F0]"}
              strokeColor={"stroke-[#7367F0]"}
            />

            <Statistics
              title="Meta mensal"
              data={{
                expected: 70000,
                reached: 63000,
                type: "money",
              }}
              backgroundColor={"bg-[#A66DE9]"}
              strokeColor={"stroke-[#A66DE9]"}
            />
          </div>
          <div>
            <Sales />
          </div>
        </div>
      </div>
    </div>
  );
};
