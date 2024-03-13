import type { Args, Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import FileUpload from './file-upload.vue';

const meta: Meta<typeof FileUpload> = {
    title: 'Components/File Upload',
    component: FileUpload,
    argTypes: {
        url: {
            control: 'text',
        },
        multiple: {
            control: 'boolean',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
    name: 'File Upload',
    render: (args: Args) => ({
        components: { FileUpload },
        setup() {
            return { args };
        },
        template: `<FileUpload v-bind="args" />`,
    }),
    args: {
        url: '/api/upload',
        multiple: true,
    },
} satisfies Story;
