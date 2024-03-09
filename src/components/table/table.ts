// Primevue Datatable:
//  https://primevue.org/datatable/

// Primevue Tailwind:
// tailwind.primevue.org/datatable/

import { defineComponent } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const Table = defineComponent({
    name: 'Table',
    components: {
        DataTable,
        Column,
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        columns: {
            type: Array,
            default: () => [],
        } as any,
        sortable: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup() {
        return {};
    },
});

export default Table;
