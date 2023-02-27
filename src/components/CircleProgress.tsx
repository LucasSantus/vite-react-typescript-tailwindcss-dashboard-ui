import { motion } from "framer-motion";

interface ICircleProgressProps {
  size: number;
  color: string;
  percentage: number;
}

export const CircleProgress: React.FC<ICircleProgressProps> = ({
  size,
  color,
  percentage,
}) => {
  const strokeWidth = size / 7;
  const radius = size / 2 - strokeWidth / 2;

  return (
    <svg
      className={`w-20 h-20 md:w-40 md:h-40`}
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
        className="stroke-custom-purple-700"
      />

      <motion.circle
        className={color}
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
