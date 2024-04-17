/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        secondary: "rgba(19, 19, 19, 0.80);",
        success: "#23BE0A",
        info: "#59C6D2",
        blueish: "#328EFF",
        orange: "#FFAC33",
        low_gray: "rgba(19, 19, 19, 0.05)"
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};