<template>
    <div class="bg-black text-white">
      <SliceShowProject />
      <!-- slide communicate -->
      <div class="carousel w-full relative overflow-hidden bg-word">
        <!-- Iterate over each group of 5 images (4 slides total) -->
        <div
          v-for="(slideGroup, index) in slideGroups"
          :key="index"
          class="carousel-item w-full h-auto transition-transform duration-700 py-2 md:py-4 lg:py-6"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div class="flex w-full h-full justify-center items-center gap-2">
            <!-- Display 5 images in each slide -->
            <NuxtImg
              v-for="(image, idx) in slideGroup"
              :key="idx"
              :src="image.src"
              alt="Slide image"
              class="w-1/6 max-h-8 md:max-h-10 lg:max-h-14 min-h-10 md:min-h-12 lg:min-h-14 object-contain"
            />
          </div>
        </div>
        <!-- Previous and Next Buttons -->
        <div class="absolute inset-y-1/2 left-1 flex items-center">
          <button @click="prevSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
        </div>
        <div class="absolute inset-y-1/2 right-1 flex items-center">
          <button @click="nextSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
        </div>
      </div>
      <div class="text-center font-thin color-title text-xs md:text-base">We have dedicated over 400 hotel furniture projects for 23 years. Under intesive effort, our mission is to reach client sactifaction.</div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
            <div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full h-full gap-4 p-4 lg:container">
                <div class="col-span-1 relative w-full h-full group transition-all duration-500 ease-in-out rounded-lg overflow-hidden" 
                    v-for="project in test?.data" 
                    :key="project.title">
                <div class="relative">
                    <NuxtImg :src="project.src" alt="Project image" class="w-full h-auto object-contain" />
                    <div class="absolute inset-0 bg-black opacity-30"></div>
                </div>
                <div class="absolute bottom-10 container mx-auto p-4 h-1/5 transition-all duration-1000 ease-in-out">
                    <p class="text-justify text-sm md:text-base lg:text-lg font-thin color-title">{{ project.title }}</p>
                </div>
                <div class="absolute inset-0 hidden group-hover:flex justify-center items-center p-4 bg-black bg-opacity-50 transition-all duration-1000 ease-in-out">
                    <h3 class="hover:text-orange-500 cursor-pointer transition-all duration-500 ease-in-out text-xl">{{ $t("app.referenceprice.detail") }}</h3>
                </div>
                </div>
            </div>
        </div>
        <div id="item2" class="carousel-item w-full">
            <div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full h-full gap-4 p-4 lg:container">
                <div class="col-span-1 relative w-full h-full group transition-all duration-500 ease-in-out rounded-lg overflow-hidden"
                 v-for="project in test?.data2" :key="project.title">
                <div class="relative">
                    <NuxtImg :src="project.src" alt="Project image" class="w-full h-auto object-contain" />
                    <div class="absolute inset-0 bg-black opacity-30"></div>
                </div>
                <div class="absolute bottom-10 container mx-auto p-4 h-1/5 transition-all duration-1000 ease-in-out">
                    <p class="text-justify text-sm md:text-base lg:text-lg font-thin color-title">{{ project.title }}</p>
                </div>
                <div class="absolute inset-0 hidden group-hover:flex justify-center items-center p-4 bg-black bg-opacity-50 transition-all duration-1000 ease-in-out">
                    <h3 class="hover:text-orange-500 cursor-pointer transition-all duration-500 ease-in-out text-xl">{{ $t("app.referenceprice.detail") }}</h3>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  const { locale } = useI18n();
  // Image array
  const solution = [
    { src: "/image/communicate/1-Four-Season.png" },
    { src: "/image/communicate/2-Hyatt.png" },
    { src: "/image/communicate/3-Marriott_Logo.png" },
    { src: "/image/communicate/4-Sheraton-hotels-resorts-2-logo.png" },
    { src: "/image/communicate/5-ConradHotelsLogo.png" },
    { src: "/image/communicate/6-Fairmont_Logo.png" },
    { src: "/image/communicate/7-Ritz-carlton-1-logo-png-transparent.png" },
    { src: "/image/communicate/8-HiltonHotelsLogo.png" },
    { src: "/image/communicate/9-Kimpton-hotels-restaurants-logo-kimpton-hotels-restaurants-logo.png" },
    { src: "/image/communicate/10-Renaissance-hotels-resorts-logo-png-transparent.png" },
    { src: "/image/communicate/11-DoubletreeLogo.png" },
    { src: "/image/communicate/12-Westin.png" },
    { src: "/image/communicate/13-Embassy-suites-hotels-logo-png-transparent-embassy-suites.png" },
    { src: "/image/communicate/14-Flamingo_CUN-01_Sin_fondo.png" },
    { src: "/image/communicate/15-Graduate.png" },
    { src: "/image/communicate/16-Golden-Nugget.png" },
    { src: "/image/communicate/17-Delta_Hotels_logo.png" },
    { src: "/image/communicate/18-Aloft-Sunnyvale.png" },
    { src: "/image/communicate/19Postoak-stacked-white.png" },
    { src: "/image/communicate/20-The-Wink.png" },
  ];

  const newProjects = ref(null);

  const payload = async() => {
    const data = await $fetch("/api/test");
    newProjects.value = data
  }

  const test = computed(() => newProjects?.value?.find(item => item.locale === locale.value));

  // Divide solution array into groups of 5 images for each slide
  const slideGroups = [];
  for (let i = 0; i < solution.length; i += 5) {
    slideGroups.push(solution.slice(i, i + 5));
  }
  
  // Current slide and interval for auto slide change
  const currentSlide = ref(0);
  const slideInterval = 3000;
  
  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slideGroups.length;
  }
  function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + slideGroups.length) % slideGroups.length;
  }
  
  let intervalId;
  
  onMounted(() => {
    intervalId = setInterval(nextSlide, slideInterval);
    payload();
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
  });
  </script>
  
  <style scoped>
  .bg-word {
    background-image: url("/public/image/logo/The-World-Map-scaled.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .color-title {
    color: #FFFFFF8A
  }
  </style>
  