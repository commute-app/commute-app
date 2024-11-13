/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'map': "url('/map-bg.png')",
      },
      backgroundColor: {
        'surface-light': '#F0ECFA',
        'surface-medium': '#D3D9E1',
        'surface-dark': '#3A2E55',
        'surface-card': '#F7F9FC',
        'surface-panel': '#E5EAF2',
        'surface-accent': '#C1DFF2'
      },
      textColor: {
        secondary: '#4A4A57',
        'secondary-light': '#D0D0D5',
        body: '#33333D',
        muted: '#707070'
      }
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif']
    },
    colors: {
      primary: {
        100: '#AC92E0',
        200: '#9E80DB',
        300: '#906ED6',
        400: '#825CD1',
        500: '#744ACC',
        600: '#6843B8',
        700: '#5D3BA3',
        800: '#51348F',
        900: '#462C7A'
      },
      secondary: {
        100: '#7E888F',
        200: '#69747D',
        300: '#53606A',
        400: '#3E4C58',
        500: '#283845',
        600: '#24323E',
        700: '#202D37',
        800: '#1C2730',
        900: '#182229'
      },
      tertiary: {
        100: '#66CAED',
        200: '#4DC1EA',
        300: '#33B9E7',
        400: '#1AB0E4',
        500: '#00A7E1',
        600: '#0096CB',
        700: '#0086B4',
        800: '#00759E',
        900: '#006487'
      },
      black: '#1E1E1E',
      dark: '#1C1B1F',
      white: '#FAFAFA',
      grey: {
        200: '#CDCDCD',
        300: '#AEAEAE',
        400: '#A4A4A4',
        500: '#9A9A9A',
        600: '#8B8B8B',
        700: '#7B7B7B',
        800: '#4D4D4D'
      },
      success: {
        100: '#C4DE93',
        500: '#9DC84B',
        900: '#5E782D'
      },
      warning: {
        100: '#FFD394',
        500: '#FFB54D',
        900: '#996D2E'
      },
      error: {
        100: '#DF8888',
        500: '#CA3838',
        900: '#792222'
      },
      transparent: 'transparent',
    },
    screens: {
      mobile: '390px',
      tablet: '768px',
      desktop: '1024px',
      full: '1440px',
      max: '1600px'
    }
  },
  plugins: []
}
