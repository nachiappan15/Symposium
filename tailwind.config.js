/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logo1:"#41d7f8",
        logo2:"#2b2d42",
        nav_op: "#B6EB7A",
        card:"#182747"
      }
    },
  },
  plugins: [],
}