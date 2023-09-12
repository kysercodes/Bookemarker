/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        carnation: {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc9c9',
          '300': '#fea3a3',
          '400': '#fa5959',
          '500': '#f24141',
          '600': '#e02222',
          '700': '#bc1919',
          '800': '#9b1919',
          '900': '#811b1b',
          '950': '#460909',
      },
     "royal-blue": {
        '50': '#eff5fe',
        '100': '#e1eefe',
        '200': '#c9ddfc',
        '300': '#a9c6f8',
        '400': '#86a6f3',
        '500': '#6987eb',
        '600': '#5267df',
        '700': '#3e50c4',
        '800': '#35459e',
        '900': '#323f7d',
        '950': '#1d2349',
    },
    
      },
      
    },
    
  },
  plugins: [],
}

