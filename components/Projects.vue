<template>
    <div class="flex flex-col w-full h-full bg-black p-0 py-6">
        <div class="text-center font-bold">
            <h2 class="text-center text-5xl font-bold p-6 text-white">Projects</h2>
            <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
        </div>
        <div class="container w-full mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-hidden">
            <div v-for="(item,index) in projects" :key="index" class="relative flex justify-center rounded-lg overflow-hidden">
              <img :src="item.src" class="w-full h-auto object-cover">
              <div class="absolute inset-0 bg-black opacity-0 hover:opacity-90 transition-opacity duration-1000 flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    <h3 class="text-orange-500 text-xl font-bold z-10 pb-4">{{item.title}}</h3>
                </div>
                <div class="flex gap-2">
                    <a href="/" class="hover:text-orange-500 btn btn-circle"><i class="fa-solid fa-magnifying-glass"></i></a>
                    <a href="/" class="hover:text-orange-500 btn btn-circle"><i class="fa-solid fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {src:'/image/project/project1.jpg',title:'Golden Nugget Lake Charles'},
    {src:'/image/project/project2.jpg',title:'Renaissance Richardson'},
    {src:'/image/project/project3.jpg',title:'Hyatt Centric Fishermans Wharf'},
    {src:'/image/project/project4.jpg',title:'Kimpton Charlotte'},
    {src:'/image/project/project5.jpg',title:'Beekman new york hotel room'},
    {src:'/image/project/project6.jpg',title:'Line Dc Hotel'},
    {src:'/image/project/project7.jpg',title:'Fairmont Claremont'},
    {src:'/image/project/project8.jpg',title:'Marriott Dallas Texas'},
    {src:'/image/project/project9.jpg',title:'Conrad Miami'},
    {src:'/image/project/project10.jpg',title:'Tampa Marriott Waterside'},
    {src:'/image/project/project11.jpg',title:'Godfrey Illinois'},
    {src:'/image/project/project12.jpg',title:'Hilton Grand Islander'},
]
</script>

<style scoped>

</style>