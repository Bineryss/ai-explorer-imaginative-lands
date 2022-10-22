/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            'sans': ['Helvetica', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#50A7D9',
                secondary: '#8383BE',
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
