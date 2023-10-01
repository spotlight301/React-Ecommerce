/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondry: '#E5E7EBBB',
        text: '#C084FC',
        yellow: '#FaCC15',
        white: '#E5E7EB',
        red: '#EF4444'
      },
      screens: {
        Cxl: '1112px',
        Clg: '964px',
        Cxm: '787px',
        Cmd: '562px',
        Csm: '429px',
        Cxs: '346px',
      }
    },
  },
  plugins: [],
}