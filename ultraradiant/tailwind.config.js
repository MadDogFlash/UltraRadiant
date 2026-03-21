/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Valorant brand palette
        'val-red': '#FF4655',
        'val-blue': '#0F1923',
        'val-dark': '#0A1117',
        'val-surface': '#13232F',
        'val-border': '#1F3A4D',
        'val-accent': '#FF4655',
        'val-gold': '#C9AA71',
        'val-iron': '#7B8FA1',
        'val-bronze': '#B26A40',
        'val-silver': '#8FA8BF',
        'val-plat': '#5C8CAD',
        'val-diamond': '#5B6EAD',
        'val-ascendant': '#2F8B5C',
        'val-immortal': '#B23A50',
        'val-radiant': '#FFFBA3',
      },
      fontFamily: {
        'valorant': ['"Tungsten"', '"Anton"', 'Impact', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 70, 85, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 70, 85, 0.7)' },
        },
        'slide-up': {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
