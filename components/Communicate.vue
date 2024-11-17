<template>
  <div class="bg-word bg-opacity-100">
      <div
        class="flex flex-col md:flex-row justify-center items-center w-full gap-10"
        style="padding: 6% 10% 6% 10%"
      >
        <div
          class="lg:container mx-auto w-full my-3 grid grid-cols-3 md:grid-cols-5 gap-5"
        >
          <div
            v-for="(item, index) in communicate"
            :key="index"
            class="flex items-center justify-center"
          >
            <NuxtImg
              quality="75"
              loading="eager"
              :src="item.src"
              :alt="`client-${index}`"
              aria-label="client"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              class="w-2/3 max-h-20 min-h-20 md:w-1/2 h-auto col-span-1 object-contain hover:scale-110 transition-all duration-300"
            ></NuxtImg>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
const communicate = [
{ src: "/image/communicate/1-Four-Season.png" },
{ src: "/image/communicate/2-Hyatt.png" },
{ src: "/image/communicate/3-Marriott_Logo.png" },
{ src: "/image/communicate/4-Sheraton-hotels-resorts-2-logo.png" },
{ src: "/image/communicate/5-ConradHotelsLogo.png" },
{ src: "/image/communicate/6-Fairmont_Logo.png" },
{ src: "/image/communicate/7-Ritz-carlton-1-logo-png-transparent.png" },
{ src: "/image/communicate/8-HiltonHotelsLogo.png" },
{
  src: "/image/communicate/9-Kimpton-hotels-restaurants-logo-kimpton-hotels-restaurants-logo.png",
},
{
  src: "/image/communicate/10-Renaissance-hotels-resorts-logo-png-transparent.png",
},
{ src: "/image/communicate/11-DoubletreeLogo.png" },
{ src: "/image/communicate/12-Westin.png" },
{
  src: "/image/communicate/13-Embassy-suites-hotels-logo-png-transparent-embassy-suites.png",
},
{ src: "/image/communicate/14-Flamingo_CUN-01_Sin_fondo.png" },
{ src: "/image/communicate/15-Graduate.png" },
{ src: "/image/communicate/16-Golden-Nugget.png" },
{ src: "/image/communicate/17-Delta_Hotels_logo.png" },
{ src: "/image/communicate/18-Aloft-Sunnyvale.png" },
{ src: "/image/communicate/19Postoak-stacked-white.png" },
{ src: "/image/communicate/20-The-Wink.png" },
];
</script>

<style scoped>
.bg-word {
background-image: url("/public/image/logo/The-World-Map-scaled.jpg");
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
}
</style>