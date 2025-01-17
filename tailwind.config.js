/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./docs/**/*.{html,js}'],
    theme: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: ['night', 'light']
    }
};
