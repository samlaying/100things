/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E8',
        dark: '#24201B',
        'card-yellow': '#FFD84D',
        'card-green': '#AEE6C3',
        'card-pink': '#FF9FB2',
        'card-blue': '#A7D8FF',
        'card-purple': '#C8B6FF',
        'card-orange': '#FFB36B',
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        hand: ['Ma Shan Zheng', 'cursive'],
      },
      borderRadius: {
        'card': '28px',
      },
      boxShadow: {
        'card': '0 12px 28px rgba(35, 31, 25, 0.12)',
        'card-hover': '0 16px 32px rgba(35, 31, 25, 0.18)',
      },
    },
  },
  plugins: [],
}