import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      backgroundColor: {
        primary: 'var(--bg-color-primary)',
        secondary: 'var(--bg-color-secondary)',
      }
    },
  },
  plugins: [],
} satisfies Config

