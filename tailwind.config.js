/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        montserrat : ["Montserrat", "sans-serif"],
        openSans : ["Open Sans", "sans-serif"],
        RaleWay : ["Raleway", "sans-serif"]
      },
      boxShadow: {
        neumorphism: '12px 12px 24px #b0b0b0, -12px -12px 24px #ffffff',
      },
      screens:{
        xs: "480px"
      }
    },
  },
  plugins: [],
}