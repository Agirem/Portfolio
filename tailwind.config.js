/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js",
  "./*.{html,js}",

  

],
  theme: {
    extend: {
   

      fontFamily:{
        primary: "ProductSans",
        
      },

      "colors": {
        'tailwind': {
          '50': '#f0faff',
          '100': '#e0f5fe',
          '200': '#bae8fd',
          '300': '#7dd5fc',
          '400': '#38bdf8',
          '500': '#0ea6e9',
          '600': '#028ac7',
          '700': '#0370a1',
          '800': '#075e85',
          '900': '#0c506e',
          '950': '#083549',
      },
      
        'blue': {
          '50': '#f2f1ff',
          '100': '#e9e5ff',
          '200': '#d6ceff',
          '300': '#b9a6ff',
          '400': '#9775ff',
          '500': '#783dff',
          '600': '#6a16ff',
          '700': '#5c04fd',
          '800': '#5003dd',
          '900': '#4105ad',
          '950': '#250076',
      },
      
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

