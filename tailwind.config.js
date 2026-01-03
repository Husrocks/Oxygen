/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f0f0f',
          text: '#f3f4f6',
        },
        accent: {
          green: '#ccff00',
          blue: '#00d4ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Oswald', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.75) 100%)',
      },
    },
  },
  plugins: [],
}

