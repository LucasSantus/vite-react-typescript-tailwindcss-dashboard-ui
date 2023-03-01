interface IDaysType {
  day: string;
  value: number;
}

const DAYS: IDaysType[] = [
  {
    day: "dom",
    value: 2,
  },
  {
    day: "seg",
    value: 5,
  },
  {
    day: "ter",
    value: 4,
  },
  {
    day: "qua",
    value: 6,
  },
  {
    day: "qui",
    value: 5,
  },
  {
    day: "sex",
    value: 4.5,
  },
  {
    day: "sab",
    value: 3,
  },
];

export const SimpleGraph: React.FC = () => {
  const calcularValor = (value: number) => {
    let valueTotal = value * 10;

    if (valueTotal < 0) return 1;
    else if (valueTotal > 140) return 140;

    return valueTotal;
  };

  return (
    <div className="relative h-full  flex items-center">
      <div className="w-full bg-[#4A4556] h-[3px]" />

      <div className="absolute flex justify-between items-end h-full overflow-auto z-10 inset-0">
        {DAYS.map((item) => {
          const value = calcularValor(item.value);

          const divStyle = {
            height: `${value}px`,
          };

          return (
            <div
              key={item.day}
              className="flex flex-col justify-center items-center"
            >
              <div
                className={"bg-custom-cyan-600 w-[15px] rounded-full"}
                style={divStyle}
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
