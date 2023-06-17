/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        'bg-login': "url('/public/bg-login.jpg')",
      },
      colors: {
        primary: "#1C6758",
        secondary: "#3D8361",
      },
    },
  },
  plugins: [],
};
