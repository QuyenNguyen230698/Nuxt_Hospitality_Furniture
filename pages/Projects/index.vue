<template>
    <div class="bg-black text-white">
      <div v-show="!isLoading" class="flex flex-col w-full h-full">
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
                loading="eager"
                quality="75"
                :key="idx"
                :src="image.src"
                alt="Slide image"
                aria-label="slideimage"
                class="w-1/6 max-h-8 md:max-h-10 lg:max-h-14 min-h-10 md:min-h-12 lg:min-h-14 object-contain"
              />
            </div>
          </div>
          <!-- Previous and Next Buttons -->
          <div class="absolute inset-y-1/2 left-1 flex items-center">
            <button @click="prevSlide" aria-label="prevslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
          </div>
          <div class="absolute inset-y-1/2 right-1 flex items-center">
            <button @click="nextSlide" aria-label="nextslide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
          </div>
        </div>
        <div class="text-center font-thin color-title text-xs md:text-base">We have dedicated over 400 hotel furniture projects for 23 years. Under intesive effort, our mission is to reach client sactifaction.</div>
        <!-- List Projects -->
        <div class="carousel w-full">
          <!-- data 1 -->
          <div v-if="currentPagination === 0" class="carousel-item w-full">
              <div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full h-full gap-4 pt-4 px-4 lg:container">
                  <div class="col-span-1 relative w-full h-full group transition-all duration-500 ease-in-out rounded-lg overflow-hidden" 
                      v-for="project in test?.data" 
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
          <!-- data 2 -->
          <div v-if="currentPagination === 1" class="carousel-item w-full">
              <div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full h-full gap-4 pt-4 px-4 lg:container">
                  <div class="col-span-1 relative w-full h-full group transition-all duration-500 ease-in-out rounded-lg overflow-hidden"
                  v-for="project in test?.data2" :key="project.title">
                  <div class="relative">
                      <NuxtImg :src="project.src" alt="Project image" aria-label="projectimage" class="w-full h-auto object-contain" loading="eager" quality="75"/>
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
          <!-- Pagination -->
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
  import { ref, onMounted, onUnmounted } from 'vue';
  const { locale } = useI18n();
  const isLoading = ref(true);
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
  //#region quyenNC gọi api data
  const newProjects = ref(null);
  const payload = async() => {
    const data = await $fetch("/api/test");
    newProjects.value = data
  }
  const test = computed(() => newProjects?.value?.find(item => item.locale === locale.value));
  //#endregion

  //#region slide logo communicate

  // hàm slide logo communicate
  const slideGroups = [];
  for (let i = 0; i < solution.length; i += 5) {
    slideGroups.push(solution.slice(i, i + 5));
  }

  // set thời gian 3s slide logo communicate
  const currentSlide = ref(0);
  const slideInterval = 3000;

  // hàm next slide logo communicate
  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slideGroups.length;
  }

  // hàm prev slide logo communicate
  function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + slideGroups.length) % slideGroups.length;
  }

  // set thời gian 3s slide logo communicate
  let intervalId;
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
    intervalId = setInterval(nextSlide, slideInterval);
    window.addEventListener('scroll', checkScroll)
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
    window.removeEventListener('scroll', checkScroll)
  });
  useSeoMeta({
    title: 'Projects - Hospitality Furniture',
    ogTitle: 'Projects - Hospitality Furniture',
    description: 'Description',
    ogDescription: 'Description',
    ogImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    ogUrl: 'https://nuxt-hospitality-furniture.vercel.app/projects',
    ogType: 'event',
    ogSiteName: 'Projects - Hospitality Furniture',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Projects - Hospitality Furniture',
    twitterDescription: 'Description',
    twitterImage: 'https://nuxt-hospitality-furniture.vercel.app/_vercel/image?url=%2Fimage%2Flogo%2FTranDuc-homes.png&w=1536&q=75',
    keywords: 'Projects, Hospitality Furniture',
})
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
  .join-item:focus-visible {
    outline: none;
  }
  .btn-outline {
    border-color: transparent;
  }
  </style>
  