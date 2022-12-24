/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const mainWidth = '1440px'

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
      },
      maxWidth: {
        'main-contain': mainWidth,
      },
      fontFamily: {
        Verah: ['"Vera Humana 95"', ...defaultTheme.fontFamily.sans],
        Neue: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
        Noto: ["Noto Serif TC", "Noto Serif SC", "Times", "Times New Roman", "serif"],
      },
      colors: {
        'arta-secondary': '#AB8250',
        'arta-sunray-100': '#E5C183',
        'arta-russet-100': '#2E1605',
        'arta-sand-100': '#593725',
        'arta-sand-200': '#AC9B92',
        'arta-sand-300': '#DED7D3',
        'arta-eggshell-100': '#F4F1E1',
        'arta-snow-100': '#FFFFFF',
        'arta-bistre-100': '#402414',
        'arta-indigo-100': '#878095',
        'arta-page-background': '#D1C2AC',
        'arta-black': '#0A0A0A',
        'arta-bright-gray': '#EEEEED',
        'arta-dark-brown' : '#44220F'
      },
      backgroundColor: ['active'],
      backgroundImage: (theme) => ({
        contact: "url('/images/newcc.png')",
        'about-gradient': 'linear-gradient(#733921  ,#3c1d10  )',
        'reportCard-gradient': 'linear-gradient(154.36deg, #F4DB98 12.84%, #948265 83.78%)',
        'mobile-header-gradint': 'linear-gradient(180deg, #DFD8CA 52.6%, rgba(223, 216, 202, 0) 100%)'
        //'linear-gradient(131.63deg, #653711 26.47%, #3D230A 99.16%);' #522716  #572A18 #5E2F1B,
      }),
      height: {
        'app-height': 'var(--app-height)',
      },
      boxShadow: {
        'calendarAccordion': '0px 8px 16px rgba(89, 55, 37, 0.2)',
        'postCard': '0px 8px 16px rgba(89, 55, 37, 0.2)',
        'blogPost': '0px 64px 64px rgba(89, 55, 37, 0.2)',
        'circle': '0px 16px 16px rgba(89, 55, 37, 0.2)'
      }
    },
  },
  plugins: [],
}
