<template>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="selected"
            :options="options"
            :aria-labelledby="labelBy"
            :multiple="allowMultiple"
            :optionLabel="optionLabel"
            :optionDisabled="optionDisabled"
            :disabled="disabled"
        >
            <template #option="{ option }">
                <div class="flex align-items-center">
                    <Icon
                        v-if="option.icon"
                        :icon="option.icon"
                        class="mr-2"
                        size="sm"
                    />
                    <span class="option-label">
                        <!-- {{ typeof option === 'object' ? option.label : option }} -->
                        {{ option.label || option }}
                    </span>
                </div>
            </template>
        </SelectButton>
    </div>
</template>

<!-- <script lang="ts" src="./button-group.ts"></script> -->
<script lang="ts" setup>
import { computed } from 'vue';
import SelectButton from 'primevue/selectbutton';

interface Options {
    label: string;
    value: string | number;
    isDisabled?: boolean;
    icon?: string;
}

export interface Props {
    modelValue?: string | Object | Array<Options>;
    options?: Array<string | Options>;
    optionLabel?: string;
    optionDisabled?: string;
    labelBy?: string;
    allowMultiple?: boolean;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: null,
    options: () => [],
    optionLabel: '',
    optionDisabled: '',
    labelBy: '',
    allowMultiple: false,
    disabled: false,
});

const emit = defineEmits(['update:modelValue']);

const selected = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});

const onClick = (event) => {
    console.log(event);
    // emit("click", 1);
};
</script>

<style lang="scss" src="./button-group.scss"></style>
