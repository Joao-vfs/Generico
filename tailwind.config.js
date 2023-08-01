/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "typing-text": "typing-text 4s steps(40) 1s both ",
        "typing-italic": "typing-italic 4s steps(40)  both ",
        "fade-up": "fade-up-btn 1s ease-out",
      },
      keyframes: {
        "typing-text": {
          from: { width: "0" },
          to: { width: "26em" },
        },
        "typing-italic": {
          from: { width: "0" },
          to: { width: "26em" },
        },
        "fade-up-btn": {
          from: { opacity: 0, transform: "translateY(-20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
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
