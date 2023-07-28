/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
            },
        },
        colors: {
            main: '#ab3637',
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            red: colors.red,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
    },
    plugins: [],
}
