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
        "fade-up": "fade-up 1s ease-out",
        "fade-left": "fade-left 1s ease-out",
        "dark-mode-left": "dark-mode-left 1s ease-out both ",
        "dark-mode-rigth": "dark-mode-rigth 1s ease-out both ",
      },
      keyframes: {
        "typing-text": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "typing-italic": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(-100px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-left": {
          from: { opacity: 0, transform: "translateX(-100px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "dark-mode-left": {
          from: { transform: "translateX(-3rem)" },
          to: { transform: "translateX(0%)" },
        },
        "dark-mode-rigth": {
          from: { transform: "translateX(3rem)" },
          to: { transform: "translateX(0)" },
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
