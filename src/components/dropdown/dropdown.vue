<template>
    <div class="dropdown-container">
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
                    <q-icon v-if="value.icon" :icon="value.icon" class="mr-2" />
                    <div>{{ value[optionLabel] }}</div>
                </div>
                <span v-else>
                    {{ placeholder }}
                </span>
            </template>

            <!-- Dropdown Options (slotProps - option & index) -->
            <template #option="{ option }">
                <div class="flex align-items-center">
                    <q-icon
                        v-if="option.icon"
                        :icon="option.icon"
                        class="mr-2"
                    />

                    <div>{{ option[optionLabel] }}</div>
                </div>
            </template>

            <template #dropdownicon="slotProps">
                <q-icon
                    icon="chevron-down"
                    type="line"
                    :class="slotProps.class"
                    size="sm"
                />
            </template>

            <!-- What shows if no results are found -->
            <template #emptyfilter> {{ noResultsMessage }} </template>

            <!-- <template #filtericon>
                <q-icon
                    icon="search"
                    type="line"
                    color="gray-40"
                    class="search-icon absolute top-4 left-4 -mt-2"
                    size="md"
                />
            </template> -->
            <!-- <template #header> Header </template> -->
        </Dropdown>
    </div>
</template>

<script src="./dropdown.ts" lang="ts"></script>
<style lang="scss" src="./dropdown.scss" scoped></style>
