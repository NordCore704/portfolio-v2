/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "scheme-dark-blue": '#20242f',
        "scheme-yellow": '#f7bf57',
        "scheme-ash-blue": '#2f3241',
        "scheme-white": '#f0f3f8',
        "scheme-gray": "#cdd1da",
        "scheme-ash-blue-2": "#2e3140",
        "scheme-red": "#f9564f",
        'scheme-yellow': '#f3c677',
      },
    },
  },
  plugins: [],
}
