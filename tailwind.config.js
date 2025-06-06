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
        'brand-crayola': '#2B6AEF',
        'brand-sky': '#1EC6F7',
        'brand-sea': '#20C9AB',
        'brand-aqua': '#32EFBF',
        'brand-sunflower': '#FFBD12',
        'brand-gunmetal': '#2A2C35',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2B6AEF 0%, #1EC6F7 25%, #20C9AB 50%, #32EFBF 100%)',
        'brand-gradient-reverse': 'linear-gradient(135deg, #32EFBF 0%, #20C9AB 25%, #1EC6F7 50%, #2B6AEF 100%)',
        'sea-aqua-gradient': 'linear-gradient(135deg, #20C9AB 0%, #32EFBF 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'count-up': 'count-up 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(43, 106, 239, 0.3)',
        'glow-sunflower': '0 0 20px rgba(255, 189, 18, 0.3)',
      },
    },
  },
  plugins: [],
}