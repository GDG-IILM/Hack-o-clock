/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Bitcount as the primary sans font
        sans: ['"Bitcount"', 'Inter', 'sans-serif'],
        bitcount: ['"Bitcount"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        compacta: ['"Compacta"', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.986rem',
        'h2': '2.488rem',
        'h3': '2.074rem',
        'h4': '1.728rem',
        'h5': '1.44rem',
        'h6': '1.2rem',
        'p':  '1rem',
        'xs': '0.833rem',
      }
    },
  },
  plugins: [],
}