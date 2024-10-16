/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'], // Add Nunito Sans as a font family option
      },
    
        colors: {
          customBlue: '#5078E1',
        },
      
    },
  },
  plugins: [require("daisyui")], // Add DaisyUI plugin
}
