import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure your directory structure is covered
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["var(--font-jakart-sans)", "sans-serif"],
        body: ["var(--font-nunito-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
