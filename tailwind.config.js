/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030305", // Deepest black/blue
        surface: "#0F0F12", // High-end dark gray
        primary: "#2563EB", // Royal Blue
        secondary: "#7C3AED", // Deep Purple
        accent: "#06B6D4", // Cyan
        "text-primary": "#FFFFFF",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #2563EB, 0 0 20px #2563EB' },
          'to': { boxShadow: '0 0 20px #2563EB, 0 0 30px #2563EB' },
        }
      }
    },
  },
  plugins: [],
}
