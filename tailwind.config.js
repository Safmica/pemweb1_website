/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        harryPotter: ['harryPotter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        walkWay: ['Walkway', 'sans-serif'], 
        billion: ['Billion', 'sans-serif'], 
        retro: ['Retro', 'sans-serif'], 
        winter: ['winter', 'sans-serif'], 
        ananda: ['ananda', 'sans-serif'], 
        anandablack: ['anandablack', 'sans-serif'], 
        madina: ['Madina', 'sans-serif'], 
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        customRed: '#ae0001',
        customBlue: '#222f5b',
        customGreen: '#2a623d',
        customYellow: '#f0c75e',
        customYellow2: '#e7b21b',
        customGrey: '#bebebe',
      },
      fontSize: {
        'custom-size1': '10rem',
        'custom-size2': '5rem',
      },
    },
  },
  plugins: [],
};