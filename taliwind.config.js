export default {
  theme: {
    extend: {
      keyframes: {
        waveScrollX: {
          "0%": { backgroundPositionX: '0' },
          "100%": { backgroundPositionX: '100%' },
        },
      },
      animation: {
        'wave-scroll-x': 'waveScrollX 2s linear infinite',
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
z