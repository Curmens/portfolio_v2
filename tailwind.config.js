/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '6rem',
      },
    },
    screens: {
      // xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark-green': '#035928',
      'green': '#00CB09',
      'light-green': '#00CB09',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    backgroundColor: {
      'dark-green': '#035928',
      'green': '#00CB09',
      'light-green': '#00CB09',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    fontSize: {
      xs: ['14px', '16px'],
      sm: ['16px', '20px'],
      base: ['18px', '22px'],
      md: ['28px', '30px'],
      lg: ['38px', '48px'],
      xl: ['44px', '44px'],
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontFamily: {
      sans: ['Regular'],
      stylish: ['Satisfy'],
      headers: ['League Spartan']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}