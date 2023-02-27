interface IconHappyPersonProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const IconHappyPerson = (props: IconHappyPersonProps) => (
  <svg
    width={54}
    height={55}
    viewBox="0 0 54 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={27} cy={27.5} r={27} fill="url(#paint0_linear_201_65)" />
    <path
      d="M12.656 31.297c-.932 0-1.696.757-1.6 1.684a16.453 16.453 0 0032.733 0c.095-.927-.67-1.684-1.602-1.684H12.657zM23.498 21.172c.536 0 .98-.438.885-.966a5.484 5.484 0 00-10.797 0c-.095.528.349.966.885.966s.957-.443 1.102-.959a3.544 3.544 0 016.822 0c.145.516.567.959 1.103.959zM39.53 21.172c.535 0 .979-.438.884-.966a5.484 5.484 0 00-10.797 0c-.095.528.349.966.885.966s.958-.443 1.103-.959a3.544 3.544 0 016.822 0c.145.516.566.959 1.102.959z"
      fill="#363447"
    />
    <defs>
      <linearGradient
        id="paint0_linear_201_65"
        x1={27}
        y1={0.5}
        x2={27}
        y2={54.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#81FBB8" />
        <stop offset={1} stopColor="#28C76F" />
      </linearGradient>
    </defs>
  </svg>
);
