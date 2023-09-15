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
        waves: "waves 10s linear infinite",
        "to-appear": "to-appear 1.5s ease-in-out",
        rotate: "rotate 20s linear infinite",
        "typing-text": "typing-text 4s steps(40) both",
        "fade-up": "fade-up 0.5s ease-out",
        "fade-left": "fade-left 0.5s ease-out",
        "fade-rigth": "fade-rigth 0.5s ease-out",
        "dark-mode-left": "dark-mode-left 0.5s ease-out both ",
        "dark-mode-rigth": "dark-mode-rigth 0.5s ease-out both ",
      },
      keyframes: {
        waves: {
          from: { transform: "rotate(0deg) " },
          to: { transform: "rotate(360deg) " },
        },
        "to-appear": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        rotate: {
          from: { transform: "rotate(0deg) scale(1)" },
          to: { transform: "rotate(-360deg) scale(1)" },
        },
        "typing-text": {
          from: { width: "0ch" },
          to: { width: "50ch" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(-100px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-left": {
          from: { opacity: 0, transform: "translateX(-100px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "fade-rigth": {
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
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
