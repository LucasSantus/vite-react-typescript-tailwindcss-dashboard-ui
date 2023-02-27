import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-custom-purple-600 rounded-2xl shadow-card">
      <div>{children}</div>
    </div>
  );
};
