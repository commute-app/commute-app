/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
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
