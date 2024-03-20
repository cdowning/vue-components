import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';

import '../src/assets/scss/fonts.scss';

// https://storybook.js.org/recipes/tailwindcss
// import '../src/assets/scss/tailwind.scss';

import PrimeVue from 'primevue/config';
import PrimeVuePresets from '../src/presets';

import Icon from '../src/components/icon/icon.vue';

setup((app) => {
    app.component('Icon', Icon);

    app.use(PrimeVue, {
        unstyled: true,
        pt: PrimeVuePresets,
    });
});

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'White',
            values: [
                {
                    name: 'White',
                    value: '#ffffff',
                },
                {
                    name: 'Light Gray',
                    value: '#f4f4f4',
                },
            ],
        },
    },
};

export default preview;
