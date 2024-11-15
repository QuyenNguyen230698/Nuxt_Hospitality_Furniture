<template>
    <div>
        <h1>Process</h1>
        <h2>{{ id }}</h2>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped>

</style>