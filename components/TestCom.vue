<template>
  <Flipbook class="flipbook" :pages="['https://upload.wikimedia.org/wikipedia/commons/9/95/Latin_G.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJKjsKDzUnQUP7sPcIiKWtLbWy9WbeUg0Yw&s','https://www.planerium.com/wp-content/uploads/2020/11/alphabet-coloring-page-english-letter-G-capital-planerium.jpg']" />
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