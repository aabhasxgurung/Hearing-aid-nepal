import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Clean white
        surface: "#f6f6f6", // Light gray for sections/cards
        foreground: "#1a1a1a", // Dark text for high contrast
        accent: "#D2042D", // Cherry Red
        muted: "#71717a", // Muted gray text
        border: "#e5e5e5", // Subtle light border
      },
      fontFamily: {
        mori: ["PPMori", "sans-serif"],
        editorial: ["Editorial", "serif"],
      },
      backgroundImage: {
        noise: "url('/noise.png')", // Placeholder for noise texture if added
      },
    },
  },
  plugins: [],
};
export default config;
