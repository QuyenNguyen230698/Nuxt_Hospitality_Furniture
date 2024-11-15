<template>
    <div class="bg-black text-white">
        <div class="flex flex-col items-center justify-center w-full h-full p-3">
            <div class="flex flex-col md:flex-row w-full h-full lg:container bg-news p-2 mt-10 gap-5">
                <!-- news title -->
                <div v-for="item in test?.data.slice(0, 1)" :key="item.title" class="flex flex-col w-full md:w-1/2 h-full gap-4">
                    <NuxtImg :src="item.src" alt="News image" class="w-full h-auto object-contain" />
                    <h2 class="text-xl md:text-2xl font-bold text-orange-500 cursor-pointer">{{ item.title }}</h2>
                    <p class="text-xs md:text-sm text-gray-400">{{ item.pdate }}</p>
                    <p class="text-sm md:text-base text-gray-400 text-justify">{{ item.desc }}</p>
                    <nuxt-link to="/projects/ritzcarlton" class="text-gray-600">{{ $t("app.projects.readmore") }}</nuxt-link>
                </div>
                <div class="flex flex-col w-full md:w-1/2 h-full gap-5">
                    <div v-for="item in test?.data.slice(1, 6)" :key="item.title" class="flex flex-row w-full h-1/4 gap-4">
                        <div class="h-full">
                            <NuxtImg :src="item.src" alt="News image" class="w-full max-h-16 md:max-h-20 min-h-16 md:min-h-20 object-cover" />
                        </div>
                        <div class="flex flex-col w-full h-full">
                            <h2 class="text-sm md:text-base font-bold text-title-news cursor-pointer">{{ item.title }}</h2>
                            <p class="text-xs md:text-sm text-gray-400">{{ item.pdate }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- list news -->
            <div class="carousel w-full h-full mt-10 overflow-hidden">
                <!-- data 1 -->
                <div id="item1" class="carousel-item w-full h-auto">
                    <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:container gap-5 overflow-hidden">
                        <div v-for="item in test?.data" :key="item.title" class="w-full h-full flex flex-col items-center justify-center">
                            <NuxtImg :src="item.src" alt="News image" class="w-full h-auto object-contain" />
                            <div class="flex flex-col w-full h-full bg-white gap-2 px-5 py-4">
                                <h2 class="text-title-news text-lg md:text-xl font-bold">{{ item.title }}</h2>
                                <p class="text-gray-400 text-xs">{{ item.pdate }}</p>
                                <p class="text-gray-500 text-xs md:text-sm text-justify">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- data 2 -->
                <div id="item2" class="carousel-item w-full h-auto">
                    <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:container gap-5 overflow-hidden">
                        <div v-for="item in test?.data2" :key="item.title" class="w-full h-full flex flex-col items-center justify-center">
                            <NuxtImg :src="item.src" alt="News image" class="w-full h-auto object-contain" />
                            <div class="flex flex-col w-full h-full bg-white gap-2 px-5 py-4">
                                <h2 class="text-title-news text-lg md:text-xl font-bold">{{ item.title }}</h2>
                                <p class="text-gray-400 text-xs">{{ item.pdate }}</p>
                                <p class="text-gray-500 text-xs md:text-sm text-justify">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="flex w-full justify-center gap-2 py-2">
                <a href="#item1" class="btn btn-circle">1</a>
                <a href="#item2" class="btn btn-circle">2</a>
            </div>
        </div>
    </div>
</template>

<script setup>
 import { ref, onMounted } from 'vue';
 const { locale } = useI18n();

 const news = ref(null);
 const payload = async() => {
    const data = await $fetch("/api/test");
    news.value = data
 }
 const test = computed(() => news?.value?.find(item => item.locale === locale.value));

 onMounted(() => {
    payload();
 })
</script>

<style scoped>
.bg-news {
    background-color: #222328;
}
.text-title-news {
    color: #6D644B;
}
</style>