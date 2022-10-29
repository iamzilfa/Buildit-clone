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
        newColor: "linear-gradient(42.43deg, #C6DBFF 0%, #E1EBFA 52.25%)",
        aboutBlue: "linear-gradient(88.65deg, #C6DBFF 0%, #E1EBFA 100%);"
      },
      backgroundColor:{
        gradientNew: "42.43deg, #C6DBFF 0%, #E1EBFA 52.25%",
      },
      fontFamily:{
        sans: "'Noto Sans', sans-serif"
      },
      colors:{
        paleBlue: "#E1EBFA",
        aliceBlue: "#F4F7FF",
        textGray: "#486A6F",
        lightGray: "#678C92;",
        blueButton: "#4397A4"
      },
      boxShadow : { 
        blueLight: "0px 30px 60px rgba(59, 130, 246, 0.25)",
        
      },
    },
  },
  plugins: [],
};
