import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gillsans : ['Gill Sans', 'sans-serif'],
    },
      fontSize: {
        '62': '62px', // Mobile Header Large
        '42': '42px', // Mobile Header Medium
        '18': '18px', // Mobile Body Large | LOGO
        '14': '14px', // Mobile Body Medium
        '84': '84px', // Desktop Header Large
        '58': '58px', // Desktop Header Medium
        '28': '28px', // Desktop Body Large | LOGO
        '20': '20px', // Desktop Body Medium
  },
      spacing: {
        xs: '20px',
        sm: '40px',
        md: '60px',
        lg: '70px',
        xl: '32px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-logo': {
          fontFamily: 'Gill Sans, sans-serif',
          fontSize: '18px',
          fontWeight: '700', // Bold
        },
        '.text-header-lg': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '62px',
          fontWeight: '700', // Bold
        },
        '.text-header-md': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '42px',
          fontWeight: '700', // Bold
        },
        '.text-body-lg': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '18px',
          fontWeight: '500', // Medium
        },
        '.text-body-md': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '14px',
          fontWeight: '500', // Medium
        },
        '.text-logo-desktop': {
          fontFamily: 'Gill Sans, sans-serif',
          fontSize: '28px',
          fontWeight: '700', // Bold
        },
        '.text-header-lg-desktop': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '84px',
          fontWeight: '700', // Bold
        },
        '.text-header-md-desktop': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '58px',
          fontWeight: '700', // Bold
        },
        '.text-body-lg-desktop': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '28px',
          fontWeight: '500', // Medium
        },
        '.text-body-md-desktop': {
          // fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '20px',
          fontWeight: '500', // Medium
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
export default config

