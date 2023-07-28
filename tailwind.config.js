/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray_weight: "#1C1C1C",
        gray: "#696969	",
        gray_lightweight: "#808080",
        dark_gray: "#A9A9A9",
        blue: "#00BFFF",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
