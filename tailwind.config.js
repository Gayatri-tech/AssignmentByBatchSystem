/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        orange: "#FF5555",
      },
      width: {
        55: "55%",
        45: "45%",
      },
      fontSize: {
        m: "18px",
      },
    },
  },
  plugins: [],
};
