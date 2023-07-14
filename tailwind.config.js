/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rock': 'rgb(255, 255, 161)',
        'ghost': 'rgb(247, 247, 247)',
        'electric': 'rgb(255, 255, 161)',
        'bug': '#F6D6A7 ',
        'poison': '#e0a7f6',
        'normal': '#F4F4F4',
        'fairy': 'rgba(255, 192, 203, 0.863)',
        'fire': '#FBE3DF',
        'grass': '#00DFA2',
        'water': '#E0F1FD',
      }
    },
  },
  plugins: [require("daisyui")],
}