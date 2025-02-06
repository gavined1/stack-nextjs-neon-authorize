/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using the `app` directory
    "./pages/**/*.{js,ts,jsx,tsx}", // If you're using the `pages` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include any custom components
    "./styles/**/*.css", // Include your styles folder
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};