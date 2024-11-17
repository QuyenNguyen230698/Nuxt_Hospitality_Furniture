<template>
    <div class="bg-black text-white">
        <div class="flex flex-col justify-center items-center bg-color">
            <div class="w-full h-full overflow-hidden">
                <NuxtImg quality="75" loading="eager" src="/image/ReferencePrice/bgRef.jpg" alt="bgRef" aria-label="bgRef" class="w-full h-full relative object-cover scale-110"/>
                <div class="absolute inset-0 z-10 flex flex-col items-center gap-2 p-5 lg:gap-5 mt-20 md:mt-32 lg:mt-40">
                    <h1 class="text-white text-center text-xl lg:text-5xl font-bold">{{ $t('app.referenceprice.top') }}</h1>
                    <p class="uppercase text-slate-300 text-center text-xs lg:text-lg tracking-widest">{{ $t('app.referenceprice.from') }}</p>
                </div>
            </div>
            <div class="w-full h-full flex flex-col lg:flex-row container mx-auto gap-5 p-5 lg:p-10">
                <div class="flex flex-col justify-center items-center w-full lg:w-1/2 gap-2 ">
                    <h2 class="text-white text-center text-2xl lg:text-4xl font-extrabold">{{ $t('app.vanity.vanity') }}</h2>
                    <p class="text-justify text-gray-400 text-sm lg:text-base container mx-auto">{{ $t('app.vanity.vanityDescription') }}</p>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="lg:relative w-full ">
                        <div class="lg:absolute lg:inset-0 m-auto z-30 bg-white p-1 md:w-96 w-80 h-40 lg:h-72">
                            <NuxtImg quality="75" loading="eager" src="/image/ReferencePrice/Vanitis/Detail/title.jpg" alt="titleRef" aria-label="titleRef" class="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- See more -->
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.vanity.hotel') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in bedBase" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink aria-label="detail" :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" aria-label="vanityimage" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const bedBase = [
    {src: '/image/ReferencePrice/Vanitis/Detail/vanitie1.jpg', alt: 'vanitie1',id:'vanitie1'},
    {src: '/image/ReferencePrice/Vanitis/Detail/vanitie2.jpg', alt: 'vanitie2',id:'vanitie2'},
    {src: '/image/ReferencePrice/Vanitis/Detail/vanitie3.jpg', alt: 'vanitie3',id:'vanitie3'},
    {src: '/image/ReferencePrice/Vanitis/Detail/vanitie4.jpg', alt: 'vanitie4',id:'vanitie4'},
    {src: '/image/ReferencePrice/Vanitis/Detail/vanitie5.jpg', alt: 'vanitie5',id:'vanitie5'},
]
useSeoMeta({
    title: 'Vanities - Hospitality Furniture',
    ogTitle: 'Vanities - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/referenceprice/vanities',
    ogType: 'event',
    ogSiteName: 'Vanities - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Vanities - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'Vanities, Hospitality Furniture',
})
</script>

<style scoped>
.bg-cate {
    background-image: url('/image/ReferencePrice/bgRef3.png');
}
.bg-color {
    background-color: #1C1C1C;
}
</style>