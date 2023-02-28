/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "3px 4px 26px rgba(0, 0, 0, 0.25);",
      },
      colors: {
        custom: {
          purple: {
            600: "#363447",
            700: "#4A4556",
            800: "#292738",
          },
          green: {
            500: "#81FBB8",
          },
          cyan: {
            600: "#90F7EC",
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
