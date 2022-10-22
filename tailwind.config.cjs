/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            'sans': ['Helvetica', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#94A89A',
                secondary: '#C7AC92',
            },
            fontFamily: {
                headline: ['Elianto', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            container: {
                padding: '2rem',
                center: true,
            },
        },
    },
    plugins: [],
}
