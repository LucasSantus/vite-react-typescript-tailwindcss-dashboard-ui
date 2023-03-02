export interface IDataTypes {
  expected: number;
  reached: number;
  type: "money" | "integer";
}

export interface IStatisticsProps {
  title: string;
  data: IDataTypes;
  backgroundColor: string;
  strokeColor: string;
}
