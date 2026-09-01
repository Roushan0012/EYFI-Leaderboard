/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#141414',
          card: '#141414',
          alt: '#1C1C1C',
        },
        border: {
          DEFAULT: '#2A2A2A',
          subtle: '#2A2A2A',
        },
        accent: {
          DEFAULT: '#CFFF3D',
          lime: '#CFFF3D',
          dimmed: '#8FB82B',
        },
        text: {
          primary: '#F3F3EE',
          muted: '#8B8B85',
        },
        rank: {
          gold: '#E9C46A',
          silver: '#C9CBCF',
          bronze: '#C97C4A',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      borderRadius: {
        'card': '12px',
        'card-lg': '14px',
        'card-sm': '10px',
      },
      animation: {
        'float-slow': 'rupeeFloat 12s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        rupeeFloat: {
          '0%': { transform: 'translateY(105vh) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '0.12' },
          '85%': { opacity: '0.12' },
          '100%': { transform: 'translateY(-10vh) rotate(15deg)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
