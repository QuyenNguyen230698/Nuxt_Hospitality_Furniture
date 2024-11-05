<template>
    <div class="py-10 md:py-14 border-y border-y-orange-500 relative overflow-hidden">
        <div class="absolute inset-0 h-full bg-slice-2 pointer-events-none z-30"></div>
            <div class="absolute inset-0 bg-slice" :class="{ 'animate-scale': scaleAnimate }" :style="{ backgroundImage: `url(${currentImage.src})` }"></div>
            <div class="flex flex-col w-full h-full relative z-40">
              <div class="flex flex-col justify-center items-center text-white container m-8 mx-auto">
                <h2 class=" font-black text-center leading-snug tracking-widest uppercase" style="line-height: 3.5;">
                  <span class="text-5xl">{{ $t('app.sliceShow.tophospitality') }}</span>
                  <br>
                  <span class="text-5xl">{{ $t('app.sliceShow.inVietnam') }}</span>
                </h2>
              </div>
              <div class="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                <button class="bg-none btn-hover hover:border-white hover:text-white transition-colors duration-300 border-2 w-2/6 lg:w-1/6 h-10 lg:h-12 text-md leading-none border-orange-500 text-orange-500 rounded-md uppercase">{{ $t('app.sliceShow.factorytour') }}</button>
                <button class="transition-colors duration-300 border-2 w-2/6 lg:w-1/6 h-10 lg:h-12 text-md leading-none btn-hover2 rounded-md uppercase">{{ $t('app.sliceShow.capabilityprofile') }}</button>
              </div>
            </div>
         </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Danh sách hình ảnh
const slideImage = [
  { src: '/image/project/project1.jpg' },
  { src: '/image/project/project2.jpg' },
  { src: '/image/project/project3.jpg' },
  { src: '/image/project/project4.jpg' },
  { src: '/image/project/project5.jpg' },
  { src: '/image/project/project6.jpg' },
  { src: '/image/project/project7.jpg' },
  { src: '/image/project/project8.jpg' },
  { src: '/image/project/project9.jpg' },
  { src: '/image/project/project10.jpg' },
  { src: '/image/project/project11.jpg' },
  { src: '/image/project/project12.jpg' },
]
//#region QuyenNC ( khởi tạo các biến )
const scaleAnimate = ref(true)
const currentImage = ref(slideImage[0])
let currentIndex = 0
const offScale = () => {
  scaleAnimate.value = false
}
//#endregion

// Khởi tạo hàm để thay đổi hình ảnh
function changeImage() {
  currentIndex = (currentIndex + 1) % slideImage.length
  currentImage.value = slideImage[currentIndex]
  scaleAnimate.value = true
}
// setInterval để thay đổi hình ảnh và tắt/ bật animation
onMounted(() => {
    setInterval(changeImage, 3000)
    setInterval(offScale, 2995)

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

@keyframes scaleUp {
  0% {
    transform: scale(1); /* Kích thước ban đầu */
  }
  100% {
    transform: scale(1.2); /* Phóng to 1.2 lần */
  }
}
</style>