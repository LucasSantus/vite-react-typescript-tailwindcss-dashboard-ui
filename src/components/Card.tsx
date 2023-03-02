import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-custom-purple-600 rounded-2xl shadow-card">{children}</div>
);
