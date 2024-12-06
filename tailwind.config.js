// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React files
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // Add this line for Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')], // Add Flowbite plugin
};
