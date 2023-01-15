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
                primary: '#F2CB05',
                'primary-active': '#AD9244',
                'text-primary': '#16171b',
                'sky-blue': '#7BD5FA',
                'link': '#c0c1c3',
            },
            fontFamily: {
                headline: ['Elianto', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            margin: {
                'nav-bar': '72px',
            },
            height: {
                'nav-bar': '72px',
            },
            container: {
                padding: '2rem',
                center: true,
            },
        },
    },
    plugins: [],
}
