/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        'ink-2': '#1A1A1A',
        gold: '#D4A017',
        'gold-light': '#E5B93F',
        cream: '#F8F7F4',
        mist: '#F1F1EF',
        body: '#222222',
        muted: '#555555',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.7' }],
      },
      boxShadow: {
        nav: '0 8px 30px rgba(0,0,0,0.08)',
        card: '0 12px 40px rgba(0,0,0,0.08)',
        lift: '0 18px 40px rgba(17,17,17,0.12)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
