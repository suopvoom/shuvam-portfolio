/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          dark: '#0c0f17',         // Deep charcoal navy base
          'dark-card': '#131826',    // Elevated card surface
          'dark-elevated': '#192033',// Hover surface
          'dark-border': '#1e263c',  // Subtle border
          'dark-muted': '#28334d',   // Secondary border/subtle divider
          light: '#f8fafc',        // Crisp slate-50 base
          'light-card': '#ffffff',   // Elevated card surface
          'light-elevated': '#f1f5f9', // Hover surface
          'light-border': '#e2e8f0', // Light border
          'light-muted': '#cbd5e1',  // Subtle light divider
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Warm amber / refined gold primary accent
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'amber-soft': '0 4px 20px -2px rgba(245, 158, 11, 0.15)',
        'amber-glow': '0 0 30px -5px rgba(245, 158, 11, 0.25)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
