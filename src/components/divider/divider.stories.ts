import type { Args, Meta, StoryObj } from '@storybook/vue3';

import Divider from './divider.vue';

const borders = ['solid', 'dashed', 'dotted', 'double'];
const colors = ['gray-20', 'gray-30', 'gray-40'];
const layout = ['vertical', 'horizontal'];
const alignments = ['left', 'center', 'right'];

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    argTypes: {
        borderStyle: {
            control: 'select',
            options: borders,
        },
        borderColor: {
            control: 'select',
            options: colors,
        },
        layout: {
            control: 'select',
            options: layout,
        },
        alignment: {
            control: 'select',
            options: alignments,
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    name: 'Default',
    render: (args: Args) => ({
        components: { Divider },
        setup() {
            return { args };
        },
        template: `<div class="w-full mx-auto" :class="[args.layout === 'vertical' ? 'h-40 flex' : '']">
            <Divider v-bind="args">
                <span class="text-gray-30 font-poppins">Center</span>
            </Divider>
            <p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>`,
    }),
    args: {
        borderStyle: 'solid',
        borderColor: 'gray-20',
        layout: 'horizontal',
    },
} satisfies Story;

export const NoText = {
    render: (args: Args) => ({
        components: { Divider },
        setup() {
            return { args };
        },
        template: `<div class="w-full">
            <Divider v-bind="args" />
        </div>`,
    }),
    args: {
        borderStyle: 'solid',
        borderColor: 'gray-40',
    },
} satisfies Story;
