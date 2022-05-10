const colors = require('tailwindcss/colors');
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: withOpacityValue('--color-primary'),
      secondary: withOpacityValue('--color-secondary'),
      blue: '#1fb6ff',
      transparent: 'transparent',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
