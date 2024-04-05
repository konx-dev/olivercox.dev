import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      primary: ['var(--font-inter)']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1085px'
    },
    colors: {
      black: {
        500: '#A1A1A1',
        700: '#333333',
        900: '#000000'
      },
      white: {
        100: '#FFFFFF',
        500: '#F2F2F2',
        700: '#EDEDED'
      },
      blue: {
        300: '#4AC1D2',
        500: '#21A6B6'
      },
      red: {
        300: '#D54D38',
        500: '#B63121'
      }
    },
    extend: {
      fontSize: {
        /* Body - Size: 14px → 16px | Leading: 20px → 22px */
        body: [
          'clamp(0.875rem, 0.8227rem + 0.2614vi, 1rem)',
          {
            lineHeight: 'clamp(1.25rem, 1.1977rem + 0.2614vi, 1.375rem)'
          }
        ],
        /* Heading (sm) - Size: 16px → 18px | Leading: 20px → 24px */
        'heading-sm': [
          'clamp(1rem, 0.9477rem + 0.2614vi, 1.125rem)',
          {
            lineHeight: 'clamp(1.25rem, 1.1454rem + 0.5229vi, 1.5rem)'
          }
        ],
        /* Heading (md) - Size: 16px → 22px | Leading: 20px → 28px */
        'heading-md': [
          'clamp(1rem, 0.8431rem + 0.7843vi, 1.375rem)',
          {
            lineHeight: 'clamp(1.25rem, 1.0408rem + 1.0458vi, 1.75rem)'
          }
        ],
        /* Heading (lg) - Size: 18px → 24px | Leading: 24px → 30px */
        'heading-lg': [
          'clamp(1.125rem, 0.9681rem + 0.7843vi, 1.5rem)',
          {
            lineHeight: 'clamp(1.5rem, 1.3431rem + 0.7843vi, 1.875rem)'
          }
        ],
        /* Heading (xl) - Size: 28px → 36px | Leading: 34px → 40px */
        'heading-xl': [
          'clamp(1.75rem, 1.5408rem + 1.0458vi, 2.25rem)',
          {
            lineHeight: 'clamp(2.125rem, 1.9681rem + 0.7843vi, 2.5rem)'
          }
        ],
        /* Heading (xxl) - Size: 32px → 56px | Leading: 38px → 60px */
        'heading-xxl': [
          'clamp(2rem, 1.4783rem + 2.6087vi, 3.5rem)',
          {
            lineHeight: 'clamp(2.375rem, 1.8967rem + 2.3913vi, 3.75rem)'
          }
        ]
      }
    }
  },
  plugins: []
};
export default config;
