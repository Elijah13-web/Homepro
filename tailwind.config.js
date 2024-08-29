/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/*.{js,jsx}",
    "./components//*.{js,jsx}",
    "./app/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light': '#f8f3dd', 
        'custom-green': '#9fa007', 
      },

    },
  },
  plugins: [],
};