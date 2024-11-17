<template>
    <div>
        <SliceShowMetal/>
        <!-- PVD -->
        <div class="bg-wooden1 bg-fixed p-4 lg:py-20 relative">
          <div class="absolute inset-0 bg-black opacity-40 h-full w-full"></div>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-5 w-full h-full">
          <div class="lg:w-1/2 w-full flex flex-col items-center justify-center px-0 lg:px-10 overflow-hidden">
            <!-- Carousel -->
          <div class="carousel w-full relative overflow-hidden order-1">
            <div
                v-for="(slide, index) in pvd"
                :key="index"
                class="carousel-item w-fit h-48 md:h-72 lg:h-96 transition-transform duration-700"
                :style="{ transform: `translateX(-${currentSlideDesks * 100}%)` }"
            >
                <NuxtImg quality="75" loading="eager" :src="slide.src" alt="Slide image" aria-label="slideimage" class="w-full"></NuxtImg>
            </div>
            <div class="absolute inset-y-1/2 left-5 flex items-center">
                <button @click="prevSlideDesks" aria-label="prevslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
            </div>
            <div class="absolute inset-y-1/2 right-5 flex items-center">
                <button @click="nextSlideDesks" aria-label="nextslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
            </div>
            </div>

            <!-- Thumbnails -->
            <div class="flex justify-center mt-5 space-x-2 order-2 z-10">
            <div
                v-for="(slide, index) in pvd"
                :key="'thumb-' + index"
                @click="currentSlideDesks = index"
                class="w-20 h-20 border-2 cursor-pointer overflow-hidden"
                :class="{ 'border-orange-500': currentSlideDesks === index, 'border-transparent': currentSlideDesks !== index }"
            >
                <NuxtImg quality="75" loading="eager" :src="slide.src" alt="Thumbnail" aria-label="thumbnail" class="w-full h-full object-cover"></NuxtImg>
            </div>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col items-center justify-center lg:w-1/2 w-full h-full p-5 container mx-auto order-3 z-10">
          <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">
            {{ $t('app.metalfurniture.pvdCoating') }}
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
          <p class="text-base color-text text-justify mb-5 leading-loose">
            {{ $t('app.metalfurniture.pvdDescription') }}
          </p>
        </div>
      </div>
      </div>
      <!-- Glass -->
      <div class="bg-wooden2 bg-fixed p-4 lg:py-20">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-5 w-full h-full ">
          <div class="lg:w-1/2 w-full flex flex-col items-center justify-center px-0 lg:px-10 overflow-hidden order-1 lg:order-2">
            <!-- Carousel -->
          <div class="carousel w-full relative overflow-hidden">
            <div
                v-for="(slide, index) in glass"
                :key="index"
                class="carousel-item w-fit h-48 md:h-72 lg:h-96 transition-transform duration-700"
                :style="{ transform: `translateX(-${currentSlideDressers * 100}%)` }"
            >
                <NuxtImg quality="75" loading="eager" :src="slide.src" alt="Slide image" aria-label="slideimage" class="w-full"></NuxtImg>
            </div>
            <div class="absolute inset-y-1/2 left-5 flex items-center">
                <button @click="prevSlideDressers" aria-label="prevslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
            </div>
            <div class="absolute inset-y-1/2 right-5 flex items-center">
                <button @click="nextSlideDressers" aria-label="nextslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
            </div>
            </div>

            <!-- Thumbnails -->
            <div class="flex justify-center mt-5 space-x-2">
            <div
                v-for="(slide, index) in glass"
                :key="'thumb-' + index"
                @click="currentSlideDressers = index"
                class="w-20 h-20 border-2 cursor-pointer overflow-hidden"
                :class="{ 'border-orange-500': currentSlideDressers === index, 'border-transparent': currentSlideDressers !== index }"
            >
                <NuxtImg quality="75" loading="eager" :src="slide.src" alt="Thumbnail" aria-label="thumbnail" class="w-full h-full object-cover"></NuxtImg>
            </div>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col items-center justify-center lg:w-1/2 w-full h-full p-5 container mx-auto order-2 lg:order-1">
          <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">
            {{ $t('app.metalfurniture.glass') }}
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
          <p class="text-base color-text text-justify mb-5 leading-loose">
            {{ $t('app.metalfurniture.glassDescription') }}
          </p>
        </div>
      </div>
      </div>
      <!-- Timber -->
      <div class="bg-wooden1 bg-fixed p-4 lg:py-20 relative">
        <div class="absolute inset-0 bg-black opacity-40 h-full w-full"></div>
        <div class="flex flex-col lg:flex-row items-center justify-center gap-5 w-full h-full z-10">
          <div class="lg:w-1/2 w-full flex flex-col items-center justify-center px-0 lg:px-10 overflow-hidden order-1">
            <!-- Carousel -->
          <div class="carousel w-full relative overflow-hidden">
            <div
                v-for="(slide, index) in timber"
                :key="index"
                class="carousel-item w-fit h-48 md:h-72 lg:h-96 transition-transform duration-700"
                :style="{ transform: `translateX(-${currentSlideTables * 100}%)` }"
            >
                <NuxtImg quality="75" loading="eager" :src="slide.src" alt="Slide image" aria-label="slideimage" class="w-full"></NuxtImg>
            </div>
            <div class="absolute inset-y-1/2 left-5 flex items-center">
                <button @click="prevSlideTables" aria-label="prevslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
            </div>
            <div class="absolute inset-y-1/2 right-5 flex items-center">
                <button @click="nextSlideTables" aria-label="nextslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
            </div>
            </div>

            <!-- Thumbnails -->
            <div class="flex justify-center mt-5 space-x-2 z-10">
            <div
                v-for="(slide, index) in timber"
                :key="'thumb-' + index"
                @click="currentSlideTables = index"
                class="w-20 h-20 border-2 cursor-pointer overflow-hidden"
                :class="{ 'border-orange-500': currentSlideTables === index, 'border-transparent': currentSlideTables !== index }"
            >
                <NuxtImg quality="75" loading="eager" :src="slide.src" alt="Thumbnail" aria-label="thumbnail" class="w-full h-full object-cover"></NuxtImg>
            </div>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col items-center justify-center lg:w-1/2 w-full h-full p-5 container mx-auto order-2 z-10">
          <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">
            {{ $t('app.metalfurniture.timberDecor') }}
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
          <p class="text-base color-text text-justify mb-5 leading-loose">
            {{ $t('app.metalfurniture.timberDescription') }}
          </p>
        </div>
      </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Khởi tạo mảng hình ảnh
