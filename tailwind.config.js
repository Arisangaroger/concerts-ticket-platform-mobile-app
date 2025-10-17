module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // indigo-600
        accent: '#fb7185', // pink-400
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};