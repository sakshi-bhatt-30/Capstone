module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'yellow',
          },
        },
      },
      animation: {
        typing: 'typing 5s steps(31, end) ', // Plays once and holds position
        // blink: 'blink 0.7s step-end infinite', // Optional cursor blink
      },
      colors: {
        yellow: {
          400: '#B3DA65',
        },
      },
    },
  },
  plugins: [],
};
