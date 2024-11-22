<template>
    <div class="py-10 md:py-14 border-b border-b-orange-500 relative overflow-hidden">
        <div class="absolute inset-0 h-full bg-slice-2 pointer-events-none z-30"></div>
            <div class="absolute inset-0" :class="imageClass">
              <NuxtImg :src="currentImage.src" alt="Slide Image" aria-label="slideimage" quality="75" loading="eager" :class="imageClass" class="w-full h-full object-cover scale-100" />
            </div>
            <div class="flex flex-col w-full h-full relative z-40">
              <div class="flex flex-col justify-center items-center text-white container m-8 mx-auto">
                <h2 class=" font-black text-center leading-snug tracking-widest uppercase" >
                  <span class="text-3xl lg:text-5xl">{{ $t('app.sliceShow.tophospitality') }}</span>
                  <br>
                  <span class="text-3xl lg:text-5xl">{{ $t('app.sliceShow.inVietnam') }}</span>
                </h2>
              </div>
              <div class="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
                <button @click="showVideo=true" aria-label="factorytour" class="bg-none btn-hover hover:border-white hover:text-white transition-colors duration-300 border-2 w-3/5 md:w-1/3 lg:w-1/4 h-12 lg:h-14 text-lg leading-none border-orange-500 text-orange-500 rounded-md uppercase">{{ $t('app.sliceShow.factorytour') }}</button>
                <button aria-label="capabilityprofile" class="transition-colors duration-300 border-2 w-3/5 md:w-1/3 lg:w-1/4 h-12 lg:h-14 text-lg leading-none btn-hover2 rounded-md uppercase"><NuxtLink to="/capabilityprofile">{{ $t('app.sliceShow.capabilityprofile') }}</NuxtLink></button>
              </div>
            </div>
            <!-- video show -->
            <div>
              <!-- Video Modal -->
              <div v-if="showVideo" class="fixed inset-0 flex items-center justify-center bg-black" style="z-index: 9999;">
                <div class="relative w-full h-full max-w-full max-h-full">
                  <!-- Video Element -->
                  <video
                      ref="videoPlayer"
                  src="https://api.tranduc.com/api/video/TDF_Factory.mp4"
                  controls
                  autoplay
                  class="w-full h-full object-contain"></video>
          
                <!-- Close Button -->
                <button @click="closeVideo" aria-label="closevideo" class="absolute top-4 right-4 text-white text-3xl">&times;</button>
                </div>
              </div>
            </div>
         </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Danh sách hình ảnh
const slideImage = [
  { src: '/image/capability/cap1.jpg' },
  { src: '/image/capability/cap2.jpg' },
  { src: '/image/capability/cap3.jpg' },
  { src: '/image/capability/cap4.jpg' },
  { src: '/image/capability/cap5.jpg' },
]
const showVideo = ref(false);
  // Function to close video and pause playback
  function closeVideo() {
    showVideo.value = false;
    const videoPlayer = document.querySelector('video');
    if (videoPlayer) videoPlayer.pause();
  }
  const positionStore = usePositionStore();

  const currentIndex = ref(0);
  const currentImage = ref(slideImage[currentIndex.value]);
  const imageClass = ref('scale-animation');

  function toggleAutoSlide() {
      positionStore.setAutoSlide(!positionStore.autoSlide);
      if (positionStore.autoSlide === true) {
          currentIndex.value = (currentIndex.value + 1) % slideImage.length;
          currentImage.value = slideImage[currentIndex.value];
          imageClass.value = 'scale-animation';
      }
  }

  onMounted(() => {
      setInterval(toggleAutoSlide, 1500);
  });
</script>

<style scoped>
.bg-slice-2 {
  background-color: #1b1b24;
  opacity: 0.76;
}
/* factorytour button */
.btn-hover:hover {
  background-color: #7A7A7A;
}
/* capabilityprofile button */
.btn-hover2 {
  background-color: #7B7051;
  border-color: #B9A97A;
  color: white
}
.btn-hover2:hover {
  background-color: rgba(255,255,255,0);
  color:#B9A97A;
  border-color: #B9A97A;
}
.fixed {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @keyframes scaleUp {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.scale-animation {
    animation: scaleUp 6s infinite forwards; 
}
</style>