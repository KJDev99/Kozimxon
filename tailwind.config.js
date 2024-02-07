/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem", // Default padding for container
        sm: "2rem", // Padding for small screens
        lg: "4rem", // Padding for large screens
        xl: "5rem", // Padding for extra large screens
      },
    },
    colors: {
      "btn-blue": "#10A6B9",
      white: "#ffffff",
      "bgcolor-blue": "#15D2E8",
    },
  },
};