const pvd = [
  { src: "/image/capability/Metal/pvd1.jpg" },
  { src: "/image/capability/Metal/pvd2.jpg" },
  { src: "/image/capability/Metal/pvd3.jpg" },
  { src: "/image/capability/Metal/pvd4.jpg" },
  { src: "/image/capability/Metal/pvd5.jpg" },
  { src: "/image/capability/Metal/pvd6.jpg" },
];
const glass = [
  { src: "/image/capability/Metal/glass1.jpg" },
  { src: "/image/capability/Metal/glass2.jpg" },
  { src: "/image/capability/Metal/glass3.jpg" },
  { src: "/image/capability/Metal/glass4.jpg" },
];
const timber = [
  { src: "/image/capability/Metal/timber1.jpg" },
  { src: "/image/capability/Metal/timber2.jpg" },
  { src: "/image/capability/Metal/timber3.jpg" },
  { src: "/image/capability/Metal/timber4.jpg" },
  { src: "/image/capability/Metal/timber5.jpg" },
  { src: "/image/capability/Metal/timber6.jpg" }
];

// Khởi tạo các biến
const currentSlideDesks = ref(0);
const currentSlideDressers = ref(0);
const currentSlideTables = ref(0);
const slideInterval = 3000;

// Hàm chuyển slide cho desks
function nextSlideDesks() {
  currentSlideDesks.value = (currentSlideDesks.value + 1) % pvd.length;
}
function prevSlideDesks() {
  currentSlideDesks.value = (currentSlideDesks.value - 1 + pvd.length) % pvd.length;
}

// Hàm chuyển slide cho dressers
function nextSlideDressers() {
  currentSlideDressers.value = (currentSlideDressers.value + 1) % glass.length;
}
function prevSlideDressers() {
  currentSlideDressers.value = (currentSlideDressers.value - 1 + glass.length) % glass.length;
}

// Hàm chuyển slide cho tables
function nextSlideTables() {
  currentSlideTables.value = (currentSlideTables.value + 1) % timber.length;
}

function prevSlideTables() {
  currentSlideTables.value = (currentSlideTables.value - 1 + timber.length) % timber.length;
}

let intervalIdDesks;
let intervalIdDressers;
let intervalIdTables;

onMounted(() => {
  intervalIdDesks = setInterval(nextSlideDesks, slideInterval);
  intervalIdDressers = setInterval(nextSlideDressers, slideInterval);
  intervalIdTables = setInterval(nextSlideTables, slideInterval);
});

onUnmounted(() => {
  clearInterval(intervalIdDesks);
  clearInterval(intervalIdDressers);
  clearInterval(intervalIdTables);
});
useSeoMeta({
    title: 'Metal Furniture - Hospitality Furniture',
    ogTitle: 'Metal Furniture - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/capabilities/metalfurniture',
    ogType: 'event',
    ogSiteName: 'Metal Furniture - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Metal Furniture - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'Metal Furniture, Hospitality Furniture',
})
</script>

<style scoped>
.bg-wooden1 {
  background-image: url("/image/capability/Wooden/bgwooden1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg-wooden2 {
  background-image: url("/image/capability/Wooden/bgwooden2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.color-text {
  color: #ababab;
}
.bg-solution {
  background-color: #0f0f0f;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}
</style>