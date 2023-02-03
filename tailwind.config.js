/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xl': ['1.5rem'],
      'lg': ['1.2em'],
      '2xl': ['3rem'],
      
      
    },
     
    extend: {
      width: {
        '100': '28rem',
        '101': '28.5rem',
      }
    }
    
  },
 
  plugins: [],
}
