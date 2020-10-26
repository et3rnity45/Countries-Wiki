const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      spacing: {
        7: '1.75rem',
      },
      fontSize: {
        xxs: '0.5rem',
      },
      colors: {
        lightwhite: '#f6f8fa',
        black: '#1a1e22',
        lightblack: '#26303c',
        darkgray: '#24292e',
        gray: '#6a737d',
        blue: '#0070f3',
        lightblue: '#c8e1ff',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  }
}
