<template>
    <span
        v-if="icon"
        :class="[
            'icon',
            'icon-' + icon,
            { [`text-${color}`]: color },
            { [`icon-${size}`]: size },
        ]"
        @mouseover="setHover(true)"
        @mouseleave="setHover(false)"
    >
        <svg :class="['svg-icon']" :width="width" :height="height">
            <use
                v-bind="{
                    href: iconPath,
                }"
            />
        </svg>
    </span>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import SvgSprite from '@/assets/sprite/sprite.svg';

export interface Props {
    icon: string;
    width?: number;
    height?: number;
    size?: string;
    color?: string;
    hoverColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: '',
    width: 20,
    height: 20,
    size: 'md',
    color: '',
    hoverColor: '',
});

const hoverState = ref(false);

const iconPath = computed<string>(() => {
    return `${SvgSprite}#${props.icon}`;
});

const iconColor = computed<string>(() => {
    if (!hoverState.value && !props.hoverColor) {
        return `${props.color}`;
    } else {
        return `${props.hoverColor}`;
    }
});

const setHover = (value: boolean) => {
    hoverState.value = value;
};
</script>
<style src="./icon.scss" lang="scss" scoped></style>
