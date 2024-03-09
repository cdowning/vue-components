import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import PrimeVuePresets from '../src/presets';

import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true,
    pt: PrimeVuePresets,
});

// Initialize Vue app.
app.mount('#app');
