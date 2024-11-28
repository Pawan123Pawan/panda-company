/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        customBounce: 'bounce 3s ease-in-out 1.0s infinite', // 2s duration, 0.5s delay
      },
      colors: {
        primary: '#3f003c',
        secondary: '#778896',
        cardbg: '#72006d',
      },
      aspectRatio: {
        '9/8': '9 / 8',
      },
    },
  },
  plugins: [],
};
