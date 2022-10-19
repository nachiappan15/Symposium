/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background1:"#16161a",
        background2:"#242629", 
        headline:"#fffffe",
        paragraph: "#94a1b2",
        button:"#7f5af0",
        card:"#16161a",
        highlight: "#7f5af0",
        selected: "#2cb67d"
      }
    },
  },
  plugins: [],
}