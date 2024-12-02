export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        secondary: '#535bf2',
        dark: '#242424',
        light: '#ffffff'
      },
      width: {
        'nav': '20%',
        'nav-tablet': '15%',
        'content': '80%',
        'content-tablet': '85%'
      }
    },
  },
  plugins: [],
}