/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '448px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            backgroundImage: {
                auth: "url('/src/assets/auth-bg.jpg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            colors: {
                primary: 'rgb(var(--primary) / <alpha-value>)',
                secondary: 'rgb(var(--secondary) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
                content: 'rgb(var(--content) / <alpha-value>)',
                background: 'rgb(var(--background) / <alpha-value>)',
                edge: 'rgb(var(--edge) / <alpha-value>)',
            },
        },
    },
    plugins: [],
});
