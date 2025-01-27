import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      "tablet-large": "768px",
      desktop: "1024px",
    },
    colors: {
      white: "#FFFFFF",
      orange: "#D87D4A",
      black: "#000000",
      "black-soft": "#101010",
      "white-soft": "#F1F1F1",
      "orange-soft": "#fbaf85",
      "light-gray": "#CFCFCF",
      grey: "#8a8a8a",
    },
    fontFamily: {
      primary: ["Manrope", "sans-serif"],
    },
    spacing: {
      0: "0px",
      4: "4px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      18: "18px",
      22: "22px",
      24: "24px",
      28: "28px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      152: "152px",
      220: "220px",
    },
    extend: {
      borderRadius: {
        xl: "20px",
      },
      backgroundSize: {
        "full-width": "100%",
      },
    },
  },
  plugins: [],
} satisfies Config;
