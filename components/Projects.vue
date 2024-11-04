<template>
    <div class="flex flex-col w-full h-full bg-black p-0 md:py-6">
        <div class="text-center font-bold">
            <h2 class="text-center text-5xl font-bold p-6 text-white">Projects</h2>
            <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
        </div>
        <div class="container w-full mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-hidden">
            <div v-for="(item,index) in projects" :key="index" class="relative flex justify-center rounded-lg overflow-hidden">
              <img :src="item.src" class="w-full h-auto object-cover">
              <div class="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-1000 flex items-center justify-center">
                <h3 class="text-white text-3xl font-bold z-10">Wood</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {src:'/image/project/project1.jpg'},
    {src:'/image/project/project2.jpg'},
    {src:'/image/project/project3.jpg'},
    {src:'/image/project/project4.jpg'},
    {src:'/image/project/project5.jpg'},
    {src:'/image/project/project6.jpg'},
    {src:'/image/project/project7.jpg'},
    {src:'/image/project/project8.jpg'},
    {src:'/image/project/project9.jpg'},
    {src:'/image/project/project10.jpg'},
    {src:'/image/project/project11.jpg'},
    {src:'/image/project/project12.jpg'},
]
</script>

<style scoped>

</style>