/** @type {import('tailwindcss').Config} */
export default {
  mode : 'jit',
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { backgroundImage: {
      'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
    },
    backgroundSize:{
     '200':'200%',
    },
    keyframes: {
      disco: {
        '0%': { transform: 'translateY(-50%) rotate(0deg)' },
        '100%': { transform: 'translateY(-50%) rotate(360deg)' },
      },
      gradient:{
        '0%, 100%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
      }
     
    },
 
    animation: {
      disco: 'disco 1.5s linear infinite',
      gradient: 'gradient 15s ease infinite',
    },
  },
  },
  plugins: [],
}

