import { IconPolygon } from "../Icons/IconPolygon";
import { ISalesDataTypes } from "./types";

export const SALES_DATA: ISalesDataTypes = {
  mostSales: {
    description: "Dia com mais vendas",
    weekday: "quarta-feira",
    icon: <IconPolygon className="text-green-700 shadow-sm" />,
  },
  leastSales: {
    description: "Dia com menos vendas",
    weekday: "domingo",
    icon: <IconPolygon className="text-red-700 rotate-180 shadow-sm" />,
  },
};
