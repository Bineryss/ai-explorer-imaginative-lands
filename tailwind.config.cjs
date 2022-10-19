/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#8099e9',
                secondary: '#e99dcb',
            },
            fontFamily: {
                headline: ['Elianto'],
            },
        },
    },
    plugins: [],
}
