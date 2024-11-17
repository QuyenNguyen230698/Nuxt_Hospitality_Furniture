<template>
    <div class="flex flex-col justify-center items-center bg-color">
        <div class="w-full h-full overflow-hidden">
            <NuxtImg quality="75" loading="eager" aria-label="bgref" src="/image/ReferencePrice/bgRef.jpg" alt="bgRef" class="w-full h-full relative object-cover scale-110"/>
            <div class="absolute inset-0 z-10 flex flex-col items-center gap-2 p-5 lg:gap-5 mt-20 md:mt-32 lg:mt-40">
                <h1 class="text-white text-center text-xl lg:text-5xl font-bold">{{ $t('app.referenceprice.top') }}</h1>
                <p class="uppercase text-slate-300 text-center text-xs lg:text-lg tracking-widest">{{ $t('app.referenceprice.from') }}</p>
            </div>
        </div>
        <div class="w-full h-full flex flex-col lg:flex-row container mx-auto gap-5 p-5 lg:p-10">
            <div class="flex flex-col justify-center items-center w-full lg:w-1/2 gap-2 ">
                <h2 class="text-white text-center text-2xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.collection') }}</h2>
                <p class="text-justify text-gray-400 text-sm lg:text-base container mx-auto">{{ $t('app.referenceprice.collectionDescription') }}</p>
            </div>
            <div class="w-full lg:w-1/2">
                <div class="lg:relative w-full ">
                    <div class="lg:absolute lg:inset-0 m-auto z-30 bg-white p-1 md:w-96 w-80 h-40 lg:h-72">
                        <NuxtImg quality="75" loading="eager" aria-label="bgref" src="/image/ReferencePrice/bgRef2.jpg" alt="bgRef" class="w-full h-full object-cover"/>
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
