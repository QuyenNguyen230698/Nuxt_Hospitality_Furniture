<template>
  <div class="flex items-center justify-center gap-5 w-full h-screen bg-black text-white">
    <h2 class="text-sm md:text-lg lg:text-2xl">No product information yet!</h2>
    <NuxtLink to="/" class="text-orange-500 text-sm md:text-lg lg:text-2xl font-bold underline">Go home</NuxtLink>
  </div>
  <!-- <Flipbook class="flipbook" 
   :pages="['https://upload.wikimedia.org/wikipedia/commons/9/95/Latin_G.png',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJKjsKDzUnQUP7sPcIiKWtLbWy9WbeUg0Yw&s',
   'https://www.planerium.com/wp-content/uploads/2020/11/alphabet-coloring-page-english-letter-G-capital-planerium.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/9/95/Latin_G.png',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJKjsKDzUnQUP7sPcIiKWtLbWy9WbeUg0Yw&s',
   'https://upload.wikimedia.org/wikipedia/commons/9/95/Latin_G.png'
   ]" /> -->
</template>
<script setup>
import Flipbook from 'flipbook-vue'
</script>
<style scoped>
.flipbook {
  width: auto;
  height: 500px;
}
</style>