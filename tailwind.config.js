/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: { 
      dropShadow: {
        footerShadow: [
          '0 2px 2px rgb(253, 224, 71, .16)',
        ],
      }
    },
  },
  plugins: [],
}