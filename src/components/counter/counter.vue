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

const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: number): void;
}>();

const updateCount = (increment: number): number => {
    const newValue = props.modelValue + increment;
    // If current model value is less than or equal to 0, emit 0
    emit('update:modelValue', newValue < 0 ? 0 : newValue);

    // Return new value
    return newValue;
};
</script>
