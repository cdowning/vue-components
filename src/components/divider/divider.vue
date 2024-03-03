<template>
    <div
        class="divider relative flex items-center w-full h-full"
        :class="[layout === 'vertical' ? 'flex-col' : '']"
    >
        <div
            class="flex-grow"
            :class="[
                'border-' + borderStyle,
                'border-' + borderColor,
                isVertical ? 'border-r' : 'border-t',
            ]"
        />

        <div
            v-if="hasTextSlot"
            :class="[
                'flex-shrink flex items-center px-4',
                { 'order-first': alignment === 'left' },
                { 'order-last': alignment === 'right' },
            ]"
        >
            <slot />
        </div>

        <div
            class="flex-grow"
            :class="[
                'border-' + borderStyle,
                'border-' + borderColor,
                isVertical ? 'border-r' : 'border-t',
            ]"
        />
    </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';

export interface Props {
    borderStyle?: string;
    borderColor?: string;
    layout?: string;
    alignment?: string;
}

const props = withDefaults(defineProps<Props>(), {
    borderStyle: 'solid',
    borderColor: 'gray-50',
    layout: 'horizontal',
    alignment: 'center',
});

const slots = useSlots();

const hasTextSlot = computed(() => {
    return !!slots.default;
});

const isVertical = computed(() => {
    return props.layout === 'vertical';
});
</script>
