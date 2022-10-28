/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/img/bg.svg')",
      },
      fontFamily:{
        sans: "'Noto Sans', sans-serif"
      }
    },
  },
  plugins: [],
};
