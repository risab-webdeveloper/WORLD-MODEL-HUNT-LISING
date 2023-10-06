/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'red': '#941196',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': '#151515',
      'gray-100':'#8B8B8B',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'h1': '60px',
      'h2': '48px',
      'h3': '40px',
      'h4': '30px',
      'h5': '24px',
      'h6': '18px',
    },
    
    extend: {},
  },
  plugins: [],
}
