/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        lightPrimary: '#147AFF', 
        secondaryLight: '#FFBB5A', 

        darkPrimary: '#147AFF', 
        darkSecondary: '#FFBB5A',

        lightBackground: '#ffffff', 
        lightBackgroundSecondary: '#edf2f8', 
        darkBackground: '#171A30', 
        darkBackgroundSecondary: '#1D2239',

        lightText: '#74778e',
        darkText: '#74778e',

        darkBorder: '#313A6C',
        lightBorder:'#C9D8EA',

        darkPrimaryBgHover: '#333',
        darkSecondaryBgHover: '#566783',

        lightPrimaryBgHover: '#333',
        lightSecondaryBgHover: '#cfd7e1',

      },
      boxShadow: {
        defaultLight: '0 4px 6px rgba(0, 0, 0, 0.1)',
        dark: '0 4px 6px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ],
};
