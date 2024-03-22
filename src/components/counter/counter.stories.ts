import type { Args, Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import Counter from './counter.vue';

const meta: Meta<typeof Counter> = {
    title: 'Components/Counter',
    component: Counter,
    argTypes: {
        modelValue: {
            control: 'number',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    name: 'Basic Counter',
    render: (args: Args) => ({
        components: { Counter },
        setup() {
            const count = ref(0);
            return { args, count };
        },
        template: `<Counter v-model="args.modelValue" v-bind="args" />`,
    }),
    args: {
        modelValue: 0,
    },
} satisfies Story;
