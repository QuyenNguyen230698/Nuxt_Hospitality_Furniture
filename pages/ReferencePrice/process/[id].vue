<template>
    <div class="w-full h-96 bg-black text-gray-300 flex justify-center items-center">
        <h1 class="text-base md:text-2xl lg:text-4xl font-bold text-justify">{{ $t('app.ritz.noProduct') }}</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { id } = useRoute().params;
const positionStore = usePositionStore();

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