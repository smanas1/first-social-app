/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "var(--primary-black)",
        "primary-white": "var(--primary-white)",
      },
      container: {
        center: true,
      },
      fontFamily: {
        gilroyNormal: ["Gilroy normal"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
