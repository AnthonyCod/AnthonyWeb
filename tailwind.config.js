/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todos los archivos de React
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo Black', 'sans-serif'], // Define tu fuente personalizada
      },
    },
  },
  plugins: [],
};
