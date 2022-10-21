/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const mainWidth = '1440px'
const mainWidth2 = '1240px'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
      },
      spacing: {
        'main-contain': mainWidth,
        'main-contain-2': mainWidth2,
      },
      maxWidth: {
        'main-contain': mainWidth,
        'main-contain-2': mainWidth2,
      },
      fontFamily: {
        Verah: ['"Vera Humana 95"', ...defaultTheme.fontFamily.sans],
        Neue: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'arta-sunray-100': '#E5C183',
        'arta-russet-100': '#2E1605',
      },
      backgroundColor: ['active'],
      backgroundImage: (theme) => ({
        contact: "url('/images/newcc.png')",
        'about-gradient': 'linear-gradient(#733921  ,#3c1d10  )',
        //'linear-gradient(131.63deg, #653711 26.47%, #3D230A 99.16%);' #522716  #572A18 #5E2F1B,
      }),
    },
  },
  plugins: [],
}
