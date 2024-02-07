/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // Default padding for container
        sm: '2rem',      // Padding for small screens
        lg: '4rem',      // Padding for large screens
        xl: '5rem',      // Padding for extra large screens
      },
    },
    colors: { 
      "btn-blue":'#10A6B9',
      'white': '#ffffff',
      "bgcolor-blue":'#15D2E8'
    }
  },
};
