/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            'sans': ['Helvetica', 'sans-serif'],
        },
        extend: {
            colors: {
                neutral: '#fcfefd',
                primary: '#978b3c',
                'primary-active': '#b6b989',
                'text-primary': '#16171b',
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
