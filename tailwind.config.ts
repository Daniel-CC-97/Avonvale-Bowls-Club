import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#004d79',
        'primary-darker': '#003e60',
        'primary-lighter': '#005d93',
        'primary-saturated': '#00456d',
        'primary-desaturated': '#3e6d8f',
        'primary-tinted-white': '#335a7d',
        secondary: '#ec952c',
        'secondary-darker': '#c16b1d',
        'secondary-lighter': '#f8b671',
        'secondary-vibrant': '#ffa349',
        'secondary-golden': '#eac577',
        'secondary-warm': '#f5ac65'
      },
    },
  },
  plugins: [],
};
export default config;
