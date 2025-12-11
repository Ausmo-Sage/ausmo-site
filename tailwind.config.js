/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Ausmo Brand Colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#f5f0fc',
          100: '#e8d9f5',
          200: '#d4b8ea',
          300: '#b88dd8',
          400: '#9b5fc2',
          500: '#CDB8E8', // Soft Purple
          600: '#9B7BD6', // Deep Purple (dark mode)
          700: '#7d5fb3',
          800: '#684d96',
          900: '#57417a',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: '#f0f8fd',
          100: '#d4e9fa',
          200: '#b8d8f5',
          300: '#8cc0ed',
          400: '#5ba3e3',
          500: '#A8D5F7', // Sky Blue
          600: '#6BA8E5', // Electric Blue (dark mode)
          700: '#4d7db8',
          800: '#416495',
          900: '#3a5477',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          50: '#fef9f0',
          100: '#fdf0d9',
          200: '#fbe0b8',
          300: '#f8c88a',
          400: '#f4a95c',
          500: '#F9D7A8', // Warm Peach
          600: '#E8B86D', // Golden (dark mode)
          700: '#d19a4f',
          800: '#ad7d42',
          900: '#8f6738',
        },
        lavender: {
          DEFAULT: 'var(--color-lavender)',
          50: '#f5f2fc',
          100: '#e8dff7',
          200: '#d4c2ef',
          300: '#b89de3',
          400: '#9b73d4',
          500: '#B8A3E8',
          600: '#7B68C4', // Dark Lavender (dark mode)
          700: '#6b5ba8',
          800: '#5a4d8c',
          900: '#4a4072',
        },
        'powder-blue': {
          DEFAULT: 'var(--color-powder-blue)',
          50: '#f0f7fc',
          100: '#d4e7f7',
          200: '#b8d5f0',
          300: '#8cb8e5',
          400: '#5a96d6',
          500: '#D4E7F7',
          600: '#4A6B8A', // Deep Blue (dark mode)
          700: '#3d5673',
          800: '#35485f',
          900: '#2d3c4f',
        },
        cream: {
          DEFAULT: 'var(--color-cream)',
          50: '#fffdf9',
          100: '#fff9f0',
          200: '#fff2e0',
          300: '#ffe6c8',
          400: '#ffd4a8',
          500: '#FFF4E6',
          600: '#C9A876', // Warm Beige (dark mode)
          700: '#b8945f',
          800: '#9a7a4f',
          900: '#7f6442',
        },
        // Keep existing gray scale for compatibility
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
