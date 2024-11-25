<template>
    <div class="w-full h-full bg-black text-gray-300 flex flex-col justify-center items-center">
        <!-- Carousel and Description -->
        <div class="grid grid-cols-12 w-full h-full bg-white p-1">
          <!-- Carousel -->
          <div class="col-span-12 md:col-span-8 w-full h-full">
            <div class="flex flex-col lg:flex-row items-center justify-center gap-5 w-full h-full">
                <div class="flex flex-col w-full h-full md:h-screen items-center justify-center">
                    <div class="carousel w-full h-4/6 relative overflow-hidden">
                      <div v-for="(slide, index) in solution" :key="index" class="carousel-item w-full transition-transform duration-700" 
                      :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                      <NuxtImg :src="slide.src" alt="Slide image" aria-label="slideimage" class="w-full h-full object-contain" loading="eager" quality="75"/>
                      </div>
                      <div class="absolute inset-y-1/2 left-5 flex items-center">
                      <button @click="prevSlide" aria-label="prevslide" class="btn btn-circle bg-transparent border-none text-orange-500 text-2xl hover:bg-transparent">❮</button>
                      </div>
                      <div class="absolute inset-y-1/2 right-5 flex items-center">
                      <button @click="nextSlide" aria-label="nextslide" class="btn btn-circle bg-transparent border-none text-orange-500 text-2xl hover:bg-transparent">❯</button>
                      </div>
                  </div>
                  <!-- Thumbnails -->
                  <div class="flex justify-center h-1/6 space-x-2">
                      <div
                          v-for="(slide, index) in solution"
                          :key="'thumb-' + index"
                          @click="currentSlide = index"
                          class="w-1/4 h-auto border-2 cursor-pointer overflow-hidden"
                          :class="{ 'border-orange-500': currentSlide === index, 'border-transparent': currentSlide !== index }"
                      >
                          <NuxtImg quality="75" loading="eager" :src="slide.src" alt="Thumbnail" aria-label="thumbnail" class="w-full h-full object-cover"></NuxtImg>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <!-- Description -->
          <div v-show="project" key="project.id" class="col-span-12 md:col-span-4 bg-black">
            <div class="flex flex-col w-full h-full items-start gap-4 p-8">
              <h2 class="text-white font-black text-base md:text-xl lg:text-3xl border-b border-gray-500">{{ project?.name }}</h2>
              <p class="text-gray-400 text-xs md:text-sm lg:text-base font-thin">{{ $t('app.process.standard') }}</p>
              <p class="text-gray-400 text-xs md:text-sm lg:text-base font-thin">{{ $t('app.process.packaging') }}</p>
              <p class="text-gray-400 text-xs md:text-sm lg:text-base font-thin">{{ $t('app.process.port') }}</p>
              <p class="text-gray-400 text-xs md:text-sm lg:text-base font-thin">{{ $t('app.process.moq') }}</p>
              <p class="text-white bg-process text-xs md:text-sm lg:text-base font-thin py-2">{{ $t('app.process.price') }} ${{ project?.minPrice }} - ${{ project?.maxPrice }}</p>
              <nuxt-link to="/contact" aria-label="contact" class="text-white bg-orange-500 border border-orange-500 rounded hover:border-white text-sm md:text-base lg:text-lg px-5 py-2">
                <span><i aria-hidden="true" class="fas fa-briefcase text-white"></i></span>
                {{ $t('app.process.quotation') }}
              </nuxt-link>
              <p class="text-gray-500 text-justify text-xs md:text-sm font-thin border-t border-gray-500 pt-2">{{ $t('app.process.copyright') }}</p>
            </div>
          </div>
        </div>
        <!-- Process -->
        <div class="bg-process w-full h-full">
          <div class="lg:container mx-auto p-4 lg:p-0 grid grid-cols-12 w-full h-full">
            <!-- Logo -->
            <div class="col-span-12 h-16 md:h-auto md:col-span-4  items-stretch border-r border-orange-500 md:border-r-0 relative overflow-hidden p-2 md:py-4">
              <div class="absolute inset-0 w-full h-full">
                <NuxtImg 
                  src="/image/ReferencePrice/bg_process2.png" 
                  alt="TranDuc Homes" 
                  aria-label="TranDuc Homes" 
                  class="w-full h-auto md:h-full object-cover"
                ></NuxtImg>
              </div>
              <div class="flex flex-col items-start justify-end w-full h-full gap-2 md:border-r md:border-orange-500">
                <NuxtImg src="/image/ReferencePrice/logo_process.png" alt="TranDuc Homes" aria-label="TranDuc Homes" width="100%" class="h-6 md:h-16 object-contain"></NuxtImg>
                <h2 class="text-base md:text-4xl font-bold uppercase">{{ $t('app.process.process') }}</h2>
              </div>
            </div>
            <!-- Process Description -->
            <div class="col-span-12 md:col-span-8 flex flex-col w-full h-full gap-4 p-4 m-0 md:ml-10">
              <!-- Image -->
              <div>
                <NuxtImg src="/image/ReferencePrice/process.png" alt="Process" aria-label="Process" width="100%" height="100%" class="object-cover"></NuxtImg>
              </div>
              <!-- Description -->
              <div>
                <ul class="flex flex-col items-start justify-start gap-2">
                  <li class="flex flex-row items-center gap-2">
                    <span class="text-xl"><i aria-hidden="true" class="fas fa-check-circle"></i></span>
                    <span class="text-xs md:text-sm lg:text-base">{{ $t('app.process.days') }}</span>
                  </li>
                  <li class="flex flex-row items-center gap-2">
                    <span class="text-xl" ><i aria-hidden="true" class="fas fa-check-circle"></i></span>
                    <span class="text-xs md:text-sm lg:text-base">{{ $t('app.process.transportation') }}</span>
                  </li>
                  <li class="flex flex-row items-center gap-2">
                    <span class="text-xl" ><i aria-hidden="true" class="fas fa-check-circle"></i></span>
                    <span class="text-xs md:text-sm lg:text-base">{{ $t('app.process.metal') }}</span>
                  </li>
                  <li class="flex flex-row items-center gap-2">
                    <span class="text-xl" ><i aria-hidden="true" class="fas fa-check-circle"></i></span>
                    <span class="text-xs md:text-sm lg:text-base">{{ $t('app.process.upholstery') }}</span>
                  </li>
                  <li class="flex flex-row items-center gap-2">
                    <span class="text-xl" ><i aria-hidden="true" class="fas fa-check-circle"></i></span>
                    <span class="text-xs md:text-sm lg:text-base">{{ $t('app.process.qc') }}</span>
                  </li>
                  <li class="flex flex-row items-center gap-2">
                    <span class="text-xl" ><i aria-hidden="true" class="fas fa-check-circle"></i></span>
                    <span class="text-xs md:text-sm lg:text-base">{{ $t('app.process.warranty') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Relative Project -->
        <div class="flex flex-col justify-center items-center w-full h-full container mx-auto gap-5 py-2">
            <div class="flex flex-col justify-center w-full h-full gap-5">
                <h2 class="text-xl lg:text-3xl text-orange-500">{{ $t('app.process.quotationRelated') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center w-full h-full gap-4">
                    <div class="col-span-1 relative w-full h-full group transition-all duration-500 ease-in-out rounded-lg overflow-hidden" 
                        v-for="project in test?.data.slice(0, 4)" 
                        :key="project.title">
                        <div class="relative">
                            <NuxtImg :src="project.src" alt="Project image" aria-label="projectimage" class="w-full h-auto object-contain" loading="eager" quality="75"/>
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
         <!-- Frequently asked -->
          <div class="w-full h-full container mx-auto">
            <!-- title Frequently -->
            <div class="flex flex-col items-center justify-center w-full h-full py-10 md:py-20 gap-3">
              <h2 class="text-white text-xl md:text-2xl lg:text-4xl">{{ $t('app.process.faq') }}</h2>
              <p class="text-justify font-black text-gray-400 text-sm md:text-base lg:text-xl">{{ $t('app.process.faqDesc') }}</p>
              <p class="text-justify font-thin text-gray-500 text-xs md:text-base lg:text-lg">{{ $t('app.process.tranDuc') }}</p>
            </div>
            <!-- Frequently asked -->
            <div class="grid grid-cols-2 w-full h-full items-center justify-center mb-20 gap-10 md:items-stretch">
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question1') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer1') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question2') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer2') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question3') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer3_1') }}</p>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer3_2') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question4') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer4') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question5') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer5') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question6') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer6') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question7') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer7') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
              <div class="col-span-2 md:col-span-1 flex flex-col items-start justify-start w-full h-full gap-5">
                <h2 class="text-white font-black text-sm md:text-base lg:text-xl">{{ $t('app.process.question8') }}</h2>
                <p class="text-justify text-xs md:text-base lg:text-lg font-thin text-gray-400 leading-normal md:leading-relaxed lg:leading-loose">{{ $t('app.process.answer8') }}</p>
                <div class="w-full bg-gray-500 text-center mx-auto mb-10 z-10" style="height: 1px"></div>
              </div>
            </div>
          </div>
    </div>
</template>

<script setup>
 const { locale } = useI18n();
 const { id } = useRoute().params;

//#region QuyenNC ( gọi api )
const news = ref(null);
 const payload = async() => {
    const data = await $fetch("/api/test");
    news.value = data
 }
 const test = computed(() => news?.value?.find(item => item.locale === locale.value));
//#endregion

//#region QuyenNC ( tạo biến lấy dữ liệu từ data4 )
const project = computed(() => {
  return test?.value?.data4.find(item => item.id === id);
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
 intervalId = setInterval(nextSlide, slideInterval);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
useSeoMeta({
    title: 'Process - Hospitality Furniture',
    ogTitle: 'Process - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/referenceprice/process',
    ogType: 'event',
    ogSiteName: 'Process - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Process - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'Process, Hospitality Furniture',
})
</script>

<style scoped>
.bg-process {
  background-color: #1A1A1A;
}
</style>