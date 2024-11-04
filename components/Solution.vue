<template>
      <div class="bg-black p-4 lg:p-0">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-5 bg-solution w-full h-full">
        <div class="hidden lg:block">
          <div class="flex flex-col items-center justify-center w-full h-full container mx-auto">
          <h2 class="text-center text-5xl font-bold p-6 text-white">
            One Stop Solution
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5" style="height: 1px"></div>
          <p class="text-sm color-text text-center mb-5">
            Established in 2001, Tran Duc Furnishings has been specialized in
            exporting luxury hotel furniture which is located in Binh Duong
            province and takes a 50-minute drive from Ho Chi Minh airport. Tran
            Duc Furnishings has become “One Stop Solution” for the hospitality
            furniture industry in house facilities consisting of Wooden factory,
            Upholstery factory, and Metal factory.
          </p>
          <button
            class="bg-none button-solution text-base px-5 py-1 rounded-md"
          >
            More Details
          </button>
        </div>
        </div>
        <div class="flex items-center justify-center lg:justify-start text-white w-full ">
          <div class="carousel w-full overflow-hidden relative ">
            <div
              class="carousel-inner flex transition-transform duration-500"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(item, index) in solution"
                :key="index"
                class="carousel-item w-full flex-shrink-0"
              >
                <img :src="item.src" class="w-full h-auto object-center" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center w-full h-full p-5 container mx-auto lg:hidden">
          <h2 class="text-center text-5xl font-bold p-6 text-white">
            One Stop Solution
          </h2>
          <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
          <p class="text-sm color-text text-center mb-10">
            Established in 2001, Tran Duc Furnishings has been specialized in
            exporting luxury hotel furniture which is located in Binh Duong
            province and takes a 50-minute drive from Ho Chi Minh airport. Tran
            Duc Furnishings has become “One Stop Solution” for the hospitality
            furniture industry in house facilities consisting of Wooden factory,
            Upholstery factory, and Metal factory.
          </p>
          <button
            class="bg-none button-solution text-base px-5 py-1 rounded-md"
          >
            More Details
          </button>
        </div>
      </div>
      </div>
</template>

<script setup>
const solution = [
  { src: "/image/slice/slice1.jpg" },
  { src: "/image/slice/slice2.jpg" },
  { src: "/image/slice/slice3.jpg" },
  { src: "/image/slice/slice4.jpg" },
];

const currentSlide = ref(0);
const slideInterval = 3000; // 3 seconds

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % solution.length;
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