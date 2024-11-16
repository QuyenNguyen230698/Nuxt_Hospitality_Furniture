<template>
    <div class="bg-black text-white">
        <div class="flex flex-col justify-center items-center bg-color">
            <div class="w-full h-full overflow-hidden">
                <NuxtImg quality="75" loading="eager" src="/image/ReferencePrice/bgRef.jpg" alt="bgRef" class="w-full h-full relative object-cover scale-110"/>
                <div class="absolute inset-0 z-10 flex flex-col items-center gap-2 p-5 lg:gap-5 mt-20 md:mt-32 lg:mt-40">
                    <h1 class="text-white text-center text-xl lg:text-5xl font-bold">{{ $t('app.referenceprice.top') }}</h1>
                    <p class="uppercase text-slate-300 text-center text-xs lg:text-lg tracking-widest">{{ $t('app.referenceprice.from') }}</p>
                </div>
            </div>
            <div class="w-full h-full flex flex-col lg:flex-row container mx-auto gap-5 p-5 lg:p-10">
                <div class="flex flex-col justify-center items-center w-full lg:w-1/2 gap-2 ">
                    <h2 class="text-white text-center text-2xl lg:text-4xl font-extrabold">{{ $t('app.bedding.bedding') }}</h2>
                    <p class="text-justify text-gray-400 text-sm lg:text-base container mx-auto">{{ $t('app.bedding.beddingDescription') }}</p>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="lg:relative w-full ">
                        <div class="lg:absolute lg:inset-0 m-auto z-30 bg-white p-1 md:w-96 w-80 h-40 lg:h-72">
                            <NuxtImg quality="75" loading="eager" src="/image/ReferencePrice/BedBase/Detail/titleRef.jpg" alt="titleRef" class="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- See more -->
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.bedding.king') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in bedBase" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.bedding.queen') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in cabinet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.bedding.bed') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in closet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const bedBase = [
    {src: '/image/ReferencePrice/BedBase/Detail/king1.jpg', alt: 'king1'},
    {src: '/image/ReferencePrice/BedBase/Detail/king2.jpg', alt: 'king2'},
    {src: '/image/ReferencePrice/BedBase/Detail/king3.jpg', alt: 'king3'},
    {src: '/image/ReferencePrice/BedBase/Detail/king4.jpg', alt: 'king4'},
    {src: '/image/ReferencePrice/BedBase/Detail/king5.jpg', alt: 'king5'},
    {src: '/image/ReferencePrice/BedBase/Detail/king6.jpg', alt: 'king6'},
    {src: '/image/ReferencePrice/BedBase/Detail/king7.jpg', alt: 'king7'},
    {src: '/image/ReferencePrice/BedBase/Detail/king8.jpg', alt: 'king8'},
    {src: '/image/ReferencePrice/BedBase/Detail/king9.jpg', alt: 'king9'},
    {src: '/image/ReferencePrice/BedBase/Detail/king10.jpg', alt: 'king10'},
    {src: '/image/ReferencePrice/BedBase/Detail/king11.jpg', alt: 'king11'},
    {src: '/image/ReferencePrice/BedBase/Detail/king12.jpg', alt: 'king12'},
]
const cabinet = [
    {src: '/image/ReferencePrice/BedBase/Detail/queen1.jpg', alt: 'queen1'},
    {src: '/image/ReferencePrice/BedBase/Detail/queen2.jpg', alt: 'queen2'},
    {src: '/image/ReferencePrice/BedBase/Detail/queen3.jpg', alt: 'queen3'},
    {src: '/image/ReferencePrice/BedBase/Detail/queen4.jpg', alt: 'queen4'},
    {src: '/image/ReferencePrice/BedBase/Detail/queen5.jpg', alt: 'queen5'},
    {src: '/image/ReferencePrice/BedBase/Detail/queen6.jpg', alt: 'queen6'},
]
const closet = [
    {src: '/image/ReferencePrice/BedBase/Detail/bed1.jpg', alt: 'bed1'},
    {src: '/image/ReferencePrice/BedBase/Detail/bed2.jpg', alt: 'bed2'},
    {src: '/image/ReferencePrice/BedBase/Detail/bed3.jpg', alt: 'bed3'},
    {src: '/image/ReferencePrice/BedBase/Detail/bed4.jpg', alt: 'bed4'},
]
</script>

<style scoped>
.bg-cate {
    background-image: url('/image/ReferencePrice/bgRef3.png');
}
.bg-color {
    background-color: #1C1C1C;
}
</style>