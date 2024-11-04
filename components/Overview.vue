<template>
    <div class="bg-overview flex flex-col w-full h-full p-0 py-6">
        <div class="text-center ">
            <h2 class="text-center text-5xl font-bold p-6 text-white">Product Manufacturing Overview</h2>
            <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
        </div>
        <div class="flex flex-col md:flex-row w-full h-full">
            <div class="items-center justify-center w-1/3 h-full hidden md:flex">
                <h2 class="text-white text-2xl font-bold">Playlist Desktop</h2>
            </div>
            <div class="flex items-center justify-center w-full h-full md:w-2/3">
                <h2 class="text-white text-2xl font-bold">Screens</h2>
            </div>
            <div class="flex items-center justify-center w-full h-full md:hidden">
                <h2 class="text-white text-2xl font-bold">Playlist Mobile</h2>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bg-overview {
    background-color: #0D0E12;
}
</style>