/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    xs: "600px", // Extra small devices (phones, 600px and down)
    sm: "600px", // Small devices (portrait tablets and large phones, 600px and up)
    md: "768px", // Medium devices (landscape tablets, 768px and up)
    lg: "992px", // Large devices (laptops/desktops, 992px and up)
    xl: "1200px", // Extra large devices (large laptops and desktops, 1200px and up)
    "2xl": "1440px", // Custom media query for 2xl devices
  },
  plugins: [],
};
