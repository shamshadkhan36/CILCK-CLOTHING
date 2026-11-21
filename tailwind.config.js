/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',
          surface: '#121212',
          card: '#1a1a1a',
          border: '#2a2a2a',
          accent: '#e5e5e5',
          gold: '#c5a059',
          crimson: '#dc2626'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Impact', 'sans-serif']
      }
    },
  },
  plugins: [],
}
