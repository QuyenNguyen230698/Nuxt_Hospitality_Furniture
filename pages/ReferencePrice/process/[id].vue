<template>
    <div>
        <h1>Process</h1>
        <h2>{{ id }}</h2>
        <div class="flex flex-row">
            <div class="w-1/4">
                <NuxtImg :src="currentImage.src" alt="Slide Image"
                         quality="75"
                         
                         class="w-full h-auto transition-transform ease-in-out duration-3000 scale-100" />
            </div>
            <div class="w-1/4">
                <NuxtImg src="/image/project/project4.jpg" alt="Slide Image"
                         quality="75"
                         :class="imageClass" 
                         class="w-full h-auto transition-transform ease-in-out duration-3000" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { id } = useRoute().params;
const positionStore = usePositionStore();
console.log(positionStore.autoSlide);
console.log(positionStore.autoScale);

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

function toggleAutoSlide() {
    positionStore.setAutoSlide(!positionStore.autoSlide);
    if (positionStore.autoSlide) {
        currentIndex.value = (currentIndex.value + 1) % slideImage.length;
        currentImage.value = slideImage[currentIndex.value];
    }
}

const imageClass = ref('scale-animation');

function toggleScaleEffect() {
    if (positionStore.autoScale === true) {
        imageClass.value = 'scale-animation';
    } else {
        imageClass.value = 'scale-100';
    }
    positionStore.setAutoScale(!positionStore.autoScale);
}

// Call toggleScaleEffect every 3 seconds when component is mounted
onMounted(() => {
    setInterval(toggleScaleEffect, 3000);
});

</script>

<style scoped>
@keyframes scaleUp {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.scale-animation {
    animation: scaleUp 3s ease-in-out forwards; 
}
</style>