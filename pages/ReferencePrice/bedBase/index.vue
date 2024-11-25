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
                    <h2 class="text-white text-center text-2xl lg:text-4xl font-extrabold">{{ $t('app.bedding.bedding') }}</h2>
                    <p class="text-justify text-gray-400 text-sm lg:text-base container mx-auto">{{ $t('app.bedding.beddingDescription') }}</p>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="lg:relative w-full ">
                        <div class="lg:absolute lg:inset-0 m-auto z-30 bg-white p-1 md:w-96 w-80 h-40 lg:h-72">
                            <NuxtImg quality="75" loading="eager" src="/image/ReferencePrice/BedBase/Detail/titleRef.jpg" alt="titleRef" aria-label="titleRef" class="w-full h-full object-cover"/>
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
                    <NuxtLink aria-label="detail" :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" aria-label="bedbaseimage" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.bedding.queen') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in cabinet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink aria-label="detail" :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" aria-label="cabinetimage" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.bedding.bed') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in closet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink aria-label="detail" :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" aria-label="closetimage" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const bedBase = [
    {src: '/image/ReferencePrice/BedBase/Detail/king1.jpg', alt: 'king1',id:'king1',name:'Hotel Guest Room Bed Set',minPrice:315, maxPrice:545 },
    {src: '/image/ReferencePrice/BedBase/Detail/king2.jpg', alt: 'king2',id:'king2',name:'Hotel Guestroom Bed Set - Headboard & Bedbase',minPrice:275, maxPrice:495 },
    {src: '/image/ReferencePrice/BedBase/Detail/king3.jpg', alt: 'king3',id:'king3',name:'Hotel Guestroom Bed Set - Headboard & Bedbase',minPrice:345, maxPrice:575 },
    {src: '/image/ReferencePrice/BedBase/Detail/king4.jpg', alt: 'king4',id:'king4',name:'Hotel Guestroom Bed Set - Headboard & Bedbase',minPrice:295, maxPrice:615 },
    {src: '/image/ReferencePrice/BedBase/Detail/king5.jpg', alt: 'king5',id:'king5',name:'King Headboard - Hilton Myrtle Beach Resort',minPrice:345, maxPrice:525 },
    {src: '/image/ReferencePrice/BedBase/Detail/king6.jpg', alt: 'king6',id:'king6',name:'King Headboard Premiere Suite - Hyatt Regency Morristown',minPrice:445, maxPrice:765 },
    {src: '/image/ReferencePrice/BedBase/Detail/king7.jpg', alt: 'king7',id:'king7',name:'King Headboard',minPrice:275, maxPrice:535 },
    {src: '/image/ReferencePrice/BedBase/Detail/king8.jpg', alt: 'king8',id:'king8',name:'King Headboard - Choctaw Durant',minPrice:345, maxPrice:625 },
    {src: '/image/ReferencePrice/BedBase/Detail/king9.jpg', alt: 'king9',id:'king9',name:'King Headboard',minPrice:315, maxPrice:555 },
    {src: '/image/ReferencePrice/BedBase/Detail/king10.jpg', alt: 'king10',id:'king10',name:'King Headboard',minPrice:225, maxPrice:485 },
    {src: '/image/ReferencePrice/BedBase/Detail/king11.jpg', alt: 'king11',id:'king11',name:'King Headboard',minPrice:245, maxPrice:550 },
    {src: '/image/ReferencePrice/BedBase/Detail/king12.jpg', alt: 'king12',id:'king12',name:'King Headboard - 54117',minPrice:145, maxPrice:425 },
]
const cabinet = [
    {src: '/image/ReferencePrice/BedBase/Detail/queen1.jpg', alt: 'queen1',id:'queen1',name:'Double Queen Headboard',minPrice:345, maxPrice:715},
    {src: '/image/ReferencePrice/BedBase/Detail/queen2.jpg', alt: 'queen2',id:'queen2',name:'Double Queen Headboard',minPrice:365, maxPrice:735},
    {src: '/image/ReferencePrice/BedBase/Detail/queen3.jpg', alt: 'queen3',id:'queen3',name:'Double Queen Headboard',minPrice:345, maxPrice:675},
    {src: '/image/ReferencePrice/BedBase/Detail/queen4.jpg', alt: 'queen4',id:'queen4',name:'Double Queen Headboard',minPrice:365, maxPrice:745},
    {src: '/image/ReferencePrice/BedBase/Detail/queen5.jpg', alt: 'queen5',id:'queen5',name:'Double Queen Headboard',minPrice:335, maxPrice:755},
    {src: '/image/ReferencePrice/BedBase/Detail/queen6.jpg', alt: 'queen6',id:'queen6',name:'Double Queen Headboard',minPrice:375, maxPrice:725},
]
const closet = [
    {src: '/image/ReferencePrice/BedBase/Detail/bed1.jpg', alt: 'bed1',id:'bed1',name:'Hotel Guest Room Bed Set',minPrice:645, maxPrice:955},
    {src: '/image/ReferencePrice/BedBase/Detail/bed2.jpg', alt: 'bed2',id:'bed2',name:'Hotel Guestroom Bed Set - Headboard & Bedbase',minPrice:635, maxPrice:955},
    {src: '/image/ReferencePrice/BedBase/Detail/bed3.jpg', alt: 'bed3',id:'bed3',name:'Hotel Guest Room Bed Set - Headboard & Bedroom',minPrice:625, maxPrice:875},
    {src: '/image/ReferencePrice/BedBase/Detail/bed4.jpg', alt: 'bed4',id:'bed4',name:'Hotel Guest Room Bed Set - Headboard & Bedbase',minPrice:750, maxPrice:1150},
]
useSeoMeta({
    title: 'Bed Base - Hospitality Furniture',
    ogTitle: 'Bed Base - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/referenceprice/bedBase',
    ogType: 'event',
    ogSiteName: 'Bed Base - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Bed Base - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'Bed Base, Hospitality Furniture',
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