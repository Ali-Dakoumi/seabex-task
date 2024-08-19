/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./storybook"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        iconColor: {
          DEFAULT: "#33A0FF",
        },
        grayStar: {
          DEFAULT: "#C1C8CE",
        },
        bgColor: {
          DEFAULT: "#F6F7F8",
        },
        bgRed: {
          DEFAULT: "#FF4858",
        },
        textColor: {
          DEFAULT: "#262626",
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
