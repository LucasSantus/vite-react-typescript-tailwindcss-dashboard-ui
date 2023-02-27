import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  size: number;
  color: string;
  percentage: number;
};

const Spinner: React.FC<Props> = ({ size, color, percentage }) => {
  const strokeWidth = size / 4;
  const radius = size / 2 - strokeWidth / 2;

  const strokeClassName = classNames(
    "stroke-current",
    `text-${color}-500`,
    `dark:text-${color}-400`
  );

  return (
    <svg
      className={`w-36 h-36`}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(270deg)" }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        className="stroke-gray-500"
      />

      <motion.circle
        className={strokeClassName}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        pathLength={100}
        strokeLinecap="round"
        strokeDasharray={100}
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 100 - percentage }}
        transition={{
          delay: 0,
          type: "tween",
          duration: (percentage / 100) * 2,
          ease: "easeOut",
        }}
      />
    </svg>
  );
};

export default Spinner;
