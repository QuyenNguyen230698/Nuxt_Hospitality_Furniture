<template>
    <div class="py-10 md:py-14 border-b border-b-orange-500 relative overflow-hidden h-60 md:h-80 lg:h-96">
        <div class="absolute inset-0 h-full bg-slice-2 pointer-events-none z-30"></div>
            <div class="absolute inset-0 bg-slice" :class="{ 'animate-scale': scaleAnimate }" :style="{ backgroundImage: `url(${currentImage.src})` }"></div>
            <div class="flex w-full h-full relative z-40">
              <div class="flex justify-center items-center text-white container m-8 mx-auto">
                <h2 class=" font-black text-center leading-snug tracking-widest uppercase" >
                  <span class="text-3xl lg:text-5xl">{{ $t('app.finishing.finishing') }}</span>
                </h2>
              </div>
            </div>
         </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Danh sách hình ảnh
const slideImage = [
  { src: '/image/capability/Finishing/slide1.jpg' },
  { src: '/image/capability/Finishing/slide2.jpg' },
  { src: '/image/capability/Finishing/slide3.jpg' }
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