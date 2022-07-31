/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'black': '#1A1D1F',
      'green': '#28C25D',
      'blue': '#2A85FF',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
};
