<template>
    <div class="bg-black color-text">
        <div v-show="!isLoading" class="flex flex-col w-full h-full">
                    <!-- Ritz project -->
            <div class="bg-ritz p-4 lg:p-0 lg:py-16">
                <div class="flex flex-col lg:flex-row items-center justify-center gap-5 bg-solution w-full h-full">
                    <!-- Carousel -->
                    <div class="carousel w-full md:w-1/2 relative overflow-hidden">
                        <div v-for="(slide, index) in solution" :key="index" class="carousel-item w-full transition-transform duration-700" 
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <NuxtImg :src="slide.src" alt="Slide image" aria-label="slideimage" class="w-full" loading="eager" quality="75"/>
                        </div>
                        <div class="absolute inset-y-1/2 left-5 flex items-center">
                        <button @click="prevSlide" aria-label="prevslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
                        </div>
                        <div class="absolute inset-y-1/2 right-5 flex items-center">
                        <button @click="nextSlide" aria-label="nextslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
                        </div>
                    </div>
                    <!-- Content -->
                    <div v-show="project" class="flex flex-col items-center justify-center w-full md:w-1/2 h-full p-20 container mx-auto bg-content">
                        <div><h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">{{ project?.title }}</h2></div>
                        <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
                        <div class="flex flex-col items-center justify-center w-full h-full py-2">
                            <div class="flex flex-col w-full h-full gap-1 mb-4 lg:mb-0 md:gap-4 py-2 md:py-8">
                                <div class="flex flex-row w-full h-full">
                                    <p>
                                        <span class="text-white text-nowrap lg:text-xl">{{ $t('app.ritz.projectType') }}</span>
                                        <span class="text-gray-300 font-thin lg:text-lg">{{ $t('app.ritz.title') }}</span>
                                    </p>
                                </div>
                                <div class="flex flex-row w-full h-full">
                                    <p>
                                        <span class="text-white text-nowrap lg:text-xl">{{ $t('app.ritz.status') }}</span>
                                        <span class="text-gray-300 font-thin lg:text-lg">{{ $t('app.ritz.completed') }}</span>
                                    </p>
                                </div>
                                <div class="flex flex-row w-full h-full">
                                    <p>
                                        <span class="text-white text-nowrap lg:text-xl">{{ $t('app.ritz.hotel') }}</span>
                                        <span class="text-gray-300 font-thin lg:text-lg">{{ $t('app.ritz.hotelDesc') }}</span>
                                    </p>
                                </div>
                                <div class="flex flex-row w-full h-full">
                                    <p>
                                        <span class="text-white text-nowrap lg:text-xl">{{ $t('app.ritz.location') }}</span>
                                        <span class="text-gray-300 font-thin lg:text-lg">{{ project?.location }}</span>
                                    </p>
                                </div>
                            </div>
                            <button aria-label="button" class="bg-none button-solution text-base px-5 py-1 rounded-md"><nuxt-link to="/contact">{{ $t('app.ritz.button') }}</nuxt-link></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- relative project -->
            <div class="flex flex-col justify-center items-center w-full h-full container mx-auto gap-5 py-2">
                <div class="flex flex-col items-center justify-center w-full h-full gap-5">
                    <p class="text-justify font-thin">{{ $t('app.ritz.trans') }}</p>
                    <p class="text-justify font-thin">{{ $t('app.ritz.we') }}</p>
                </div>
                <div class="flex flex-col justify-center w-full h-full gap-5">
                    <h2 class="text-xl lg:text-3xl text-orange-500">{{ $t('app.ritz.relative') }}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center w-full h-full gap-4">
                        <div class="col-span-1 relative w-full h-full group transition-all duration-500 ease-in-out rounded-lg overflow-hidden" 
                            v-for="project in test?.data.slice(0, 4)" 
                            :key="project.title">
                            <div class="relative">
                                <NuxtImg :src="project.src" alt="Project image" aria-label="projectimage" class="w-full h-auto object-contain" quality="75" loading="eager"/>
                                <div class="absolute inset-0 bg-black opacity-30"></div>
                            </div>
                            <div class="absolute bottom-10 container mx-auto p-4 h-1/5 transition-all duration-1000 ease-in-out">
                                <p class="text-justify text-sm md:text-base lg:text-lg font-thin color-title">{{ project.title }}</p>
                            </div>
                            <div class="absolute inset-0 hidden group-hover:flex justify-center items-center p-4 bg-black bg-opacity-50 transition-all duration-1000 ease-in-out">
                                <h3 class="hover:text-orange-500 cursor-pointer transition-all duration-500 ease-in-out text-xl">
                                <nuxt-link aria-label="detail" to="/news">{{ $t("app.referenceprice.detail") }}</nuxt-link>
                                </h3>
                            </div>
                        </div>
                    </div>
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
import { ref, onMounted } from 'vue';
const { locale } = useI18n();
const { id } = useRoute().params;
const isLoading = ref(true);
//#region QuyenNC ( gọi api )
const news = ref(null);
 const payload = async() => {
    const data = await $fetch("/api/test");
    news.value = data
 }
 const test = computed(() => news?.value?.find(item => item.locale === locale.value));
 const project = computed(() => {
  return test?.value?.data3.find(item => item.id === id);
 });
 const solution = computed(() => project?.value?.img || []);

//#endregion

//#region QuyenNC ( khởi tạo các biến )
const currentSlide = ref(0);
const slideInterval = 3000; 
//#endregion

//#region QuyenNC ( hàm chuyển slide )
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % solution.value?.length;
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + solution.value?.length) % solution.value?.length;
}
//#endregion

let intervalId;

onMounted(() => {
 payload();
 setTimeout(() => {
        isLoading.value = false;
    }, 1200);
  intervalId = setInterval(nextSlide, slideInterval);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
useSeoMeta({
    title: 'Detail Products - Hospitality Furniture',
    ogTitle: 'Detail Products - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/projects/detail-products',
    ogType: 'event',
    ogSiteName: 'Detail Products - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Detail Products - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'Detail Products, Hospitality Furniture',
})
</script>

<style scoped>
.bg-ritz {
    background-image: url('/image/RitzCarlton/bgRitz.jpg');
    background-position: center right;
    background-color: #44444473;
}
.bg-content {
    background-color: #54595FB3;
}
.button-solution {
  background-color: transparent;
  border: 2px solid #FFFFFF99;
  color: #FFFFFF99;
}
.button-solution:hover {
  background-color: transparent;
  color: #B9A97A;
  border-color: #B9A97A;
}
.color-text {
  color: #ababab;
}
.color-title {
    color: #FFFFFF8A
}
</style>