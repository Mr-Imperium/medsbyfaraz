/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff9d',
          cyan: '#00ffd5',
          pink: '#ff0066',
        },
      },
    },
  },
  plugins: [],
};