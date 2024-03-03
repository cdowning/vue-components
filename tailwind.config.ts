import type { Config } from 'tailwindcss';

import colors from './colors';

export default {
    important: true,
    content: ['./src/components/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        // Using this for color palette in storybook
        colors: {
            yellow: colors.yellow,
            blush: colors.blush,
            teal: colors.teal,
            rose: colors.rose,
            green: colors.green,
            cream: colors.cream,
            gray: colors.gray,
            blue: colors.blue,
            purple: colors.purple,
        },
        fontFamily: {
            // https://tailwindcss.com/docs/font-family
            poppins: ['Poppins', '-apple-system', 'sans-serif'],
            lato: [
                'Lato',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            worksans: ['WorkSans', '-apple-system', 'sans-serif'],
            // Add Lobster?
            milkshake: ['Milkshake', '-apple-system', 'serif'],
        },
        // https://type-scale.com/ - Major Third (base 16px)
        fontSize: {
            xs: '0.64rem', // 10.24px
            sm: '0.8rem', // 12.80px
            base: '1rem', // based on 16px base
            md: '1.25rem', // 20.00px
            lg: '1.563rem', // 25.00px
            xl: '1.953rem', // 31.25px
            '2xl': '2.441rem', // 20.00px
            '3xl': '3.052rem', // 48.83px
            '4xl': '3.815rem', // 61.04px
        },

        extend: {},
    },
    safelist: [
        'border-solid',
        'border-dashed',
        'border-dotted',
        'border-double',
        'border-gray-20',
        'border-gray-30',
        'border-gray-40',
        {
            pattern: /(bg|text)-+/,
        },
    ],
    plugins: [],
} satisfies Config;
