/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A36EB8",
        priBg: "#B9A6B7",
        titleText: "#222222",
        priText: "#6E6E6E",
        borderColor: "#F0F2F5",
        headerText: "#181820"
      },
    },
  },
  plugins: [],
}

