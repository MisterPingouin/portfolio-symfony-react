/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./assets/**/*.js",
      "./templates/**/*.html.twig",
  ],
  theme: {
      fontFamily: {
          'titlefont': ['Montserrat'],
          'subtitlefont': ['Lora'],
          'contentfont': ['Raleway'],
      },
      extend: {
          colors: {
              accentcolor: '#1e90ff',
          },
          boxShadow: {
              'inset': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          },
          screens: {
              'xxl': '1800px',
        
          },
      },
  },
  plugins: [],
};
