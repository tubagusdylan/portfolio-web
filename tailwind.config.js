/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "30px",
    },
    extend: {
      colors: {
        primary: "#2F4858",
        secondary: "#F77F4B",
        tertiary: "#757496",
      },
    },
  },
  plugins: [],
};
