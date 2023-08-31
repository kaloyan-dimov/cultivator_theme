/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js,liquid}',
    './{layout,snippets,sections,templates}/**/*.liquid',
  ],
  theme: {
    extend:{
    screens: {
        'sm': '768px',
        // => @media (min-width: 640px) { ... }
        'md': '1024px',
        // => @media (min-width: 1024px) { ... }
        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }
    },
  },
  //   extend: {},
  },
  plugins: [],
}

