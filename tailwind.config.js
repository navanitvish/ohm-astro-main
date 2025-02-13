/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'twinkle': 'twinkle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'rotate': 'rotate 10s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-slow': 'pulse 4s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-text': 'gradient-text 5s ease infinite',
         'spinSlow': "spin 3s linear infinite", // Slow spinner
         'spin-slow': 'spin 3s linear infinite',
         'orbit': 'orbit 4s linear infinite',
        
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(3rem) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(3rem) rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 0.2 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'gradient-text': {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': { 
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    }
  },
  plugins: [],
}