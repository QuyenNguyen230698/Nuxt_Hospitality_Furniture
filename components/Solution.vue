<template>
      <div class="bg-black p-4 lg:p-0">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-5 bg-solution w-full h-full">
          <!-- Carousel -->
          <div class="carousel w-full relative overflow-hidden order-1 lg:order-2">
            <div v-for="(slide, index) in solution" :key="index" class="carousel-item w-full transition-transform duration-700" 
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <img :src="slide.src" alt="Slide image" class="w-full" />
            </div>
            <div class="absolute inset-y-1/2 left-5 flex items-center">
              <button @click="prevSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
            </div>
            <div class="absolute inset-y-1/2 right-5 flex items-center">
              <button @click="nextSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col items-center justify-center w-full h-full p-5 container mx-auto order-2 lg:order-1">
          <h2 class="text-center text-5xl font-bold p-6 text-white">
            <a href="/aboutus">{{ $t('app.solution.onestopsolution') }}</a>
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
          <p class="text-sm color-text text-justify mb-5 leading-loose">
            {{ $t('app.solution.established') }}
          </p>
          <button
            class="bg-none button-solution text-base px-5 py-1 rounded-md"
          >
            <a href="/aboutus">{{ $t('app.solution.moredetails') }}</a>
          </button>
        </div>
      </div>
      </div>
</template>

<script setup>
// khởi tạo Arr hình ảnh
const solution = [
  { src: "/image/slice/slice1.jpg" },
  { src: "/image/slice/slice2.jpg" },
  { src: "/image/slice/slice3.jpg" },
  { src: "/image/slice/slice4.jpg" },
];
//#region QuyenNC ( khởi tạo các biến )
const currentSlide = ref(0);
const slideInterval = 3000; 
//#endregion

//#region QuyenNC ( hàm chuyển slide )
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % solution.length;
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + solution.length) % solution.length;
}
//#endregion


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
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}
</style>