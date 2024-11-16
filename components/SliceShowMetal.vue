<template>
    <div class="py-10 md:py-14 border-b border-b-orange-500 relative overflow-hidden h-60 md:h-80 lg:h-96">
      <div class="absolute inset-0 h-full bg-slice-2 pointer-events-none z-30"></div>
            <div class="absolute inset-0" :class="imageClass">
              <NuxtImg :src="currentImage.src" alt="Slide Image" quality="75" loading="eager" :class="imageClass" class="w-full h-full object-cover scale-100" />
            </div>
            <div class="flex w-full h-full relative z-40">
              <div class="flex justify-center items-center text-white container m-8 mx-auto">
                <h2 class=" font-black text-center leading-snug tracking-widest uppercase" >
                  <span class="text-3xl lg:text-5xl">{{ $t('app.metalfurniture.metalFurniture') }}</span>
                </h2>
              </div>
            </div>
         </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Danh sách hình ảnh
const slideImage = [
  { src: '/image/capability/Metal/slideMetal.jpg' },
  { src: '/image/capability/Metal/slideMetal2.jpg' },
  { src: '/image/capability/Metal/slideMetal3.jpg' },
  { src: '/image/capability/Metal/slideMetal4.jpg' },
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
  98% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.scale-animation {
    animation: scaleUp 3s infinite forwards; 
}
</style>