<template>
    <div>
        <ClientOnly>
            <Header />
            <slot />
            <Footer />
            <ButtonScrollToTop/>
        </ClientOnly>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>