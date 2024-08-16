/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#223263",
        },
        secondary: {
          DEFAULT: "#9098B1",
        },
        error: {
          DEFAULT: "#FB7181",
        },
        success: {
          DEFAULT: "#40BFFF",
        },
        gold: {
          DEFAULT: "#FFC600",
        },
        grayStar: {
          DEFAULT: "#C1C8CE",
        },
        bgColor: {
          DEFAULT: "#F6F7F8",
        },
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: "#F6F7F8",
      }),
    },
  },
  plugins: [],
};
