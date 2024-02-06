import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ideaRed: "#D51C23",
      footerBg: "#F6F8F7",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      rose: colors.rose,
      orange: colors.orange,
      lime: colors.lime,
      teal: colors.teal,
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
      violet: colors.violet,
      sky: colors.lightBlue,
      amber: colors.amber,
      neutral: colors.trueGray,
      stone: colors.warmGray,
      slate: colors.blueGray,
      transparent: "transparent",
      current: "currentColor",
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1500px",
    },
    extend: {
      height: {
        otros1: "550px",
        otros: "650px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
