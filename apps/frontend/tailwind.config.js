/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        15: "0.15",
      },
      width: {
        "2/5": "40%",
      },
    },
    boxShadow: {
      neon: "inset 0px 0px 10px 0px rgba(255,100,250,0.58)",
    },
  },
  plugins: [],
};
