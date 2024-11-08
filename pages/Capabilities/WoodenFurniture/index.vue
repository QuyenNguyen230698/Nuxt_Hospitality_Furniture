<template>
    <div>
        <SliceShowWooden/>
        <div class="bg-black p-4 lg:py-20">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-5 w-full h-full">
          <div class="lg:w-1/2 w-full flex flex-col items-center justify-center px-0 lg:px-10 overflow-hidden">
            <!-- Carousel -->
          <div class="carousel w-full relative overflow-hidden order-1">
            <div
                v-for="(slide, index) in desks"
                :key="index"
                class="carousel-item w-fit h-96 transition-transform duration-700"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
                <img :src="slide.src" alt="Slide image" class="w-full" />
            </div>
            <div class="absolute inset-y-1/2 left-5 flex items-center">
                <button @click="prevSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
            </div>
            <div class="absolute inset-y-1/2 right-5 flex items-center">
                <button @click="nextSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
            </div>
            </div>

            <!-- Thumbnails -->
            <div class="flex justify-center mt-5 space-x-2 order-2 ">
            <div
                v-for="(slide, index) in desks"
                :key="'thumb-' + index"
                @click="currentSlide = index"
                class="w-20 h-20 border-2 cursor-pointer overflow-hidden"
                :class="{ 'border-orange-500': currentSlide === index, 'border-transparent': currentSlide !== index }"
            >
                <img :src="slide.src" alt="Thumbnail" class="w-full h-full object-cover" />
            </div>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col items-center justify-center lg:w-1/2 w-full h-full p-5 container mx-auto order-3">
          <h2 class="text-center text-5xl font-bold p-6 text-white">
            {{ $t('app.woodenfurniture.desks') }}
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
          <p class="text-base color-text text-justify mb-5 leading-loose">
            {{ $t('app.woodenfurniture.eachCustom') }}
          </p>
        </div>
      </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// Khởi tạo mảng hình ảnh
const desks = [
  { src: "/image/capability/Wooden/desk1.jpg" },
  { src: "/image/capability/Wooden/desk2.jpg" },
  { src: "/image/capability/Wooden/desk3.jpg" },
  { src: "/image/capability/Wooden/desk4.jpg" },
  { src: "/image/capability/Wooden/desk5.jpg" },
  { src: "/image/capability/Wooden/desk6.jpg" },
  { src: "/image/capability/Wooden/desk7.jpg" },
];

// Khởi tạo các biến
const currentSlide = ref(0);
const slideInterval = 3000;

// Hàm chuyển slide
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % desks.length;
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + desks.length) % desks.length;
}

let intervalId;

onMounted(() => {
  intervalId = setInterval(nextSlide, slideInterval);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
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