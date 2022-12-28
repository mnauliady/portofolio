/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      colors: {
        dark: "#111827",
        secondary: "#0891b2",
        primary: "#2dd4bf",
        gold: "#e89c31",
        brown: "#dba858",
      },
    },
  },
  plugins: [],
};
