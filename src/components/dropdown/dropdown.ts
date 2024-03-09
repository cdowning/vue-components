import { defineComponent, computed } from 'vue';

import Dropdown from 'primevue/dropdown';

const QDropdown = defineComponent({
    name: 'QDropdown',
    components: {
        Dropdown,
    },
    props: {
        modelValue: {
            type: [Number, Object, String],
            default: '',
        },
        options: {
            type: Array,
            default: () => [],
        },
        /** The value that is displayed in the dropdown */
        optionLabel: {
            type: String,
            default: 'label',
        },
        // optionValue: {
        //     type: String,
        //     default: '',
        // },
        // optionDisabled: {
        //     type: String,
        //     default: '',
        // },
        // optionGroupLabel: {
        //     type: String,
        //     default: '',
        // },
        // optionGroupChildren: {
        //     type: String,
        //     default: '',
        // },
        placeholder: {
            type: String,
            default: '',
        },
        searchable: {
            type: Boolean,
            default: true,
        },
        noResultsMessage: {
            type: String,
            default: 'No results found',
        },
    },
    emits: ['update:model-value'],
    setup(props, { emit }) {
        // Selected value
        const selected = computed({
            get: () => props.modelValue,
            set: (value) => {
                console.log(value);
                emit('update:model-value', value);
            },
        });

        // methods
        const onChange = (value) => {
            console.log('onChange value', value);
        };
        const onFilter = (value) => {
            console.log('onFilter value', value);
        };

        return {
            selected,

            onChange,
            onFilter,
        };
    },
});

export default QDropdown;
