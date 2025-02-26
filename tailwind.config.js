/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        ethnocentric: ['Ethnocentric Rg', 'sans-serif'],
      },
      colors: {
        primary: {
          purple: '#6B46C1',
          blue: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
};
