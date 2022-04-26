module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(246, 80%, 60%)",

        work: "hsl(15, 100%, 70%)",
        play: "hsl(195, 74%, 62%)",
        study: "hsl(348, 100%, 68%)",
        exercise: "hsl(145, 58%, 55%)",
        social: "hsl(264, 64%, 52%)",
        selfCare: "hsl(43, 84%, 65%)",

        dkrBlue: "hsl(226, 43%, 10%)",
        dkBlue: "hsl(235, 46%, 20%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },

      fontSize: {
        mini: "0.9375rem",
      },

      gridTemplateRows: {
        main: "minmax(0, 1fr) min-content",
      },

      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
