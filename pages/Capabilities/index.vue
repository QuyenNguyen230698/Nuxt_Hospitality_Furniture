<template>
    <div>
        <SliceShowCapability/>
        <div class="flex flex-col w-full h-full">
            <!-- Wooden Furniture -->
            <div class="flex flex-col md:flex-row h-full w-full bg-black">
                <div class="w-full md:w-3/5">
                    <img src="/public/image/capability/capWooden.jpg" class="w-full h-fit object-cover ">
                </div>
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.wooden") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.23years") }}
                    </p>
                </div>
            </div>
            <!-- Metal Furniture -->
            <div class="flex flex-col md:flex-row h-full w-full bg-metal">
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.metal") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucMetal") }}
                    </p>
                </div>
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/cap5.jpg" class="w-full h-full object-cover ">
                </div>
            </div>
            <!-- Ulpholstery -->
            <div class="flex flex-col md:flex-row h-full w-full bg-black">
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/capUlpho.jpg" class="w-full h-full object-cover ">
                </div>
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.upholstery") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucUpholstery") }}
                    </p>
                </div>
            </div>
            <!-- Door -->
            <div class="flex flex-col md:flex-row h-full w-full bg-metal">
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.door") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucDoor") }}
                    </p>
                </div>
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/capDoor.jpg" class="w-full h-full object-cover ">
                </div>
            </div>
            <!-- Finishing -->
            <div class="flex flex-col md:flex-row h-full w-full bg-black">
                <div class="w-full md:w-3/5 overflow-hidden" style="height: 500px;">
                    <img src="/public/image/capability/capFinishing.jpg" class="w-full h-full object-cover ">
                </div>
                <div class="w-full md:w-2/5 flex flex-col p-10">
                    <h2 class="text-center text-5xl font-bold p-6 text-white">
                        {{ $t("app.capability.finishing") }}
                    </h2>
                    <div
                        class="w-40 md:w-24 lg:w-20 bg-orange-500 text-center mx-auto mb-5"
                        style="height: 1px"
                    ></div>
                    <p class="text-base color-section text-justify">
                        {{ $t("app.capability.tranDucFinishing") }}
                    </p>
                </div>
            </div>
            <!-- technology & working & packing & loading & shipping -->
            <div class="flex flex-col items-center justify-center p-5 md:p-10 bg-black">
                <!-- Navigation Links -->
                <div class="grid grid-cols-2 md:grid-cols-4 items-center justify-center text-2xl gap-4 mb-10 color-text">
                    <div class="cursor-pointer flex md:justify-center items-center py-2" :class="{ 'text-orange-500 border-b border-orange-500': currentCategory === 'technology' }"><a @click="setImages('technology')" >{{ $t("app.capability.technology") }}</a></div>
                    <div class="cursor-pointer flex md:justify-center items-center py-2" :class="{ 'text-orange-500 border-b border-orange-500': currentCategory === 'working' }"><a @click="setImages('working')" >{{ $t("app.capability.working") }}</a></div>
                    <div class="cursor-pointer flex md:justify-center items-center py-2" :class="{ 'text-orange-500 border-b border-orange-500': currentCategory === 'packing' }"><a @click="setImages('packing')" >{{ $t("app.capability.packing") }}</a></div>
                    <div class="cursor-pointer flex md:justify-center items-center py-2" :class="{ 'text-orange-500 border-b border-orange-500': currentCategory === 'loading' }"><a @click="setImages('loading')" >{{ $t("app.capability.loading") }}</a></div>
                </div>
                <!-- images -->
                <div class="carousel grid grid-cols-2 md:grid-cols-4 gap-4 md:w-4/5 items-center justify-center">
                    <div
                        v-for="(image, index) in images"
                        :key="index"
                        class="carousel-item w-full transition-all duration-300 ease-in-out"
                    >
                        <img :src="image.src" class="w-full max-h-44 min-h-44 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// State to keep track of the current slide
const currentSlide = ref(0);
const currentCategory = ref('technology');

const technology = [
    {src:"/image/capability/tech1.jpg"},
    {src:"/image/capability/tech2.jpg"},
    {src:"/image/capability/tech3.jpg"},
    {src:"/image/capability/tech4.jpg"},
    {src:"/image/capability/tech5.jpg"},
    {src:"/image/capability/tech6.jpg"},
    {src:"/image/capability/tech7.jpg"},
    {src:"/image/capability/tech8.jpg"},
    {src:"/image/capability/tech9.jpg"},
    {src:"/image/capability/tech10.jpg"},
    {src:"/image/capability/tech11.jpg"},
    {src:"/image/capability/tech12.jpg"},
    {src:"/image/capability/tech13.jpg"},
    {src:"/image/capability/tech14.jpg"},
    {src:"/image/capability/tech15.jpg"},
    {src:"/image/capability/tech16.jpg"},
    {src:"/image/capability/tech17.jpg"},
    {src:"/image/capability/tech18.jpg"},
    {src:"/image/capability/tech19.jpg"},
    {src:"/image/capability/tech20.jpg"},
    {src:"/image/capability/tech21.jpg"},
    {src:"/image/capability/tech22.jpg"},
    {src:"/image/capability/tech23.jpg"},
    {src:"/image/capability/tech24.jpg"},
    {src:"/image/capability/tech25.jpg"},
    {src:"/image/capability/tech26.jpg"},
    {src:"/image/capability/tech27.jpg"},
]
const working = [
    {src:"/image/capability/working1.jpg"},
    {src:"/image/capability/working2.jpg"},
    {src:"/image/capability/working3.jpg"},
    {src:"/image/capability/working4.jpg"},
    {src:"/image/capability/working5.jpg"},
    {src:"/image/capability/working6.jpg"},
    {src:"/image/capability/working7.jpg"},
    {src:"/image/capability/working8.jpg"},
    {src:"/image/capability/working9.jpg"},
    {src:"/image/capability/working10.jpg"},
    {src:"/image/capability/working11.jpg"},
]
const packing = [
    {src:"/image/capability/packing1.jpg"},
    {src:"/image/capability/packing2.jpg"},
    {src:"/image/capability/packing3.jpg"},
    {src:"/image/capability/packing4.jpg"},
    {src:"/image/capability/packing5.jpg"},
    {src:"/image/capability/packing6.jpg"},
    {src:"/image/capability/packing7.jpg"},
    {src:"/image/capability/packing8.jpg"},
    {src:"/image/capability/packing9.jpg"},
    {src:"/image/capability/packing10.jpg"},
    {src:"/image/capability/packing11.jpg"},
]
const loading = [
    {src:"/image/capability/loadingShipping1.jpg"},
    {src:"/image/capability/loadingShipping2.jpg"},
    {src:"/image/capability/loadingShipping3.jpg"},
    {src:"/image/capability/loadingShipping4.jpg"},
    {src:"/image/capability/loadingShipping5.jpg"},
    {src:"/image/capability/loadingShipping6.jpg"},
]
// Reference to the currently displayed images
const images = ref(technology);
// Function to change the image category
function setImages(category) {
    currentCategory.value = category;
    currentSlide.value = 0;
    switch (category) {
        case 'technology':
            images.value = technology;
            break;
        case 'working':
            images.value = working;
            break;
        case 'packing':
            images.value = packing;
            break;
        case 'loading':
            images.value = loading;
            break;
    }
}

// Initialize with 'technology' category
setImages('technology');
</script>

<style scoped>
.color-text {
  color: #ababab;
}
.color-section {
  color: #bfbfbf;
}
.bg-metal {
    background-color: #54595E;
}
</style>