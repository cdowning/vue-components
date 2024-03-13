<template>
    <div class="select-container relative">
        <Dropdown
            v-model="selected"
            :options="options"
            :option-label="optionLabel"
            :placeholder="placeholder"
            :filter="searchable"
            :empty-message="noResultsMessage"
            :empty-filter-message="noResultsMessage"
            @change="onChange"
            @filter="onFilter($event)"
            class="w-full md:w-14rem"
        >
            <!-- Selected Value -->
            <template #value="{ value, placeholder }">
                <!-- If dropdown has a value -->
                <div v-if="value" class="flex align-items-center">
                    <Icon v-if="value.icon" :icon="value.icon" class="mr-2" />
                    <div>{{ value[optionLabel] }}</div>
                </div>
                <span v-else>
                    {{ placeholder }}
                </span>
            </template>
        </Dropdown>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import Dropdown from 'primevue/dropdown';

export interface Props {
    modelValue?: number | string | Object;
    options?: any[];
    optionLabel?: string;
    placeholder?: string;
    searchable?: boolean;
    noResultsMessage?: string;
}

const props = withDefaults(defineProps<Props>(), {
    options: () => [],
    optionLabel: 'label',
    placeholder: '',
    searchable: true,
    noResultsMessage: 'No results found',
});

const emit = defineEmits(['update:model-value']);

// Computed
const selected = computed({
    get: () => props.modelValue,
    set: (value) => {
        console.log(value);
        emit('update:model-value', value);
    },
});

// Methods
const onChange = (value) => {
    console.log('onChange value', value);
};
const onFilter = (value) => {
    console.log('onFilter value', value);
};
</script>
