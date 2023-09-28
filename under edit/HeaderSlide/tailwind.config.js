import { resolvePackageEntry } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
          backgroundImage: {
            'bgSlide': "url('/src/assets/photo1.png)",
          }
      },
      
    },
    plugins: [],
  }

