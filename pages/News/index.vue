<template>
    <div class="bg-black text-white">
        <div v-show="!isLoading" class="flex flex-col items-center justify-center w-full h-full px-3">
            <div class="flex flex-col md:flex-row w-full h-full lg:container bg-news p-2 mt-10 gap-5">
                <!-- news title -->
                <div v-for="item in test?.data.slice(0, 1)" :key="item.title" class="flex flex-col w-full md:w-1/2 h-full gap-4">
                    <NuxtImg :src="item.src" alt="News image" aria-label="newsimage" class="w-full h-auto object-contain" loading="eager" quality="75"/>
                    <h2 class="text-xl md:text-2xl font-bold text-orange-500 cursor-pointer">{{ item.title }}</h2>
                    <p class="text-xs md:text-sm text-gray-400">{{ item.pdate }}</p>
                    <p class="text-sm md:text-base text-gray-400 text-justify">{{ item.desc }}</p>
                    <nuxt-link to="/projects/ritzcarlton" aria-label="readmore" class="text-gray-600">{{ $t("app.projects.readmore") }}</nuxt-link>
                </div>
                <div class="flex flex-col w-full md:w-1/2 h-full gap-5">
                    <div v-for="item in test?.data.slice(1, 6)" :key="item.title" class="flex flex-row w-full h-1/4 gap-4">
                        <div class="h-full w-1/4 md:w-1/3 lg:w-1/4 object-contain shrink">
                            <NuxtImg :src="item.src" alt="News image" aria-label="newsimage" class="w-full max-h-16 md:max-h-20 min-h-16 md:min-h-20 object-cover" loading="eager" quality="75"/>
                        </div>
                        <div class="flex flex-col w-3/4 md:w-2/3 lg:w-3/4 h-full">
                            <h2 class="text-sm md:text-base font-bold text-title-news cursor-pointer">{{ item.title }}</h2>
                            <p class="text-xs md:text-sm text-gray-400">{{ item.pdate }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- list news -->
            <div class="carousel w-full h-full mt-10 overflow-hidden">
                <!-- data 1 -->
                <div v-if="currentPagination === 0" class="carousel-item w-full h-auto">
                    <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:container gap-5 overflow-hidden">
                        <div v-for="item in test?.data" :key="item.title" class="w-full h-full flex flex-col items-center justify-center">
                            <NuxtImg :src="item.src" alt="News image" aria-label="newsimage" class="w-full h-auto object-contain" loading="eager" quality="75"/>
                            <div class="flex flex-col w-full h-full bg-white gap-2 px-5 py-4">
                                <h2 class="text-title-news text-lg md:text-xl font-bold">{{ item.title }}</h2>
                                <p class="text-gray-400 text-xs">{{ item.pdate }}</p>
                                <p class="text-gray-500 text-xs md:text-sm text-justify">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- data 2 -->
                <div v-if="currentPagination === 1" class="carousel-item w-full h-auto">
                    <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:container gap-5 overflow-hidden">
                        <div v-for="item in test?.data2" :key="item.title" class="w-full h-full flex flex-col items-center justify-center">
                            <NuxtImg :src="item.src" alt="News image" aria-label="newsimage" class="w-full h-auto object-contain" loading="eager" quality="75"/>
                            <div class="flex flex-col w-full h-full bg-white gap-2 px-5 py-4">
                                <h2 class="text-title-news text-lg md:text-xl font-bold">{{ item.title }}</h2>
                                <p class="text-gray-400 text-xs">{{ item.pdate }}</p>
                                <p class="text-gray-500 text-xs md:text-sm text-justify">{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- pagination -->
            <div class="flex w-full justify-end gap-2 py-5 container ">
                <div class="join bg-white">
                    <button class="join-item btn btn-sm btn-outline" @click="prevSlidePagination" aria-label="prevslidepagination" :disabled="currentPagination === 0">«</button>
                    <select class="join-item btn btn-sm btn-outline" v-model="currentPagination" @change="scrollToTop" aria-label="pagination">
                        <option :value="0">{{ $t("app.ritz.page") }} 1</option>
                        <option :value="1">{{ $t("app.ritz.page") }} 2</option>
                    </select>
                    <button class="join-item btn btn-sm btn-outline" @click="nextSlidePagination" aria-label="nextslidepagination" :disabled="currentPagination === 1">»</button>
                </div>
            </div>
        </div>
        <div v-show="isLoading"
            class="w-full h-full flex flex-col justify-center items-center bg-black absolute inset-0 gap-4 z-50">
            <NuxtImg src="/image/logo/Tranduc-Furnishings-compress.png" loading="eager" class="w-56 h-fit bg-transparent" />
            <progress class="progress progress-warning w-56" style="height: 3px !important"></progress>
        </div>
    </div>
</template>

<script setup>
 import { ref, onMounted, computed } from 'vue';
 const { locale } = useI18n();
 const isLoading = ref(true);
 //#region QuyenNC ( goi api)
 const news = ref(null);
 const payload = async() => {
    const data = await $fetch("/api/test");
    news.value = data
 }
 const test = computed(() => news?.value?.find(item => item.locale === locale.value));
 //#endregion


 //#region pagination
 const currentPagination = ref(0);

  const nextSlidePagination = () => {
    currentPagination.value = (currentPagination.value + 1) % 2; // Assuming 2 slides
    scrollToTop();
  };

  const prevSlidePagination = () => {
    currentPagination.value = (currentPagination.value - 1 + 2) % 2; // Assuming 2 slides
    scrollToTop();
  };
 //#endregion
const isVisible = ref(false)
 const checkScroll = () => {
  isVisible.value = window.pageYOffset > 300
 }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
 onMounted(() => {
    payload();
    setTimeout(() => {
        isLoading.value = false;
    }, 1200);
    window.addEventListener('scroll', checkScroll)
 })
 onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  });
 useSeoMeta({
    title: 'News - Hospitality Furniture',
    ogTitle: 'News - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/news',
    ogType: 'event',
    ogSiteName: 'News - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'News - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'News, Hospitality Furniture',
})
</script>

<style scoped>
.bg-news {
    background-color: #222328;
}
.text-title-news {
    color: #6D644B;
}
.join-item:focus-visible {
    outline: none;
  }
  .btn-outline {
    border-color: transparent;
  }
</style>