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
                    <h2 class="text-white text-center text-2xl lg:text-4xl font-extrabold">{{ $t('app.desk.desk') }}</h2>
                    <p class="text-justify text-gray-400 text-sm lg:text-base container mx-auto">{{ $t('app.desk.deskDescription') }}</p>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="lg:relative w-full ">
                        <div class="lg:absolute lg:inset-0 m-auto z-30 bg-white p-1 md:w-96 w-80 h-40 lg:h-72">
                            <NuxtImg quality="75" loading="eager" src="/image/ReferencePrice/Table/Detail/title.jpg" alt="titleRef" class="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- See more -->
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><NuxtLink href="/referenceprice/bedBase">{{ $t('app.desk.table') }}</NuxtLink></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in bedBase" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.desk.hotel') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in cabinet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const bedBase = [
    {src: '/image/ReferencePrice/Table/Detail/table1.jpg', alt: 'table1'},
    {src: '/image/ReferencePrice/Table/Detail/table2.jpg', alt: 'table2'},
    {src: '/image/ReferencePrice/Table/Detail/table3.jpg', alt: 'table3'},
    {src: '/image/ReferencePrice/Table/Detail/table4.jpg', alt: 'table4'},
    {src: '/image/ReferencePrice/Table/Detail/table5.jpg', alt: 'table5'},
    {src: '/image/ReferencePrice/Table/Detail/table6.jpg', alt: 'table6'},
]
const cabinet = [
    {src: '/image/ReferencePrice/Table/Detail/desk1.jpg', alt: 'desk1'},
    {src: '/image/ReferencePrice/Table/Detail/desk2.jpg', alt: 'desk2'},
    {src: '/image/ReferencePrice/Table/Detail/desk3.jpg', alt: 'desk3'},
    {src: '/image/ReferencePrice/Table/Detail/desk4.jpg', alt: 'desk4'},
    {src: '/image/ReferencePrice/Table/Detail/desk5.jpg', alt: 'desk5'},
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