<template>
    <div class="flex flex-col w-full h-full bg-black p-0 py-6">
        <div class="text-center font-bold">
            <h2 class="text-center text-3xl lg:text-5xl font-bold p-6 text-white">{{ $t('app.projects.projects') }}</h2>
            <div class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-10" style="height: 1px"></div>
        </div>
        <div class="container w-full mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 overflow-x-hidden">
            <div v-for="(item,index) in projects" :key="index" class="relative flex justify-center rounded-lg overflow-hidden">
              <NuxtImg quality="75" loading="eager" :src="item.src" :alt="item.id" aria-label="project" class="w-full h-auto object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"></NuxtImg>
              <div class="absolute inset-0 bg-black opacity-0 hover:opacity-90 transition-opacity duration-1000 flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    <h3 class="text-orange-500 text-xs text-center lg:text-xl font-bold z-10 pb-2 md:pb-4 tracking-tighter">{{item.title}}</h3>
                </div>
                <div class="flex gap-2">
                    <nuxt-link to="/projects" aria-label="project" class="hover:text-orange-500 btn btn-circle"><i class="fa-solid fa-magnifying-glass"></i></nuxt-link>
                    <nuxt-link :to="`/projects/detail-products/${item.id}`" aria-label="project" class="hover:text-orange-500 btn btn-circle"><i class="fa-solid fa-link"></i></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
//khởi tạo Arr projects
const projects = [
    {src:'/image/project/project1.jpg',title:'Golden Nugget Lake Charles',id:'Golden'},
    {src:'/image/project/project2.jpg',title:'Renaissance Richardson',id:"Renaissance"},
    {src:'/image/project/project3.jpg',title:'Hyatt Centric Fishermans Wharf',id:"Hyatt"},
    {src:'/image/project/project4.jpg',title:'Kimpton Charlotte',id:"Kimpton"},
    {src:'/image/project/project5.jpg',title:'Beekman new york hotel room',id:"Beekman"},
    {src:'/image/project/project6.jpg',title:'Line Dc Hotel',id:"Line"},
    {src:'/image/project/project7.jpg',title:'Fairmont Claremont',id:"Fairmont"},
    {src:'/image/project/project8.jpg',title:'Marriott Dallas Texas',id:"Marriott"},
    {src:'/image/project/project9.jpg',title:'Conrad Miami',id:"Conrad"},
    {src:'/image/project/project10.jpg',title:'Tampa Marriott Waterside',id:"Tampa"},
    {src:'/image/project/project11.jpg',title:'Godfrey Illinois',id:"Godfrey"},
    {src:'/image/project/project12.jpg',title:'Hilton Grand Islander',id:"Hilton"},
]
</script>

<style scoped>

</style>