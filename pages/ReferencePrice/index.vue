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
                            <button class="border border-white text-slate-100 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">Detail</button>
                        </div>
                    </div>
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-80 md:h-full object-cover" />
                </div>
            </div>
         </div>
        <!-- See more -->
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.headboard') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in bedBase" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.dresser') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in cabinet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.closets') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in closet" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.tv') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in tv" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.nightstands') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in nightstand" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.tables') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in table" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.sofas') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in sofas" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
        <section class="flex flex-col items-center justify-center w-full h-full container mx-auto">
            <div class="w-full h-full border-y border-orange-500 mt-20">
                <h2 class="py-2 text-center text-xl lg:text-4xl font-extrabold"><a href="">{{ $t('app.referenceprice.vanities') }}</a></h2>
            </div>
            <div class="mt-10 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full">
                <div v-for="item in vanities" :key="item.src" class="w-full h-40 md:h-60 lg:h-80">
                    <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full py-2">
                <a href="" class="text-orange-500 hover:text-white"><span>{{ $t('app.referenceprice.seeMore') }} </span><span><i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i></span></a>
            </div>
        </section>
    </div>
</template>

<script setup>
const categories = [
    {src: '/image/ReferencePrice/Categories/cate1.jpg', alt: 'Headboard & Bedbase'},
    {src: '/image/ReferencePrice/Categories/cate2.jpg', alt: 'Closet & Wardrobe'},
    {src: '/image/ReferencePrice/Categories/cate3.jpg', alt: 'TV Unit'},
    {src: '/image/ReferencePrice/Categories/cate4.jpg', alt: 'Nightstand'},
    {src: '/image/ReferencePrice/Categories/cate5.jpg', alt: 'Dresser & Cabinet'},
    {src: '/image/ReferencePrice/Categories/cate6.jpg', alt: 'Desk & Table'},
    {src: '/image/ReferencePrice/Categories/cate7.jpg', alt: 'Chair & Sofa'},
    {src: '/image/ReferencePrice/Categories/cate8.jpg', alt: 'Vanity'},
]
const bedBase = [
    {src: '/image/ReferencePrice/BedBase/bedBase1.jpg', alt: 'bedbase1'},
    {src: '/image/ReferencePrice/BedBase/bedBase2.jpg', alt: 'bedbase2'},
    {src: '/image/ReferencePrice/BedBase/bedBase3.jpg', alt: 'bedbase3'},
    {src: '/image/ReferencePrice/BedBase/bedBase4.jpg', alt: 'bedbase4'},
]
const cabinet = [
    {src: '/image/ReferencePrice/Cabinet/cabinet1.jpg', alt: 'cabinet1'},
    {src: '/image/ReferencePrice/Cabinet/cabinet2.jpg', alt: 'cabinet2'},
    {src: '/image/ReferencePrice/Cabinet/cabinet3.jpg', alt: 'cabinet3'},
    {src: '/image/ReferencePrice/Cabinet/cabinet4.jpg', alt: 'cabinet4'},
]
const closet = [
    {src: '/image/ReferencePrice/Closets/closet1.jpg', alt: 'closet1'},
    {src: '/image/ReferencePrice/Closets/closet2.jpg', alt: 'closet2'},
    {src: '/image/ReferencePrice/Closets/closet3.jpg', alt: 'closet3'},
    {src: '/image/ReferencePrice/Closets/closet4.jpg', alt: 'closet4'},
]
const tv = [
    {src: '/image/ReferencePrice/TVunits/unit1.jpg', alt: 'tv1'},
    {src: '/image/ReferencePrice/TVunits/unit2.jpg', alt: 'tv2'},
    {src: '/image/ReferencePrice/TVunits/unit3.jpg', alt: 'tv3'},
    {src: '/image/ReferencePrice/TVunits/unit4.jpg', alt: 'tv4'},
]
const nightstand = [
    {src: '/image/ReferencePrice/Nightstands/night1.jpg', alt: 'nightstand1'},
    {src: '/image/ReferencePrice/Nightstands/night2.jpg', alt: 'nightstand2'},
    {src: '/image/ReferencePrice/Nightstands/night3.jpg', alt: 'nightstand3'},
    {src: '/image/ReferencePrice/Nightstands/night4.jpg', alt: 'nightstand4'},
]
const table = [
    {src: '/image/ReferencePrice/Table/table1.jpg', alt: 'table1'},
    {src: '/image/ReferencePrice/Table/table2.jpg', alt: 'table2'},
    {src: '/image/ReferencePrice/Table/table3.jpg', alt: 'table3'},
    {src: '/image/ReferencePrice/Table/table4.jpg', alt: 'table4'},
]
const sofas = [
    {src: '/image/ReferencePrice/Sofa/sofa1.jpg', alt: 'sofa1'},
    {src: '/image/ReferencePrice/Sofa/sofa2.jpg', alt: 'sofa2'},
    {src: '/image/ReferencePrice/Sofa/sofa3.jpg', alt: 'sofa3'},
    {src: '/image/ReferencePrice/Sofa/sofa4.jpg', alt: 'sofa4'},
]
const vanities = [
    {src: '/image/ReferencePrice/Vanitis/vaniti1.jpg', alt: 'vanity1'},
    {src: '/image/ReferencePrice/Vanitis/vaniti2.jpg', alt: 'vanity2'},
    {src: '/image/ReferencePrice/Vanitis/vaniti3.jpg', alt: 'vanity3'},
    {src: '/image/ReferencePrice/Vanitis/vaniti4.jpg', alt: 'vanity4'},
]
</script>

<style scoped>
.bg-cate {
    background-image: url('/image/ReferencePrice/bgRef3.png');
}
</style>