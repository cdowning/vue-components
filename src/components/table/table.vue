<template>
    <div class="table-container">
        <DataTable :value="data">
            <Column
                v-for="col of columns"
                :key="col.field"
                :field="col.field"
                :header="col.header"
                :sortable="sortable"
            ></Column>
        </DataTable>
    </div>
</template>

<script lang="ts" src="./table.ts"></script>
<style lang="scss" src="./table.scss"></style>
