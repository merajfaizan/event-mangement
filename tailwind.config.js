/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#e2564d",
        "secondary-color": "#EF4D48",
        black: "#1a1a1a",
        gray: "#5f656c",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
