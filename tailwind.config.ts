import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "8rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "move-x": "move 12s infinite alternate ease-in-out",
      },
      keyframes: {
        move: {
          "0%": {
            marginLeft: "0px",
          },
          "50%": {
            marginLeft: "47%",
          },
          "100%": {
            marginleft: "auto",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
