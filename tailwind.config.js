/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      white: "#ffffff",
      "pale-blue": "#ebf1ff",
      "light-lavender": "#c8c7ff",
      "dark-grey-blue": "#303b5a",
      red: "#ff5757",
      "red-trans": "#ffe6e6",
      orange: "#ffb01f",
      "orange-trans": "#ffedcc",
      green: "#00bd91",
      "green-trans": "#ccfff3",
      blue: "#1125d4",
      "blue-trans": "#e7eafd",
      "grad-sl-blue": "#7857ff",
      "grad-rl-blue": "#2e2be9",
      "grad-v-blue": "#4e21ca",
      "grad-p-blue": "#2421ca",
    },
    fontFamily: {
      sans: ["Hanken Grotesk", "sans"]
    },
    extend: {},
  },
  plugins: [],
};
