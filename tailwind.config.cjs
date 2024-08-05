const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        Nunito:["Nunito", 'sans-serif'],
        sail:["Sail", 'system-ui'],
        LilitaOne:["Lilita One", 'sans-serif'],
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        translateR:{
        
          "0%": {
            opacity: 0 ,
            translate: 7
          },
          "100%": {
            opacity: 1,
            translate: 0
          }
        },
        fadeIn:{
        
          "0%": {
            opacity: 0.1 ,
          },
          "100%": {
            opacity: 1,
          }
        },
        

        translateL:{
        
          "0%": {
            opacity: 0 ,
            translate:-7
          },
          "100%": {
            opacity: 1,
            translate: 0
          }
        },
        backgroundLinear: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite",
        fadeIn:"fadeIn 2s ease-out forwards",
        translateR:"translateR 3s ease-out forwards",
        translateL:"translateL 3s ease-out ",
        linear: 'backgroundLinear 3s linear infinite',
      },
      borderRadius:{
        extraLarge: '4rem'
      },
      boxShadow: {
        '3xl': '10px 8px 20px 15px rgba(0.2, 0.2, 0.2, 0.5)',
      }

    
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};

