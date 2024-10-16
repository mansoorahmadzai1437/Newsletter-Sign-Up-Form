/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Tomato: "hsl(4, 100%, 67%)",

        // Neutral
        DarkSlateGrey: "hsl(234, 29%, 20%)",
        CharcoalGrey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans"],
      },
      boxShadow: {
        ButtonShadow: "0 20px 60px -15px hsl(4, 100%, 67%)",
      },
    },
  },
  plugins: [],
};
