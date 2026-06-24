/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'calm-bg': '#f8fafc',
        'panel-white': '#ffffff',
        'ocean-accent': '#0ea5e9',
        'text-main': '#334155',
      },
      boxShadow: { 'soft-float': '0 10px 25px -5px rgba(14, 165, 233, 0.15)' }
    },
  },
  plugins: [],
}

