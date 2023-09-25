import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "8xl": [
          "120px",
          { lineHeight: "120px", letterSpacing: "-6px", fontWeight: "500" },
        ],
        "7xl": [
          "72px",
          { lineHeight: "80px", letterSpacing: "-4.5px", fontWeight: "600" },
        ],
        "6xl": [
          "55px",
          { lineHeight: "60px", letterSpacing: "-2.5px", fontWeight: "500" },
        ],
        "5xl": [
          "46px",
          { lineHeight: "54px", letterSpacing: "-1.6px", fontWeight: "500" },
        ],
        "4xl": [
          "36px",
          { lineHeight: "44px", letterSpacing: "-1.2px", fontWeight: "500" },
        ],
        "3xl": [
          "28px",
          { lineHeight: "34px", letterSpacing: "-0.8px", fontWeight: "500" },
        ],
        "2xl": [
          "24px",
          { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "400" },
        ],
        xl: [
          "24px",
          { lineHeight: "30px", letterSpacing: "-1px", fontWeight: "500" },
        ],
        lg: [
          "21px",
          { lineHeight: "30px", letterSpacing: "-0.8px", fontWeight: "400" },
        ],
        base: [
          "17px",
          { lineHeight: "25px", letterSpacing: "-0.7px", fontWeight: "400" },
        ],
        sm: [
          "15px",
          { lineHeight: "23px", letterSpacing: "-0.6px", fontWeight: "400" },
        ],
        caption1: [
          "20px",
          { lineHeight: "24px", letterSpacing: "-0.6px", fontWeight: "400" },
        ],
        caption2: [
          "20px",
          { lineHeight: "20px", letterSpacing: "-0.3px", fontWeight: "400" },
        ],
        caption3: [
          "18px",
          { lineHeight: "18px", letterSpacing: "-0.5px", fontWeight: "400" },
        ],
        caption4: [
          "16px",
          { lineHeight: "15px", letterSpacing: "-0.2px", fontWeight: "400" },
        ],
      },
      colors: {
        white: "#FFF",
        primary: {
          200: "#EFEFFC",
          300: "#CFD0F6",
          400: "#7F81E8",
          DEFAULT: "#5F62E2",
          600: "#5658CB",
        },
        secondary: {
          200: "#EAF8F4",
          300: "#BFE9DE",
          400: "#56C4A7",
          DEFAULT: "#2AB691",
          600: "#26A482",
        },
        gray: {
          300: "#fafafa",
          400: "#F2F2F2",
          500: "#E5E5E5",
          600: "#B2B2B2",
          700: "#808080",
          800: "#333333",
          DEFAULT: "#1D1D1D",
        },
      },
      borderRadius: {
        DEFAULT: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
