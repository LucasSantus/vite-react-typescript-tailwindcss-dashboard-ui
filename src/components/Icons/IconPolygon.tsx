interface IconPolygonProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconPolygon = (props: IconPolygonProps) => (
  <svg
    width={13}
    height={12}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.5.5l6.495 11.25H.005L6.5.5z" fill="currentColor" />
    <defs>
      <linearGradient
        id="paint0_linear_201_16"
        x1={6.5}
        y1={0.5}
        x2={6.5}
        y2={15.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset={1} stopColor="currentColor" />
      </linearGradient>
    </defs>
  </svg>
);
