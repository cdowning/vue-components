import { defineComponent, computed } from 'vue';

defineComponent({
    name: 'Divider',
    props: {
        /** Border style */
        borderStyle: {
            type: String,
            default: 'solid',
        },
        /** Border color */
        borderColor: {
            type: String,
            default: 'gray-20',
        },
        layout: {
            type: String,
            default: 'horizontal',
        },
    },
    emits: ['update:modelValue'],
    setup(_, { slots }) {
        const hasSlotContent = computed<boolean>(() => !!slots.default);

        return {
            hasSlotContent,
        };
    },
});

export type DividerType = typeof Divider;
export default Divider;
