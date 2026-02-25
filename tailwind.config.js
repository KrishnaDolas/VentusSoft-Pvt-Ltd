/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        auribus: {
          dark: '#0A0F1E',
          blue: '#0072FF',
          cyan: '#00C6FF',
        },
      },
    },
  },
  plugins: [],
};
