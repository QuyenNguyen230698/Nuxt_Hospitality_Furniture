<template>
    <div class="py-10 md:py-14 border-b border-b-orange-500 relative overflow-hidden">
        <div class="absolute inset-0 h-full bg-slice-2 pointer-events-none z-30"></div>
            <div class="absolute inset-0 bg-slice" :class="{ 'animate-scale': scaleAnimate }" :style="{ backgroundImage: `url(${currentImage.src})` }"></div>
            <div class="flex flex-col w-full h-full relative z-40">
              <div class="flex flex-col justify-center items-center text-white container m-8 mx-auto">
                <h2 class=" font-black text-center leading-snug tracking-widest uppercase" >
                  <span class="text-3xl lg:text-5xl">{{ $t('app.woodenfurniture.woodenFurniture') }}</span>
                </h2>
              </div>
              <div class="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                <button @click="showVideo=true" class="bg-none btn-hover hover:border-white hover:text-white transition-colors duration-300 border-2 w-2/5 md:w-2/6 lg:w-1/5 h-10 lg:h-12 text-md leading-none border-orange-500 text-orange-500 rounded-md uppercase">{{ $t('app.sliceShow.factorytour') }}</button>
                <button class="transition-colors duration-300 border-2 w-2/5 md:w-2/6 lg:w-1/5 h-10 lg:h-12 text-md leading-none btn-hover2 rounded-md uppercase"><a href="/capabilityprofile">{{ $t('app.sliceShow.capabilityprofile') }}</a></button>
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
                <button @click="closeVideo" class="absolute top-4 right-4 text-white text-3xl">&times;</button>
                </div>
              </div>
            </div>
         </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Danh sách hình ảnh
const slideImage = [
  { src: '/image/capability/wooden/wooden1.jpg' },
  { src: '/image/capability/wooden/wooden2.jpg' },
  { src: '/image/capability/wooden/wooden3.jpg' },
  { src: '/image/capability/wooden/wooden4.jpg' },
]
//#region QuyenNC ( khởi tạo các biến )
const scaleAnimate = ref(true)
const currentImage = ref(slideImage[0])
const showVideo = ref(false);
let currentIndex = 0
const offScale = () => {
  scaleAnimate.value = false
}
//#endregion
  // Function to close video and pause playback
  function closeVideo() {
    showVideo.value = false;
    const videoPlayer = document.querySelector('video');
    if (videoPlayer) videoPlayer.pause();
  }
// Khởi tạo hàm để thay đổi hình ảnh
function changeImage() {
  currentIndex = (currentIndex + 1) % slideImage.length
  currentImage.value = slideImage[currentIndex]
  scaleAnimate.value = true
}
// setInterval để thay đổi hình ảnh và tắt/ bật animation
onMounted(() => {
    setInterval(changeImage, 3000)
    setInterval(offScale, 2990)

})
</script>

<style scoped>
.bg-slice {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
/* Tự động scale trong 3 giây */
.animate-scale {
  animation: scaleUp 3s ease-in-out forwards; 
}
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
    transform: scale(1); /* Kích thước ban đầu */
  }
  100% {
    transform: scale(1.2); /* Phóng to 1.2 lần */
  }
}
</style>