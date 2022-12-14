/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily: {
 'fire': 'Fira Sans',
  },
  plugins: [require("daisyui")],
}
