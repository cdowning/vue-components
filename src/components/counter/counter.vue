<template>
    <div class="counter flex items-center border border-gray-20 rounded-lg">
        <button
            class="btn p-4 border-r border-gray-20"
            @click="updateCount(-1)"
        >
            -
        </button>
        <span class="grow text-center">{{ modelValue }}</span>
        <button
            class="btn p-4 border-l border-gray-20"
            @click="updateCount(+1)"
        >
            +
        </button>
    </div>
</template>

<script lang="ts" setup>
export interface Props {
    modelValue: number;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: 0,
});

const emit = defineEmits(['update:modelValue']);

const updateCount = (increment: number): number => {
    // If current model value is less than or equal to 0, do not do anything
    if (props.modelValue <= 0) return;

    const newValue = props.modelValue + increment;
    emit('update:modelValue', newValue);

    // Return new value
    return newValue;
};
</script>
