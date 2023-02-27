import { Sales } from "../components/Sales";
import { Score } from "../components/Score";
import { Statistics } from "../components/Statistics";

export const Dashboard = () => {
  return (
    <div className="w-screen w- h-screen bg-custom-purple-800 flex justify-center items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
          <Score />

          <Statistics
            title="Vendas fechadas"
            expected={100}
            reached={70}
            backgroundColor={"bg-[#7367F0]"}
            strokeColor={"stroke-[#7367F0]"}
          />

          <Statistics
            title="Meta mensal"
            expected={70000}
            reached={63000}
            backgroundColor={"bg-[#A66DE9]"}
            strokeColor={"stroke-[#A66DE9]"}
          />
        </div>
        <div>
          <Sales />
        </div>
      </div>
    </div>
  );
};
