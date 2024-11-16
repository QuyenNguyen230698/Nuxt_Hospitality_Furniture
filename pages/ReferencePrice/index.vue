<template>
    <div class="bg-black text-white">
        <TitleRef />
        <!-- Categories -->
         <div class="flex flex-col w-full h-full items-center justify-center bg-black bg-cate">
            <div class="flex flex-col items-center justify-center w-full h-full">
                <div class="py-2 px-10 md:px-0 flex flex-col items-center justify-center">
                    <h2 class="text-center text-xl lg:text-5xl font-bold p-6 text-white">
                        {{ $t("app.referenceprice.categories") }}
                    </h2>
                    <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
                    <p class="text-xs md:text-base color-section md:w-3/4 lg:w-1/2 text-justify leading-loose text-slate-400">{{ $t("app.referenceprice.cateDescription") }}</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full gap-4 lg:container mx-auto p-4">
                <div v-for="item in categories" :key="item.src" class="w-full h-full relative group">
                    <div class="text-xl lg:text-2xl text-white mb-2 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center hover:hidden">{{ item.alt }}</div>
                    <div class="absolute top-0 left-0 w-full h-full bg-orange-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div class="text-center">
                            <div class="text-xl lg:text-2xl text-white mb-2">{{ item.alt }}</div>
                            <button class="border border-white text-slate-100 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">
                                <NuxtLink :to="item.link">{{ $t('app.referenceprice.detail') }}</NuxtLink>
                            </button>
                        </div>
                    </div>
                    <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-80 md:h-full object-cover" />
                </div>
            </div>
         </div>
        <!-- See more -->
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.headboard') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in bedBase" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/bedBase" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.dresser') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in cabinet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/cabinet" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.closets') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in closet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/closet" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.tv') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in tv" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/tv" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.nightstands') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in nightstand" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/nightstand" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.tables') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in table" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/table" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.sofas') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in sofas" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/sofas" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold">{{ $t('app.referenceprice.vanities') }}</h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in vanities" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtLink :to="`/referenceprice/process/${item.id}`">
                        <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <NuxtLink href="/referenceprice/vanities" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
const categories = [
    {src: '/image/ReferencePrice/Categories/cate1.jpg', alt: 'Headboard & Bedbase', link: '/referenceprice/bedBase'},
    {src: '/image/ReferencePrice/Categories/cate2.jpg', alt: 'Closet & Wardrobe', link: '/referenceprice/closet'},
    {src: '/image/ReferencePrice/Categories/cate3.jpg', alt: 'TV Unit', link: '/referenceprice/tv'},
    {src: '/image/ReferencePrice/Categories/cate4.jpg', alt: 'Nightstand', link: '/referenceprice/nightstand'},
    {src: '/image/ReferencePrice/Categories/cate5.jpg', alt: 'Dresser & Cabinet', link: '/referenceprice/cabinet'},
    {src: '/image/ReferencePrice/Categories/cate6.jpg', alt: 'Desk & Table', link: '/referenceprice/table'},
    {src: '/image/ReferencePrice/Categories/cate7.jpg', alt: 'Chair & Sofa', link: '/referenceprice/sofas'},
    {src: '/image/ReferencePrice/Categories/cate8.jpg', alt: 'Vanity', link: '/referenceprice/vanities'},
]
const bedBase = [
    {src: '/image/ReferencePrice/BedBase/bedBase1.jpg', alt: 'bedbase1',id:'king1'},
    {src: '/image/ReferencePrice/BedBase/bedBase2.jpg', alt: 'bedbase2',id:'king2'},
    {src: '/image/ReferencePrice/BedBase/bedBase3.jpg', alt: 'bedbase3',id:'king3'},
    {src: '/image/ReferencePrice/BedBase/bedBase4.jpg', alt: 'bedbase4',id:'king4'},
]
const cabinet = [
    {src: '/image/ReferencePrice/Cabinet/cabinet1.jpg', alt: 'cabinet1',id:'cabinet1'},
    {src: '/image/ReferencePrice/Cabinet/cabinet2.jpg', alt: 'cabinet2',id:'cabinet2'},
    {src: '/image/ReferencePrice/Cabinet/cabinet3.jpg', alt: 'cabinet3',id:'cabinet3'},
    {src: '/image/ReferencePrice/Cabinet/cabinet4.jpg', alt: 'cabinet4',id:'cabinet4'},
]
const closet = [
    {src: '/image/ReferencePrice/Closets/closet1.jpg', alt: 'closet1',id:'closet1'},
    {src: '/image/ReferencePrice/Closets/closet2.jpg', alt: 'closet2',id:'closet2'},
    {src: '/image/ReferencePrice/Closets/closet3.jpg', alt: 'closet3',id:'closet3'},
    {src: '/image/ReferencePrice/Closets/closet4.jpg', alt: 'closet4',id:'closet4'},
]
const tv = [
    {src: '/image/ReferencePrice/TVunits/unit1.jpg', alt: 'tv1',id:'tv1'},
    {src: '/image/ReferencePrice/TVunits/unit2.jpg', alt: 'tv2',id:'tv2'},
    {src: '/image/ReferencePrice/TVunits/unit3.jpg', alt: 'tv3',id:'tv3'},
    {src: '/image/ReferencePrice/TVunits/unit4.jpg', alt: 'tv4',id:'tv4'},
]
const nightstand = [
    {src: '/image/ReferencePrice/NightStands/Detail/night1.jpg', alt: 'nightstand1',id:'night1'},
    {src: '/image/ReferencePrice/NightStands/Detail/night2.jpg', alt: 'nightstand2',id:'night2'},
    {src: '/image/ReferencePrice/NightStands/Detail/night3.jpg', alt: 'nightstand3',id:'night3'},
    {src: '/image/ReferencePrice/NightStands/Detail/night4.jpg', alt: 'nightstand4',id:'night4'},
]
const table = [
    {src: '/image/ReferencePrice/Table/table1.jpg', alt: 'table1',id:'table1'},
    {src: '/image/ReferencePrice/Table/table2.jpg', alt: 'table2',id:'table2'},
    {src: '/image/ReferencePrice/Table/table3.jpg', alt: 'table3',id:'table3'},
    {src: '/image/ReferencePrice/Table/table4.jpg', alt: 'table4',id:'table4'},
]
const sofas = [
    {src: '/image/ReferencePrice/Sofa/sofa1.jpg', alt: 'sofa1',id:'sofa1'},
    {src: '/image/ReferencePrice/Sofa/sofa2.jpg', alt: 'sofa2',id:'sofa2'},
    {src: '/image/ReferencePrice/Sofa/sofa3.jpg', alt: 'sofa3',id:'sofa3'},
    {src: '/image/ReferencePrice/Sofa/sofa4.jpg', alt: 'sofa4',id:'sofa4'},
]
const vanities = [
    {src: '/image/ReferencePrice/Vanitis/vaniti1.jpg', alt: 'vanity1',id:'vanity1'},
    {src: '/image/ReferencePrice/Vanitis/vaniti2.jpg', alt: 'vanity2',id:'vanity2'},
    {src: '/image/ReferencePrice/Vanitis/vaniti3.jpg', alt: 'vanity3',id:'vanity3'},
    {src: '/image/ReferencePrice/Vanitis/vaniti4.jpg', alt: 'vanity4',id:'vanity4'},
]
</script>

<style scoped>
.bg-cate {
    background-image: url('/image/ReferencePrice/bgRef3.png');
}
</style>