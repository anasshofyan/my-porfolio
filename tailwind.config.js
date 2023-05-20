module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                ansomarfa: {
                    yellow: '#FEC110',
                    dark: '#5B5B5B',
                    light: '#F6F9FC',
                    gray: 'C6C6C6'
                }
            },
            fontFamily: {
                'sans': ['sans-serif', 'Rubik'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}