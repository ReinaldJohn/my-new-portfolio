/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    xs: [
      {
        max: "600px",
      },
    ],
    sm: [
      {
        min: "600px",
      },
    ],
    md: [
      {
        min: "768px",
      },
    ],
    lg: [
      {
        min: "992px",
      },
    ],
    xl: [
      {
        min: "1200px",
      },
    ],
  },
  plugins: [],
};
