import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'custom-grey': '#CDCFCF',
        'buttons': "#FDF2CF",
        'btn-hover': "#F5B08F"
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'], // Esto desactiva los temas predeterminados de DaisyUI
    base: false,
  },
  darkMode:"class"
};
