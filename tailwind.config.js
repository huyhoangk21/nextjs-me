module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '4rem 1fr',
      },
    },
  },
  plugins: [],
};
