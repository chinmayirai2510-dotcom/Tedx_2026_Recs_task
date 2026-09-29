/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ted-red': '#E62B1E',
        'ted-red-dark': '#B01E14',
        'ted-black': '#0A0A0A',
        'ted-charcoal': '#141414',
        'ted-white': '#FFFFFF',
        'ted-grey': {
          100: '#F5F5F5',
          300: '#BDBDBD',
          500: '#757575',
          700: '#333333',
          800: '#222222',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        body: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'red-radial': 'radial-gradient(circle at 50% 50%, rgba(230, 43, 30, 0.25) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.95) 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        'ted-glow': '0 0 35px -5px rgba(230, 43, 30, 0.45)',
        'ted-glow-sm': '0 0 15px 0px rgba(230, 43, 30, 0.3)',
      },
      maxWidth: {
        grid: '1280px',
      },
    },
  },
  plugins: [],
};
