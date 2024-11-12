<template>
    <div class="flex flex-col justify-center items-center bg-color">
        <div class="w-full h-full overflow-hidden">
            <NuxtImg src="/image/ReferencePrice/bgRef.jpg" alt="bgRef" class="w-full h-full relative object-cover scale-110"/>
            <div class="absolute inset-0 z-10 flex flex-col items-center gap-2 lg:gap-5" style="margin-top: 10%;">
                <h1 class="text-white text-center text-2xl lg:text-5xl font-bold">Top Hospitality Furniture Manufacturer</h1>
                <p class="uppercase text-slate-300 text-center text-xs lg:text-lg tracking-widest">FROM FACTORY TO LUXURY HOTEL</p>
            </div>
        </div>
        <div class="w-full h-full flex flex-col lg:flex-row container mx-auto gap-5 p-5 lg:p-10">
            <div class="flex flex-col justify-center items-center w-full lg:w-1/2 gap-2 ">
                <h2 class="text-white text-center text-2xl lg:text-4xl font-extrabold">Furniture Collection</h2>
                <p class="text-justify text-gray-400 text-sm lg:text-base container mx-auto">Disclaimer: The furniture items below are from hotel furniture projects in the past. The price can not be exact due to confidential terms. The furniture designs belong to clients as their own projects. We do not repurpose or reuse their designs for any other projects. Our Company is only responsible for production as a manufacturer.</p>
            </div>
            <div class="w-full lg:w-1/2">
                <div class="lg:relative w-full ">
                    <div class="lg:absolute lg:inset-0 m-auto z-30 bg-white p-1 md:w-96 w-80 h-40 lg:h-72">
                        <NuxtImg src="/image/ReferencePrice/bgRef2.jpg" alt="bgRef" class="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.bg-color {
    background-color: #1a1a1a;
}
</style>
