/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          darkest: '#07150f',
          dark: '#0c221a',
          DEFAULT: '#123326',
          light: '#1b4a37',
        },
        agri: {
          50: '#f2faf6',
          100: '#e1f5eb',
          200: '#bce6d4',
          300: '#8ed1b5',
          400: '#5ab591',
          500: '#349b74',
          600: '#257d5c',
          700: '#1e644a',
          800: '#1a4f3c',
          900: '#164233',
          950: '#0a231b',
        },
        clay: {
          50: '#fef8f2',
          100: '#faebd7',
          200: '#f6d3af',
          300: '#f0b580',
          400: '#e99257',
          500: '#d97736',
          600: '#b85923',
          700: '#94421b',
          800: '#77351c',
          900: '#622d1b',
        },
        cream: {
          50: '#fdfcf9',
          100: '#f8f6f0',
          200: '#f0ede0',
          300: '#e4deca',
          400: '#d3c9ad',
          500: '#bfb18f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(52, 155, 116, 0.25)',
        'glow-md': '0 0 25px -5px rgba(52, 155, 116, 0.35)',
        'glow-lg': '0 0 40px -10px rgba(52, 155, 116, 0.45)',
        'glow-clay': '0 0 25px -5px rgba(217, 119, 54, 0.35)',
        'glass': '0 8px 32px 0 rgba(14, 38, 29, 0.08)',
        'card': '0 2px 10px -2px rgba(18, 51, 38, 0.06), 0 10px 25px -5px rgba(18, 51, 38, 0.04)',
        'card-hover': '0 12px 30px -5px rgba(18, 51, 38, 0.12), 0 4px 12px -2px rgba(18, 51, 38, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scanLine 2.5s ease-in-out infinite',
        'ripple': 'ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.88, transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanLine: {
          '0%': { top: '0%', opacity: 0.8 },
          '50%': { top: '95%', opacity: 1 },
          '100%': { top: '0%', opacity: 0.8 },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2.2)', opacity: 0 },
        },
      }
    },
  },
  plugins: [],
}
