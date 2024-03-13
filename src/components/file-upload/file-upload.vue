<template>
    <div class="file-upload-container">
        <FileUpload
            ref="fileUpload"
            :url="url"
            :multiple="multiple"
            :accept="filesAllowed"
            :maxFileSize="maxFileSize"
            :auto="autoUpload"
            @select="selectedFiles"
            :pt="{
                root: { class: 'flex flex-col' },
                content: '!p-0 !border-none',
                buttonbar: { class: 'order-last hidden' },
            }"
            :ptOptions="{ mergeProps: true }"
        >
            <template #content="slotProps">
                <div class="flex flex-col">
                    <!-- {{ slotProps }} -->

                    <!-- Drag and Drop -->
                    <div
                        :class="dragClasses"
                        @click="fileUpload?.choose()"
                        @dragover="isDragOver = true"
                        @dragleave="isDragOver = false"
                        @drop="isDragOver = false"
                    >
                        <div class="mt-4 mb-0 text-inkwell-0">
                            Click or drag your files here
                        </div>
                    </div>
                </div>
            </template>
        </FileUpload>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import FileUpload from 'primevue/fileupload';

export interface Props {
    url: string;
    multiple?: boolean;
    filesAllowed?: string;
    maxFileSize?: number;
    autoUpload?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    url: '',
    multiple: true,
    filesAllowed: 'image/*',
    maxFileSize: null,
    autoUpload: false,
});

// Ref Elements
const fileUpload = ref(null);

// Ref Variables
const isDragOver = ref(false);

// Computed
const dragClasses = computed(() => {
    return [
        'flex flex-col items-center justify-center',
        'mt-8 border border-2 rounded border-dashed min-h-[320px] cursor-pointer',
        isDragOver.value
            ? 'bg-blue-10 border-blue-40'
            : 'bg-white border-gray-20',
    ];
});

// When a user selects files to upload from computer
const selectedFiles = (event: any) => {
    console.log(event);
};

const onDragOver = (event: any) => {
    console.log(event);
};
</script>
